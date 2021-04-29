import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_token = environment.host + environment.api_token;
  api_persona= environment.api_persona;
  constructor(public http: HttpClient) { }

  postLogin(user,pass){
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
  }

  getPerson(cedula_persona,token){
    const head =new HttpHeaders({
      'Content-Type':'application/json',
      Accept: 'application/json',
      Authorization:'Bearer ' + token,
    });
    var link =
      this.api_persona+
      + cedula_persona;
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
