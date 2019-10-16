import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController, NavController, NavParams } from "@ionic/angular";
import { NavigationExtras, Router } from "@angular/router";
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  isUserFocus;isPassFocus;usuario;
  FB_APP_ID: number = 2392489640796829;
  user: string; senha: string; res: string;

  constructor(public menuCtrl: MenuController,
    public alertCrtl: AlertController,
    public navCtrl: NavController,
    public router: Router,
    //private googlePlus: GooglePlus,
    //private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private platform: Platform,
    public alertController: AlertController,
    //private fb: Facebook,
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  /*
    async doGoogleLogin(){
      const loading = await this.loadingController.create({
        message: 'Please wait...'
      });
      this.presentLoading(loading);
      this.googlePlus.login({
        'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
        })
        .then(user => {
          //save user data on the native storage
          this.nativeStorage.setItem('google_user', {
            name: user.displayName,
            email: user.email,
            picture: user.imageUrl
          })
          .then(() => {
             this.router.navigate(["/user"]);
          }, (error) => {
            console.log(error);
          })
          loading.dismiss();
        }, err => {
          console.log(err);
          if(!this.platform.is('cordova')){
            this.presentAlert();
          }
          loading.dismiss();
        })
    }
  */
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
      buttons: ['OK']
    });

    await alert.present();
  }


  async presentLoading(loading) {
    return await loading.present();
  }

  /*
  
  async doFbLogin() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    //the permissions your facebook app needs from the user
    const permissions = ["public_profile", "email"];

    this.fb.login(permissions)
      .then(response => {
        let userId = response.authResponse.userID;
        //Getting name and email properties
        //Learn more about permissions in https://developers.facebook.com/docs/facebook-login/permissions

        this.fb.api("/me?fields=name,email", permissions)
          .then(user => {
            user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            //now we have the users info, let's save it in the NativeStorage
            this.nativeStorage.setItem('facebook_user',
              {
                name: user.name,
                email: user.email,
                picture: user.picture
              })
              .then(() => {
                this.router.navigate(["/user"]);
                loading.dismiss();
              }, error => {
                console.log(error);
                loading.dismiss();
              })
          })
      }, error => {
        console.log(error);
        if (!this.platform.is('cordova')) {
          this.presentAlert();
        }
        loading.dismiss();
      });
  }

  
  */


}








