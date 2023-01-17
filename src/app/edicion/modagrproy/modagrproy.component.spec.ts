import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModagrproyComponent } from './modagrproy.component';

describe('ModagrproyComponent', () => {
  let component: ModagrproyComponent;
  let fixture: ComponentFixture<ModagrproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModagrproyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModagrproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
