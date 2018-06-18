import { ContactInfo } from "./ContactInfo";

export class Employee
    {
         public id : string;
         public imageUri: string;
         public firstName: string;
         public lastName : string;
         public designation: string;
         public managerId: string;
         public contactInfo :ContactInfo;
         public likes :number;
    }