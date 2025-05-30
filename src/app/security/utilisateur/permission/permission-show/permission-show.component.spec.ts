import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionShowComponent } from './permission-show.component';

describe('PermissionShowComponent', () => {
  let component: PermissionShowComponent;
  let fixture: ComponentFixture<PermissionShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionShowComponent]
    });
    fixture = TestBed.createComponent(PermissionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
