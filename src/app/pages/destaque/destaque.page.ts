import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuController } from "@ionic/angular";
import { Destaque } from "../../models/destaque";
import { DestaqueService } from "../../services/destaque.service";

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
    public desServ: DestaqueService,
    public menuCtrl: MenuController
  ) {
    this.desServ.getJogos().subscribe(resp => (this.jogos = resp));
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
  ngOnInit() {}

  sliderConfig = {
    spaceBetween: 5,
    centeredSlides: true,
    initialSlide: 0,
    slidesPerView: 1
  };
}
