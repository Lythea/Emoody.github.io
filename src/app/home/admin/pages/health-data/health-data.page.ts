import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-health-data',
  templateUrl: './health-data.page.html',
  styleUrls: ['./health-data.page.scss'],
})
export class HealthDataPage{
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
  @ViewChild('barChart11') barChart11;
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
  bars11: any;
  colorArray: any;
  hrzBars: any;
  val: any;

  hq1 = localStorage.getItem('hq1');

  hq2val1 = localStorage.getItem('hq2val1');
  hq2val2 = localStorage.getItem('hq2val2');
  hq2val3 = localStorage.getItem('hq2val3');
  hq2val4 = localStorage.getItem('hq2val4');
  hq2val5 = localStorage.getItem('hq2val5');
  hq2val6 = localStorage.getItem('hq2val6');

  hq3r1val1 = localStorage.getItem('hq3r1val1');
  hq3r1val2 = localStorage.getItem('hq3r1val2');

  hq3r2val1 = localStorage.getItem('hq3r2val1');
  hq3r2val2 = localStorage.getItem('hq3r2val2');

  hq3r3val1 = localStorage.getItem('hq3r3val1');
  hq3r3val2 = localStorage.getItem('hq3r3val2');

  hq3r4val1 = localStorage.getItem('hq3r4val1');
  hq3r4val2 = localStorage.getItem('hq3r4val2');

  hq3r5val1 = localStorage.getItem('hq3r5val1');
  hq3r5val2 = localStorage.getItem('hq3r5val2');

  hq4val1 =  localStorage.getItem('hq4val1');
  hq4val2 =  localStorage.getItem('hq4val2');
  hq4val3 =  localStorage.getItem('hq4val3');
  hq4val4 =  localStorage.getItem('hq4val4');
  hq4val5 =  localStorage.getItem('hq4val5');

  hq5val1 =  localStorage.getItem('hq5val1');
  hq5val2 =  localStorage.getItem('hq5val2');
  hq5val3 =  localStorage.getItem('hq5val3');
  hq5val4 =  localStorage.getItem('hq5val4');
  hq5val5 =  localStorage.getItem('hq5val5');

  hq6val1 =  localStorage.getItem('hq6val1');
  hq6val2 =  localStorage.getItem('hq6val2');
  hq6val3 =  localStorage.getItem('hq6val3');

  hq7r1val1 = localStorage.getItem('hq7r1val1');
  hq7r1val2 = localStorage.getItem('hq7r1val2');
  hq7r1val3 = localStorage.getItem('hq7r1val3');
  hq7r1val4 = localStorage.getItem('hq7r1val4');
  hq7r1val5 = localStorage.getItem('hq7r1val5');

  hq7r2val1 = localStorage.getItem('hq7r2val1');
  hq7r2val2 = localStorage.getItem('hq7r2val2');
  hq7r2val3 = localStorage.getItem('hq7r2val3');
  hq7r2val4 = localStorage.getItem('hq7r2val4');
  hq7r2val5 = localStorage.getItem('hq7r2val5');

  hq7r3val1 = localStorage.getItem('hq7r3val1');
  hq7r3val2 = localStorage.getItem('hq7r3val2');
  hq7r3val3 = localStorage.getItem('hq7r3val3');
  hq7r3val4 = localStorage.getItem('hq7r3val4');
  hq7r3val5 = localStorage.getItem('hq7r3val5');

  hq7r4val1 = localStorage.getItem('hq7r4val1');
  hq7r4val2 = localStorage.getItem('hq7r4val2');
  hq7r4val3 = localStorage.getItem('hq7r4val3');
  hq7r4val4 = localStorage.getItem('hq7r4val4');
  hq7r4val5 = localStorage.getItem('hq7r4val5');

  hq7r5val1 = localStorage.getItem('hq7r5val1');
  hq7r5val2 = localStorage.getItem('hq7r5val2');
  hq7r5val3 = localStorage.getItem('hq7r5val3');
  hq7r5val4 = localStorage.getItem('hq7r5val4');
  hq7r5val5 = localStorage.getItem('hq7r5val5');

  hq8val1 = localStorage.getItem('hq8val1');
  hq8val2 = localStorage.getItem('hq8val2');
  hq8val3 = localStorage.getItem('hq8val3');
  hq8val4 = localStorage.getItem('hq8val4');
  hq8val5 = localStorage.getItem('hq8val5');

  hq9r1val1 = localStorage.getItem('hq9r1val1');
  hq9r1val2 = localStorage.getItem('hq9r1val2');
  hq9r1val3 = localStorage.getItem('hq9r1val3');
  hq9r1val4 = localStorage.getItem('hq9r1val4');
  hq9r1val5 = localStorage.getItem('hq9r1val5');

  hq9r2val1 = localStorage.getItem('hq9r2val1');
  hq9r2val2 = localStorage.getItem('hq9r2val2');
  hq9r2val3 = localStorage.getItem('hq9r2val3');
  hq9r2val4 = localStorage.getItem('hq9r2val4');
  hq9r2val5 = localStorage.getItem('hq9r2val5');

  hq10val1 = localStorage.getItem('hq10val1');
  hq10val2 = localStorage.getItem('hq10val2');
  hq10val3 = localStorage.getItem('hq10val3');
  hq10val4 = localStorage.getItem('hq10val4');



  constructor(private router: Router) { }

  next(): void{
    this.router.navigate(['admin']);
  }
  ionViewDidEnter() {
    this.createBarChart1();
    this.createBarChart2();
    this.createBarChart3();
    this.createBarChart4();
    this.createBarChart5();
    this.createBarChart6();
    this.createBarChart7();
    this.createBarChart8();
    this.createBarChart9();
    this.createBarChart10();
  }
  createBarChart1(){

    this.bars1 = new Chart(this.barChart1.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Agree','Disagree'],
        datasets: [
        {
          label: [],
          data: [this.hq1,0],
          backgroundColor: ['#ABDEE6','#CBAACB'], // array should have same number of elements as number of dataset
        },
      ]
      },
      options: {
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
    });
  }
  createBarChart2(){
    this.bars2 = new Chart(this.barChart2.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Users'],
        datasets: [
        {
          label: 'Excellent',
          data: [this.hq2val1],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Very Good',
          data: [this.hq2val2],
          backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Good',
          data: [this.hq2val3],
          backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Fair',
          data: [this.hq2val4],
          backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
          borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Poor',
          data: [this.hq2val5],
          backgroundColor: '#C6DBDA', // array should have same number of elements as number of dataset
          borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Dont know / Not Sure',
          data: [this.hq2val6],
          backgroundColor: '#C6DBDA', // array should have same number of elements as number of dataset
          borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero: true,
            }
          }],
          xAxes:[{
            stacked:false,

          }]
        }
      }
    });
  }
  createBarChart3(){
    this.bars3 = new Chart(this.barChart3.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Elevated blood sugar or  diabetes','High blood  pressure/hypertension',' Elevated cholesterol level ',
        ' Low back disease or spine problems','Anxiety/depression'],
        datasets: [
        {
          label: ['Diagnosed'],
          data: [this.hq3r1val1,this.hq3r2val1,this.hq3r3val1,this.hq3r4val1,this.hq3r5val1],
          backgroundColor: 'red', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Taking Medicine For'],
          data: [this.hq3r1val2,this.hq3r2val2,this.hq3r3val2,this.hq3r4val2,this.hq3r5val2],
          backgroundColor: 'blue', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
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
  createBarChart4(){
    this.bars4 = new Chart(this.barChart4.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Never','Rarely','Half of the time','Often','Always'],
        datasets: [
        {
          label: [],
          data: [this.hq4val1,this.hq4val2,this.hq4val3,this.hq4val4,this.hq4val5],
          backgroundColor: ['#ABDEE6','#CBAACB','#FFFFB5','#FFCCB6','#F3B0C3','#C6DBDA'],
        },

      ]
      },
      options: {
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
    });
  }
  createBarChart5(){
    this.bars5 = new Chart(this.barChart5.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Never','Rarely','Half of the time','Often','Always'],
        datasets: [
        {
          label: [],
          data: [this.hq5val1,this.hq5val2,this.hq5val3,this.hq5val4,this.hq5val5],
          backgroundColor: ['#ABDEE6','#CBAACB','#FFFFB5','#FFCCB6','#F3B0C3','#C6DBDA'],
        },
      ]
      },
      options: {
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
    });
  }
  createBarChart6(){
    this.bars6 = new Chart(this.barChart6.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Every day','Some days','Not at all'],
        datasets: [
        {
          label: [''],
          data: [this.hq6val1,this.hq6val2,this.hq6val3],
          backgroundColor: ['#ABDEE6','#CBAACB','#FFFFB5'],
        },

      ]
      },
      options: {
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
    });
  }
  createBarChart7(){
    this.bars7 = new Chart(this.barChart7.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Hand or Wrist','Shoulder, neck, or upper back','Low back','Knee','Foot'],
        datasets: [
        {
          label: ['None'],
          data: [this.hq7r1val1,this.hq7r2val1,this.hq7r3val1,this.hq7r4val1,this.hq7r5val1],
          backgroundColor: '#100d08', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Mild'],
          data: [this.hq7r1val2,this.hq7r2val2,this.hq7r3val2,this.hq7r4val2,this.hq7r5val2],
          backgroundColor:'#2d231a', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Moderate'],
          data: [this.hq7r1val3,this.hq7r2val3,this.hq7r3val3,this.hq7r4val3,this.hq7r5val3],
          backgroundColor: '#463626', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Severe'],
          data: [this.hq7r1val4,this.hq7r2val4,this.hq7r3val4,this.hq7r4val4,this.hq7r5val5],
          backgroundColor: '#916c51', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Extreme'],
          data: [this.hq7r1val5,this.hq7r2val5,this.hq7r3val5,this.hq7r4val5,this.hq7r5val5],
          backgroundColor: '#c18762', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
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
  createBarChart8(){
    this.bars8 = new Chart(this.barChart8.nativeElement, {
      type: 'pie',
      data: {
        labels: ['No difficulty','Mild Difficulty','Moderate Difficulty','Severe Difficulty','So much difficulty that I cant sleep'],
        datasets: [
        {
          label: [''],
          data: [this.hq8val1,this.hq8val2,this.hq8val3,this.hq8val4,this.hq8val5],
          backgroundColor: ['#ABDEE6','#CBAACB','#FFFFB5','#FFCCB6','#F3B0C3','#C6DBDA'],
        },
      ]
      },
      options: {
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
    });
  }
  createBarChart9(){
    this.bars9 = new Chart(this.barChart9.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Typical sleeping time getting in 24hr peroid',
        'Hours of sleep needed for the next day'],
        datasets: [
        {
          label: ['6 hours or less'],
          data: [this.hq9r1val1,this.hq9r2val1],
          backgroundColor: '#100d08', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['About 7 hours'],
          data: [this.hq9r1val2,this.hq9r2val2],
          backgroundColor: '#2d231a', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['About 8 hours'],
          data: [this.hq9r1val3,this.hq9r2val3],
          backgroundColor: '#463626', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['About 9 hours'],
          data: [this.hq9r1val4,this.hq9r2val4],
          backgroundColor: '#916c51', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['About 10 hours or more'],
          data: [this.hq9r1val5,this.hq9r2val5],
          backgroundColor: '#c18762', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        }
    ]
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
  createBarChart10(){
    this.bars10 = new Chart(this.barChart10.nativeElement, {
      type: 'bar',
      data: {
        labels: [' How would you describe the quality of your sleep on a typical night'],
        datasets: [
        {
          label: 'Very Good',
          data: [this.hq10val1],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Fairly Good',
          data: [this.hq10val2],
          backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Fairly Poor',
          data: [this.hq10val3],
          backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Very Poor',
          data: [this.hq10val4],
          backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        }
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
