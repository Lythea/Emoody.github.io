import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiannePage } from './dianne.page';

const routes: Routes = [
  {
    path: '',
    component: DiannePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiannePageRoutingModule {}
