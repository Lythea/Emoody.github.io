import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Survey3S2PageRoutingModule } from './survey3-s2-routing.module';

import { Survey3S2Page } from './survey3-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Survey3S2PageRoutingModule
  ],
  declarations: [Survey3S2Page]
})
export class Survey3S2PageModule {}
