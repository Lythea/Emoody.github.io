/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {format,parseISO} from 'date-fns';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  login: any = FormGroup;
  data = [];
  data1 = [];
user: any;
pass: any;
email: any;
password: any;
selectedMode = 'date';
showPicker = true;
val1: any;
val2: any;
val3: any;
val4: any;
option: any;
date = new Date();
formattedDate: any;
newDate: any = [];
finalDate: any =[];
domain: any = ['@g.batstate-u.edu.ph','@ub.edu.ph','@lpu.edu.ph'];
company: any;
  constructor(private router: Router,private http: HttpClient, private fb: FormBuilder) { this.setToday();}
  ngOnInit(): void{
    this.login = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    });
  }
  setToday(){
    this.formattedDate =  this.date.toISOString().slice(0, 10);
  }
  register(){
    this.router.navigate(['option']);
  }
  try1(data: any): void{

    if (data.email.includes(this.domain[0]) || data.email.includes(this.domain[1]) || data.email.includes(this.domain[2]) ){
      if(data.email.includes(this.domain[0])){
        this.domain[0]='BSU';
        this.company= this.domain[0];
      }else if(data.email.includes(this.domain[1])){
        this.domain[0]='UB';
        this.company= this.domain[1];
      }else if(data.email.includes(this.domain[2])){
        this.domain[0]='LPU';
        this.company= this.domain[2];
      }
    }else{
      alert('You domain email is not registered');
    }
      const formData = new FormData();
      formData.append('user', data.email);
      formData.append('pass', data.password);
      formData.append('company', this.company);
      fetch('http://localhost/EMOODY/src/app/BackendUser/gettingAccountInfo.php', {
      method: 'POST',
      body: formData
      })
    .then(response => response.json())
    .then(value => {
      if(value.data[0].position ==='EMPLOYEE'){
        console.log(value.data[0]);
        this.router.navigate(['user']);
        localStorage.setItem('id', value.data[0].id);
        localStorage.setItem('company',value.data[0].company);
        localStorage.setItem('date',this.formattedDate);

        this.val1=  localStorage.getItem('id');
        this.val2=  localStorage.getItem('date');
        this.val3=  localStorage.getItem('company');

        formData.append('id', this.val1);
        formData.append('date', this.val2);
        formData.append('company', this.val3);

        this.newDate = new Date();
        this.newDate[1] = this.newDate.getFullYear();
        this.newDate[2] = this.newDate.getMonth()+1;
        this.newDate[3] = this.newDate.getDate();

        for (let i = 1; i < 4; i++) {
          localStorage.setItem('newDate'+i, this.newDate[i]);
        }
        for (let i = 1; i < 4; i++) {
          this.finalDate[i] =localStorage.getItem('newDate'+i);
        }
        for (let i = 1; i < 4; i++) {
          formData.append('date' + i, this.finalDate[i]);
        }
          fetch('http://localhost/EMOODY/src/app/BackEnd/moodTrack.php', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(value1 => {
              if (value1.data === 'Not Found!'){
                alert("'You haven't answer daily survey yet'");
              }else{

              }});
          fetch('http://localhost/EMOODY/src/app/BackEnd/dateSocio.php', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(value2 => {
                if(value2.data==='Not Found!'){
                  alert("You haven't answer the Socio Survey yet");
                }else{
                  const year = value2.data[0].Year;
                  const month = value2.data[0].Month;
                  const day = value2.data[0].Day;
                    if (year == this.finalDate[1] || year < this.finalDate[1]){
                      if(month < this.finalDate[2]){
                        if(day %7==0){
                          alert("You haven't answer the Socio Survey yet");
                        }
                      }else if (month == this.finalDate[2]){
                        alert("You already answered the Socio Survey");
                      }
                    }else {
                      console.log('Error');
                    }
                }

             });

             fetch('http://localhost/EMOODY/src/app/BackEnd/dateHealth.php', {
              method: 'POST',
              body: formData
              })
              .then(response => response.json())
              .then(value2 => {
                if(value2.data==='Not Found!'){
                  alert("You haven't answer the Health Survey yet");
                }else{
                  const year = value2.data[0].Year;
                  const month = value2.data[0].Month;
                  const day = value2.data[0].Day;
                    if (year == this.finalDate[1] || year < this.finalDate[1]){
                      if(month < this.finalDate[2]){
                        if(day %7==0){
                          alert("You haven't answer the Health Survey yet");
                        }
                      }else if (month == this.finalDate[2]){
                        alert("You already answered the Socio Survey");
                      }
                    }else {
                      console.log('Error');
                    }
                }
               });

      }else if(value.data[0].position ==='ADMIN'){
        this.router.navigate(['admin']);
        console.log('Logging in as Admin');
      }else {
        console.log('Error');
      }
    });
    }
}

