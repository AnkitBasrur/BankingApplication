import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { ForgotUIDComponent } from './forgot-uid/forgot-uid.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';

const routes: Routes = [{
  path: '',
  component: FundTransferComponent
},
{
  path: 'afterPayment',
  component: PaymentStatusComponent
},
{
  path: 'forgotPwd',
  component: ForgotPwdComponent
},
{
  path: 'forgotUID',
  component: ForgotUIDComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [FundTransferComponent, PaymentStatusComponent]