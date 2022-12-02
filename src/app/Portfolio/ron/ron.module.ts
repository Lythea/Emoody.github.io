import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RonPageRoutingModule } from './ron-routing.module';

import { RonPage } from './ron.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RonPageRoutingModule
  ],
  declarations: [RonPage]
})
export class RonPageModule {}
