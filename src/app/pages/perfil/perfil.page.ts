import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { AmigosService } from "../../services/amigos.service";


@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {
  amigos = null;
  idPerfil = null;

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
  ) { }

  ngOnInit() {
    this.idPerfil = this.route.snapshot.params["idSeguido"];

    this.amiSer.getPerfil(this.idPerfil).subscribe(res => {
      this.amigos = res;
      console.log(this.amigos);
    });
  }

}
