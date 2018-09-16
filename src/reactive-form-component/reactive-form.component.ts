import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  amt = 1233124234.765;
  amountModel: any;

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpace,
      UsernameValidator.shouldBeUnique
    ]),
    amount: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9.,]+$')
    ]),
    // password: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.form.get('username');
  }

  get amount() {
    return this.form.get('amount');
  }


  // onBlurMethod() {
  //   console.log(this.amountModel);
  // }

}
