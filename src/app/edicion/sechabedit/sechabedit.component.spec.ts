import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SechabeditComponent } from './sechabedit.component';

describe('SechabeditComponent', () => {
  let component: SechabeditComponent;
  let fixture: ComponentFixture<SechabeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SechabeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SechabeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
