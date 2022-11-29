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
  next(): void{const formData = new FormData();
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Survey/agreeData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      localStorage.setItem('q1val1', value.data[0].q1val1);
      localStorage.setItem('q1val2', value.data[0].q1val2);
      localStorage.setItem('q1val3', value.data[0].q1val3);
      localStorage.setItem('q1val4', value.data[0].q1val4);

      localStorage.setItem('q2val1', value.data[0].q2val1);
      localStorage.setItem('q2val2', value.data[0].q2val2);
      localStorage.setItem('q2val3', value.data[0].q2val3);
      localStorage.setItem('q2val4', value.data[0].q2val4);

      localStorage.setItem('q3val1', value.data[0].q3val1);
      localStorage.setItem('q3val2', value.data[0].q3val2);
      localStorage.setItem('q3val3', value.data[0].q3val3);
      localStorage.setItem('q3val4', value.data[0].q3val4);

      localStorage.setItem('q4val1', value.data[0].q4val1);
      localStorage.setItem('q4val2', value.data[0].q4val2);
      localStorage.setItem('q4val3', value.data[0].q4val3);
      localStorage.setItem('q4val4', value.data[0].q4val4);

      localStorage.setItem('q5val1', value.data[0].q5val1);
      localStorage.setItem('q5val2', value.data[0].q5val2);
      localStorage.setItem('q5val3', value.data[0].q5val3);
      localStorage.setItem('q5val4', value.data[0].q5val4);

      localStorage.setItem('q6val1', value.data[0].q6val1);
      localStorage.setItem('q6val2', value.data[0].q6val2);
      localStorage.setItem('q6val3', value.data[0].q6val3);
      localStorage.setItem('q6val4', value.data[0].q6val4);

      localStorage.setItem('q7val1', value.data[0].q7val1);
      localStorage.setItem('q7val2', value.data[0].q7val2);
      localStorage.setItem('q7val3', value.data[0].q7val3);
      localStorage.setItem('q7val4', value.data[0].q7val4);

      localStorage.setItem('q8val1', value.data[0].q8val1);
      localStorage.setItem('q8val2', value.data[0].q8val2);
      localStorage.setItem('q8val3', value.data[0].q8val3);
      localStorage.setItem('q8val4', value.data[0].q8val4);

      localStorage.setItem('q9val1', value.data[0].q9val1);
      localStorage.setItem('q9val2', value.data[0].q9val2);
      localStorage.setItem('q9val3', value.data[0].q9val3);
      localStorage.setItem('q9val4', value.data[0].q9val4);

      localStorage.setItem('q10val1', value.data[0].q10val1);
      localStorage.setItem('q10val2', value.data[0].q10val2);
      localStorage.setItem('q10val3', value.data[0].q10val3);
      localStorage.setItem('q10val4', value.data[0].q10val4);

    });
    this.router.navigate(['survey2-data']);
  }
  createPieChart1() {
    this.bars1 = new Chart(this.barChart1.nativeElement, {

      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [{
          label: '',
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
          data: [this.q2Yes,this.q2No],
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
          data: [this.q3Yes,this.q3No],
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
          data: [this.q4Yes,this.q4No],
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
          data: [this.q5Yes,this.q5No],
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
          data: [this.q6Yes,this.q6No],
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
          data: [this.q7Yes,this.q7No],
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
          data: [this.q8Yes,this.q8No],
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
          data: [this.q9Yes,this.q9No],
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
          data: [this.q10Yes,this.q10No],
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
