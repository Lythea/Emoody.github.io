import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmojiDataPage } from './emoji-data.page';

const routes: Routes = [
  {
    path: '',
    component: EmojiDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmojiDataPageRoutingModule {}
