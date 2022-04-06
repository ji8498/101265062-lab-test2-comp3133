import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '101221938-lab-test2-comp3133';
  li:any;
  lis=[];
  constructor(private http : HttpClient){

  } 
  ngOnInit(): void {
    this.http.get('https://api.spacexdata.com/v3/launches')
    .subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
      if(Response){ 
      }
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    });
   
  }
}
