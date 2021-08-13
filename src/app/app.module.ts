import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenaccountComponent,
    AdminComponent,
    RegisterComponent,
    StatusComponent,
    AdminloginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
