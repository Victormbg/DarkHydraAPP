import { Component, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos.service';
@Component({
  selector: 'app-pagina-jogo',
  templateUrl: './pagina-jogo.page.html',
  styleUrls: ['./pagina-jogo.page.scss'],
})
export class PaginaJogoPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  resultado: Observable<any>;
  constructor(public navCtrl: NavController,public http: HttpClient,public jogo: JogosService) { }

  ngOnInit() {
    this.listaJogos();
  }
  
  listaJogos(){
    this.resultado = this.jogo.listar();
    console.log(this.resultado);
  }
}
