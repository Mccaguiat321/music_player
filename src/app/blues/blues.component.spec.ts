import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluesComponent } from './blues.component';

describe('BluesComponent', () => {
  let component: BluesComponent;
  let fixture: ComponentFixture<BluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BluesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
