import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Beneficiary } from '../beneficiary';
import { PaymentService } from '../payment.service';
import { Transaction } from '../transaction';
import { v4 as uuidv4 } from 'uuid';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  fromAccount: string = "593921129498";
  beneficiaries: any;
  otp: any;
  toAccount: any;
  amount: number;
  remarks: string;
  trans_type: string = "NEFT";
  ifsc: string;
  transaction: Transaction;
  today: any = new Date();
  showBeneficiary: boolean = false;
  btnText: string = "Select Beneficiary"

  navigationExtras: NavigationExtras;

  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.paymentService.getAllBeneficiaries(this.fromAccount).subscribe(data => this.beneficiaries = data);
  }

  requestOTP(){
    this.paymentService.requestOTP("201").subscribe(data => this.otp = data);
  }

  setBeneficiary(){
    this.showBeneficiary = !this.showBeneficiary;
    if(this.showBeneficiary)
      this.btnText = "Hide Beneficiary"
    else
      this.btnText = "Show Beneficiary"
  }
  selectBenef(acc_num, ifsc_code){
    this.ifsc = ifsc_code;
    this.toAccount = acc_num;
    this.showBeneficiary = false;
    this.btnText = "Show Beneficiary"
  }
  formSubmit(myForm: NgForm){
    
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = this.today.getFullYear();
    this.today = dd + '/' + mm + '/' + yyyy;

    this.transaction = new Transaction(this.fromAccount, myForm.value.amount, myForm.value.toAccount, myForm.value.ifsc, uuidv4(), myForm.value.trans_type, myForm.value.remarks, this.today, "Debit")
    this.paymentService.pay(this.transaction).subscribe(data => {
      this.navigationExtras = {
        state: {
          data,
          referenceID: this.transaction.transactionId,
          mode: this.transaction.transactionType,
          paidToAccount: this.toAccount,
          amount: this.amount,
          on: this.today,
          remarks: this.remarks,
          fromAccount: this.fromAccount
        }
      };
      this.today = new Date();
      this.router.navigate(['/afterPayment'], this.navigationExtras)
    }
    )
  }

}
