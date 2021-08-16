import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayeeService } from '../payee.service';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-show-beneficiaries',
  templateUrl: './show-beneficiaries.component.html',
  styleUrls: ['./show-beneficiaries.component.css']
})
export class ShowBeneficiariesComponent implements OnInit {

  constructor(private beneficiaryService:PaymentService,private router:Router) { }

  beneficiaryDetails:any;
  
  ngOnInit(): void {
    this.fetchNewData();
  }

  deleteRow(beneficiaryaccno:any)
  {
    this.beneficiaryService.deleteBeneficiary(beneficiaryaccno).subscribe((data) => this.fetchNewData() )   
  }

  fetchNewData(){
    this.beneficiaryService.getAllBeneficiaries(localStorage.getItem("accountNo")).subscribe((data)=>{

      console.log(data);
      this.beneficiaryDetails=data;
      console.log(this.beneficiaryDetails);
    })
  }

}
