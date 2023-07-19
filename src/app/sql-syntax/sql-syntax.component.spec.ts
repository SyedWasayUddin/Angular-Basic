import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlSyntaxComponent } from './sql-syntax.component';

describe('SqlSyntaxComponent', () => {
  let component: SqlSyntaxComponent;
  let fixture: ComponentFixture<SqlSyntaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlSyntaxComponent]
    });
    fixture = TestBed.createComponent(SqlSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
