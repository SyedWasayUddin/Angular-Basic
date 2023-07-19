import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBasicsComponent } from './css-basics.component';

describe('CssBasicsComponent', () => {
  let component: CssBasicsComponent;
  let fixture: ComponentFixture<CssBasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssBasicsComponent]
    });
    fixture = TestBed.createComponent(CssBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
