import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg:Register;

  constructor(private registerService:RegisterService) { this.reg=new Register()}

  formSubmit(regForm:any)
  {
    this.registerService.addRegistration(this.reg).subscribe((data)=>{
      console.log("return value from REST"+data);

    })
    console.log(regForm.value)
    
  }

  ngOnInit(): void {
   
  }

}
