import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  temperature: number = 0;
  isCelsius: boolean = true;
  convertedTemperature: number = 0;

  convertTemperature(): void {
    this.isCelsius = !this.isCelsius;
  
    
    if (this.isCelsius) {
      this.convertedTemperature = (this.temperature * 9) / 5 + 32;
    } else {
      this.convertedTemperature = ((this.temperature - 32) * 5) / 9;
    }
  }
}
