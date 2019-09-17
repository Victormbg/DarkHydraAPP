import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaginaAmigosPage } from './pagina-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAmigosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginaAmigosPage]
})
export class PaginaAmigosPageModule {}
