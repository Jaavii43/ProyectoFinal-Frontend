import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonagregarproyComponent } from './botonagregarproy.component';

describe('BotonagregarproyComponent', () => {
  let component: BotonagregarproyComponent;
  let fixture: ComponentFixture<BotonagregarproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonagregarproyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonagregarproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
