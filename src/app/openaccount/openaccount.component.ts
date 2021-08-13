import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-openaccount',
  templateUrl: './openaccount.component.html',
  styleUrls: ['./openaccount.component.css']
})
export class OpenaccountComponent implements OnInit {

  constructor() { }
  formSubmit(openaccountForm:any)
  {
    console.log(openaccountForm.value)
  }

  ngOnInit(): void {
  }

}
