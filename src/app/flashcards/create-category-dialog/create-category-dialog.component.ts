import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { CategoryService } from '../../category.service';
import { Category } from '../../domain/category';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.css']
})
export class CreateCategoryDialogComponent implements OnInit {

  newCategoryForm = new FormGroup({
    categoryName: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  saveCategory() {
    let category = new Category();
    category.name = this.newCategoryForm.get("categoryName").value;
    this.categoryService.createCategory(category).subscribe(
      () => {
        this.close();
      }
    );
  }

}
