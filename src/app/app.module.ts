import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule } from '@angular/forms';
import { BnNgIdleService } from 'bn-ng-idle';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { ForgotUIDComponent } from './forgot-uid/forgot-uid.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { PayeeComponent } from './payee/payee.component';
import { ShowBeneficiariesComponent } from './show-beneficiaries/show-beneficiaries.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    FundTransferComponent,
    ForgotPwdComponent,
    ForgotUIDComponent,
    PaymentStatusComponent,
    PayeeComponent,
    ShowBeneficiariesComponent,
    HomepageComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,

  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
