import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  public isSearchbarOpened = false;
  search: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}



