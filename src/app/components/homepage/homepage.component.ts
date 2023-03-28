import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  data: any;
  img: any;
  ngOnInit(): void {
    let d: any = localStorage.getItem('weatherData');
    this.data = JSON.parse(d);
    console.log('weadata',this.data);
    
  }
  color: ThemePalette = 'accent';
  isCelsius: boolean = true;
  constructor() {}

  convertTemperature(): void {
    this.isCelsius = !this.isCelsius;

    // if (this.isCelsius) {
    //   this.convertedTemperature = (this.temperature * 9) / 5 + 32;
    // } else {
    //   this.convertedTemperature = ((this.temperature - 32) * 5) / 9;
    // }
  }
}
