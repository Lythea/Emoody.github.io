import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Survey1S2PageRoutingModule } from './survey1-s2-routing.module';

import { Survey1S2Page } from './survey1-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Survey1S2PageRoutingModule
  ],
  declarations: [Survey1S2Page]
})
export class Survey1S2PageModule {}
