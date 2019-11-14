import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaleconoscoPage } from './faleconosco.page';

const routes: Routes = [
  {
    path: '',
    component: FaleconoscoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaleconoscoPage]
})
export class FaleconoscoPageModule {}
