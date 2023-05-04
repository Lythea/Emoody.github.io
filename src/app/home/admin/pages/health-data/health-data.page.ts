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
q2val: any =[];
q3r1val: any =[];
q3r2val: any =[];
q3r3val: any =[];
q3r4val: any =[];
q3r5val: any =[];
q4val: any =[];
q5val: any =[];
q6val: any =[];
q7r1val: any =[];
q7r2val: any =[];
q7r3val: any =[];
q7r4val: any =[];
q7r5val: any =[];
q8val: any =[];
q9r1val: any =[];
q9r2val: any =[];
q10val: any =[];

  constructor(private router: Router) { }

  next(): void{
    this.router.navigate(['admin']);
  }
  ionViewDidEnter() {

    for (let i = 1; i < 7; i++) {
      this.q2val[i] =localStorage.getItem('q2val'+i);
    }
    for (let i = 1; i < 3; i++) {
      this.q3r1val[i] =localStorage.getItem('q3r1val'+i);
    }
    for (let i = 1; i < 3; i++) {
      this.q3r2val[i] =localStorage.getItem('q3r2val'+i);
    }
    for (let i = 1; i < 3; i++) {
      this.q3r3val[i] =localStorage.getItem('q3r3val'+i);
    }
    for (let i = 1; i < 3; i++) {
      this.q3r4val[i] =localStorage.getItem('q3r4val'+i);
    }
    for (let i = 1; i < 3; i++) {
      this.q3r5val[i] =localStorage.getItem('q3r5val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q4val[i] =localStorage.getItem('q4val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q5val[i] =localStorage.getItem('q5val'+i);
    }
    for (let i = 1; i < 4; i++) {
      this.q6val[i] =localStorage.getItem('q6val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q7r1val[i] =localStorage.getItem('q7r1val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q7r2val[i] =localStorage.getItem('q7r2val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q7r3val[i] =localStorage.getItem('q7r3val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q7r4val[i] =localStorage.getItem('q7r4val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q7r5val[i] =localStorage.getItem('q7r5val'+i);
    }
    for (let i = 1; i < 5; i++) {
      this.q8val[i] =localStorage.getItem('q8val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q9r1val[i] =localStorage.getItem('q9r1val'+i);
    }
    for (let i = 1; i < 6; i++) {
      this.q9r2val[i] =localStorage.getItem('q9r2val'+i);
    }
    for (let i = 1; i < 5; i++) {
      this.q10val[i] =localStorage.getItem('q10val'+i);
    }

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

  createBarChart2(){
    this.bars2 = new Chart(this.barChart2.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Users'],
        datasets: [
        {
          label: 'Excellent',
          data: [this.q2val[1]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Very Good',
          data: [this.q2val[2]],
          backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Good',
          data: [this.q2val[3]],
          backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Fair',
          data: [this.q2val[4]],
          backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
          borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Poor',
          data: [this.q2val[5]],
          backgroundColor: '#C6DBDA', // array should have same number of elements as number of dataset
          borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Dont know / Not Sure',
          data: [this.q2val[6]],
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
          data: [this.q3r1val[1],this.q3r2val[1],this.q3r3val[1],this.q3r4val[1],this.q3r5val[1]],
          backgroundColor: 'red', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Taking Medicine For'],
          data:  [this.q3r1val[2],this.q3r2val[2],this.q3r3val[2],this.q3r4val[2],this.q3r5val[2]],
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
          data:  [this.q4val[1],this.q4val[2],this.q4val[3],this.q4val[4],this.q4val[5]],
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
          data: [this.q5val[1],this.q5val[2],this.q5val[3],this.q5val[4],this.q5val[5]],
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
          data: [this.q6val[1],this.q6val[2],this.q6val[3]],
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
          data: [this.q7r1val[1],this.q7r2val[1],this.q7r3val[1],this.q7r4val[1],this.q7r5val[1]],
          backgroundColor: '#100d08', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Mild'],
          data: [this.q7r1val[2],this.q7r2val[2],this.q7r3val[2],this.q7r4val[2],this.q7r5val[2]],
          backgroundColor:'#2d231a', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Moderate'],
          data: [this.q7r1val[3],this.q7r2val[3],this.q7r3val[3],this.q7r4val[3],this.q7r5val[3]],
          backgroundColor: '#463626', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Severe'],
          data: [this.q7r1val[4],this.q7r2val[4],this.q7r3val[4],this.q7r4val[4],this.q7r5val[4]],
          backgroundColor: '#916c51', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['Extreme'],
          data: [this.q7r1val[5],this.q7r2val[5],this.q7r3val[5],this.q7r4val[5],this.q7r5val[5]],
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
          data: [this.q8val[1],this.q8val[2],this.q8val[3],this.q8val[4],this.q8val[5]],
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
          data:  [this.q9r1val[1],this.q9r2val[1]],
          backgroundColor: '#100d08', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['About 7 hours'],
          data: [this.q9r1val[2],this.q9r2val[2]],
          backgroundColor: '#2d231a', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['About 8 hours'],
          data: [this.q9r1val[3],this.q9r2val[3]],
          backgroundColor: '#463626', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['About 9 hours'],
          data: [this.q9r1val[4],this.q9r2val[4]],
          backgroundColor: '#916c51', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ['About 10 hours or more'],
          data: [this.q9r1val[5],this.q9r2val[5]],
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
          data: [this.q10val[1]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Fairly Good',
          data: [this.q10val[2]],
          backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Fairly Poor',
          data: [this.q10val[3]],
          backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Very Poor',
          data: [this.q10val[4]],
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
