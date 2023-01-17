import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecproeditComponent } from './secproedit.component';

describe('SecproeditComponent', () => {
  let component: SecproeditComponent;
  let fixture: ComponentFixture<SecproeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecproeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecproeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
