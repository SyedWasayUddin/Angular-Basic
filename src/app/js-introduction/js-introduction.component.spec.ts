import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIntroductionComponent } from './js-introduction.component';

describe('JsIntroductionComponent', () => {
  let component: JsIntroductionComponent;
  let fixture: ComponentFixture<JsIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsIntroductionComponent]
    });
    fixture = TestBed.createComponent(JsIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
