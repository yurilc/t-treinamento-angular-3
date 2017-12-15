import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
    constructor() { }
  
    ngOnInit() {
      this.initializeForm();
    }
  
    onSubmit() {
      console.log(this.form.value);
    }
  
    private initializeForm() {
      this.form = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required])
      });
    }
  }
  