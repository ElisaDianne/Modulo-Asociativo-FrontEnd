

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LOGINComponent } from './login/login.component';
import { PaginaAComponent } from './pagina-a/pagina-a.component';
import { PaginaBComponent } from './pagina-b/pagina-b.component';
import { PaginaCComponent } from './pagina-c/pagina-c.component';
import { PaginaDComponent } from './pagina-d/pagina-d.component';
import { PaginaEComponent } from './pagina-e/pagina-e.component';
import { PaginaFComponent } from './pagina-f/pagina-f.component';
import { PaginaGComponent } from './pagina-g/pagina-g.component';
import { PaginaHComponent } from './pagina-h/pagina-h.component';
import { PaginaIComponent } from './pagina-i/pagina-i.component';
import { PaginaJComponent } from './pagina-j/pagina-j.component';
import {PaginaKComponent}from'./pagina-k/pagina-k.component';
import { PaginaLComponent } from './pagina-l/pagina-l.component';


import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', component: LOGINComponent },
  { path: 'LOGIN', component: LOGINComponent },
  { path: 'PaginaA', component: PaginaAComponent },
  { path: 'PaginaB', component: PaginaBComponent },
  { path: 'PaginaC', component: PaginaCComponent },
  { path: 'PaginaD', component: PaginaDComponent },
  { path: 'PaginaE', component: PaginaEComponent },
  { path: 'PaginaF', component: PaginaFComponent },
  { path: 'PaginaG', component: PaginaGComponent },
  { path: 'PaginaH', component: PaginaHComponent },
  { path: 'PaginaI', component: PaginaIComponent },
  { path: 'PaginaJ', component: PaginaJComponent },
  {path:'PaginaK',component:PaginaKComponent},
  { path: 'PaginaL', component: PaginaLComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
