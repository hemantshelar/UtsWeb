import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StaffServiceFindResponse } from '../Model/StaffServiceFindResponse';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private staffService: StaffService) { }
  resultCount: number;

  @Output()
  onSearchComplete = new  EventEmitter<StaffServiceFindResponse>();

  searchTerm: string;

  ngOnInit() {
    this.resultCount = 0;
    this.searchTerm = "test";
  }

  public async searchEmployee(){
    var result = await this.staffService.Search(this.searchTerm,this.searchTerm);
    this.onSearchComplete.emit(result);
    this.resultCount = result.resultCount;
  }

}
