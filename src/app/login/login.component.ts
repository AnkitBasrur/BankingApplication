import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log:Login

  constructor(private loginService:LoginService) {this.log=new Login() }

  ngOnInit(): void {
  }


  formSubmit(loginForm:any)
  {
    console.log(loginForm.value)
    this.loginService.addLogin(this.log).subscribe((data)=>
    console.log(data))
    

  }
    

}
