import { Component, Input } from '@angular/core';
import { Book } from '../../book.model';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  constructor(private bookService: BookServiceService) { }
  @Input() book: Book | undefined;

  onSelected() {
    this.bookService.bookSelected.emit(this.book);
  }

}
