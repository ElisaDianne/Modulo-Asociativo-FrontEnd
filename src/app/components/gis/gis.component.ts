import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMap, MapMarker, GoogleMapsModule } from '@angular/google-maps';

const utmObj = require('utm-latlng')
const utm = new utmObj()

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.scss']
})
export class GisComponent implements OnInit {
  @ViewChild('map') map: GoogleMap
  marker = {
    position: {
      lat: -0.726827638,
      lng: -79.69816116
    },
    label: {
      color: 'white',
      text: 'Marcador'
    },
    title: 'gmaps',
    options: {
      animation: google.maps.Animation.DROP
    }
  }

  provincia: string
  canton: string
  parroquia: string
  codParroquia: string

  xCoordinate: number
  yCoordinate: number
  hemisphere: string
  zoneNumber: number
  zoneLetter: string

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.startMap()
  }
  
  startMap() {
    this.centerMap(this.marker.position)
    this.setUtmCoordinates(this.marker.position)    
  }
  onChooseLocation(e) {
    const markedPos = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    this.setMarkerPosition(markedPos)
    this.centerMap(this.marker.position)
    this.setUtmCoordinates(markedPos)
  }

  setMarkerPosition(newPos) {
    this.marker.position = newPos
  }

  setUtmCoordinates(latLng) {
    const utmConverted = utm.convertLatLngToUtm(latLng.lat, latLng.lng, 1)
    this.xCoordinate = utmConverted.Easting
    this.yCoordinate = utmConverted.Northing
    this.hemisphere = latLng.lat < 0 ? 'Sur' : 'Norte'
    this.zoneNumber = utmConverted.ZoneNumber
    this.zoneLetter = utmConverted.ZoneLetter
  }

  centerMap(pos) {
    this.map.panTo(pos)
  }
}
