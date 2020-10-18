import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
//import { Observable } from "rxjs";
import { MenuController } from "@ionic/angular";

// service com a conexao ao banco Firebase para Jogos
import { JogosService } from "../../services/jogos/jogos.service";
// Classe modelo
import { Jogo } from "../../models/jogos";

@Component({
  selector: "app-pagina-inicial",
  templateUrl: "./pagina-inicial.page.html",
  styleUrls: ["./pagina-inicial.page.scss"]
})
export class PaginaInicialPage implements OnInit {
  jogos: Jogo[] = [];
  textoBuscar = "";
  public isSearchbarOpened = false;

  constructor(public jogoServ: JogosService, public menuCtrl: MenuController) {}

  ngOnInit() {
    const BancoRef = this.jogoServ.getJogos();
    BancoRef.snapshotChanges(["child_added"]).subscribe(res => {
      //this.jogos = [];
      res.forEach(jogo => {
        const tituloJogo = jogo.payload.val().Titulo_Do_Jogo;
        const imagem1 = jogo.payload.val().Imagem1_Do_Jogo;
        const tagsJogo = jogo.payload.val().Tags_Do_Jogo;
        //this.jogos = tituloJogo;
        console.log(tituloJogo, imagem1, tagsJogo);
        this.jogos.push(tituloJogo as Jogo, imagem1 as Jogo, tagsJogo as Jogo);
      });
    });
    }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
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

  buscarJogos(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }
}
