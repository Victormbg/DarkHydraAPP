import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { AmigosService } from "../../services/amigos.service";
import { Amigos } from './../../models/amigos';
import { JogosService } from './../../services/jogos.service';
import { Jogo } from './../../models/jogos';

@Component({
  selector: "app-pagina-amigos",
  templateUrl: "./pagina-amigos.page.html",
  styleUrls: ["./pagina-amigos.page.scss"]
})
export class PaginaAmigosPage implements OnInit {
  amigos = null;
  idPerfil = null;
  jogos: Jogo[] = [];
  nomePerfil: string;
  descricaoPerfil: string;
  imagemPerfil: string;
  destaquePerfil: string;
  tipoUsuario: string;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public amiSer: AmigosService,
    private route: ActivatedRoute,
    public jogoServ: JogosService,
  ) {
    
  }

  ngOnInit() {
    this.idPerfil = this.route.snapshot.params["idSeguido"];

    this.amiSer.getAmigoID(this.idPerfil).subscribe(res => {
      this.amigos = res;
      console.log(this.amigos);
    });

    this.jogoServ.getJogoD(this.idPerfil).subscribe(res => {
      this.jogos = res;
      console.log(this.jogos);
    });
  }
}