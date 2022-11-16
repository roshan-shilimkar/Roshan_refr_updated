import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firestamp-to-date',
  templateUrl: './firestamp-to-date.component.html',
  styleUrls: ['./firestamp-to-date.component.scss']
})
export class FirestampToDateComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    var Sdate = new Date(1663612200 * 1000).toDateString();
    console.log("start date = " + Sdate);
    var Edate = new Date(1667154600 * 1000);
    console.log("End date = " + Edate);
  }

}
