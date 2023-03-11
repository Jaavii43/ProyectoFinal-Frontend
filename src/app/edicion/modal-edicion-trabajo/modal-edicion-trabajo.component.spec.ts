import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdicionTrabajoComponent } from './modal-edicion-trabajo.component';

describe('ModalEdicionTrabajoComponent', () => {
  let component: ModalEdicionTrabajoComponent;
  let fixture: ComponentFixture<ModalEdicionTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEdicionTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEdicionTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
