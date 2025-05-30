import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderUploadComponent } from './folder-upload.component';

describe('FolderUploadComponent', () => {
  let component: FolderUploadComponent;
  let fixture: ComponentFixture<FolderUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderUploadComponent]
    });
    fixture = TestBed.createComponent(FolderUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
