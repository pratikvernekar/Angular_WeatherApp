import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subscriber } from 'rxjs';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  data: any;
  img: any;
  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (res) => {
        this.data = res;
        this.img =
          'https://openweathermap.org/img/wn/' +
          this.data.weather[0].icon +
          '@2x.png';
        console.log(this.data);
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed'),
    });
  }
  color: ThemePalette = 'accent';
  isCelsius: boolean = true;
  constructor(private weatherService: WeatherService) {}

  convertTemperature(): void {
    this.isCelsius = !this.isCelsius;

    // if (this.isCelsius) {
    //   this.convertedTemperature = (this.temperature * 9) / 5 + 32;
    // } else {
    //   this.convertedTemperature = ((this.temperature - 32) * 5) / 9;
    // }
  }
}
