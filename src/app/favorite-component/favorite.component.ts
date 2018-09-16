import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('name') name;

  @Output()
  customClick = new EventEmitter();

  userInfo = {
    isLoggedOut: false
  };

  constructor() { }

  ngOnInit() { }

  dummyFunction = function() {
    console.log(this.name);
  };

  logOut = function() {
    this.userInfo.isLoggedOut = true;
    this.customClick.emit(this.userInfo);
  };

}
