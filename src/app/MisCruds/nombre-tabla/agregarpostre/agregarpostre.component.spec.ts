import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpostreComponent } from './agregarpostre.component';

describe('AgregarpostreComponent', () => {
  let component: AgregarpostreComponent;
  let fixture: ComponentFixture<AgregarpostreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarpostreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarpostreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
