import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuController } from "@ionic/angular";
import { AmigosService } from "../../services/amigos.service";
import { Perfil } from "../../models/perfil";

@Component({
  selector: "app-comunidade",
  templateUrl: "./comunidade.page.html",
  styleUrls: ["./comunidade.page.scss"]
})
export class ComunidadePage implements OnInit {
  textoBuscar = "";
  public isSearchbarOpened = false;
  perfis: Perfil[] = [];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public amiServ: AmigosService,
    public menuCtrl: MenuController
  ) {
    this.amiServ
      .getPerfil()
      .subscribe(resp => ((this.perfis = resp), console.log(this.perfis)));
  }

  ngOnInit() {}

  buscarJogos(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }
}
