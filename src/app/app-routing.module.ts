import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { DrogueriaComponent } from './Components/drogueria/drogueria.component';
import { FarmacoComponent } from './Components/farmaco/farmaco.component';

const routes: Routes = [
  {path: 'clientes', component:ClientesComponent},
  {path: 'drogueria', component:DrogueriaComponent},
  {path: 'farmacos', component:FarmacoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
