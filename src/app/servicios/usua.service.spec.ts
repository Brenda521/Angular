import { TestBed } from '@angular/core/testing';

import { UsuaService } from './usua.service';

describe('UsuaService', () => {
  let service: UsuaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
