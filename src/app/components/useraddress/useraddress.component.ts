import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrls: ['./useraddress.component.scss']
})
export class UseraddressComponent implements OnInit {
  mine={
    addr:[
      {
          "address": "abc",
          "landmark": "xyz",
          "zip": 401101,
          "type": "work"
      },
      {
          "address": "Google",
          "zip": 401101,
          "type": "home",
          "landmark": "Tower"
      },
      {
          "address": "101, Leena residence gulmohar road miraj",
          "zip": 400056,
          "landmark": "Opposite gagandeep restaurant ",
          "type": "other"
      },
      {
          "landmark": "Opposite naturals ",
          "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
          "zip": 400049,
          "type": "other"
      }
  ]
  };
  id=5;
  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(){

  }
}
