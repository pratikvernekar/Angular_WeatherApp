import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  data: any;
  text: string = '';
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {}
  changeFn(e: any) {
    console.log(e);
    this.weatherService.getCities(e).subscribe({
      next: (res: any) => {
        this.data = res;
      },
      error: () => console.log('error in getting cities'),
      complete: () => console.info('API call completed'),
    });
  }
  onSave(e: any) {
    console.log(e);
    this.data.length = 0;
    this.text=''
  }
}
