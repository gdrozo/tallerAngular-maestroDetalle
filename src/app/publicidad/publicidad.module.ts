import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicidadListComponent } from './publicidad-list/publicidad-list.component';
import { PublicidadService } from './publicidad.service';
import { PublicidadDetailComponent } from './publicidad-detail/publicidad-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [PublicidadListComponent, PublicidadDetailComponent],
  exports : [PublicidadListComponent],
  providers: [PublicidadService]
})
export class PublicidadModule { }