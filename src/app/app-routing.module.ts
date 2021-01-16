import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaAComponent } from './pagina-a/pagina-a.component';
import { PaginaBComponent } from './pagina-b/pagina-b.component';
const routes: Routes = [
  {path: "PaginaA", component: PaginaAComponent },
  {path: "PaginaB", component: PaginaBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
