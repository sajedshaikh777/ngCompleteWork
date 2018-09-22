import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ValidateUrl } from './url.validator';


@Component({
  selector: 'app-complete-reactive-form',
  templateUrl: 'complete-reactive-form.component.html',
  styleUrls: ['complete-reactive-form.component.css']
})
export class CompleteReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }

  public profileForm: any;
  items: FormArray;

  firstNameRequiredError = 'First Name is required.';
  amt: string;

  inputValue: any;

  recurringArrayData: string;
  recurringArray: string[] = ['No', 'Yes'];

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
      lastName: ['', Validators.required],
      websiteUrl: ['', [Validators.required, ValidateUrl]],
      email: ['', [Validators.required, Validators.email]],
      amount: ['', [Validators.required, Validators.pattern('^[0-9,.]+$')]],
      recurring: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$'), Validators.minLength(6)]]
      }),

      items: this.fb.array([this.createItem()])


    });
  }


  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  addItem(): void {
    this.items = this.profileForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(i: number) {
    this.items.removeAt(i);
  }

  onSubmit() {
    console.warn(this.profileForm);
  }

  formatAmount(event) {
    this.inputValue = event.target.value;
    console.warn(this.inputValue);
  }

}
