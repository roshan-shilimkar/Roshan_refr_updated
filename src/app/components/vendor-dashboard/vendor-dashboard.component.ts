import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShareAdvocacyComponent } from 'src/app/share-advocacy/share-advocacy.component';
import { ShareLoyaltyComponent } from 'src/app/share-loyalty/share-loyalty.component';

export interface camptype {
  sid: string,
  dateS: any,
  min: number,
  max: number,
  countM: number,
  storeTyp: string,
  ban: false,
  paid: false,
  id: string,
  customAct: false,
  expiry: false,
  dateE: any,
  cbDir: number,
  sin: any,
  by: string,
  countP: number,
  cbExi: number,
  cbNew: number,
  countS: number,
  stoped: false,
  stage: number,
  type: string,
  tX: string,
  paused: false,
  name: string,
  upd: any,
  customPay: number,
}

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit {
  camparr: Array<camptype> = [];
  enteredamt: number;
  selectedindex: any = null;
  selectedredeemindex: any = null;
  campaign: string = "";
  store = {
    logo: 'https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660307759328?alt=media&token=9e4c087f-e482-44a2-83ae-84fc29dde809',
    name: 'Fit Foods',
    type: 'Online + Offline',
    vFan: 531,
    vOrdr: 140,
    vEarn: 20000,
  }

  mine = {
    acBalH: 20020
  }
  makeChanges = false;
  paymentOrder:any =   [
    {
        "setShortID": true,
        "cart": [
            {
                "warranty": true,
                "sold": 0,
                "vX": [],
                "burn": false,
                "description": "Sandwich ",
                "variants": [],
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmEeeVq9q1itbbv7bAPaq1666903171882?alt=media&token=28dd6fd0-1b7d-4877-852c-86a9a31b74ed"
                ],
                "reqBurn": false,
                "category": "Paneer",
                "price": 110,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "code": "45666",
                "content": true,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "Q": 1,
                "title": "Sandwich",
                "sin": {
                    "seconds": 1666903176,
                    "nanoseconds": 730000000
                },
                "id": "mEeeVq9q1itbbv7bAPaq",
                "upd": {
                    "seconds": 1667402410,
                    "nanoseconds": 161000000
                },
                "quota": 0,
                "cost": 10
            }
        ],
        "amTaxTDS": 0,
        "amBurst": 10,
        "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
        "amTaxTCS": 0.1,
        "amSale": 110,
        "refr": {
            "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "name": "Aditya",
            "earn": 4
        },
        "userName": "Roshan",
        "sin": {
            "seconds": 1667402648,
            "nanoseconds": 972000000
        },
        "amGateway": 0,
        "logistics": {
            "status": 20,
            "PnD_nationCharge": 0,
            "PnD_freeStart": 0,
            "require": false,
            "typeSuCat": "sc-food_and_beverages-healthy_snacks",
            "addressPickT": "shop",
            "PnD_parcelNotFree": false,
            "PnD_cityCharge": 0,
            "addressPick": {
                "lon": 72.83105909999999,
                "locality": "Mumbai",
                "line2": "",
                "city": "Mumbai Suburban",
                "area": "Dent Heal",
                "line1": "Dipesadsadas sadasdas",
                "id": "IND_MH_1648672299398",
                "lat": 19.0662066,
                "region": "Maharashtra",
                "state": "MH",
                "zip": "400050",
                "nation": "IND"
            },
            "name": "Roshan",
            "typeCat": "food_and_beverages",
            "addressDropT": "home",
            "addressDrop": {
                "zip": 400097,
                "landmark": "Opposite of maple height building ",
                "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                "type": "home"
            },
            "phone": "9167452128",
            "email": "",
            "typeShop": "Both",
            "typeOrdr": "F2F_ONLINE"
        },
        "amRefr": 0,
        "journey": "F2F",
        "com": {
            "seconds": 1667455584,
            "nanoseconds": 302000000
        },
        "amParcelCity": false,
        "ordrTYPE": "RefrCASH",
        "invoice": {
            "useRefrCash": true,
            "COD": false,
            "amtRefrCash": 10
        },
        "earn": 8,
        "storeName": "Fit Food",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "upd": {
            "seconds": 1667402648,
            "nanoseconds": 972000000
        },
        "camp": {
            "dateE": {
                "seconds": 1669919400,
                "nanoseconds": 0
            },
            "cbDir": 2,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "id": "NWFtLtMCTNTLsXWT0u0K",
            "max": 0,
            "paid": false,
            "cbNew": 8,
            "countM": 0,
            "expiry": false,
            "customPay": 0,
            "customAct": false,
            "dateS": {
                "seconds": 1667327400,
                "nanoseconds": 0
            },
            "countS": 0,
            "countP": 0,
            "type": "flat",
            "tX": "t1",
            "stoped": false,
            "ban": false,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "upd": {
                "seconds": 1667402358,
                "nanoseconds": 971000000
            },
            "storeTyp": "Both",
            "min": 10,
            "sin": {
                "seconds": 1667402358,
                "nanoseconds": 971000000
            },
            "name": "Campaign-46",
            "cbExi": 4,
            "paused": false,
            "stage": 0
        },
        "amCost": 0,
        "id": "4GivDYHXDuXHkm1i3r66",
        "code": "A000Ky",
        "type": [
            "RefrCASH",
            "aBbP0FKIXvYdxNE7ictPnPo33th1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A000Ky",
            "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
            "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
        ],
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "shortID": "A000jL",
        "amSave": 110,
        "amTax": 0,
        "amParcel": 0,
        "status": 10,
        "amTotal": 10
    }
]
 




  paymentRedeem: any = [
    {
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "type": [
        "CASH",
        "aBbP0FKIXvYdxNE7ictPnPo33th1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "POS",
        "REDEEM",
        "A000JQ",
        "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
      ],
      "shortID": "A0006e",
      "setShortID": true,
      "camp": null,
      "logistics": {
        "status": 0,
        "addressPick": null,
        "require": false,
        "addressDrop": null
      },
      "amTotal": 0,
      "ordrTYPE": "CASH",
      "amGateway": 0,
      "amSale": 0,
      "code": "A000JQ",
      "sin": {
        "seconds": 1666359167,
        "nanoseconds": 380000000
      },
      "amParcelCity": false,
      "com": {
        "seconds": 1666359167,
        "nanoseconds": 380000000
      },
      "id": "39xUsfakx1dm9CGKiCEf",
      "cart": [],
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "storeName": "Fit Food",
      "invoice": {
        "amtRefrCash": 0,
        "COD": false,
        "useRefrCash": false
      },
      "amRefr": 0,
      "amCost": 0,
      "refr": null,
      "amTaxTCS": 0,
      "upd": {
        "seconds": 1666359167,
        "nanoseconds": 380000000
      },
      "amTaxTDS": 0,
      "amParcel": 0,
      "journey": "POS",
      "userName": "Roshan",
      "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
      "amSave": 0,
      "status": 0,
      "amBurst": 0,
      "earn": 0,
      "amTax": 0
    },
    {
      "sin": {
        "seconds": 1666359637,
        "nanoseconds": 52000000
      },
      "type": [
        "CASH",
        "aBbP0FKIXvYdxNE7ictPnPo33th1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "F2F",
        "REDEEM",
        "A000JQ",
        "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
        "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
      ],
      "amTax": 0,
      "amTotal": 0,
      "userName": "Roshan",
      "amRefr": 0,
      "upd": {
        "seconds": 1666359637,
        "nanoseconds": 52000000
      },
      "logistics": {
        "status": 0,
        "typeOrdr": "F2F_OFFLINE",
        "addressDropT": null,
        "phone": "+919167452128",
        "typeCat": "food_and_beverages",
        "name": "Roshan",
        "typeShop": "Both",
        "typeSuCat": "sc-food_and_beverages-cafe",
        "email": "",
        "require": false,
        "addressDrop": null,
        "addressPickT": "shop",
        "addressPick": {
          "line1": "Dipesadsadas sadasdas",
          "lat": 19.0662066,
          "region": "Maharashtra",
          "id": "IND_MH_1648672299398",
          "city": "Mumbai Suburban",
          "lon": 72.83105909999999,
          "zip": "400050",
          "state": "MH",
          "area": "Dent Heal",
          "line2": "",
          "nation": "IND",
          "locality": "Mumbai"
        }
      },
      "amTaxTDS": 0,
      "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
      "com": {
        "seconds": 1666359637,
        "nanoseconds": 52000000
      },
      "id": "MYd7AMi0aAmoM3tZKHeP",
      "camp": {
        "cbDir": 5,
        "cbExi": 10,
        "expiry": false,
        "sin": {
          "seconds": 1666266989,
          "nanoseconds": 858000000
        },
        "id": "RJMlwhLTqIZECFgd2mvC",
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "max": 80,
        "upd": {
          "seconds": 1666266989,
          "nanoseconds": 858000000
        },
        "stage": 0,
        "customPay": 0,
        "countM": 0,
        "countP": 0,
        "dateS": {
          "seconds": 1666204200,
          "nanoseconds": 0
        },
        "dateE": {
          "seconds": 1668882600,
          "nanoseconds": 0
        },
        "customAct": false,
        "tX": "t1",
        "countS": 0,
        "min": 100,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "ban": false,
        "name": "Campaign-44",
        "cbNew": 20,
        "paid": false,
        "type": "percent",
        "stoped": false,
        "storeTyp": "Both",
        "paused": false
      },
      "amTaxTCS": 0,
      "amCost": 0,
      "shortID": "A0006g",
      "amSave": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "code": "A000JQ",
      "refr": {
        "earn": 0,
        "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1",
        "name": "Roshan"
      },
      "setShortID": true,
      "journey": "F2F",
      "amBurst": 0,
      "ordrTYPE": "CASH",
      "invoice": {
        "useRefrCash": false,
        "amtRefrCash": 0,
        "COD": false
      },
      "cart": [],
      "amSale": 0,
      "status": 0,
      "amParcelCity": false,
      "amGateway": 0,
      "storeName": "Fit Food",
      "amParcel": 0,
      "earn": 0,
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
    }
  ]


  campALL: Array<camptype> = [
    {
      sid: "8B9ozj7aTPvywkIvVWiK",
      dateS: {
        seconds: 1666031400,
        nanoseconds: 0
      },
      min: 999,
      max: 100,
      countM: 0,
      storeTyp: "Both",
      ban: false,
      paid: false,
      id: "d8Qr9CBymh0HhlLgj0Kd",
      customAct: false,
      expiry: false,
      dateE: {
        seconds: 1668796200,
        nanoseconds: 0
      },
      cbDir: 2.5,
      sin: {
        seconds: 1666077660,
        nanoseconds: 884000000
      },
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      countP: 0,
      cbExi: 5,
      cbNew: 10,
      countS: 0,
      stoped: false,
      stage: 0,
      type: "percent",
      tX: "t1",
      paused: false,
      name: "Campaign-41",
      upd: {
        seconds: 1666077660,
        nanoseconds: 884000000
      },
      customPay: 0
    },
    {
      expiry: false,
      sid: "8B9ozj7aTPvywkIvVWiK",
      countP: 0,
      min: 50,
      paused: false,
      stage: 0,
      dateS: {
        seconds: 1665513000,
        nanoseconds: 0
      },
      countM: 0,
      dateE: {
        seconds: 1669746600,
        nanoseconds: 0
      },
      storeTyp: "Both",
      customAct: false,
      max: 0,
      upd: {
        seconds: 1665574403,
        nanoseconds: 533000000
      },
      sin: {
        seconds: 1665574403,
        nanoseconds: 533000000
      },
      stoped: false,
      id: "si4Ba2AAJX8gOmMEX0DI",
      ban: false,
      paid: false,
      name: "Campaign-40",
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      cbExi: 5,
      tX: "t1",
      cbDir: 5,
      cbNew: 10,
      countS: 0,
      type: "flat",
      customPay: 0
    }
  ];
  amt:any;

  constructor(public dialog: MatDialog,public router: Router,) {
    console.log(this.router.url)
    setTimeout(() => {
      this.paymentRedeem.push(
        {
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "type": [
            "CASH",
            "aBbP0FKIXvYdxNE7ictPnPo33th1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "storeORDER",
            "clientAc",
            "POS",
            "REDEEM",
            "A000JQ",
            "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "shortID": "A0006e",
          "setShortID": true,
          "camp": null,
          "logistics": {
            "status": 0,
            "addressPick": null,
            "require": false,
            "addressDrop": null
          },
          "amTotal": 0,
          "ordrTYPE": "CASH",
          "amGateway": 0,
          "amSale": 0,
          "code": "A000JQ",
          "sin": {
            "seconds": 1666359167,
            "nanoseconds": 380000000
          },
          "amParcelCity": false,
          "com": {
            "seconds": 1666359167,
            "nanoseconds": 380000000
          },
          "id": "39xUsfakx1dm9CGKiCEf",
          "cart": [],
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "storeName": "Fit Food",
          "invoice": {
            "amtRefrCash": 0,
            "COD": false,
            "useRefrCash": false
          },
          "amRefr": 0,
          "amCost": 0,
          "refr": null,
          "amTaxTCS": 0,
          "upd": {
            "seconds": 1666359167,
            "nanoseconds": 380000000
          },
          "amTaxTDS": 0,
          "amParcel": 0,
          "journey": "POS",
          "userName": "Roshan11",
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "amSave": 0,
          "status": 0,
          "amBurst": 0,
          "earn": 0,
          "amTax": 0
        },
        {
          "sin": {
            "seconds": 1666359637,
            "nanoseconds": 52000000
          },
          "type": [
            "CASH",
            "aBbP0FKIXvYdxNE7ictPnPo33th1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "storeORDER",
            "clientAc",
            "F2F",
            "REDEEM",
            "A000JQ",
            "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
            "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "amTax": 0,
          "amTotal": 0,
          "userName": "Roshan1111",
          "amRefr": 0,
          "upd": {
            "seconds": 1666359637,
            "nanoseconds": 52000000
          },
          "logistics": {
            "status": 0,
            "typeOrdr": "F2F_OFFLINE",
            "addressDropT": null,
            "phone": "+919167452128",
            "typeCat": "food_and_beverages",
            "name": "Roshan",
            "typeShop": "Both",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "email": "",
            "require": false,
            "addressDrop": null,
            "addressPickT": "shop",
            "addressPick": {
              "line1": "Dipesadsadas sadasdas",
              "lat": 19.0662066,
              "region": "Maharashtra",
              "id": "IND_MH_1648672299398",
              "city": "Mumbai Suburban",
              "lon": 72.83105909999999,
              "zip": "400050",
              "state": "MH",
              "area": "Dent Heal",
              "line2": "",
              "nation": "IND",
              "locality": "Mumbai"
            }
          },
          "amTaxTDS": 0,
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "com": {
            "seconds": 1666359637,
            "nanoseconds": 52000000
          },
          "id": "MYd7AMi0aAmoM3tZKHeP",
          "camp": {
            "cbDir": 5,
            "cbExi": 10,
            "expiry": false,
            "sin": {
              "seconds": 1666266989,
              "nanoseconds": 858000000
            },
            "id": "RJMlwhLTqIZECFgd2mvC",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "max": 80,
            "upd": {
              "seconds": 1666266989,
              "nanoseconds": 858000000
            },
            "stage": 0,
            "customPay": 0,
            "countM": 0,
            "countP": 0,
            "dateS": {
              "seconds": 1666204200,
              "nanoseconds": 0
            },
            "dateE": {
              "seconds": 1668882600,
              "nanoseconds": 0
            },
            "customAct": false,
            "tX": "t1",
            "countS": 0,
            "min": 100,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "ban": false,
            "name": "Campaign-44",
            "cbNew": 20,
            "paid": false,
            "type": "percent",
            "stoped": false,
            "storeTyp": "Both",
            "paused": false
          },
          "amTaxTCS": 0,
          "amCost": 0,
          "shortID": "A0006g",
          "amSave": 0,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "code": "A000JQ",
          "refr": {
            "earn": 0,
            "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1",
            "name": "Roshan"
          },
          "setShortID": true,
          "journey": "F2F",
          "amBurst": 0,
          "ordrTYPE": "CASH",
          "invoice": {
            "useRefrCash": false,
            "amtRefrCash": 0,
            "COD": false
          },
          "cart": [],
          "amSale": 0,
          "status": 0,
          "amParcelCity": false,
          "amGateway": 0,
          "storeName": "Fit Food",
          "amParcel": 0,
          "earn": 0,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
        }
      )
    }, 5000);
   
    // console.log("length" + this.paymentOrder.length);
  }

  ngOnInit(): void {
  }

  getCampAmt(c: any, cb: number) {
    // cbDir == cb == 1
    // min == cb == 2
    // max == cb == 3
    if (!c) { return 0 }
    else {
      const x = this.campALL.findIndex(x => x.id == c);
      if (cb == 1) {
        return this.campALL[x].cbDir || 0;
      }
      else if (cb == 2) {
        return this.campALL[x].min || 0;
      }
      else {
        return this.campALL[x].max || 0;
      }
    }
  }

  getVARIENT(v: any) {
    return v.type + ": " + v.name;
  }

  getmincampvalue() {
    let a = this.campALL;
    for (let i = 0; i < this.campALL.length; i++) {
      a.sort(function (a, b) { return a.min - b.min })
    }
    return a[0].min;
  }

  Amtchange(reqata: any, index: any) {

    if (reqata.journey != "F2F") {
      this.camparr = [];
      for (let i = 0; i < this.campALL.length; i++) {
        if (this.paymentRedeem[index].enteredamt >= this.campALL[i].min) {
          this.camparr.push(this.campALL[i]);
        }
      }
      console.log("camparr length = " + this.camparr.length)
      if (this.camparr.length > 0 && this.paymentRedeem[index].enteredamt != undefined) {
        // console.log(1);     
        let entered_amount = this.paymentRedeem[index].enteredamt;       
        this.camparr = this.camparr.sort(function (a, b) {
          let C = a.cbDir;
          let D = b.cbDir;

          if (a.type == "percent") {
            C = ((C * entered_amount) / 100) > a.max ? a.max : ((C * entered_amount) / 100);
          }
          if (b.type == "percent") {
            D = ((D * entered_amount) / 100) > b.max ? b.max : ((D * entered_amount) / 100);
          }
          return D - C;
        });
        this.campaign = this.camparr[0].id;

        // }
        // else {
        //   camparr = camparr.sort(function (a, b) {
        //     let c = a.cbDir;
        //     let d = b.cbDir;
        //     if (a.type == "percent") {
        //       c = ((a.cbNew / enteredamt) * 100) > a.max ? a.max : ((a.cbNew / enteredamt) * 100);
        //     }
        //     if (b.type == "percent") {
        //       d = ((b.cbNew / enteredamt) * 100) > b.max ? b.max : ((b.cbNew / enteredamt) * 100);
        //     }
        //     return d - c;
        //   });
        //   this.campaign = camparr[0].id;
        // }
      }
      else {
        // console.log(2);
        this.campaign = "";
      }

      console.log("campaign = " + this.campaign);
    }
  }

  ordrStatus(journey: string, ordr: any, setStatus: any) {
  }

  acceptReedem(a: any, b: any, c: any, d: any, E: any, F: any, G: any, h: any) {
  }

  promoteAdvocacy() {
    let w = (window.innerWidth - 16) + 'px';
    const refDialog = this.dialog.open(ShareAdvocacyComponent, {
      width: w, minWidth: "320px", maxWidth: "480px",
      data: { name: "Fit Foods", link: "biz.refr.club" },
      panelClass: "dialogLayout"
    });
  }

  promoteLoyalty() {
    let w = (window.innerWidth - 16) + 'px';
    const refDialog = this.dialog.open(ShareAdvocacyComponent, {
      width: w, minWidth: "320px", maxWidth: "480px",
      data: { name: "Fit Foods", link: "biz.refr.club" },
      panelClass: "dialogLayout"
    });
  }

  expandRedeemCard(id: any) {
  }

  rejectReedem(id: any) {
  }


}
