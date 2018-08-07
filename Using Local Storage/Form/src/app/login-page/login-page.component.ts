import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  title = 'form';
  loginForm: FormGroup;
  textBoxType = "password";
  passwrd: String;
  password_checker: String;
  password_confirm: String;
  // passwrd_length: Number;
  // hide_show = true;
  // asterik_array: any[] = [];
  // star: any;

  constructor(private route:Router) {

  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      first_name : new FormControl(null,[Validators.pattern('[a-zA-Z]+'),Validators.required]),
      last_name : new FormControl(null,[Validators.pattern('[a-zA-Z]+'),Validators.required]),
      email : new FormControl(null,[Validators.email,Validators.required]),
      contact_number : new FormControl(null,[Validators.pattern('[0-9]+'),Validators.required]),
      gender : new FormControl(null,Validators.required),
      employee_id : new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required),
      confirm_password : new FormControl(null,Validators.required)
    });

  }
  
  onSubmit(){
    console.log(this.loginForm);
    localStorage.setItem("key",JSON.stringify(this.loginForm.value));
    this.route.navigate(['/view']);
  }

  show(){
    this.textBoxType = "text";
  }

  hide(){
    this.textBoxType = "password";
  }

 

}

