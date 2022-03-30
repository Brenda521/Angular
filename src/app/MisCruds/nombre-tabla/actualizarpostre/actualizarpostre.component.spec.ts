import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarpostreComponent } from './actualizarpostre.component';

describe('ActualizarpostreComponent', () => {
  let component: ActualizarpostreComponent;
  let fixture: ComponentFixture<ActualizarpostreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarpostreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarpostreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
