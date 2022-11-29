import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-socio-data',
  templateUrl: './socio-data.page.html',
  styleUrls: ['./socio-data.page.scss'],
})
export class SocioDataPage {
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

  sq1val1 = localStorage.getItem('sq1val1');
  sq1val2 = localStorage.getItem('sq1val2');
  sq1val3 = localStorage.getItem('sq1val3');
  sq1val4 = localStorage.getItem('sq1val4');
  sq1val5 = localStorage.getItem('sq1val5');

  sq2val1 = localStorage.getItem('sq2val1');
  sq2val2 = localStorage.getItem('sq2val2');
  sq2val3 = localStorage.getItem('sq2val3');
  sq2val4 = localStorage.getItem('sq2val4');

  sq3val1 = localStorage.getItem('sq3val1');
  sq3val2 = localStorage.getItem('sq3val2');
  sq3val3 = localStorage.getItem('sq3val3');
  sq3val4 = localStorage.getItem('sq3val4');
  sq3val5 = localStorage.getItem('sq3val5');
  sq3val6 = localStorage.getItem('sq3val6');
  sq3val7 = localStorage.getItem('sq3val7');
  sq3val8 = localStorage.getItem('sq3val8');
  sq3val9 = localStorage.getItem('sq3val9');

  sq4val1 = localStorage.getItem('sq4val1');
  sq4val2 = localStorage.getItem('sq4val2');
  sq4val3 = localStorage.getItem('sq4val3');
  sq4val4 = localStorage.getItem('sq4val4');
  sq4val5 = localStorage.getItem('sq4val5');
  sq4val6 = localStorage.getItem('sq4val6');

  sq5val1 = localStorage.getItem('sq5val1');
  sq5val2 = localStorage.getItem('sq5val2');
  sq5val3 = localStorage.getItem('sq5val3');
  sq5val4 = localStorage.getItem('sq5val4');
  sq5val5 = localStorage.getItem('sq5val5');

  sq6val1 = localStorage.getItem('sq6val1');
  sq6val2 = localStorage.getItem('sq6val2');
  sq6val3 = localStorage.getItem('sq6val3');

  sq7val1 = localStorage.getItem('sq7val1');
  sq7val2 = localStorage.getItem('sq7val2');

  sq8val1 = localStorage.getItem('sq8val1');
  sq8val2 = localStorage.getItem('sq8val2');
  sq8val3 = localStorage.getItem('sq8val3');

  sq9val1 = localStorage.getItem('sq9val1');
  sq9val2 = localStorage.getItem('sq9val2');
  sq9val3 = localStorage.getItem('sq9val3');
  sq9val4 = localStorage.getItem('sq9val4');
  sq9val5 = localStorage.getItem('sq9val5');

  sq10val1 = localStorage.getItem('sq10val1');
  sq10val2 = localStorage.getItem('sq10val2');
  sq10val3 = localStorage.getItem('sq10val3');
  sq10val4 = localStorage.getItem('sq10val4');
  sq10val5 = localStorage.getItem('sq10val5');
  sq10val6 = localStorage.getItem('sq10val6');

  sq11val1 = localStorage.getItem('sq11val1');
  sq11val2 = localStorage.getItem('sq11val2');
  sq11val3 = localStorage.getItem('sq11val3');
  sq11val4 = localStorage.getItem('sq11val4');
  sq11val5 = localStorage.getItem('sq11val5');
  sq11val6 = localStorage.getItem('sq11val6');
  sq11val7 = localStorage.getItem('sq11val7');
  sq11val8 = localStorage.getItem('sq11val8');
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
  this.createBarChart11();
}
createBarChart1() {
  this.bars1 = new Chart(this.barChart1.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Never Married',
        data: [this.sq1val1],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Separated',
        data: [this.sq1val2],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Divorced',
        data: [this.sq1val3],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Widowed',
        data: [this.sq1val4],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Married',
        data: [this.sq1val5],
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
        label: 'Living Alone',
        data: [this.sq2val1],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '2 to 4',
        data: [this.sq2val2],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '5 to 6',
        data: [this.sq2val3],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '7 or more',
        data: [this.sq2val4],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
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
createBarChart3() {
  this.bars3 = new Chart(this.barChart3.nativeElement, {
    type: 'horizontalBar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Bikol',
        data: [this.sq3val1],
        backgroundColor: '#100d08', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Cebuano',
        data: [this.sq3val2],
        backgroundColor: '#2d231a', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Hiligaynon',
        data: [this.sq3val3],
        backgroundColor: '#463626', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Ilocano',
        data: [this.sq3val4],
        backgroundColor: '#916c51', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Kapampangan',
        data: [this.sq3val5],
        backgroundColor: '#c18762', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Pangasinan',
        data: [this.sq3val6],
        backgroundColor: '#d48d63', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Tagalog',
        data: [this.sq3val7],
        backgroundColor: '#ea9869', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Waray',
        data: [this.sq3val8],
        backgroundColor: '#e89f7c', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'English',
        data: [this.sq3val9],
        backgroundColor: '#d39475', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
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
createBarChart4() {
  this.bars4 = new Chart(this.barChart4.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: ' It is owned or bought by you',
        data: [this.sq4val1],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'It is rented for money by you',
        data: [this.sq4val2],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'It is occupied without payment or money or rent    ',
        data: [this.sq4val3],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'I live with friends ',
        data: [this.sq4val4],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'I live with family',
        data: [this.sq4val5],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'I have no permanent residence',
        data: [this.sq4val6],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
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
createBarChart5() {
  this.bars5 = new Chart(this.barChart5.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: '12th grade or less  ',
        data: [this.sq5val1],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'High school graduate or GED  ',
        data: [this.sq5val2],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Some college/AA degree/Technical school training ',
        data: [this.sq5val3],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'College graduate (BA or BS)  ',
        data: [this.sq5val4],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: ' Graduate school degree: Master’s or Doctorate degree (MD, PhD, JD) ',
        data: [this.sq5val5],
        backgroundColor: '#C6DBDA', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
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
createBarChart6() {
  this.bars6 = new Chart(this.barChart6.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Government funding  ',
        data: [this.sq6val1],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Private insurance   ',
        data: [this.sq6val2],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Self-pay, out-of-pocket ',
        data: [this.sq6val3],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '7 or more',
        data: [this.sq2val4],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
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
createBarChart7() {
  this.bars7 = new Chart(this.barChart7.nativeElement, {
    type: 'pie',
    data: {
      labels: ['Yes','No'],
      datasets: [
      {
        label: ['Yes','No'],
        data: [this.sq7val1,this.sq7val2],
        backgroundColor: ['#ABDEE6','#CBAACB'], // array should have same number of elements as number of dataset
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
createBarChart8() {
  this.bars8 = new Chart(this.barChart8.nativeElement, {
    type: 'pie',
    data: {
      labels: ['Parents','Guardian','Relatives'],
      datasets: [
      {
        label: '',
        data: [this.sq8val1,this.sq8val2,this.sq8val3],
        backgroundColor: ['#ABDEE6','#CBAACB','#FFFFB5'], // array should have same number of elements as number of dataset
      }]
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
createBarChart9() {
  this.bars9 = new Chart(this.barChart9.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Less than 8 hrs',
        data: [this.sq9val1],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '8 hrs',
        data: [this.sq9val2],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '9 hrs - 10 hrs',
        data: [this.sq9val3],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '11 hrs - 12 hrs',
        data: [this.sq9val4],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'More than 12 hrs',
        data: [this.sq9val5],
        backgroundColor: '#C6DBDA', // array should have same number of elements as number of dataset
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
createBarChart10() {
  this.bars10 = new Chart(this.barChart10.nativeElement, {
    type: 'pie',
    data: {
      labels: ['Working full-time','Working part-time','Not working and not looking for work','Unemployed and looking for work',
      'Disabled or retired and not looking for work','Currently in school'],
      datasets: [
      {
        label: [' '],
        data: [this.sq10val1,this.sq10val2,this.sq10val3,this.sq10val4,this.sq10val5,this.sq10val6],
        backgroundColor: ['#ABDEE6','#CBAACB','#FFFFB5','#FFCCB6','#F3B0C3','#C6DBDA'],
      }
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
createBarChart11() {
  this.bars11 = new Chart(this.barChart11.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Less than ₱10,957 ',
        data: [this.sq11val1],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱9,520 to ₱21,194 ',
        data: [this.sq11val2],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱21,194 to ₱43,828',
        data: [this.sq11val3],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱43,828 to ₱76,669',
        data: [this.sq11val4],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱76,669 to ₱131,484',
        data: [this.sq11val5],
        backgroundColor: '#C6DBDA', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱131,484 to ₱219,140 ',
        data: [this.sq11val6],
        backgroundColor: '#CCE2CB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'At least ₱219,140 and up ',
        data: [this.sq11val7],
        backgroundColor: '#B6CFB6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Chose not to answer ',
        data: [this.sq11val8],
        backgroundColor: '#97C1A9', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
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
