import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaHComponent } from './pagina-h/pagina-h.component';
import { PaginaKComponent } from './pagina-k/pagina-k.component';

const routes: Routes = [
  { path: 'paginah', component: PaginaHComponent },
  { path: 'paginak', component: PaginaKComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
