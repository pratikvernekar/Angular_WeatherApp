import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescentpageComponent } from './rescentpage.component';

describe('RescentpageComponent', () => {
  let component: RescentpageComponent;
  let fixture: ComponentFixture<RescentpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescentpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
