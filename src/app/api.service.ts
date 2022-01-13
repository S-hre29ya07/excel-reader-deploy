import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  request_Url=environment.apiUrl;
  constructor(
    private http:HttpClient)
    { }
    apiCall(file){
      return this.http.post(this.request_Url+"upload/",file)
    }
}
