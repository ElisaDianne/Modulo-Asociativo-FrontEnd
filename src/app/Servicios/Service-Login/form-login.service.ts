import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FormLoginService {
  ubi_local = environment.api;
  constructor(public http: HttpClient) { }

  postLogin(user,pass){
     var link = this.ubi_local + 'oauth/token/';
     const credentiales = environment.credential_app;
     const head = new HttpHeaders({
       'Content-Type': 'application/x-www-form-urlencoded',
       Authorization:'Basic ' + credentiales,
     });
     let parameters = new URLSearchParams();
     parameters.set('grant_type','password');
     parameters.set('username', user);
     parameters.set('password',pass);
     parameters.set('idapli','87');
     return this.http.post(link,parameters.toString(),{headers:head});
  }

  getPerson(id_persona,token){
    const head =new HttpHeaders({
      'Content-Type':'application/json',
      Accept: 'application/json',
      Authorization:'Bearer ' + token,
    });
    var link =
      this.ubi_local+
      '' + id_persona+
      '/87';
      return this.http.get(link,{headers:head});
  }

  enviar(datos, token){
    console.log(datos);
    const head=new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:'Bearer ' + token,
    });
    var link=
      this.ubi_local + '';
    return this.http.post(link,datos,{headers:head});
  }
}
