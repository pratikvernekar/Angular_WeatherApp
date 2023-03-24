import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdetailsComponent } from './weatherdetails.component';

describe('WeatherdetailsComponent', () => {
  let component: WeatherdetailsComponent;
  let fixture: ComponentFixture<WeatherdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
