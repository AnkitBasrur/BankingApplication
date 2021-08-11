import { Component, OnInit } from '@angular/core';
import { Accountdetails } from '../accountdetails';
import { AccountdetailsService } from '../accountdetails.service';

@Component({
  selector: 'app-showaccountdetails',
  templateUrl: './showaccountdetails.component.html',
  styleUrls: ['./showaccountdetails.component.css']
})
export class ShowaccountdetailsComponent implements OnInit {
  accdetail:Accountdetails;

  constructor(private accountDetailsService:AccountdetailsService) {this.accdetail=new Accountdetails() }

  ngOnInit(): void {
    this.accountDetailsService.getAccountDetails().subscribe((data)=>{
      console.log(data);
      this.accdetail=data as Accountdetails;
      console.log(this.accdetail);
    })
  }

}
