import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {format,parseISO} from 'date-fns';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  modes = ['date','date-time','month','month-year','time','time-date','year'];
  selectedMode = 'date';
  showPicker = true;
  dateValue = format(new Date(),'yyyy-MM-dd') +'T10:00:00';
  formattedString='';
  dateTime;
  constructor(private router: Router) { this.setToday();}
  ngOnInit() {
  }
  begin(): void{
    const formData = new FormData();
    const id = localStorage.getItem('id');
    formData.append('id', id);
    formData.append('date', this.formattedString);
    fetch('http://localhost/newmobileapp/src/app/Backend/regData1.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(value => {
      console.log(value.data);
    });
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

  /*
  dateChanged(value){
    this.dateValue=value;
    this.formattedString = format(parseISO(value),'MMM d, yyyy');
  }
*/
}
