import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesDocumentsComponent } from './resources-documents.component';

describe('ResourcesDocumentsComponent', () => {
  let component: ResourcesDocumentsComponent;
  let fixture: ComponentFixture<ResourcesDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesDocumentsComponent]
    });
    fixture = TestBed.createComponent(ResourcesDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
