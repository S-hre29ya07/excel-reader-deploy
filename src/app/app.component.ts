import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'excelsheet-reader';
  ngOnInit(): void {

  }
  ExcelUpload(){
    this.requestApi.apiCall().subscribe(data)=>{
    console.warn("get api data", data);
    this.title = data['title'];
  }
}
  constructor(private requestApi: ApiService){

  }

 }
