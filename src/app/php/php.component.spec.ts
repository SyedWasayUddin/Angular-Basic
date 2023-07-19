import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHPComponent } from './php.component';

describe('PHPComponent', () => {
  let component: PHPComponent;
  let fixture: ComponentFixture<PHPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PHPComponent]
    });
    fixture = TestBed.createComponent(PHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
