import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecajeroComponent } from './homecajero.component';

describe('HomecajeroComponent', () => {
  let component: HomecajeroComponent;
  let fixture: ComponentFixture<HomecajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
