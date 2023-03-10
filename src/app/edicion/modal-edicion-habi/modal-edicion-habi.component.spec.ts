import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdicionHabiComponent } from './modal-edicion-habi.component';

describe('ModalEdicionHabiComponent', () => {
  let component: ModalEdicionHabiComponent;
  let fixture: ComponentFixture<ModalEdicionHabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEdicionHabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEdicionHabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
