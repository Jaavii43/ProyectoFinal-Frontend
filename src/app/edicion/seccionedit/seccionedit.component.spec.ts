import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioneditComponent } from './seccionedit.component';

describe('SeccioneditComponent', () => {
  let component: SeccioneditComponent;
  let fixture: ComponentFixture<SeccioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
