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
  happy: any =[];
  sad: any =[];
  angry: any =[];
  afraid: any =[];
  disgusted: any=[];
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
    const company= localStorage.getItem('company');
    const date = localStorage.getItem('date');

    formData.append('date', date);
    formData.append('company', company);
    fetch('http://localhost/EMOODY/src/app/BackendAdmin/Emojis/Happy.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      for (let i = 1; i < 11; i++) {
        localStorage.setItem('Happy'+i,value.result1[i]);
        localStorage.setItem('Sad'+i,value.result2[i]);
        localStorage.setItem('Angry'+i,value.result3[i]);
        localStorage.setItem('Afraid'+i,value.result4[i]);
        localStorage.setItem('Disgusted'+i,value.result5[i]);
      }

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
          borderWidth: 1,

        },

      ]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero: true,
              fontSize: 30 // Change the font size here
            }
          }],
          xAxes:[{
            stacked:false,
            ticks: {
              fontSize: 30 // Change the font size here
          },
          }]
        }
      }
    });
  }
}



