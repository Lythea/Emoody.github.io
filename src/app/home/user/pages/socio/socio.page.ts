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
  value_selected: any;
  fval: any;
  disableSelector: boolean;
  constructor(private router: Router) { }
  ngOnInit() {
  }

  val1(e1s3) {
    const sq1socio =e1s3.detail.value;
    localStorage.setItem('sq1', sq1socio);
  }
  val2(e2s3) {
    const sq2socio = e2s3.detail.value;
    localStorage.setItem('sq2', sq2socio);
  }
  val3(e3s3) {
    const sq3socio = e3s3.detail.value;
    localStorage.setItem('sq3', sq3socio);
  }
  val4(e4s3) {
    const sq4socio = e4s3.detail.value;
    localStorage.setItem('sq4', sq4socio);
  }
  val5(e5s3) {
    const sq5socio = e5s3.detail.value;
    localStorage.setItem('sq5', sq5socio);
  }
  val6(e6s3) {
    const sq6socio = e6s3.detail.value;
    localStorage.setItem('sq6', sq6socio);
  }
  val7(value: boolean): void {
    const num1 =document.getElementById('opt8') as HTMLInputElement;
    num1.disabled=true;
    let sq7socio: string;
    sq7socio = value ? 'Yes' : 'No';
    localStorage.setItem('sq7', sq7socio);
  }
  val8(e8s3) {
    const sq8socio = e8s3.detail.value;
    localStorage.setItem('sq8', sq8socio);
  }
  val9(e9s3) {
    const sq9socio = e9s3.detail.value;
    localStorage.setItem('sq9', sq9socio);
  }
  val10(e10s3) {
    const sq10socio = e10s3.detail.value;
    localStorage.setItem('sq10', sq10socio);
  }
  val11(e11s3) {
    const sq11socio = e11s3.detail.value;
    localStorage.setItem('sq11', sq11socio );
  }
  next(): void{
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const date = localStorage.getItem('date');
    const sq1 = localStorage.getItem('sq1');
    const sq2 = localStorage.getItem('sq2');
    const sq3 = localStorage.getItem('sq3');
    const sq4 = localStorage.getItem('sq4');
    const sq5 = localStorage.getItem('sq5');
    const sq6 = localStorage.getItem('sq6');
    const sq7 = localStorage.getItem('sq7');
    const sq8 = localStorage.getItem('sq8');
    const sq9 = localStorage.getItem('sq9');
    const sq10 = localStorage.getItem('sq10');
    const sq11 = localStorage.getItem('sq11');
    formData.append('id', id);
    formData.append('date', date);
    formData.append('sq1', sq1);
    formData.append('sq2', sq2);
    formData.append('sq3', sq3);
    formData.append('sq4', sq4);
    formData.append('sq5', sq5);
    formData.append('sq6', sq6);
    formData.append('sq7', sq7);
    formData.append('sq8', sq8);
    formData.append('sq9', sq9);
    formData.append('sq10', sq10);
    formData.append('sq11', sq11);
    fetch('http://localhost/newmobileapp/src/app/Backend/socio.php', {
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
