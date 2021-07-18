import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }
  getCountry():Observable<any>
  {
    const url="https://api.covid19api.com/countries";
    return this.http.get(url);
  }
  getData(Country:any):Observable<any>
  {
    const url="https://api.covid19api.com/dayone/country/"+Country;
    return this.http.get(url);
  }
}
