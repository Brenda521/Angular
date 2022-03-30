import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarreservacionesComponent } from './actualizarreservaciones.component';

describe('ActualizarreservacionesComponent', () => {
  let component: ActualizarreservacionesComponent;
  let fixture: ComponentFixture<ActualizarreservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarreservacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarreservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
