import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassword!: FormGroup;
  password: string="";
  constructor(/*private service: any*/) { }

/* changePassword() {
    const {old_password, new_password} = f.value;
    this.serviceVar
      .changePassword({old_password, new_password})
      .subscribe(() => console.log('Success!'), 
                 () => console.log('A problem occurred..'));
  }*/

  ngOnInit(): void {
    this.changePassword= new FormGroup({
      password : new FormControl('',[Validators.required, Validators.minLength(10)])
    })
  }
  formSubmit(myForm: NgForm){
  }
  onLogin(){

  }

}
