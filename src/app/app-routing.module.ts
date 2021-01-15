import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaDComponent } from './pagina-d/pagina-d.component';
import { PaginaEComponent } from './pagina-e/pagina-e.component';

const routes: Routes = [
  { path: 'paginad', component: PaginaDComponent },
  { path: 'paginae', component: PaginaEComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
