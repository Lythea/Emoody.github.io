import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Survey2S2Page } from './survey2-s2.page';

const routes: Routes = [
  {
    path: '',
    component: Survey2S2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Survey2S2PageRoutingModule {}
