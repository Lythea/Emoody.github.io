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
    this.router.navigate(['survey1']);
  }
  achieve(): void{
    this.router.navigate(['badges']);
  }
  setToday(){
    this.formattedString = format(new Date(),'MMM d, yyyy');
  }
  dateChanged(value){
    this.dateValue=value;
    this.formattedString = format(parseISO(value),'MMM d, yyyy');
  }

}
