import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmojiPage } from './emoji.page';

const routes: Routes = [
  {
    path: '',
    component: EmojiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmojiPageRoutingModule {}
