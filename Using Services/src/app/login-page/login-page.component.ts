import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValuesService } from '../values.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  title = 'form';
  loginForm: FormGroup;
  textBoxType = "password";
  passwrd: String;
  data: any;
  genders = ['male', 'female'];

  constructor(private route: Router, private my_first_service: ValuesService) {

    this.data = this.my_first_service.getData();
  }

  ngOnInit() {

    this.loginForm = new FormGroup({

      'firstname': new FormControl(this.my_first_service.firstname, [Validators.pattern('[a-zA-Z]+'), Validators.required]),
      'lastname': new FormControl(this.my_first_service.lastname, [Validators.pattern('[a-zA-Z]+'), Validators.required]),
      'email': new FormControl(this.my_first_service.email, [Validators.email, Validators.required]),
      'contactnumber': new FormControl(this.my_first_service.contactnumber, [Validators.pattern('[0-9]+'), Validators.required]),
      'gender': new FormControl('male', Validators.required),
      'employeeid': new FormControl(this.my_first_service.employeeid, Validators.required),
      'password': new FormControl(this.my_first_service.password, Validators.required),
      'confirmpassword': new FormControl(this.my_first_service.password, Validators.required)
    });
  }


  onSubmit() {
 
    this.my_first_service.setData(this.loginForm.value);
    this.route.navigate(['/view']);
  }

  show() {

    this.textBoxType = "text";
  }

  hide() {

    this.textBoxType = "password";
  }
}

