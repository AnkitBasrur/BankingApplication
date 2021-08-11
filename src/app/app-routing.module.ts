import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowaccountdetailsComponent } from './showaccountdetails/showaccountdetails.component';

const routes: Routes = [
  {path:'showaccountdetails',component:ShowaccountdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
