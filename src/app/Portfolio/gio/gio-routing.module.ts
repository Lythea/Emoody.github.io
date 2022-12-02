import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GioPage } from './gio.page';

const routes: Routes = [
  {
    path: '',
    component: GioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GioPageRoutingModule {}
