import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
gotohannah(){
  this.router.navigate(['hannah']);
}
gotoron(){
  this.router.navigate(['ron']);
}
gotogio(){
  this.router.navigate(['gio']);
}
gotodaniela(){
  this.router.navigate(['daniela']);
}
gotoyanrei(){
  this.router.navigate(['yanrei']);
}
gotodianne(){
  this.router.navigate(['dianne']);
}
gotomenu(){
  this.router.navigate(['user']);
}

}
