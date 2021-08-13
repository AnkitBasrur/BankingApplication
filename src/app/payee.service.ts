import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payee } from './payee';

@Injectable({
  providedIn: 'root'
})
export class PayeeService {


  constructor(private httpClient: HttpClient) { }
  baseUrl:string = "http://localhost:9887/beneficiaryRest/api";

  //to get all beneficiaries
  getBeneficiaryDetails()
  {
    return this.httpClient.get(this.baseUrl+'/beneficiaries')
  }

  //Post method for adding beneficiaries to backend
  addNewBeneficiary(beneficiary:Payee)
  {
    return this.httpClient.post(this.baseUrl+"/beneficiaries",beneficiary);
  }

  //Delete beneficiary
  deleteBeneficiary(beneficiary:any)
  {
    return this.httpClient.delete(this.baseUrl+"/beneficiaries/"+beneficiary);
  }
}
