
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuController } from "@ionic/angular";

import { Destaque } from './../../models/destaque';
import { JogosService } from '../../services/jogos/jogos.service';
@Component({
  selector: "app-destaque",
  templateUrl: "./destaque.page.html",
  styleUrls: ["./destaque.page.scss"]
})
export class DestaquePage implements OnInit {
  resultado: Observable<any>;
  jogos: Destaque[] = [];
  textoBuscar = "";
  public isSearchbarOpened = false;
  jogo: any;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public jogoServ: JogosService,
    public menuCtrl: MenuController
  ) {}

  ngOnInit() {
    const BancoRef = this.jogoServ.getJogos();
    BancoRef.snapshotChanges(["child_added"]).subscribe(res => {
      this.jogos = [];
      res.forEach(jogo => {
        const tituloJogo = jogo.payload.val().Titulo_Do_Jogo;
        const imagem1 = jogo.payload.val().Imagem1_Do_Jogo;
        console.log(tituloJogo, imagem1);
        this.jogos.push(tituloJogo as Destaque, imagem1 as Destaque);
      });
    });
  }

  ionRefresh(event) {
    console.log("Pull Event Triggered!");
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1000);
  }
  ionPull(event) {
    console.log("ionPull Event Triggered!");
  }
  ionStart(event) {
    console.log("ionStart Event Triggered!");
  }

  sliderConfig = {
    spaceBetween: 5,
    centeredSlides: true,
    initialSlide: 0,
    slidesPerView: 1
  };

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
