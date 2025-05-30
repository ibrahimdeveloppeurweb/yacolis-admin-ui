import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestPasswordComponent } from './user-rest-password.component';

describe('UserRestPasswordComponent', () => {
  let component: UserRestPasswordComponent;
  let fixture: ComponentFixture<UserRestPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRestPasswordComponent]
    });
    fixture = TestBed.createComponent(UserRestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
