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
  favData: any;
  FavList: any;
  text: string = 'Add to favourite';
  ngOnInit(): void {
    // let fav = localStorage.getItem('favData');
    this;
    let d: any = localStorage.getItem('weatherData');
    this.data = JSON.parse(d);
    this.img =
      'https://openweathermap.org/img/wn/' +
      this.data.weather[0].icon +
      '@2x.png';

    if (localStorage.getItem('favData')) {
      this.favData = localStorage.getItem('favData');
      let data = JSON.parse(this.favData);
      this.FavList = [...data];
    } else {
      this.FavList = [this.data];
    }
    localStorage.setItem('favData', JSON.stringify(this.FavList));
  }

  color: ThemePalette = 'accent';
  isCelsius: boolean = true;
  constructor() {}

  AddToFav(e: string) {
    this.text = 'Added to favourite';
    this.favData = localStorage.getItem('favData');
    let data = JSON.parse(this.favData);
    this.FavList = [e, ...data];
    localStorage.setItem('favData', JSON.stringify(this.FavList));
    // this.refresh();
  }
  removeFav(e: any) {
    this.text = 'Add to favourite';
    // this.refresh();
  }

  convertTemperature(): void {
    this.isCelsius = !this.isCelsius;
  }
  refresh() {
    window.location.reload();
  }
}
