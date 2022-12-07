import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hannah',
  templateUrl: './hannah.page.html',
  styleUrls: ['./hannah.page.scss'],
})
export class HannahPage implements OnInit {

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
