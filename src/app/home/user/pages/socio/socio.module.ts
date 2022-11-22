import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocioPageRoutingModule } from './socio-routing.module';

import { SocioPage } from './socio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocioPageRoutingModule
  ],
  declarations: [SocioPage]
})
export class SocioPageModule {}
