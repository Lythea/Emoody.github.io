/* eslint-disable one-var */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.page.html',
  styleUrls: ['./survey1.page.scss'],
})
export class Survey1Page implements OnInit {
num1: any;
num2: any;
num3: any;
num4: any;
num5: any;
num6: any;
num7: any;
num8: any;
num9: any;
num10: any;
newVal: any= [];
data: any = [];
finalData: any=[];
result;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  val1(value: boolean): void {
    this.newVal[1]= value ? 'Yes' : 'No';
  }
  val2(value: boolean): void {
    this.newVal[2]= value ? 'Yes' : 'No';
  }
  val3(value: boolean): void {
    this.newVal[3]= value ? 'Yes' : 'No';
  }
  val4(value: boolean): void {
    this.newVal[4]= value ? 'Yes' : 'No';
  }
  val5(value: boolean): void {
    this.newVal[5]= value ? 'Yes' : 'No';
  }
  val6(value: boolean): void {
    this.newVal[6]= value ? 'Yes' : 'No';
  }
  val7(value: boolean): void {
    this.newVal[7]= value ? 'Yes' : 'No';
  }
  val8(value: boolean): void {
    this.newVal[8]= value ? 'Yes' : 'No';
  }
  val9(value: boolean): void {
    this.newVal[9]= value ? 'Yes' : 'No';
  }
  val10(value: boolean): void {
    this.newVal[10]= value ? 'Yes' : 'No';
  }

  next(): void{
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const date = localStorage.getItem('date');
    const company = localStorage.getItem('company');

    formData.append('date', date);
    formData.append('id', id);

    formData.append('company', company);
    for (let i = 1; i < 11; i++) {
      if (!this.newVal[i]){
        this.newVal[i] = 'No';
      }
    }
    for (let i = 1; i < 11; i++) {
      localStorage.setItem('s1val'+ i, this.newVal[i]);
    }
    for (let i = 1; i < 11; i++) {
      this.finalData[i] =localStorage.getItem('s1val'+ i);
    }

    for (let i = 0; i < 11; i++) {
        formData.append('data' + i, this.finalData[i]);
      }

    fetch('http://api.emoody.online/BackendUser/registerDailysurvey1.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      console.log(value.data);
    });
    this.router.navigate(['survey2']);
  }
}
