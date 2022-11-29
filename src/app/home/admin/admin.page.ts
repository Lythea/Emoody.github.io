import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {format,parseISO} from 'date-fns';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

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
    const dateToday = this.formattedString;
    localStorage.setItem('dateToday',dateToday);
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/AttendanceBackend/Total.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      const userTotal = value.data[0].TOTAL;
      localStorage.setItem('userTotal',userTotal);
      console.log(userTotal);
    });
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/AttendanceBackend/Active.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      const userActive = value.data[0].TOTAL;
      localStorage.setItem('userActive',userActive);
      console.log(userActive);
    });

    this.router.navigate(['attendance-data']);
  }
  begin(): void{
    this.router.navigate(['admin1']);
  }
  socio(){
    const formData = new FormData();
    const dateToday = this.formattedString;
    localStorage.setItem('dateToday',dateToday);
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Monthly/socioData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {

      localStorage.setItem('sq1val1',value.data[0].sq1val1);
      localStorage.setItem('sq1val2',value.data[0].sq1val2);
      localStorage.setItem('sq1val3',value.data[0].sq1val3);
      localStorage.setItem('sq1val4',value.data[0].sq1val4);
      localStorage.setItem('sq1val5',value.data[0].sq1val5);

      localStorage.setItem('sq2val1',value.data[0].sq1val1);
      localStorage.setItem('sq2val2',value.data[0].sq1val2);
      localStorage.setItem('sq2val3',value.data[0].sq1val3);
      localStorage.setItem('sq2val4',value.data[0].sq1val4);

      localStorage.setItem('sq3val1',value.data[0].sq3val1);
      localStorage.setItem('sq3val2',value.data[0].sq3val2);
      localStorage.setItem('sq3val3',value.data[0].sq3val3);
      localStorage.setItem('sq3val4',value.data[0].sq3val4);
      localStorage.setItem('sq3val5',value.data[0].sq3val5);
      localStorage.setItem('sq3val6',value.data[0].sq3val6);
      localStorage.setItem('sq3val7',value.data[0].sq3val7);
      localStorage.setItem('sq3val8',value.data[0].sq3val8);
      localStorage.setItem('sq3val9',value.data[0].sq3val9);

      localStorage.setItem('sq4val1',value.data[0].sq4val1);
      localStorage.setItem('sq4val2',value.data[0].sq4val2);
      localStorage.setItem('sq4val3',value.data[0].sq4val3);
      localStorage.setItem('sq4val4',value.data[0].sq4val4);
      localStorage.setItem('sq4val5',value.data[0].sq4val5);
      localStorage.setItem('sq4val6',value.data[0].sq4val6);

      localStorage.setItem('sq5val1',value.data[0].sq5val1);
      localStorage.setItem('sq5val2',value.data[0].sq5val2);
      localStorage.setItem('sq5val3',value.data[0].sq5val3);
      localStorage.setItem('sq5val4',value.data[0].sq5val4);
      localStorage.setItem('sq5val5',value.data[0].sq5val5);

      localStorage.setItem('sq6val1',value.data[0].sq6val1);
      localStorage.setItem('sq6val2',value.data[0].sq6val2);
      localStorage.setItem('sq6val3',value.data[0].sq6val3);

      localStorage.setItem('sq7val1',value.data[0].sq7val1);
      localStorage.setItem('sq7val2',value.data[0].sq7val2);

      localStorage.setItem('sq8val1',value.data[0].sq8val1);
      localStorage.setItem('sq8val2',value.data[0].sq8val2);
      localStorage.setItem('sq8val3',value.data[0].sq8val3);

      localStorage.setItem('sq9val1',value.data[0].sq9val1);
      localStorage.setItem('sq9val2',value.data[0].sq9val2);
      localStorage.setItem('sq9val3',value.data[0].sq9val3);
      localStorage.setItem('sq9val4',value.data[0].sq9val4);
      localStorage.setItem('sq9val5',value.data[0].sq9val5);

      localStorage.setItem('sq10val1',value.data[0].sq10val1);
      localStorage.setItem('sq10val2',value.data[0].sq10val2);
      localStorage.setItem('sq10val3',value.data[0].sq10val3);
      localStorage.setItem('sq10val4',value.data[0].sq10val4);
      localStorage.setItem('sq10val5',value.data[0].sq10val5);
      localStorage.setItem('sq10val6',value.data[0].sq10val6);

      localStorage.setItem('sq11val1',value.data[0].sq11val1);
      localStorage.setItem('sq11val2',value.data[0].sq11val2);
      localStorage.setItem('sq11val3',value.data[0].sq11val3);
      localStorage.setItem('sq11val4',value.data[0].sq11val4);
      localStorage.setItem('sq11val5',value.data[0].sq11val5);
      localStorage.setItem('sq11val6',value.data[0].sq11val6);
      localStorage.setItem('sq11val7',value.data[0].sq11val7);
      localStorage.setItem('sq11val8',value.data[0].sq11val8);
      console.log(value.data[0].sq1val1);
    });
    this.router.navigate(['socio-data']);
  }
  health(){
    const formData = new FormData();
    const dateToday = this.formattedString;
    localStorage.setItem('dateToday',dateToday);
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Monthly/healthData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      console.log(value);
      localStorage.setItem('hq1',value.data[0].hq1);

      localStorage.setItem('hq2val1',value.data[0].hq2val1);
      localStorage.setItem('hq2val2',value.data[0].hq2val2);
      localStorage.setItem('hq2val3',value.data[0].hq2val3);
      localStorage.setItem('hq2val4',value.data[0].hq2val4);
      localStorage.setItem('hq2val5',value.data[0].hq2val5);
      localStorage.setItem('hq2val6',value.data[0].hq2val6);

      localStorage.setItem('hq3r1val1',value.data[0].hq3r1val1);
      localStorage.setItem('hq3r1val2',value.data[0].hq3r1val2);

      localStorage.setItem('hq3r2val1',value.data[0].hq3r2val1);
      localStorage.setItem('hq3r2val2',value.data[0].hq3r2val2);

      localStorage.setItem('hq3r3val1',value.data[0].hq3r3val1);
      localStorage.setItem('hq3r3val2',value.data[0].hq3r3val2);

      localStorage.setItem('hq3r4val1',value.data[0].hq3r4val1);
      localStorage.setItem('hq3r4val2',value.data[0].hq3r4val2);

      localStorage.setItem('hq3r5val1',value.data[0].hq3r5val1);
      localStorage.setItem('hq3r5val2',value.data[0].hq3r5val2);

      localStorage.setItem('hq4val1',value.data[0].hq4val1);
      localStorage.setItem('hq4val2',value.data[0].hq4val2);
      localStorage.setItem('hq4val3',value.data[0].hq4val3);
      localStorage.setItem('hq4val4',value.data[0].hq4val4);
      localStorage.setItem('hq4val5',value.data[0].hq4val5);

      localStorage.setItem('hq5val1',value.data[0].hq5val1);
      localStorage.setItem('hq5val2',value.data[0].hq5val2);
      localStorage.setItem('hq5val3',value.data[0].hq5val3);
      localStorage.setItem('hq5val4',value.data[0].hq5val4);
      localStorage.setItem('hq5val5',value.data[0].hq5val5);

      localStorage.setItem('hq6val1',value.data[0].hq6val1);
      localStorage.setItem('hq6val2',value.data[0].hq6val2);
      localStorage.setItem('hq6val3',value.data[0].hq6val3);

      localStorage.setItem('hq7r1val1',value.data[0].hq7r1val1);
      localStorage.setItem('hq7r1val2',value.data[0].hq7r1val2);
      localStorage.setItem('hq7r1val3',value.data[0].hq7r1val3);
      localStorage.setItem('hq7r1val4',value.data[0].hq7r1val4);
      localStorage.setItem('hq7r1val5',value.data[0].hq7r1val5);

      localStorage.setItem('hq7r2val1',value.data[0].hq7r2val1);
      localStorage.setItem('hq7r2val2',value.data[0].hq7r2val2);
      localStorage.setItem('hq7r2val3',value.data[0].hq7r2val3);
      localStorage.setItem('hq7r2val4',value.data[0].hq7r2val4);
      localStorage.setItem('hq7r2val5',value.data[0].hq7r2val5);

      localStorage.setItem('hq7r3val1',value.data[0].hq7r3val1);
      localStorage.setItem('hq7r3val2',value.data[0].hq7r3val2);
      localStorage.setItem('hq7r3val3',value.data[0].hq7r3val3);
      localStorage.setItem('hq7r3val4',value.data[0].hq7r3val4);
      localStorage.setItem('hq7r3val5',value.data[0].hq7r3val5);

      localStorage.setItem('hq7r4val1',value.data[0].hq7r4val1);
      localStorage.setItem('hq7r4val2',value.data[0].hq7r4val2);
      localStorage.setItem('hq7r4val3',value.data[0].hq7r4val3);
      localStorage.setItem('hq7r4val4',value.data[0].hq7r4val4);
      localStorage.setItem('hq7r4val5',value.data[0].hq7r4val5);

      localStorage.setItem('hq7r5val1',value.data[0].hq7r5val1);
      localStorage.setItem('hq7r5val2',value.data[0].hq7r5val2);
      localStorage.setItem('hq7r5val3',value.data[0].hq7r5val3);
      localStorage.setItem('hq7r5val4',value.data[0].hq7r5val4);
      localStorage.setItem('hq7r5val5',value.data[0].hq7r5val5);

      localStorage.setItem('hq8val1',value.data[0].hq8val1);
      localStorage.setItem('hq8val2',value.data[0].hq8val2);
      localStorage.setItem('hq8val3',value.data[0].hq8val3);
      localStorage.setItem('hq8val4',value.data[0].hq8val4);
      localStorage.setItem('hq8val5',value.data[0].hq8val5);

      localStorage.setItem('hq9r1val1',value.data[0].hq9r1val1);
      localStorage.setItem('hq9r1val2',value.data[0].hq9r1val2);
      localStorage.setItem('hq9r1val3',value.data[0].hq9r1val3);
      localStorage.setItem('hq9r1val4',value.data[0].hq9r1val4);
      localStorage.setItem('hq9r1val5',value.data[0].hq9r1val5);


      localStorage.setItem('hq9r2val1',value.data[0].hq9r2val1);
      localStorage.setItem('hq9r2val2',value.data[0].hq9r2val2);
      localStorage.setItem('hq9r2val3',value.data[0].hq9r2val3);
      localStorage.setItem('hq9r2val4',value.data[0].hq9r2val4);
      localStorage.setItem('hq9r2val5',value.data[0].hq9r2val5);


      localStorage.setItem('hq10val1',value.data[0].hq10val1);
      localStorage.setItem('hq10val2',value.data[0].hq10val2);
      localStorage.setItem('hq10val3',value.data[0].hq10val3);
      localStorage.setItem('hq10val4',value.data[0].hq10val4);
      console.log(value.data[0].hq9r1val3);
      console.log(value.data[0].hq9r2val3);

    });

    this.router.navigate(['health-data']);
  }
}
