import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: any;

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
    this.createChart();
  }

  getCountry(e:any){
    this.api.getCountryData(e.target.value).subscribe(data => {
      this.activeCases = data[0].Active;
      console.log(this.activeCases);
      this.confirmedCases = data[0].Confirmed;
      console.log(this.confirmedCases);
      this.recoveredCases = data[0].Recovered;
      console.log(this.recoveredCases);
      this.deathCases = data[0].Deaths;
      console.log(this.deathCases);
    })
  }

  public chart: any;

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.countries, 
	       datasets: [
          {
            label: "Countries",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
