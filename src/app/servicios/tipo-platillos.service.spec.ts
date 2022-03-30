import { TestBed } from '@angular/core/testing';

import { TipoPlatillosService } from './tipo-platillos.service';

describe('TipoPlatillosService', () => {
  let service: TipoPlatillosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPlatillosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
