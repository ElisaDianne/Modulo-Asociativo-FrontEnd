import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Validado } from 'src/app/interfaces/info_validada';

@Injectable({
  providedIn: 'root'
})
export class FormAService {

  api_token = environment.host + environment.api_token;
  apiA_persona= environment.apiA_persona;
  apiA_prueba= environment.apiA_prueba;
  constructor(public http: HttpClient) { }

  /*postLogin(user,pass){
    var link = this.api_token;
    const credentiales = environment.credential_app;
    const head = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:'Basic ' + credentiales,
    });
    let parameters = new URLSearchParams();
    parameters.set('grant_type','password');
    parameters.set('username', user);
    parameters.set('password',pass);
    parameters.set('idapli','67');
    return this.http.post(link,parameters.toString(),{headers:head});
 }*/
 getPerson(ruc_persona,token){
  const head =new HttpHeaders({
    'Content-Type':'application/json',
    Accept: 'application/json',
    Authorization:'Bearer ' + token,
  });
  var link =
    this.apiA_persona+
    + ruc_persona;
    return this.http.get(link,{headers:head});
 
 }
 getPersonaPrueba(ruc_persona,token){
  const head =new HttpHeaders({
    'Content-Type':'application/json',
    Accept: 'application/json',
    Authorization:'Bearer ' + token,
  });
  var link =
  this.apiA_prueba+
  + ruc_persona;
  return this.http.get(link,{headers:head});
  }
 enviar(datos, token){
   console.log(datos);
   const head=new HttpHeaders({
     "Content-Type": "application/json",
     Authorization:'Bearer ' + token,
   });
   var link=
     this.api_token + '';
   return this.http.post(link,datos,{headers:head});
 }
}
