import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayeeService } from '../payee.service';


@Component({
  selector: 'app-show-beneficiaries',
  templateUrl: './show-beneficiaries.component.html',
  styleUrls: ['./show-beneficiaries.component.css']
})
export class ShowBeneficiariesComponent implements OnInit {

  constructor(private beneficiaryService:PayeeService,private router:Router) { }

  beneficiaryDetails:any;
  
  ngOnInit(): void {
    this.beneficiaryService.getBeneficiaryDetails().subscribe((data)=>{

      console.log(data);
      this.beneficiaryDetails=data;
      console.log(this.beneficiaryDetails);
    })
  }

  deleteRow(beneficiaryaccno:any)
  {
    this.beneficiaryService.deleteBeneficiary(beneficiaryaccno).subscribe(
      (data)=> {console.log(data)}
    )
    this.router.navigate(['beneficiaries']);
   
  }

}
