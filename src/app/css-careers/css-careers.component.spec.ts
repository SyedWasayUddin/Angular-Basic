import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCareersComponent } from './css-careers.component';

describe('CssCareersComponent', () => {
  let component: CssCareersComponent;
  let fixture: ComponentFixture<CssCareersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssCareersComponent]
    });
    fixture = TestBed.createComponent(CssCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
