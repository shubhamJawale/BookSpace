import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListServiceService } from 'src/app/services/shopping-list-service.service';
import { StationaryItem } from 'src/app/shared/stationaryItem.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListServiceService) { }
  @ViewChild('inputName') inputNameData: ElementRef | undefined;
  @ViewChild('inputAmmount') inputAmmountData: ElementRef | undefined;


  addButtonClickedMethod() {
    this.shoppingListService.addNewStationary(new StationaryItem(this.inputNameData?.nativeElement.value, this.inputAmmountData?.nativeElement.value))
  }


}
