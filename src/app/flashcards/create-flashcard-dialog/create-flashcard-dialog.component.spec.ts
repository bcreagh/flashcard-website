import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlashcardDialogComponent } from './create-flashcard-dialog.component';

describe('CreateFlashcardDialogComponent', () => {
  let component: CreateFlashcardDialogComponent;
  let fixture: ComponentFixture<CreateFlashcardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFlashcardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFlashcardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
