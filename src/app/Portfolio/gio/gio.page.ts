import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gio',
  templateUrl: './gio.page.html',
  styleUrls: ['./gio.page.scss'],
})
export class GioPage implements OnInit {

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

