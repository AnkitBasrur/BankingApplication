import { Component, OnInit } from '@angular/core';
import { Payee } from '../payee';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
  styleUrls: ['./payee.component.css']
})
export class PayeeComponent implements OnInit {

  bene:Payee;

  constructor(private beneservice:PayeeService) { 
    this.bene= new Payee();
  }

  ngOnInit(): void {
    
  }

  formSubmit(payeeForm:any)
  {
    alert("It worked")
    this.beneservice.addNewBeneficiary(this.bene).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data);
      }
    )
    console.log(payeeForm.value)
  }

}
