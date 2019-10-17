import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { JogosService } from "../../services/jogos.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pagina-jogo",
  templateUrl: "./pagina-jogo.page.html",
  styleUrls: ["./pagina-jogo.page.scss"]
})
export class PaginaJogoPage implements OnInit {
  information = null;
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
    // Get the ID that was passed with the URL
    let idJogo = this.route.snapshot.paramMap.get("idJogo");

    // Get the information from the API
    this.jogoSer.getJogoId(idJogo).subscribe(result => {
      this.information = result;
      console.log("TESTE:", result);
    });
  }
  /*
  ! IMPLEMENTANDO PARA MOSTRA O JOGO POREM AINDA APRESENTA ERROS
  this.id = this.route.snapshot.params['idJogo'];
  
  this.jogoSer.getJogoId(this.id).subscribe(res => {
    this.jogos = res;
    console.log(this.jogos);  
  });

*/
}
