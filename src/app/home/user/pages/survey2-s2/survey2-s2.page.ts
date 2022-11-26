import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey2-s2',
  templateUrl: './survey2-s2.page.html',
  styleUrls: ['./survey2-s2.page.scss'],
})
export class Survey2S2Page implements OnInit {

  logs: string[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  val6(e6s2) {
    const val6s2 = e6s2.detail.value;
    localStorage.setItem('val6_s2', val6s2);
  }
  val7(e7s2 ) {
    const val7s2 = e7s2.detail.value;
    localStorage.setItem('val7_s2', val7s2);
  }
  val8(e8s2) {
    const val8s2 = e8s2.detail.value;
    localStorage.setItem('val8_s2', val8s2);
  }
  val9(e9s2) {
    const val9s2 = e9s2.detail.value;
    localStorage.setItem('val9_s2', val9s2);
  }
  val10(e10s2) {
    const val10s2 = e10s2.detail.value;
    localStorage.setItem('val10_s2', val10s2);
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
