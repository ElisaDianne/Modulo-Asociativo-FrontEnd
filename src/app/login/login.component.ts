import { Component, OnInit } from '@angular/core';
import { Md5 } from "ts-md5/dist/md5";
import { FormGroup, Validators,  FormControl } from '@angular/forms';
import { LoginService } from './../servicios/login.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LOGINComponent implements OnInit {
  production = environment.production;
  version = environment.version;
  version_date = environment.version_date;
  //formBuilder = any;
  datosPer = [];
  mitoken= 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpSWQiOjY3LCJ1c2VyX25hbWUiOiIxNzI0Nzg2MTcxIiwic2NvcGUiOlsic2VjcmV0Il0sInJvbGVzIjpbeyJpZFJvbCI6NzYsIm5vbWJyZVJvbCI6IlJPTF9URUNOSUNPX0ZBQ0lMSVRBRE9SX0RFX0NBTVBPIiwicGVybWlzb3MiOlsiaHR0cDovLzEwLjEwLjEuMTIxL2FwaV9kaW5hcmRhcC9hcGkvZGluYXJkYXAvaW50ZXJvcGVyYWRvci8xLyIsImh0dHA6Ly8xMC4xMC4xLjEyMS9hcGlfZGluYXJkYXAvYXBpL2RpbmFyZGFwL2ludGVyb3BlcmFkb3IvMTQvIiwiaHR0cDovLzEwLjEwLjEuMTIxOjgwODAvbWljcm9fY2F0YWxvZ28tMC4wLjEvYXBpL3RpcG9DYXRhbG9nby9maW5kQWxsIl19XSwicmVjdXJzb3MiOlt7Im1ldG9kbyI6IkdFVCIsInBhdGgiOiJodHRwOi8vMTAuMTAuMS4xMjEvYXBpX2RpbmFyZGFwL2FwaS9kaW5hcmRhcC9pbnRlcm9wZXJhZG9yLzEvIn0seyJtZXRvZG8iOiJHRVQiLCJwYXRoIjoiaHR0cDovLzEwLjEwLjEuMTIxL2FwaV9kaW5hcmRhcC9hcGkvZGluYXJkYXAvaW50ZXJvcGVyYWRvci8xNC8ifSx7Im1ldG9kbyI6IkdFVCIsInBhdGgiOiJodHRwOi8vMTAuMTAuMS4xMjE6ODA4MC9taWNyb19jYXRhbG9nby0wLjAuMS9hcGkvdGlwb0NhdGFsb2dvL2ZpbmRBbGwifV0sImV4cCI6MTYxOTU3MzU4MiwidXN1YXJpb3MiOlt7InVzdUlkIjoxMDM0MywidXN1cElkIjoxMDIwMywicGVyZmlsVGlwbyI6W3sidHBlZk5vbWJyZSI6IlRlY25pY28gRmFjaWxpdGFkb3IgZGUgQ2FtcG8ifV19XSwiYXV0aG9yaXRpZXMiOlsiUk9MX1RFQ05JQ09fRkFDSUxJVEFET1JfREVfQ0FNUE8iXSwianRpIjoiODBmMTk5ZDUtMzhiNS00ZWRmLWE4NGQtNzNjYmQ4ZWYyNWZiIiwicGVyX2lkIjo2MzI0OTcsImNsaWVudF9pZCI6InVzcl9zaXJ1c2FmYyJ9.munPCnhdl-8DFrSxNqs2_OqzBxk536o6-a-i-REmFuqqz1Xjd6iJEIXd0ebuIG9OlYh5LbxED1d7LgDOAe9YZSLCTrClfMCuo272u3eNFau2BPwLMGDSj6nWYpgtPt_S7y37lGNjrg7VmLTJkC10urxdz6JQcAsULl8v4N5g3Osf0_AjxmWwo_UodELw_q15U7XiEQxoq1G-JqvDL8fF28-fGHMuDPFochc186UmfDI2cAUadSspTwD2xfgcNnARWN2RhMcwfdVWhflvCd7RiKRRSZ5n-wx8ckqwPveNM9juZ2x31TWK6T4GCd_tJC58w0Ouu-UjssOsuDSJIXBOcg';
  firstConnection = "";
  statuslogin = false;
  data_inicial;
  mestado = 0;
  formularioData : FormGroup = new FormGroup({
    usupLogin: new FormControl("", [Validators.required]),
    usupClave: new FormControl("", [Validators.required]),
  });

  constructor(
    public srvApi: LoginService,
    //public loadinCtrl: LoadinController,
    //private storage: Storage,
    //public navCtrl: NavController,
    //public alertController: AlertController,
    private router: Router,

  ) {
   }

  ngOnInit(): void {
    this.formularioData.setValue({
      usupLogin: '',
      usupClave: ''
    });

  }

  loginOnline(user, pass){
    console.log(user);
    console.log(pass);
    this.srvApi.postLogin(user, pass).subscribe(
      (data) => {
        console.log(data);
        this.mitoken = data["access_token"]; //guardo el token

        var ejemJson = JSON.parse(atob(data["access_token"].split(".")[1])); //descifro el token
        //ingreso de varios perfiles de usuario
        if(ejemJson["authorities"].length > 0) {
          //his.storage.set("userid", ejemJson["per_id"]);
          //this.storage.set("ci", ejemJson["user_name"]);
          this.srvApi.getPerson(user, this.mitoken).subscribe(
            (data) => {
              console.log(data);
              this.router.navigateByUrl('PaginaA')
            },
            (error) => {
              //this.storage.set("status", false);
              console.log(error);
              //this.mensajeError = error;
              //Alert("¡Datos incorrectos debes validar brigada!");
            }
          )
        }

      }
    )
  }

  async login(form) {
    var mpass = form.usupClave;
    var muser =form.usupLogin;
    console.log(mpass);
    console.log(muser);
    /*const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      duration: 1500,
    })*/

    //await loading.present();

    const user = muser;
    const pass = Md5.hashStr(mpass);
    this.loginOnline(user, pass);
    //await loading.onDidDismiss();

  }

}
