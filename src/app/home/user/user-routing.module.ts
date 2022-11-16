import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {path: '',component: UserPage},
  {
    path: 'survey1',
    loadChildren: () => import('./pages/survey1-s1/survey1-s1.module').then( m => m.Survey1PageModule)
  },
  {
    path: 'survey2',
    loadChildren: () => import('./pages/survey2-s1/survey2-s1.module').then( m => m.Survey2PageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'survey3',
    loadChildren: () => import('./pages/survey3-s1/survey3-s1.module').then( m => m.Survey3PageModule)
  },
  {
    path: 'emoji',
    loadChildren: () => import('./pages/emoji/emoji.module').then( m => m.EmojiPageModule)
  },
  {
    path: 'survey1-s2',
    loadChildren: () => import('./pages/survey1-s2/survey1-s2.module').then( m => m.Survey1S2PageModule)
  },
  {
    path: 'survey1-s2',
    loadChildren: () => import('./pages/survey1-s2/survey1-s2.module').then( m => m.Survey1S2PageModule)
  },
  {
    path: 'survey2-s2',
    loadChildren: () => import('./pages/survey2-s2/survey2-s2.module').then( m => m.Survey2S2PageModule)
  },
  {
    path: 'survey3-s2',
    loadChildren: () => import('./pages/survey3-s2/survey3-s2.module').then( m => m.Survey3S2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
