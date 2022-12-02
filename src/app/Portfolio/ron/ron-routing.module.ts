import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RonPage } from './ron.page';

const routes: Routes = [
  {
    path: '',
    component: RonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RonPageRoutingModule {}
