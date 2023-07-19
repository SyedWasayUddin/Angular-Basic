import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlIntroComponent } from './sql-intro.component';

describe('SqlIntroComponent', () => {
  let component: SqlIntroComponent;
  let fixture: ComponentFixture<SqlIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlIntroComponent]
    });
    fixture = TestBed.createComponent(SqlIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
