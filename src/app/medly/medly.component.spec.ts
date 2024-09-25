import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedlyComponent } from './medly.component';

describe('MedlyComponent', () => {
  let component: MedlyComponent;
  let fixture: ComponentFixture<MedlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
