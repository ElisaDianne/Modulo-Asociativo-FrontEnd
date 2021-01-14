import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaAComponent } from './pagina-a/pagina-a.component';
import { PaginaBComponent } from './pagina-b/pagina-b.component';
import { PaginaCComponent } from './pagina-c/pagina-c.component';
import { PaginaDComponent } from './pagina-d/pagina-d.component';
import { PaginaEComponent } from './pagina-e/pagina-e.component';
import { PaginaFComponent } from './pagina-f/pagina-f.component';
import { PaginaGComponent } from './pagina-g/pagina-g.component';
import { PaginaHComponent } from './pagina-h/pagina-h.component';
import { PaginaIComponent } from './pagina-i/pagina-i.component';
import { PaginaJComponent } from './pagina-j/pagina-j.component';
import { PaginaKComponent } from './pagina-k/pagina-k.component';
import { PaginaLComponent } from './pagina-l/pagina-l.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaAComponent,
    PaginaBComponent,
    PaginaCComponent,
    PaginaDComponent,
    PaginaEComponent,
    PaginaFComponent,
    PaginaGComponent,
    PaginaHComponent,
    PaginaIComponent,
    PaginaJComponent,
    PaginaKComponent,
    PaginaLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
