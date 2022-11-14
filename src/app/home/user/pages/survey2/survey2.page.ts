import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey2',
  templateUrl: './survey2.page.html',
  styleUrls: ['./survey2.page.scss'],
})
export class Survey2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next(): void{
    this.router.navigate(['success']);
  }
}
