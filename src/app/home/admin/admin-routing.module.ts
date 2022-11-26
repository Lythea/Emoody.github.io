import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'emoji-data',
    loadChildren: () => import('./pages/emoji-data/emoji-data.module').then( m => m.EmojiDataPageModule)
  },
  {
    path: 'socio-data',
    loadChildren: () => import('./pages/socio-data/socio-data.module').then( m => m.SocioDataPageModule)
  },
  {
    path: 'health-data',
    loadChildren: () => import('./pages/health-data/health-data.module').then( m => m.HealthDataPageModule)
  },
  {
    path: 'survey1-data',
    loadChildren: () => import('./pages/survey1-data/survey1-data.module').then( m => m.Survey1DataPageModule)
  },
  {
    path: 'survey2-data',
    loadChildren: () => import('./pages/survey2-data/survey2-data.module').then( m => m.Survey2DataPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
