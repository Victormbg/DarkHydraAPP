import { Component } from '@angular/core';
import { AlertController,NavController,NavParams } from "@ionic/angular";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-tela-login-incial',
  templateUrl: 'tela-login.page.html',
  styleUrls: ['tela-login.page.scss'],
})
export class HomePage {
  user: string;senha: string;res: string;

  constructor(public alertCrtl : AlertController,
    public navCtrl: NavController,
    public router: Router) {}

    async presentAlert(){

      const alerta = await this.alertCrtl.create({
        header:'ERRO',
        message: this.res,
        buttons: ['OK']
      });
      await alerta.present();
    }  
}