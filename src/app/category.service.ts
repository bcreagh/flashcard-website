import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Category } from './domain/category';
import { IntegerResult } from './services/DTO/integer-result';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	
	

  constructor(private http: HttpClient) { }
  
	getCategories(): Observable<Category[]> {		
		return this.http.get<Category[]>("http://localhost:8080/Flashcards/categories");
	}
	
	getNumberOfFlashcardsInCategory(categoryId: number): Observable<IntegerResult> {
		return this.http.get<IntegerResult>("http://localhost:8080/Flashcards/category/count?id=" + categoryId);
	}
}
