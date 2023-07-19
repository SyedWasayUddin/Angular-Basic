import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpTutorialComponent } from './php-tutorial.component';

describe('PhpTutorialComponent', () => {
  let component: PhpTutorialComponent;
  let fixture: ComponentFixture<PhpTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhpTutorialComponent]
    });
    fixture = TestBed.createComponent(PhpTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
