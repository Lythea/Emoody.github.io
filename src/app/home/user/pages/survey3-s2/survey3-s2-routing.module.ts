import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Survey3S2Page } from './survey3-s2.page';

const routes: Routes = [
  {
    path: '',
    component: Survey3S2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Survey3S2PageRoutingModule {}
