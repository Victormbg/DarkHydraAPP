import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogosService } from '../../services/jogos.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  resultado: Observable<any>;

  //jogos: Observable<any>;
  //aqui o import da classe 
  //listajogo:Jogos[];
  
  public isSearchbarOpened = false;
    constructor(public navCtrl: NavController,public http: HttpClient,public jogo: JogosService,public menuCtrl: MenuController) {
  /*
    this.jogos = this.http.get('http://10.0.0.5:8080/jogos?apikey=scadifcabif');
    this.jogos.subscribe(
      data => {
      console.log('my data: ', data);
    })
  */
  }

  ionRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
  ionPull(event){
    console.log('ionPull Event Triggered!');
  }
  ionStart(event){
    console.log('ionStart Event Triggered!');
  }

  ngOnInit() {
    this.listaPaises();
  }
  
  listaPaises(){
    this.resultado = this.jogo.listar();
    console.log(this.resultado);
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(true);
  }

  /*

 
  onSearch(event){
    console.log(event.target.value);
  }
  
 ngOnInit() {
  this.listajogos();
  }

  listajogos(){

    this.http.get<Jogos[]>("http://10.0.0.5:8080/jogos?apikey=scadifcabif").subscribe(
      result=>{
        this.listajogo=result
      }
    )
  }
  */
 
}
