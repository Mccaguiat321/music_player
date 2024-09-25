import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappingComponent } from './rapping.component';

describe('RappingComponent', () => {
  let component: RappingComponent;
  let fixture: ComponentFixture<RappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
