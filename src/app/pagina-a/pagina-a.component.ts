import { FormAService } from './../servicios-pag/servicios-pagA/form-a.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,  FormControl } from '@angular/forms';
import { environment } from './../../environments/environment';


// function emailDomainValidatos  (control:FormControl){
//   let email =control.value;
//   if(email && email.indexOf("@") != -1 ){
//     let [_, domain] = email.split("@");
//     if(domain != ("hotmail.com" || "outlook.com")){
//       return{
//         emailDomain:{
//           parsedDomain: domain
//         }
//       }
//     }
//   }
//   return null;
// }

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
    rSocial:new FormControl('',[Validators.required]),
    eContribuyente:new FormControl('',[Validators.required]),
    nComercial:new FormControl('',[Validators.required]),
    tSociedad:new FormControl('',[Validators.required]),
    aEconomica:new FormControl('',[Validators.required]),
    tFijo:new FormControl(''),
    tCelular:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    cElectronico: new FormControl('', [Validators.required, Validators.email]),
    //  [Validators.required,Validators.pattern("[^ @]*@[^ @]"),emailDomainValidatos]),
    pWeb:new FormControl('',[Validators.required])
  });
  

  constructor(
    public srvApi: FormAService,
  ) {}
  
  getErrorMessagerSocial() {
    return this.formularioDataA.get('rSocial').hasError('required')
      ? 'Nombre Completo'            
        :this.formularioDataA.get('rSocial').hasError('text')?'Estado Contribuyente':
         '';
  }
  getErrorMessageeContribuyente() {
    return this.formularioDataA.get('eContribuyente').hasError('required')
      ? 'Campo Requerido'            
        :this.formularioDataA.get('eContribuyente').hasError('text')?'Estado Contribuyente':
         '';
  }
  getErrorMessagenComercial() {
    return this.formularioDataA.get('nComercial').hasError('required')
      ? 'Nombre Completo'            
        :this.formularioDataA.get('nComercial').hasError('text')?'Nombre Comercial':
         '';
  }
  getErrorMessagetSociedad() {
    return this.formularioDataA.get('tSociedad').hasError('required')
      ? 'Campo Requerido'            
        :this.formularioDataA.get('tSociedad').hasError('text')?'Tipo de Sociedad':
         '';
  }
  getErrorMessageaEconomica() {
    return this.formularioDataA.get('aEconomica').hasError('required')
      ? 'Campo Requerido'            
        :this.formularioDataA.get('aEconomica').hasError('text')?'Actividad Economica':
         '';
  }
  getErrorMessagetFijo() {
    return this.formularioDataA.get('tFijo').hasError('required')
      ? ''            
        :this.formularioDataA.get('tFijo').hasError('maxLength')?'max 7 num.':
         '';
  }
  getErrorMessagetCelular() {
    return this.formularioDataA.get('tCelular').hasError('required')
      ? 'Campo requerido'            
        :this.formularioDataA.get('tCelular').hasError('maxLength')?'max 10 num.':
         '';
  }
  getErrorMessagecElectronico() {
    return this.formularioDataA.get('cElectronico').hasError('required')
      ? 'Campo requerido'            
        :this.formularioDataA.get('cElectronico').hasError('email')?'email no valido.':
         '';
  }
  getErrorMessagepWeb() {
    return this.formularioDataA.get('pWeb').hasError('required')
      ? 'Campo requerido'            
        :this.formularioDataA.get('pWeb').hasError('text')?'URL invalido':
         '';
  }

  
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
