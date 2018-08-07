import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor() { }

  formdata;

  firstname;
  lastname;
  email;
  contactnumber;
  gender;
  employeeid;
  password;

  setData(data){
    
    this.formdata=data;

    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.contactnumber = data.contactnumber;
    this.gender = data.gender;
    this.employeeid = data.employeeid;
    this.password = data.password;
    
  }

  getData(){

    return this.formdata;
  }
}
