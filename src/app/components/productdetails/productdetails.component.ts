import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  product:{
    title:"Air Performance Polo, Navy",
    price:1499,
    cost:720
  }
  constructor() { }

  ngOnInit(): void {
  }

}
