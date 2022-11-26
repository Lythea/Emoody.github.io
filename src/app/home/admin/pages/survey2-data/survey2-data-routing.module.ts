import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Survey2DataPage } from './survey2-data.page';

const routes: Routes = [
  {
    path: '',
    component: Survey2DataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Survey2DataPageRoutingModule {}
