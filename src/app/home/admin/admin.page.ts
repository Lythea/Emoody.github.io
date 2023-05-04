import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {format,parseISO} from 'date-fns';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
finalDate: any= [];
data: any =[];
id: any;
company: any;
date: any;
position: any;
date1: any;
date2: any;
  userTotal: any = localStorage.getItem('userTotal');
  userActive: any = localStorage.getItem('userActive');
  userInactive = this.userTotal - this.userActive;
formattedString='';
  constructor(private router: Router) { this.setToday();}
  setToday(){
    this.formattedString = format(new Date(),'MMM d, yyyy');
  }
  ngOnInit() {
  }
  emoji(){

    const formData = new FormData();
    for (let i = 1; i < 4; i++) {
      this.finalDate[i] =localStorage.getItem('newDate'+i);
    }
    this.id=localStorage.getItem('id');
    this.company=localStorage.getItem('company');
    this.date=localStorage.getItem('date');
    this.position=localStorage.getItem('position');


    for (let i = 1; i < 4; i++) {
      formData.append('date' + i, this.finalDate[i]);
    }
    formData.append('id', this.id);
    formData.append('date', this.date);
    formData.append('company',this.company);
    formData.append('position',this.position);

    fetch('http://localhost/EMOODY/src/app/BackendAdmin/AttendanceBackend/Active.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      const userActive = value.data[0].TOTAL;
      localStorage.setItem('userActive',userActive);
    });
    fetch('http://localhost/EMOODY/src/app/BackendAdmin/AttendanceBackend/Total.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value1 => {
      const userTotal = value1.data[0].TOTAL;
      localStorage.setItem('userTotal',userTotal);
    });
    this.router.navigate(['attendance-data']);
  }
  begin(): void{
    this.router.navigate(['admin1']);
  }
  socio(){

    const formData = new FormData();

    this.company=localStorage.getItem('company');
    this.date1=localStorage.getItem('newDate1');
    this.date2=localStorage.getItem('newDate2');
    formData.append('date1', this.date1);
    formData.append('date2', this.date2);
    formData.append('company', this.company);

    fetch('http://localhost/EMOODY/src/app/BackendAdmin/Monthly/socioData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {

      for (let i = 1; i < 6; i++) {
        localStorage.setItem('sq1val'+i,value.result1[i]);
      }
      for (let i = 1; i < 5; i++) {
        localStorage.setItem('sq2val'+i,value.result2[i]);
      }
      for (let i = 1; i < 9; i++) {
        localStorage.setItem('sq3val'+i,value.result3[i]);
      }
      for (let i = 1; i < 7; i++) {
        localStorage.setItem('sq4val'+i,value.result4[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('sq5val'+i,value.result5[i]);
      }
      for (let i = 1; i < 4; i++) {
        localStorage.setItem('sq6val'+i,value.result6[i]);
      }
      for (let i = 1; i < 3; i++) {
        localStorage.setItem('sq7val'+i,value.result7[i]);
      }
      for (let i = 1; i < 4; i++) {
        localStorage.setItem('sq8val'+i,value.result8[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('sq9val'+i,value.result9[i]);
      }
      for (let i = 1; i < 7; i++) {
        localStorage.setItem('sq10val'+i,value.result10[i]);
      }
      for (let i = 1; i < 9; i++) {
        localStorage.setItem('sq11val'+i,value.result11[i]);
      }
    });
    this.router.navigate(['socio-data']);
  }
  health(){
    const formData = new FormData();
    this.company=localStorage.getItem('company');
    this.date1=localStorage.getItem('newDate1');
    this.date2=localStorage.getItem('newDate2');
    formData.append('date1', this.date1);
    formData.append('date2', this.date2);
    formData.append('company', this.company);
    fetch('http://localhost/EMOODY/src/app/BackendAdmin/Monthly/healthData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {

      for (let i = 1; i < 7; i++) {
        localStorage.setItem('q2val'+i,value.result1[i]);
      }
      for (let i = 1; i < 3; i++) {
        localStorage.setItem('q3r1val'+i,value.result2[i]);
      }
      for (let i = 1; i < 3; i++) {
        localStorage.setItem('q3r2val'+i,value.result3[i]);
      }
      for (let i = 1; i < 3; i++) {
        localStorage.setItem('q3r3val'+i,value.result4[i]);
      }
      for (let i = 1; i < 3; i++) {
        localStorage.setItem('q3r4val'+i,value.result5[i]);
      }
      for (let i = 1; i < 3; i++) {
        localStorage.setItem('q3r5val'+i,value.result6[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q4val'+i,value.result7[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q5val'+i,value.result8[i]);
      }
      for (let i = 1; i < 4; i++) {
        localStorage.setItem('q6val'+i,value.result9[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q7r1val'+i,value.result10[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q7r2val'+i,value.result11[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q7r3val'+i,value.result12[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q7r4val'+i,value.result13[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q7r5val'+i,value.result14[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q8val'+i,value.result18[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q9r1val'+i,value.result15[i]);
      }
      for (let i = 1; i < 6; i++) {
        localStorage.setItem('q9r2val'+i,value.result16[i]);
      }
      for (let i = 1; i < 5; i++) {
        localStorage.setItem('q10val'+i,value.result17[i]);
      }
    });

    this.router.navigate(['health-data']);
  }
}
