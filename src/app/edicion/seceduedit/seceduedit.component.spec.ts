import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecedueditComponent } from './seceduedit.component';

describe('SecedueditComponent', () => {
  let component: SecedueditComponent;
  let fixture: ComponentFixture<SecedueditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecedueditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecedueditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
