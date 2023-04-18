/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: '',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'splash',loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)},
  {path: 'user',loadChildren: () => import('./home/user/user.module').then( m => m.UserPageModule)},
  {path: 'survey1',loadChildren: () => import('./home/user/pages/survey1/survey1.module').then( m => m.Survey1PageModule)},
  {path: 'survey2',loadChildren: () => import('./home/user/pages/survey2/survey2.module').then( m => m.Survey2PageModule)},
  {path: 'health',loadChildren: () => import('./home/user/pages/health/health.module').then( m => m.HealthPageModule)},
  {path: 'socio',loadChildren: () => import('./home/user/pages/socio/socio.module').then( m => m.SocioPageModule)},
  {path: 'emoji',loadChildren: () => import('./home/user/pages/emoji/emoji.module').then( m => m.EmojiPageModule)},
  {path: 'success',loadChildren: () => import('./home/user/pages/success/success.module').then( m => m.SuccessPageModule)},
  {path: 'emoji-data',loadChildren: () => import('./home/admin/pages/emoji-data/emoji-data.module').then( m => m.EmojiDataPageModule)},
  {path: 'socio-data',loadChildren: () => import('./home/admin/pages/socio-data/socio-data.module').then( m => m.SocioDataPageModule)},
  {path: 'health-data',loadChildren: () => import('./home/admin/pages/health-data/health-data.module').then( m => m.HealthDataPageModule)},
  {path: 'survey1-data',loadChildren: () => import('./home/admin/pages/survey1-data/survey1-data.module').then( m => m.Survey1DataPageModule)},
  {path: 'survey2-data',loadChildren: () => import('./home/admin/pages/survey2-data/survey2-data.module').then( m => m.Survey2DataPageModule)},
  {path: 'attendance-data',loadChildren: () => import('./home/admin/pages/attendance-data/attendance-data.module').then( m => m.AttendanceDataPageModule)},
  {path: 'gio',loadChildren: () => import('./Portfolio/gio/gio.module').then( m => m.GioPageModule)},
  {path: 'hannah',loadChildren: () => import('./Portfolio/hannah/hannah.module').then( m => m.HannahPageModule)},
  {path: 'ron',loadChildren: () => import('./Portfolio/ron/ron.module').then( m => m.RonPageModule)},
  {path: 'dianne',loadChildren: () => import('./Portfolio/dianne/dianne.module').then( m => m.DiannePageModule)},
  {path: 'daniela',loadChildren: () => import('./Portfolio/daniela/daniela.module').then( m => m.DanielaPageModule)},
  {path: 'yanrei',loadChildren: () => import('./Portfolio/yanrei/yanrei.module').then( m => m.YanreiPageModule)},
  {path: 'suggestions',loadChildren: () => import('./SideMenu/suggestions/suggestions.module').then( m => m.SuggestionsPageModule)},
  {path: 'admin',loadChildren: () => import('./home/admin/admin.module').then( m => m.AdminPageModule)},
  {path: 'achievements',loadChildren: () => import('./SideMenu/achievements/achievements.module').then( m => m.AchievementsPageModule)},
  {path: 'aboutus',loadChildren: () => import('./SideMenu/aboutus/aboutus.module').then( m => m.AboutusPageModule)},
  {path: 'registration',loadChildren: () => import('./home/registration/registration.module').then( m => m.RegistrationPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
