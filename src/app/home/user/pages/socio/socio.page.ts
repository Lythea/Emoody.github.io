/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-socio',
  templateUrl: './socio.page.html',
  styleUrls: ['./socio.page.scss'],
})
export class SocioPage implements OnInit {
  logs: string[] = [];
  data1s3: any;
  selectedValue: any;
  data: any[] = [
    {
      A:'Never married ',
      B:'Separated',
      C:'Divorced',
      D:'Widowed ',
      E:'Married ',
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  checkValue(event) {
    console.log(event.detail.value);
}
print(event) {
  console.log('Selected value: ', this.selectedValue);
}
  val11(){
    document.querySelector('h1').style.backgroundColor = 'red';
  }
  val1(e1s3) {
    const val1s3 =e1s3.detail.value;
    localStorage.setItem('val1_s3', val1s3);
  }
  val2(e2s3) {
    const val2s3 = e2s3.detail.value;
    localStorage.setItem('val2_s3', val2s3);
  }
  val3(e3s3) {
    const val3s3 = e3s3.detail.value;
    localStorage.setItem('val3_s3', val3s3);
  }
  val4(e4s3) {
    const val4s3 = e4s3.detail.value;
    localStorage.setItem('val4_s3', val4s3);
  }
  val5(e5s3) {
    const val5s3 = e5s3.detail.value;
    localStorage.setItem('val5_s3', val5s3);
  }
  val6(e6s3) {
    const val6s3 = e6s3.detail.value;
    localStorage.setItem('val6_s3', val6s3);
  }
  val7(value: boolean): void {
    let newValue7s3: string;
    newValue7s3 = value ? 'Yes' : 'No';
    localStorage.setItem('val7_s3', newValue7s3);
  }
  val8(e8s3) {
    const val8s3 = e8s3.detail.value;
    localStorage.setItem('val8_s3', val8s3);
  }
  val9(e9s3) {
    const val9s3 = e9s3.detail.value;
    localStorage.setItem('val9_s3', val9s3);
  }
  val10(e10s3) {
    const val10s3 = e10s3.detail.value;
    localStorage.setItem('val9_s3', val10s3);
  }



  next(): void{

    const formData = new FormData();
    const id = localStorage.getItem('id');
    const val1s2 = localStorage.getItem('val1_s2');
    const val2s2  = localStorage.getItem('val2_s2');
    const val3s2  = localStorage.getItem('val3_s2');
    const val4s2  = localStorage.getItem('val4_s2');
    const val5s2  = localStorage.getItem('val5_s2');
    const val6s2 = localStorage.getItem('val6_s2');
    const val7s2  = localStorage.getItem('val7_s2');
    const val8s2  = localStorage.getItem('val8_s2');
    const val9s2  = localStorage.getItem('val9_s2');
    const val10s2  = localStorage.getItem('val10_s2');
    formData.append('id', id);
    formData.append('q1_s2', val1s2);
    formData.append('q2_s2', val2s2);
    formData.append('q3_s2', val3s2);
    formData.append('q4_s2', val4s2);
    formData.append('q5_s2', val5s2);
    formData.append('q6_s2', val6s2);
    formData.append('q7_s2', val7s2);
    formData.append('q8_s2', val8s2);
    formData.append('q9_s2', val9s2);
    formData.append('q10_s2', val10s2);
    fetch('http://localhost/newmobileapp/src/app/Backend/regData3.php', {
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
