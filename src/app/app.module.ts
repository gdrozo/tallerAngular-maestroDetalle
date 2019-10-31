import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PublicidadModule} from './publicidad/publicidad.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, PublicidadModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
