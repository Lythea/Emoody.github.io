/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.page.html',
  styleUrls: ['./emoji.page.scss'],
})
export class EmojiPage implements OnInit {
val: any;
selectedValue: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  happy(){
    console.log('Happy');
    this.router.navigate(['survey1-s1']);
  }
  sad(){
    console.log('Happy');
  }
  afraid(){
    console.log('Happy');
  }
  disgusted(){
    console.log('Happy');
  }
  angry(){
    console.log('Happy');
  }
  begin(){
    this.router.navigate(['survey1-s1']);
  }
  }

