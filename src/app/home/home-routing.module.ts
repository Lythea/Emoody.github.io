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
  },
  {
    path: 'users',
    loadChildren: () => import('./registrations/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./registrations/owner/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'option',
    loadChildren: () => import('./registrations/option/option.module').then( m => m.OptionPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
