import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent {
  @Input('firstNameRequiredError') firstNameRequired: string;

  constructor(){}

  ngOnInt() {
    
  }
}
