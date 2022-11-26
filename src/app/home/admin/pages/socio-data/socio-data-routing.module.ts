import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocioDataPage } from './socio-data.page';

const routes: Routes = [
  {
    path: '',
    component: SocioDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocioDataPageRoutingModule {}
