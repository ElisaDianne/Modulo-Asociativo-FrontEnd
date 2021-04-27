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
  mitoken;
  firstConnection = "";
  statuslogin = false;
  data_inicial;
  mestado = 0;
  formularioData = new FormGroup({
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
  }

  loginOnline(user, pass){
    this.srvApi.postLogin(user, pass).subscribe(
      (data) => {
        console.log(data);
        this.mitoken = data["access_token"]; //guardo el token

        var ejemJson = JSON.parse(atob(data["access_token"].split(".")[1])); //descifro el token
        //ingreso de varios perfiles de usuario
        if(ejemJson["authorities"].length > 0) {
          //his.storage.set("userid", ejemJson["per_id"]);
          //this.storage.set("ci", ejemJson["user_name"]);
          this.srvApi.getPerson(ejemJson["per_id"], this.mitoken).subscribe(
            (data) => {
              if (data["sectorDisperso"].length >0 ) { //cambiar
                localStorage.setItem("dataUser", JSON.stringify(data)); //IMPORTANTE> eliminar localStorage cuando se finalice el proceso de guardado
                //this.storage.set("userDat", data);
                this.router.navigateByUrl('/PaginaA');
              } else {
                //this.presentAlert("Notiene asignado un sector disperso Contacte con el administrador");
              }
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

  async login() {
    var mpass = this.formularioData.value.usupClave;
    var muser =this.formularioData.value.usupLogin;

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