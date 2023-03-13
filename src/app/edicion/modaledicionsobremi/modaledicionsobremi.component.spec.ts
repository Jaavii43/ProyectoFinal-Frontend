import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaledicionsobremiComponent } from './modaledicionsobremi.component';

describe('ModaledicionsobremiComponent', () => {
  let component: ModaledicionsobremiComponent;
  let fixture: ComponentFixture<ModaledicionsobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaledicionsobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaledicionsobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
