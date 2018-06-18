import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  public ApiUrl : string;
  constructor() {
    this.ApiUrl = "https://utswebapi.azurewebsites.net/api";
   }
}
