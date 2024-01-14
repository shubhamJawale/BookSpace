import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookServiceService } from 'src/app/services/book-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
  constructor(private bookService: BookServiceService, private route: ActivatedRoute, private router: Router) { }
  id: number | undefined;

  selectedBookForDetails: Book | undefined;
  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];// casting with plus to number
      this.selectedBookForDetails = this.bookService.getBook(this.id);
    })
  }
  addStationaryToShoppingList() {
    this.bookService.addStationaryToShoppingList(this.selectedBookForDetails?.stationaryItem ? this.selectedBookForDetails.stationaryItem : [])
  }

  onEditClick() {
    this.router.navigate(["edit"], { relativeTo: this.route })
  }

}
