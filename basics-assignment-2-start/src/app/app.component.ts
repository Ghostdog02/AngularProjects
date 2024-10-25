import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = null
  isUserName
 
  checkIfUsernameIsNull(){
    if (this.userName == null){
      return true;
    }

    else{

      return false;
    }
  }

  resetUsername(){
    this.userName = null;
  }
}
