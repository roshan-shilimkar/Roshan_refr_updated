import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-refr-now',
  templateUrl: './feed-refr-now.component.html',
  styleUrls: ['./feed-refr-now.component.scss']
})
export class FeedRefrNowComponent implements OnInit {
  type = "F2F";
  cashback = 0;
  makingChanges = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeMe(){

  }

  close(){

  }

}
