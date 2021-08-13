import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotUIDComponent } from './forgot-uid/forgot-uid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import {HttpClientModule} from '@angular/common/http';
import { PaymentStatusComponent } from './payment-status/payment-status.component'
import { PaymentService } from './payment.service';

@NgModule({
  declarations: [
    AppComponent,
    ForgotUIDComponent,
    ForgotPwdComponent,
    FundTransferComponent,
    PaymentStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
