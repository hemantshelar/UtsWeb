import { Employee } from "./Employee";

export class StaffServiceFindResponse{
    public resultCount: number;
    public employee: Employee;
    public manager: Employee;
    public directReports :  Employee[];
}