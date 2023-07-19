import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesTutorialsComponent } from './resources-tutorials.component';

describe('ResourcesTutorialsComponent', () => {
  let component: ResourcesTutorialsComponent;
  let fixture: ComponentFixture<ResourcesTutorialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesTutorialsComponent]
    });
    fixture = TestBed.createComponent(ResourcesTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
