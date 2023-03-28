import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=udupi&appid=76c425f83d3dd4a696721e5d4d4cc3fe`
    );
  }

  getCities(string: string) {

    return this.http.get(
      `https://weatherapi-com.p.rapidapi.com/search.json?q=${string}`,
      {
        headers: {
          'X-RapidAPI-Key':
            '2e61d5ed65msh6e1fd3b3e86180ap10576cjsn6e517a01ff1e',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      }
    );
  }
}
