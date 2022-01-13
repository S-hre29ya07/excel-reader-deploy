import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
  styleUrls: ['./current-date.component.css']
})
export class CurrentDateComponent implements OnInit {

  Date1 : Date = new Date();

  LocalDate : string = new Date().toLocaleString();

  constructor() { }

  ngOnInit(): void {
  }

}
