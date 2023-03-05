import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TegucigalpaComponent } from './tegucigalpa.component';

describe('TegucigalpaComponent', () => {
  let component: TegucigalpaComponent;
  let fixture: ComponentFixture<TegucigalpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TegucigalpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TegucigalpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
