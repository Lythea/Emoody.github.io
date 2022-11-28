import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
/*
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public router: Router,

  ) {this.initializeApp();}
  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
    });
  }
  */
}
