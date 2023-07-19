import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCssComponent } from './why-css.component';

describe('WhyCssComponent', () => {
  let component: WhyCssComponent;
  let fixture: ComponentFixture<WhyCssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyCssComponent]
    });
    fixture = TestBed.createComponent(WhyCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
