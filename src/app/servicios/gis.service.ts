import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpSWQiOjY3LCJ1c2VyX25hbWUiOiIxNzI0Nzg2MTcxIiwic2NvcGUiOlsic2VjcmV0Il0sInJvbGVzIjpbeyJpZFJvbCI6NzYsIm5vbWJyZVJvbCI6IlJPTF9URUNOSUNPX0ZBQ0lMSVRBRE9SX0RFX0NBTVBPIiwicGVybWlzb3MiOlsiaHR0cDovLzEwLjEwLjEuMTIxL2FwaV9kaW5hcmRhcC9hcGkvZGluYXJkYXAvaW50ZXJvcGVyYWRvci8xLyIsImh0dHA6Ly8xMC4xMC4xLjEyMS9hcGlfZGluYXJkYXAvYXBpL2RpbmFyZGFwL2ludGVyb3BlcmFkb3IvMTQvIiwiaHR0cDovLzEwLjEwLjEuMTIxOjgwODAvbWljcm9fY2F0YWxvZ28tMC4wLjEvYXBpL3RpcG9DYXRhbG9nby9maW5kQWxsIl19XSwicmVjdXJzb3MiOlt7Im1ldG9kbyI6IkdFVCIsInBhdGgiOiJodHRwOi8vMTAuMTAuMS4xMjEvYXBpX2RpbmFyZGFwL2FwaS9kaW5hcmRhcC9pbnRlcm9wZXJhZG9yLzEvIn0seyJtZXRvZG8iOiJHRVQiLCJwYXRoIjoiaHR0cDovLzEwLjEwLjEuMTIxL2FwaV9kaW5hcmRhcC9hcGkvZGluYXJkYXAvaW50ZXJvcGVyYWRvci8xNC8ifSx7Im1ldG9kbyI6IkdFVCIsInBhdGgiOiJodHRwOi8vMTAuMTAuMS4xMjE6ODA4MC9taWNyb19jYXRhbG9nby0wLjAuMS9hcGkvdGlwb0NhdGFsb2dvL2ZpbmRBbGwifV0sImV4cCI6MTYyNzUyMDcwNiwidXN1YXJpb3MiOlt7InVzdUlkIjoxMDM0MywidXN1cElkIjoxMDIwMywicGVyZmlsVGlwbyI6W3sidHBlZk5vbWJyZSI6IlRlY25pY28gRmFjaWxpdGFkb3IgZGUgQ2FtcG8ifV19XSwiYXV0aG9yaXRpZXMiOlsiUk9MX1RFQ05JQ09fRkFDSUxJVEFET1JfREVfQ0FNUE8iXSwianRpIjoiZjE5NGFlM2EtOWVhZi00Y2MyLWFhOWEtOTk1ZWFlN2MzMzE2IiwicGVyX2lkIjo2MzI0OTcsImNsaWVudF9pZCI6InVzcl9zaXJ1c2FmYyJ9.DFO3876j1s0IVkSmHU4fG2EU-_3erd8orU0lfIQ128FM0gRtw3EmVEc1UE4AYtaZIPARM0Wc5on2cdz424jcVFqMEv4e0sqmO2wP1o7kn8ktlrShV2zOkbRZQ0zAh32DXXZ_s2WXV-tFSuGL0cDzNZiw5rwwfAic58IMQDP-BIe9iZ6ilfbw8Coz12ppJ8MElx8SHQKt3DM9wTNhbvlC4jBGwevBTIk5HTdjLTlQg1vKgS8GUNjd6HYrUj6Utc3gCqIug-EIc7hW2dICx1j9cEJ1F1HKgWEQkLpL3pl6tkNFbwTkvaxIXjAI3V6XtvO9zsUQdU23FsUg_sx83M03GA"
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:4200',
    // Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  })
}

@Injectable({
  providedIn: 'root'
})
export class GisService {

  private apiURL = '/micro_ubicacion-0.0.1/api/ubicacion/findChildrenByUbiId'

  constructor(private http:HttpClient) { }

  getAllProvincias(): Observable<any[]> {
    const url = `${this.apiURL}/1`
    return this.http.get<any[]>(url, httpOptions)
  }
  
  getAllParroquias(): Observable<any[]> {
    const url = `${this.apiURL}/2`
    return this.http.get<any[]>(url, httpOptions)
  }

  getChildrenByUbiId(ubiId: number): Observable<any[]> {
    const url = `${this.apiURL}/${ubiId}`
    return this.http.get<any[]>(url, httpOptions)
  }
}
