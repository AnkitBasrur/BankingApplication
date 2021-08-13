import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';

const routes: Routes = [{
  path: 'afterPayment',
  component: PaymentStatusComponent,
},{
  path: '',
  component: DefaultComponent,
  children:[{
    path:'',
    component: DashboardComponent,
  },
    { path: 'posts',
  component: PostsComponent
  },
  { path: 'payment',
  component: FundTransferComponent
  },
  { path: 'change-password',
  component: ChangePasswordComponent
  }],
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
