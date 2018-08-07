import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  data: any;
  
  constructor(private route:Router) { 
    this.data = JSON.parse(localStorage.getItem("key"));
  }

  ngOnInit(){

  }

  onclick(){
    this.route.navigate([' ']);
  }
  
}
