import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesFormsComponent } from './resources-forms.component';

describe('ResourcesFormsComponent', () => {
  let component: ResourcesFormsComponent;
  let fixture: ComponentFixture<ResourcesFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesFormsComponent]
    });
    fixture = TestBed.createComponent(ResourcesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
