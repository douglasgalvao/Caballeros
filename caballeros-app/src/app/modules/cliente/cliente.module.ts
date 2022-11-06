import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [ClienteComponent, SobreComponent, NavbarComponent],
  imports: [CommonModule, ClienteRoutingModule],
})
export class ClienteModule {}
