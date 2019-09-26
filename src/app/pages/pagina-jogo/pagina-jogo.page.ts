import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-jogo',
  templateUrl: './pagina-jogo.page.html',
  styleUrls: ['./pagina-jogo.page.scss'],
})

export class PaginaJogoPage implements OnInit {

  tituloJogo : string;
  descJogo: string;
  tagsJogo: string;
  
  jogos = {};
  idJogo = null;

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  resultado: Observable<any>;
  constructor(public navCtrl: NavController,public http: HttpClient,public jogoSer: JogosService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.listaJogos();
    
    //let idJogo = this.route.snapshot.paramMap.get('idJogo');
    
    this.idJogo = this.route.snapshot.params['idJogo'];

    this.jogoSer.getJogoId(this.idJogo).subscribe(res=> {
      this.jogos = res;
      console.log(this.jogos);
    });
    
  }
    /*

    this.id = this.route.snapshot.params['idJogo'];
    
    this.jogoSer.getJogoId(this.id).subscribe(res => {
      this.jogos = res;
      console.log(this.jogos);  
    });
    
    // Get the ID that was passed with the URL

    let id = this.activatedRoute.snapshot.paramMap.get('idJogo');
 
    // Get the information from the API
    this.jogoSer.getJogoId(id).subscribe(result => {
    this.jogos = result;
    });
  */  
  
  
  listaJogos(){
    this.resultado = this.jogoSer.listar();
    console.log(this.resultado);
  }

 
}

