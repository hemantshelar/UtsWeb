import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-employee-direct-report',
  templateUrl: './employee-direct-report.component.html',
  styleUrls: ['./employee-direct-report.component.css']
})
export class EmployeeDirectReportComponent implements OnInit {

  @Input()
  DirectReports : Employee [];
  constructor() { 
  }

  ngOnInit() {
    this.DirectReports = [];
  }

}
