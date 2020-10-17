import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuController } from "@ionic/angular";
import { AmigosService } from "../../services/amigos/amigos.service";
import { Amigos } from "../../models/amigos";

@Component({
  selector: 'app-seguidores',
  templateUrl: './seguidores.page.html',
  styleUrls: ['./seguidores.page.scss'],
})
export class SeguidoresPage implements OnInit {
  public isSearchbarOpened = false;
  //textoBuscar = "";
  amigos: Amigos[] = [];

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public amiServ: AmigosService,
    public menuCtrl: MenuController
  ) { 
    this.amiServ.getSeguidores().subscribe(resp => (this.amigos = resp, console.log(this.amigos)));
  }

  ngOnInit() {
  }

}
