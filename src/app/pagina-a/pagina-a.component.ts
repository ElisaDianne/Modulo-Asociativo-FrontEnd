import { FormAService } from './../servicios-pag/servicios-pagA/form-a.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,  FormControl } from '@angular/forms';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-pagina-a',
  templateUrl: './pagina-a.component.html',
  styleUrls: ['./pagina-a.component.scss']
})
export class PaginaAComponent implements OnInit {
  //actividadEconomica: any;
  production = environment.production;
  version = environment.version;
  version_date = environment.version_date;
  //formBuilder = any;
  datosPer = [];
  mitoken= localStorage.getItem('token');
  firstConnection = "";
  statuslogin = false;
  mestado = 0;
  character;
  datosPagA:any=[];
  serealizado:any;
  formularioDataA : FormGroup = new FormGroup({
    identi: new FormControl("", [Validators.required]),
    rSocial:new FormControl(""),
    eContribuyente:new FormControl(""),
    nComercial:new FormControl(""),
    tSociedad:new FormControl(""),
    aEconomica:new FormControl(""),
    tFijo:new FormControl(""),
    tCelular:new FormControl(""),
    cElectronico:new FormControl(""),
    pWeb:new FormControl(""),
  });


  constructor(
    public srvApi: FormAService,
  ) {}

  ngOnInit(): void {
    this.formularioDataA.setValue({
      identi: '',
      rSocial:'',
      eContribuyente:'',
      nComercial:'',
      tSociedad:'',
      aEconomica:'',
      tFijo:'',
      tCelular:'',
      cElectronico:'',
      pWeb:'',
    });
  }
  pagAOnline(ruc){
    console.log(ruc);
          this.srvApi.getPerson(ruc, this.mitoken).subscribe(
            (data) => {
              console.log(data);
              this.datosPagA=(data);

            },
            (error) => {
              console.log(error);
            }
          )
  }

  async paginaA(form) {
    var mruc =form.identi;
    var msocial= form.rSocial;
    var mcontribuyente= form.eContribuyente;
    var mcomercial= form.nComercial;
    var msociedad= form.tSociedad;
    var meconomica= form.aEconomica;
    var mfijo= form.tFijo;
    var mcelular= form.tCelular;
    var melectronico= form.cElectronico;
    var mweb= form.pWeb;




    console.log(mruc);
    console.log(msocial);

    const ruc = mruc;
    this.pagAOnline(ruc);


    let formObj = this.formularioDataA.getRawValue();
    let serializado=JSON.stringify(formObj);
    console.log(serializado);
  }
}
