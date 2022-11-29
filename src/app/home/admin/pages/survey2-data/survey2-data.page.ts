import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-survey2-data',
  templateUrl: './survey2-data.page.html',
  styleUrls: ['./survey2-data.page.scss'],
})
export class Survey2DataPage{
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

 q1sd = localStorage.getItem('q1val1');
 q1d = localStorage.getItem('q1val2');
 q1sa = localStorage.getItem('q1val3');
 q1a = localStorage.getItem('q1val4');

 q2sd = localStorage.getItem('q2val1');
 q2d = localStorage.getItem('q2val2');
 q2sa = localStorage.getItem('q2val3');
 q2a = localStorage.getItem('q2val4');

 q3sd = localStorage.getItem('q3val1');
 q3d = localStorage.getItem('q3val2');
 q3sa = localStorage.getItem('q3val3');
 q3a = localStorage.getItem('q3val4');

 q4sd = localStorage.getItem('q4val1');
 q4d = localStorage.getItem('q4val2');
 q4sa = localStorage.getItem('q4val3');
 q4a = localStorage.getItem('q4val4');

 q5sd = localStorage.getItem('q5val1');
 q5d = localStorage.getItem('q5val2');
 q5sa = localStorage.getItem('q5val3');
 q5a = localStorage.getItem('q5val4');

 q6sd = localStorage.getItem('q6val1');
 q6d = localStorage.getItem('q6val2');
 q6sa = localStorage.getItem('q6val3');
 q6a = localStorage.getItem('q6val4');

 q7sd = localStorage.getItem('q7val1');
 q7d = localStorage.getItem('q7val2');
 q7sa = localStorage.getItem('q7val3');
 q7a = localStorage.getItem('q7val4');

 q8sd = localStorage.getItem('q8val1');
 q8d = localStorage.getItem('q8val2');
 q8sa = localStorage.getItem('q8val3');
 q8a = localStorage.getItem('q8val4');

 q9sd = localStorage.getItem('q9val1');
 q9d = localStorage.getItem('q9val2');
 q9sa = localStorage.getItem('q9val3');
 q9a = localStorage.getItem('q9val4');

 q10sd = localStorage.getItem('q10val1');
 q10d = localStorage.getItem('q10val2');
 q10sa = localStorage.getItem('q10val3');
 q10a = localStorage.getItem('q10val4');


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
createBarChart1() {
  this.bars1 = new Chart(this.barChart1.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q1sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q1d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q1sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q1a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart2() {
  this.bars2 = new Chart(this.barChart2.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q2sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q2d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q2sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q2a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart3() {
  this.bars3 = new Chart(this.barChart3.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q3sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q3d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q3sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q3a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart4() {
  this.bars4 = new Chart(this.barChart4.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q4sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q4d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q4sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q4a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart5() {
  this.bars5 = new Chart(this.barChart5.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q5sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q5d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q5sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q5a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart6() {
  this.bars6 = new Chart(this.barChart6.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q6sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q6d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q6sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q6a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart7() {
  this.bars7 = new Chart(this.barChart7.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q7sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q7d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q7sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q7a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart8() {
  this.bars8 = new Chart(this.barChart8.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q8sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q8d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q8sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q8a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart9() {
  this.bars9 = new Chart(this.barChart9.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q9sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q9d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q9sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q9a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
createBarChart10() {
  this.bars10 = new Chart(this.barChart10.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Strongly Disagree',
        data: [this.q10sd],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.q10d],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.q10sa],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.q10a],
        backgroundColor: '#A2E1DB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
