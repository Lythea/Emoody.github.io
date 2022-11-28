/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey1-s2',
  templateUrl: './survey1-s2.page.html',
  styleUrls: ['./survey1-s2.page.scss'],
})
export class Survey1S2Page implements OnInit {
  data6s1: any;
  data7s1: any;
  data8s1: any;
  data9s1: any;
  data10s1: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  val6(value: boolean): void {
    let newValue6: string;
    newValue6= value ? 'Yes' : 'No';
    localStorage.setItem('val6_s1', newValue6);
  }
  val7(value: boolean): void {
    let newValue7: string;
    newValue7 = value ? 'Yes' : 'No';
    localStorage.setItem('val7_s1', newValue7);
  }
  val8(value: boolean): void {
    let newValue8: string;
    newValue8 = value ? 'Yes' : 'No';
    localStorage.setItem('val8_s1', newValue8);
  }
  val9(value: boolean): void {
    let newValue9: string;
    newValue9 = value ? 'Yes' : 'No';
    localStorage.setItem('val9_s1', newValue9);
  }
  val10(value: boolean): void {
    let newValue10: string;
    newValue10= value ? 'Yes' : 'No';
    localStorage.setItem('val10_s1', newValue10);
  }
  next(): void{
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const date = localStorage.getItem('date');
    formData.append('date', date);
    const val1s1 = localStorage.getItem('val1_s1');
    const val2s1 = localStorage.getItem('val2_s1');
    const val3s1 = localStorage.getItem('val3_s1');
    const val4s1 = localStorage.getItem('val4_s1');
    const val5s1 = localStorage.getItem('val5_s1');
    const val6s1 = localStorage.getItem('val6_s1');
    const val7s1  = localStorage.getItem('val7_s1');
    const val8s1  = localStorage.getItem('val8_s1');
    const val9s1  = localStorage.getItem('val9_s1');
    const val10s1  = localStorage.getItem('val10_s1');
    formData.append('id', id);
    formData.append('q1_s1', val1s1);
    formData.append('q2_s1', val2s1);
    formData.append('q3_s1', val3s1);
    formData.append('q4_s1', val4s1);
    formData.append('q5_s1', val5s1);
    formData.append('q6_s1', val6s1);
    formData.append('q7_s1', val7s1);
    formData.append('q8_s1', val8s1);
    formData.append('q9_s1', val9s1);
    formData.append('q10_s1', val10s1);
    fetch('http://localhost/newmobileapp/src/app/Backend/regData2.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      console.log(value.data);
    });
    this.router.navigate(['survey2-s1']);
  }
}
