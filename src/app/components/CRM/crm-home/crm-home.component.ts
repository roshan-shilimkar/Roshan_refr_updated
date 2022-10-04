import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crm-home',
  templateUrl: './crm-home.component.html',
  styleUrls: ['./crm-home.component.scss']
})
export class CRMHOMeComponent implements OnInit {
  navRoutes = [
    { tit: "Merchant Transaction",link:"/CRMTrans/1"},
    { tit: "User Transaction",link:"/CRMTrans/2"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
