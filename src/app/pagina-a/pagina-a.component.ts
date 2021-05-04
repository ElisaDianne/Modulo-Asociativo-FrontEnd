import { LOGINComponent } from './../login/login.component';
import { FormAService } from './../servicios-pag/servicios-pagA/form-a.service';
import { Md5 } from "ts-md5/dist/md5";
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,  FormControl } from '@angular/forms';
import { LoginService } from './../servicios/login.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-pagina-a',
  templateUrl: './pagina-a.component.html',
  styleUrls: ['./pagina-a.component.scss']
})
export class PaginaAComponent implements OnInit {
  production = environment.production;
  version = environment.version;
  version_date = environment.version_date;
  //formBuilder = any;
  datosPer = [];
  mitoken= localStorage.getItem('token');
  firstConnection = "";
  statuslogin = false;
  data_inicial;
  mestado = 0;
  formularioDataA : FormGroup = new FormGroup({
    identi: new FormControl("", [Validators.required]),
  });

  constructor(
    public srvApi: FormAService,
  ) {}

  ngOnInit(): void {
    this.formularioDataA.setValue({
      identi: '',
    });
  }
  pagAOnline(ruc){
    console.log(ruc);
          this.srvApi.getPerson(ruc, this.mitoken).subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              console.log(error);
            }
          )
  }

  async paginaA(form) {
    var mruc =form.identi;


    console.log(mruc);
    /*const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      duration: 1500,
    })*/

    //await loading.present();

    const ruc = mruc;
    this.pagAOnline(ruc);
    //await loading.onDidDismiss();

  }
}
