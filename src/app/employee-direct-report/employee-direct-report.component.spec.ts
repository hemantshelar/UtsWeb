import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDirectReportComponent } from './employee-direct-report.component';

describe('EmployeeDirectReportComponent', () => {
  let component: EmployeeDirectReportComponent;
  let fixture: ComponentFixture<EmployeeDirectReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDirectReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDirectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
