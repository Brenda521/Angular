import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscategoriasComponent } from './miscategorias.component';

describe('MiscategoriasComponent', () => {
  let component: MiscategoriasComponent;
  let fixture: ComponentFixture<MiscategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
