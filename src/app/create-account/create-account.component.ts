import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
    radiocheck: new FormControl('individual', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  constructor() {}

  ngOnInit() {}
}
