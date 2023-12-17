import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../books/book.model';
import { StationaryItem } from '../shared/stationaryItem.model';
import { ShoppingListServiceService } from './shopping-list-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private shoppingListService: ShoppingListServiceService) { }
  // emmiting the event for the  selecting the book
  bookSelected = new EventEmitter<Book>();

  private books: Array<Book> = [
    new Book("THE RESTRUCTURING vol 1", "PATH WAY TO LIFE, the way of life vol 1", "https://media.istockphoto.com/id/90853880/photo/gilt-edged-book.jpg?s=612x612&w=0&k=20&c=Ntwte1uZb1lR2hAK5e2Z4yQZi2vIEmrBkKufoHTNyyg=", [new StationaryItem('pages', 100), new StationaryItem('hardCover', 1)]),
    new Book("THE RESTRUCTURING vol 2", "PATH WAY TO LIFE, the way of life vol 2", "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg", [new StationaryItem("pages", 200), new StationaryItem('paperCover', 1)])
  ];

  getBooks() {
    return this.books.slice();
  }

  addStationaryToShoppingList(stationaryItems: StationaryItem[]) {
    this.shoppingListService.addNewStationaryArray(stationaryItems);
  }

}
