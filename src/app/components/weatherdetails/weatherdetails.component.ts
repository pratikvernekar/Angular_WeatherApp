import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css'],
})
export class WeatherdetailsComponent implements OnInit {
  @Input() weatherdetails:any;
  ngOnInit(): void {
    // console.log(',', this.weatherdetails);
  }
}
