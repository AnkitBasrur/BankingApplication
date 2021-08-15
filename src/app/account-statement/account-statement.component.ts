import { Component, OnInit } from '@angular/core';
import { AccountDetailsService } from '../account-details.service';
import { PaymentService } from '../payment.service';
import { Transaction } from '../transaction';

const transaction: Transaction[] = [
  {
    account_no: "593921129498",
    amount: 500,
    toAccountNum: "201",
    toIfscCode: "HDFC0089339929",
    transactionId: "04defb21-3ae5-4e61-95ab-64f320e58968",
    transactionType: "NEFT",
    remarks: "grocery",
    timestamp: "12/08/2021",
    action: "Debit"
},
{
  account_no: "593921129498",
  amount: 500,
  toAccountNum: "201",
  toIfscCode: "HDFC0089339929",
  transactionId: "04defb21-3ae5-4e61-95ab-64f320e58968",
  transactionType: "NEFT",
  remarks: "grocery",
  timestamp: "12/08/2021",
  action: "Debit"
}
]

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  currentBalance: number = 1500;
  displayedColumns: string[] = [ 'Ref No', 'Remarks', 'Date', 'From/To','Credit', 'Debit', 'Mode', 'Closing Balance'];
  dataSource = transaction;

  constructor(private paymentService: PaymentService, private accountDetailsService:AccountDetailsService) { }

  ngOnInit(): void {
    this.accountDetailsService.getAccountDetails(localStorage.getItem('accountNo')).subscribe((data:any)=>{
      this.currentBalance = data.accountBalance;
  })
    this.paymentService.getAccountStatement(localStorage.getItem('accountNo')).subscribe((data:any) => this.dataSource = data.reverse());
  }

}
