import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: any;
  country: any;
  confirmedCases: any
  recoveredCases: any
  deathCases: any
  activeCases: any

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCountries().subscribe(data => {
      console.log(data);
      this.countries = data;
    });
  }

  getCountry(e:any){
    this.api.getCountryData(e.target.value).subscribe(data => {
      this.country = data;
      console.log(this.country);
      this.activeCases = data.Active;
      console.log(this.activeCases);
      this.confirmedCases = data.Confirmed;
      console.log(this.confirmedCases);
      this.recoveredCases = data.Recovered;
      console.log(this.recoveredCases);
      this.deathCases = data.Deaths;
      console.log(this.deathCases);
    })
  }
}
