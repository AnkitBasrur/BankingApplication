import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:9000/payment/api";

  getAllBeneficiaries(user_acc_no: string){
    return this.httpClient.get(`${this.baseURL}/beneficiaries/${user_acc_no}`)
  }

  requestOTP(user_acc_no: string){
    return this.httpClient.get(`${this.baseURL}/requestOTP/${user_acc_no}`)
  }

  pay(transaction: Transaction){
    return this.httpClient.post(`${this.baseURL}/pay`, transaction)
  }

  forgotPassword(user_acc_no: string, password: string){
    return this.httpClient.put(`${this.baseURL}/forgotPassword/${user_acc_no}/${password}`, user_acc_no)
  }

}
