import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanielaPage } from './daniela.page';

const routes: Routes = [
  {
    path: '',
    component: DanielaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanielaPageRoutingModule {}
