import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[] | undefined;
  constructor(private bookService: BookServiceService) { }
  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
}
