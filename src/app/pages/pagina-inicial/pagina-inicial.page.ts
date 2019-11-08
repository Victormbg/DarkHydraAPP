import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos.service';
import { MenuController } from '@ionic/angular';
import { Jogo } from '../../models/jogos.model';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {
  resultado: Observable<any>;
  jogos: Jogo[] = [];
  textoBuscar = '';
  public isSearchbarOpened = false;

  constructor(public navCtrl: NavController, public http: HttpClient, public jogoServ: JogosService, public menuCtrl: MenuController) {
    this.jogoServ.getJogos()
    .subscribe(resp => this.jogos = resp );
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
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

  buscarJogos( event ) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }
}








