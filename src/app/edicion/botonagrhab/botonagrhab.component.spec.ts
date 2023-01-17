import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonagrhabComponent } from './botonagrhab.component';

describe('BotonagrhabComponent', () => {
  let component: BotonagrhabComponent;
  let fixture: ComponentFixture<BotonagrhabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonagrhabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonagrhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
