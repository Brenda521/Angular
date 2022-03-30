import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarclienteComponent } from './actualizarcliente.component';

describe('ActualizarclienteComponent', () => {
  let component: ActualizarclienteComponent;
  let fixture: ComponentFixture<ActualizarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
