import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeditsobremiComponent } from './modeditsobremi.component';

describe('ModeditsobremiComponent', () => {
  let component: ModeditsobremiComponent;
  let fixture: ComponentFixture<ModeditsobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeditsobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeditsobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
