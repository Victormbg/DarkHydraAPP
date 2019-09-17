import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'md-contacts'
  ];
  public items: Array<{ title: string;   icon: string }> = [];
  public conf: Array<{ title: string;   icon: string }> = [];
  
  constructor() {
    
    this.items.push({
        title:'Amigos',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    
    this.conf.push({
      title:'Configurações ',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
    
    


  }

    
    

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
