import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Router } from '@angular/router';
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
  rescentData: any = [];
  rescentArray: any = [];

  constructor(private weatherService: WeatherService, public router: Router) {}
  ngOnInit(): void {
    // localStorage.clear()
  }
  changeFn(event: any) {
    this.weatherService.getCities(event).subscribe((res: any) => {
      this.data = res;
    });
    const d: any = localStorage.getItem('rescentData');
    console.log(JSON.parse(d));
  }

  onSave(e: any) {
    this.data.length = 0;
    this.text = '';
    console.log(e);
    this.weatherService.getWeather(e).subscribe({
      next: (res) => {
        this.weatherData = res;
        localStorage.setItem('weatherData', JSON.stringify(this.weatherData));
        if (this.weatherData) {
          if (localStorage.getItem('rescentData')) {
            this.rescentData = localStorage.getItem('rescentData');
            let data = JSON.parse(this.rescentData);
            this.rescentArray = [this.weatherData, ...data];
          } else {
            this.rescentArray = [this.weatherData];
          }
          localStorage.setItem(
            'rescentData',
            JSON.stringify(this.rescentArray)
          );
        }
        this.refresh();
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed'),
    });
  }
 

  refresh() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
