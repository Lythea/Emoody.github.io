import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HannahPageRoutingModule } from './hannah-routing.module';

import { HannahPage } from './hannah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HannahPageRoutingModule
  ],
  declarations: [HannahPage]
})
export class HannahPageModule {}
