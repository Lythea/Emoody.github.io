/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup, FormControl } from '@angular/forms';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  registrationForm: FormGroup;
  error: any =[];
  regex: any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/;
  icon: any = [];
  verifyEmail: any =[];
  info: any =[];
  domain: any =[];
  finalInfo: any =[];
  onSubmit: any;
  codecompany: any;
  dataAccounts: any =[];
  errorName: any;
  errorIcon: any;
  namecompany: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private popoverController: PopoverController){
    const newLocal: any = this.position;
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: ['', [Validators.required]],
      position: ['', [Validators.required]],
      code: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


  }

    ngOnInit(){

    }
  name(){
    this.info[1] = this.registrationForm.value.name;
     if(this.info[1].length<5 || this.info[1].length > 30|| !this.info[1]|| this.info[1] ==''){
      this.icon[1]=false;
    }else{
      this.icon[1]=true;
    }
  }
    companyname(data2){
      this.info[2] = this.registrationForm.value.company.toLowerCase();

      const formData = new FormData();
      formData.append('rawCompany',this.info[2]);

      fetch('http://localhost/EMOODY/src/app/BackendCompany/companynameValidation.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(value => {
        this.domain=value.data[0].domain;
        localStorage.setItem('rCompany',value.data[0].company);

        if(this.info[2] === value.data[0].company){
          this.icon[2]=true;

        }else if (this.info[2] !== value.data[0].company){
          this.icon[2]=false;

        }
      });

    }
    position(data3: any) {
      this.info[3]= this.registrationForm.value.position.toLowerCase();
      localStorage.setItem('rPosition',this.info[3]);
      const rawCompany = localStorage.getItem('rCompany');

     if( this.info[3] === 'admin' ){
      this.codecompany ='for Admin';
     }else if(this.info[3] === 'employee'  ){
      this.codecompany ='for Employee';
     }

    }
    code(date5){
      this.info[4] = this.registrationForm.value.code.toLowerCase();
      const rPosition = localStorage.getItem('rPosition');
      const rCompany = localStorage.getItem('rCompany');
      const formData = new FormData();
      formData.append('rawCompany',rCompany);
      formData.append('rawPosition',rPosition);
      fetch('http://localhost/EMOODY/src/app/BackendCompany/companycodeValidation.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(value => {
      localStorage.setItem('rCode',value.data[0].position);
        if(this.info[4] === value.data[0].position){
          this.icon[3]=true;
        }else if (this.info[4] !== value.data[0].position){
          this.icon[3]=false;
        }
        });
      }
    email(event: any){
      this.info[5] = this.registrationForm.value.email.toLowerCase();

      const rCompany = localStorage.getItem('rCompany');
      const formData = new FormData();
      formData.append('rawCompany',rCompany);

      fetch('http://localhost/EMOODY/src/app/BackendCompany/companyemailValidation.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(value => {
      if (this.info[5].length > 20 && this.info[5].includes(value.data[0].domain) == true) {
          this.icon[4]=true;
      }else if(this.info[5].length < 20 && this.info[5].includes(value.data[0].domain) == false){
          this.icon[4]=false;
      }
    });
  }
    password(event: any){
      this.info[6] = this.registrationForm.value.password;
      if (this.info[6].length > 6){
        if(this.regex.test(this.info[6])==true ){
          this.icon[5]=true;
        }else if(this.regex.test(this.info[6])==false){
        }
      }else{
        this.icon[5]=false;
      }
    }
    nameHint(){
        alert('Name is required' + '\n' + 'Characters must be in between of 5-30.');
    }
    companyHint(){
      alert('The Company name that you are trying to input is not registered.');
    }
    codeHint(){
      alert('Code must be based from Company name and from the position you will be in');
    }
    passwordHint(){
      alert('Password must be consist of 1 Uppercase, 1 Lowercase, 1 Number and 1 Symbol and must atleast 7 characters');
    }
    emailHint(){
      alert("Email must be atleast 25 characters long or email doesn't match any companies domain email");
    }
    register() {

      for(let i=1;i<6;i++){
        if(this.icon[i]==true){
          console.log('Data Registered');

        }else{
          this.error[6] = 'false';
        }
      }
      if(this.error[6] = 'false'){
        alert('Try to click X icon on the right of every text area for Error Hint. For disable inputs Company and Position must be connected' );
      }
        const formData = new FormData();
          for(let i=1;i<7;i++){
            formData.append('dataUsers'+i,this.info[i]);
          }
          fetch('http://localhost/EMOODY/src/app/BackendUser/accountRegistration.php', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(value => {
            this.router.navigate(['home']);
        });
    }
    cancel(){
      this.router.navigate(['home']);
    }
}
