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
  latitud: number
  longitud: number


  constructor() { }

  ngOnInit(): void {
  }

}
