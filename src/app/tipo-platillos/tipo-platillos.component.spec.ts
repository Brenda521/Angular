import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPlatillosComponent } from './tipo-platillos.component';

describe('TipoPlatillosComponent', () => {
  let component: TipoPlatillosComponent;
  let fixture: ComponentFixture<TipoPlatillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPlatillosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
