import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Category } from './domain/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	
	

  constructor(private http: HttpClient) { }
  
	getCategories(): Observable<Category[]> {
		/** let category1 = new Category();
		let category2 = new Category();
		let category3 = new Category();
		
		category1.id = 1;
		category1.name = 'Android';
		category2.id = 2;
		category2.name = 'Pineapple';
		category3.id = 3;
		category3.name = 'orange';
		
		let categories = [category1, category2, category3];
		return of(categories);*/
		
		return this.http.get<Category[]>("http://localhost:8080/Flashcards/categories");
	}
}
