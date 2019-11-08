import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos.service';
import { MenuController } from '@ionic/angular';
import { Jogo } from '../../models/jogos.model';

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
    this.jogoServ.getJogos()
    .subscribe(resp => this.jogos = resp );
  }

  // CODIGO PARA FUNCIONAR O ATUALIZAR //////////////////////////////////
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

  // FIM DO CODIGO PARA ATUALIZAR ///////////////////////////////////////////

  ngOnInit() { }

  // APARECER O SIDEMENU POR BUG POIS AO SER REMOVIDO NO
  // LOGIN E PRECISO CHAMAR ELE AQUI
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  // FIM DA FUNÇÃO PARA INICIALIZAR O SIDEMENU

  // FUNÇÂO PARA FAZER A BUSCA NA BARRA DE PESQUISA

  buscarJogos( event ) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

}
