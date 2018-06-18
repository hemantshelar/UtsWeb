import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppConstantsService } from './app-constants.service';
import { debug } from 'util';
import { StaffServiceFindResponse } from '../Model/StaffServiceFindResponse';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private apiUrl : string;
  public staffServiceFindResponse: StaffServiceFindResponse;

  constructor(private http: HttpClient,private appConstants : AppConstantsService) {
    this.apiUrl = appConstants.ApiUrl + '/Staff' ; 
   }

  public test() : void{
    alert(this.appConstants.ApiUrl);
  }

  public async Search(firstName: string, lastName: string) {
    var url = this.apiUrl + '/Search?firstName='+firstName + '&lastName=' + lastName;   
    var result = await this.http.get<StaffServiceFindResponse>(url).toPromise();
    result.resultCount = 1;
    return result;
  }

  public async likeReived(id: number){
    var url = this.apiUrl + '/LikeReceived?EmployeeId=' + id;
    console.debug(url);
    var result = await this.http.put(url,{}).subscribe( sub=>{
      console.log('done this');
    });
  }
}
