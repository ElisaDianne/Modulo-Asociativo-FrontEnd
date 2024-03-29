import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMap, MapMarker, GoogleMapsModule } from '@angular/google-maps';

import { MatSnackBar } from '@angular/material/snack-bar';

import { GisService } from 'src/app/servicios/gis.service';

// const utmObj = require('utm-latlng')
import * as utmObj from 'utm-latlng'
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
      lat: -0.18851671437938528,
      lng: -78.478678738125
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

  provincias: any[]
  cantones: any[]
  parroquias: any[]

  selectedProvincia
  selectedCanton
  selectedParroquia
  codParroquia: string

  xCoordinate: number
  yCoordinate: number
  hemisphere: string
  zoneNumber: number
  zoneLetter: string

  constructor(private gisService: GisService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllProvincias()
  }
  
  ngAfterViewInit(): void {
    this.startMap()
  }
  
  startMap() {
    this.centerMap()
    this.setUtmCoordinates(this.marker.position)    
  }
  onChooseLocation(e) {
    const markedPos = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    this.setMarkerPosition(markedPos)
    this.setUtmCoordinates(markedPos)
  }

  setMarkerPosition(newPos) {
    this.marker.position = newPos
    this.centerMap()
  }

  setUtmCoordinates(latLng) {
    const utmConverted = utm.convertLatLngToUtm(latLng.lat, latLng.lng, 1)
    this.xCoordinate = utmConverted.Easting
    this.yCoordinate = utmConverted.Northing
    this.hemisphere = latLng.lat < 0 ? 'Sur' : 'Norte'
    this.zoneNumber = utmConverted.ZoneNumber
    this.zoneLetter = utmConverted.ZoneLetter
  }

  centerMap(pos = this.marker.position) {
    this.map.panTo(pos)
  }

  getAllProvincias() {
    this.gisService.getAllProvincias().subscribe((prov) => {
      console.log('provincias', prov)
      this.provincias = prov.sort((a,b) => a.ubiId - b.ubiId)
    })
  }

  onProvinciaChange(value: any) {
    console.log('provincia', value);
    this.selectedProvincia = value
    this.selectedCanton = null
    this.selectedParroquia = null
    this.gisService.getChildrenByUbiId(value.ubiId).subscribe((c) => {
      this.cantones = c.sort((a,b) => a.ubiId - b.ubiId)
      this.parroquias = []
      this.setMarkerPosition({ lat: value.ubiLatitud, lng: value.ubiLongitud })
    })   
  }

  onCantonChange(value: any) {
    console.log('canton', value);
    this.selectedCanton = value
    console.log(this.selectedCanton)
    this.selectedParroquia = null
    this.gisService.getChildrenByUbiId(value.ubiId).subscribe((p) => {
      this.parroquias = p.sort((a,b) => a.ubiId - b.ubiId)
      this.setMarkerPosition({ lat: value.ubiLatitud, lng: value.ubiLongitud })
    })
  }

  onParroquiaChange(value: any) {
    console.log('parroquia', value)
    this.selectedParroquia = value
    this.codParroquia = value.ubiId
    this.setMarkerPosition({ lat: value.ubiLatitud, lng: value.ubiLongitud })
  }

  // sortByUbiId(arr: any[]) {
  //   console.log('sort1', arr)
  //   const sortedArr = arr.sort((a,b) => a.ubiId - b.ubiId)
  //   console.log('sort2', arr)
  //   return sortedArr
  // }

  onValidateLocation() {
    if (!this.selectedCanton) {
      console.log('No hay canton seleccionado')
      this.openDefaultSnackBar('Cantón no seleccionado...', 'mat-warn')

      return
    }
    this.gisService.validateLocationCanton(this.selectedCanton.ubiId, this.marker.position).subscribe((res) => {
      console.log('Llego', res)
      //debugger
      this.openDefaultSnackBar('Coordenadas dentro de Cantón!', 'mat-primary')
    }, (e) => {
      console.log('LLego error', e)
      this.openDefaultSnackBar('Coordenadas Inválidas!', 'mat-warn')
    })
  }

  openDefaultSnackBar(message: string, color: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['mat-toolbar', color]
    })

  }
}
