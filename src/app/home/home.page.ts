/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {catchError} from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  login: any = FormGroup;
  data = [];
user: any;
pass: any;
email: any;
password: any;

  constructor(private router: Router,private http: HttpClient, private fb: FormBuilder) {
  }
  ngOnInit(): void{
    this.login = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    });
  }
    try1(data: any): void{
      const formData = new FormData();
      formData.append('user', data.email);
      formData.append('pass', data.password);

      fetch('http://localhost/newmobileapp/src/app/BackendUser/getAcc.php', {
      method: 'POST',
      body: formData
      })
    .then(response => response.json())
    .then(value => {
      if(value.data[0].profile ==='user'){
        localStorage.setItem('id', value.data[0].id);
        this.router.navigate(['user']);
        console.log('Logging in as User');
        localStorage.setItem('email',data.email);
        localStorage.setItem('pass',data.password);
      }else if(value.data[0].profile ==='admin'){
        this.router.navigate(['admin']);
        console.log('Logging in as Admin');
      }else {
        console.log('Error');
      }
    });
    }
}

