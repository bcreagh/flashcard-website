import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateFlashcardDialogComponent } from './flashcards/create-flashcard-dialog/create-flashcard-dialog.component';
import { CreateCategoryDialogComponent } from './flashcards/create-category-dialog/create-category-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlashcardsComponent,
    CreateFlashcardDialogComponent,
    CreateCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
  ReactiveFormsModule,
    AppRoutingModule,
  HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateFlashcardDialogComponent,
    CreateCategoryDialogComponent
  ]
})
export class AppModule { }
