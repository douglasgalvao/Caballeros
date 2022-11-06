import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { AuthComponent } from './modules/auth/auth.component';
import { ClienteComponent } from './modules/cliente/cliente.component';
const routes: Routes = [{
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full'
},
{
  path: 'auth',
  component: AuthComponent,
  loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
},
{
  path: 'cliente',
  component: ClienteComponent,
  loadChildren: () => import("./modules/cliente/cliente.module").then(m => m.ClienteModule)
},
{
  path: 'admin',
  component: AdminComponent,
  loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
