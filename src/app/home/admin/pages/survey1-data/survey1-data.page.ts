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
  val: any;

  yesQ: any =[];
  noQ: any =[];
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


    const formData = new FormData();
    const company= localStorage.getItem('company');
    const date = localStorage.getItem('date');
    formData.append('company', company);

    formData.append('date', date);
    fetch('http://localhost/EMOODY/src/app/BackendAdmin/Survey/agreeData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {

      for (let i = 1; i < 11; i++) {
        localStorage.setItem('SDQ'+i,value.result1[i]);
        localStorage.setItem('DQ'+i,value.result2[i]);
        localStorage.setItem('SAQ'+i,value.result3[i]);
        localStorage.setItem('AQ'+i,value.result4[i]);
      }
    });
    this.router.navigate(['survey2-data']);
  }
  createPieChart1() {
    for (let i = 1; i < 11; i++) {
      this.yesQ[i] =localStorage.getItem('YesQ'+i);
      this.noQ[i] =localStorage.getItem('NoQ'+i);

    }

    this.bars1 = new Chart(this.barChart1.nativeElement, {

      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '',
          data: [this.yesQ[1],this.noQ[1]],
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
          }]
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
          data: [this.yesQ[2],this.noQ[2]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',
          ], // array should have same number of elements as number of dataset
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
          data: [this.yesQ[3],this.noQ[3]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
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
          data: [this.yesQ[4],this.noQ[4]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
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
          data: [this.yesQ[5],this.noQ[5]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
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
          data: [this.yesQ[6],this.noQ[6]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
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
          data: [this.yesQ[7],this.noQ[7]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
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
          data: [this.yesQ[8],this.noQ[8]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',
          ], // array should have same number of elements as number of dataset
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
          data: [this.yesQ[9],this.noQ[9]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',

          ], // array should have same number of elements as number of dataset
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
          data: [this.yesQ[10],this.noQ[10]],
          backgroundColor: [
            '#ABDEE6',
            '#CBAACB',
          ], // array should have same number of elements as number of dataset
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
