import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  resultado: Observable<any>;




  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, public http: HttpClient, public jogo: JogosService, public menuCtrl: MenuController) {
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

  ngOnInit() {
    this.listaJogos();
  }

  listaJogos() {
    this.resultado = this.jogo.listar();
    console.log(this.resultado);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }



  // ! TESTE

  buscarJogos( event ){
    const texto = event.target.value;
    console.log(texto);
  }

}
