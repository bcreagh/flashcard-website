import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../domain/flashcard';

@Component({
	selector: 'app-flashcards',
	templateUrl: './flashcards.component.html',
	styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {

	constructor() { }
	selectedCategory = "None Selected";
	fc: Flashcard = {
	  question: "What is your favourite colour?",
	  answer: "I don't know that"
	}

	categories = ["None Selected", "Java", "C", "C#"];

	ngOnInit() {
	}
	
	onCategorySelected() {
		this.fc.question = 'What is your favourite language?';
		this.fc.answer = this.selectedCategory;
	}
}
