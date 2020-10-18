import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { JogosService } from "../../services/jogos/jogos.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-pagina-jogo",
  templateUrl: "./pagina-jogo.page.html",
  styleUrls: ["./pagina-jogo.page.scss"]
})
export class PaginaJogoPage implements OnInit {
  jogos = null;
  comentarios = null;
  idJogo = null;
  //DECLARACAO DO JOGOS
  tituloJogo: string;
  descJogo: string;
  tagsJogo: string;
  imagem1: string;
  imagem2: string;
  imagem3: string;
  imagem4: string;
  produtora: number;
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
    this.idJogo = this.route.snapshot.params["$key"];
    this.jogoSer
      .getJogoID(this.idJogo)
      .snapshotChanges()
      .subscribe(res => {
        this.jogos = res;
        console.log(this.jogos);
      });
  }
}
/*
  // DECLARACAO DOS COMENTARIOS
  idComentario: number;
  idPerfil: number;
  comentario: string;
  tipoComentario: string;
  nomePerfil: string;
  imagemPerfil: string;
  this.jogoSer.getComentarios(this.idJogo);
  enviarComentario() {
    var url =
      "https://sleepy-river-60466.herokuapp.com/jogos/comentario?id=" +
      this.idJogo;
    let postData = new FormData();
    postData.append("key", "value");
    this.jogos = this.http.post(url, postData);
    this.jogos.subscribe(jogo => {
      console.log(jogo);
    });
  }
  */
