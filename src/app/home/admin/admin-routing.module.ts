import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'admin1',
    loadChildren: () => import('./admin1/admin1.module').then( m => m.Admin1PageModule)
  },
  {
    path: 'admin1',
    loadChildren: () => import('./admin1/admin1.module').then( m => m.Admin1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
