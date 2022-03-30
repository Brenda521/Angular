import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarplatillosComponent } from './actualizarplatillos.component';

describe('ActualizarplatillosComponent', () => {
  let component: ActualizarplatillosComponent;
  let fixture: ComponentFixture<ActualizarplatillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarplatillosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarplatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
