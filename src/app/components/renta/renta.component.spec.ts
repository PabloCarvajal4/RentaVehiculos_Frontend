import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaComponent } from './renta.component';

describe('RentaComponent', () => {
  let component: RentaComponent;
  let fixture: ComponentFixture<RentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
