import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiannePageRoutingModule } from './dianne-routing.module';

import { DiannePage } from './dianne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiannePageRoutingModule
  ],
  declarations: [DiannePage]
})
export class DiannePageModule {}
