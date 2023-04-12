import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HomePage} from '../app/home/home.page';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HoldableDirective } from './holdable.directive';
@NgModule({
  declarations: [AppComponent, HoldableDirective],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule,HttpClientModule],
  providers: [StatusBar,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
