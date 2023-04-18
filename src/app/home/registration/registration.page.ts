/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable prefer-const */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup, FormControl } from '@angular/forms';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
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
  let fName = this.registrationForm.value.name;
this.info[1] = fName;
 if (this.info[1].length<5){
    this.icon[0]=false;
  }else if (this.info[1].length>5){
    this.icon[0]=true;
  }
}
  companyname(data2){
    let fCompany = this.registrationForm.value.company;
    this.info[2]= fCompany.toUpperCase();
    let email = document.getElementById('email') as HTMLInputElement;
    if(this.info[2]==='BSU'){
      this.icon[1]=true;
      email.disabled=false;
      this.domain ='@g.batstate-u.edu.ph';
    }else if(this.info[2]==='UB'){
      this.icon[1]=true;
      email.disabled=false;
      this.domain ='@ub.edu.ph';
    }else if(this.info[2]==='LPU'){
      this.icon[1]=true;
      email.disabled=false;
      this.domain ='@lpu.edu.ph';
    }else{
      this.icon[1]=false;
      email.disabled=true;
    }

  }
  position(data3: any) {
    let fPosition = this.registrationForm.value.position;
    this.info[3]= fPosition.toUpperCase();

   if(this.info[3] === 'Admin'){
    this.codecompany ='Company code for Admin';
   }else if(this.info[3] === 'Employee'){
    this.codecompany ='Company code for Employee';
   }

  }
  code(date5){
    let fCode = this.registrationForm.value.code;
    this.info[4]=fCode.toUpperCase();

        if(this.info[4]==='BSU-ADMIN' || this.info[4]==='BSU-EMPLOYEE' || this.info[4]==='UB-ADMIN' ||
        this.info[4]==='UB-EMPLOYEE' || this.info[4]==='LPU-ADMIN' || this.info[4]==='LPU-EMPLOYEE'){
          this.icon[2]=true;
        }else{
          this.icon[2]=false;
        }
      }
  email(event: any){
    let fEmail = this.registrationForm.value.email;
    this.info[5] = fEmail.toLowerCase();
    if(this.info[2]==='BSU'){
      this.domain ='@g.batstate-u.edu.ph';
      if (this.info[5].includes(this.domain) == true) {
        if (this.info[5].length < 25) {
          this.icon[3]=false;
        }
        else if (this.info[5].length >= 25) {
          this.icon[3]=true;
        }else{this.icon[3]=false;}
      }else if(this.info[5].includes(this.domain) == false) {
        this.icon[3]=false;
      }

    }else if(this.info[2]==='UB'){
      this.domain ='@ub.edu.ph';
      if (this.info[5].includes(this.domain) == true) {
        if (this.info[5].length < 15) {
          this.icon[3]=false;
        }
        else if (this.info[5].length >= 15) {
          this.icon[3]=true;
        }else{this.icon[3]=false;}
      }else if(this.info[5].includes(this.domain) == false) {
        this.icon[3]=false;
      }
    }else if(this.info[2]==='LPU'){
      this.domain ='@lpu.edu.ph';

      if (this.info[5].includes(this.domain) == true) {
        if (this.info[5].length < 16) {
          this.icon[3]=false;
        }
        else if (this.info[5].length >= 16) {
          this.icon[3]=true;
        }else{this.icon[3]=false;}
      }else if(this.info[5].includes(this.domain) == false) {
        this.icon[3]=false;
      }
    }else{
      this.icon[1]=false;
    }
  }
  password(event: any){
    let fPassword = this.registrationForm.value.password;
    this.info[6] = fPassword;
    if (this.info[6].length > 6){
      if(this.regex.test(this.info[6])==true ){
        this.icon[4]=true;
      }else if(this.regex.test(this.info[6])==false){
      }
    }else{
      this.icon[4]=false;
    }


  }

  register() {
    if (!this.info[1] || this.info[1]==''){
      this.error[1] = 'Name is required. You need to fill it out.';
    }else if(this.info[1].length < 5){
      this.error[1] = 'Name must have atleast minimum of 5 characters';
    }else if(this.info[1].length > 5){
      this.error[1] = 'Success';
    }

    if(this.info[2] == '' || !this.info[2]){
      this.error[2] = 'Company Name is required.';
    }else if(this.info[2] == 'BSU' || this.info[2] == 'UB' || this.info[2] == 'LPU' ){
      this.error[2] = 'Success';
    }else if(this.info[2] !== 'BSU' || this.info[2] !== 'UB' || this.info[2] !== 'LPU' ){
      this.error[2] = 'Company that you are trying to input is not yet registered.';
    }

    if(this.info[3]=='' || !this.info[3]){
      this.error[3]= 'Position is required to identify yourself in the company.';
    }else if(this.info[3]=='ADMIN' || this.info[3]=='EMPLOYEE'){
      this.error[3]= 'Success'  ;
    }

    if(this.info[4]=='' || !this.info[4]){
      this.error[4]= 'You may get your code to your Company Owner to register your position.';
    }else if (this.info[4].length < 5){
      this.error[4]= 'The code is below the average length';
    }else if(this.info[2] == 'BSU' && this.info[3] == 'ADMIN' && this.info[4] =='BSU-ADMIN'){
      this.error[4] = 'Success';
    }else if(this.info[2] == 'BSU' && this.info[3] == 'EMPLOYEE' && this.info[4] =='BSU-EMPLOYEE'){
      this.error[4] = 'Success';
    }else if(this.info[2] == 'UB' && this.info[3] == 'ADMIN' && this.info[4] =='UB-ADMIN'){
      this.error[4] = 'Success';
    }else if(this.info[2] == 'UB' && this.info[3] == 'EMPLOYEE' && this.info[4] =='UB-EMPLOYEE'){
      this.error[4] = 'Success';
    }else if(this.info[2] == 'LPU' && this.info[3] == 'ADMIN' && this.info[4] =='LPU-ADMIN'){
      this.error[4] = 'Success';
    }else if(this.info[2] == 'LPU' && this.info[3] == 'EMPLOYEE' && this.info[4] =='LPU-EMPLOYEE'){
      this.error[4] = 'Success';
    }
    else if(this.info[2] == 'BSU' && this.info[3] == 'ADMIN' || this.info[3] == 'EMPLOYEE'&& this.info[4] !=='BSU-ADMIN'
    || this.info[4] !=='BSU-EMPLOYEE'){
      this.error[4] = 'Company name, Position, and Code must be connected';
    }else if(this.info[2] == 'UB' && this.info[3] == 'ADMIN' || this.info[3] == 'EMPLOYEE'&& this.info[4] !=='UB-ADMIN'
    || this.info[4] !=='UB-EMPLOYEE'){
      this.error[4] = 'Company name, Position, and Code must be connected';
    }else if(this.info[2] == 'LPU' && this.info[3] == 'ADMIN' || this.info[3] == 'EMPLOYEE'&& this.info[4] !=='LPU-ADMIN'
    || this.info[4] !=='LPU-EMPLOYEE'){
      this.error[4] = 'Company name, Position, and Code must be connected';
    }else if(this.info[4] !=='' || this.info[4] !=='LPU-ADMIN' ||this.info[4] !=='LPU-EMPLOYEE' ||
    this.info[4] !=='UB-ADMIN' ||this.info[4] !=='UB-EMPLOYEE' || this.info[4] !=='BSU-ADMIN' ||this.info[4] !=='BSU-EMPLOYEE' ){
      this.error[4]= 'You code doesnt meet any other company code';
    }

    if(this.info[5]=='' || !this.info[5] ){
      this.error[5]= 'Email is required for you to Sign In later.';
    }else  if(this.info[5].includes(this.domain) == false ){
      this.error[5]= 'Email Domain must be kept still';
    }else if (this.info[2]== 'BSU' && this.info[5].length < 25){
      this.error[5]= 'Email together with domain must have more than 25 characters';
    }else if (this.info[2]== 'UB' && this.info[5].length < 15){
      this.error[5]= 'Email together with domain must have more than 15 characters';
    }else if (this.info[2]== 'LPU' && this.info[5].length < 16){
      this.error[5]= 'Email together with domain must have more than 16 characters';
    }else{
      this.error[5] = 'Success';
    }

    if(!this.info[6] || this.info[6]=='' ){
      this.error[6]= 'Password must not forget to fill it out.';
    }else if(this.info[6].length < 6){
      this.error[6]= 'Password must atleast 6 characters';
    }else if(this.regex.test(this.info[6])==true ){
      this.error[6] = 'Success';
    }else if(this.regex.test(this.info[6])==false ){
      this.error[6]= 'Password must contain 1 Uppercase, 1 LowerCase, 1 Number, 1 Symbol';
    }

    if(this.error[1] =='Success' && this.error[2] =='Success' && this.error[3] =='Success' && this.error[4] =='Success' &&
    this.error[5] =='Success' &&this.error[6] =='Success'  ){
      const formData = new FormData();

        for (let i = 1; i < 7; i++) {
          localStorage.setItem('dataAccount'+i, this.info[i]);
        }
        for (let i = 1; i < 7; i++) {
          this.dataAccounts[i] =localStorage.getItem('dataAccount'+i);
        }
        for (let i = 1; i < 7; i++) {
          formData.append('dataAccounts' + i, this.dataAccounts[i]);
        }
        fetch('http://localhost/EMOODY/src/app/BackendUser/accountRegistration.php', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(value => {
          console.log(value.data);
        });


    }else if(this.error[1] !=='Success' && this.error[2] !=='Success' && this.error[3] !=='Success' && this.error[4] !=='Success' &&
    this.error[5] !=='Success' && this.error[6] !=='Success'  ){
      alert(this.error[1] + '\n' + this.error[2] + '\n' + this.error[3] + '\n' +
      this.error[4] + '\n' + this.error[5] + '\n' + this.error[6] + '\n');
    }


  }
  cancel(){
    this.router.navigate(['home']);
  }
}
