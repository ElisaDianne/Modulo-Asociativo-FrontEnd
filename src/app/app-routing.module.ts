import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaCComponent } from './pagina-c/pagina-c.component';

const routes: Routes= [{path: 'paginac', component: PaginaCComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
