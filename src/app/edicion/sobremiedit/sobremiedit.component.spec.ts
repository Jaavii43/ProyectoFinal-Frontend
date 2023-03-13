import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremieditComponent } from './sobremiedit.component';

describe('SobremieditComponent', () => {
  let component: SobremieditComponent;
  let fixture: ComponentFixture<SobremieditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremieditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
