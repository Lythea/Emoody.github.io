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
    path: 'socio',
    loadChildren: () => import('./pages/socio/socio.module').then( m => m.SocioPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./pages/health/health.module').then( m => m.HealthPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
