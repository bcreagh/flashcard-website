import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../domain/flashcard';
import { CategoryService } from '../category.service';
import { Category } from '../domain/category';

@Component({
	selector: 'app-flashcards',
	templateUrl: './flashcards.component.html',
	styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {

	constructor(private categoryService: CategoryService) { }
	
	selectedCategory = "None Selected";
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
		this.fc.question = 'What is your favourite language?';
		this.fc.answer = this.selectedCategory;
	}
}
