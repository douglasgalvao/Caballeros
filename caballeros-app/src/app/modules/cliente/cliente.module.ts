import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './component/carousel/carousel.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { ContentSobreComponent } from './component/content-sobre/content-sobre.component';

@NgModule({
  declarations: [ClienteComponent, SobreComponent, NavbarComponent, CarouselComponent, ContentSobreComponent],
  imports: [CommonModule, ClienteRoutingModule, HttpClientModule,MdbCheckboxModule],
})
export class ClienteModule { }
