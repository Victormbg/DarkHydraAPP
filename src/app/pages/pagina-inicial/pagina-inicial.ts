import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-incial',
  templateUrl: 'pagina-inicial.page.html',
  styleUrls: ['pagina-inicial.page.scss'],
})
export class HomePage {
  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController) {}

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

  /*
  onSearch(event){
    console.log(event.target.value);
  }
  */

}




  
