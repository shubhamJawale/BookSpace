import { Component } from '@angular/core';
import { StationaryItem } from '../shared/stationaryItem.model';
import { ShoppingListServiceService } from '../services/shopping-list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  constructor(private shoppingService: ShoppingListServiceService) { }
  stationaryItems: StationaryItem[] = [];
  ngOnInit() {
    this.stationaryItems = this.shoppingService.getStatotionaryItems();
    this.shoppingService.stationaryItemsChange.subscribe((stationaryItem: StationaryItem[]) => {
      this.stationaryItems = stationaryItem;
    })
  }

}
