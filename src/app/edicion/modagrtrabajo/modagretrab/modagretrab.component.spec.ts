import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModagretrabComponent } from './modagretrab.component';

describe('ModagretrabComponent', () => {
  let component: ModagretrabComponent;
  let fixture: ComponentFixture<ModagretrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModagretrabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModagretrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
