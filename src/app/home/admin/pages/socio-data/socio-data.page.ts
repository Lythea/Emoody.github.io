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
  sq1: any = [];
  sq2: any = [];
  sq3: any = [];
  sq4: any = [];
  sq5: any = [];
  sq6: any = [];
  sq7: any = [];
  sq8: any = [];
  sq9: any = [];
  sq10: any = [];
  sq11: any = [];
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

  for (let i = 1; i < 6; i++) {
    this.sq1[i] =localStorage.getItem('sq1val'+i);
  }
  for (let i = 1; i < 5; i++) {
    this.sq2[i] =localStorage.getItem('sq2val'+i);
  }
  for (let i = 1; i < 9; i++) {
    this.sq3[i] =localStorage.getItem('sq3val'+i);
  }
  for (let i = 1; i < 7; i++) {
    this.sq4[i] =localStorage.getItem('sq4val'+i);
  }
  for (let i = 1; i < 6; i++) {
    this.sq5[i] =localStorage.getItem('sq5val'+i);
  }
  for (let i = 1; i < 4; i++) {
    this.sq6[i] =localStorage.getItem('sq6val'+i);
  }
  for (let i = 1; i < 3; i++) {
    this.sq7[i] =localStorage.getItem('sq7val'+i);
  }
  for (let i = 1; i < 4; i++) {
    this.sq8[i] =localStorage.getItem('sq8val'+i);
  }
  for (let i = 1; i < 6; i++) {
    this.sq9[i] =localStorage.getItem('sq9val'+i);
  }
  for (let i = 1; i < 7; i++) {
    this.sq10[i] =localStorage.getItem('sq10val'+i);
  }
  for (let i = 1; i < 9; i++) {
    this.sq11[i] =localStorage.getItem('sq11val'+i);
  }
  this.bars1 = new Chart(this.barChart1.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Users'],
      datasets: [
      {
        label: 'Never Married',
        data: [this.sq1[1]],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Separated',
        data: [this.sq1[2]],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Divorced',
        data: [this.sq1[3]],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Widowed',
        data: [this.sq1[4]],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Married',
        data: [this.sq1[5]],
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
        data: [this.sq2[1]],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '2 to 4',
        data: [this.sq2[2]],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '5 to 6',
        data: [this.sq2[3]],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '7 or more',
        data: [this.sq2[4]],
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
        data: [this.sq3[1]],
        backgroundColor: '#100d08', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Cebuano',
        data: [this.sq3[2]],
        backgroundColor: '#2d231a', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Hiligaynon',
        data: [this.sq3[3]],
        backgroundColor: '#463626', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Kapampangan',
        data: [this.sq3[4]],
        backgroundColor: '#c18762', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Pangasinan',
        data: [this.sq3[5]],
        backgroundColor: '#d48d63', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Tagalog',
        data: [this.sq3[6]],
        backgroundColor: '#ea9869', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Waray',
        data: [this.sq3[7]],
        backgroundColor: '#e89f7c', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'English',
        data: [this.sq3[8]],
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
        data: [this.sq4[1]],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'It is rented for money by you',
        data: [this.sq4[2]],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'It is occupied without payment or money or rent    ',
        data:[this.sq4[3]],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'I live with friends ',
        data: [this.sq4[4]],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'I live with family',
        data: [this.sq4[5]],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'I have no permanent residence',
        data: [this.sq4[6]],
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
        data: [this.sq5[1]],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'High school graduate or GED  ',
        data: [this.sq5[2]],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Some college/AA degree/Technical school training ',
        data: [this.sq5[3]],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'College graduate (BA or BS)  ',
        data: [this.sq5[4]],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: ' Graduate school degree: Master’s or Doctorate degree (MD, PhD, JD) ',
        data: [this.sq5[5]],
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
        data: [this.sq6[1]],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Private insurance   ',
        data: [this.sq6[2]],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Self-pay, out-of-pocket ',
        data: [this.sq6[3]],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '7 or more',
        data: [this.sq6[4]],
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
        data: [this.sq7[1],this.sq7[2]],
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
        data: [this.sq8[1],this.sq8[2],this.sq8[3]],
        backgroundColor: ['#97C1A9','#CBAACB','#FFFFB5'], // array should have same number of elements as number of dataset
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
        data: [this.sq9[1]],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '8 hrs',
        data: [this.sq9[2]],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '9 hrs - 10 hrs',
        data: [this.sq9[3]],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: '11 hrs - 12 hrs',
        data: [this.sq9[4]],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'More than 12 hrs',
        data: [this.sq9[5]],
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
        data: [this.sq10[1],this.sq10[2],this.sq10[3],this.sq10[4],this.sq10[5],this.sq10[6]],
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
        data: [this.sq11[1]],
        backgroundColor: '#55CBCD', // array should have same number of elements as number of dataset
        borderColor: '#FF968A',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱9,520 to ₱21,194 ',
        data: [this.sq11[2]],
        backgroundColor: '#8FCACA', // array should have same number of elements as number of dataset
        borderColor: '#FFC5BF',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱21,194 to ₱43,828',
        data: [this.sq11[3]],
        backgroundColor: '#A2E1D8', // array should have same number of elements as number of dataset
        borderColor: '#55CBCD',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱43,828 to ₱76,669',
        data: [this.sq11[4]],
        backgroundColor: '#ABDEE6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱76,669 to ₱131,484',
        data: [this.sq11[5]],
        backgroundColor: '#C6DBDA', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Between ₱131,484 to ₱219,140 ',
        data: [this.sq11[6]],
        backgroundColor: '#CCE2CB', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'At least ₱219,140 and up ',
        data: [this.sq11[7]],
        backgroundColor: '#B6CFB6', // array should have same number of elements as number of dataset
        borderColor: '#A2E1DB',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Chose not to answer ',
        data: [this.sq11[8]],
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
