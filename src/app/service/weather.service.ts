import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=germany&appid=76c425f83d3dd4a696721e5d4d4cc3fe'
    );
  }
}
