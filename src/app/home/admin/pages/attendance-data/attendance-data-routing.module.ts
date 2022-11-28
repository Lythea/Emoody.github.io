import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceDataPage } from './attendance-data.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceDataPageRoutingModule {}
