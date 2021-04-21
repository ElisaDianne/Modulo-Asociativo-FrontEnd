


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment"


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ubi_local = environment.api; 
  constructor(public http: HttpClient) { }
/*
  postLogin (user, pass) {
    var link = this.ubi_local + ""; //poner el link que se envió
    const credenciales  = environment.credential_app;
    const head = new HttpHeaders({
      "content-Type" :"application/x-www-form-urlencoded", // "content-Type" :"application/json"
      Authorization: "Basic " + credenciales,
    });
    let parameters = new URLSearchParams();
    parameters.set("grant_type", "password");
    parameters.set("username", user);
    parameters.set("password", pass);
    parameters.set("idapli", "67"); 
    return this.http.post(link, parameters.toString(),{headers: head})

  }

  getPerson (id_persona, token) {
    const head = new HttpHeaders({
      "Content-Type": "aplication/json",
      Acept: "aplication/json",
      Authorization: "Bearer " + token,
    });
    var link = this.ubi_local + "http://10.10.1.121:8080/servicio_seguridad-0.0.1/api/oauth/token" + id_persona + "/67"; //cambiar por los datos de la aplicacion
    return this.http.get(link, {headers: head });
  }
*/
  
}

