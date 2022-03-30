import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosFuertesComponent } from './platos-fuertes.component';

describe('PlatosFuertesComponent', () => {
  let component: PlatosFuertesComponent;
  let fixture: ComponentFixture<PlatosFuertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatosFuertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosFuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
