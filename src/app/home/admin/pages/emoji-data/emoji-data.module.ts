import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmojiDataPageRoutingModule } from './emoji-data-routing.module';

import { EmojiDataPage } from './emoji-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmojiDataPageRoutingModule
  ],
  declarations: [EmojiDataPage]
})
export class EmojiDataPageModule {}
