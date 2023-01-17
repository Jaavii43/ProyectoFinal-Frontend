import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModagrhabComponent } from './modagrhab.component';

describe('ModagrhabComponent', () => {
  let component: ModagrhabComponent;
  let fixture: ComponentFixture<ModagrhabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModagrhabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModagrhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
