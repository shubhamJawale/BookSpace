import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  @Output() bookListItemSelected = new EventEmitter<Book>();
  books: Array<Book> = [
    new Book("THE RESTRUCTURING vol 1", "PATH WAY TO LIFE, the way of life vol 1", "https://media.istockphoto.com/id/90853880/photo/gilt-edged-book.jpg?s=612x612&w=0&k=20&c=Ntwte1uZb1lR2hAK5e2Z4yQZi2vIEmrBkKufoHTNyyg="),
    new Book("THE RESTRUCTURING vol 2", "PATH WAY TO LIFE, the way of life vol 2", "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg")
  ];


  onBookItemSelected(book: Book) {
    this.bookListItemSelected.emit(book);
    // console.log(book)
  }
}
