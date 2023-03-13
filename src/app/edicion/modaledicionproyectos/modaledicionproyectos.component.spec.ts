import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaledicionproyectosComponent } from './modaledicionproyectos.component';

describe('ModaledicionproyectosComponent', () => {
  let component: ModaledicionproyectosComponent;
  let fixture: ComponentFixture<ModaledicionproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaledicionproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaledicionproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
