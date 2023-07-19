import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlTutorialComponent } from './sql-tutorial.component';

describe('SqlTutorialComponent', () => {
  let component: SqlTutorialComponent;
  let fixture: ComponentFixture<SqlTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlTutorialComponent]
    });
    fixture = TestBed.createComponent(SqlTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
