/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.page.html',
  styleUrls: ['./emoji.page.scss'],
})
export class EmojiPage implements OnInit {
val: any;
emoji: any;
lastEmittedValue: any;

value_selected: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  happy(){
    const val =(document.getElementById('range') as HTMLInputElement);
    val.disabled=false;
    const next =(document.getElementById('next') as HTMLInputElement);
    next.disabled=false;
  }
  sad(){
    const val =(document.getElementById('range') as HTMLInputElement);
    val.disabled=false;
    const next =(document.getElementById('next') as HTMLInputElement);
    next.disabled=false;
  }
  afraid(){
    const val =(document.getElementById('range') as HTMLInputElement);
    val.disabled=false;
    const next =(document.getElementById('next') as HTMLInputElement);
    next.disabled=false;
  }
  disgusted(){
    const val =(document.getElementById('range') as HTMLInputElement);
    val.disabled=false;
    const next =(document.getElementById('next') as HTMLInputElement);
    next.disabled=false;
  }
  angry(){
    const val =(document.getElementById('range') as HTMLInputElement);
    val.disabled=false;
    const next =(document.getElementById('next') as HTMLInputElement);
    next.disabled=false;
  }
  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
    localStorage.setItem('range',this.lastEmittedValue);
  }
  begin(){
    localStorage.setItem('emoji',this.value_selected);
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const date = localStorage.getItem('date');
    formData.append('date', date);
    const emoji = localStorage.getItem('emoji');
    const range = localStorage.getItem('range');
    formData.append('id', id);
    formData.append('date', date);
    formData.append('emoji', emoji);
    formData.append('range', range);
    fetch('http://localhost/newmobileapp/src/app/BackendUser/regData1.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      console.log(value.data);
    });
    this.router.navigate(['survey1-s1']);
  }

  }

