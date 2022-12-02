import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YanreiPageRoutingModule } from './yanrei-routing.module';

import { YanreiPage } from './yanrei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YanreiPageRoutingModule
  ],
  declarations: [YanreiPage]
})
export class YanreiPageModule {}
