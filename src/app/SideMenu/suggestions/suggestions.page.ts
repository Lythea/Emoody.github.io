import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.page.html',
  styleUrls: ['./suggestions.page.scss'],
})
export class SuggestionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
menu(){
  this.router.navigate(['user']);
}
}
