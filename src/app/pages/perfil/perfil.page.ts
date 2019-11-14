import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { JogosService } from "../../services/jogos.service";
import { MenuController } from "@ionic/angular";
import { Jogo } from "../../models/jogos";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {
  jogos: Jogo[] = [];
  resultado: Observable<any>;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public jogoServ: JogosService,
    public menuCtrl: MenuController
  ) {
    this.jogoServ.getJogos().subscribe(resp => (this.jogos = resp));
  }

  ngOnInit() {}
}
