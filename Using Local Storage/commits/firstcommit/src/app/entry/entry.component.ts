
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'entry-root',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit{
  title = 'form';
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'first_name' : new FormControl(null,[Validators.required,Validators.pattern('[A-Z]*')]),
      'last_name' : new FormControl(null,[Validators.required,Validators.pattern('[A-Z]*')]),
      'email' : new FormControl(null,[Validators.required, Validators.email]),
      'contact_number' : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      'gender' : new FormControl(null,Validators.required),
      'employee_id' : new FormControl(null,[Validators.pattern('[0-9]*'),Validators.maxLength(4),Validators.minLength(4),Validators.required]),
      'password' : new FormControl(null,Validators.required),
      'confirm_password' : new FormControl(null,Validators.required)
    });

  }
  
  onSubmit(){
    console.log(this.signupForm);
  }
}
