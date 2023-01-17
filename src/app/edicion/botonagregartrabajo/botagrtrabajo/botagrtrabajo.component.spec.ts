import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotagrtrabajoComponent } from './botagrtrabajo.component';

describe('BotagrtrabajoComponent', () => {
  let component: BotagrtrabajoComponent;
  let fixture: ComponentFixture<BotagrtrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotagrtrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotagrtrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
