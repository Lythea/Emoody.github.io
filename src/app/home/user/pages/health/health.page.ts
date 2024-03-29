/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

radio: any = [];
q: any = [];
table1: any = [];
table2: any = [];
table3: any = [];
f = 23;
data = [];
finalDate: any =[];
newDate: any =[];
dd: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  q2(val1) {
    this.dd[1]= val1.detail.value;
  }
  q4(val2) {
    this.dd[2]= val2.detail.value;
  }
  q5(val3) {
    this.dd[3]= val3.detail.value;
  }
  q6(val4) {
    this.dd[4]= val4.detail.value;

  }
  q8(val5) {
    this.dd[5]= val5.detail.value;
  }
  q10(val6) {
    this.dd[6]= val6.detail.value;
  }

  next(){

    if (!this.dd[1] || !this.dd[2] || !this.dd[3] || !this.dd[4] || !this.dd[5] || !this.dd[6] || !this.radio[1] || !this.radio[2]
      || !this.radio[3] || !this.radio[4] || !this.radio[5] || !this.radio[6] || !this.radio[7] || !this.radio[8] || !this.radio[9]
      || !this.radio[10] || !this.radio[11] || !this.radio[12] ){

        alert('You must answer all the questions');
          const formData = new FormData();
          const id = localStorage.getItem('id');
          const date = localStorage.getItem('date');
          const company = localStorage.getItem('company');
          formData.append('company', company);
          formData.append('id', id);
          formData.append('date', date);
          this.newDate = new Date();
          this.newDate[1] = this.newDate.getFullYear();
          this.newDate[2] = this.newDate.getMonth()+1;
          this.newDate[3] = this.newDate.getDate();

          for (let i = 1; i < 4; i++) {
            localStorage.setItem('newDate'+i, this.newDate[i]);
          }
          for (let i = 1; i < 4; i++) {
            this.finalDate[i] =localStorage.getItem('newDate'+i);
          }
          for (let i = 1; i < 4; i++) {
            formData.append('date' + i, this.finalDate[i]);
          }
          fetch('http://api.emoody.online/BackEnd/resettingHealthIndex.php', {
                      method: 'POST',
                      body: formData
                      })
                      .then(response => response.json())
                      .then(value => {
                        if (value.data === 'Deleted Successfully!'){
                          alert('Answers been reset');
                        }else if (value.data !== 'Deleted Successfully!'){
                          alert('Try Again Later');
                        }else {
                        console.log('Error');
                        }
                      });
    }else{
      for (let i = 0; i < 7; i++) {
        localStorage.setItem('finalVal'+ i,this.dd[i]);
      }
      for (let i = 0; i < 13; i++) {
        localStorage.setItem('hval'+ i,this.radio[i]);
      }
      for (let i = 0; i < 13; i++) {
        this.radio[i] = localStorage.getItem('hval'+ i);
      }
      for (let i = 0; i < 7; i++) {
        this.dd[i] = localStorage.getItem('finalVal'+ i);
      }
      for (let i = 0; i < 7; i++) {
        this.dd[i] = localStorage.getItem('finalVal'+ i);
      }

      const formData = new FormData();
      const id = localStorage.getItem('id');
      const dateVal = localStorage.getItem('finaldate');
      const company = localStorage.getItem('company');
      formData.append('company', company);
      formData.append('date', dateVal);
      formData.append('id', id);
      for (let i = 1; i < 4; i++) {
        this.finalDate[i] =localStorage.getItem('newDate'+i);
      }
      for (let i = 1; i < 4; i++) {
        formData.append('date' + i, this.finalDate[i]);
      }
      for (let i = 0; i < 7; i++) {
        formData.append('dataDD' + i, this.dd[i]);
      }

      for (let i = 0; i < 13; i++) {
        formData.append('dataRadio' + i, this.radio[i]);
      }

      fetch('http://api.emoody.online/BackendUser/registerHealthindex.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(value => {
        console.log(value.data);
      });
      this.router.navigate(['user']);
    }
    }



}
