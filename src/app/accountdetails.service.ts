import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountdetailsService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:9889//accountdetailsRest/api";
  
  getAccountDetails(){
    return this.httpClient.get(this.baseUrl+"/accountdetails/34877894567");
  }
}
