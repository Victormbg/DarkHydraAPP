import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { JogosService } from "../../services/jogos.service";
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';

@Component({
  selector: "app-pagina-jogo",
  templateUrl: "./pagina-jogo.page.html",
  styleUrls: ["./pagina-jogo.page.scss"]
})
export class PaginaJogoPage implements OnInit {
  jogos = null;
  idJogo  = null;
  tituloJogo: string;
  descJogo:   string;
  tagsJogo:   string;
  imagem1:    string;
  imagem2:    string;
  imagem3:    string;
  imagem4:    string;
  // FUNÇÃO DO SLIDE
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public jogoSer: JogosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idJogo = this.route.snapshot.params['idJogo'];

    this.jogoSer.getJogoID(this.idJogo).subscribe(res => {
      this.jogos = res;
      console.log(this.jogos);
    });

    /*
    this.jogoSer.getJogos2(this.idJogo).pipe(map(jogos => {})).subscribe(result => {
      console.log(result);
    });
*/
/*
    this.jogoSer.getJogos2(this.idJogo).pipe(map(res => res.json())).subscribe(jogo => {
            console.log(jogo);
    });



    this.jogoSer.getJogos2(this.idJogo).pipe(map(res => res.json()).subscribe(data => {
        json = data;
    }));

    var json;
    var info = []
    for (var i of json.data) {
    info.push(i.quantity_produced);
    }
  */
    /*
    var aula;
    this.http.get('https://sleepy-river-60466.herokuapp.com/jogos/t').map(res => res.json()).subscribe(data => {
        aula = data;
        console.log(aula);
    });

    this.jogoSer.getJogos2(this.idJogo).pipe(
        map(res => res.json()).subscribe(data => {
            aula = data;
            console.log(aula);
        })
    );
*/



    /*
    // Get the ID that was passed with the URL
    let idJogo = this.route.snapshot.paramMap.get("idJogo");

    // Get the information from the API
    this.jogoSer.getJogoId(idJogo).subscribe(result => {
      this.information = result;
      console.log("TESTE:", result);
    });
  }
  */
  /*
  ! IMPLEMENTANDO PARA MOSTRA O JOGO POREM AINDA APRESENTA ERROS
  this.id = this.route.snapshot.params['idJogo'];

  this.jogoSer.getJogoId(this.id).subscribe(res => {
    this.jogos = res;
    console.log(this.jogos);
  });

*/
}
}
