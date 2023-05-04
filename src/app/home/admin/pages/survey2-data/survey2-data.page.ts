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

  saq: any =[];
  aq: any =[];
  sdq: any =[];
  dq: any =[];

  constructor(private router: Router) { }


next(): void{
  this.router.navigate(['admin']);
}
ionViewDidEnter() {
  for (let i = 1; i < 11; i++) {
    this.sdq[i] =localStorage.getItem('SDQ'+i);
    this.dq[i] =localStorage.getItem('DQ'+i);
    this.saq[i] =localStorage.getItem('SAQ'+i);
    this.aq[i] =localStorage.getItem('AQ'+i);
  }
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
        data: [this.sdq[1]],
        backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Disagree',
        data: [this.dq[1]],
        backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Strongly Agree',
        data: [this.saq[1]],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Agree',
        data: [this.aq[1]],
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
          data: [this.sdq[2]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[2]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[2]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[2]],
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
          data: [this.sdq[3]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[3]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[3]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[3]],
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
          data: [this.sdq[4]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[4]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[4]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[4]],
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
          data: [this.sdq[5]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[5]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[5]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[5]],
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
          data: [this.sdq[6]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[6]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[6]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[6]],
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
          data: [this.sdq[7]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[7]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[7]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[7]],
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
          data: [this.sdq[8]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[8]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[8]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[8]],
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
          data: [this.sdq[9]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[9]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[9]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[9]],
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
          data: [this.sdq[7]],
          backgroundColor: '#FF968A', // array should have same number of elements as number of dataset
          borderColor: '#FF968A',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Disagree',
          data: [this.dq[7]],
          backgroundColor: '#FFC5BF', // array should have same number of elements as number of dataset
          borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Strongly Agree',
          data: [this.saq[10]],
          backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
          borderColor: '#55CBCD',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Agree',
          data: [this.aq[10]],
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
