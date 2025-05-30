import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationModalComponent } from './animation-modal.component';

describe('AnimationModalComponent', () => {
  let component: AnimationModalComponent;
  let fixture: ComponentFixture<AnimationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationModalComponent]
    });
    fixture = TestBed.createComponent(AnimationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
