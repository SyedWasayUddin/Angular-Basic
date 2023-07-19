import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesTestYourselfComponent } from './resources-test-yourself.component';

describe('ResourcesTestYourselfComponent', () => {
  let component: ResourcesTestYourselfComponent;
  let fixture: ComponentFixture<ResourcesTestYourselfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesTestYourselfComponent]
    });
    fixture = TestBed.createComponent(ResourcesTestYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
