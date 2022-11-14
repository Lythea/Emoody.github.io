import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {path: 'home',component: HomePage, },
  {path: 'user',loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)},
  {path: 'admin',loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)},
  {
    path: 'admin1',
    loadChildren: () => import('./admin/admin1/admin1.module').then( m => m.Admin1PageModule)
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
