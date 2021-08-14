import { Component, OnInit } from '@angular/core';
import { Adminlogin } from '../adminlogin';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adlog:Adminlogin

  constructor(private adminloginService:AdminloginService) {this.adlog=new Adminlogin }

  ngOnInit(): void {
  }

  formSubmit(adminloginForm:any)
  {
    console.log(adminloginForm.value)
    this.adminloginService.addAdminLogin(this.adlog).subscribe((data)=>
    console.log(data))
  }

}
