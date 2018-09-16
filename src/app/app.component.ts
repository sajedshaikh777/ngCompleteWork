import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myName: Object = {
    firstName: 'Sajed',
    lastName: 'Shaikh'
  };


  getInfoFromFavoriteComponent = function (event) {
    if (event.isLoggedOut === true) {
      alert('Logged Out.');
    } else {
      alert('Still loggedin');
    }
  };
}
