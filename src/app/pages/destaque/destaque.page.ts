import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.page.html',
  styleUrls: ['./destaque.page.scss'],
})
export class DestaquePage implements OnInit {
  public isSearchbarOpened = false;
  constructor() { }

  ionRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
  ionPull(event) {
    console.log('ionPull Event Triggered!');
  }
  ionStart(event) {
    console.log('ionStart Event Triggered!');
  }


  ngOnInit() {
  }

}
