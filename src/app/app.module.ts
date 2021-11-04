import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componets/inicio/inicio.component';
import { LoguinComponent } from './Componets/loguin/loguin.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoguinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
