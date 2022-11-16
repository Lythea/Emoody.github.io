import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Survey1S2Page } from './survey1-s2.page';

const routes: Routes = [
  {
    path: '',
    component: Survey1S2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Survey1S2PageRoutingModule {}
