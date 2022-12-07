import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-yanrei',
  templateUrl: './yanrei.page.html',
  styleUrls: ['./yanrei.page.scss'],
})
export class YanreiPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
gotomenu(){
  this.router.navigate(['user']);
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
}
