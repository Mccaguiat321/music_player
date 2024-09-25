import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMusicComponent } from './pop-music.component';

describe('PopMusicComponent', () => {
  let component: PopMusicComponent;
  let fixture: ComponentFixture<PopMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
