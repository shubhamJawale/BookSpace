import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookServiceService } from 'src/app/services/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[] | undefined;
  constructor(private bookService: BookServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onNewBookClick() {
    console.log('button is clicked')
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
