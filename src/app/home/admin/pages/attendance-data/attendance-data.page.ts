/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import {format,parseISO} from 'date-fns';
@Component({
  selector: 'app-attendance-data',
  templateUrl: './attendance-data.page.html',
  styleUrls: ['./attendance-data.page.scss'],
})
export class AttendanceDataPage {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  hrzBars: any;
  formattedString='';
  userTotal: any  = localStorage.getItem('userTotal');
  userActive: any = localStorage.getItem('userActive');
  userInactive =  this.userTotal - this.userActive;
  constructor(private router: Router) { this.setToday();}
  setToday(){
    this.formattedString = format(new Date(),'MMM d, yyyy');
  }
  ionViewDidEnter() {
    this.createBarChart();
  }

  getAttendance(){

  }
  next(): void{
    const formData = new FormData();
    const dateToday = this.formattedString;
    localStorage.setItem('dateToday',dateToday);
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Emojis/Happy.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('Happy1', value.data[0].Happy1);
      localStorage.setItem('Happy2', value.data[0].Happy2);
      localStorage.setItem('Happy3', value.data[0].Happy3);
      localStorage.setItem('Happy4', value.data[0].Happy4);
      localStorage.setItem('Happy5', value.data[0].Happy5);
      localStorage.setItem('Happy6', value.data[0].Happy6);
      localStorage.setItem('Happy7', value.data[0].Happy7);
      localStorage.setItem('Happy8', value.data[0].Happy8);
      localStorage.setItem('Happy9', value.data[0].Happy9);
      localStorage.setItem('Happy10', value.data[0].Happy10);

    });
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Emojis/Happy.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('Happy1', value.data[0].Happy1);
      localStorage.setItem('Happy2', value.data[0].Happy2);
      localStorage.setItem('Happy3', value.data[0].Happy3);
      localStorage.setItem('Happy4', value.data[0].Happy4);
      localStorage.setItem('Happy5', value.data[0].Happy5);
      localStorage.setItem('Happy6', value.data[0].Happy6);
      localStorage.setItem('Happy7', value.data[0].Happy7);
      localStorage.setItem('Happy8', value.data[0].Happy8);
      localStorage.setItem('Happy9', value.data[0].Happy9);
      localStorage.setItem('Happy10', value.data[0].Happy10);

    });
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Emojis/Happy.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('Happy1', value.data[0].Happy1);
      localStorage.setItem('Happy2', value.data[0].Happy2);
      localStorage.setItem('Happy3', value.data[0].Happy3);
      localStorage.setItem('Happy4', value.data[0].Happy4);
      localStorage.setItem('Happy5', value.data[0].Happy5);
      localStorage.setItem('Happy6', value.data[0].Happy6);
      localStorage.setItem('Happy7', value.data[0].Happy7);
      localStorage.setItem('Happy8', value.data[0].Happy8);
      localStorage.setItem('Happy9', value.data[0].Happy9);
      localStorage.setItem('Happy10', value.data[0].Happy10);

    });
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Emojis/Sad.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('Sad1', value.data[0].Sad1);
      localStorage.setItem('Sad2', value.data[0].Sad2);
      localStorage.setItem('Sad3', value.data[0].Sad3);
      localStorage.setItem('Sad4', value.data[0].Sad4);
      localStorage.setItem('Sad5', value.data[0].Sad5);
      localStorage.setItem('Sad6', value.data[0].Sad6);
      localStorage.setItem('Sad7', value.data[0].Sad7);
      localStorage.setItem('Sad8', value.data[0].Sad8);
      localStorage.setItem('Sad9', value.data[0].Sad9);
      localStorage.setItem('Sad10', value.data[0].Sad10);

    });
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Emojis/Angry.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('Angry1', value.data[0].Angry1);
      localStorage.setItem('Angry2', value.data[0].Angry2);
      localStorage.setItem('Angry3', value.data[0].Angry3);
      localStorage.setItem('Angry4', value.data[0].Angry4);
      localStorage.setItem('Angry5', value.data[0].Angry5);
      localStorage.setItem('Angry6', value.data[0].Angry6);
      localStorage.setItem('Angry7', value.data[0].Angry7);
      localStorage.setItem('Angry8', value.data[0].Angry8);
      localStorage.setItem('Angry9', value.data[0].Angry9);
      localStorage.setItem('Angry10', value.data[0].Angry10);

    });

    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Emojis/Afraid.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('Afraid1', value.data[0].Afraid1);
      localStorage.setItem('Afraid2', value.data[0].Afraid2);
      localStorage.setItem('Afraid3', value.data[0].Afraid3);
      localStorage.setItem('Afraid4', value.data[0].Afraid4);
      localStorage.setItem('Afraid5', value.data[0].Afraid5);
      localStorage.setItem('Afraid6', value.data[0].Afraid6);
      localStorage.setItem('Afraid7', value.data[0].Afraid7);
      localStorage.setItem('Afraid8', value.data[0].Afraid8);
      localStorage.setItem('Afraid9', value.data[0].Afraid9);
      localStorage.setItem('Afraid10', value.data[0].Afraid10);
    });

    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Emojis/Disgusted.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('Disgusted1', value.data[0].Disgusted1);
      localStorage.setItem('Disgusted2', value.data[0].Disgusted2);
      localStorage.setItem('Disgusted3', value.data[0].Disgusted3);
      localStorage.setItem('Disgusted4', value.data[0].Disgusted4);
      localStorage.setItem('Disgusted5', value.data[0].Disgusted5);
      localStorage.setItem('Disgusted6', value.data[0].Disgusted6);
      localStorage.setItem('Disgusted7', value.data[0].Disgusted7);
      localStorage.setItem('Disgusted8', value.data[0].Disgusted8);
      localStorage.setItem('Disgusted9', value.data[0].Disgusted9);
      localStorage.setItem('Disgusted10', value.data[0].Disgusted10);
    });

    this.router.navigate(['emoji-data']);
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Users'],
        datasets: [
        {
          label: 'Active',
          data: [this.userActive],
          backgroundColor: 'blue', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Inactive',
          data: [this.userInactive],
          backgroundColor: 'red', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

      ]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
        }
      }
    });
  }
}



