import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey2',
  templateUrl: './survey2-s1.page.html',
  styleUrls: ['./survey2-s1.page.scss'],
})
export class Survey2Page implements OnInit {
  logs: string[] = [];
  constructor(private router: Router) { }


  ngOnInit() {
  }
  val1(e1s2) {
    const val1s2 = e1s2.detail.value;
    localStorage.setItem('val1_s2', val1s2);

  }
  val2(e2s2 ) {
    const val2s2 = e2s2 .detail.value;
    localStorage.setItem('val2_s2', val2s2);
  }
  val3(e3s2) {
    const val3s2 = e3s2.detail.value;
    localStorage.setItem('val3_s2', val3s2);
  }
  val4(e4s2) {
    const val4s2 = e4s2.detail.value;
    localStorage.setItem('val4_s2', val4s2);
  }
  val5(e5s2) {
    const val5s2 = e5s2.detail.value;
    localStorage.setItem('val5_s2', val5s2);
  }
  next(): void{
    this.router.navigate(['survey2-s2']);
  }
}
