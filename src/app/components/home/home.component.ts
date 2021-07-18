import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/service/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: any = [];
  country: any
  confirmed: any
  recovered: any
  death: any
  active: any
  constructor(private service: CovidService) {

  }
  ngOnInit() {
    this.service.getCountry().subscribe(data => {
      //console.log(data);
      this.countries = data;
    })
  }
  getCountry(c: any) {
    //console.log(c);
    this.country = c
  }
  getDetails() {
    this.service.getData(this.country).subscribe(data => {
      //console.log(data);
      var index = data.length - 1;
      this.confirmed = data[index].Confirmed;
      this.recovered = data[index].Recovered;
      this.death = data[index].Deaths;
      this.active = data[index].Active;
    })
  }
}
