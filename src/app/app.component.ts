import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Loja',
      url: '/tabs',
      icon: 'md-basket'
    },
    {
      title: 'Comunidade',
      url: '/comunidade',
      icon: 'md-contacts'
    },
    {
      title: 'Jogos',
      url: '/biblioteca',
      icon: 'folder-open'
    },
    {
      title: 'Conta',
      url: '/conta',
      icon: 'md-contact'
    },
    {
      title: 'Configurações',
      url: '/configuracoes',
      icon: 'md-construct'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
