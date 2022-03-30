import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosgComponent } from './platillosg.component';

describe('PlatillosgComponent', () => {
  let component: PlatillosgComponent;
  let fixture: ComponentFixture<PlatillosgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatillosgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
