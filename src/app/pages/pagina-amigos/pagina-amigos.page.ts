import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { AmigosService } from "../../services/amigos.service";

@Component({
  selector: "app-pagina-amigos",
  templateUrl: "./pagina-amigos.page.html",
  styleUrls: ["./pagina-amigos.page.scss"]
})
export class PaginaAmigosPage implements OnInit {
  amigos = null;
  idPerfil = null;

  nomePerfil: string;
  descricaoPerfil: string;
  imagemPerfil: string;
  destaquePerfil: string;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public amiSer: AmigosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPerfil = this.route.snapshot.params["idSeguido"];

    this.amiSer.getAmigoID(this.idPerfil).subscribe(res => {
      this.amigos = res;
      console.log(this.amigos);
    });
  }
}
