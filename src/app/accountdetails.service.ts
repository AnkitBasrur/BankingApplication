import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class AccountdetailsService {

  constructor(private httpClient:HttpClient) { }

  //for accountdetails
  baseUrl:string="http://localhost:9890//accountdetailsRest/api";
  
  getAccountDetails(){
    return this.httpClient.get(this.baseUrl+"/accountdetails/1028392836");
  }

  



  
}
