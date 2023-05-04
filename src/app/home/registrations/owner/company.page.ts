/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup, FormControl } from '@angular/forms';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  registrationForm: FormGroup;
  error: any =[];
  regex: any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/;
  icon: any = [];
  verifyEmail: any =[];
  infoC: any =[];
  domain: any =[];
  finalInfo: any =[];
  onSubmit: any;
  codecompany: any;
  dataCompany: any =[];
codeAdmin: any;
codeUser: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder){
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: ['', [Validators.required]],
      email: ['', [Validators.required]],
      admincode: ['', [Validators.required]],
      employeecode: ['', [Validators.required]],
      authenticator: ['', [Validators.required]]
    });


  }

    ngOnInit(){

    }
  name(){
    this.infoC[1]= this.registrationForm.value.name;
    if(this.infoC[1].length<5 || this.infoC[1].length > 30|| !this.infoC[1]|| this.infoC[1] ==''){
      this.icon[1]=false;
    }else{
      this.icon[1]=true;
    }
  }
    company(data2){
      this.infoC[2]= this.registrationForm.value.company.toLowerCase();

      if(this.infoC[2].length<2|| this.infoC[2].length > 15|| !this.infoC[2]|| this.infoC[2] ==''){
        this.icon[2]=false;
      }else {
        this.icon[2]=true;
      }
    }
    email(event: any){
      this.infoC[3] = this.registrationForm.value.email.toLowerCase();
      this.infoC[3].toLowerCase();
      if(this.infoC[3].length<10 || this.infoC[3].length > 30|| !this.infoC[3]|| this.infoC[3] ==''){
        this.icon[3]=false;
      }else{
        this.icon[3]=true;
      }
    }
    admin(data3: any) {
      this.infoC[4]= this.registrationForm.value.admincode.toLowerCase();
      this.infoC[4].toLowerCase();
      if(this.infoC[4].length<3 || this.infoC[4].length > 15|| !this.infoC[4]|| this.infoC[4] ==''){
        this.icon[4]=false;
      }else{
        this.icon[4]=true;
      }
  }
    employee(date5){
      this.infoC[5] = this.registrationForm.value.employeecode.toLowerCase();
      this.infoC[5].toLowerCase();
      if(this.infoC[5].length<3 || this.infoC[5].length > 15|| !this.infoC[5]|| this.infoC[5] ==''){
        this.icon[5]=false;
      }else{
        this.icon[5]=true;
      }
    }
    authentication(event: any){
      this.infoC[6]= this.registrationForm.value.authenticator;
      this.infoC[6].toLowerCase();
      if(this.infoC[6].length<5 || this.infoC[6].length > 10 || this.infoC[6] ==''){
        this.icon[6]=false;
      }else{
        this.icon[6]=true;
      }
    }
    register() {

    if(this.icon[1]==false|| !this.infoC[1]){
      this.error[1]='Name must have 5-30 characters';
    }else {
      this.error[1]='Success';
    }
    if(this.icon[2]==false|| !this.infoC[2]){
      this.error[2]='Company name must have 4-15 characters';
    }else {
      this.error[2]='Success';
    }
    if(this.icon[3]==false|| !this.infoC[3]){
      this.error[3]='Email must have 10-30 characters';
    }else {
      this.error[3]='Success';
    }
    if(this.icon[4]==false|| !this.infoC[4]){
      this.error[4]='Admin code must have 4-10 characters';
    }else {
      this.error[4]='Success';
    }
    if(this.icon[5]==false || !this.infoC[5]){
      this.error[5]='Employee code must have 4-10 characters';
    }else {
      this.error[5]='Success';
    }
    if(this.icon[6]==false|| !this.infoC[6]){
      this.error[6]='Authenticator code must have 6-10 characters';
    }else {
      this.error[6]='Success';
    }

    if(this.error[1] =='Success' && this.error[2] =='Success' && this.error[3] =='Success' && this.error[4] =='Success' &&
    this.error[5] =='Success' &&this.error[6] =='Success' && this.infoC[6]=='BSCS-3202'){
      const formData = new FormData();

      for (let i = 1; i < 7; i++) {
        localStorage.setItem('dataCompany'+i, this.infoC[i]);
      }
      for (let i = 1; i < 7; i++) {
        this.dataCompany[i] =localStorage.getItem('dataCompany'+i);
      }
      for (let i = 1; i < 7; i++) {
        formData.append('dataCompany' + i, this.dataCompany[i]);
      }
      fetch('http://localhost/EMOODY/src/app/BackendUser/companyRegistration.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(value => {

      });
      fetch('http://localhost/EMOODY/src/app/BackendUser/insertCompany.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(value => {


      });
      this.router.navigate(['home']);
    }else {
      alert(this.error[1] + '\n' + this.error[2] + '\n' + this.error[3] + '\n' +
        this.error[4] + '\n' + this.error[5] + '\n' + this.error[6] + '\n');
    }
    }
    cancel(){
      this.router.navigate(['home']);
    }
}
