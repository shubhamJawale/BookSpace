import { Component } from '@angular/core';
import { Book } from './book.model';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  constructor(private bookService: BookServiceService) { }
  selectedBook: Book | undefined;
  ngOnInit() {
    this.bookService.bookSelected.subscribe(
      (book: Book) => {
        this.selectedBook = book;
      }
    );
  }
  onBookSelectItem(book: Book) {
    this.selectedBook = book;
  }
}
