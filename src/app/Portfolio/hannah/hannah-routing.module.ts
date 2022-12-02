import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HannahPage } from './hannah.page';

const routes: Routes = [
  {
    path: '',
    component: HannahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HannahPageRoutingModule {}
