


import { Component, OnInit } from '@angular/core';
import { Md5 } from "ts-md5/dist/md5";
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../servicios/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LOGINComponent implements OnInit {

  constructor(
    public srvApi: LoginService,
    //public loadinCtrl: LoadinController,
    private storage: Storage,
    public navCtrl: NavController,
    public alertController: AlertController,
    private route: Router

  ) {
   }

  ngOnInit(): void {
  }

  loginOnline(user, pass){
    this.srvApi.postLogin(user, pass).subscribe(
      (data) => {
        console.log(data);
        //this.storage.set("status", true);
        //this.storage.set("pass", true);
        this.mitoken = data["access_token"]; //guardo el token

        var ejemJson = JSON.parse(atob(data["access_token"].split(".")[1])); //descifro el token
        //ingreso de varios perfiles de usuario
        if(ejemJson["authorities"].length > 0) {
          this.storage.set("userid", ejemJson["per_id"]);
          this.storage.set("ci", ejemJson["user_name"]);
          

          this.srvApi.getPerson(ejemJson["per_id"], this.mitoken).subscribe(
            (data) => {
              if (data["sectorDisperso"].length >0 ) { //cambiar
                localStorage.setItem("dataUser", JSON.stringify(data));
                this.storage.set("userDat", data);
                
                this.route.navigateByUrl('/home');
              } else {
                this.presentAlert("Notiene asignado un sector disperso Contacte con el administrador");
              }
            },
            (error) => {
              this.storage.set("status", false);
              console.log(error);
              this.mensajeError = error;
              this.presentAlert("¡Datos incorrectos debes validar brigada!");
            }
          )
        }

      }
    )
  }

  async login() {
    var mpass = this.formularioData.value.usupClave;
    var muser =this.formularioData.value.usupLogin;
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      duration: 1500,
    });
    await loading.present();
    const user = muser;
    const pass = Md5.hashStr(mpass);
    if(this.mestado == 1){
      this.loginOnline(user, pass);
    } else {
      if (this.mestado == 0) {
        this.presentAlert("¡Seleccionar una opción de ingreso!");
      }
    }
    await loading.onDidDismiss();
  }


}
