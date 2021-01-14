import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaFComponent } from './pagina-f/pagina-f.component';
import { PaginaGComponent } from './pagina-g/pagina-g.component';
import { AppComponent } from "./app.component";
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'PaginaF', component: PaginaFComponent },
  { path: 'PaginaG', component: PaginaGComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
