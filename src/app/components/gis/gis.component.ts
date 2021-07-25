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

  position = {
    lat: -0.1834458169411667,
    lng: -78.48399216083874
  }

  label = {
    color: 'white',
    text: 'Marcador'
  }
  title = 'gmaps'

  coordenadaX: number = 0
  coordenadaY: number = 0
  coordenadaZ: number = 0
  hemisferio: string = 'aaaaaa'
  zona: string = 'bbbbbb'

  constructor() { }

  ngOnInit(): void {
  }

  getPosition() {
    return this.position
  }

  onChooseLocation(e) {
    console.log(e)
    const latLng = e.latLng
    this.position = {
      lat: latLng.lat(),
      lng: latLng.lng()
    }

    this.coordenadaX = e.Tb.x
    this.coordenadaY = e.Tb.y
    this.hemisferio = this.position.lat < 0 ? 'Sur' : 'Norte'
  }

}
