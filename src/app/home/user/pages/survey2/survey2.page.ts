/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey2',
  templateUrl: './survey2.page.html',
  styleUrls: ['./survey2.page.scss'],
})
export class Survey2Page implements OnInit {
  logs: string[] = [];
  rawData: any = [];
  constructor(private router: Router) { }

  finalData: any = [];
  ngOnInit() {
  }
  val0(data1) {
    this.rawData[1] = data1.detail.value;
  }
  val1(data2) {
    this.rawData[2] = data2.detail.value;
  }
  val2(data3) {
    this.rawData[3] = data3.detail.value;
  }
  val3(data4) {
    this.rawData[4] = data4.detail.value;
  }
  val4(data5) {
    this.rawData[5] = data5.detail.value;
  }
  val5(data6) {
    this.rawData[6] = data6.detail.value;
  }
  val6(data7) {
    this.rawData[7] = data7.detail.value;
  }
  val7(data8) {
    this.rawData[8] = data8.detail.value;
  }
  val8(data9) {
    this.rawData[9] = data9.detail.value;
  }
  val9(data10) {
    this.rawData[10] = data10.detail.value;
  }

  next(): void{
    if(!this.rawData[1] || !this.rawData[2] || !this.rawData[3] || !this.rawData[4] || !this.rawData[5] ||
      !this.rawData[6] ||!this.rawData[7] || !this.rawData[8] || !this.rawData[9] || !this.rawData[10] ){
        alert('You must answer all the questions');
          const formData = new FormData();
          const id = localStorage.getItem('id');
          const date = localStorage.getItem('date');
          const company = localStorage.getItem('company');
          formData.append('id', id);
          formData.append('date', date);
          formData.append('company', company);
          fetch('http://localhost/EMOODY/src/app/BackEnd/resettingDailysurvey2.php', {
                      method: 'POST',
                      body: formData
                      })
                      .then(response => response.json())
                      .then(value => {
                        console.log(value.data);
                        if (value.data === 'Deleted Successfully!'){
                          alert('Answers been reset');
                        }else if (value.data !== 'Deleted Successfully!'){
                          alert('Try Again Later');
                        }else {
                        console.log('Error');
                        }
                      });

      }else{
        const formData = new FormData();
        const id = localStorage.getItem('id');
        const date = localStorage.getItem('date');
        const company = localStorage.getItem('company');
    formData.append('company', company);
        formData.append('id', id);
        formData.append('date', date);
        for (let i = 1; i < 11; i++) {
          localStorage.setItem('s2val'+i, this.rawData[i]);
        }
        for (let i = 1; i < 11; i++) {
          this.finalData[i] =localStorage.getItem('s2val'+ i);
        }
        for (let i = 1; i < 11; i++) {
            formData.append('data' + i, this.finalData[i]);
          }
        fetch('http://localhost/EMOODY/src/app/BackendUser/registerDailysurvey2.php', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(value => {
          console.log(value.data);
          this.router.navigate(['success']);
        });

      }
      }

    };

