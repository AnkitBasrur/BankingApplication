import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forgot-uid',
  templateUrl: './forgot-uid.component.html',
  styleUrls: ['./forgot-uid.component.css']
})
export class ForgotUIDComponent implements OnInit {

  requestedOTP: boolean = false;
  allowRequest: boolean = true;
  accNumber: string = '';
  time: number = 10;
  interval :any;
  constructor() { }

  ngOnInit(): void {
  }

  accountNumber() {
    if(this.accNumber.length==10)
      this.allowRequest = false;
    else
      this.allowRequest = true;
  }
  requestOTP(){
    this.allowRequest = true
    this.time = 10
    this.requestedOTP = true;
    this.interval = setInterval(() => {
      this.time--; 
      if(this.time==0){
        this.allowRequest = false;
        this.break();
      }
    }, 1000);
  }
  break(){
    clearInterval(this.interval);
  }
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
