import { Component, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent {
  constructor(private bookService: BookServiceService) { }
  @Input() selectedBookForDetails: Book | undefined;


  addStationaryToShoppingList() {
    this.bookService.addStationaryToShoppingList(this.selectedBookForDetails?.stationaryItem ? this.selectedBookForDetails.stationaryItem : [])
  }

}
