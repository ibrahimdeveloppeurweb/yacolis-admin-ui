import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderUploaderComponent } from './folder-uploader.component';

describe('FolderUploaderComponent', () => {
  let component: FolderUploaderComponent;
  let fixture: ComponentFixture<FolderUploaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderUploaderComponent]
    });
    fixture = TestBed.createComponent(FolderUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
