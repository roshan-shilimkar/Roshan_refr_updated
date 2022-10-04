import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customercart',
  templateUrl: './customercart.component.html',
  styleUrls: ['./customercart.component.scss']
})
export class CustomercartComponent implements OnInit {
  makeChanges: boolean = false;
  step: number = 1;
  // cartProducts=[{}]

  invoice = {
    amtRefrCash: 100,
    useRefrCash: 50
  };
  userDetails = {
    type: "other",
    name: "Roshan",
    email: "roshan@gmail.com",
    mobile: "9167452128",
    address: {
      type: "Home",
      address: "Dent Heal,Leena",
      zip: "400012",
    },
    newAddress: {
      zip: "",
      landmark: "",
      address: "",
    }
  }
  addrList = [{
    type: "Home",
    address: "Dent Heal,Leena",
    zip: "400012",
  },
  {
    type: "Office",
    address: "Dent Heal,Leena",
    zip: "400012",
  },
  {
    type: "Other",
    address: "Dent Heal,Leena",
    zip: "400012",
  }
  ]
  show: boolean = false;
  burnMode: boolean = false;
  createAddress: boolean = false;
  mine = {
    acBalC: 100,
  };
  cartProducts = [{
    id:"1234567890",
    title: "Dal Tadka",
    cost: "1000",
    vX: ["a", "a"],
    Q: 2,
    burnPic: "",
    banners: ["1.jpg"],
    variants:"",
  }];
  constructor() { }

  ngOnInit(): void {
  }

  packaging() {
    return 5;
  }

  useRefrCash(abc: any) {

  }

  closeDialog() {

  }

  showAndHideAddToCard(a: any, b: any, c: any, d: any) {

  }

  taxGST() {
    return 10;
  }

  delivery() {
    return "asdasdasdd";
  }

  sign() {

  }

  createOrder(a: any) {

  }

  payWhat() {
    return 1200;
  }

  totalPrice() {
    return 2000
  }

  cashType() {
    return 'percent';
  }

  totalCost() {
    return 100
  }


  refrEarn() {
    return 10;
  }

  startChangeAddress() {

  }
}
