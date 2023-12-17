import { EventEmitter, Injectable } from '@angular/core';
import { StationaryItem } from '../shared/stationaryItem.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {
  stationaryItemsChange = new EventEmitter<StationaryItem[]>();
  private stationaryItems: StationaryItem[] = [new StationaryItem('pages', 200), new StationaryItem('coverBack', 1)];
  constructor() { }
  getStatotionaryItems() {
    return this.stationaryItems.slice();
  }

  addNewStationary(stationaryItem: StationaryItem) {
    this.stationaryItems.push(stationaryItem);
    this.stationaryItemsChange.emit(this.stationaryItems.slice());
    // console.log(this.stationaryItems)
  }

  addNewStationaryArray(stationaryItemArray: StationaryItem[]) {
    this.stationaryItems.push(...stationaryItemArray)
  }
}
