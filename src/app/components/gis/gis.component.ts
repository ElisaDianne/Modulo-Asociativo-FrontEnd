import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.scss']
})
export class GisComponent implements OnInit {
  provincia: string
  canton: string
  parroquia: string
  codParroquia: string
  latitud: number = 40.33333
  longitud: number = 32.4534

  position = {
    lat: this.latitud,
    lng: this.longitud
  }

  label = {
    color: 'white',
    text: 'Marcador'
  }
  title = 'gmaps'


  constructor() { }

  ngOnInit(): void {
  }


}
