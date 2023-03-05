import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosRentadosComponent } from './vehiculos-rentados.component';

describe('VehiculosRentadosComponent', () => {
  let component: VehiculosRentadosComponent;
  let fixture: ComponentFixture<VehiculosRentadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosRentadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosRentadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
