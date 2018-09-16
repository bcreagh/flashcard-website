import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../domain/flashcard';
import { CategoryService } from '../category.service';
import { Category } from '../domain/category';
import { FlashcardService } from '../services/flashcard.service';

@Component({
	selector: 'app-flashcards',
	templateUrl: './flashcards.component.html',
	styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {

	constructor(private categoryService: CategoryService, private flashcardService: FlashcardService) { }
	
	selectedCategory: Category = new Category({ id: 0, name: "Select a category... " });	
	currentFlashcardPosition: number = 1;
	numberOfCardsInCurrentCategory: number = 0;
	fc: Flashcard = {
	  question: "What is your favourite colour?",
	  answer: "I don't know that"
	};
	categories: Category[];
	
	getCategories(): void {
		this.categoryService.getCategories().subscribe(categories => this.categories = categories);
	}

	ngOnInit() {
		this.getCategories();
	}
	
	onCategorySelected() {
		this.currentFlashcardPosition = 1;
		this.numberOfCardsInCurrentCategory = 1;
		this.getFlashcard(this.selectedCategory.id, 1);
		this.countNumberOfFlashcardsInCurrentCategory();
	}
	
	getFlashcard(categoryId: number, cardPosition: number) {
		this.flashcardService.getNthFlashcardInCategory(categoryId, cardPosition)
			.subscribe(result => {
				this.fc = result;
			});
	}
	
	countNumberOfFlashcardsInCurrentCategory() {
		this.categoryService.getNumberOfFlashcardsInCategory(this.selectedCategory.id)
			.subscribe(integerResult => {
				this.numberOfCardsInCurrentCategory = integerResult.result;
			});
	}
	
	getNextFlashcard() {
		if(this.currentFlashcardPosition < this.numberOfCardsInCurrentCategory) {
			this.currentFlashcardPosition += 1;
			this.getFlashcard(this.selectedCategory.id, this.currentFlashcardPosition);
		}
	}
}
