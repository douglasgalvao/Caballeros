import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AgendarComponent } from './pages/agendar/agendar.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    NavbarComponent,
    LoginFormComponent,
    ContatoComponent,
    SobreComponent,
    AgendarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
