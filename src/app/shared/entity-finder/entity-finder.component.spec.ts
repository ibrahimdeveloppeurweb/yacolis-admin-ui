import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityFinderComponent } from './entity-finder.component';

describe('EntityFinderComponent', () => {
  let component: EntityFinderComponent;
  let fixture: ComponentFixture<EntityFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityFinderComponent]
    });
    fixture = TestBed.createComponent(EntityFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
