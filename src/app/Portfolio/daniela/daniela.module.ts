import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanielaPageRoutingModule } from './daniela-routing.module';

import { DanielaPage } from './daniela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanielaPageRoutingModule
  ],
  declarations: [DanielaPage]
})
export class DanielaPageModule {}
