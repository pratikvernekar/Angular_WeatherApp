import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favouritepage',
  templateUrl: './favouritepage.component.html',
  styleUrls: ['./favouritepage.component.css'],
})
export class FavouritepageComponent implements OnInit {
  favList: any;
  ngOnInit(): void {
    let rescent: any = localStorage.getItem('favData');
    this.favList = JSON.parse(rescent);
  }
  deleteFav() {
    localStorage.removeItem('favData');
    this.refresh();
  }
  refresh() {
    window.location.reload();
  }
}
