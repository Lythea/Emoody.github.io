import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-survey1-data',
  templateUrl: './survey1-data.page.html',
  styleUrls: ['./survey1-data.page.scss'],
})

export class Survey1DataPage {
  @ViewChild('barChart1') barChart1;
  @ViewChild('barChart2') barChart2;
  @ViewChild('barChart3') barChart3;
  @ViewChild('barChart4') barChart4;
  @ViewChild('barChart5') barChart5;
  @ViewChild('barChart6') barChart6;
  @ViewChild('barChart7') barChart7;
  @ViewChild('barChart8') barChart8;
  @ViewChild('barChart9') barChart9;
  @ViewChild('barChart10') barChart10;

  bars1: any;
  bars2: any;
  bars3: any;
  bars4: any;
  bars5: any;
  bars6: any;
  bars7: any;
  bars8: any;
  bars9: any;
  bars10: any;
  colorArray: any;
  hrzBars: any;

  q1Yes: any = localStorage.getItem('q1Yes');
  q1No: any = localStorage.getItem('q1No');

  q2Yes: any = localStorage.getItem('q2Yes');
  q2No: any = localStorage.getItem('q2No');

  q3Yes: any = localStorage.getItem('q3Yes');
  q3No: any = localStorage.getItem('q3No');

  q4Yes: any = localStorage.getItem('q4Yes');
  q4No: any = localStorage.getItem('q4No');

  q5Yes: any = localStorage.getItem('q5Yes');
  q5No: any = localStorage.getItem('q5No');

  q6Yes: any = localStorage.getItem('q6Yes');
  q6No: any = localStorage.getItem('q6No');

  q7Yes: any = localStorage.getItem('q7Yes');
  q7No: any = localStorage.getItem('q7No');

  q8Yes: any = localStorage.getItem('q8Yes');
  q8No: any = localStorage.getItem('q8No');

  q9Yes: any = localStorage.getItem('q9Yes');
  q9No: any = localStorage.getItem('q9No');

  q10Yes: any = localStorage.getItem('q10Yes');
  q10No: any = localStorage.getItem('q10No');

  constructor(private router: Router) { }

  ionViewDidEnter() {

    this.createPieChart1();
    this.createPieChart2();
    this.createPieChart3();
    this.createPieChart4();
    this.createPieChart5();
    this.createPieChart6();
    this.createPieChart7();
    this.createPieChart8();
    this.createPieChart9();
    this.createPieChart10();
  }
  next(): void{
    this.router.navigate(['survey1-data']);
  }
  createPieChart1() {
    this.bars1 = new Chart(this.barChart1.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q1Yes,this.q1No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
          // array should have same number of elements as number of dataset
        }
       ]
      },

      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }],
          plugins:{
            tooltip:{
              enabled:false,
            }
          }
      },
    });
  }
  createPieChart2() {
    this.bars2 = new Chart(this.barChart2.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q2Yes,this.q2No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',
          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
      }
    });
  }
  createPieChart3() {
    this.bars3 = new Chart(this.barChart3.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q3Yes,this.q3No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
      }
    });
  }
  createPieChart4() {
    this.bars4 = new Chart(this.barChart4.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q4Yes,this.q4No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
      }
    });
  }
  createPieChart5() {
    this.bars5 = new Chart(this.barChart5.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q5Yes,this.q5No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
      }
    });
  }
  createPieChart6() {
    this.bars6 = new Chart(this.barChart6.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q6Yes,this.q6No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
      }
    });
  }
  createPieChart7() {
    this.bars7 = new Chart(this.barChart7.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q7Yes,this.q7No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
      }
    });
  }
  createPieChart8() {
    this.bars8 = new Chart(this.barChart8.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q8Yes,this.q8No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',
          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
        }
    });
  }
  createPieChart9() {
    this.bars9 = new Chart(this.barChart9.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q9Yes,this.q9No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },

       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
      }
    });
  }
  createPieChart10() {
    this.bars10 = new Chart(this.barChart10.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '1',
          data: [this.q10Yes,this.q10No],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',
          ], // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
       ]
      },
      options: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:[{
            stacked:false,
          }]
      }
    });
  }
}
