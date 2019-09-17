import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path:'destaque',
        children:[
          {
            path:'',
            loadChildren:'../destaque/destaque.module#DestaquePageModule'
          },
        ]
      },
      {
        path:'pagina-inicial',
        children:[
          {
            path:'',
            loadChildren:'../pagina-inicial/pagina-inicial.module#PaginaInicialPageModule'
          },
        ]
      },
    ]
  },
  {
    path:'',
    redirectTo:'tabs/destaque',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
