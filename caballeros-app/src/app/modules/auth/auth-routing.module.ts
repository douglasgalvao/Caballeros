import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarComponent } from './pages/agendar/agendar.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'agendar',
    component: AgendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
