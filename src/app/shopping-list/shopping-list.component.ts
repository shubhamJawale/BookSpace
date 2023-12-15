import { Component } from '@angular/core';
import { StationaryItem } from '../shared/stationaryItem.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  stationaryItems: StationaryItem[] = [new StationaryItem('pages', 200), new StationaryItem('coverBack', 1)];

  addNewStationaryEvent(stationaryItem: StationaryItem) {
    this.stationaryItems.push(stationaryItem);
  }
}
