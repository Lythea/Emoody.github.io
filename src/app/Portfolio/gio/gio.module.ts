import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GioPageRoutingModule } from './gio-routing.module';

import { GioPage } from './gio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GioPageRoutingModule
  ],
  declarations: [GioPage]
})
export class GioPageModule {}
