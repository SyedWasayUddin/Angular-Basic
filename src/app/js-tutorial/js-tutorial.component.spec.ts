import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTutorialComponent } from './js-tutorial.component';

describe('JsTutorialComponent', () => {
  let component: JsTutorialComponent;
  let fixture: ComponentFixture<JsTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsTutorialComponent]
    });
    fixture = TestBed.createComponent(JsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
