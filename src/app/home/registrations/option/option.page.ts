import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup, FormControl } from '@angular/forms';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {

  constructor( private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
  }
  company(){
const  option = confirm('Do you want to proceed to Company Registration?');
    if(option){
      this.router.navigate(['company']);
    }else{
      this.router.navigate(['home']);
    }

  }
  users(){
const option1 = confirm('Do you want to proceed to Users Registration?');
    if(option1){
      this.router.navigate(['users']);
    }else{
      this.router.navigate(['home']);
    }

  }
}
