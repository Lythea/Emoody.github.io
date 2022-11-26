import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Survey1DataPage } from './survey1-data.page';

const routes: Routes = [
  {
    path: '',
    component: Survey1DataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Survey1DataPageRoutingModule {}
