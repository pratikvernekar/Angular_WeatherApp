import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rescentpage',
  templateUrl: './rescentpage.component.html',
  styleUrls: ['./rescentpage.component.css'],
})
export class RescentpageComponent implements OnInit {
  rescentList: any;
  img: any;
  ngOnInit(): void {
    let rescent: any = localStorage.getItem('rescentData');
    this.rescentList = JSON.parse(rescent);
    this.img =
      'https://openweathermap.org/img/wn/' +
      this.rescentList.weather[0].icon +
      '@2x.png';
  }
}
