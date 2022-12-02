import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {format,parseISO} from 'date-fns';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  num1: any;
  answer: number;
  final: any;
  valNeed: any;
  selectedMode = 'date';
  showPicker = true;
  dateValue = format(new Date(),'yyyy-MM-dd') +'T10:00:00';
  formattedString='';
  dateTime;
  constructor(private router: Router) { this.setToday();}
  ngOnInit() {
  }
  begin(): void{
    localStorage.setItem('date', this.formattedString);
    this.router.navigate(['emoji']);
  }
  setToday(){
    this.formattedString = format(new Date(),'MMM d, yyyy');
  }
  socio(){
    this.router.navigate(['socio']);
  }
  health(){
    this.router.navigate(['health']);
  }
  menu(){
    this.router.navigate(['user']);
  }
  achievements(){
    const formData = new FormData();
    const id = localStorage.getItem('id');
    formData.append('id', id);
    fetch('http://localhost/newmobileapp/src/app/BackEndAchievements/firsttimer.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {

      if (value.data === 'Not Found!'){
        const num1 =document.getElementById('achievement1') as HTMLInputElement;
        num1.disabled=true;
      }else {
        const num1 =document.getElementById('achievement1') as HTMLInputElement;
        num1.disabled=false;
      }
    });
    fetch('http://localhost/newmobileapp/src/app/BackEndAchievements/ineedaid.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      if (value.data === 'Not Found!'){
        const num1 =document.getElementById('achievement2') as HTMLInputElement;
        num1.disabled=true;
      }else {
        const num1 =document.getElementById('achievement2') as HTMLInputElement;
        num1.disabled=false;
      }

    });
    fetch('http://localhost/newmobileapp/src/app/BackEndAchievements/healthyliving.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      if (value===''){
        const num1 =document.getElementById('achievement3') as HTMLInputElement;
        num1.disabled=true;
      }else if(value !==''){
        this.num1 = value.data[0].val;
        this.answer = (this.num1 / 30) * 100;
        this.final =this.answer.toFixed(0);
        console.log(this.final);

        if(this.final >= 60){
          const num1 =document.getElementById('achievement3') as HTMLInputElement;
          num1.disabled=false;
        }else {
          const num1 =document.getElementById('achievement3') as HTMLInputElement;
          num1.disabled=true;
          this.valNeed = 60 - this.final;
          console.log(this.valNeed + '% more to go to achieve Healthy Living!');
        }
      }
    });
    fetch('http://localhost/newmobileapp/src/app/BackEndAchievements/loyalty.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      this.num1 = value.data[0].val;
      if (this.num1=== ''){
        const num1 =document.getElementById('achievement4') as HTMLInputElement;
        num1.disabled=true;
      }
      else if(this.num1>= 60){
        const num1 =document.getElementById('achievement4') as HTMLInputElement;
        num1.disabled=false;
      }else{
        const num1 =document.getElementById('achievement4') as HTMLInputElement;
        num1.disabled=true;
        this.valNeed = 30 - this.num1;
        console.log(this.num1);
        console.log(this.valNeed + ' more to go to achieve Loyalty!');
      }
    });
    fetch('http://localhost/newmobileapp/src/app/BackEndAchievements/respondent.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      if (value.data === 'Not Found!'){
        const num1 =document.getElementById('achievement5') as HTMLInputElement;
        num1.disabled=true;
      }else {
        const num1 =document.getElementById('achievement5') as HTMLInputElement;
        num1.disabled=false;
      }
    });
    this.router.navigate(['achievements']);
  }
  aboutus(){
    this.router.navigate(['aboutus']);
  }
  /*
  dateChanged(value){
    this.dateValue=value;
    this.formattedString = format(parseISO(value),'MMM d, yyyy');
  }
*/
}
