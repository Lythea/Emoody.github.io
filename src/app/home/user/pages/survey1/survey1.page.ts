import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.page.html',
  styleUrls: ['./survey1.page.scss'],
})
export class Survey1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next(): void{
    this.router.navigate(['survey2']);
  }
}
