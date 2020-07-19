import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { DetailComponent } from '../../components/detail/detail.component';
import { HomeComponent } from '../../components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [    
    DefaultComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailComponent

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,

     BrowserModule,
     AppRoutingModule,
  //  DefaultModule,
  //  HttpClientModule,
       FormsModule
  //  ReactiveFormsModule
  ]
})
export class DefaultModule { }
