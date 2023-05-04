/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import {format,parseISO} from 'date-fns';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { fromEvent, pipe, Observable } from 'rxjs';
import { delay, takeUntil, tap } from 'rxjs/operators';
import moment from 'moment';
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
  date: any;
  dateValue;
  holdTimer: any;
formattedDate: any;
finalDate: any = [];

  constructor(private router: Router) { this.setToday();}
  ngOnInit() {
  }
  setToday(){
    const date1: any = new Date();
    this.dateValue = moment(date1).format('MMMM D, YYYY');
    localStorage.setItem('finaldate', this.dateValue);
  }
  onTouchStart1() {
    const hold1 =(document.getElementById('hold1') as HTMLInputElement);
    hold1.addEventListener('touchstart', ontouchstart, { passive: true });
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const company = localStorage.getItem('company');
    formData.append('company', company);
    formData.append('id', id);
    for (let i = 1; i < 3; i++) {
      this.finalDate[i] =localStorage.getItem('newDate'+i);
    }
    for (let i = 1; i < 3; i++) {
      formData.append('date' + i, this.finalDate[i]);
    }
      this.holdTimer = setTimeout(() => {
        const result = confirm("Reset previous answers?");
        if (result) {
          fetch('http://localhost/EMOODY/src/app/BackEnd/resettingSocioEconomic.php', {
                      method: 'POST',
                      body: formData
                      })
                      .then(response => response.json())
                      .then(value => {
                        if (value.data === 'Deleted Successfully!'){
                          console.log(value.data);
                          alert('Deleted Successfully! You can now answer the Socio Survey again.');
                        }else if (value.data !== 'Deleted Successfully!'){
                          alert('Try Again Later');
                        }else {
                        console.log('Error');
                        }
                      });
        }else{}
        // Perform hold function here
      }, 1000); // Set hold time in milliseconds
    }

    onTouchEnd1() {
      clearTimeout(this.holdTimer);
    }
  onTouchStart2() {
    const hold2 =(document.getElementById('hold2') as HTMLInputElement);
    hold2.addEventListener('touchstart', ontouchstart, { passive: true });
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const date = localStorage.getItem('date');
    const company = localStorage.getItem('company');
    formData.append('company', company);
    formData.append('id', id);
    formData.append('date', date);
      this.holdTimer = setTimeout(() => {
        const result = confirm("Reset previous answers?");
        if (result) {
          fetch('http://localhost/EMOODY/src/app/BackEnd/resettingMoodtrack.php', {
                      method: 'POST',
                      body: formData
                      })
                      .then(response => response.json())
                      .then(value => {
                        console.log(value.data);
                        if (value.data === 'Deleted Successfully!'){
                        }else if (value.data !== 'Deleted Successfully!'){
                          alert('Try Again Later');
                        }
                      });
          fetch('http://localhost/EMOODY/src/app/BackEnd/resettingDailysurvey1.php', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(value => {
              if (value.data === 'Deleted Successfully!'){

              }else if (value.data !== 'Deleted Successfully!'){
                alert('Try Again Later');
              }
            });
          fetch('http://localhost/EMOODY/src/app/BackEnd/resettingDailysurvey2.php', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(value => {
              if (value.data === 'Deleted Successfully!'){
              }else if (value.data !== 'Deleted Successfully!'){
                alert('Try Again Later');
              }
            });
            alert('Deleted Successfully! You can now answer the Daily Survey again.');
        }else{}
        // Perform hold function here
      }, 1000); // Set hold time in milliseconds
    }

    onTouchEnd2() {
      clearTimeout(this.holdTimer);
    }
    onTouchStart3() {
    const hold3 =(document.getElementById('hold3') as HTMLInputElement);
    hold3.addEventListener('touchstart', ontouchstart, { passive: true });
      const formData = new FormData();
      const company = localStorage.getItem('company');
      formData.append('company', company);
      const id = localStorage.getItem('id');
      formData.append('id', id);
      for (let i = 1; i < 3; i++) {
        this.finalDate[i] =localStorage.getItem('newDate'+i);
      }
      for (let i = 1; i < 3; i++) {
        formData.append('date' + i, this.finalDate[i]);
      }
        this.holdTimer = setTimeout(() => {
          const result = confirm("Reset previous answers?");
          if (result) {
            fetch('http://localhost/EMOODY/src/app/BackEnd/resettingHealthIndex.php', {
                        method: 'POST',
                        body: formData
                        })
                        .then(response => response.json())
                        .then(value => {
                          if (value.data === 'Deleted Successfully!'){
                            console.log(value.data);
                            alert('Deleted Successfully! You can now answer the Health Survey again.');
                          }else if (value.data !== 'Deleted Successfully!'){
                            alert('Try Again Later');
                          }else {
                          console.log('Error');
                          }
                        });
          }else{}
          // Perform hold function here
        }, 1000); // Set hold time in milliseconds
      }

      onTouchEnd3() {
        clearTimeout(this.holdTimer);
      }
  begin(): void{
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const date = localStorage.getItem('date');
    const company = localStorage.getItem('company');
    formData.append('company', company);
    formData.append('id', id);
    formData.append('date', date);
    fetch('http://localhost/EMOODY/src/app/BackEnd/moodTrack.php', {
      method: 'POST',
      body: formData
      })
      .then(response => response.json())
      .then(value1 => {
        if (value1.data === 'Not Found!'){
          this.router.navigate(['emoji']);
        }else if (value1.data !==''){
          const option = confirm('Do you want to verify your Daily survey?');
          if (option){
              fetch('http://localhost/EMOODY/src/app/BackEnd/survey1Track.php', {
              method: 'POST',
              body: formData
              })
              .then(response => response.json())
              .then(value3 => {
                if (value3.data === 'Not Found!'){
                    this.router.navigate(['survey1']);
                }else if (value3.data !==''){
                  fetch('http://localhost/EMOODY/src/app/BackEnd/survey2Track.php', {
                    method: 'POST',
                    body: formData
                    })
                    .then(response => response.json())
                    .then(value4 => {
                      if (value4.data === 'Not Found!'){
                        this.router.navigate(['survey2']);
                      }else if (value4.data !==''){
                        alert('You have already finished daily survey');
                      }else {
                      console.log('Error');
                      }
                    });
                }else {
                  console.log('Error');
                }});
          }else{

          };
        }else {
          console.log('Error');
        }});
  }
  socio(){
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const company = localStorage.getItem('company');
    formData.append('company', company);
    formData.append('id', id);
    for (let i = 1; i < 4; i++) {
      this.finalDate[i] =localStorage.getItem('newDate'+i);
    }
    for (let i = 1; i < 4; i++) {
      formData.append('date' + i, this.finalDate[i]);
    }
  fetch('http://localhost/EMOODY/src/app/BackEnd/dateSocio.php', {
                      method: 'POST',
                      body: formData
                      })
                      .then(response => response.json())
                      .then(value => {
                        if (value.data === 'Not Found!'){
                          this.router.navigate(['socio']);
                        }else{
                          const year = value.data[0].Year;
                          const month = value.data[0].Month;
                          const day = value.data[0].Day;
                          if (year == this.finalDate[1] || year < this.finalDate[1]){
                            if(month < this.finalDate[2]){
                              this.router.navigate(['socio']);
                            }else if (month == this.finalDate[2]){
                              alert("You already answered the Socio Survey");
                            }
                        }else {
                          console.log('Error');
                        }
                        }
                        });

  }
  health(){
    const formData = new FormData();
    const id = localStorage.getItem('id');
    const company = localStorage.getItem('company');
    formData.append('company', company);
    formData.append('id', id);
    for (let i = 1; i < 3; i++) {
      this.finalDate[i] =localStorage.getItem('newDate'+i);
    }
    for (let i = 1; i < 3; i++) {
      formData.append('date' + i, this.finalDate[i]);
    }
    fetch('http://localhost/EMOODY/src/app/BackEnd/dateHealth.php', {
                    method: 'POST',
                    body: formData
                    })
                    .then(response => response.json())
                    .then(value => {
                      if (value.data === 'Not Found!'){
                        this.router.navigate(['health']);
                        alert("Before you begin the survey, please understand the following: \n - Your participation in this survey is voluntary. In the course of completing this survey, you may refuse to answer specific questions. You may also choose to end the survey at any time. \n- There are no right or wrong answers, we only want to hear about your experiences and opinions.  \n- All of the answers you provide will be maintained in a secure manner. We will not disclose your responses or anything about you. Your name will not be linked to any responses you provide in this survey.  \n - Your responses will be combined with those from other employees to provide an overall average for feedback about the organization. The results will be used to guide decisions about policies and programs related to employee health, safety, and wellness. \n- There are no risks or rewards anticipated for completing the survey. However, it is possible that programs developed in the future may benefit you and your coworkers \n");
                      }else{
                        const year = value.data[0].Year;
                        const month = value.data[0].Month;
                        const day = value.data[0].Day;
                        if (year == this.finalDate[1] || year < this.finalDate[1]){
                          if(month < this.finalDate[2]){
                            this.router.navigate(['health']);
                            alert("Before you begin the survey, please understand the following: \n - Your participation in this survey is voluntary. In the course of completing this survey, you may refuse to answer specific questions. You may also choose to end the survey at any time. \n- There are no right or wrong answers, we only want to hear about your experiences and opinions.  \n- All of the answers you provide will be maintained in a secure manner. We will not disclose your responses or anything about you. Your name will not be linked to any responses you provide in this survey.  \n - Your responses will be combined with those from other employees to provide an overall average for feedback about the organization. The results will be used to guide decisions about policies and programs related to employee health, safety, and wellness. \n- There are no risks or rewards anticipated for completing the survey. However, it is possible that programs developed in the future may benefit you and your coworkers \n");
                          }else if (month == this.finalDate[2]){
                            alert("You already answered the Health Survey");
                          }
                      }else {
                        console.log('Error');
                      }
                      }
                    });

  }
  menu(){
    const formData = new FormData();
    const company = localStorage.getItem('company');
    formData.append('company', company);
    const id = localStorage.getItem('id');
    formData.append('id', id);
    fetch('http://localhost/EMOODY/src/app/BackEndAchievements/firsttimer.php', {
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

    this.router.navigate(['user']);
    });
  }
  achievements(){
    const formData = new FormData();
    const company = localStorage.getItem('company');
    formData.append('company', company);
    const id = localStorage.getItem('id');
    formData.append('id', id);
    fetch('http://localhost/EMOODY/src/app/BackEndAchievements/firsttimer.php', {
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
    fetch('http://localhost/EMOODY/src/app/BackEndAchievements/ineedaid.php', {
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
    fetch('http://localhost/EMOODY/src/app/BackEndAchievements/healthyliving.php', {
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
    fetch('http://localhost/EMOODY/src/app/BackEndAchievements/loyalty.php', {
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
      else if(this.num1>= 30){
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
    fetch('http://localhost/EMOODY/src/app/BackEndAchievements/respondent.php', {
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
