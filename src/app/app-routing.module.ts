import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAComponent } from './pagina-a/pagina-a.component';
import { PaginaBComponent } from './pagina-b/pagina-b.component';
import { PaginaCComponent } from './pagina-c/pagina-c.component';
const routes: Routes = [
  {path: "PaginaA", component: PaginaAComponent },
  {path: "PaginaB", component: PaginaBComponent },
  {path: "PaginaC", component: PaginaCComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
