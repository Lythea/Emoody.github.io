import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {catchError} from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  login: any = FormGroup;
  data = [];
user: any;
pass: any;
email: any;
password: any;
  constructor(private router: Router,private http: HttpClient, private fb: FormBuilder) {
  }
  ngOnInit(): void{
    this.login = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    });
  }
  /*
  submit(data: any): void{
  this.http.post<any>('http://localhost/newmobileapp/src/app/Backend/getAcc.php',data)
  .pipe(catchError(error=>of(`Data: ${error}`))).subscribe(
    value =>{ if (data !==''){
      this.data.email = this.email;
      this.data.password = this.pass;
    }else {
      console.log('No Data');
    }}
  );
  }
  */
  try(data: any): void{
    const formData = new FormData();
    formData.append('key1',data.email);
    formData.append('key2',data.password);
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST','http://localhost/newmobileapp/src/app/Backend/getAcc.php',true);
    xhttp.onreadystatechange = function(){
      if (xhttp.readyState ===4 && xhttp.status ===200){
        const returnData = xhttp.responseText;
        console.log(returnData);
      }else if(this.readyState=== 0 && this.status ===404){
        console.log('error');
      }};
      xhttp.send(formData);
  }
  recData(){
    const var1 = '<? = json_encode($data)>?';
    console.log(var1);
  }
}
