import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { RegisterComponent } from './register/register.component';
import { ShowBeneficiariesComponent } from './show-beneficiaries/show-beneficiaries.component';

const routes: Routes = [{path:'', component:HomepageComponent},
{
  path: 'dashboard',component: DefaultComponent,
  children:[
  {
    path:'',
    component: DashboardComponent,
  },
  {path: 'afterPayment',component: PaymentStatusComponent},
    { path: 'posts',
  component: PostsComponent
  },
  { path: 'payment',
  component: FundTransferComponent
  },
  { path: 'change-password',
  component: ChangePasswordComponent
  },
  {path:'beneficiaries', component: ShowBeneficiariesComponent}],

},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'adminlogin', component:AdminloginComponent},
{path:'openaccount', component:OpenaccountComponent},
{path:'admin', component:AdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
