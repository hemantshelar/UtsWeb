import { Component, OnInit, Input } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input()
  public Employee : Employee;

  @Input()
  public Manager : Employee;

  constructor(private staffService: StaffService) { 
    //this.Employee = new Employee(); 
       
  }

  ngOnInit() {
    this.Employee = null;
  }

  public test() : void{
    this.staffService.test();
  }

  public Search(firstName: string,lastName: string){
    this.staffService.Search(firstName,lastName);
  }

  public likeReceived(){
    this.Employee.likes++;
    
    this.staffService.likeReived(Number( this.Employee.id));
  }
}
