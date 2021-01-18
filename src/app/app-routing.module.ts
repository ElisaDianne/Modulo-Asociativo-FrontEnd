import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaAComponent } from './pagina-a/pagina-a.component';
import { PaginaBComponent } from './pagina-b/pagina-b.component';
import { PaginaDComponent } from './pagina-d/pagina-d.component';
import { PaginaEComponent } from './pagina-e/pagina-e.component';
import { PaginaHComponent } from './pagina-h/pagina-h.component';
import { PaginaKComponent } from './pagina-k/pagina-k.component';
import { PaginaIComponent } from './pagina-i/pagina-i.component';
import { PaginaJComponent } from './pagina-j/pagina-j.component';
import { PaginaLComponent } from './pagina-l/pagina-l.component';
import { AppComponent } from "./app.component";
const routes: Routes = [
  { path: '', component: AppComponent },
  {path: "PaginaA", component: PaginaAComponent },
  {path: "PaginaB", component: PaginaBComponent },
  { path: "PaginaD", component: PaginaDComponent },
  { path: "PaginaE", component: PaginaEComponent },
  { path: "PaginaH", component: PaginaHComponent },
  { path: "PaginaK", component: PaginaKComponent },
  { path: "PaginaI", component: PaginaIComponent },
  { path: "PaginaJ", component: PaginaJComponent },
  { path: "PaginaL", component: PaginaLComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
