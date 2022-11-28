import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {format,parseISO} from 'date-fns';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  userTotal: any = localStorage.getItem('userTotal');
  userActive: any = localStorage.getItem('userActive');
  userInactive = this.userTotal - this.userActive;
formattedString='';
  constructor(private router: Router) { this.setToday();}
  setToday(){
    this.formattedString = format(new Date(),'MMM d, yyyy');
  }
  ngOnInit() {
  }
  emoji(){
    const formData = new FormData();
    const dateToday = this.formattedString;
    localStorage.setItem('dateToday',dateToday);
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/AttendanceBackend/Total.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      const userTotal = value.data[0].TOTAL;
      localStorage.setItem('userTotal',userTotal);
      console.log(userTotal);
    });
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/AttendanceBackend/Active.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      const userActive = value.data[0].TOTAL;
      localStorage.setItem('userActive',userActive);
      console.log(userActive);
    });

    this.router.navigate(['attendance-data']);
  }
  begin(): void{
    this.router.navigate(['admin1']);
  }
  socio(){
    const formData = new FormData();
    const dateToday = this.formattedString;
    localStorage.setItem('dateToday',dateToday);
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Monthly/socioData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      const userTotal = value.data[0].TOTAL;
      localStorage.setItem('userTotal',userTotal);
      console.log(userTotal);
    });


    this.router.navigate(['socio-data']);
  }
  health(){
    const formData = new FormData();
    const dateToday = this.formattedString;
    localStorage.setItem('dateToday',dateToday);
    const dateFinal = localStorage.getItem('dateToday');
    formData.append('dateToday', dateFinal);
    fetch('http://localhost/newmobileapp/src/app/BackendAdmin/Monthly/healthData.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      const userTotal = value.data[0].TOTAL;
      localStorage.setItem('userTotal',userTotal);
      console.log(userTotal);
    });
    this.router.navigate(['health-data']);
  }
}
