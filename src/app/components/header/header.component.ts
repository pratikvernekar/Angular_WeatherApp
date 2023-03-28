import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  data: any;
  img: any;
  weatherData: any;
  text: string = '';

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    // this.weatherService.getWeather().subscribe({
    //   next: (res) => {
    //     this.weatherData = res;
    //     this.img =
    //       'https://openweathermap.org/img/wn/' +
    //       this.weatherData.weather[0].icon +
    //       '@2x.png';
    //     // localStorage.setItem('weatherData', JSON.stringify(e));
    //     // console.log(this.data);
    //   },
    //   error: (error) => console.log(error.message),
    //   complete: () => console.info('API call completed'),
    // });
  }
  changeFn(event: any) {
    // console.log(event);
    this.weatherService.getCities(event).subscribe((res: any) => {
      // console.log(res);
      this.data = res;
      console.log('hi',this.data);
    });
  }

  onSave(e: any) {
    // console.log(e);
    this.data.length = 0;
    this.text = '';
    this.weatherService.getWeather().subscribe({
      next: (res) => {
        this.weatherData = res;
        this.img =
          'https://openweathermap.org/img/wn/' +
          this.weatherData.weather[0].icon +
          '@2x.png';
        localStorage.setItem('weatherData', JSON.stringify(e));
        // console.log(this.data);
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed'),
    });
  }
  //     this.weatherDetails = JSON.parse(data);
}
