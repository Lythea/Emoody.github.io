import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  menu(): void{
    this.router.navigate(['user']);
  }
  suggestions(){
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');
    const pass = localStorage.getItem('pass');
    const company = localStorage.getItem('company');
    formData.append('company', company);
    formData.append('id', id);
    formData.append('email', email);
    formData.append('pass', pass);
    fetch('http://localhost/EMOODY/src/app/BackendUser/suggestions.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
    console.log(value.data);
    });
    this.router.navigate(['suggestions']);
  }
}
