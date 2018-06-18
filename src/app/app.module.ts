import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDirectReportComponent } from './employee-direct-report/employee-direct-report.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    EmployeeDirectReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
