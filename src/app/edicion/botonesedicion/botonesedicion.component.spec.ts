import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesedicionComponent } from './botonesedicion.component';

describe('BotonesedicionComponent', () => {
  let component: BotonesedicionComponent;
  let fixture: ComponentFixture<BotonesedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesedicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
