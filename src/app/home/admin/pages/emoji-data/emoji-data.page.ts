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

  bars: any;
  colorArray: any;
  hrzBars: any;
  happy: any =[];
  sad: any =[];
  angry: any =[];
  afraid: any =[];
  disgusted: any=[];
  constructor(private router: Router) { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    for (let i = 1; i < 11; i++) {
      this.happy[i] =localStorage.getItem('Happy'+i);
      this.sad[i] =localStorage.getItem('Sad'+i);
      this.angry[i] =localStorage.getItem('Angry'+i);
      this.afraid[i] =localStorage.getItem('Afraid'+i);
      this.disgusted[i] =localStorage.getItem('Disgusted'+i);
    }

    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Happy', 'Sad', 'Angry', 'Afraid','Disgusted'],
        datasets: [{
          label: '1',
          data: [this.happy[1],this.sad[1],this.angry[1],this.afraid[1],this.disgusted[1]],
          backgroundColor: '#100d08', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '2',
          data: [this.happy[2],this.sad[2],this.angry[2],this.afraid[2],this.disgusted[2]],
          backgroundColor: '#2d231a', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '3',
          data: [this.happy[3],this.sad[3],this.angry[3],this.afraid[3],this.disgusted[3]],
          backgroundColor: '#463626', // array should have same number of elements as number of dataset
          borderColor: '#463626',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '4',
          data: [this.happy[4],this.sad[4],this.angry[4],this.afraid[4],this.disgusted[4]],
          backgroundColor: '#916c51', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '5',
          data: [this.happy[5],this.sad[5],this.angry[5],this.afraid[5],this.disgusted[5]],
          backgroundColor: '#c18762', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '6',
          data: [this.happy[6],this.sad[6],this.angry[6],this.afraid[6],this.disgusted[6]],
          backgroundColor: '#d48d63', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '7',
          data: [this.happy[7],this.sad[7],this.angry[7],this.afraid[7],this.disgusted[7]],
          backgroundColor: '#ea9869', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '8',
          data: [this.happy[8],this.sad[8],this.angry[8],this.afraid[8],this.disgusted[8]],
          backgroundColor: '#e89f7c', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '9',
          data: [this.happy[9],this.sad[9],this.angry[9],this.afraid[9],this.disgusted[9]],
          backgroundColor: '#d39475', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '10',
          data: [this.happy[10],this.sad[10],this.angry[10],this.afraid[10],this.disgusted[10]],
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
    const company= localStorage.getItem('company');
    const date = localStorage.getItem('date');
    formData.append('company', company);

    formData.append('date', date);
    fetch('http://localhost/EMOODY/src/app/BackendAdmin/Survey/yesnoData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {

      for (let i = 1; i < 11; i++) {
        localStorage.setItem('YesQ'+i,value.result1[i]);
        localStorage.setItem('NoQ'+i,value.result2[i]);
      }

    });



    this.router.navigate(['survey1-data']);
  }
  }



