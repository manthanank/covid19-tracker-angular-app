import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid19 Tracker Showing in Geo Chart';
   type = 'GeoChart';
   data = [
      ['India', 40],
      ['USA', 26],
      ['China', 12],
      ['Germany', 8],
      ['Italy', 6],
      ['Africa', 7] 
   ];
   options = {
   };
   width = 550;
   height = 400;
  constructor(){

  }
  ngOnInit()
  {
    
  }
}
