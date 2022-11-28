import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceDataPageRoutingModule } from './attendance-data-routing.module';

import { AttendanceDataPage } from './attendance-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceDataPageRoutingModule
  ],
  declarations: [AttendanceDataPage]
})
export class AttendanceDataPageModule {}
