import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAssignToUserComponent } from './menu-assign-to-user.component';

describe('MenuAssignToUserComponent', () => {
  let component: MenuAssignToUserComponent;
  let fixture: ComponentFixture<MenuAssignToUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAssignToUserComponent]
    });
    fixture = TestBed.createComponent(MenuAssignToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
