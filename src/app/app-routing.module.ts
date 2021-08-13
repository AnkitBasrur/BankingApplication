import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Register } from './register';
import { RegisterComponent } from './register/register.component';
import { ShowaccountdetailsComponent } from './showaccountdetails/showaccountdetails.component';

const routes: Routes = [
  {path:'showaccountdetails',component:ShowaccountdetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
