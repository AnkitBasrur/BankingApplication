import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminlogin } from './adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private httpClient:HttpClient) { }

  //for admin login page
  baseUrl:string="http://localhost:9890/adminRest/api";

  addAdminLogin(adminlogin:Adminlogin){
    return this.httpClient.put(this.baseUrl+"/admin/"+adminlogin.adminId+"/"+adminlogin.adminPwd,adminlogin);
  }
}
