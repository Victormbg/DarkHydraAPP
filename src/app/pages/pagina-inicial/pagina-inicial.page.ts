import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');

      //complete()  signify that the refreshing has completed and to close the refresher
      event.target.complete();
    }, 1000);
  }
  ionPull(event){
    //Emitted while the user is pulling down the content and exposing the refresher.
    console.log('ionPull Event Triggered!');
  }
  ionStart(event){
    //Emitted when the user begins to start pulling down.
    console.log('ionStart Event Triggered!');
  }



}





 


