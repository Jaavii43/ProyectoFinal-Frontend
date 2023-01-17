import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonlogoutComponent } from './bottonlogout.component';

describe('BottonlogoutComponent', () => {
  let component: BottonlogoutComponent;
  let fixture: ComponentFixture<BottonlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
