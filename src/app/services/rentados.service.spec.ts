import { TestBed } from '@angular/core/testing';

import { RentadosService } from './rentados.service';

describe('RentadosService', () => {
  let service: RentadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
