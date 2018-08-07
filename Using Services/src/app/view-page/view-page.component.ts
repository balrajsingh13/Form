import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValuesService } from '../values.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  data: any;
  
  constructor(private route: Router, private my_first_service: ValuesService) { 
    //this.data = JSON.parse(localStorage.getItem("key"));    
  }

  ngOnInit(){
    this.data = this.my_first_service.getData();
  }

  onclick(){
    
    this.route.navigate(['/']);
  }

  reset(){
    this.my_first_service.setData('');
    this.data = this.my_first_service.getData();
  }
  
}
