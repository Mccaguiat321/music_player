import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaveMetalComponent } from './heave-metal.component';

describe('HeaveMetalComponent', () => {
  let component: HeaveMetalComponent;
  let fixture: ComponentFixture<HeaveMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaveMetalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaveMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
