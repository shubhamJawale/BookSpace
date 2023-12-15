import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectNavButton = 'books';

  onFeatureSelect(event: string) {
    this.selectNavButton = event;
  }

}
