import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos.service';
import { MenuController } from '@ionic/angular';
import { Jogo } from '../../models/jogos.model';


@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.page.html',
  styleUrls: ['./destaque.page.scss'],
})
export class DestaquePage implements OnInit {
  resultado: Observable<any>;
  jogos: Jogo[] = [];
  textoBuscar = '';
  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, public http: HttpClient, public jogoServ: DestaqueService, public menuCtrl: MenuController) {
    this.jogoServ.getJogos()
    .subscribe(resp => this.jogos = resp );
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
  }

}
