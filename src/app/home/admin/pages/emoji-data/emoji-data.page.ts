/* eslint-disable prefer-const */

import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
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
  constructor() { }

  ionViewDidEnter() {
    this.createBarChart();
  }
  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Happy', 'Sad', 'Angry', 'Afraid','Disgusted'],
        datasets: [{
          label: '1',
          data: [7,7,10,5,4,3,5,8,2,9],
          backgroundColor: 'yellow', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '2',
          data: [3,5,8,2,9,7,10,5,4,3],
          backgroundColor: 'red', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '3',
          data: [4,3,8,5,1,4,3,5,8,2],
          backgroundColor: 'blue', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '4',
          data: [5,6,3,9,7,2,9,7,10,5],
          backgroundColor: '#green', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '5',
          data: [6,3,7,1,9,3,9,7,2,9],
          backgroundColor: 'white', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '6',
          data: [2,9,7,10,5,3,9,7,2,9],
          backgroundColor: 'red', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '7',
          data: [3,9,7,2,9,3,9,7,2,9],
          backgroundColor: 'orange', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '8',
          data: [6,3,9,7,10,5,7,5,2,9],
          backgroundColor: 'black', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '9',
          data: [6,2,9,7,10,5,7,2,9,4],
          backgroundColor: 'violet', // array should have same number of elements as number of dataset
          borderColor: '#dd1144',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: '10',
          data: [3,5,8,2,9,7,10,5,4,3],
          backgroundColor: 'green', // array should have same number of elements as number of dataset
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

}


