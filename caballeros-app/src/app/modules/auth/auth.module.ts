import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    NavbarComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    AngularWebStorageModule
  ]
})
export class AuthModule { }
