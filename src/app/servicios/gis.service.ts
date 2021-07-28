import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GisService {
  private apiURL = 'http://10.10.1.52:8080/micro_ubicacion-0.0.1/api/ubicacion/findChildrenByUbiId'

  constructor(private http:HttpClient) { }

  getAllProvincias(): Observable<any[]> {
    const url = `${this.apiURL}/1`
    return this.http.get<any[]>(url)
  }
  
  getAllParroquias(): Observable<any[]> {
    const url = `${this.apiURL}/2`
    return this.http.get<any[]>(url)
  }

  getChildrenByUbiId(ubiId: number): Observable<any[]> {
    const url = `${this.apiURL}/${ubiId}`
    return this.http.get<any[]>(url)
  }
}
