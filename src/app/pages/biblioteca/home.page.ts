import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos/jogos.service';
import { MenuController } from '@ionic/angular';
import { Jogo } from '../../models/jogos';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  resultado: Observable<any>;
  jogos: Jogo[] = [];
  textoBuscar = '';

  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, public http: HttpClient, public jogoServ: JogosService, public menuCtrl: MenuController) {
    this.jogoServ.getBiblioteca();
  }

  ionRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  ionPull(event) {
    console.log('ionPull Event Triggered!');
  }

  ionStart(event) {
    console.log('ionStart Event Triggered!');
  }

  
  ngOnInit() { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  buscarJogos( event ) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }




 

}
