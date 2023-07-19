import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpCommentsComponent } from './php-comments.component';

describe('PhpCommentsComponent', () => {
  let component: PhpCommentsComponent;
  let fixture: ComponentFixture<PhpCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhpCommentsComponent]
    });
    fixture = TestBed.createComponent(PhpCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
