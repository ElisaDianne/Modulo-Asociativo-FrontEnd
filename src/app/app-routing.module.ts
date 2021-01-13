import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaHComponent } from './pagina-h/pagina-h.component';

const routes: Routes = [{ path: 'paginah', component: PaginaHComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
