import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicidadListComponent } from '../publicidad/publicidad-list/publicidad-list.component';
import {EditorialDetailComponent} from '../publicidad/publicidad-detail/publicidad-detail.component';



const routes: Routes =
[
  {
    path:'publicidades',
    children: [
    {
      path: 'list',
      component: PublicidadListComponent
    }
    ]
  }
]; 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }