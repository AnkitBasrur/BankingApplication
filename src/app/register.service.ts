import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  //for registration page
  baseUrl:string="http://localhost:9890/registerRest/api";

  addRegistration(register:Register){
      return this.httpClient.post(this.baseUrl+"/register",register);
    
    }
}
