import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {path: '',component: HomePage, },
  {path: 'user',loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)},
  {path: 'admin',loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)},
  {
    path: 'emoji-data',
    loadChildren: () => import('./admin/pages/emoji-data/emoji-data.module').then( m => m.EmojiDataPageModule)
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
