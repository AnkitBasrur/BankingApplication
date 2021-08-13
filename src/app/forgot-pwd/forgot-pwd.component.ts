import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { PaymentService } from '../payment.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  requestedOTP: boolean = false;
  allowRequest: boolean = true;
  accNumber: string = '';
  time: number = 10;
  interval :any;
  otp: any;
  otpVerified: boolean;
  hasSubmitted: boolean = false;
  inputOtp: string;
  password: string;
  confirmPassword: string;
  notMatched: boolean;

  constructor(private paymentService: PaymentService) { }

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
    this.paymentService.requestOTP("201").subscribe(otp => {
      this.otp = otp
      console.log(otp)
    });
    this.interval = setInterval(() => {
      this.time--; 
      if(this.time==0){
        this.allowRequest = false;
        this.break();
      }
    }, 1000);
  }

  submitOtp(){
    this.hasSubmitted = true;
    console.log(this.otp, this.inputOtp)
    if(this.otpVerified){
      this.paymentService.forgotPassword(this.accNumber, this.password).subscribe(data => console.log(data))
    }
    if(this.otp==this.inputOtp) 
      this.otpVerified = true
  }

  passwordChange(){
    if(this.password!==this.confirmPassword)
      this.notMatched = true;
    else
      this.notMatched = false;
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
