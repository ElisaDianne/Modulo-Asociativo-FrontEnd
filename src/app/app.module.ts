import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LOGINComponent } from './login/login.component';
import { PaginaAComponent } from './pagina-a/pagina-a.component';
import { PaginaBComponent } from './pagina-b/pagina-b.component';
import { PaginaCComponent } from './pagina-c/pagina-c.component';
import { PaginaDComponent } from './pagina-d/pagina-d.component';
import { PaginaEComponent } from './pagina-e/pagina-e.component';
import { PaginaFComponent } from './pagina-f/pagina-f.component';
import { PaginaGComponent } from './pagina-g/pagina-g.component';
import { PaginaHComponent } from './pagina-h/pagina-h.component';
import { PaginaIComponent } from './pagina-i/pagina-i.component';
import{PaginaKComponent}from'./pagina-k/pagina-k.component';
import { PaginaJComponent } from './pagina-j/pagina-j.component';
import { GisComponent } from './components/gis/gis.component';

import { LayoutModule } from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
import { PaginaLComponent } from './pagina-l/pagina-l.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { from } from 'rxjs';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    LOGINComponent,
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
    PaginaLComponent,
    PaginaKComponent,
    GisComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatSliderModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
