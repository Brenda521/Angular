import { TestBed } from '@angular/core/testing';

import { PlatilloserService } from './platilloser.service';

describe('PlatilloserService', () => {
  let service: PlatilloserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatilloserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
