import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Survey2S2PageRoutingModule } from './survey2-s2-routing.module';

import { Survey2S2Page } from './survey2-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Survey2S2PageRoutingModule
  ],
  declarations: [Survey2S2Page]
})
export class Survey2S2PageModule {}
