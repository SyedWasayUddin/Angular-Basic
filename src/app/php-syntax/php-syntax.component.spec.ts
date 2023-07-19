import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpSyntaxComponent } from './php-syntax.component';

describe('PhpSyntaxComponent', () => {
  let component: PhpSyntaxComponent;
  let fixture: ComponentFixture<PhpSyntaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhpSyntaxComponent]
    });
    fixture = TestBed.createComponent(PhpSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
