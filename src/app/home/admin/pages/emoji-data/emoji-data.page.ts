/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */

import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emoji-data',
  templateUrl: './emoji-data.page.html',
  styleUrls: ['./emoji-data.page.scss'],
})
export class EmojiDataPage {

  @ViewChild('barChart') barChart;
  happy1: any  = localStorage.getItem('Happy1');
  happy2: any  = localStorage.getItem('Happy2');
  happy3: any  = localStorage.getItem('Happy3');
  happy4: any  = localStorage.getItem('Happy4');
  happy5: any  = localStorage.getItem('Happy5');
  happy6: any  = localStorage.getItem('Happy6');
  happy7: any  = localStorage.getItem('Happy7');
  happy8: any  = localStorage.getItem('Happy8');
  happy9: any  = localStorage.getItem('Happy9');
  happy10: any  = localStorage.getItem('Happy10');

  sad1: any  = localStorage.getItem('Sad1');
  sad2: any  = localStorage.getItem('Sad2');
  sad3: any  = localStorage.getItem('Sad3');
  sad4: any  = localStorage.getItem('Sad4');
  sad5: any  = localStorage.getItem('Sad5');
  sad6: any  = localStorage.getItem('Sad6');
  sad7: any  = localStorage.getItem('Sad7');
  sad8: any  = localStorage.getItem('Sad8');
  sad9: any  = localStorage.getItem('Sad9');
  sad10: any  = localStorage.getItem('Sad10');

  afraid1: any  = localStorage.getItem('Afraid1');
  afraid2: any  = localStorage.getItem('Afraid2');
  afraid3: any  = localStorage.getItem('Afraid3');
  afraid4: any  = localStorage.getItem('Afraid4');
  afraid5: any  = localStorage.getItem('Afraid5');
  afraid6: any  = localStorage.getItem('Afraid6');
  afraid7: any  = localStorage.getItem('Afraid7');
  afraid8: any  = localStorage.getItem('Afraid8');
  afraid9: any  = localStorage.getItem('Afraid9');
  afraid10: any  = localStorage.getItem('Afraid10');

  angry1: any  = localStorage.getItem('Angry1');
  angry2: any  = localStorage.getItem('Angry2');
  angry3: any  = localStorage.getItem('Angry3');
  angry4: any  = localStorage.getItem('Angry4');
  angry5: any  = localStorage.getItem('Angry5');
  angry6: any  = localStorage.getItem('Angry6');
  angry7: any  = localStorage.getItem('Angry7');
  angry8: any  = localStorage.getItem('Angry8');
  angry9: any  = localStorage.getItem('Angry9');
  angry10: any  = localStorage.getItem('Angry10');

  disgusted1: any  = localStorage.getItem('Disgusted1');
  disgusted2: any  = localStorage.getItem('Disgusted2');
  disgusted3: any  = localStorage.getItem('Disgusted3');
  disgusted4: any  = localStorage.getItem('Disgusted4');
  disgusted5: any  = localStorage.getItem('Disgusted5');
  disgusted6: any  = localStorage.getItem('Disgusted6');
  disgusted7: any  = localStorage.getItem('Disgusted7');
  disgusted8: any  = localStorage.getItem('Disgusted8');
  disgusted9: any  = localStorage.getItem('Disgusted9');
  disgusted10: any  = localStorage.getItem('Disgusted10');

  bars: any;
  colorArray: any;
  hrzBars: any;

  constructor(private router: Router) { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Happy', 'Sad', 'Angry', 'Afraid','Disgusted'],
        datasets: [{
          label: '1',
          data: [this.happy1,this.sad1,this.angry1,this.afraid1,this.disgusted1],
          backgroundColor: '#100d08', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '2',
          data: [this.happy2,this.sad2,this.angry2,this.afraid2,this.disgusted2],
          backgroundColor: '#2d231a', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '3',
          data: [this.happy3,this.sad3,this.angry3,this.afraid3,this.disgusted3],
          backgroundColor: '#463626', // array should have same number of elements as number of dataset
          borderColor: '#463626',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '4',
          data: [this.happy4,this.sad4,this.angry4,this.afraid4,this.disgusted4],
          backgroundColor: '#916c51', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '5',
          data: [this.happy5,this.sad5,this.angry5,this.afraid5,this.disgusted5],
          backgroundColor: '#c18762', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '6',
          data: [this.happy6,this.sad6,this.angry6,this.afraid6,this.disgusted6],
          backgroundColor: '#d48d63', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '7',
          data: [this.happy7,this.sad7,this.angry7,this.afraid7,this.disgusted7],
          backgroundColor: '#ea9869', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '8',
          data: [this.happy8,this.sad8,this.angry8,this.afraid8,this.disgusted8],
          backgroundColor: '#e89f7c', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '9',
          data: [this.happy9,this.sad9,this.angry9,this.afraid9,this.disgusted9],
          backgroundColor: '#d39475', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '10',
          data: [this.happy10,this.sad10,this.angry10,this.afraid10,this.disgusted10],
          backgroundColor: '#af8976', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:true,
          }]
        }
      }
    });
  }
  next(): void{
    const formData = new FormData();
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Survey/yesnoData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('q1Yes', value.data[0].q1Yes);
      localStorage.setItem('q1No', value.data[0].q1No);

      localStorage.setItem('q2Yes', value.data[0].q2Yes);
      localStorage.setItem('q2No', value.data[0].q2No);

      localStorage.setItem('q3Yes', value.data[0].q3Yes);
      localStorage.setItem('q3No', value.data[0].q3No);

      localStorage.setItem('q4Yes', value.data[0].q4Yes);
      localStorage.setItem('q4No', value.data[0].q4No);

      localStorage.setItem('q5Yes', value.data[0].q5Yes);
      localStorage.setItem('q5No', value.data[0].q5No);

      localStorage.setItem('q6Yes', value.data[0].q6Yes);
      localStorage.setItem('q6No', value.data[0].q6No);

      localStorage.setItem('q7Yes', value.data[0].q7Yes);
      localStorage.setItem('q7No', value.data[0].q7No);

      localStorage.setItem('q8Yes', value.data[0].q8Yes);
      localStorage.setItem('q8No', value.data[0].q8No);

      localStorage.setItem('q9Yes', value.data[0].q9Yes);
      localStorage.setItem('q9No', value.data[0].q9No);

      localStorage.setItem('q10Yes', value.data[0].q10Yes);
      localStorage.setItem('q10No', value.data[0].q10No);

  
    });



    this.router.navigate(['survey1-data']);
  }
  }



