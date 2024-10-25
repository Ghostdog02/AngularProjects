import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  currentNumber = 0;

  onIntervalFired(firedNumber) {
    this.currentNumber = firedNumber;

  }
}
