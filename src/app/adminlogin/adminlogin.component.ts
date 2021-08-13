import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor() { }
  formSubmit(adminloginForm:any)
  {
    console.log(adminloginForm.value)
  }

  ngOnInit(): void {
  }

}
