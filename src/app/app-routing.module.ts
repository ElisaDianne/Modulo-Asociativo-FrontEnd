import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAComponent } from './pagina-a/pagina-a.component';
import { PaginaBComponent } from './pagina-b/pagina-b.component';
import { PaginaHComponent } from './pagina-h/pagina-h.component';
import { PaginaKComponent } from './pagina-k/pagina-k.component';

const routes: Routes = [
  {path: "PaginaA", component: PaginaAComponent },
  {path: "PaginaB", component: PaginaBComponent },
  { path: "PaginaH", component: PaginaHComponent },
  { path: "PaginaK", component: PaginaKComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
