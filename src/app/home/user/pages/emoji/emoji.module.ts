import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmojiPageRoutingModule } from './emoji-routing.module';

import { EmojiPage } from './emoji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmojiPageRoutingModule
  ],
  declarations: [EmojiPage]
})
export class EmojiPageModule {}
