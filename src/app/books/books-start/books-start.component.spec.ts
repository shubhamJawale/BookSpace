import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStartComponent } from './books-start.component';

describe('BooksStartComponent', () => {
  let component: BooksStartComponent;
  let fixture: ComponentFixture<BooksStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksStartComponent]
    });
    fixture = TestBed.createComponent(BooksStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
