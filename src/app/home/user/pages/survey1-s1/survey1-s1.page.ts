/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey1',
  templateUrl: './survey1-s1.page.html',
  styleUrls: ['./survey1-s1.page.scss'],
})
export class Survey1Page implements OnInit {
  data1s1: any;
  data2s1: any;
  data3s1: any;
  data4s1: any;
  data5s1: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  val1(value: boolean): void {
    let newValue1s1: string;
    newValue1s1 = value ? 'Yes' : 'No';
    localStorage.setItem('val1_s1', newValue1s1);
  }
  val2(value: boolean): void {
    let newValue2s1: string;
    newValue2s1 = value ? 'Yes' : 'No';
    localStorage.setItem('val2_s1', newValue2s1);
  }
  val3(value: boolean): void {
    let newValue3s1: string;
    newValue3s1 = value ? 'Yes' : 'No';
    localStorage.setItem('val3_s1', newValue3s1);
  }
  val4(value: boolean): void {
    let newValue4s1: string;
    newValue4s1 = value ? 'Yes' : 'No';
    localStorage.setItem('val4_s1', newValue4s1);
  }
  val5(value: boolean): void {
    let newValue5s1: string;
    newValue5s1 = value ? 'Yes' : 'No';
    localStorage.setItem('val5_s1', newValue5s1);
  }
  next(): void{
    this.router.navigate(['survey1-s2']);
  }
}
