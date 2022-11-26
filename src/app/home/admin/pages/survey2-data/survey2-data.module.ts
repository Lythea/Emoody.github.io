import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Survey2DataPageRoutingModule } from './survey2-data-routing.module';

import { Survey2DataPage } from './survey2-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Survey2DataPageRoutingModule
  ],
  declarations: [Survey2DataPage]
})
export class Survey2DataPageModule {}
