import { Component, OnInit } from '@angular/core';
import { Payee } from '../payee';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
  styleUrls: ['./payee.component.css']
})
export class PayeeComponent implements OnInit {
  fromAccount = localStorage.getItem('accountNo')
  bene:Payee;

  constructor(private beneservice:PayeeService) { 
    this.bene= new Payee();
  }

  ngOnInit(): void {
    
  }

  formSubmit(payeeForm:any)
  {
    this.bene.accountNo = this.fromAccount
    this.bene.beneficiaryId = Math.floor(Math.random() * 1000000000)+"";
    this.beneservice.addNewBeneficiary(this.bene).subscribe((data)=>{
        console.log(data);
    })
    console.log(payeeForm.value)
  }

}
