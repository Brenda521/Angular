import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerecepcionistaComponent } from './homerecepcionista.component';

describe('HomerecepcionistaComponent', () => {
  let component: HomerecepcionistaComponent;
  let fixture: ComponentFixture<HomerecepcionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomerecepcionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
