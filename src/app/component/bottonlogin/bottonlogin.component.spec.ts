import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonloginComponent } from './bottonlogin.component';

describe('BottonloginComponent', () => {
  let component: BottonloginComponent;
  let fixture: ComponentFixture<BottonloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
