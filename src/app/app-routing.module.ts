import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componets/inicio/inicio.component';
import { LoguinComponent } from './Componets/loguin/loguin.component';

const routes: Routes = [
  {path:'', redirectTo:'/loguin',pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'loguin', component:LoguinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
