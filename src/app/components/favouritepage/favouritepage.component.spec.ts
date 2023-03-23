import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritepageComponent } from './favouritepage.component';

describe('FavouritepageComponent', () => {
  let component: FavouritepageComponent;
  let fixture: ComponentFixture<FavouritepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
