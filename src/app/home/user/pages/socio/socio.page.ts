/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
@Component({
  selector: 'app-socio',
  templateUrl: './socio.page.html',
  styleUrls: ['./socio.page.scss'],
})
export class SocioPage implements OnInit {
  logs: string[] = [];
  num7: any;
  val: any = [];
  finalData: any = [];
  newDate: any = [] ;
  finalDate: any= [];
data7: any;
  constructor(private router: Router) { }
  ngOnInit() {
  }

  val1(data1) {
    this.val[1] =data1.detail.value;
  }
  val2(data2) {
    this.val[2] =data2.detail.value;
  }
  val3(data3) {
    this.val[3]=data3.detail.value;
  }
  val4(data4) {
    this.val[4]=data4.detail.value;
  }
  val5(data5) {
    this.val[5] =data5.detail.value;
  }
  val6(data6) {
    this.val[6] =data6.detail.value;
  }

  val7(value: boolean): void {
    this.val[7] = value ? 'Yes' : 'No';
    if (typeof this.val[7] === 'undefined' || !this.val[7]) {
      // Handle undefined value
      this.val[7]='No';
    } else if (this.val[7] === 'Yes') {
      const num8 = document.getElementById('num8') as HTMLInputElement;
      num8.disabled = true;
    } else if (this.val[7] === 'No') {
      const num8 = document.getElementById('num8') as HTMLInputElement;
      num8.disabled = false;
    } else {
      console.log('Unexpected value:', this.val[7]);
    }

  }
  val8(data8) {
    this.val[8] =data8.detail.value;
  }
  val9(data9) {
    this.val[9] =data9.detail.value;
  }
  val10(data10) {
    this.val[10] =data10.detail.value;
  }
  val11(data11) {
    this.val[11] =data11.detail.value;
  }
  next(): void{
    console.log('Value of val[7]:', this.val[7]);
    if(!this.val[8] || this.val[8] === 'No'){
      this.val[8]='Me';}
    if(!this.val[1] || !this.val[2] || !this.val[3] || !this.val[4] || !this.val[5] || !this.val[6] ||
       !this.val[9] || !this.val[10] || !this.val[11] ){
        alert('You must answer all the questions');
          const formData = new FormData();
          const id = localStorage.getItem('id');
          const date1 = localStorage.getItem('date1');
          const date2 = localStorage.getItem('date2');
          const company = localStorage.getItem('company');
          formData.append('company', company);
          formData.append('id', id);
          formData.append('date1', date1);
          formData.append('date2', date2);
          fetch('http://api.emoody.online/BackEnd/resettingSocioEconomic.php', {
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


        const formData = new FormData();
        const id = localStorage.getItem('id');
        const dateVal = localStorage.getItem('finaldate');
        const company = localStorage.getItem('company');
        formData.append('company', company);
        formData.append('id', id);
        formData.append('dateVal', dateVal);
        for (let i = 1; i < 4; i++) {
          this.finalDate[i] =localStorage.getItem('newDate'+i);
        }
        for (let i = 1; i < 4; i++) {
          formData.append('date' + i, this.finalDate[i]);
        }

        for (let i = 1; i < 12; i++) {
          localStorage.setItem('sval'+i, this.val[i]);
        }
        for (let i = 1; i < 12; i++) {
          this.finalData[i] =localStorage.getItem('sval'+ i);
        }
        for (let i = 1; i < 12; i++) {
            formData.append('data' + i, this.finalData[i]);
          }
        fetch('http://api.emoody.online/BackendUser/socio.php', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(value => {
          console.log(value.data);
          this.router.navigate(['user']);
        });

      }
      console.log(this.val[7]);
      }

  }

