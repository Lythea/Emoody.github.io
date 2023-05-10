/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-shadow */
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
domain: any;
company: any;
finalData: any =[];
token: any = '';
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
  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      this.token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return this.token;
  }
  try1(data: any): void{
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
alert(`Viewport width: ${viewportWidth}px x ${viewportHeight}px`);
    this.token = this.generateRandomString(32);
    const formData = new FormData();
    data.email = this.login.value.email.toLowerCase();
    formData.append('user', data.email);
    formData.append('pass', data.password);

    fetch('http://api.emoody.online/BackendUser/companyDomain.php', {
      method: 'POST',
      body: formData,
      })
      .then(response => response.json())
      .then(value => {
      let result1Data = value.result1;
      let result2Data = value.result2;
    for (let i = 0; i < result2Data[0].count; i++) {
      if(data.email.includes(result1Data[i].domain) == true){
       this.domain=result1Data[i].domain;
       this.company=result1Data[i].companyname;
      }
    }
    if(!this.domain || !this.company){
      alert('Domain Email is not registerd');
    }
        if(this.company !==''&& this.domain!==''){
          formData.append('company',this.company);
          formData.append('email', data.email);
          formData.append('pass', data.password);
          fetch('http://api.emoody.online/BackendUser/gettingAccountInfo.php', {
            method: 'POST',
            body: formData
            })
          .then(response => response.json())
            .then(value => {
              this.finalData[0] = value.data[0].id;
              this.finalData[1] = value.data[0].company;
              this.finalData[2] = value.data[0].position;
              this.finalData[3] = value.data[0].email;

              if(this.finalData[2]=='employee'){

                this.router.navigate(['user']);
                this.newDate = new Date();
                this.newDate[1] = this.newDate.getFullYear();
                this.newDate[2] = this.newDate.getMonth()+1;
                this.newDate[3] = this.newDate.getDate();

                localStorage.setItem('id', this.finalData[0]);
                localStorage.setItem('company',this.finalData[1]);
                localStorage.setItem('position',this.finalData[2]);
                localStorage.setItem('date',this.formattedDate);
                localStorage.setItem('email',this.finalData[3]);
                for (let i = 1; i < 4; i++) {
                  localStorage.setItem('newDate'+i, this.newDate[i]);
                }
                for (let i = 1; i < 4; i++) {
                  formData.append('date' + i, this.newDate[i]);
                }
                formData.append('id', this.finalData[0]);
                formData.append('date', this.formattedDate);
                formData.append('company',this.finalData[1]);
                formData.append('email',this.finalData[3]);
                fetch('http://api.emoody.online/BackEnd/dailyloginTrack.php', {
                  method: 'POST',
                  body: formData
                  })
                  .then(response => response.json())
                  .then(value0 => {
                    if(value0.data ==='Not Found!'){
                      console.log(value.data);
                      for (let i = 1; i < 4; i++) {
                        formData.append('date' + i, this.newDate[i]);
                      }
                      formData.append('id', this.finalData[0]);
                      formData.append('date', this.formattedDate);
                      formData.append('company',this.finalData[1]);
                      formData.append('email',this.finalData[3]);
                      fetch('http://api.emoody.online/BackendUser/dailyloginRegistration.php', {
                        method: 'POST',
                        body: formData
                        })
                        .then(response => response.json())
                        .then(value1 => {
                          console.log(value1.data);
                          });
                    }
                    });
                fetch('http://api.emoody.online/BackEnd/moodTrack.php', {
                  method: 'POST',
                  body: formData
                  })
                  .then(response => response.json())
                  .then(value1 => {
                    if (value1.data === 'Not Found!'){
                      alert("'You haven't answer daily survey yet'");
                    }else{

                    }});
                fetch('http://api.emoody.online/BackEnd/dateSocio.php', {
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
                          }
                      }

                   });

                   fetch('http://api.emoody.online/BackEnd/dateHealth.php', {
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
                          }
                      }
                     });

              }else if(this.finalData[2] ==='admin'){
                this.newDate = new Date();
                this.newDate[1] = this.newDate.getFullYear();
                this.newDate[2] = this.newDate.getMonth()+1;
                this.newDate[3] = this.newDate.getDate();

                localStorage.setItem('id', this.finalData[0]);
                localStorage.setItem('company',this.finalData[1]);
                localStorage.setItem('date',this.formattedDate);
                localStorage.setItem('position',this.finalData[2]);
                for (let i = 1; i < 4; i++) {
                  localStorage.setItem('newDate'+i, this.newDate[i]);
                }
                for (let i = 1; i < 4; i++) {
                  formData.append('date' + i, this.newDate[i]);
                }
                formData.append('id', this.finalData[0]);
                formData.append('date', this.formattedDate);
                formData.append('company',this.finalData[1]);
                formData.append('position',this.finalData[2]);
                      this.router.navigate(['admin']);
                      console.log('Logging in as Admin');
                    }


            });
          }
      }) .catch(error => {
        console.error('Error:', error);
      });
    }
}
