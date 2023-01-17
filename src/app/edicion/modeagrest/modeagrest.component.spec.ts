import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeagrestComponent } from './modeagrest.component';

describe('ModeagrestComponent', () => {
  let component: ModeagrestComponent;
  let fixture: ComponentFixture<ModeagrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeagrestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeagrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
