import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { StationaryItem } from 'src/app/shared/stationaryItem.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('inputName') inputNameData: ElementRef | undefined;
  @ViewChild('inputAmmount') inputAmmountData: ElementRef | undefined;
  @Output() addButtonClicked = new EventEmitter<StationaryItem>();


  addButtonClickedMethod() {
    this.addButtonClicked.emit(new StationaryItem(this.inputNameData?.nativeElement.value, this.inputAmmountData?.nativeElement.value))
  }


}
