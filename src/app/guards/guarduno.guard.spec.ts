import { TestBed } from '@angular/core/testing';

import { GuardunoGuard } from './guarduno.guard';

describe('GuardunoGuard', () => {
  let guard: GuardunoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardunoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
