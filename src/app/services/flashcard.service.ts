import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flashcard } from '../domain/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private http: HttpClient) { }
  
  getNthFlashcardInCategory(categoryId: number, cardPosition: number) {
	  return this.http.get<Flashcard>("http://localhost:8080/Flashcards/categories/cards?categoryId=" + categoryId + "&cardPosition=" + cardPosition);
  }
}
