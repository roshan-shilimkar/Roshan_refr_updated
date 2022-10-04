import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {
p={
  "amTaxTDS": 0,
  "amBurst": 10,
  "earn": 0,
  "amGateway": 0.0118,
  "journey": "F2F",
  "logistics": {
      "typeShop": "Both",
      "typeCat": "food_and_beverages",
      "addressPick": {
          "zip": "400050",
          "id": "IND_MH_1648672299398",
          "state": "MH",
          "locality": "Mumbai",
          "lon": 72.83105909999999,
          "area": "Dent Heal",
          "line1": "Dipesadsadas sadasdas",
          "nation": "IND",
          "lat": 19.0662066,
          "city": "Mumbai Suburban",
          "line2": "",
          "region": "Maharashtra"
      },
      "PnD_cityCharge": 0,
      "typeSuCat": "sc-food_and_beverages-restaurants",
      "addressPickT": "shop",
      "require": false,
      "phone": "9167452128",
      "status": 0,
      "PnD_parcelNotFree": false,
      "email": "",
      "addressDrop": {
          "type": "home",
          "landmark": "Opposite of maple height building ",
          "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
          "zip": 400097
      },
      "PnD_freeStart": 0,
      "PnD_nationCharge": 0,
      "typeOrdr": "F2F_ONLINE",
      "addressDropT": "home",
      "name": "Roshan"
  },
  "amTotal": 10.5,
  "amSave": 20,
  "amTaxTCS": 0.1,
  "amTax": 0.5,
  "amParcel": 0,
  "camp": {
      "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
      },
      "countP": 0,
      "expiry": false,
      "tX": "t1",
      "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "stoped": false,
      "max": 0,
      "min": 1200,
      "countM": 0,
      "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
      },
      "cbDir": 40,
      "ban": false,
      "customAct": false,
      "paused": false,
      "customPay": 0,
      "stage": 0,
      "cbExi": 30,
      "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
      },
      "countS": 0,
      "cbNew": 80,
      "paid": false,
      "name": "Campaign-39",
      "type": "flat",
      "id": "IzSNW9mwHpHHyZ6C9cAD",
      "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
      },
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "storeTyp": "Both"
  },
  "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  "sin": {
      "seconds": 1664462258,
      "nanoseconds": 116000000
  },
  "userName": "Roshan",
  "upd": {
      "seconds": 1664462258,
      "nanoseconds": 116000000
  },
  "sid": "8B9ozj7aTPvywkIvVWiK",
  "storeName": "Fit Food",
  "amSale": 20,
  "id": "MAPxsWcuh14qH8Ilr8j7",
  "amCost": 0.5,
  "code": "A0001c",
  "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
  "invoice": {
      "amtRefrCash": 10,
      "COD": false,
      "useRefrCash": true
  },
  "type": [
      "RefrCASH+ONLINE",
      "aBbP0FKIXvYdxNE7ictPnPo33th1",
      "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "8B9ozj7aTPvywkIvVWiK",
      "addORDER",
      "storeORDER",
      "clientAc",
      "F2F",
      "A0001c"
  ],
  "com": {
      "seconds": 1664462258,
      "nanoseconds": 116000000
  },
  "ordrTYPE": "RefrCASH+ONLINE",
  "status": 0,
  "refr": {
      "earn": 0,
      "name": "Roshan",
      "uid": "a45fWFfduyg8Z8dSn6kkQWtkaZl1"
  },
  "amParcelCity": false,
  "cart": [
      {
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "burn": false,
          "quota": 0,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
          ],
          "vX": [
              {
                  "nowVarient": [
                      {
                          "name": "#ff0000",
                          "type": "palete"
                      },
                      {
                          "name": "Xl",
                          "type": "size"
                      },
                      {
                          "type": "color",
                          "name": "#123123"
                      }
                  ],
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "countQ": 1
              }
          ],
          "price": 20,
          "sold": 0,
          "description": "elo",
          "title": "Abcd",
          "reqBurn": false,
          "Q": 1,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "sin": {
              "seconds": 1662754531,
              "nanoseconds": 334000000
          },
          "id": "s15R9CsWGf0DjDkGRwfV",
          "upd": {
              "seconds": 1664434855,
              "nanoseconds": 40000000
          },
          "variants": [
              {
                  "name": "Xl",
                  "type": "size"
              },
              {
                  "type": "palete",
                  "name": "#ff0000"
              },
              {
                  "type": "color",
                  "name": "#333"
              },
              {
                  "name": "#123123",
                  "type": "color"
              }
          ],
          "warranty": false,
          "content": true,
          "category": "some category",
          "cost": 10,
          "code": "Some Hsn"
      }
  ],
  "amRefr": 0
}

show:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  closeMe(){
    
  }

}
