import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Survey1DataPageRoutingModule } from './survey1-data-routing.module';

import { Survey1DataPage } from './survey1-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Survey1DataPageRoutingModule
  ],
  declarations: [Survey1DataPage]
})
export class Survey1DataPageModule {}
