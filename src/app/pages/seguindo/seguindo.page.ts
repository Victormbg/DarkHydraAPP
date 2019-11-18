import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuController } from "@ionic/angular";
import { AmigosService } from "../../services/amigos.service";
import { Amigos } from "../../models/amigos";

@Component({
  selector: 'app-seguindo',
  templateUrl: './seguindo.page.html',
  styleUrls: ['./seguindo.page.scss'],
})
export class SeguindoPage implements OnInit {
  public isSearchbarOpened = false;
  //textoBuscar = "";
  amigos: Amigos[] = [];

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public amiServ: AmigosService,
    public menuCtrl: MenuController
  ) { 
    this.amiServ.getSeguindo().subscribe(resp => (this.amigos = resp, console.log(this.amigos)));
  }

  ngOnInit() {
  }

}
