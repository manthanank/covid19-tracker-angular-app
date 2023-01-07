import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface countryData{
    Country: string;
    Confirmed: number
    Recovered: number
    Deaths: number
    Active: number
}

interface countries{
  Country: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.covid19api.com/countries'

  constructor(private http: HttpClient) { }

  getCountries():Observable<countries[]>{
    return this.http.get<countries[]>(this.url);
  }

  getCountryData(country: string):Observable<countryData[]> {
    return this.http.get<countryData[]>(`https://api.covid19api.com/dayone/country/${country}`, {});
  }
}
