import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Flashcard } from '../../domain/flashcard';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-create-flashcard-dialog',
  templateUrl: './create-flashcard-dialog.component.html',
  styleUrls: ['./create-flashcard-dialog.component.css']
})
export class CreateFlashcardDialogComponent implements OnInit {

  newFlashcardForm = new FormGroup({
    question: new FormControl(''),
    answer: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CreateFlashcardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private flashcardService: FlashcardService
    ) { }

  ngOnInit() {
  }

  close() {
    console.log("asdfds");
    this.dialogRef.close();
  }

  saveFlashcard() {
    let flashcard = new Flashcard();
    flashcard.question = this.newFlashcardForm.get("question").value;
    flashcard.answer = this.newFlashcardForm.get("answer").value;
    this.flashcardService.createFlashCard(flashcard, this.data.categoryId).subscribe(
      () => {
        this.close();
      }
    );
  }

}
