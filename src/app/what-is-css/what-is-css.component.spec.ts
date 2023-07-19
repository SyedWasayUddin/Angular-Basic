import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsCSSComponent } from './what-is-css.component';

describe('WhatIsCSSComponent', () => {
  let component: WhatIsCSSComponent;
  let fixture: ComponentFixture<WhatIsCSSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIsCSSComponent]
    });
    fixture = TestBed.createComponent(WhatIsCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
