import { Component } from '@angular/core';
import { StaffServiceFindResponse } from './Model/StaffServiceFindResponse';
import { debug } from 'util';
import { Employee } from './Model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public staffServiceFindResponse: StaffServiceFindResponse;
  constructor(){
    this.staffServiceFindResponse = new StaffServiceFindResponse();
    this.staffServiceFindResponse.directReports = [];
    this.staffServiceFindResponse.employee = new Employee();
    this.staffServiceFindResponse.manager = new Employee();
  }
  title = 'app';
  public onSearchComplete(param: StaffServiceFindResponse){
    debugger;
    this.staffServiceFindResponse = param;
  }
}
