import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpInstallComponent } from './php-install.component';

describe('PhpInstallComponent', () => {
  let component: PhpInstallComponent;
  let fixture: ComponentFixture<PhpInstallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhpInstallComponent]
    });
    fixture = TestBed.createComponent(PhpInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
