import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details = '';
  showSecretPassword = false;
  // allowDisplayDetails = false;
  // buttonClicks = [];
  // clickNumber = 0;
  log = [];

  onToggleDetails(){
    this.showSecretPassword = !this.showSecretPassword;
    // this.clickNumber++;
    // this.buttonClicks.push(this.clickNumber);
    // this.allowDisplayDetails = (this.allowDisplayDetails === true) ? false : true;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
  }
}
