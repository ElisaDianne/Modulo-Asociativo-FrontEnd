import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaIComponent } from './pagina-i/pagina-i.component';
import { PaginaJComponent } from './pagina-j/pagina-j.component';
import { PaginaLComponent } from './pagina-l/pagina-l.component';
import { AppComponent } from "./app.component";
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'PaginaI', component: PaginaIComponent },
  { path: 'PaginaJ', component: PaginaJComponent },
  { path: 'PaginaL', component: PaginaLComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
