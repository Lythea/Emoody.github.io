import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocioDataPageRoutingModule } from './socio-data-routing.module';

import { SocioDataPage } from './socio-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocioDataPageRoutingModule
  ],
  declarations: [SocioDataPage]
})
export class SocioDataPageModule {}
