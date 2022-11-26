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
value: any;
value_selected1: string;
value_selected2: string;
value_selected3: string;
value_selected4: string;
value_selected5: string;
value_selected6: string;
value_selected7: string;
value_selected8: string;
value_selected9: string;
value_selected10: string;
value_selected11: string;
value_selected12: string;
value_selected13: string;
val2s3: any;
val4s3: any;
val5s3: any;
val6s3: any;
val8s3: any;
val10s3: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  agree(){
    const opt1 =document.getElementById('opt1') as HTMLInputElement;
    const opt2 =document.getElementById('opt2') as HTMLInputElement;
    const opt3 =document.getElementById('opt3') as HTMLInputElement;
    const opt4 =document.getElementById('opt4') as HTMLInputElement;
    const opt5 =document.getElementById('opt5') as HTMLInputElement;
    const opt6 =document.getElementById('opt6') as HTMLInputElement;
    opt1.disabled=false;
    opt2.disabled=false;
    opt3.disabled=false;
    opt4.disabled=false;
    opt5.disabled=false;
    opt6.disabled=false;
    const q2 =(document.getElementById('q2') as HTMLInputElement);
    q2.disabled=false;
    const g1r1 =(document.getElementById('g1_r1') as HTMLInputElement);
    const g1r2 =(document.getElementById('g1_r2') as HTMLInputElement);
    const g1r3 =(document.getElementById('g1_r3') as HTMLInputElement);
    const g1r4 =(document.getElementById('g1_r4') as HTMLInputElement);
    const g1r5 =(document.getElementById('g1_r5') as HTMLInputElement);
    const g1r6 =(document.getElementById('g1_r6') as HTMLInputElement);
    const g1r7 =(document.getElementById('g1_r7') as HTMLInputElement);
    const g1r8 =(document.getElementById('g1_r8') as HTMLInputElement);
    const g1r9 =(document.getElementById('g1_r9') as HTMLInputElement);
    const g1r10 =(document.getElementById('g1_r10') as HTMLInputElement);
    const g2r1 =(document.getElementById('g2_r1') as HTMLInputElement);
    const g2r2 =(document.getElementById('g2_r2') as HTMLInputElement);
    const g2r3 =(document.getElementById('g2_r3') as HTMLInputElement);
    const g2r4 =(document.getElementById('g2_r4') as HTMLInputElement);
    const g2r5 =(document.getElementById('g2_r5') as HTMLInputElement);
    const g2r6 =(document.getElementById('g2_r6') as HTMLInputElement);
    const g2r7 =(document.getElementById('g2_r7') as HTMLInputElement);
    const g2r8 =(document.getElementById('g2_r8') as HTMLInputElement);
    const g2r9 =(document.getElementById('g2_r9') as HTMLInputElement);
    const g2r10 =(document.getElementById('g2_r10') as HTMLInputElement);
    const g2r11 =(document.getElementById('g2_r11') as HTMLInputElement);
    const g2r12 =(document.getElementById('g2_r12') as HTMLInputElement);
    const g2r13 =(document.getElementById('g2_r13') as HTMLInputElement);
    const g2r14 =(document.getElementById('g2_r14') as HTMLInputElement);
    const g2r15 =(document.getElementById('g2_r15') as HTMLInputElement);
    const g2r16 =(document.getElementById('g2_r16') as HTMLInputElement);
    const g2r17 =(document.getElementById('g2_r17') as HTMLInputElement);
    const g2r18 =(document.getElementById('g2_r18') as HTMLInputElement);
    const g2r19 =(document.getElementById('g2_r19') as HTMLInputElement);
    const g2r20 =(document.getElementById('g2_r20') as HTMLInputElement);
    const g2r21 =(document.getElementById('g2_r21') as HTMLInputElement);
    const g2r22 =(document.getElementById('g2_r22') as HTMLInputElement);
    const g2r23 =(document.getElementById('g2_r23') as HTMLInputElement);
    const g2r24 =(document.getElementById('g2_r24') as HTMLInputElement);
    const g2r25 =(document.getElementById('g2_r25') as HTMLInputElement);
    const g3r1 =(document.getElementById('g3_r1') as HTMLInputElement);
    const g3r2 =(document.getElementById('g3_r2') as HTMLInputElement);
    const g3r3 =(document.getElementById('g3_r3') as HTMLInputElement);
    const g3r4 =(document.getElementById('g3_r4') as HTMLInputElement);
    const g3r5 =(document.getElementById('g3_r5') as HTMLInputElement);
    const g3r6 =(document.getElementById('g3_r6') as HTMLInputElement);
    const g3r7 =(document.getElementById('g3_r7') as HTMLInputElement);
    const g3r8 =(document.getElementById('g3_r8') as HTMLInputElement);
    const g3r9 =(document.getElementById('g3_r9') as HTMLInputElement);
    const g3r10 =(document.getElementById('g3_r10') as HTMLInputElement);
    g1r1.disabled=false;
    g1r2.disabled=false;
    g1r3.disabled=false;
    g1r4.disabled=false;
    g1r5.disabled=false;
    g1r6.disabled=false;
    g1r7.disabled=false;
    g1r8.disabled=false;
    g1r9.disabled=false;
    g1r10.disabled=false;
    g2r1.disabled=false;
    g2r2.disabled=false;
    g2r3.disabled=false;
    g2r4.disabled=false;
    g2r5.disabled=false;
    g2r6.disabled=false;
    g2r7.disabled=false;
    g2r8.disabled=false;
    g2r9.disabled=false;
    g2r10.disabled=false;
    g2r11.disabled=false;
    g2r12.disabled=false;
    g2r13.disabled=false;
    g2r14.disabled=false;
    g2r15.disabled=false;
    g2r16.disabled=false;
    g2r17.disabled=false;
    g2r18.disabled=false;
    g2r19.disabled=false;
    g2r20.disabled=false;
    g2r21.disabled=false;
    g2r22.disabled=false;
    g2r23.disabled=false;
    g2r24.disabled=false;
    g2r25.disabled=false;
    g3r1.disabled=false;
    g3r2.disabled=false;
    g3r3.disabled=false;
    g3r4.disabled=false;
    g3r5.disabled=false;
    g3r6.disabled=false;
    g3r7.disabled=false;
    g3r8.disabled=false;
    g3r9.disabled=false;
    g3r10.disabled=false;
    const next =(document.getElementById('next') as HTMLInputElement);
    next.disabled=false;
  }
  q2(q2val) {
    const q2 = q2val.detail.value;
    localStorage.setItem('q2', q2);
  }
  q4(q4val) {
    const q4 = q4val.detail.value;
    localStorage.setItem('q4', q4);
  }
  q5(q5val) {
    const q5 = q5val.detail.value;
    localStorage.setItem('q5', q5);
  }
  q6(q6val) {
    const q6 = q6val.detail.value;
    localStorage.setItem('q6', q6);
  }
  q8(q8val) {
    const q8 = q8val.detail.value;
    localStorage.setItem('q8', q8);
  }
  q10(q10val) {
    const q10= q10val.detail.value;
    localStorage.setItem('q10', q10);
  }

  next(){
    const q1health = this.value_selected1;
    const q3r1health = this.value_selected2;
    const q3r2health = this.value_selected3;
    const q3r3health = this.value_selected4;
    const q3r4health = this.value_selected5;
    const q3r5health = this.value_selected6;
    const q7r1health = this.value_selected7;
    const q7r2health = this.value_selected8;
    const q7r3health = this.value_selected9;
    const q7r4health = this.value_selected10;
    const q7r5health = this.value_selected11;
    const q9r1health = this.value_selected12;
    const q9r2health = this.value_selected13;
    localStorage.setItem('q1',q1health);
    localStorage.setItem('q3r1',q3r1health);
    localStorage.setItem('q3r2',q3r2health);
    localStorage.setItem('q3r3',q3r3health);
    localStorage.setItem('q3r4',q3r4health);
    localStorage.setItem('q3r5',q3r5health);
    localStorage.setItem('q7r1',q7r1health);
    localStorage.setItem('q7r2',q7r2health);
    localStorage.setItem('q7r3',q7r3health);
    localStorage.setItem('q7r4',q7r4health);
    localStorage.setItem('q7r5',q7r5health);
    localStorage.setItem('q9r1',q9r1health);
    localStorage.setItem('q9r2',q9r2health);
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const q1 = localStorage.getItem('q1');
    const q2 = localStorage.getItem('q2');
    const q4 = localStorage.getItem('q4');
    const q5 = localStorage.getItem('q5');
    const q6 = localStorage.getItem('q6');
    const q8 = localStorage.getItem('q8');
    const q10 = localStorage.getItem('q10');
    const q3r1 = localStorage.getItem('q3r1');
    const q3r2 = localStorage.getItem('q3r2');
    const q3r3 = localStorage.getItem('q3r3');
    const q3r4  = localStorage.getItem('q3r4');
    const q3r5 = localStorage.getItem('q3r5');
    const q7r1  = localStorage.getItem('q7r1');
    const q7r2  = localStorage.getItem('q7r2');
    const q7r3  = localStorage.getItem('q7r3');
    const q7r4  = localStorage.getItem('q7r4');
    const q7r5  = localStorage.getItem('q7r5');
    const q9r1  = localStorage.getItem('q9r1');
    const q9r2  = localStorage.getItem('q9r2');
    formData.append('id', id);
    formData.append('q1', q1);
    formData.append('q2', q2);
    formData.append('q4', q4);
    formData.append('q5', q5);
    formData.append('q6', q6);
    formData.append('q8', q8);
    formData.append('q10', q10);
    formData.append('q3r1', q3r1);
    formData.append('q3r2', q3r2);
    formData.append('q3r3', q3r3);
    formData.append('q3r4', q3r4);
    formData.append('q3r5', q3r5);
    formData.append('q7r1', q7r1);
    formData.append('q7r2', q7r2);
    formData.append('q7r3', q7r3);
    formData.append('q7r4', q7r4);
    formData.append('q7r5', q7r5);
    formData.append('q9r1', q9r1);
    formData.append('q9r2', q9r2);

    fetch('http://localhost/newmobileapp/src/app/Backend/healthindex.php', {
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
