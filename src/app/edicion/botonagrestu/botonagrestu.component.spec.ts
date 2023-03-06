import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonagrestuComponent } from './botonagrestu.component';

describe('BotonagrestuComponent', () => {
  let component: BotonagrestuComponent;
  let fixture: ComponentFixture<BotonagrestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonagrestuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonagrestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
