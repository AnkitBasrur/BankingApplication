import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  //for login page
  baseUrl:string="http://localhost:9890//registerRest/api";

  addLogin(login:Login){
      return this.httpClient.put(this.baseUrl+"/login/"+login.userid+"/"+login.loginpwd,login);
    
    }
}
