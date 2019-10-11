import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  resultado: Observable<any>;
  constructor(public navCtrl: NavController, public http: HttpClient, public jogo: JogosService, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.listaJogos();
  }

  listaJogos() {
    this.resultado = this.jogo.listar();
    console.log("RESUL:",this.resultado);
  }
}
