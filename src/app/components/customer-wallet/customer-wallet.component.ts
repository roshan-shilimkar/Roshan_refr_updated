import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CustHowitWorkComponent } from '../cust-howit-work/cust-howit-work.component';

@Component({
  selector: 'app-customer-wallet',
  templateUrl: './customer-wallet.component.html',
  styleUrls: ['./customer-wallet.component.scss']
})
export class CustomerWalletComponent implements OnInit {
  expandedindex: any = null;

  mine = {
    acBalC: 1000,
    acBalCr: 500.3222,
    uid: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
  }
  payments: Array<any> = 
  [
    {
        "amTaxTDS": 0,
        "com": {
            "seconds": 1665618040,
            "nanoseconds": 380000000
        },
        "status": 0,
        "invoice": {
            "useRefrCash": true,
            "COD": false,
            "amtRefrCash": 1.05
        },
        "logistics": {
            "status": 0,
            "require": true,
            "name": "Dipeshin",
            "PnD_cityCharge": 0,
            "typeShop": "Both",
            "PnD_freeStart": 0,
            "typeOrdr": "DIRECT_ONLINE",
            "addressDrop": {
                "landmark": "xyz",
                "address": "abc",
                "type": "work",
                "zip": 401101
            },
            "typeCat": "food_and_beverages",
            "PnD_parcelNotFree": false,
            "addressPick": {
                "line1": "Dipesadsadas sadasdas",
                "lat": 19.0662066,
                "lon": 72.83105909999999,
                "nation": "IND",
                "state": "MH",
                "area": "Dent Heal",
                "locality": "Mumbai",
                "region": "Maharashtra",
                "id": "IND_MH_1648672299398",
                "zip": "400050",
                "city": "Mumbai Suburban",
                "line2": ""
            },
            "phone": "9876543210",
            "addressPickT": "shop",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "PnD_nationCharge": 0,
            "addressDropT": "work",
            "email": "dipesious@hotmail.com"
        },
        "amTaxTCS": 0.01,
        "amSave": 5.05,
        "journey": "DIRECT",
        "amCost": 0,
        "camp": {
            "cbNew": 10,
            "upd": {
                "seconds": 1665574403,
                "nanoseconds": 533000000
            },
            "min": 50,
            "ban": false,
            "countP": 0,
            "countM": 0,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "dateE": {
                "seconds": 1669746600,
                "nanoseconds": 0
            },
            "id": "si4Ba2AAJX8gOmMEX0DI",
            "paused": false,
            "sin": {
                "seconds": 1665574403,
                "nanoseconds": 533000000
            },
            "storeTyp": "Both",
            "max": 0,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "cbExi": 5,
            "customAct": false,
            "name": "Campaign-40",
            "cbDir": 2.5,
            "countS": 0,
            "tX": "t1",
            "stoped": false,
            "paid": false,
            "dateS": {
                "seconds": 1665513000,
                "nanoseconds": 0
            },
            "type": "flat",
            "expiry": false,
            "customPay": 0,
            "stage": 0
        },
        "refr": null,
        "userName": "Dipeshin",
        "amTotal": 1.05,
        "code": null,
        "id": "DMePzfw0x0ABaK8mOYhV",
        "amBurst": 1,
        "amParcelCity": false,
        "amSale": 5,
        "earn": 0,
        "cart": [
            {
                "reqBurn": false,
                "burn": false,
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "variants": [],
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "vX": [],
                "category": "chocolate",
                "id": "WdH3xlYAQlgwBkha2EsA",
                "price": 5,
                "Q": 1,
                "description": "Chocolate",
                "warranty": true,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "code": "123123123",
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "quota": 0,
                "sold": 0,
                "title": "JimJam",
                "content": true,
                "banners": [],
                "cost": 1
            }
        ],
        "setShortID": true,
        "storeName": "Fit Food",
        "sin": {
            "seconds": 1665618040,
            "nanoseconds": 380000000
        },
        "amTax": 0.05,
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "shortID": "A000Oa",
        "amGateway": 0,
        "ordrTYPE": "RefrCASH",
        "upd": {
            "seconds": 1665618040,
            "nanoseconds": 380000000
        },
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amParcel": 0,
        "amRefr": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "DIRECT"
        ]
    },
    {
        "logistics": {
            "PnD_nationCharge": 0,
            "PnD_parcelNotFree": false,
            "addressDrop": {
                "landmark": "xyz",
                "zip": 401101,
                "address": "abc",
                "type": "work"
            },
            "addressDropT": "work",
            "name": "Dipeshin",
            "PnD_freeStart": 0,
            "phone": "9876543210",
            "typeOrdr": "DIRECT_ONLINE",
            "email": "dipesious@hotmail.com",
            "PnD_cityCharge": 0,
            "require": true,
            "status": 0,
            "typeShop": "Both",
            "addressPickT": "shop",
            "addressPick": {
                "region": "Maharashtra",
                "id": "IND_MH_1648672299398",
                "city": "Mumbai Suburban",
                "locality": "Mumbai",
                "nation": "IND",
                "lon": 72.83105909999999,
                "lat": 19.0662066,
                "state": "MH",
                "line1": "Dipesadsadas sadasdas",
                "line2": "",
                "area": "Dent Heal",
                "zip": "400050"
            },
            "typeCat": "food_and_beverages",
            "typeSuCat": "sc-food_and_beverages-cafe"
        },
        "refr": null,
        "amSave": 5.05,
        "invoice": {
            "COD": false,
            "useRefrCash": true,
            "amtRefrCash": 1.05
        },
        "amSale": 5,
        "amBurst": 1,
        "camp": {
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "cbExi": 30,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "cbDir": 40,
            "type": "flat",
            "paused": false,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "min": 1200,
            "paid": false,
            "max": 0,
            "storeTyp": "Both",
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "customPay": 0,
            "ban": false,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "countP": 0,
            "countS": 0,
            "customAct": false,
            "tX": "t1",
            "expiry": false,
            "stage": 0,
            "cbNew": 80,
            "countM": 0,
            "stoped": false,
            "name": "Campaign-39",
            "id": "IzSNW9mwHpHHyZ6C9cAD"
        },
        "amParcelCity": false,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "cart": [
            {
                "price": 5,
                "id": "WdH3xlYAQlgwBkha2EsA",
                "burn": false,
                "category": "chocolate",
                "description": "Chocolate",
                "cost": 1,
                "title": "JimJam",
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "code": "123123123",
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "sold": 0,
                "Q": 1,
                "quota": 0,
                "content": true,
                "variants": [],
                "vX": [],
                "reqBurn": false,
                "banners": [],
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "warranty": true
            }
        ],
        "earn": 0,
        "amParcel": 0,
        "setShortID": true,
        "storeName": "Fit Food",
        "amGateway": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "ordrTYPE": "RefrCASH",
        "journey": "DIRECT",
        "amTax": 0.05,
        "com": {
            "seconds": 1665576552,
            "nanoseconds": 27000000
        },
        "amCost": 0,
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "DIRECT"
        ],
        "upd": {
            "seconds": 1665576552,
            "nanoseconds": 27000000
        },
        "status": 0,
        "amRefr": 0,
        "amTaxTDS": 0,
        "code": null,
        "userName": "Dipeshin",
        "amTaxTCS": 0.01,
        "id": "yk4Wc73Xqzv6PJeNnVGh",
        "shortID": "A000OF",
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "sin": {
            "seconds": 1665576552,
            "nanoseconds": 27000000
        },
        "amTotal": 1.05
    },
    {
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "DIRECT"
        ],
        "amGateway": 0,
        "earn": 0,
        "amParcelCity": false,
        "camp": {
            "storeTyp": "Both",
            "paused": false,
            "stage": 0,
            "paid": false,
            "tX": "t1",
            "expiry": false,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "countS": 0,
            "countP": 0,
            "max": 0,
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "name": "Campaign-39",
            "min": 1200,
            "stoped": false,
            "type": "flat",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "cbNew": 80,
            "customAct": false,
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "cbExi": 30,
            "cbDir": 40,
            "ban": false,
            "countM": 0,
            "customPay": 0,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            }
        },
        "sin": {
            "seconds": 1665576507,
            "nanoseconds": 167000000
        },
        "cart": [
            {
                "warranty": true,
                "category": "chocolate",
                "content": true,
                "title": "JimJam",
                "description": "Chocolate",
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "variants": [],
                "burn": false,
                "vX": [],
                "code": "123123123",
                "sold": 0,
                "quota": 0,
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "banners": [],
                "id": "WdH3xlYAQlgwBkha2EsA",
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "reqBurn": false,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "Q": 1,
                "price": 5,
                "cost": 1
            }
        ],
        "journey": "DIRECT",
        "amTaxTDS": 0,
        "amTax": 0.05,
        "shortID": "A000OE",
        "invoice": {
            "useRefrCash": true,
            "amtRefrCash": 1.05,
            "COD": false
        },
        "storeName": "Fit Food",
        "upd": {
            "seconds": 1665576507,
            "nanoseconds": 167000000
        },
        "setShortID": true,
        "com": {
            "seconds": 1665576507,
            "nanoseconds": 167000000
        },
        "id": "GwlVfhBsFt1v3ntOm6xg",
        "status": 0,
        "amBurst": 1,
        "amSale": 5,
        "refr": null,
        "amParcel": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "userName": "Dipeshin",
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "amSave": 5.05,
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "amTaxTCS": 0.01,
        "amTotal": 1.05,
        "code": null,
        "ordrTYPE": "RefrCASH",
        "logistics": {
            "status": 0,
            "typeSuCat": "sc-food_and_beverages-cafe",
            "addressPick": {
                "zip": "400050",
                "city": "Mumbai Suburban",
                "nation": "IND",
                "line2": "",
                "area": "Dent Heal",
                "state": "MH",
                "lat": 19.0662066,
                "id": "IND_MH_1648672299398",
                "region": "Maharashtra",
                "locality": "Mumbai",
                "lon": 72.83105909999999,
                "line1": "Dipesadsadas sadasdas"
            },
            "PnD_parcelNotFree": false,
            "typeCat": "food_and_beverages",
            "addressDropT": "work",
            "email": "dipesious@hotmail.com",
            "addressPickT": "shop",
            "PnD_cityCharge": 0,
            "addressDrop": {
                "address": "abc",
                "type": "work",
                "zip": 401101,
                "landmark": "xyz"
            },
            "typeShop": "Both",
            "require": true,
            "phone": "9876543210",
            "PnD_nationCharge": 0,
            "PnD_freeStart": 0,
            "typeOrdr": "DIRECT_ONLINE",
            "name": "Dipeshin"
        },
        "amCost": 0,
        "amRefr": 0
    },
    {
        "amTotal": 1.05,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amBurst": 1,
        "amTaxTDS": 0,
        "com": {
            "seconds": 1665574500,
            "nanoseconds": 720000000
        },
        "journey": "F2F",
        "id": "2whYvGpA3RMUD1m8Zw8i",
        "amSave": 5.05,
        "amSale": 5,
        "refr": {
            "uid": "GdViTqOv51YIsNxHV58LpXpx99n1",
            "earn": 0,
            "name": "Shraddha "
        },
        "logistics": {
            "addressPick": {
                "line2": "",
                "locality": "Mumbai",
                "state": "MH",
                "nation": "IND",
                "id": "IND_MH_1648672299398",
                "zip": "400050",
                "line1": "Dipesadsadas sadasdas",
                "area": "Dent Heal",
                "region": "Maharashtra",
                "lat": 19.0662066,
                "city": "Mumbai Suburban",
                "lon": 72.83105909999999
            },
            "typeOrdr": "F2F_ONLINE",
            "name": "Shraddha ",
            "status": 0,
            "addressDropT": "home",
            "PnD_nationCharge": 0,
            "addressPickT": "shop",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "email": "",
            "PnD_freeStart": 0,
            "phone": "9833006431",
            "PnD_parcelNotFree": false,
            "typeShop": "Both",
            "require": true,
            "typeCat": "food_and_beverages",
            "addressDrop": {
                "landmark": "Juhu ",
                "zip": 400056,
                "address": "Leena residency ",
                "type": "home"
            },
            "PnD_cityCharge": 0
        },
        "amParcelCity": false,
        "cart": [
            {
                "Q": 1,
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "price": 5,
                "code": "123123123",
                "variants": [],
                "vX": [],
                "id": "WdH3xlYAQlgwBkha2EsA",
                "cost": 1,
                "sold": 0,
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "content": true,
                "reqBurn": false,
                "category": "chocolate",
                "burn": false,
                "description": "Chocolate",
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "quota": 0,
                "warranty": true,
                "banners": [],
                "title": "JimJam",
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
            }
        ],
        "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
        "amParcel": 0,
        "amGateway": 0,
        "shortID": "A000Nl",
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "invoice": {
            "useRefrCash": true,
            "COD": false,
            "amtRefrCash": 1.05
        },
        "status": 0,
        "amTaxTCS": 0.01,
        "amCost": 0,
        "ordrTYPE": "RefrCASH",
        "setShortID": true,
        "sin": {
            "seconds": 1665574500,
            "nanoseconds": 720000000
        },
        "camp": {
            "name": "Campaign-40",
            "cbDir": 2.5,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "customPay": 0,
            "ban": false,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "paused": false,
            "id": "si4Ba2AAJX8gOmMEX0DI",
            "customAct": false,
            "countP": 0,
            "max": 0,
            "tX": "t1",
            "stoped": false,
            "stage": 0,
            "type": "flat",
            "min": 50,
            "cbExi": 5,
            "upd": {
                "seconds": 1665574403,
                "nanoseconds": 533000000
            },
            "cbNew": 10,
            "dateE": {
                "seconds": 1669746600,
                "nanoseconds": 0
            },
            "storeTyp": "Both",
            "paid": false,
            "dateS": {
                "seconds": 1665513000,
                "nanoseconds": 0
            },
            "sin": {
                "seconds": 1665574403,
                "nanoseconds": 533000000
            },
            "expiry": false,
            "countS": 0,
            "countM": 0
        },
        "userName": "Shraddha ",
        "amTax": 0.05,
        "type": [
            "RefrCASH",
            "GdViTqOv51YIsNxHV58LpXpx99n1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A00009"
        ],
        "upd": {
            "seconds": 1665574500,
            "nanoseconds": 720000000
        },
        "earn": 0,
        "code": "A00009",
        "storeName": "Fit Food",
        "amRefr": 0
    },
    {
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "status": 0,
        "amBurst": 1,
        "amRefr": 0,
        "earn": 0,
        "com": {
            "seconds": 1665573023,
            "nanoseconds": 785000000
        },
        "amGateway": 0,
        "logistics": {
            "typeOrdr": "F2F_ONLINE",
            "status": 0,
            "addressPickT": "shop",
            "name": "Aditya",
            "addressDropT": "work",
            "PnD_cityCharge": 0,
            "require": true,
            "phone": "8879751140",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "PnD_parcelNotFree": false,
            "addressPick": {
                "lon": 72.83105909999999,
                "lat": 19.0662066,
                "line2": "",
                "region": "Maharashtra",
                "line1": "Dipesadsadas sadasdas",
                "nation": "IND",
                "zip": "400050",
                "state": "MH",
                "id": "IND_MH_1648672299398",
                "area": "Dent Heal",
                "locality": "Mumbai",
                "city": "Mumbai Suburban"
            },
            "PnD_nationCharge": 0,
            "addressDrop": {
                "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                "type": "work",
                "zip": 400056,
                "landmark": "Gagandeep bus stop"
            },
            "PnD_freeStart": 0,
            "email": "",
            "typeShop": "Both",
            "typeCat": "food_and_beverages"
        },
        "amParcel": 0,
        "amTaxTCS": 0.01,
        "shortID": "A000N3",
        "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "amParcelCity": false,
        "camp": {
            "countP": 0,
            "paid": false,
            "ban": false,
            "max": 0,
            "min": 1200,
            "paused": false,
            "tX": "t1",
            "cbExi": 30,
            "countS": 0,
            "customAct": false,
            "storeTyp": "Both",
            "name": "Campaign-39",
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "type": "flat",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "cbNew": 80,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "countM": 0,
            "expiry": false,
            "customPay": 0,
            "cbDir": 40,
            "stoped": false,
            "stage": 0,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            }
        },
        "userName": "Aditya",
        "amSale": 5,
        "setShortID": true,
        "amCost": 0,
        "amSave": 5.05,
        "journey": "F2F",
        "amTotal": 1.05,
        "code": "A000Ky",
        "invoice": {
            "amtRefrCash": 1.05,
            "COD": false,
            "useRefrCash": true
        },
        "amTaxTDS": 0,
        "sin": {
            "seconds": 1665573023,
            "nanoseconds": 785000000
        },
        "upd": {
            "seconds": 1665573023,
            "nanoseconds": 785000000
        },
        "refr": {
            "name": "Aditya",
            "earn": 0,
            "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
        },
        "storeName": "Fit Food",
        "type": [
            "RefrCASH",
            "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A000Ky"
        ],
        "amTax": 0.05,
        "ordrTYPE": "RefrCASH",
        "cart": [
            {
                "banners": [],
                "vX": [],
                "title": "JimJam",
                "warranty": true,
                "reqBurn": false,
                "description": "Chocolate",
                "price": 5,
                "Q": 1,
                "sold": 0,
                "category": "chocolate",
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "code": "123123123",
                "cost": 1,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "id": "WdH3xlYAQlgwBkha2EsA",
                "content": true,
                "variants": [],
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "quota": 0,
                "burn": false
            }
        ],
        "id": "XX54PSZgyMJwbDOlA0v5"
    },
    {
        "amParcel": 0,
        "userName": "Aditya",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amParcelCity": false,
        "status": 0,
        "logistics": {
            "typeOrdr": "F2F_ONLINE",
            "addressDrop": {
                "zip": 400056,
                "type": "work",
                "landmark": "Gagandeep bus stop",
                "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
            },
            "addressPickT": "shop",
            "addressDropT": "work",
            "addressPick": {
                "region": "Maharashtra",
                "line2": "",
                "line1": "Dipesadsadas sadasdas",
                "state": "MH",
                "locality": "Mumbai",
                "city": "Mumbai Suburban",
                "zip": "400050",
                "lon": 72.83105909999999,
                "area": "Dent Heal",
                "nation": "IND",
                "lat": 19.0662066,
                "id": "IND_MH_1648672299398"
            },
            "status": 0,
            "PnD_freeStart": 0,
            "PnD_nationCharge": 0,
            "require": true,
            "typeSuCat": "sc-food_and_beverages-cafe",
            "phone": "8879751140",
            "PnD_cityCharge": 0,
            "typeShop": "Both",
            "name": "Aditya",
            "PnD_parcelNotFree": false,
            "email": "",
            "typeCat": "food_and_beverages"
        },
        "sin": {
            "seconds": 1665572994,
            "nanoseconds": 870000000
        },
        "storeName": "Fit Food",
        "invoice": {
            "amtRefrCash": 0,
            "COD": false,
            "useRefrCash": false
        },
        "amTaxTDS": 0,
        "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "amSale": 5,
        "amCost": 1.05,
        "amTax": 0.05,
        "amRefr": 0,
        "setShortID": true,
        "journey": "F2F",
        "id": "PXQwNnat0emBAVvAUUsF",
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "amGateway": 0.02478,
        "shortID": "A000NY",
        "upd": {
            "seconds": 1665572994,
            "nanoseconds": 870000000
        },
        "refr": {
            "name": "Aditya",
            "earn": 0,
            "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
        },
        "cart": [
            {
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "reqBurn": false,
                "variants": [],
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "code": "123123123",
                "content": true,
                "cost": 1,
                "burn": false,
                "description": "Chocolate",
                "sold": 0,
                "id": "WdH3xlYAQlgwBkha2EsA",
                "price": 5,
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "title": "JimJam",
                "quota": 0,
                "warranty": true,
                "vX": [],
                "banners": [],
                "category": "chocolate",
                "Q": 1,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
            }
        ],
        "camp": {
            "paid": false,
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "storeTyp": "Both",
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "stage": 0,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "customPay": 0,
            "max": 0,
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "cbNew": 80,
            "stoped": false,
            "countS": 0,
            "customAct": false,
            "paused": false,
            "tX": "t1",
            "expiry": false,
            "min": 1200,
            "countP": 0,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "type": "flat",
            "name": "Campaign-39",
            "cbDir": 40,
            "ban": false,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "cbExi": 30,
            "countM": 0
        },
        "amBurst": 1,
        "ordrTYPE": "ONLINE",
        "type": [
            "ONLINE",
            "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A000Ky"
        ],
        "amTaxTCS": 0.01,
        "amSave": 4,
        "earn": 0,
        "code": "A000Ky",
        "com": {
            "seconds": 1665572994,
            "nanoseconds": 870000000
        },
        "amTotal": 1.05
    },
    {
        "invoice": {
            "useRefrCash": true,
            "COD": false,
            "amtRefrCash": 1.05
        },
        "amRefr": 0,
        "status": 10,
        "amSave": 5.05,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amTotal": 1.05,
        "amParcel": 0,
        "sin": {
            "seconds": 1665571137,
            "nanoseconds": 5000000
        },
        "refr": {
            "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "earn": 0,
            "name": "Aditya"
        },
        "amTaxTCS": 0.01,
        "shortID": "A000NO",
        "id": "Jfuw3DUsgUYgITNAoipr",
        "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "amCost": 0,
        "amTax": 0.05,
        "storeName": "Fit Food",
        "logistics": {
            "addressPick": {
                "region": "Maharashtra",
                "id": "IND_MH_1648672299398",
                "zip": "400050",
                "line1": "Dipesadsadas sadasdas",
                "state": "MH",
                "line2": "",
                "city": "Mumbai Suburban",
                "nation": "IND",
                "lat": 19.0662066,
                "area": "Dent Heal",
                "lon": 72.83105909999999,
                "locality": "Mumbai"
            },
            "typeOrdr": "F2F_ONLINE",
            "typeShop": "Both",
            "PnD_parcelNotFree": false,
            "PnD_nationCharge": 0,
            "require": false,
            "status": 20,
            "name": "Aditya",
            "PnD_freeStart": 0,
            "addressDrop": {
                "landmark": "Gagandeep bus stop",
                "zip": 400056,
                "type": "work",
                "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
            },
            "email": "",
            "addressPickT": "shop",
            "PnD_cityCharge": 0,
            "typeCat": "food_and_beverages",
            "phone": "8879751140",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "addressDropT": "work"
        },
        "amBurst": 1,
        "userName": "Aditya",
        "amParcelCity": false,
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "code": "A000Ky",
        "cart": [
            {
                "Q": 1,
                "category": "chocolate",
                "warranty": true,
                "code": "123123123",
                "title": "JimJam",
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "description": "Chocolate",
                "sold": 0,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "variants": [],
                "reqBurn": false,
                "vX": [],
                "id": "WdH3xlYAQlgwBkha2EsA",
                "burn": false,
                "quota": 0,
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "price": 5,
                "cost": 1,
                "banners": [],
                "content": true
            }
        ],
        "journey": "F2F",
        "amSale": 5,
        "amGateway": 0,
        "amTaxTDS": 0,
        "setShortID": true,
        "type": [
            "RefrCASH",
            "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A000Ky"
        ],
        "earn": 0,
        "upd": {
            "seconds": 1665571137,
            "nanoseconds": 5000000
        },
        "done": {
            "seconds": 1665630095,
            "nanoseconds": 417000000
        },
        "camp": {
            "paused": false,
            "expiry": false,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "stage": 0,
            "customAct": false,
            "countM": 0,
            "countS": 0,
            "cbNew": 80,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "stoped": false,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "min": 1200,
            "cbExi": 30,
            "paid": false,
            "tX": "t1",
            "countP": 0,
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "ban": false,
            "max": 0,
            "storeTyp": "Both",
            "type": "flat",
            "name": "Campaign-39",
            "customPay": 0,
            "cbDir": 40,
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "sid": "8B9ozj7aTPvywkIvVWiK"
        },
        "com": {
            "seconds": 1665571471,
            "nanoseconds": 387000000
        },
        "ordrTYPE": "RefrCASH"
    },
    {
        "com": {
            "seconds": 1665570601,
            "nanoseconds": 650000000
        },
        "logistics": {
            "typeShop": "Both",
            "typeCat": "food_and_beverages",
            "status": -1000,
            "addressPickT": "shop",
            "email": "",
            "phone": "8879751140",
            "PnD_nationCharge": 0,
            "addressPick": {
                "locality": "Mumbai",
                "line2": "",
                "line1": "Dipesadsadas sadasdas",
                "region": "Maharashtra",
                "zip": "400050",
                "city": "Mumbai Suburban",
                "area": "Dent Heal",
                "nation": "IND",
                "id": "IND_MH_1648672299398",
                "state": "MH",
                "lat": 19.0662066,
                "lon": 72.83105909999999
            },
            "name": "Aditya",
            "PnD_cityCharge": 0,
            "addressDrop": {
                "type": "work",
                "zip": 400056,
                "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                "landmark": "Gagandeep bus stop"
            },
            "PnD_parcelNotFree": false,
            "require": false,
            "typeOrdr": "F2F_ONLINE",
            "PnD_freeStart": 0,
            "typeSuCat": "sc-food_and_beverages-cafe",
            "addressDropT": "work"
        },
        "earn": 0,
        "amTaxTDS": 0,
        "setShortID": true,
        "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "amGateway": 0,
        "amParcelCity": false,
        "storeName": "Fit Food",
        "amSale": 5,
        "userName": "Aditya",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amTaxTCS": 0.01,
        "upd": {
            "seconds": 1665570592,
            "nanoseconds": 769000000
        },
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "refr": {
            "earn": 0,
            "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "name": "Aditya"
        },
        "shortID": "A000NK",
        "amBurst": 1,
        "status": -10,
        "invoice": {
            "COD": false,
            "amtRefrCash": 1.05,
            "useRefrCash": true
        },
        "amParcel": 0,
        "id": "P5sPvvO6fFlclfN4DN5j",
        "gwRefund": [
            {}
        ],
        "sin": {
            "seconds": 1665570592,
            "nanoseconds": 769000000
        },
        "amRefr": 0,
        "type": [
            "RefrCASH",
            "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A000Ky"
        ],
        "ordrTYPE": "RefrCASH",
        "amCost": 0,
        "journey": "F2F",
        "amTotal": 1.05,
        "amSave": 5.05,
        "amTax": 0.05,
        "cart": [
            {
                "title": "JimJam",
                "description": "Chocolate",
                "code": "123123123",
                "vX": [],
                "sold": 0,
                "category": "chocolate",
                "cost": 1,
                "price": 5,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "banners": [],
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "variants": [],
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "id": "WdH3xlYAQlgwBkha2EsA",
                "Q": 1,
                "burn": false,
                "reqBurn": false,
                "quota": 0,
                "content": true,
                "warranty": true
            }
        ],
        "code": "A000Ky",
        "camp": {
            "ban": false,
            "cbNew": 80,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "paused": false,
            "name": "Campaign-39",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "stage": 0,
            "countS": 0,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "cbExi": 30,
            "expiry": false,
            "countM": 0,
            "type": "flat",
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "storeTyp": "Both",
            "stoped": false,
            "min": 1200,
            "tX": "t1",
            "customPay": 0,
            "customAct": false,
            "cbDir": 40,
            "countP": 0,
            "paid": false,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "max": 0
        }
    },
    {
        "ordrTYPE": "RefrCASH",
        "code": "A000Ky",
        "id": "ShPT9Gtfo3Y26sED6Re3",
        "invoice": {
            "useRefrCash": true,
            "amtRefrCash": 1.05,
            "COD": false
        },
        "amParcel": 0,
        "amBurst": 1,
        "amTotal": 1.05,
        "camp": {
            "expiry": false,
            "type": "flat",
            "customAct": false,
            "paused": false,
            "ban": false,
            "stoped": false,
            "max": 0,
            "name": "Campaign-39",
            "countM": 0,
            "tX": "t1",
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "cbExi": 30,
            "min": 1200,
            "cbNew": 80,
            "customPay": 0,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "countP": 0,
            "countS": 0,
            "paid": false,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "stage": 0,
            "storeTyp": "Both",
            "cbDir": 40,
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            }
        },
        "amSave": 5.05,
        "gwRefund": [
            {}
        ],
        "refr": {
            "earn": 0,
            "name": "Aditya",
            "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
        },
        "earn": 0,
        "cart": [
            {
                "vX": [],
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "burn": false,
                "sin": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "id": "WdH3xlYAQlgwBkha2EsA",
                "variants": [],
                "cost": 1,
                "quota": 0,
                "upd": {
                    "seconds": 1664608438,
                    "nanoseconds": 150000000
                },
                "banners": [],
                "warranty": true,
                "title": "JimJam",
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "Q": 1,
                "code": "123123123",
                "sold": 0,
                "reqBurn": false,
                "category": "chocolate",
                "content": true,
                "price": 5,
                "description": "Chocolate"
            }
        ],
        "userName": "Aditya",
        "amCost": 0,
        "sin": {
            "seconds": 1665567219,
            "nanoseconds": 640000000
        },
        "logistics": {
            "email": "",
            "addressPickT": "shop",
            "name": "Aditya",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "typeOrdr": "F2F_ONLINE",
            "PnD_cityCharge": 0,
            "status": -1000,
            "require": false,
            "addressDropT": "work",
            "phone": "8879751140",
            "PnD_freeStart": 0,
            "addressDrop": {
                "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                "zip": 400056,
                "landmark": "Gagandeep bus stop",
                "type": "work"
            },
            "PnD_parcelNotFree": false,
            "PnD_nationCharge": 0,
            "addressPick": {
                "lon": 72.83105909999999,
                "nation": "IND",
                "id": "IND_MH_1648672299398",
                "line1": "Dipesadsadas sadasdas",
                "state": "MH",
                "line2": "",
                "locality": "Mumbai",
                "lat": 19.0662066,
                "area": "Dent Heal",
                "city": "Mumbai Suburban",
                "zip": "400050",
                "region": "Maharashtra"
            },
            "typeCat": "food_and_beverages",
            "typeShop": "Both"
        },
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "status": -10,
        "amTaxTCS": 0.01,
        "setShortID": true,
        "journey": "F2F",
        "shortID": "A000NA",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amParcelCity": false,
        "amGateway": 0,
        "type": [
            "RefrCASH",
            "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A000Ky"
        ],
        "storeName": "Fit Food",
        "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "amSale": 5,
        "amRefr": 0,
        "com": {
            "seconds": 1665567420,
            "nanoseconds": 668000000
        },
        "amTax": 0.05,
        "upd": {
            "seconds": 1665567219,
            "nanoseconds": 640000000
        },
        "amTaxTDS": 0
    },
    {
        "logistics": {
            "typeSuCat": "sc-food_and_beverages-cafe",
            "addressDropT": null,
            "phone": "+918879751140",
            "addressDrop": null,
            "addressPick": {
                "city": "Mumbai Suburban",
                "lat": 19.0662066,
                "zip": "400050",
                "line1": "Dipesadsadas sadasdas",
                "state": "MH",
                "region": "Maharashtra",
                "area": "Dent Heal",
                "line2": "",
                "lon": 72.83105909999999,
                "id": "IND_MH_1648672299398",
                "locality": "Mumbai",
                "nation": "IND"
            },
            "email": "",
            "require": false,
            "addressPickT": "shop",
            "name": "Aditya",
            "status": 0,
            "typeShop": "Both",
            "typeCat": "food_and_beverages",
            "typeOrdr": "F2F_OFFLINE"
        },
        "com": {
            "seconds": 1665565804,
            "nanoseconds": 43000000
        },
        "shortID": "A000M8",
        "userName": "Aditya",
        "setShortID": true,
        "amCost": 0,
        "sin": {
            "seconds": 1665565774,
            "nanoseconds": 302000000
        },
        "type": [
            "CASH",
            "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "storeORDER",
            "clientAc",
            "F2F",
            "REDEEM",
            "A000Ky",
            "addORDER"
        ],
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "camp": {
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "countP": 0,
            "cbNew": 80,
            "max": 0,
            "expiry": false,
            "stage": 0,
            "customPay": 0,
            "ban": false,
            "countS": 0,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "paused": false,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "type": "flat",
            "countM": 0,
            "stoped": false,
            "min": 1200,
            "name": "Campaign-39",
            "cbDir": 40,
            "cbExi": 30,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "tX": "t1",
            "storeTyp": "Both",
            "paid": false,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "customAct": false,
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            }
        },
        "amBurst": 0,
        "amRefr": 0,
        "amTaxTCS": 0,
        "status": 10,
        "amSale": 0,
        "id": "KArfNzg5avGffh6ApiRD",
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "amParcel": 0,
        "earn": 80,
        "code": "A000Ky",
        "amTaxTDS": 0,
        "cart": [],
        "refr": {
            "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
            "earn": 30,
            "name": "Aditya"
        },
        "ordrTYPE": "CASH",
        "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "invoice": {
            "useRefrCash": false,
            "COD": false,
            "amtRefrCash": 0
        },
        "amSave": 0,
        "amTotal": 1200,
        "earnTotal": 110,
        "upd": {
            "seconds": 1665565774,
            "nanoseconds": 302000000
        },
        "amGateway": 0,
        "journey": "F2F",
        "storeName": "Fit Food",
        "amParcelCity": false,
        "amTax": 0
    },
    {
        "amTotal": 5.25,
        "refr": {
            "name": "Pratik B",
            "uid": "8zQ1ijM8wybv8r6ggXTaCa7cZLj2",
            "earn": 0
        },
        "userName": "Dipeshin",
        "amGateway": 0,
        "invoice": {
            "useRefrCash": true,
            "COD": false,
            "amtRefrCash": 5.25
        },
        "status": 0,
        "ordrTYPE": "RefrCASH",
        "cart": [
            {
                "quota": 0,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "title": "fried rice",
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "upd": {
                    "seconds": 1664607617,
                    "nanoseconds": 932000000
                },
                "cost": 5,
                "vX": [],
                "reqBurn": false,
                "code": "123123123123",
                "warranty": true,
                "description": "rice",
                "sin": {
                    "seconds": 1664607562,
                    "nanoseconds": 148000000
                },
                "sold": 0,
                "burn": false,
                "content": true,
                "variants": [],
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
                ],
                "Q": 1,
                "id": "AH1YkgZwvrKZo1zcuDN9",
                "price": 10,
                "category": "Dal"
            }
        ],
        "earn": 0,
        "journey": "F2F",
        "amSale": 10,
        "camp": {
            "storeTyp": "Both",
            "cbDir": 40,
            "name": "Campaign-39",
            "stage": 0,
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "countS": 0,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "customPay": 0,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "cbNew": 80,
            "ban": false,
            "tX": "t1",
            "paused": false,
            "expiry": false,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "countP": 0,
            "customAct": false,
            "type": "flat",
            "countM": 0,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "max": 0,
            "cbExi": 30,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "stoped": false,
            "min": 1200,
            "paid": false
        },
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "logistics": {
            "typeCat": "food_and_beverages",
            "name": "Dipeshin",
            "addressDrop": {
                "type": "work",
                "landmark": "xyz",
                "address": "abc",
                "zip": 401101
            },
            "addressDropT": "work",
            "PnD_parcelNotFree": false,
            "require": false,
            "phone": "9876543210",
            "typeOrdr": "F2F_ONLINE",
            "addressPickT": "shop",
            "typeShop": "Both",
            "PnD_freeStart": 0,
            "status": 0,
            "typeSuCat": "sc-food_and_beverages-cafe",
            "addressPick": {
                "line1": "Dipesadsadas sadasdas",
                "locality": "Mumbai",
                "city": "Mumbai Suburban",
                "state": "MH",
                "nation": "IND",
                "region": "Maharashtra",
                "lon": 72.83105909999999,
                "line2": "",
                "area": "Dent Heal",
                "zip": "400050",
                "lat": 19.0662066,
                "id": "IND_MH_1648672299398"
            },
            "PnD_nationCharge": 0,
            "email": "dipesious@hotmail.com",
            "PnD_cityCharge": 0
        },
        "upd": {
            "seconds": 1665535018,
            "nanoseconds": 733000000
        },
        "amRefr": 0,
        "amCost": 0,
        "id": "2c8AxITR1E6wblmidMSp",
        "amTaxTCS": 0.05,
        "com": {
            "seconds": 1665535018,
            "nanoseconds": 733000000
        },
        "code": "A0001N",
        "amParcelCity": false,
        "amTaxTDS": 0,
        "shortID": "A000Mv",
        "amSave": 10.25,
        "setShortID": true,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "sin": {
            "seconds": 1665535018,
            "nanoseconds": 733000000
        },
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A0001N"
        ],
        "amParcel": 0,
        "storeName": "Fit Food",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amBurst": 5,
        "amTax": 0.25
    },
    {
        "logistics": {
            "typeOrdr": "F2F_ONLINE",
            "addressPickT": "shop",
            "name": "Dipeshin",
            "email": "dipesious@hotmail.com",
            "addressDrop": {
                "landmark": "xyz",
                "address": "abc",
                "zip": 401101,
                "type": "work"
            },
            "PnD_nationCharge": 0,
            "typeSuCat": "sc-food_and_beverages-cafe",
            "PnD_cityCharge": 0,
            "addressDropT": "work",
            "status": 0,
            "addressPick": {
                "line2": "",
                "id": "IND_MH_1648672299398",
                "zip": "400050",
                "line1": "Dipesadsadas sadasdas",
                "locality": "Mumbai",
                "lat": 19.0662066,
                "region": "Maharashtra",
                "city": "Mumbai Suburban",
                "state": "MH",
                "nation": "IND",
                "area": "Dent Heal",
                "lon": 72.83105909999999
            },
            "PnD_freeStart": 0,
            "require": false,
            "phone": "9876543210",
            "typeShop": "Both",
            "typeCat": "food_and_beverages",
            "PnD_parcelNotFree": false
        },
        "amParcel": 0,
        "setShortID": true,
        "amTax": 37.35,
        "status": 0,
        "amGateway": 0,
        "amRefr": 0,
        "amSale": 897,
        "userName": "Dipeshin",
        "amTotal": 784.35,
        "code": "A0001N",
        "camp": {
            "name": "Flash Deal",
            "cbDir": 20,
            "storeTyp": "Both",
            "type": "flat",
            "min": 600,
            "paid": false,
            "customPay": 0,
            "expiry": false,
            "dateE": {
                "seconds": 1666204200,
                "nanoseconds": 0
            },
            "tX": "t1",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "id": "78SEsrN2FWWM1NCSzRfk",
            "stoped": false,
            "cbExi": 50,
            "upd": {
                "seconds": 1662190042,
                "nanoseconds": 807000000
            },
            "ban": false,
            "stage": 0,
            "countS": 0,
            "paused": false,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "max": 0,
            "sin": {
                "seconds": 1662190042,
                "nanoseconds": 807000000
            },
            "customAct": false,
            "countP": 0,
            "countM": 0,
            "cbNew": 100,
            "dateS": {
                "seconds": 1662921000,
                "nanoseconds": 0
            }
        },
        "amSave": 934.35,
        "amParcelCity": false,
        "amTaxTDS": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amCost": 0,
        "journey": "F2F",
        "invoice": {
            "COD": false,
            "amtRefrCash": 784.35,
            "useRefrCash": true
        },
        "upd": {
            "seconds": 1665534764,
            "nanoseconds": 795000000
        },
        "amTaxTCS": 7.47,
        "earn": 100,
        "sin": {
            "seconds": 1665534764,
            "nanoseconds": 795000000
        },
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "id": "K5a4SmM6Q2nqZkR0ptrt",
        "ordrTYPE": "RefrCASH",
        "shortID": "A000Ms",
        "storeName": "Fit Food",
        "refr": {
            "earn": 50,
            "uid": "8zQ1ijM8wybv8r6ggXTaCa7cZLj2",
            "name": "Pratik B"
        },
        "com": {
            "seconds": 1665534764,
            "nanoseconds": 795000000
        },
        "amBurst": 747,
        "cart": [
            {
                "description": "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fh25O95gX19QwOYWqprXx1656595042885?alt=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb"
                ],
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "title": "Dal Tadka ",
                "cost": 249,
                "Q": 1,
                "vX": [],
                "category": "Dal",
                "quota": 0,
                "warranty": true,
                "sold": 0,
                "code": "21069099",
                "burn": false,
                "sin": {
                    "seconds": 1656594533,
                    "nanoseconds": 801000000
                },
                "content": true,
                "variants": [],
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "reqBurn": false,
                "id": "h25O95gX19QwOYWqprXx",
                "upd": {
                    "seconds": 1656595043,
                    "nanoseconds": 979000000
                },
                "price": 299
            },
            {
                "quota": 0,
                "code": "0406",
                "sold": 0,
                "description": "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
                "burn": false,
                "vX": [],
                "cost": 249,
                "sin": {
                    "seconds": 1656594838,
                    "nanoseconds": 139000000
                },
                "Q": 1,
                "category": "Paneer",
                "upd": {
                    "seconds": 1656595096,
                    "nanoseconds": 333000000
                },
                "variants": [],
                "id": "ojgm1JXri2o54qR0fVlw",
                "title": "Paneer Butter Masala ",
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "warranty": true,
                "content": true,
                "price": 299,
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fojgm1JXri2o54qR0fVlw1656595095219?alt=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948"
                ],
                "reqBurn": false
            },
            {
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "price": 299,
                "variants": [],
                "cost": 249,
                "title": "Veg Kolhapuri",
                "sold": 0,
                "upd": {
                    "seconds": 1658907561,
                    "nanoseconds": 363000000
                },
                "reqBurn": false,
                "category": "Kolhapuri",
                "sin": {
                    "seconds": 1656594957,
                    "nanoseconds": 592000000
                },
                "description": "his spicy and tasty mixed vegetable based dish has its origin in kolhapur, a historical city in south maharashtra. Kolhapuri cuisine is known for its hot, spicy and pungent flavors. however, not all the food from the Kolhapuri cuisine is spicy & robust.",
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1656595149710?alt=media&token=5fe88fd3-c22a-4aef-858d-a37e74b01496",
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907519289?alt=media&token=251cca35-dcff-4b40-a1ea-0b61871dd3fd",
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907535340?alt=media&token=f2398da4-28f3-4d10-9dd6-fbf3f9fb1999",
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907558667?alt=media&token=424c6593-6080-4639-989e-6f53e480a54e"
                ],
                "id": "vp92P8ftA5QcPWJ4KmGA",
                "burn": false,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "code": "0406",
                "quota": 0,
                "content": true,
                "Q": 1,
                "vX": [],
                "warranty": true
            }
        ],
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A0001N"
        ]
    },
    {
        "type": [
            "addBalance",
            "cashbackBalance",
            "clientAc",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "Dipeshin",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "Δ",
            "admin"
        ],
        "status": 10,
        "upd": {
            "seconds": 1665534654,
            "nanoseconds": 312000000
        },
        "amSale": 0,
        "to": "Δ",
        "amCost": 1800,
        "com": {
            "seconds": 1665534654,
            "nanoseconds": 312000000
        },
        "amRate": {
            "refill": 1800,
            "cut": -200,
            "pay": 1800,
            "cutRate": 10
        },
        "sin": {
            "seconds": 1665534654,
            "nanoseconds": 312000000
        },
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "amTotal": 1800,
        "journey": "ADMIN",
        "amGive": 1800,
        "amPaid": 1800,
        "via": {
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "name": "Dipeshin"
        },
        "id": "CFYvk67xwOFlKxfweYHk",
        "amSave": 0
    },
    {
        "amTax": 5,
        "status": 0,
        "invoice": {
            "COD": false,
            "useRefrCash": true,
            "amtRefrCash": 105
        },
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "amCost": 0,
        "amGateway": 0,
        "cart": [
            {
                "sold": 0,
                "burnSpec": "All weather comfort",
                "quota": 0,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1654168139744?alt=media&token=f577b316-c499-4929-b46a-2c2ed7d21b08"
                ],
                "warranty": true,
                "storeINFO": {
                    "proCat": [
                        "gfjgjhgjhghjg",
                        "hhkhkjhjk",
                        "some category",
                        "Dal",
                        "Paneer",
                        "Kolhapuri",
                        "chocolate"
                    ],
                    "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
                    "log": {
                        "seconds": 1648672299,
                        "nanoseconds": 867000000
                    },
                    "about": "About the store",
                    "vOrdr": 21,
                    "id": "8B9ozj7aTPvywkIvVWiK",
                    "loc": [
                        {
                            "state": "MH",
                            "id": "IND_MH_1648672299398",
                            "area": "Dent Heal",
                            "city": "Mumbai Suburban",
                            "locality": "Mumbai",
                            "line2": "",
                            "lon": 72.83105909999999,
                            "line1": "Dipesadsadas sadasdas",
                            "zip": "400050",
                            "nation": "IND",
                            "region": "Maharashtra",
                            "lat": 19.0662066
                        },
                        {
                            "id": "IND_MH_1656024949912",
                            "lon": 72.8213950683594,
                            "nation": "IND",
                            "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                            "state": "MH",
                            "lat": 19.134840193193707,
                            "zip": "400053",
                            "region": "Maharashtra",
                            "city": "Mumbai Suburban",
                            "line1": "sadas sadasdasd sdasdas",
                            "locality": "Mumbai",
                            "line2": ""
                        }
                    ],
                    "subCat": "sc-food_and_beverages-cafe",
                    "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                    "shareUrlX1": "https://refrclub.com/o/WoQJ",
                    "vGave": 1240,
                    "sin": {
                        "seconds": 1648672299,
                        "nanoseconds": 867000000
                    },
                    "cat": "food_and_beverages",
                    "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                    "shareUrlP1": "https://refrclub.com/o/EncD",
                    "shareUrlB1": "https://refrclub.com/o/4Yif",
                    "email": "dipeshbhoir@hotmail.com",
                    "vEarn": 24000,
                    "upd": {
                        "seconds": 1664544116,
                        "nanoseconds": 946000000
                    },
                    "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                    "typeORDER": {
                        "nationCharge": 0,
                        "cityCharge": 0,
                        "phoneHide": true,
                        "delivery": "Nationwide",
                        "freeStart": 0,
                        "logistics": false,
                        "return": false,
                        "exchange": false,
                        "freeParcel": false,
                        "COD": true,
                        "refund": false
                    },
                    "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                    "schedule": {
                        "openThuS": "06:00",
                        "openFriS": "06:00",
                        "openFri": true,
                        "opensDailyS": "10:00",
                        "openSun": false,
                        "openTueE": "19:00",
                        "openTue": true,
                        "openFriE": "19:00",
                        "openSat": true,
                        "opensDailyE": "23:00",
                        "openSunE": "19:00",
                        "openMonS": "09:00",
                        "openThuE": "19:00",
                        "opensDaily": false,
                        "openWedE": "19:00",
                        "openWed": true,
                        "openWedS": "06:00",
                        "openSatE": "19:00",
                        "openSunS": "06:00",
                        "openMonE": "19:00",
                        "openMon": true,
                        "openTueS": "06:00",
                        "openThu": true,
                        "openSatS": "06:00"
                    },
                    "userInfo": {
                        "storeLoc": [
                            "8B9ozj7aTPvywkIvVWiK"
                        ],
                        "acBalP": 0,
                        "acBalVp": 16000,
                        "note": [],
                        "BankUPI": {
                            "verified": true,
                            "address": "dipesious@dbs",
                            "active": true,
                            "username": "dipesious",
                            "fund_account_id": "fa_K9hVBLRtX776iF",
                            "contact_id": "cont_K9KglWSOWnTNTY",
                            "handle": "dbs"
                        },
                        "soTW": "dip",
                        "display": "",
                        "coin": "INR",
                        "storeSav": [
                            "8B9ozj7aTPvywkIvVWiK",
                            "tjOyZV9TVTpQ1hoccOYB"
                        ],
                        "payout": false,
                        "soIG": "dipesious",
                        "cashback": 80,
                        "soYT": "simran",
                        "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                        "storeCam": [
                            "2GHohG0jEfELHb30c1s7",
                            "i9MvNIRSZEpyhp05UIws",
                            "b8fHqM0fyh3EJfGARu3B",
                            "69Hf6TISpLg3SDwpYyKy",
                            "2VS4N7OkRrM5pHfwCNuV",
                            "GBJPmnJ4Q1oA1ynW1brZ",
                            "rDeB5DwD97Ff1NpLzFdj",
                            "vJEzPDAJ5koqdbGa7k0N",
                            "PJcK0Xh43tLpR44xtB6J",
                            "FkvmAw4pKGhcSrFULyG2",
                            "dLclMuk5iBysJvOoWRKi",
                            "ZPkNWVk1trHm3b8GBr4F",
                            "iWIXIPHAiDIiA9Euexst",
                            "SBV6Jpa7a2844xyTxDEO",
                            "1igU0j5Cxxah1ZzYW0oT",
                            "OgkREW5oDc40YO1psg6q",
                            "6YEVFDcrnwwGKc4IRPqX",
                            "qc1ymcPpmQ8yEhHM8zLt",
                            "2bwi1jsjci7YySD6FWHi",
                            "x605L2J7JyTzfmtgFL7M",
                            "TyWGWqQiOSEG0f4XSGju",
                            "yKTiNocUlsW92jUlr0P1",
                            "XQBQVol6L4AFU0wdRluS",
                            "tt5W2R17MPqrjJA7azDi",
                            "NhtKi3RTN2dLVzcH2hSu",
                            "dO3WaZ05d3hBgnlt0Fj2",
                            "sB3sHKwlhmqpkVPm2M1F",
                            "bSOHjFq1z3di0kl7tDOK",
                            "fjkXn0gPGux5uYQADX6v",
                            "Muj3jGOZ7jOWeELzLe0Y",
                            "5kaSYObDf7s1pRxvqp0s",
                            "d3Kcq7I3sCdzWMPgD9Rm",
                            "9e64iZ7UQ538nKB285XT",
                            "IpQwjUjBAJW8eyMSDDWp",
                            "xdiMTvN28RncaBT5HHms",
                            "nRtRMxxicFvlARWiSR8y",
                            "w4ELXiJiAiPY4RodAz7o",
                            "78SEsrN2FWWM1NCSzRfk",
                            "IzSNW9mwHpHHyZ6C9cAD"
                        ],
                        "acBalGivenC": 180,
                        "phone": "+919876543210",
                        "log": {
                            "seconds": 1648670306,
                            "nanoseconds": 23000000
                        },
                        "tokenSNS_": [
                            "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
                            "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
                            "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
                            "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
                            "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
                            "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
                            "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
                            "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
                            "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
                            "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
                            "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
                            "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
                            "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
                            "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
                            "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
                            "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
                            "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
                        ],
                        "email": "dipesious@hotmail.com",
                        "bucket": [
                            "6cZGYy20f5boFbbsXtYB",
                            "qqMPDmqy0o01YiiIYqaE",
                            "kxczduUeyyYUvoCyLvnO",
                            "6uhvn2NoTtN8ONPuM2qj"
                        ],
                        "acBalVr": 891.55,
                        "acBalCr": 20,
                        "soFB": "dip",
                        "iso": "IND",
                        "ban": false,
                        "sin": {
                            "seconds": 1648670306,
                            "nanoseconds": 23000000
                        },
                        "axess": [
                            "phone"
                        ],
                        "emailV": false,
                        "name": "Dipeshin",
                        "acBalV": 4567.523859999997,
                        "emails": [],
                        "acBalC": 208.14999999999998,
                        "addr": [
                            {
                                "landmark": "xyz",
                                "zip": 401101,
                                "address": "abc",
                                "type": "work"
                            },
                            {
                                "landmark": "Tower",
                                "address": "Google",
                                "zip": 401101,
                                "type": "home"
                            },
                            {
                                "landmark": "Opposite gagandeep restaurant ",
                                "address": "101, Leena residence gulmohar road miraj",
                                "type": "other",
                                "zip": 400056
                            },
                            {
                                "zip": 400049,
                                "type": "other",
                                "landmark": "Opposite naturals ",
                                "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme "
                            }
                        ],
                        "acBalH": 695,
                        "admin": true,
                        "upd": {
                            "seconds": 1665263257,
                            "nanoseconds": 854000000
                        },
                        "soWA": "9876543210",
                        "acBalGivenV": 1000,
                        "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
                    },
                    "addedDynamicLinkP1": true,
                    "banners": [
                        "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
                    ],
                    "phone": "9876543210",
                    "shareUrlV1": "https://refrclub.com/o/tobR",
                    "vAte": 151.2,
                    "vFan": 21,
                    "products": 18,
                    "name": "Fit Food",
                    "type": "Both",
                    "cashback": 80,
                    "addedDynamicLink": true,
                    "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
                    "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
                },
                "variants": [
                    {
                        "name": "#ffff00",
                        "type": "palete"
                    },
                    {
                        "name": "#ff0000",
                        "type": "palete"
                    },
                    {
                        "name": "#008000",
                        "type": "palete"
                    },
                    {
                        "name": "Cotton",
                        "type": "material"
                    },
                    {
                        "type": "size",
                        "name": "XL"
                    },
                    {
                        "name": "XS",
                        "type": "size"
                    },
                    {
                        "name": "S",
                        "type": "size"
                    },
                    {
                        "type": "size",
                        "name": "M"
                    }
                ],
                "burnDec": "Activewear, anywhere. All-weather comfort and the freedom to move. Jogging, stretching, or chasing dreams, yourfitted tee won’t let you down.  With light fabric that keeps you cool and dry, this round neck T-shirt is soft, with raglan sleeves for advanced flexibility. Your exercise essential, everyone’s absolute favorite.",
                "burnCatSub": "Nope",
                "burnCat": "fashion_and_accessories",
                "burnBrand": "Fit Food",
                "reqBurn": false,
                "code": "123456",
                "title": "New Product",
                "price": 200,
                "relate": [],
                "Q": 1,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "vX": [
                    {
                        "countQ": 1,
                        "nowVarient": [
                            {
                                "type": "palete",
                                "name": "#ff0000"
                            },
                            {
                                "type": "material",
                                "name": "Cotton"
                            },
                            {
                                "type": "size",
                                "name": "XS"
                            }
                        ],
                        "id": "uWQXKBUU0IvPs419RV9O"
                    }
                ],
                "description": "Cotton T-shirt, Crease free",
                "burnHigh": "Moisture-wicking\nWrinkle resistant\nPure Quick Dry Fabric",
                "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1659688665932?alt=media&token=52307c86-9780-4f91-8d01-df66d0567222",
                "content": false,
                "burnPics": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1659688665932?alt=media&token=52307c86-9780-4f91-8d01-df66d0567222"
                ],
                "upd": {
                    "seconds": 1662623385,
                    "nanoseconds": 358000000
                },
                "costBurn": 90,
                "id": "uWQXKBUU0IvPs419RV9O",
                "sin": {
                    "seconds": 1648679682,
                    "nanoseconds": 333000000
                },
                "cost": 100,
                "flash": false,
                "burnDecShort": "Cotton T-shirt, Crease free",
                "burn": true,
                "category": "some category"
            }
        ],
        "setShortID": true,
        "amBurst": 100,
        "com": {
            "seconds": 1665533290,
            "nanoseconds": 374000000
        },
        "amRefr": 7.000000000000001,
        "storeName": "Fit Food",
        "amTotal": 105,
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "storeORDER",
            "clientAc",
            "addORDER",
            "BURN",
            null
        ],
        "upd": {
            "seconds": 1665533290,
            "nanoseconds": 374000000
        },
        "userName": "Dipeshin",
        "sin": {
            "seconds": 1665533290,
            "nanoseconds": 374000000
        },
        "amParcel": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "refr": null,
        "logistics": {
            "email": "dipesious@hotmail.com",
            "PnD_nationCharge": 0,
            "typeSuCat": "sc-food_and_beverages-cafe",
            "addressDropT": "work",
            "addressPickT": "shop",
            "typeCat": "food_and_beverages",
            "require": false,
            "PnD_parcelNotFree": false,
            "addressDrop": {
                "address": "abc",
                "landmark": "xyz",
                "zip": 401101,
                "type": "work"
            },
            "phone": "9876543210",
            "status": 0,
            "typeShop": "Both",
            "PnD_freeStart": 0,
            "typeOrdr": "BURN",
            "addressPick": {
                "id": "IND_MH_1648672299398",
                "lon": 72.83105909999999,
                "state": "MH",
                "nation": "IND",
                "line1": "Dipesadsadas sadasdas",
                "city": "Mumbai Suburban",
                "area": "Dent Heal",
                "line2": "",
                "region": "Maharashtra",
                "lat": 19.0662066,
                "zip": "400050",
                "locality": "Mumbai"
            },
            "PnD_cityCharge": 0,
            "name": "Dipeshin"
        },
        "amParcelCity": false,
        "code": null,
        "id": "9DFRpImFtCgGQ9kjK4Gu",
        "amSave": 205,
        "camp": null,
        "shortID": "A000Mr",
        "amTaxTCS": 1,
        "amTaxTDS": 0,
        "ordrTYPE": "RefrCASH",
        "journey": "BURN",
        "earn": 0,
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "amSale": 200
    },
    {
        "amBurst": 747,
        "upd": {
            "seconds": 1665532254,
            "nanoseconds": 6000000
        },
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "logistics": {
            "email": "dipesious@hotmail.com",
            "require": false,
            "typeOrdr": "DIRECT_ONLINE",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "addressDropT": "work",
            "addressDrop": {
                "zip": 401101,
                "landmark": "xyz",
                "type": "work",
                "address": "abc"
            },
            "typeShop": "Both",
            "typeCat": "food_and_beverages",
            "PnD_cityCharge": 0,
            "name": "Dipeshin",
            "status": 0,
            "phone": "9876543210",
            "addressPickT": "shop",
            "PnD_nationCharge": 0,
            "PnD_parcelNotFree": false,
            "addressPick": {
                "locality": "Mumbai",
                "area": "Dent Heal",
                "region": "Maharashtra",
                "nation": "IND",
                "zip": "400050",
                "line1": "Dipesadsadas sadasdas",
                "city": "Mumbai Suburban",
                "state": "MH",
                "id": "IND_MH_1648672299398",
                "lat": 19.0662066,
                "lon": 72.83105909999999,
                "line2": ""
            },
            "PnD_freeStart": 0
        },
        "com": {
            "seconds": 1665532254,
            "nanoseconds": 6000000
        },
        "amParcelCity": false,
        "amGateway": 0,
        "amTax": 37.35,
        "setShortID": true,
        "amTotal": 784.35,
        "userName": "Dipeshin",
        "amParcel": 0,
        "shortID": "A000Mn",
        "camp": {
            "stoped": false,
            "paused": false,
            "cbExi": 50,
            "customAct": false,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "dateS": {
                "seconds": 1662921000,
                "nanoseconds": 0
            },
            "paid": false,
            "tX": "t1",
            "countS": 0,
            "type": "flat",
            "customPay": 0,
            "expiry": false,
            "cbNew": 100,
            "upd": {
                "seconds": 1662190042,
                "nanoseconds": 807000000
            },
            "min": 600,
            "ban": false,
            "stage": 0,
            "countP": 0,
            "countM": 0,
            "sin": {
                "seconds": 1662190042,
                "nanoseconds": 807000000
            },
            "id": "78SEsrN2FWWM1NCSzRfk",
            "max": 0,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "storeTyp": "Both",
            "cbDir": 20,
            "dateE": {
                "seconds": 1666204200,
                "nanoseconds": 0
            },
            "name": "Flash Deal"
        },
        "cart": [
            {
                "title": "Dal Tadka ",
                "vX": [],
                "price": 299,
                "cost": 249,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "sin": {
                    "seconds": 1656594533,
                    "nanoseconds": 801000000
                },
                "reqBurn": false,
                "Q": 1,
                "code": "21069099",
                "upd": {
                    "seconds": 1656595043,
                    "nanoseconds": 979000000
                },
                "variants": [],
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "burn": false,
                "content": true,
                "id": "h25O95gX19QwOYWqprXx",
                "quota": 0,
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fh25O95gX19QwOYWqprXx1656595042885?alt=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb"
                ],
                "warranty": true,
                "sold": 0,
                "description": "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
                "category": "Dal"
            },
            {
                "content": true,
                "variants": [],
                "category": "Paneer",
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "Q": 1,
                "sold": 0,
                "code": "0406",
                "title": "Paneer Butter Masala ",
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fojgm1JXri2o54qR0fVlw1656595095219?alt=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948"
                ],
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "sin": {
                    "seconds": 1656594838,
                    "nanoseconds": 139000000
                },
                "warranty": true,
                "price": 299,
                "cost": 249,
                "quota": 0,
                "reqBurn": false,
                "description": "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
                "vX": [],
                "burn": false,
                "upd": {
                    "seconds": 1656595096,
                    "nanoseconds": 333000000
                },
                "id": "ojgm1JXri2o54qR0fVlw"
            },
            {
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1656595149710?alt=media&token=5fe88fd3-c22a-4aef-858d-a37e74b01496",
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907519289?alt=media&token=251cca35-dcff-4b40-a1ea-0b61871dd3fd",
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907535340?alt=media&token=f2398da4-28f3-4d10-9dd6-fbf3f9fb1999",
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907558667?alt=media&token=424c6593-6080-4639-989e-6f53e480a54e"
                ],
                "variants": [],
                "id": "vp92P8ftA5QcPWJ4KmGA",
                "upd": {
                    "seconds": 1658907561,
                    "nanoseconds": 363000000
                },
                "sin": {
                    "seconds": 1656594957,
                    "nanoseconds": 592000000
                },
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "reqBurn": false,
                "code": "0406",
                "vX": [],
                "price": 299,
                "cost": 249,
                "description": "his spicy and tasty mixed vegetable based dish has its origin in kolhapur, a historical city in south maharashtra. Kolhapuri cuisine is known for its hot, spicy and pungent flavors. however, not all the food from the Kolhapuri cuisine is spicy & robust.",
                "category": "Kolhapuri",
                "content": true,
                "title": "Veg Kolhapuri",
                "Q": 1,
                "sold": 0,
                "quota": 0,
                "warranty": true,
                "burn": false
            }
        ],
        "amSale": 897,
        "journey": "DIRECT",
        "amSave": 934.35,
        "amRefr": 0,
        "status": 0,
        "code": null,
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "storeName": "Fit Food",
        "earn": 20,
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "DIRECT"
        ],
        "refr": null,
        "sin": {
            "seconds": 1665532254,
            "nanoseconds": 6000000
        },
        "invoice": {
            "useRefrCash": true,
            "amtRefrCash": 784.35,
            "COD": false
        },
        "ordrTYPE": "RefrCASH",
        "amTaxTCS": 7.47,
        "id": "NRgZuFPyIRUJUnJE4Oz1",
        "amCost": 0,
        "amTaxTDS": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
    },
    {
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "com": {
            "seconds": 1665530773,
            "nanoseconds": 293000000
        },
        "amCost": 0,
        "amTaxTDS": 0,
        "amTaxTCS": 0.05,
        "amSave": 10.25,
        "amRefr": 0,
        "shortID": "A000Ml",
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "userName": "Dipeshin",
        "code": null,
        "cart": [
            {
                "category": "Dal",
                "Q": 1,
                "cost": 5,
                "vX": [],
                "quota": 0,
                "code": "123123123123",
                "content": true,
                "description": "rice",
                "reqBurn": false,
                "warranty": true,
                "id": "AH1YkgZwvrKZo1zcuDN9",
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "upd": {
                    "seconds": 1664607617,
                    "nanoseconds": 932000000
                },
                "variants": [],
                "price": 10,
                "title": "fried rice",
                "burn": false,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
                ],
                "sin": {
                    "seconds": 1664607562,
                    "nanoseconds": 148000000
                },
                "sold": 0
            }
        ],
        "amBurst": 5,
        "amTotal": 5.25,
        "amSale": 10,
        "setShortID": true,
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "DIRECT"
        ],
        "journey": "DIRECT",
        "camp": {
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "paid": false,
            "storeTyp": "Both",
            "min": 1200,
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "max": 0,
            "countS": 0,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "ban": false,
            "paused": false,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "countM": 0,
            "cbDir": 40,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "cbNew": 80,
            "tX": "t1",
            "stage": 0,
            "countP": 0,
            "name": "Campaign-39",
            "type": "flat",
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "customAct": false,
            "expiry": false,
            "cbExi": 30,
            "stoped": false,
            "customPay": 0,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            }
        },
        "sin": {
            "seconds": 1665530773,
            "nanoseconds": 293000000
        },
        "refr": null,
        "status": 0,
        "ordrTYPE": "RefrCASH",
        "upd": {
            "seconds": 1665530773,
            "nanoseconds": 293000000
        },
        "logistics": {
            "typeCat": "food_and_beverages",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "addressPickT": "shop",
            "typeOrdr": "DIRECT_ONLINE",
            "typeShop": "Both",
            "addressDrop": {
                "address": "abc",
                "landmark": "xyz",
                "type": "work",
                "zip": 401101
            },
            "email": "dipesious@hotmail.com",
            "addressDropT": "work",
            "PnD_nationCharge": 0,
            "name": "Dipeshin",
            "phone": "9876543210",
            "status": 0,
            "PnD_cityCharge": 0,
            "PnD_parcelNotFree": false,
            "require": false,
            "PnD_freeStart": 0,
            "addressPick": {
                "lat": 19.0662066,
                "area": "Dent Heal",
                "region": "Maharashtra",
                "city": "Mumbai Suburban",
                "state": "MH",
                "lon": 72.83105909999999,
                "nation": "IND",
                "locality": "Mumbai",
                "line1": "Dipesadsadas sadasdas",
                "line2": "",
                "id": "IND_MH_1648672299398",
                "zip": "400050"
            }
        },
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "id": "e4lg66IxzeHvprkDbomm",
        "earn": 0,
        "amParcelCity": false,
        "amParcel": 0,
        "storeName": "Fit Food",
        "amTax": 0.25,
        "invoice": {
            "useRefrCash": true,
            "amtRefrCash": 5.25,
            "COD": false
        },
        "amGateway": 0
    },
    {
        "upd": {
            "seconds": 1665530659,
            "nanoseconds": 730000000
        },
        "camp": {
            "countP": 0,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "expiry": false,
            "paid": false,
            "cbDir": 40,
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "customPay": 0,
            "stoped": false,
            "customAct": false,
            "countS": 0,
            "cbExi": 30,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "storeTyp": "Both",
            "tX": "t1",
            "name": "Campaign-39",
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "min": 1200,
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "countM": 0,
            "paused": false,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "ban": false,
            "type": "flat",
            "cbNew": 80,
            "max": 0,
            "stage": 0,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
        },
        "code": null,
        "refr": null,
        "status": 0,
        "amTax": 0.25,
        "ordrTYPE": "RefrCASH",
        "amParcelCity": false,
        "amTaxTDS": 0,
        "logistics": {
            "typeSuCat": "sc-food_and_beverages-cafe",
            "PnD_freeStart": 0,
            "email": "dipesious@hotmail.com",
            "addressPickT": "shop",
            "typeCat": "food_and_beverages",
            "require": false,
            "addressDrop": {
                "landmark": "xyz",
                "address": "abc",
                "zip": 401101,
                "type": "work"
            },
            "PnD_nationCharge": 0,
            "typeShop": "Both",
            "addressPick": {
                "state": "MH",
                "lat": 19.0662066,
                "locality": "Mumbai",
                "city": "Mumbai Suburban",
                "lon": 72.83105909999999,
                "zip": "400050",
                "nation": "IND",
                "id": "IND_MH_1648672299398",
                "area": "Dent Heal",
                "line1": "Dipesadsadas sadasdas",
                "line2": "",
                "region": "Maharashtra"
            },
            "PnD_parcelNotFree": false,
            "typeOrdr": "DIRECT_ONLINE",
            "addressDropT": "work",
            "name": "Dipeshin",
            "status": 0,
            "PnD_cityCharge": 0,
            "phone": "9876543210"
        },
        "amBurst": 5,
        "sin": {
            "seconds": 1665530659,
            "nanoseconds": 730000000
        },
        "userName": "Dipeshin",
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "DIRECT"
        ],
        "earn": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "com": {
            "seconds": 1665530659,
            "nanoseconds": 730000000
        },
        "setShortID": true,
        "shortID": "A000Mj",
        "invoice": {
            "COD": false,
            "amtRefrCash": 5.25,
            "useRefrCash": true
        },
        "amSave": 10.25,
        "amTaxTCS": 0.05,
        "amSale": 10,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "storeName": "Fit Food",
        "amParcel": 0,
        "id": "n9hnNYrreYnkqla0C3Qd",
        "amGateway": 0,
        "amTotal": 5.25,
        "amRefr": 0,
        "cart": [
            {
                "vX": [],
                "title": "fried rice",
                "reqBurn": false,
                "sin": {
                    "seconds": 1664607562,
                    "nanoseconds": 148000000
                },
                "warranty": true,
                "cost": 5,
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
                ],
                "code": "123123123123",
                "variants": [],
                "price": 10,
                "burn": false,
                "id": "AH1YkgZwvrKZo1zcuDN9",
                "Q": 1,
                "description": "rice",
                "content": true,
                "upd": {
                    "seconds": 1664607617,
                    "nanoseconds": 932000000
                },
                "category": "Dal",
                "quota": 0,
                "sold": 0,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
            }
        ],
        "amCost": 0,
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "journey": "DIRECT"
    },
    {
        "setShortID": true,
        "amCost": 0,
        "status": 10,
        "refr": null,
        "camp": {
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "type": "flat",
            "stage": 0,
            "cbExi": 30,
            "max": 0,
            "ban": false,
            "expiry": false,
            "storeTyp": "Both",
            "countM": 0,
            "customPay": 0,
            "paused": false,
            "stoped": false,
            "countP": 0,
            "customAct": false,
            "min": 1200,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "tX": "t1",
            "countS": 0,
            "paid": false,
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "cbDir": 40,
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "cbNew": 80,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "name": "Campaign-39"
        },
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "code": null,
        "amParcelCity": false,
        "userName": "Dipeshin",
        "id": "Xqui1Pa3ghP3XyKMsmk5",
        "logistics": {
            "PnD_cityCharge": 0,
            "addressDrop": {
                "zip": 400056,
                "address": "101, Leena residence gulmohar road miraj",
                "landmark": "Opposite gagandeep restaurant ",
                "type": "other"
            },
            "typeShop": "Both",
            "typeCat": "food_and_beverages",
            "email": "dipesious@hotmail.com",
            "addressPickT": "shop",
            "typeOrdr": "DIRECT_ONLINE",
            "addressPick": {
                "city": "Mumbai Suburban",
                "nation": "IND",
                "lat": 19.0662066,
                "line1": "Dipesadsadas sadasdas",
                "id": "IND_MH_1648672299398",
                "region": "Maharashtra",
                "lon": 72.83105909999999,
                "area": "Dent Heal",
                "zip": "400050",
                "state": "MH",
                "locality": "Mumbai",
                "line2": ""
            },
            "typeSuCat": "sc-food_and_beverages-cafe",
            "name": "Dipeshin",
            "PnD_parcelNotFree": false,
            "phone": "9876543210",
            "PnD_nationCharge": 0,
            "addressDropT": "work",
            "PnD_freeStart": 0,
            "require": false,
            "status": 20
        },
        "com": {
            "seconds": 1665489728,
            "nanoseconds": 701000000
        },
        "amTax": 0.5,
        "amRefr": 0,
        "storeName": "Fit Food",
        "amTaxTCS": 0.1,
        "amBurst": 10,
        "amGateway": 0,
        "ordrTYPE": "RefrCASH",
        "amSale": 20,
        "earn": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amSave": 20.5,
        "amTaxTDS": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "type": [
            "RefrCASH",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "DIRECT"
        ],
        "cart": [
            {
                "sin": {
                    "seconds": 1662754531,
                    "nanoseconds": 334000000
                },
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "warranty": false,
                "id": "s15R9CsWGf0DjDkGRwfV",
                "quota": 0,
                "sold": 0,
                "content": true,
                "Q": 1,
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                ],
                "description": "elo",
                "upd": {
                    "seconds": 1664434855,
                    "nanoseconds": 40000000
                },
                "category": "some category",
                "title": "Abcd",
                "reqBurn": false,
                "code": "Some Hsn",
                "vX": [
                    {
                        "id": "s15R9CsWGf0DjDkGRwfV",
                        "countQ": 1,
                        "nowVarient": [
                            {
                                "type": "palete",
                                "name": "#ff0000"
                            },
                            {
                                "name": "Xl",
                                "type": "size"
                            },
                            {
                                "name": "#123123",
                                "type": "color"
                            }
                        ]
                    },
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
                    },
                    {
                        "countQ": 1,
                        "nowVarient": [
                            {
                                "type": "palete",
                                "name": "#ff0000"
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
                        "id": "s15R9CsWGf0DjDkGRwfV"
                    },
                    {
                        "countQ": 1,
                        "nowVarient": [
                            {
                                "type": "palete",
                                "name": "#ff0000"
                            },
                            {
                                "name": "Xl",
                                "type": "size"
                            },
                            {
                                "type": "color",
                                "name": "#333"
                            }
                        ],
                        "id": "s15R9CsWGf0DjDkGRwfV"
                    },
                    {
                        "countQ": 1,
                        "id": "s15R9CsWGf0DjDkGRwfV",
                        "nowVarient": [
                            {
                                "type": "palete",
                                "name": "#ff0000"
                            },
                            {
                                "type": "size",
                                "name": "Xl"
                            },
                            {
                                "name": "#123123",
                                "type": "color"
                            }
                        ]
                    }
                ],
                "cost": 10,
                "variants": [
                    {
                        "type": "size",
                        "name": "Xl"
                    },
                    {
                        "name": "#ff0000",
                        "type": "palete"
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
                "burn": false,
                "price": 20,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
            }
        ],
        "shortID": "A000Lw",
        "upd": {
            "seconds": 1664463471,
            "nanoseconds": 646000000
        },
        "journey": "DIRECT",
        "amTotal": 10.5,
        "invoice": {
            "useRefrCash": true,
            "COD": false,
            "amtRefrCash": 10.5
        },
        "sin": {
            "seconds": 1664463471,
            "nanoseconds": 646000000
        },
        "amParcel": 0
    },
    {
        "type": [
            "RefrCASH",
            "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A0001c"
        ],
        "by": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
        "amSave": 20.5,
        "camp": {
            "expiry": false,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "countP": 0,
            "max": 0,
            "paused": false,
            "cbExi": 30,
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            },
            "ban": false,
            "countS": 0,
            "countM": 0,
            "cbNew": 80,
            "cbDir": 40,
            "tX": "t1",
            "customPay": 0,
            "name": "Campaign-39",
            "paid": false,
            "type": "flat",
            "stage": 0,
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "storeTyp": "Both",
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "min": 1200,
            "customAct": false,
            "stoped": false,
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            }
        },
        "com": {
            "seconds": 1665489726,
            "nanoseconds": 253000000
        },
        "amSale": 20,
        "storeName": "Fit Food",
        "earn": 0,
        "code": "A0001c",
        "amTax": 0.5,
        "upd": {
            "seconds": 1664463753,
            "nanoseconds": 571000000
        },
        "invoice": {
            "amtRefrCash": 10.5,
            "useRefrCash": true,
            "COD": false
        },
        "id": "S84Zu5UcBchXhBQQxgfa",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amTotal": 10.5,
        "amTaxTDS": 0,
        "amBurst": 10,
        "status": 10,
        "amTaxTCS": 0.1,
        "userName": "Rohan",
        "refr": {
            "earn": 0,
            "name": "Roshan",
            "uid": "a45fWFfduyg8Z8dSn6kkQWtkaZl1"
        },
        "amGateway": 0,
        "logistics": {
            "name": "Rohan",
            "addressPick": {
                "locality": "Mumbai",
                "zip": "400050",
                "region": "Maharashtra",
                "nation": "IND",
                "area": "Dent Heal",
                "lat": 19.0662066,
                "city": "Mumbai Suburban",
                "line1": "Dipesadsadas sadasdas",
                "lon": 72.83105909999999,
                "state": "MH",
                "id": "IND_MH_1648672299398",
                "line2": ""
            },
            "require": false,
            "typeShop": "Both",
            "PnD_nationCharge": 0,
            "email": "",
            "typeCat": "food_and_beverages",
            "PnD_freeStart": 0,
            "typeOrdr": "F2F_ONLINE",
            "PnD_cityCharge": 0,
            "phone": "7208256169",
            "typeSuCat": "sc-food_and_beverages-cafe",
            "PnD_parcelNotFree": false,
            "addressPickT": "shop",
            "addressDropT": "home",
            "status": 20,
            "addressDrop": {
                "landmark": "Leena",
                "type": "home",
                "zip": 400056,
                "address": "101"
            }
        },
        "amRefr": 0,
        "ordrTYPE": "RefrCASH",
        "amParcel": 0,
        "setShortID": true,
        "amParcelCity": false,
        "shortID": "A000Lx",
        "journey": "F2F",
        "amCost": 0,
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "cart": [
            {
                "id": "s15R9CsWGf0DjDkGRwfV",
                "sold": 0,
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
                        "name": "#333",
                        "type": "color"
                    },
                    {
                        "type": "color",
                        "name": "#123123"
                    }
                ],
                "burn": false,
                "sin": {
                    "seconds": 1662754531,
                    "nanoseconds": 334000000
                },
                "category": "some category",
                "vX": [
                    {
                        "nowVarient": [
                            {
                                "type": "palete",
                                "name": "#ff0000"
                            },
                            {
                                "name": "Xl",
                                "type": "size"
                            },
                            {
                                "type": "color",
                                "name": "#333"
                            }
                        ],
                        "countQ": 1,
                        "id": "s15R9CsWGf0DjDkGRwfV"
                    }
                ],
                "upd": {
                    "seconds": 1664434855,
                    "nanoseconds": 40000000
                },
                "quota": 0,
                "price": 20,
                "code": "Some Hsn",
                "Q": 1,
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                ],
                "reqBurn": false,
                "content": true,
                "description": "elo",
                "cost": 10,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "title": "Abcd",
                "warranty": false
            }
        ],
        "sin": {
            "seconds": 1664463753,
            "nanoseconds": 571000000
        }
    },
    {
        "amTax": 0.5,
        "status": 10,
        "amTaxTDS": 0,
        "amCost": 0,
        "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "journey": "F2F",
        "setShortID": true,
        "userName": "Rohan",
        "amParcelCity": false,
        "amGateway": 0,
        "sin": {
            "seconds": 1664463808,
            "nanoseconds": 190000000
        },
        "amParcel": 0,
        "by": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
        "upd": {
            "seconds": 1664463808,
            "nanoseconds": 190000000
        },
        "shortID": "A000Lv",
        "earn": 0,
        "storeName": "Fit Food",
        "invoice": {
            "amtRefrCash": 10.5,
            "useRefrCash": true,
            "COD": false
        },
        "ordrTYPE": "RefrCASH",
        "amSave": 20.5,
        "amSale": 20,
        "cart": [
            {
                "description": "elo",
                "reqBurn": false,
                "quota": 0,
                "sin": {
                    "seconds": 1662754531,
                    "nanoseconds": 334000000
                },
                "id": "s15R9CsWGf0DjDkGRwfV",
                "warranty": false,
                "vX": [
                    {
                        "nowVarient": [
                            {
                                "type": "palete",
                                "name": "#ff0000"
                            },
                            {
                                "type": "size",
                                "name": "Xl"
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
                "Q": 1,
                "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                "banners": [
                    "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                ],
                "category": "some category",
                "cost": 10,
                "code": "Some Hsn",
                "price": 20,
                "sid": "8B9ozj7aTPvywkIvVWiK",
                "burn": false,
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
                        "name": "#333",
                        "type": "color"
                    },
                    {
                        "name": "#123123",
                        "type": "color"
                    }
                ],
                "content": true,
                "sold": 0,
                "title": "Abcd",
                "upd": {
                    "seconds": 1664434855,
                    "nanoseconds": 40000000
                }
            }
        ],
        "id": "wIYztcNdH3RIqjgvEt4L",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "amBurst": 10,
        "type": [
            "RefrCASH",
            "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
            "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "8B9ozj7aTPvywkIvVWiK",
            "addORDER",
            "storeORDER",
            "clientAc",
            "F2F",
            "A0001c"
        ],
        "logistics": {
            "addressDropT": "home",
            "PnD_parcelNotFree": false,
            "typeShop": "Both",
            "addressPickT": "shop",
            "addressDrop": {
                "landmark": "Leena",
                "zip": 400056,
                "type": "home",
                "address": "101"
            },
            "addressPick": {
                "area": "Dent Heal",
                "region": "Maharashtra",
                "line2": "",
                "nation": "IND",
                "line1": "Dipesadsadas sadasdas",
                "locality": "Mumbai",
                "city": "Mumbai Suburban",
                "id": "IND_MH_1648672299398",
                "state": "MH",
                "lat": 19.0662066,
                "zip": "400050",
                "lon": 72.83105909999999
            },
            "status": 20,
            "PnD_cityCharge": 0,
            "typeOrdr": "F2F_ONLINE",
            "require": false,
            "typeCat": "food_and_beverages",
            "PnD_freeStart": 0,
            "typeSuCat": "sc-food_and_beverages-cafe",
            "phone": "7208256169",
            "name": "Rohan",
            "PnD_nationCharge": 0,
            "email": ""
        },
        "code": "A0001c",
        "amTotal": 10.5,
        "refr": {
            "name": "Roshan",
            "uid": "a45fWFfduyg8Z8dSn6kkQWtkaZl1",
            "earn": 0
        },
        "amTaxTCS": 0.1,
        "camp": {
            "stage": 0,
            "cbExi": 30,
            "countP": 0,
            "countS": 0,
            "expiry": false,
            "upd": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "min": 1200,
            "storeTyp": "Both",
            "max": 0,
            "customPay": 0,
            "customAct": false,
            "paused": false,
            "sin": {
                "seconds": 1663417144,
                "nanoseconds": 438000000
            },
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "dateE": {
                "seconds": 1672425000,
                "nanoseconds": 0
            },
            "cbDir": 40,
            "tX": "t1",
            "stoped": false,
            "ban": false,
            "cbNew": 80,
            "id": "IzSNW9mwHpHHyZ6C9cAD",
            "paid": false,
            "name": "Campaign-39",
            "countM": 0,
            "type": "flat",
            "sid": "8B9ozj7aTPvywkIvVWiK",
            "dateS": {
                "seconds": 1663353000,
                "nanoseconds": 0
            }
        },
        "com": {
            "seconds": 1665489723,
            "nanoseconds": 909000000
        },
        "amRefr": 0
    }
]
//   [
//     // {
//     //     "journey": "DIRECT",
//     //     "cart": [
//     //         {
//     //             "id": "WdH3xlYAQlgwBkha2EsA",
//     //             "sid": "8B9ozj7aTPvywkIvVWiK",
//     //             "warranty": true,
//     //             "content": true,
//     //             "banners": [],
//     //             "upd": {
//     //                 "seconds": 1664608438,
//     //                 "nanoseconds": 150000000
//     //             },
//     //             "sin": {
//     //                 "seconds": 1664608438,
//     //                 "nanoseconds": 150000000
//     //             },
//     //             "title": "JimJam",
//     //             "reqBurn": false,
//     //             "sold": 0,
//     //             "burn": false,
//     //             "variants": [],
//     //             "Q": 1,
//     //             "quota": 0,
//     //             "vX": [],
//     //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//     //             "price": 5,
//     //             "code": "123123123",
//     //             "category": "chocolate",
//     //             "description": "Chocolate",
//     //             "cost": 1
//     //         }
//     //     ],
//     //     "setShortID": true,
//     //     "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//     //     "com": {
//     //         "seconds": 1665618040,
//     //         "nanoseconds": 380000000
//     //     },
//     //     "amTaxTCS": 0.01,
//     //     "amGateway": 0,
//     //     "amSave": 5.05,
//     //     "amTotal": 1.05,
//     //     "amTax": 0.05,
//     //     "type": [
//     //         "RefrCASH",
//     //         "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//     //         "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//     //         "8B9ozj7aTPvywkIvVWiK",
//     //         "addORDER",
//     //         "storeORDER",
//     //         "clientAc",
//     //         "DIRECT"
//     //     ],
//     //     "status": 0,
//     //     "id": "DMePzfw0x0ABaK8mOYhV",
//     //     "refr": null,
//     //     "amRefr": 0,
//     //     "sin": {
//     //         "seconds": 1665618040,
//     //         "nanoseconds": 380000000
//     //     },
//     //     "shortID": "A000Oa",
//     //     "amTaxTDS": 0,
//     //     "camp": {
//     //         "dateS": {
//     //             "seconds": 1665513000,
//     //             "nanoseconds": 0
//     //         },
//     //         "type": "flat",
//     //         "paid": false,
//     //         "customPay": 0,
//     //         "countM": 0,
//     //         "paused": false,
//     //         "sid": "8B9ozj7aTPvywkIvVWiK",
//     //         "min": 50,
//     //         "cbExi": 5,
//     //         "max": 0,
//     //         "cbNew": 10,
//     //         "id": "si4Ba2AAJX8gOmMEX0DI",
//     //         "customAct": false,
//     //         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//     //         "stoped": false,
//     //         "countS": 0,
//     //         "tX": "t1",
//     //         "dateE": {
//     //             "seconds": 1669746600,
//     //             "nanoseconds": 0
//     //         },
//     //         "sin": {
//     //             "seconds": 1665574403,
//     //             "nanoseconds": 533000000
//     //         },
//     //         "name": "Campaign-40",
//     //         "stage": 0,
//     //         "ban": false,
//     //         "storeTyp": "Both",
//     //         "cbDir": 2.5,
//     //         "upd": {
//     //             "seconds": 1665574403,
//     //             "nanoseconds": 533000000
//     //         },
//     //         "expiry": false,
//     //         "countP": 0
//     //     },
//     //     "amCost": 0,
//     //     "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//     //     "code": null,
//     //     "amBurst": 1,
//     //     "userName": "Dipeshin",
//     //     "amParcel": 0,
//     //     "amSale": 5,
//     //     "ordrTYPE": "RefrCASH",
//     //     "invoice": {
//     //         "COD": false,
//     //         "useRefrCash": true,
//     //         "amtRefrCash": 1.05
//     //     },
//     //     "earn": 0,
//     //     "logistics": {
//     //         "email": "dipesious@hotmail.com",
//     //         "addressPickT": "shop",
//     //         "typeShop": "Both",
//     //         "addressDrop": {
//     //             "type": "work",
//     //             "address": "abc",
//     //             "landmark": "xyz",
//     //             "zip": 401101
//     //         },
//     //         "phone": "9876543210",
//     //         "status": 0,
//     //         "typeSuCat": "sc-food_and_beverages-cafe",
//     //         "typeOrdr": "DIRECT_ONLINE",
//     //         "name": "Dipeshin",
//     //         "typeCat": "food_and_beverages",
//     //         "require": true,
//     //         "addressPick": {
//     //             "region": "Maharashtra",
//     //             "lat": 19.0662066,
//     //             "line2": "",
//     //             "id": "IND_MH_1648672299398",
//     //             "locality": "Mumbai",
//     //             "lon": 72.83105909999999,
//     //             "city": "Mumbai Suburban",
//     //             "nation": "IND",
//     //             "zip": "400050",
//     //             "line1": "Dipesadsadas sadasdas",
//     //             "state": "MH",
//     //             "area": "Dent Heal"
//     //         },
//     //         "PnD_parcelNotFree": false,
//     //         "PnD_nationCharge": 0,
//     //         "PnD_freeStart": 0,
//     //         "addressDropT": "work",
//     //         "PnD_cityCharge": 0
//     //     },
//     //     "sid": "8B9ozj7aTPvywkIvVWiK",
//     //     "upd": {
//     //         "seconds": 1665618040,
//     //         "nanoseconds": 380000000
//     //     },
//     //     "amParcelCity": false,
//     //     "storeName": "Fit Food"
//     // },
//     {
//         "status": 0,
//         "storeName": "Fit Food",
//         "amSave": 252.5,
//         "earn": 2.5,
//         "amParcelCity": false,
//         "amBurst": 50,
//         "sin": {
//             "seconds": 1665600007,
//             "nanoseconds": 351000000
//         },
//         "amTax": 2.5,
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "userName": "Aditya",
//         "com": {
//             "seconds": 1665600007,
//             "nanoseconds": 351000000
//         },
//         "amRefr": 0,
//         "amGateway": 0,
//         "logistics": {
//             "PnD_parcelNotFree": false,
//             "require": true,
//             "addressPick": {
//                 "city": "Mumbai Suburban",
//                 "locality": "Mumbai",
//                 "area": "Dent Heal",
//                 "line2": "",
//                 "state": "MH",
//                 "id": "IND_MH_1648672299398",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lon": 72.83105909999999,
//                 "nation": "IND",
//                 "region": "Maharashtra",
//                 "lat": 19.0662066,
//                 "zip": "400050"
//             },
//             "addressDrop": {
//                 "landmark": "Sumeru tower",
//                 "address": "Amrut kunj CHS Sai kunj bhavan G/002 ganesh nagar tisgaon kalyan east",
//                 "zip": 421306,
//                 "type": "home"
//             },
//             "addressDropT": "work",
//             "PnD_nationCharge": 0,
//             "PnD_cityCharge": 0,
//             "addressPickT": "shop",
//             "typeShop": "Both",
//             "status": 0,
//             "PnD_freeStart": 0,
//             "typeOrdr": "DIRECT_ONLINE",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "phone": "8879751140",
//             "name": "Aditya",
//             "typeCat": "food_and_beverages",
//             "email": ""
//         },
//         "amParcel": 0,
//         "amCost": 0,
//         "upd": {
//             "seconds": 1665600007,
//             "nanoseconds": 351000000
//         },
//         "amTaxTDS": 0,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "refr": null,
//         "cart": [
//             {
//                 "banners": [],
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "vX": [],
//                 "title": "JimJam",
//                 "category": "chocolate",
//                 "quota": 0,
//                 "sold": 0,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "price": 5,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "burn": false,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "Q": 50,
//                 "warranty": true,
//                 "code": "123123123",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "description": "Chocolate",
//                 "variants": [],
//                 "content": true,
//                 "cost": 1,
//                 "reqBurn": false
//             }
//         ],
//         "camp": {
//             "ban": false,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "stage": 0,
//             "storeTyp": "Both",
//             "customAct": false,
//             "dateS": {
//                 "seconds": 1665513000,
//                 "nanoseconds": 0
//             },
//             "type": "flat",
//             "name": "Campaign-40",
//             "min": 50,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "countS": 0,
//             "countP": 0,
//             "upd": {
//                 "seconds": 1665574403,
//                 "nanoseconds": 533000000
//             },
//             "tX": "t1",
//             "id": "si4Ba2AAJX8gOmMEX0DI",
//             "cbNew": 10,
//             "customPay": 0,
//             "sin": {
//                 "seconds": 1665574403,
//                 "nanoseconds": 533000000
//             },
//             "cbDir": 2.5,
//             "expiry": false,
//             "countM": 0,
//             "max": 0,
//             "dateE": {
//                 "seconds": 1669746600,
//                 "nanoseconds": 0
//             },
//             "stoped": false,
//             "paused": false,
//             "cbExi": 5,
//             "paid": false
//         },
//         "id": "Q5Olv9oHLv8Ade4xSQy5",
//         "code": null,
//         "ordrTYPE": "RefrCASH",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "journey": "DIRECT",
//         "invoice": {
//             "useRefrCash": true,
//             "amtRefrCash": 52.5,
//             "COD": false
//         },
//         "amTaxTCS": 0.5,
//         "amTotal": 52.5,
//         "shortID": "A000O3",
//         "amSale": 250,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "setShortID": true
//     },
//     {
//         "amRefr": 0,
//         "amParcel": 0,
//         "amTax": 0.05,
//         "journey": "DIRECT",
//         "earn": 0,
//         "amTotal": 1.05,
//         "ordrTYPE": "RefrCASH",
//         "shortID": "A000OY",
//         "id": "ywLoTOAxY7n4sHl7xOMa",
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "setShortID": true,
//         "amTaxTCS": 0.01,
//         "storeName": "Fit Food",
//         "amSave": 5.05,
//         "status": 0,
//         "code": null,
//         "amBurst": 1,
//         "refr": null,
//         "upd": {
//             "seconds": 1665599935,
//             "nanoseconds": 285000000
//         },
//         "amTaxTDS": 0,
//         "amSale": 5,
//         "amCost": 0,
//         "com": {
//             "seconds": 1665599935,
//             "nanoseconds": 285000000
//         },
//         "amParcelCity": false,
//         "logistics": {
//             "addressPick": {
//                 "line1": "Dipesadsadas sadasdas",
//                 "locality": "Mumbai",
//                 "state": "MH",
//                 "region": "Maharashtra",
//                 "line2": "",
//                 "city": "Mumbai Suburban",
//                 "zip": "400050",
//                 "area": "Dent Heal",
//                 "id": "IND_MH_1648672299398",
//                 "lon": 72.83105909999999,
//                 "nation": "IND",
//                 "lat": 19.0662066
//             },
//             "phone": "8879751140",
//             "email": "",
//             "name": "Aditya",
//             "PnD_cityCharge": 0,
//             "require": true,
//             "typeShop": "Both",
//             "addressDropT": "work",
//             "status": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_nationCharge": 0,
//             "addressDrop": {
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "landmark": "Gagandeep bus stop",
//                 "zip": 400056,
//                 "type": "work"
//             },
//             "PnD_parcelNotFree": false,
//             "PnD_freeStart": 0,
//             "typeOrdr": "DIRECT_ONLINE",
//             "typeCat": "food_and_beverages",
//             "addressPickT": "shop"
//         },
//         "cart": [
//             {
//                 "warranty": true,
//                 "quota": 0,
//                 "banners": [],
//                 "burn": false,
//                 "description": "Chocolate",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "Q": 1,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "sold": 0,
//                 "title": "JimJam",
//                 "content": true,
//                 "cost": 1,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "price": 5,
//                 "reqBurn": false,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "variants": [],
//                 "code": "123123123",
//                 "category": "chocolate",
//                 "vX": []
//             }
//         ],
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "sin": {
//             "seconds": 1665599935,
//             "nanoseconds": 285000000
//         },
//         "camp": {
//             "expiry": false,
//             "stage": 0,
//             "storeTyp": "Both",
//             "ban": false,
//             "paid": false,
//             "id": "si4Ba2AAJX8gOmMEX0DI",
//             "cbExi": 5,
//             "countS": 0,
//             "customPay": 0,
//             "paused": false,
//             "dateS": {
//                 "seconds": 1665513000,
//                 "nanoseconds": 0
//             },
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "cbDir": 2.5,
//             "tX": "t1",
//             "dateE": {
//                 "seconds": 1669746600,
//                 "nanoseconds": 0
//             },
//             "cbNew": 10,
//             "min": 50,
//             "countP": 0,
//             "customAct": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "countM": 0,
//             "upd": {
//                 "seconds": 1665574403,
//                 "nanoseconds": 533000000
//             },
//             "sin": {
//                 "seconds": 1665574403,
//                 "nanoseconds": 533000000
//             },
//             "max": 0,
//             "stoped": false,
//             "name": "Campaign-40",
//             "type": "flat"
//         },
//         "invoice": {
//             "amtRefrCash": 1.05,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "userName": "Aditya",
//         "amGateway": 0
//     },
//     {
//         "sin": {
//             "seconds": 1665577894,
//             "nanoseconds": 212000000
//         },
//         "amTotal": 0,
//         "amParcelCity": false,
//         "amCost": 0,
//         "amGateway": 0,
//         "storeName": "Fit Food",
//         "shortID": "A000OH",
//         "id": "lmDUC0lQqvznmo3ZZafL",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "invoice": {
//             "COD": false,
//             "useRefrCash": false,
//             "amtRefrCash": 0
//         },
//         "journey": "POS",
//         "ordrTYPE": "CASH",
//         "refr": null,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "camp": null,
//         "amTaxTDS": 0,
//         "amSale": 0,
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "setShortID": true,
//         "earn": 0,
//         "cart": [],
//         "logistics": {
//             "addressDrop": null,
//             "addressPick": null,
//             "require": false,
//             "status": 0
//         },
//         "amBurst": 0,
//         "code": "A000Ky",
//         "amTax": 0,
//         "com": {
//             "seconds": 1665577894,
//             "nanoseconds": 212000000
//         },
//         "status": -10,
//         "amParcel": 0,
//         "amTaxTCS": 0,
//         "amRefr": 0,
//         "type": [
//             "CASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "POS",
//             "REDEEM",
//             "A000Ky"
//         ],
//         "amSave": 0,
//         "upd": {
//             "seconds": 1665583069,
//             "nanoseconds": 763000000
//         },
//         "userName": "Aditya"
//     },
//     {
//         "earn": 0,
//         "amTaxTDS": 0,
//         "id": "yk4Wc73Xqzv6PJeNnVGh",
//         "amBurst": 1,
//         "code": null,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "ordrTYPE": "RefrCASH",
//         "amTaxTCS": 0.01,
//         "logistics": {
//             "addressDrop": {
//                 "address": "abc",
//                 "type": "work",
//                 "zip": 401101,
//                 "landmark": "xyz"
//             },
//             "addressPick": {
//                 "id": "IND_MH_1648672299398",
//                 "locality": "Mumbai",
//                 "line1": "Dipesadsadas sadasdas",
//                 "city": "Mumbai Suburban",
//                 "lon": 72.83105909999999,
//                 "region": "Maharashtra",
//                 "line2": "",
//                 "area": "Dent Heal",
//                 "zip": "400050",
//                 "nation": "IND",
//                 "lat": 19.0662066,
//                 "state": "MH"
//             },
//             "PnD_parcelNotFree": false,
//             "status": 0,
//             "addressDropT": "work",
//             "phone": "9876543210",
//             "typeOrdr": "DIRECT_ONLINE",
//             "PnD_freeStart": 0,
//             "typeShop": "Both",
//             "typeCat": "food_and_beverages",
//             "require": true,
//             "email": "dipesious@hotmail.com",
//             "PnD_cityCharge": 0,
//             "PnD_nationCharge": 0,
//             "name": "Dipeshin",
//             "addressPickT": "shop",
//             "typeSuCat": "sc-food_and_beverages-cafe"
//         },
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "status": 0,
//         "amSale": 5,
//         "invoice": {
//             "amtRefrCash": 1.05,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "amCost": 0,
//         "amRefr": 0,
//         "amTotal": 1.05,
//         "amSave": 5.05,
//         "amParcelCity": false,
//         "setShortID": true,
//         "sin": {
//             "seconds": 1665576552,
//             "nanoseconds": 27000000
//         },
//         "shortID": "A000OF",
//         "refr": null,
//         "amTax": 0.05,
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "cart": [
//             {
//                 "sold": 0,
//                 "description": "Chocolate",
//                 "cost": 1,
//                 "quota": 0,
//                 "burn": false,
//                 "banners": [],
//                 "variants": [],
//                 "category": "chocolate",
//                 "vX": [],
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "reqBurn": false,
//                 "Q": 1,
//                 "content": true,
//                 "title": "JimJam",
//                 "warranty": true,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "price": 5,
//                 "code": "123123123"
//             }
//         ],
//         "userName": "Dipeshin",
//         "journey": "DIRECT",
//         "amGateway": 0,
//         "storeName": "Fit Food",
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "amParcel": 0,
//         "camp": {
//             "cbNew": 80,
//             "type": "flat",
//             "min": 1200,
//             "paid": false,
//             "tX": "t1",
//             "max": 0,
//             "countS": 0,
//             "customAct": false,
//             "ban": false,
//             "customPay": 0,
//             "countP": 0,
//             "countM": 0,
//             "cbExi": 30,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "expiry": false,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "storeTyp": "Both",
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "cbDir": 40,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "name": "Campaign-39",
//             "stage": 0,
//             "stoped": false,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "paused": false,
//             "sid": "8B9ozj7aTPvywkIvVWiK"
//         },
//         "upd": {
//             "seconds": 1665576552,
//             "nanoseconds": 27000000
//         },
//         "com": {
//             "seconds": 1665576552,
//             "nanoseconds": 27000000
//         }
//     },
//     {
//         "amTax": 0.05,
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "code": null,
//         "status": 0,
//         "invoice": {
//             "useRefrCash": true,
//             "amtRefrCash": 1.05,
//             "COD": false
//         },
//         "id": "GwlVfhBsFt1v3ntOm6xg",
//         "amCost": 0,
//         "amSale": 5,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "setShortID": true,
//         "upd": {
//             "seconds": 1665576507,
//             "nanoseconds": 167000000
//         },
//         "storeName": "Fit Food",
//         "sin": {
//             "seconds": 1665576507,
//             "nanoseconds": 167000000
//         },
//         "amGateway": 0,
//         "amSave": 5.05,
//         "cart": [
//             {
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "cost": 1,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "title": "JimJam",
//                 "vX": [],
//                 "variants": [],
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "warranty": true,
//                 "code": "123123123",
//                 "Q": 1,
//                 "burn": false,
//                 "quota": 0,
//                 "reqBurn": false,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "banners": [],
//                 "content": true,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "price": 5,
//                 "description": "Chocolate",
//                 "sold": 0,
//                 "category": "chocolate"
//             }
//         ],
//         "amRefr": 0,
//         "ordrTYPE": "RefrCASH",
//         "amTaxTCS": 0.01,
//         "amTaxTDS": 0,
//         "journey": "DIRECT",
//         "earn": 0,
//         "amTotal": 1.05,
//         "camp": {
//             "customAct": false,
//             "cbDir": 40,
//             "customPay": 0,
//             "cbNew": 80,
//             "stoped": false,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "storeTyp": "Both",
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "stage": 0,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "name": "Campaign-39",
//             "type": "flat",
//             "paused": false,
//             "expiry": false,
//             "countP": 0,
//             "paid": false,
//             "countS": 0,
//             "min": 1200,
//             "cbExi": 30,
//             "ban": false,
//             "max": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "tX": "t1",
//             "countM": 0
//         },
//         "com": {
//             "seconds": 1665576507,
//             "nanoseconds": 167000000
//         },
//         "amParcel": 0,
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amParcelCity": false,
//         "userName": "Dipeshin",
//         "amBurst": 1,
//         "logistics": {
//             "addressDropT": "work",
//             "PnD_freeStart": 0,
//             "typeShop": "Both",
//             "status": 0,
//             "name": "Dipeshin",
//             "addressPick": {
//                 "lat": 19.0662066,
//                 "locality": "Mumbai",
//                 "zip": "400050",
//                 "region": "Maharashtra",
//                 "line1": "Dipesadsadas sadasdas",
//                 "state": "MH",
//                 "city": "Mumbai Suburban",
//                 "id": "IND_MH_1648672299398",
//                 "line2": "",
//                 "lon": 72.83105909999999,
//                 "area": "Dent Heal",
//                 "nation": "IND"
//             },
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressDrop": {
//                 "landmark": "xyz",
//                 "zip": 401101,
//                 "address": "abc",
//                 "type": "work"
//             },
//             "addressPickT": "shop",
//             "PnD_cityCharge": 0,
//             "PnD_nationCharge": 0,
//             "email": "dipesious@hotmail.com",
//             "typeOrdr": "DIRECT_ONLINE",
//             "PnD_parcelNotFree": false,
//             "phone": "9876543210",
//             "typeCat": "food_and_beverages",
//             "require": true
//         },
//         "shortID": "A000OE",
//         "refr": null
//     },
//     {
//         "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
//         "amSale": 0,
//         "sin": {
//             "seconds": 1665576206,
//             "nanoseconds": 775000000
//         },
//         "amGive": 500,
//         "upd": {
//             "seconds": 1665576206,
//             "nanoseconds": 775000000
//         },
//         "type": [
//             "addBalance",
//             "cashbackBalance",
//             "clientAc",
//             "GdViTqOv51YIsNxHV58LpXpx99n1",
//             "Dipeshin",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "Δ",
//             "admin"
//         ],
//         "com": {
//             "seconds": 1665576206,
//             "nanoseconds": 775000000
//         },
//         "journey": "ADMIN",
//         "amTotal": 500,
//         "amCost": 500,
//         "amSave": 0,
//         "via": {
//             "name": "Dipeshin",
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
//         },
//         "to": "Δ",
//         "amPaid": 500,
//         "id": "wOOpVknpLCdmPA4cCHP5",
//         "status": 10,
//         "amRate": {
//             "refill": 500,
//             "cut": 0,
//             "cutRate": 0,
//             "pay": 500
//         },
//         "setShortID": true,
//         "shortID": "A000OA"
//     },
//     {
//         "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
//         "setShortID": true,
//         "com": {
//             "seconds": 1665574500,
//             "nanoseconds": 720000000
//         },
//         "cart": [
//             {
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "variants": [],
//                 "banners": [],
//                 "category": "chocolate",
//                 "title": "JimJam",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "content": true,
//                 "burn": false,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "description": "Chocolate",
//                 "warranty": true,
//                 "reqBurn": false,
//                 "sold": 0,
//                 "price": 5,
//                 "code": "123123123",
//                 "vX": [],
//                 "quota": 0,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "cost": 1,
//                 "Q": 1
//             }
//         ],
//         "amSave": 5.05,
//         "amParcel": 0,
//         "refr": {
//             "uid": "GdViTqOv51YIsNxHV58LpXpx99n1",
//             "earn": 0,
//             "name": "Shraddha "
//         },
//         "amGateway": 0,
//         "amTax": 0.05,
//         "amBurst": 1,
//         "invoice": {
//             "COD": false,
//             "amtRefrCash": 1.05,
//             "useRefrCash": true
//         },
//         "upd": {
//             "seconds": 1665574500,
//             "nanoseconds": 720000000
//         },
//         "type": [
//             "RefrCASH",
//             "GdViTqOv51YIsNxHV58LpXpx99n1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A00009"
//         ],
//         "code": "A00009",
//         "storeName": "Fit Food",
//         "amSale": 5,
//         "status": 0,
//         "userName": "Shraddha ",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amTotal": 1.05,
//         "amRefr": 0,
//         "amTaxTDS": 0,
//         "amTaxTCS": 0.01,
//         "logistics": {
//             "addressDropT": "home",
//             "name": "Shraddha ",
//             "PnD_freeStart": 0,
//             "addressDrop": {
//                 "type": "home",
//                 "zip": 400056,
//                 "landmark": "Juhu ",
//                 "address": "Leena residency "
//             },
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_parcelNotFree": false,
//             "status": 0,
//             "email": "",
//             "phone": "9833006431",
//             "require": true,
//             "typeCat": "food_and_beverages",
//             "typeOrdr": "F2F_ONLINE",
//             "typeShop": "Both",
//             "addressPickT": "shop",
//             "PnD_nationCharge": 0,
//             "addressPick": {
//                 "city": "Mumbai Suburban",
//                 "id": "IND_MH_1648672299398",
//                 "line2": "",
//                 "state": "MH",
//                 "area": "Dent Heal",
//                 "nation": "IND",
//                 "lat": 19.0662066,
//                 "lon": 72.83105909999999,
//                 "locality": "Mumbai",
//                 "line1": "Dipesadsadas sadasdas",
//                 "region": "Maharashtra",
//                 "zip": "400050"
//             },
//             "PnD_cityCharge": 0
//         },
//         "id": "2whYvGpA3RMUD1m8Zw8i",
//         "journey": "F2F",
//         "earn": 0,
//         "camp": {
//             "cbExi": 5,
//             "countP": 0,
//             "dateE": {
//                 "seconds": 1669746600,
//                 "nanoseconds": 0
//             },
//             "storeTyp": "Both",
//             "id": "si4Ba2AAJX8gOmMEX0DI",
//             "paid": false,
//             "cbNew": 10,
//             "countM": 0,
//             "ban": false,
//             "cbDir": 2.5,
//             "sin": {
//                 "seconds": 1665574403,
//                 "nanoseconds": 533000000
//             },
//             "tX": "t1",
//             "customAct": false,
//             "dateS": {
//                 "seconds": 1665513000,
//                 "nanoseconds": 0
//             },
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "paused": false,
//             "expiry": false,
//             "min": 50,
//             "max": 0,
//             "customPay": 0,
//             "stoped": false,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "upd": {
//                 "seconds": 1665574403,
//                 "nanoseconds": 533000000
//             },
//             "countS": 0,
//             "type": "flat",
//             "name": "Campaign-40",
//             "stage": 0
//         },
//         "amCost": 0,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "sin": {
//             "seconds": 1665574500,
//             "nanoseconds": 720000000
//         },
//         "shortID": "A000Nl",
//         "ordrTYPE": "RefrCASH",
//         "amParcelCity": false
//     },
//     {
//         "amSave": 5.05,
//         "earn": 0,
//         "amBurst": 1,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amTotal": 1.05,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "refr": null,
//         "setShortID": true,
//         "journey": "DIRECT",
//         "userName": "Aditya",
//         "shortID": "A000Nh",
//         "code": null,
//         "cart": [
//             {
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "title": "JimJam",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "banners": [],
//                 "price": 5,
//                 "burn": false,
//                 "Q": 1,
//                 "category": "chocolate",
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "code": "123123123",
//                 "reqBurn": false,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "quota": 0,
//                 "cost": 1,
//                 "vX": [],
//                 "description": "Chocolate",
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "warranty": true,
//                 "variants": [],
//                 "content": true,
//                 "sold": 0
//             }
//         ],
//         "amSale": 5,
//         "amParcelCity": false,
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "invoice": {
//             "amtRefrCash": 1.05,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "upd": {
//             "seconds": 1665574180,
//             "nanoseconds": 19000000
//         },
//         "amTaxTCS": 0.01,
//         "amGateway": 0,
//         "com": {
//             "seconds": 1665574180,
//             "nanoseconds": 19000000
//         },
//         "sin": {
//             "seconds": 1665574180,
//             "nanoseconds": 19000000
//         },
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "ordrTYPE": "RefrCASH",
//         "logistics": {
//             "typeOrdr": "DIRECT_ONLINE",
//             "addressPickT": "shop",
//             "PnD_parcelNotFree": false,
//             "PnD_cityCharge": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressDrop": {
//                 "landmark": "Gagandeep bus stop",
//                 "zip": 400056,
//                 "type": "work",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
//             },
//             "addressDropT": "work",
//             "typeCat": "food_and_beverages",
//             "email": "",
//             "require": true,
//             "name": "Aditya",
//             "PnD_nationCharge": 0,
//             "PnD_freeStart": 0,
//             "typeShop": "Both",
//             "addressPick": {
//                 "area": "Dent Heal",
//                 "region": "Maharashtra",
//                 "id": "IND_MH_1648672299398",
//                 "nation": "IND",
//                 "state": "MH",
//                 "locality": "Mumbai",
//                 "zip": "400050",
//                 "city": "Mumbai Suburban",
//                 "line2": "",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lon": 72.83105909999999,
//                 "lat": 19.0662066
//             },
//             "phone": "8879751140",
//             "status": 0
//         },
//         "id": "w9SlnkQwfm8k1B8T4DWQ",
//         "amCost": 0,
//         "amTax": 0.05,
//         "amRefr": 0,
//         "amParcel": 0,
//         "status": 0,
//         "amTaxTDS": 0,
//         "camp": {
//             "paused": false,
//             "countS": 0,
//             "ban": false,
//             "cbNew": 80,
//             "name": "Campaign-39",
//             "stoped": false,
//             "paid": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "stage": 0,
//             "countP": 0,
//             "customAct": false,
//             "countM": 0,
//             "min": 1200,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "max": 0,
//             "cbExi": 30,
//             "storeTyp": "Both",
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "expiry": false,
//             "type": "flat",
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "cbDir": 40,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "tX": "t1",
//             "customPay": 0
//         },
//         "storeName": "Fit Food"
//     },
//     {
//         "amSave": 0,
//         "amRate": {
//             "refill": 100,
//             "cut": 0,
//             "cutRate": 0,
//             "pay": 100
//         },
//         "sin": {
//             "seconds": 1665573890,
//             "nanoseconds": 882000000
//         },
//         "journey": "ADMIN",
//         "type": [
//             "addBalance",
//             "cashbackBalance",
//             "clientAc",
//             "GdViTqOv51YIsNxHV58LpXpx99n1",
//             "Dipeshin",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "Δ",
//             "admin"
//         ],
//         "id": "uCRMd9rDfWxqMV4CqP4F",
//         "amTotal": 100,
//         "amPaid": 100,
//         "status": 10,
//         "upd": {
//             "seconds": 1665573890,
//             "nanoseconds": 882000000
//         },
//         "via": {
//             "name": "Dipeshin",
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
//         },
//         "com": {
//             "seconds": 1665573890,
//             "nanoseconds": 882000000
//         },
//         "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
//         "amSale": 0,
//         "shortID": "A000Nf",
//         "amCost": 100,
//         "amGive": 100,
//         "setShortID": true,
//         "to": "Δ"
//     },
//     {
//         "upd": {
//             "seconds": 1665573774,
//             "nanoseconds": 476000000
//         },
//         "amTax": 0,
//         "earn": 0,
//         "status": -10,
//         "ordrTYPE": "CASH",
//         "amGateway": 0,
//         "amParcelCity": false,
//         "logistics": {
//             "require": false,
//             "addressDrop": null,
//             "addressPick": null,
//             "status": 0
//         },
//         "cart": [],
//         "amSave": 0,
//         "amSale": 0,
//         "userName": "Shraddha ",
//         "amTaxTDS": 0,
//         "invoice": {
//             "useRefrCash": false,
//             "COD": false,
//             "amtRefrCash": 0
//         },
//         "amParcel": 0,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amRefr": 0,
//         "code": "A00009",
//         "id": "MprD4E2R62s4jrMQ1PG2",
//         "sin": {
//             "seconds": 1665573734,
//             "nanoseconds": 491000000
//         },
//         "amTotal": 0,
//         "com": {
//             "seconds": 1665573734,
//             "nanoseconds": 491000000
//         },
//         "shortID": "A000Nd",
//         "storeName": "Fit Food",
//         "refr": null,
//         "amBurst": 0,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amTaxTCS": 0,
//         "amCost": 0,
//         "journey": "POS",
//         "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
//         "type": [
//             "CASH",
//             "GdViTqOv51YIsNxHV58LpXpx99n1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "POS",
//             "REDEEM",
//             "A00009"
//         ],
//         "camp": null,
//         "setShortID": true
//     },
//     {
//         "shortID": "A000N5",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amCost": 0,
//         "amParcel": 0,
//         "amRefr": 0.14,
//         "logistics": {
//             "require": true,
//             "addressDropT": "work",
//             "name": "Aditya",
//             "addressPickT": "shop",
//             "addressDrop": {
//                 "type": "work",
//                 "zip": 400056,
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "landmark": "Gagandeep bus stop"
//             },
//             "PnD_nationCharge": 0,
//             "PnD_freeStart": 0,
//             "PnD_cityCharge": 0,
//             "PnD_parcelNotFree": false,
//             "addressPick": {
//                 "id": "IND_MH_1648672299398",
//                 "locality": "Mumbai",
//                 "zip": "400050",
//                 "city": "Mumbai Suburban",
//                 "state": "MH",
//                 "line2": "",
//                 "lat": 19.0662066,
//                 "nation": "IND",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lon": 72.83105909999999,
//                 "area": "Dent Heal",
//                 "region": "Maharashtra"
//             },
//             "phone": "8879751140",
//             "typeShop": "Both",
//             "typeCat": "food_and_beverages",
//             "typeOrdr": "BURN",
//             "email": "",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "status": 0
//         },
//         "amTaxTDS": 0,
//         "amGateway": 0,
//         "storeName": "Fit Food",
//         "amTaxTCS": 0.02,
//         "camp": null,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "addORDER",
//             "BURN",
//             null
//         ],
//         "ordrTYPE": "RefrCASH",
//         "cart": [
//             {
//                 "burnDec": "abc",
//                 "burnCatSub": "Nope",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "reqBurn": false,
//                 "sin": {
//                     "seconds": 1664607562,
//                     "nanoseconds": 148000000
//                 },
//                 "content": true,
//                 "id": "AH1YkgZwvrKZo1zcuDN9",
//                 "title": "fried rice",
//                 "warranty": true,
//                 "burnHigh": "abc",
//                 "storeINFO": {
//                     "type": "Both",
//                     "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "shareUrlV1": "https://refrclub.com/o/tobR",
//                     "loc": [
//                         {
//                             "line2": "",
//                             "nation": "IND",
//                             "line1": "Dipesadsadas sadasdas",
//                             "lat": 19.0662066,
//                             "locality": "Mumbai",
//                             "id": "IND_MH_1648672299398",
//                             "city": "Mumbai Suburban",
//                             "zip": "400050",
//                             "area": "Dent Heal",
//                             "lon": 72.83105909999999,
//                             "region": "Maharashtra",
//                             "state": "MH"
//                         },
//                         {
//                             "id": "IND_MH_1656024949912",
//                             "line1": "sadas sadasdasd sdasdas",
//                             "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
//                             "region": "Maharashtra",
//                             "nation": "IND",
//                             "zip": "400053",
//                             "city": "Mumbai Suburban",
//                             "locality": "Mumbai",
//                             "state": "MH",
//                             "lat": 19.134840193193707,
//                             "lon": 72.8213950683594,
//                             "line2": ""
//                         }
//                     ],
//                     "log": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "vOrdr": 23,
//                     "sin": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "shareUrlX1": "https://refrclub.com/o/WoQJ",
//                     "vGave": 1390,
//                     "banners": [
//                         "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
//                     ],
//                     "email": "dipeshbhoir@hotmail.com",
//                     "addedDynamicLink": true,
//                     "shareUrlP1": "https://refrclub.com/o/EncD",
//                     "id": "8B9ozj7aTPvywkIvVWiK",
//                     "addedDynamicLinkP1": true,
//                     "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
//                     "about": "About the store",
//                     "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "upd": {
//                         "seconds": 1665572836,
//                         "nanoseconds": 194000000
//                     },
//                     "cat": "food_and_beverages",
//                     "phone": "9876543210",
//                     "userInfo": {
//                         "acBalCr": 120,
//                         "phone": "+919876543210",
//                         "acBalGivenV": 1000,
//                         "BankUPI": {
//                             "fund_account_id": "fa_K9hVBLRtX776iF",
//                             "active": true,
//                             "username": "dipesious",
//                             "address": "dipesious@dbs",
//                             "handle": "dbs",
//                             "contact_id": "cont_K9KglWSOWnTNTY",
//                             "verified": true
//                         },
//                         "soFB": "dip",
//                         "display": "",
//                         "cashback": 80,
//                         "emails": [],
//                         "admin": true,
//                         "storeSav": [
//                             "8B9ozj7aTPvywkIvVWiK",
//                             "tjOyZV9TVTpQ1hoccOYB"
//                         ],
//                         "coin": "INR",
//                         "soWA": "9876543210",
//                         "name": "Dipeshin",
//                         "storeLoc": [
//                             "8B9ozj7aTPvywkIvVWiK"
//                         ],
//                         "acBalGivenC": 1980,
//                         "acBalC": 1113.5500000000002,
//                         "upd": {
//                             "seconds": 1665263257,
//                             "nanoseconds": 854000000
//                         },
//                         "acBalH": 395,
//                         "bucket": [
//                             "6cZGYy20f5boFbbsXtYB",
//                             "qqMPDmqy0o01YiiIYqaE",
//                             "kxczduUeyyYUvoCyLvnO",
//                             "6uhvn2NoTtN8ONPuM2qj"
//                         ],
//                         "addr": [
//                             {
//                                 "landmark": "xyz",
//                                 "type": "work",
//                                 "address": "abc",
//                                 "zip": 401101
//                             },
//                             {
//                                 "landmark": "Tower",
//                                 "address": "Google",
//                                 "zip": 401101,
//                                 "type": "home"
//                             },
//                             {
//                                 "type": "other",
//                                 "address": "101, Leena residence gulmohar road miraj",
//                                 "zip": 400056,
//                                 "landmark": "Opposite gagandeep restaurant "
//                             },
//                             {
//                                 "zip": 400049,
//                                 "type": "other",
//                                 "landmark": "Opposite naturals ",
//                                 "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme "
//                             }
//                         ],
//                         "soIG": "dipesious",
//                         "email": "dipesious@hotmail.com",
//                         "acBalVp": 16000,
//                         "soYT": "simran",
//                         "ban": false,
//                         "acBalVr": 1794.5499999999997,
//                         "storeCam": [
//                             "2GHohG0jEfELHb30c1s7",
//                             "i9MvNIRSZEpyhp05UIws",
//                             "b8fHqM0fyh3EJfGARu3B",
//                             "69Hf6TISpLg3SDwpYyKy",
//                             "2VS4N7OkRrM5pHfwCNuV",
//                             "GBJPmnJ4Q1oA1ynW1brZ",
//                             "rDeB5DwD97Ff1NpLzFdj",
//                             "vJEzPDAJ5koqdbGa7k0N",
//                             "PJcK0Xh43tLpR44xtB6J",
//                             "FkvmAw4pKGhcSrFULyG2",
//                             "dLclMuk5iBysJvOoWRKi",
//                             "ZPkNWVk1trHm3b8GBr4F",
//                             "iWIXIPHAiDIiA9Euexst",
//                             "SBV6Jpa7a2844xyTxDEO",
//                             "1igU0j5Cxxah1ZzYW0oT",
//                             "OgkREW5oDc40YO1psg6q",
//                             "6YEVFDcrnwwGKc4IRPqX",
//                             "qc1ymcPpmQ8yEhHM8zLt",
//                             "2bwi1jsjci7YySD6FWHi",
//                             "x605L2J7JyTzfmtgFL7M",
//                             "TyWGWqQiOSEG0f4XSGju",
//                             "yKTiNocUlsW92jUlr0P1",
//                             "XQBQVol6L4AFU0wdRluS",
//                             "tt5W2R17MPqrjJA7azDi",
//                             "NhtKi3RTN2dLVzcH2hSu",
//                             "dO3WaZ05d3hBgnlt0Fj2",
//                             "sB3sHKwlhmqpkVPm2M1F",
//                             "bSOHjFq1z3di0kl7tDOK",
//                             "fjkXn0gPGux5uYQADX6v",
//                             "Muj3jGOZ7jOWeELzLe0Y",
//                             "5kaSYObDf7s1pRxvqp0s",
//                             "d3Kcq7I3sCdzWMPgD9Rm",
//                             "9e64iZ7UQ538nKB285XT",
//                             "IpQwjUjBAJW8eyMSDDWp",
//                             "xdiMTvN28RncaBT5HHms",
//                             "nRtRMxxicFvlARWiSR8y",
//                             "w4ELXiJiAiPY4RodAz7o",
//                             "78SEsrN2FWWM1NCSzRfk",
//                             "IzSNW9mwHpHHyZ6C9cAD"
//                         ],
//                         "acBalV": 4569.351059999996,
//                         "iso": "IND",
//                         "log": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "soTW": "dip",
//                         "axess": [
//                             "phone"
//                         ],
//                         "payout": false,
//                         "note": [],
//                         "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                         "tokenSNS_": [
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
//                             "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
//                             "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
//                             "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
//                             "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
//                             "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
//                             "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
//                             "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
//                             "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
//                             "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
//                             "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
//                             "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
//                             "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
//                             "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
//                             "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
//                             "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
//                         ],
//                         "sin": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
//                         "acBalP": 0,
//                         "emailV": false
//                     },
//                     "vAte": 153.29999999999998,
//                     "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
//                     "shareUrlB1": "https://refrclub.com/o/4Yif",
//                     "subCat": "sc-food_and_beverages-cafe",
//                     "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                     "typeORDER": {
//                         "freeParcel": false,
//                         "return": false,
//                         "exchange": false,
//                         "cityCharge": 0,
//                         "nationCharge": 0,
//                         "refund": false,
//                         "freeStart": 0,
//                         "COD": true,
//                         "delivery": "Nationwide",
//                         "logistics": true,
//                         "phoneHide": true
//                     },
//                     "vEarn": 26400,
//                     "products": 18,
//                     "cashback": 80,
//                     "vFan": 23,
//                     "proCat": [
//                         "gfjgjhgjhghjg",
//                         "hhkhkjhjk",
//                         "some category",
//                         "Dal",
//                         "Paneer",
//                         "Kolhapuri",
//                         "chocolate"
//                     ],
//                     "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "name": "Fit Food",
//                     "schedule": {
//                         "openSatS": "06:00",
//                         "openMon": true,
//                         "opensDailyE": "23:00",
//                         "openFriE": "19:00",
//                         "openSat": true,
//                         "opensDaily": false,
//                         "openThuE": "19:00",
//                         "openWedS": "06:00",
//                         "openFri": true,
//                         "openMonE": "19:00",
//                         "openSun": false,
//                         "openWedE": "19:00",
//                         "openTue": true,
//                         "openSatE": "19:00",
//                         "openWed": true,
//                         "openTueS": "06:00",
//                         "opensDailyS": "10:00",
//                         "openFriS": "06:00",
//                         "openTueE": "19:00",
//                         "openSunS": "06:00",
//                         "openThu": true,
//                         "openSunE": "19:00",
//                         "openMonS": "09:00",
//                         "openThuS": "06:00"
//                     }
//                 },
//                 "Q": 1,
//                 "burnDecShort": "abc",
//                 "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "vX": [],
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
//                 ],
//                 "sold": 0,
//                 "burn": true,
//                 "upd": {
//                     "seconds": 1665569994,
//                     "nanoseconds": 212000000
//                 },
//                 "cost": 2,
//                 "price": 10,
//                 "burnBrand": "abc",
//                 "burnSpec": "abc",
//                 "relate": [],
//                 "variants": [],
//                 "quota": 0,
//                 "category": "Dal",
//                 "description": "rice",
//                 "code": "123123123123",
//                 "burnCat": "food_and_beverages",
//                 "burnPics": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
//                 ],
//                 "costBurn": 1.8,
//                 "flash": false
//             }
//         ],
//         "upd": {
//             "seconds": 1665573056,
//             "nanoseconds": 790000000
//         },
//         "amTotal": 2.1,
//         "refr": null,
//         "amBurst": 2,
//         "com": {
//             "seconds": 1665573056,
//             "nanoseconds": 790000000
//         },
//         "amSale": 10,
//         "invoice": {
//             "amtRefrCash": 2.1,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "amParcelCity": false,
//         "amSave": 10.1,
//         "id": "bIyV5T8htM0af60g1D2E",
//         "status": 0,
//         "setShortID": true,
//         "code": null,
//         "earn": 0,
//         "amTax": 0.1,
//         "userName": "Aditya",
//         "journey": "BURN",
//         "sin": {
//             "seconds": 1665573056,
//             "nanoseconds": 790000000
//         },
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
//     },
//     {
//         "amGateway": 0,
//         "shortID": "A000N3",
//         "amBurst": 1,
//         "id": "XX54PSZgyMJwbDOlA0v5",
//         "storeName": "Fit Food",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amTotal": 1.05,
//         "ordrTYPE": "RefrCASH",
//         "earn": 0,
//         "amSave": 5.05,
//         "userName": "Aditya",
//         "amTax": 0.05,
//         "cart": [
//             {
//                 "code": "123123123",
//                 "cost": 1,
//                 "reqBurn": false,
//                 "warranty": true,
//                 "burn": false,
//                 "content": true,
//                 "description": "Chocolate",
//                 "sold": 0,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "Q": 1,
//                 "banners": [],
//                 "title": "JimJam",
//                 "quota": 0,
//                 "category": "chocolate",
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "variants": [],
//                 "price": 5,
//                 "vX": [],
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
//             }
//         ],
//         "amTaxTCS": 0.01,
//         "code": "A000Ky",
//         "amRefr": 0,
//         "journey": "F2F",
//         "refr": {
//             "earn": 0,
//             "name": "Aditya",
//             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
//         },
//         "com": {
//             "seconds": 1665573023,
//             "nanoseconds": 785000000
//         },
//         "amCost": 0,
//         "amSale": 5,
//         "logistics": {
//             "addressDrop": {
//                 "zip": 400056,
//                 "type": "work",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "landmark": "Gagandeep bus stop"
//             },
//             "addressDropT": "work",
//             "addressPick": {
//                 "area": "Dent Heal",
//                 "id": "IND_MH_1648672299398",
//                 "nation": "IND",
//                 "line2": "",
//                 "state": "MH",
//                 "region": "Maharashtra",
//                 "zip": "400050",
//                 "city": "Mumbai Suburban",
//                 "lat": 19.0662066,
//                 "line1": "Dipesadsadas sadasdas",
//                 "locality": "Mumbai",
//                 "lon": 72.83105909999999
//             },
//             "PnD_freeStart": 0,
//             "typeOrdr": "F2F_ONLINE",
//             "require": true,
//             "phone": "8879751140",
//             "name": "Aditya",
//             "PnD_nationCharge": 0,
//             "status": 0,
//             "email": "",
//             "addressPickT": "shop",
//             "typeShop": "Both",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_parcelNotFree": false,
//             "typeCat": "food_and_beverages",
//             "PnD_cityCharge": 0
//         },
//         "sin": {
//             "seconds": 1665573023,
//             "nanoseconds": 785000000
//         },
//         "upd": {
//             "seconds": 1665573023,
//             "nanoseconds": 785000000
//         },
//         "amParcelCity": false,
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "amParcel": 0,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A000Ky"
//         ],
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "setShortID": true,
//         "status": 0,
//         "invoice": {
//             "COD": false,
//             "amtRefrCash": 1.05,
//             "useRefrCash": true
//         },
//         "camp": {
//             "countP": 0,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "tX": "t1",
//             "type": "flat",
//             "storeTyp": "Both",
//             "paid": false,
//             "cbNew": 80,
//             "stage": 0,
//             "cbExi": 30,
//             "paused": false,
//             "stoped": false,
//             "customPay": 0,
//             "countM": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "expiry": false,
//             "max": 0,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "cbDir": 40,
//             "name": "Campaign-39",
//             "min": 1200,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "ban": false,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "customAct": false,
//             "countS": 0
//         },
//         "amTaxTDS": 0
//     },
//     {
//         "type": [
//             "ONLINE",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A000Ky"
//         ],
//         "amBurst": 1,
//         "amTotal": 1.05,
//         "amSale": 5,
//         "userName": "Aditya",
//         "storeName": "Fit Food",
//         "cart": [
//             {
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "banners": [],
//                 "content": true,
//                 "price": 5,
//                 "title": "JimJam",
//                 "warranty": true,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "vX": [],
//                 "sold": 0,
//                 "variants": [],
//                 "reqBurn": false,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "Q": 1,
//                 "burn": false,
//                 "code": "123123123",
//                 "description": "Chocolate",
//                 "cost": 1,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "quota": 0,
//                 "category": "chocolate"
//             }
//         ],
//         "com": {
//             "seconds": 1665572994,
//             "nanoseconds": 870000000
//         },
//         "amCost": 1.05,
//         "sin": {
//             "seconds": 1665572994,
//             "nanoseconds": 870000000
//         },
//         "ordrTYPE": "ONLINE",
//         "logistics": {
//             "addressDropT": "work",
//             "PnD_parcelNotFree": false,
//             "status": 0,
//             "typeOrdr": "F2F_ONLINE",
//             "addressPickT": "shop",
//             "typeShop": "Both",
//             "email": "",
//             "PnD_freeStart": 0,
//             "typeCat": "food_and_beverages",
//             "addressDrop": {
//                 "zip": 400056,
//                 "landmark": "Gagandeep bus stop",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "type": "work"
//             },
//             "addressPick": {
//                 "id": "IND_MH_1648672299398",
//                 "locality": "Mumbai",
//                 "city": "Mumbai Suburban",
//                 "lon": 72.83105909999999,
//                 "area": "Dent Heal",
//                 "line2": "",
//                 "zip": "400050",
//                 "line1": "Dipesadsadas sadasdas",
//                 "state": "MH",
//                 "lat": 19.0662066,
//                 "nation": "IND",
//                 "region": "Maharashtra"
//             },
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_cityCharge": 0,
//             "name": "Aditya",
//             "PnD_nationCharge": 0,
//             "phone": "8879751140",
//             "require": true
//         },
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "earn": 0,
//         "amTaxTCS": 0.01,
//         "upd": {
//             "seconds": 1665572994,
//             "nanoseconds": 870000000
//         },
//         "id": "PXQwNnat0emBAVvAUUsF",
//         "camp": {
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "name": "Campaign-39",
//             "expiry": false,
//             "cbExi": 30,
//             "max": 0,
//             "cbDir": 40,
//             "countP": 0,
//             "paid": false,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "customAct": false,
//             "stoped": false,
//             "storeTyp": "Both",
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "type": "flat",
//             "customPay": 0,
//             "stage": 0,
//             "paused": false,
//             "countS": 0,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "min": 1200,
//             "cbNew": 80,
//             "countM": 0,
//             "tX": "t1",
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "ban": false,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             }
//         },
//         "journey": "F2F",
//         "amTax": 0.05,
//         "amParcelCity": false,
//         "setShortID": true,
//         "code": "A000Ky",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "invoice": {
//             "amtRefrCash": 0,
//             "useRefrCash": false,
//             "COD": false
//         },
//         "refr": {
//             "earn": 0,
//             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "name": "Aditya"
//         },
//         "amGateway": 0.02478,
//         "status": 0,
//         "amParcel": 0,
//         "amTaxTDS": 0,
//         "shortID": "A000NY",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amSave": 4,
//         "amRefr": 0
//     },
//     {
//         "amGateway": 0,
//         "amParcel": 0,
//         "amTotal": 1.05,
//         "shortID": "A000NU",
//         "cart": [
//             {
//                 "sold": 0,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "price": 5,
//                 "category": "chocolate",
//                 "banners": [],
//                 "Q": 1,
//                 "vX": [],
//                 "description": "Chocolate",
//                 "variants": [],
//                 "cost": 1,
//                 "code": "123123123",
//                 "warranty": true,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "burn": false,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "content": true,
//                 "reqBurn": false,
//                 "title": "JimJam",
//                 "quota": 0,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 }
//             }
//         ],
//         "amCost": 0,
//         "amTax": 0.05,
//         "id": "38tNYortLSifaSOdezC6",
//         "ordrTYPE": "RefrCASH",
//         "com": {
//             "seconds": 1665572879,
//             "nanoseconds": 562000000
//         },
//         "upd": {
//             "seconds": 1665572879,
//             "nanoseconds": 562000000
//         },
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "amSale": 5,
//         "code": null,
//         "status": 0,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amBurst": 1,
//         "userName": "Aditya",
//         "invoice": {
//             "COD": false,
//             "useRefrCash": true,
//             "amtRefrCash": 1.05
//         },
//         "journey": "DIRECT",
//         "storeName": "Fit Food",
//         "amSave": 5.05,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "earn": 0,
//         "amParcelCity": false,
//         "sin": {
//             "seconds": 1665572879,
//             "nanoseconds": 562000000
//         },
//         "refr": null,
//         "camp": {
//             "min": 1200,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "name": "Campaign-39",
//             "storeTyp": "Both",
//             "cbExi": 30,
//             "cbNew": 80,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "paid": false,
//             "tX": "t1",
//             "customPay": 0,
//             "ban": false,
//             "stoped": false,
//             "customAct": false,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "countM": 0,
//             "type": "flat",
//             "expiry": false,
//             "countS": 0,
//             "stage": 0,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "max": 0,
//             "countP": 0,
//             "cbDir": 40,
//             "paused": false,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             }
//         },
//         "logistics": {
//             "status": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_freeStart": 0,
//             "addressPick": {
//                 "zip": "400050",
//                 "locality": "Mumbai",
//                 "area": "Dent Heal",
//                 "id": "IND_MH_1648672299398",
//                 "state": "MH",
//                 "region": "Maharashtra",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lat": 19.0662066,
//                 "city": "Mumbai Suburban",
//                 "lon": 72.83105909999999,
//                 "line2": "",
//                 "nation": "IND"
//             },
//             "require": true,
//             "PnD_parcelNotFree": false,
//             "addressDropT": "work",
//             "addressDrop": {
//                 "landmark": "Gagandeep bus stop",
//                 "type": "work",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "zip": 400056
//             },
//             "name": "Aditya",
//             "addressPickT": "shop",
//             "typeOrdr": "DIRECT_ONLINE",
//             "phone": "8879751140",
//             "PnD_cityCharge": 0,
//             "typeCat": "food_and_beverages",
//             "PnD_nationCharge": 0,
//             "typeShop": "Both",
//             "email": ""
//         },
//         "amTaxTCS": 0.01,
//         "setShortID": true,
//         "amRefr": 0,
//         "amTaxTDS": 0,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ]
//     },
//     {
//         "refr": {
//             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "name": "Aditya",
//             "earn": 0
//         },
//         "amBurst": 1,
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "earn": 0,
//         "shortID": "A000NO",
//         "amSave": 5.05,
//         "amCost": 0,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A000Ky"
//         ],
//         "cart": [
//             {
//                 "title": "JimJam",
//                 "quota": 0,
//                 "price": 5,
//                 "vX": [],
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "variants": [],
//                 "code": "123123123",
//                 "description": "Chocolate",
//                 "burn": false,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "cost": 1,
//                 "warranty": true,
//                 "category": "chocolate",
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "sold": 0,
//                 "reqBurn": false,
//                 "Q": 1,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "banners": [],
//                 "content": true
//             }
//         ],
//         "amGateway": 0,
//         "journey": "F2F",
//         "com": {
//             "seconds": 1665571471,
//             "nanoseconds": 387000000
//         },
//         "amTax": 0.05,
//         "status": 10,
//         "invoice": {
//             "useRefrCash": true,
//             "amtRefrCash": 1.05,
//             "COD": false
//         },
//         "sin": {
//             "seconds": 1665571137,
//             "nanoseconds": 5000000
//         },
//         "amParcel": 0,
//         "ordrTYPE": "RefrCASH",
//         "amSale": 5,
//         "logistics": {
//             "typeOrdr": "F2F_ONLINE",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "require": false,
//             "name": "Aditya",
//             "PnD_parcelNotFree": false,
//             "addressPick": {
//                 "line1": "Dipesadsadas sadasdas",
//                 "zip": "400050",
//                 "id": "IND_MH_1648672299398",
//                 "city": "Mumbai Suburban",
//                 "lon": 72.83105909999999,
//                 "state": "MH",
//                 "line2": "",
//                 "nation": "IND",
//                 "region": "Maharashtra",
//                 "lat": 19.0662066,
//                 "area": "Dent Heal",
//                 "locality": "Mumbai"
//             },
//             "typeShop": "Both",
//             "addressDrop": {
//                 "landmark": "Gagandeep bus stop",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "type": "work",
//                 "zip": 400056
//             },
//             "email": "",
//             "addressPickT": "shop",
//             "PnD_freeStart": 0,
//             "status": 20,
//             "PnD_nationCharge": 0,
//             "phone": "8879751140",
//             "typeCat": "food_and_beverages",
//             "PnD_cityCharge": 0,
//             "addressDropT": "work"
//         },
//         "amTaxTCS": 0.01,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "userName": "Aditya",
//         "camp": {
//             "cbDir": 40,
//             "customPay": 0,
//             "expiry": false,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "countP": 0,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "storeTyp": "Both",
//             "paused": false,
//             "ban": false,
//             "tX": "t1",
//             "type": "flat",
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "customAct": false,
//             "min": 1200,
//             "paid": false,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "cbExi": 30,
//             "countS": 0,
//             "max": 0,
//             "stage": 0,
//             "countM": 0,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "cbNew": 80,
//             "name": "Campaign-39",
//             "stoped": false
//         },
//         "code": "A000Ky",
//         "storeName": "Fit Food",
//         "amRefr": 0,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amTaxTDS": 0,
//         "setShortID": true,
//         "amTotal": 1.05,
//         "id": "Jfuw3DUsgUYgITNAoipr",
//         "amParcelCity": false,
//         "upd": {
//             "seconds": 1665571137,
//             "nanoseconds": 5000000
//         }
//     },
//     {
//         "userName": "Aditya",
//         "refr": null,
//         "invoice": {
//             "amtRefrCash": 2.1,
//             "COD": false,
//             "useRefrCash": true
//         },
//         "amSave": 10.1,
//         "amRefr": 0.14,
//         "ordrTYPE": "RefrCASH",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "code": null,
//         "camp": null,
//         "journey": "BURN",
//         "upd": {
//             "seconds": 1665571160,
//             "nanoseconds": 693000000
//         },
//         "amTaxTDS": 0,
//         "amTax": 0.1,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amSale": 10,
//         "shortID": "A000NQ",
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "earn": 0,
//         "logistics": {
//             "name": "Aditya",
//             "email": "",
//             "addressPickT": "shop",
//             "addressDrop": {
//                 "type": "work",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "zip": 400056,
//                 "landmark": "Gagandeep bus stop"
//             },
//             "PnD_freeStart": 0,
//             "PnD_nationCharge": 0,
//             "require": false,
//             "typeCat": "food_and_beverages",
//             "PnD_cityCharge": 0,
//             "typeOrdr": "BURN",
//             "addressDropT": "work",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "status": 20,
//             "PnD_parcelNotFree": false,
//             "addressPick": {
//                 "city": "Mumbai Suburban",
//                 "lat": 19.0662066,
//                 "nation": "IND",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lon": 72.83105909999999,
//                 "zip": "400050",
//                 "id": "IND_MH_1648672299398",
//                 "line2": "",
//                 "locality": "Mumbai",
//                 "area": "Dent Heal",
//                 "region": "Maharashtra",
//                 "state": "MH"
//             },
//             "typeShop": "Both",
//             "phone": "8879751140"
//         },
//         "amTaxTCS": 0.02,
//         "com": {
//             "seconds": 1665571468,
//             "nanoseconds": 353000000
//         },
//         "amBurst": 2,
//         "status": 10,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "addORDER",
//             "BURN",
//             null
//         ],
//         "amParcel": 0,
//         "amTotal": 2.1,
//         "sin": {
//             "seconds": 1665571160,
//             "nanoseconds": 693000000
//         },
//         "storeName": "Fit Food",
//         "amCost": 0,
//         "setShortID": true,
//         "id": "giAISi5kYGQEqPE0zKZ3",
//         "cart": [
//             {
//                 "burnCat": "food_and_beverages",
//                 "sold": 0,
//                 "cost": 2,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "id": "AH1YkgZwvrKZo1zcuDN9",
//                 "title": "fried rice",
//                 "burnDec": "abc",
//                 "quota": 0,
//                 "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
//                 "burn": true,
//                 "burnDecShort": "abc",
//                 "reqBurn": false,
//                 "vX": [],
//                 "variants": [],
//                 "storeINFO": {
//                     "about": "About the store",
//                     "products": 18,
//                     "name": "Fit Food",
//                     "cashback": 80,
//                     "userInfo": {
//                         "storeLoc": [
//                             "8B9ozj7aTPvywkIvVWiK"
//                         ],
//                         "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                         "phone": "+919876543210",
//                         "acBalGivenC": 1980,
//                         "axess": [
//                             "phone"
//                         ],
//                         "acBalVp": 16000,
//                         "acBalVr": 1792.4499999999998,
//                         "bucket": [
//                             "6cZGYy20f5boFbbsXtYB",
//                             "qqMPDmqy0o01YiiIYqaE",
//                             "kxczduUeyyYUvoCyLvnO",
//                             "6uhvn2NoTtN8ONPuM2qj"
//                         ],
//                         "soTW": "dip",
//                         "soWA": "9876543210",
//                         "email": "dipesious@hotmail.com",
//                         "ban": false,
//                         "tokenSNS_": [
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
//                             "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
//                             "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
//                             "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
//                             "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
//                             "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
//                             "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
//                             "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
//                             "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
//                             "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
//                             "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
//                             "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
//                             "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
//                             "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
//                             "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
//                             "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
//                         ],
//                         "addr": [
//                             {
//                                 "landmark": "xyz",
//                                 "address": "abc",
//                                 "zip": 401101,
//                                 "type": "work"
//                             },
//                             {
//                                 "landmark": "Tower",
//                                 "address": "Google",
//                                 "zip": 401101,
//                                 "type": "home"
//                             },
//                             {
//                                 "landmark": "Opposite gagandeep restaurant ",
//                                 "zip": 400056,
//                                 "address": "101, Leena residence gulmohar road miraj",
//                                 "type": "other"
//                             },
//                             {
//                                 "zip": 400049,
//                                 "type": "other",
//                                 "landmark": "Opposite naturals ",
//                                 "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme "
//                             }
//                         ],
//                         "storeSav": [
//                             "8B9ozj7aTPvywkIvVWiK",
//                             "tjOyZV9TVTpQ1hoccOYB"
//                         ],
//                         "soIG": "dipesious",
//                         "storeCam": [
//                             "2GHohG0jEfELHb30c1s7",
//                             "i9MvNIRSZEpyhp05UIws",
//                             "b8fHqM0fyh3EJfGARu3B",
//                             "69Hf6TISpLg3SDwpYyKy",
//                             "2VS4N7OkRrM5pHfwCNuV",
//                             "GBJPmnJ4Q1oA1ynW1brZ",
//                             "rDeB5DwD97Ff1NpLzFdj",
//                             "vJEzPDAJ5koqdbGa7k0N",
//                             "PJcK0Xh43tLpR44xtB6J",
//                             "FkvmAw4pKGhcSrFULyG2",
//                             "dLclMuk5iBysJvOoWRKi",
//                             "ZPkNWVk1trHm3b8GBr4F",
//                             "iWIXIPHAiDIiA9Euexst",
//                             "SBV6Jpa7a2844xyTxDEO",
//                             "1igU0j5Cxxah1ZzYW0oT",
//                             "OgkREW5oDc40YO1psg6q",
//                             "6YEVFDcrnwwGKc4IRPqX",
//                             "qc1ymcPpmQ8yEhHM8zLt",
//                             "2bwi1jsjci7YySD6FWHi",
//                             "x605L2J7JyTzfmtgFL7M",
//                             "TyWGWqQiOSEG0f4XSGju",
//                             "yKTiNocUlsW92jUlr0P1",
//                             "XQBQVol6L4AFU0wdRluS",
//                             "tt5W2R17MPqrjJA7azDi",
//                             "NhtKi3RTN2dLVzcH2hSu",
//                             "dO3WaZ05d3hBgnlt0Fj2",
//                             "sB3sHKwlhmqpkVPm2M1F",
//                             "bSOHjFq1z3di0kl7tDOK",
//                             "fjkXn0gPGux5uYQADX6v",
//                             "Muj3jGOZ7jOWeELzLe0Y",
//                             "5kaSYObDf7s1pRxvqp0s",
//                             "d3Kcq7I3sCdzWMPgD9Rm",
//                             "9e64iZ7UQ538nKB285XT",
//                             "IpQwjUjBAJW8eyMSDDWp",
//                             "xdiMTvN28RncaBT5HHms",
//                             "nRtRMxxicFvlARWiSR8y",
//                             "w4ELXiJiAiPY4RodAz7o",
//                             "78SEsrN2FWWM1NCSzRfk",
//                             "IzSNW9mwHpHHyZ6C9cAD"
//                         ],
//                         "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
//                         "payout": false,
//                         "admin": true,
//                         "acBalC": 1113.5500000000002,
//                         "soFB": "dip",
//                         "acBalGivenV": 1000,
//                         "log": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "display": "",
//                         "emails": [],
//                         "acBalCr": 120,
//                         "sin": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "acBalV": 4567.523859999997,
//                         "iso": "IND",
//                         "soYT": "simran",
//                         "name": "Dipeshin",
//                         "BankUPI": {
//                             "username": "dipesious",
//                             "verified": true,
//                             "handle": "dbs",
//                             "contact_id": "cont_K9KglWSOWnTNTY",
//                             "fund_account_id": "fa_K9hVBLRtX776iF",
//                             "active": true,
//                             "address": "dipesious@dbs"
//                         },
//                         "acBalP": 0,
//                         "acBalH": 395,
//                         "note": [],
//                         "upd": {
//                             "seconds": 1665263257,
//                             "nanoseconds": 854000000
//                         },
//                         "coin": "INR",
//                         "emailV": false,
//                         "cashback": 80
//                     },
//                     "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
//                     "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "vGave": 1390,
//                     "proCat": [
//                         "gfjgjhgjhghjg",
//                         "hhkhkjhjk",
//                         "some category",
//                         "Dal",
//                         "Paneer",
//                         "Kolhapuri",
//                         "chocolate"
//                     ],
//                     "shareUrlX1": "https://refrclub.com/o/WoQJ",
//                     "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                     "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
//                     "phone": "9876543210",
//                     "sin": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "shareUrlB1": "https://refrclub.com/o/4Yif",
//                     "shareUrlP1": "https://refrclub.com/o/EncD",
//                     "schedule": {
//                         "openMonE": "19:00",
//                         "openSatS": "06:00",
//                         "openThu": true,
//                         "openWedS": "06:00",
//                         "openSat": true,
//                         "openFriS": "06:00",
//                         "openFri": true,
//                         "openMon": true,
//                         "openSunE": "19:00",
//                         "openWedE": "19:00",
//                         "openSunS": "06:00",
//                         "openMonS": "09:00",
//                         "openTueE": "19:00",
//                         "openWed": true,
//                         "opensDailyS": "10:00",
//                         "openThuS": "06:00",
//                         "openTueS": "06:00",
//                         "openSun": false,
//                         "openThuE": "19:00",
//                         "openTue": true,
//                         "openFriE": "19:00",
//                         "opensDailyE": "23:00",
//                         "opensDaily": false,
//                         "openSatE": "19:00"
//                     },
//                     "cat": "food_and_beverages",
//                     "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "vOrdr": 23,
//                     "id": "8B9ozj7aTPvywkIvVWiK",
//                     "shareUrlV1": "https://refrclub.com/o/tobR",
//                     "email": "dipeshbhoir@hotmail.com",
//                     "addedDynamicLink": true,
//                     "vFan": 23,
//                     "vEarn": 26400,
//                     "loc": [
//                         {
//                             "line2": "",
//                             "line1": "Dipesadsadas sadasdas",
//                             "lat": 19.0662066,
//                             "city": "Mumbai Suburban",
//                             "locality": "Mumbai",
//                             "id": "IND_MH_1648672299398",
//                             "zip": "400050",
//                             "region": "Maharashtra",
//                             "lon": 72.83105909999999,
//                             "nation": "IND",
//                             "state": "MH",
//                             "area": "Dent Heal"
//                         },
//                         {
//                             "region": "Maharashtra",
//                             "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
//                             "locality": "Mumbai",
//                             "line1": "sadas sadasdasd sdasdas",
//                             "lat": 19.134840193193707,
//                             "city": "Mumbai Suburban",
//                             "zip": "400053",
//                             "state": "MH",
//                             "nation": "IND",
//                             "line2": "",
//                             "id": "IND_MH_1656024949912",
//                             "lon": 72.8213950683594
//                         }
//                     ],
//                     "vAte": 151.2,
//                     "typeORDER": {
//                         "exchange": false,
//                         "phoneHide": true,
//                         "logistics": false,
//                         "refund": false,
//                         "COD": true,
//                         "return": false,
//                         "freeParcel": false,
//                         "nationCharge": 0,
//                         "delivery": "Nationwide",
//                         "freeStart": 0,
//                         "cityCharge": 0
//                     },
//                     "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "banners": [
//                         "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
//                     ],
//                     "subCat": "sc-food_and_beverages-cafe",
//                     "addedDynamicLinkP1": true,
//                     "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "type": "Both",
//                     "upd": {
//                         "seconds": 1664544116,
//                         "nanoseconds": 946000000
//                     },
//                     "log": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     }
//                 },
//                 "burnPics": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
//                 ],
//                 "costBurn": 1.8,
//                 "flash": false,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "code": "123123123123",
//                 "upd": {
//                     "seconds": 1665569994,
//                     "nanoseconds": 212000000
//                 },
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
//                 ],
//                 "description": "rice",
//                 "burnCatSub": "Nope",
//                 "content": true,
//                 "warranty": true,
//                 "Q": 1,
//                 "sin": {
//                     "seconds": 1664607562,
//                     "nanoseconds": 148000000
//                 },
//                 "relate": [],
//                 "burnSpec": "abc",
//                 "burnHigh": "abc",
//                 "price": 10,
//                 "category": "Dal",
//                 "burnBrand": "abc"
//             }
//         ],
//         "amGateway": 0,
//         "amParcelCity": false
//     },
//     {
//         "userName": "Aditya",
//         "amSave": 5.05,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amBurst": 1,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "amTaxTCS": 0.01,
//         "cart": [
//             {
//                 "reqBurn": false,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "quota": 0,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "Q": 1,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "burn": false,
//                 "vX": [],
//                 "description": "Chocolate",
//                 "content": true,
//                 "banners": [],
//                 "cost": 1,
//                 "variants": [],
//                 "category": "chocolate",
//                 "warranty": true,
//                 "title": "JimJam",
//                 "price": 5,
//                 "sold": 0,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "code": "123123123"
//             }
//         ],
//         "id": "SW9pblruzz2leJYmpqQS",
//         "com": {
//             "seconds": 1665571464,
//             "nanoseconds": 66000000
//         },
//         "code": null,
//         "amGateway": 0,
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "refr": null,
//         "amTax": 0.05,
//         "setShortID": true,
//         "amTaxTDS": 0,
//         "ordrTYPE": "RefrCASH",
//         "amSale": 5,
//         "upd": {
//             "seconds": 1665571097,
//             "nanoseconds": 573000000
//         },
//         "camp": {
//             "paused": false,
//             "cbNew": 80,
//             "customPay": 0,
//             "cbDir": 40,
//             "ban": false,
//             "max": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "countM": 0,
//             "stoped": false,
//             "min": 1200,
//             "stage": 0,
//             "name": "Campaign-39",
//             "tX": "t1",
//             "countP": 0,
//             "cbExi": 30,
//             "customAct": false,
//             "expiry": false,
//             "paid": false,
//             "countS": 0,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "type": "flat",
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "storeTyp": "Both",
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             }
//         },
//         "journey": "DIRECT",
//         "amTotal": 1.05,
//         "shortID": "A000NM",
//         "amParcel": 0,
//         "amRefr": 0,
//         "storeName": "Fit Food",
//         "logistics": {
//             "typeOrdr": "DIRECT_ONLINE",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_cityCharge": 0,
//             "PnD_parcelNotFree": false,
//             "email": "",
//             "addressDropT": "work",
//             "typeCat": "food_and_beverages",
//             "PnD_freeStart": 0,
//             "status": 20,
//             "phone": "8879751140",
//             "require": false,
//             "addressPickT": "shop",
//             "addressDrop": {
//                 "zip": 400056,
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "landmark": "Gagandeep bus stop",
//                 "type": "work"
//             },
//             "name": "Aditya",
//             "typeShop": "Both",
//             "addressPick": {
//                 "city": "Mumbai Suburban",
//                 "nation": "IND",
//                 "area": "Dent Heal",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lat": 19.0662066,
//                 "state": "MH",
//                 "lon": 72.83105909999999,
//                 "region": "Maharashtra",
//                 "id": "IND_MH_1648672299398",
//                 "zip": "400050",
//                 "locality": "Mumbai",
//                 "line2": ""
//             },
//             "PnD_nationCharge": 0
//         },
//         "amCost": 0,
//         "invoice": {
//             "useRefrCash": true,
//             "amtRefrCash": 1.05,
//             "COD": false
//         },
//         "amParcelCity": false,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "earn": 0,
//         "status": 10,
//         "sin": {
//             "seconds": 1665571097,
//             "nanoseconds": 573000000
//         }
//     },
//     {
//         "camp": {
//             "max": 0,
//             "cbDir": 40,
//             "expiry": false,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "customAct": false,
//             "paused": false,
//             "ban": false,
//             "customPay": 0,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "paid": false,
//             "min": 1200,
//             "type": "flat",
//             "cbExi": 30,
//             "countP": 0,
//             "countS": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "stoped": false,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "name": "Campaign-39",
//             "storeTyp": "Both",
//             "cbNew": 80,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "countM": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "tX": "t1",
//             "stage": 0
//         },
//         "amTaxTDS": 0,
//         "amCost": 0,
//         "com": {
//             "seconds": 1665570601,
//             "nanoseconds": 650000000
//         },
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "storeName": "Fit Food",
//         "refr": {
//             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "name": "Aditya",
//             "earn": 0
//         },
//         "id": "P5sPvvO6fFlclfN4DN5j",
//         "amTaxTCS": 0.01,
//         "sin": {
//             "seconds": 1665570592,
//             "nanoseconds": 769000000
//         },
//         "userName": "Aditya",
//         "status": -10,
//         "amTotal": 1.05,
//         "invoice": {
//             "amtRefrCash": 1.05,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "earn": 0,
//         "gwRefund": [
//             {}
//         ],
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amRefr": 0,
//         "upd": {
//             "seconds": 1665570592,
//             "nanoseconds": 769000000
//         },
//         "ordrTYPE": "RefrCASH",
//         "amParcel": 0,
//         "amBurst": 1,
//         "setShortID": true,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "shortID": "A000NK",
//         "amTax": 0.05,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A000Ky"
//         ],
//         "amGateway": 0,
//         "cart": [
//             {
//                 "reqBurn": false,
//                 "variants": [],
//                 "description": "Chocolate",
//                 "sold": 0,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "code": "123123123",
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "vX": [],
//                 "banners": [],
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "warranty": true,
//                 "Q": 1,
//                 "price": 5,
//                 "cost": 1,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "content": true,
//                 "category": "chocolate",
//                 "quota": 0,
//                 "burn": false,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "title": "JimJam"
//             }
//         ],
//         "logistics": {
//             "status": -1000,
//             "addressDropT": "work",
//             "phone": "8879751140",
//             "PnD_freeStart": 0,
//             "PnD_nationCharge": 0,
//             "typeOrdr": "F2F_ONLINE",
//             "email": "",
//             "typeShop": "Both",
//             "PnD_parcelNotFree": false,
//             "require": false,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressDrop": {
//                 "zip": 400056,
//                 "landmark": "Gagandeep bus stop",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "type": "work"
//             },
//             "addressPickT": "shop",
//             "name": "Aditya",
//             "PnD_cityCharge": 0,
//             "addressPick": {
//                 "nation": "IND",
//                 "zip": "400050",
//                 "area": "Dent Heal",
//                 "state": "MH",
//                 "locality": "Mumbai",
//                 "id": "IND_MH_1648672299398",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lon": 72.83105909999999,
//                 "city": "Mumbai Suburban",
//                 "lat": 19.0662066,
//                 "region": "Maharashtra",
//                 "line2": ""
//             },
//             "typeCat": "food_and_beverages"
//         },
//         "amParcelCity": false,
//         "code": "A000Ky",
//         "amSave": 5.05,
//         "journey": "F2F",
//         "amSale": 5
//     },
//     {
//         "refr": null,
//         "invoice": {
//             "amtRefrCash": 1.05,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "amTotal": 1.05,
//         "camp": {
//             "customPay": 0,
//             "expiry": false,
//             "name": "Campaign-39",
//             "customAct": false,
//             "min": 1200,
//             "stoped": false,
//             "countP": 0,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "paid": false,
//             "max": 0,
//             "stage": 0,
//             "cbNew": 80,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "countM": 0,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "countS": 0,
//             "storeTyp": "Both",
//             "ban": false,
//             "cbExi": 30,
//             "paused": false,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "tX": "t1",
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "type": "flat",
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "cbDir": 40
//         },
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "ordrTYPE": "RefrCASH",
//         "amParcel": 0,
//         "amCost": 0,
//         "amTaxTDS": 0,
//         "amSave": 5.05,
//         "earn": 0,
//         "status": -10,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "upd": {
//             "seconds": 1665570510,
//             "nanoseconds": 569000000
//         },
//         "amTax": 0.05,
//         "shortID": "A000NI",
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "setShortID": true,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amParcelCity": false,
//         "amRefr": 0,
//         "amTaxTCS": 0.01,
//         "com": {
//             "seconds": 1665570553,
//             "nanoseconds": 862000000
//         },
//         "id": "rDtTWZclSMX0khre8BDC",
//         "amSale": 5,
//         "logistics": {
//             "require": false,
//             "email": "",
//             "addressPickT": "shop",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "typeCat": "food_and_beverages",
//             "typeOrdr": "DIRECT_ONLINE",
//             "addressDrop": {
//                 "zip": 400056,
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "landmark": "Gagandeep bus stop",
//                 "type": "work"
//             },
//             "PnD_freeStart": 0,
//             "PnD_parcelNotFree": false,
//             "addressDropT": "work",
//             "typeShop": "Both",
//             "name": "Aditya",
//             "PnD_cityCharge": 0,
//             "status": -1000,
//             "PnD_nationCharge": 0,
//             "addressPick": {
//                 "zip": "400050",
//                 "region": "Maharashtra",
//                 "state": "MH",
//                 "id": "IND_MH_1648672299398",
//                 "area": "Dent Heal",
//                 "line2": "",
//                 "line1": "Dipesadsadas sadasdas",
//                 "city": "Mumbai Suburban",
//                 "lat": 19.0662066,
//                 "lon": 72.83105909999999,
//                 "nation": "IND",
//                 "locality": "Mumbai"
//             },
//             "phone": "8879751140"
//         },
//         "journey": "DIRECT",
//         "storeName": "Fit Food",
//         "gwRefund": [
//             {}
//         ],
//         "amGateway": 0,
//         "userName": "Aditya",
//         "code": null,
//         "sin": {
//             "seconds": 1665570510,
//             "nanoseconds": 569000000
//         },
//         "cart": [
//             {
//                 "code": "123123123",
//                 "price": 5,
//                 "vX": [],
//                 "variants": [],
//                 "title": "JimJam",
//                 "Q": 1,
//                 "category": "chocolate",
//                 "reqBurn": false,
//                 "warranty": true,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "cost": 1,
//                 "quota": 0,
//                 "burn": false,
//                 "description": "Chocolate",
//                 "content": true,
//                 "sold": 0,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "banners": []
//             }
//         ],
//         "amBurst": 1
//     },
//     {
//         "amParcel": 0,
//         "userName": "Aditya",
//         "refr": null,
//         "camp": null,
//         "amTotal": 2.1,
//         "amParcelCity": false,
//         "shortID": "A000NG",
//         "amSale": 10,
//         "upd": {
//             "seconds": 1665570347,
//             "nanoseconds": 471000000
//         },
//         "com": {
//             "seconds": 1665570374,
//             "nanoseconds": 50000000
//         },
//         "sin": {
//             "seconds": 1665570347,
//             "nanoseconds": 471000000
//         },
//         "amTaxTDS": 0,
//         "invoice": {
//             "COD": false,
//             "useRefrCash": true,
//             "amtRefrCash": 2.1
//         },
//         "amSave": 10.1,
//         "storeName": "Fit Food",
//         "amGateway": 0,
//         "amTaxTCS": 0.02,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amTax": 0.1,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "ordrTYPE": "RefrCASH",
//         "code": null,
//         "amCost": 0,
//         "status": -10,
//         "id": "Bzb57VAYU44YqwqYB2nq",
//         "amBurst": 2,
//         "earn": 0,
//         "amRefr": 0.14,
//         "logistics": {
//             "phone": "8879751140",
//             "typeOrdr": "BURN",
//             "addressDropT": "work",
//             "addressPick": {
//                 "zip": "400050",
//                 "id": "IND_MH_1648672299398",
//                 "lat": 19.0662066,
//                 "region": "Maharashtra",
//                 "locality": "Mumbai",
//                 "state": "MH",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lon": 72.83105909999999,
//                 "city": "Mumbai Suburban",
//                 "nation": "IND",
//                 "line2": "",
//                 "area": "Dent Heal"
//             },
//             "PnD_nationCharge": 0,
//             "PnD_cityCharge": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressDrop": {
//                 "zip": 400056,
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "type": "work",
//                 "landmark": "Gagandeep bus stop"
//             },
//             "typeCat": "food_and_beverages",
//             "email": "",
//             "addressPickT": "shop",
//             "typeShop": "Both",
//             "status": -1000,
//             "PnD_parcelNotFree": false,
//             "PnD_freeStart": 0,
//             "name": "Aditya",
//             "require": false
//         },
//         "setShortID": true,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "addORDER",
//             "BURN",
//             null
//         ],
//         "cart": [
//             {
//                 "sold": 0,
//                 "burnBrand": "abc",
//                 "price": 10,
//                 "id": "AH1YkgZwvrKZo1zcuDN9",
//                 "sin": {
//                     "seconds": 1664607562,
//                     "nanoseconds": 148000000
//                 },
//                 "cost": 2,
//                 "costBurn": 1.8,
//                 "content": true,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "flash": false,
//                 "upd": {
//                     "seconds": 1665569994,
//                     "nanoseconds": 212000000
//                 },
//                 "Q": 1,
//                 "variants": [],
//                 "warranty": true,
//                 "burnSpec": "abc",
//                 "title": "fried rice",
//                 "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
//                 "storeINFO": {
//                     "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
//                     "shareUrlX1": "https://refrclub.com/o/WoQJ",
//                     "shareUrlV1": "https://refrclub.com/o/tobR",
//                     "email": "dipeshbhoir@hotmail.com",
//                     "banners": [
//                         "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
//                     ],
//                     "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "upd": {
//                         "seconds": 1664544116,
//                         "nanoseconds": 946000000
//                     },
//                     "name": "Fit Food",
//                     "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "subCat": "sc-food_and_beverages-cafe",
//                     "vAte": 151.2,
//                     "vEarn": 26400,
//                     "userInfo": {
//                         "storeLoc": [
//                             "8B9ozj7aTPvywkIvVWiK"
//                         ],
//                         "axess": [
//                             "phone"
//                         ],
//                         "email": "dipesious@hotmail.com",
//                         "coin": "INR",
//                         "acBalC": 1113.5500000000002,
//                         "phone": "+919876543210",
//                         "acBalP": 0,
//                         "acBalVp": 16000,
//                         "acBalVr": 1790.35,
//                         "emails": [],
//                         "storeSav": [
//                             "8B9ozj7aTPvywkIvVWiK",
//                             "tjOyZV9TVTpQ1hoccOYB"
//                         ],
//                         "payout": false,
//                         "cashback": 80,
//                         "addr": [
//                             {
//                                 "type": "work",
//                                 "zip": 401101,
//                                 "landmark": "xyz",
//                                 "address": "abc"
//                             },
//                             {
//                                 "address": "Google",
//                                 "type": "home",
//                                 "landmark": "Tower",
//                                 "zip": 401101
//                             },
//                             {
//                                 "landmark": "Opposite gagandeep restaurant ",
//                                 "type": "other",
//                                 "address": "101, Leena residence gulmohar road miraj",
//                                 "zip": 400056
//                             },
//                             {
//                                 "landmark": "Opposite naturals ",
//                                 "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
//                                 "type": "other",
//                                 "zip": 400049
//                             }
//                         ],
//                         "note": [],
//                         "display": "",
//                         "ban": false,
//                         "soIG": "dipesious",
//                         "log": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "emailV": false,
//                         "admin": true,
//                         "BankUPI": {
//                             "verified": true,
//                             "username": "dipesious",
//                             "active": true,
//                             "address": "dipesious@dbs",
//                             "contact_id": "cont_K9KglWSOWnTNTY",
//                             "fund_account_id": "fa_K9hVBLRtX776iF",
//                             "handle": "dbs"
//                         },
//                         "soFB": "dip",
//                         "iso": "IND",
//                         "acBalH": 395,
//                         "acBalGivenC": 1980,
//                         "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                         "acBalCr": 120,
//                         "upd": {
//                             "seconds": 1665263257,
//                             "nanoseconds": 854000000
//                         },
//                         "soWA": "9876543210",
//                         "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
//                         "bucket": [
//                             "6cZGYy20f5boFbbsXtYB",
//                             "qqMPDmqy0o01YiiIYqaE",
//                             "kxczduUeyyYUvoCyLvnO",
//                             "6uhvn2NoTtN8ONPuM2qj"
//                         ],
//                         "soTW": "dip",
//                         "name": "Dipeshin",
//                         "soYT": "simran",
//                         "acBalV": 4567.523859999997,
//                         "storeCam": [
//                             "2GHohG0jEfELHb30c1s7",
//                             "i9MvNIRSZEpyhp05UIws",
//                             "b8fHqM0fyh3EJfGARu3B",
//                             "69Hf6TISpLg3SDwpYyKy",
//                             "2VS4N7OkRrM5pHfwCNuV",
//                             "GBJPmnJ4Q1oA1ynW1brZ",
//                             "rDeB5DwD97Ff1NpLzFdj",
//                             "vJEzPDAJ5koqdbGa7k0N",
//                             "PJcK0Xh43tLpR44xtB6J",
//                             "FkvmAw4pKGhcSrFULyG2",
//                             "dLclMuk5iBysJvOoWRKi",
//                             "ZPkNWVk1trHm3b8GBr4F",
//                             "iWIXIPHAiDIiA9Euexst",
//                             "SBV6Jpa7a2844xyTxDEO",
//                             "1igU0j5Cxxah1ZzYW0oT",
//                             "OgkREW5oDc40YO1psg6q",
//                             "6YEVFDcrnwwGKc4IRPqX",
//                             "qc1ymcPpmQ8yEhHM8zLt",
//                             "2bwi1jsjci7YySD6FWHi",
//                             "x605L2J7JyTzfmtgFL7M",
//                             "TyWGWqQiOSEG0f4XSGju",
//                             "yKTiNocUlsW92jUlr0P1",
//                             "XQBQVol6L4AFU0wdRluS",
//                             "tt5W2R17MPqrjJA7azDi",
//                             "NhtKi3RTN2dLVzcH2hSu",
//                             "dO3WaZ05d3hBgnlt0Fj2",
//                             "sB3sHKwlhmqpkVPm2M1F",
//                             "bSOHjFq1z3di0kl7tDOK",
//                             "fjkXn0gPGux5uYQADX6v",
//                             "Muj3jGOZ7jOWeELzLe0Y",
//                             "5kaSYObDf7s1pRxvqp0s",
//                             "d3Kcq7I3sCdzWMPgD9Rm",
//                             "9e64iZ7UQ538nKB285XT",
//                             "IpQwjUjBAJW8eyMSDDWp",
//                             "xdiMTvN28RncaBT5HHms",
//                             "nRtRMxxicFvlARWiSR8y",
//                             "w4ELXiJiAiPY4RodAz7o",
//                             "78SEsrN2FWWM1NCSzRfk",
//                             "IzSNW9mwHpHHyZ6C9cAD"
//                         ],
//                         "sin": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "acBalGivenV": 1000,
//                         "tokenSNS_": [
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
//                             "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
//                             "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
//                             "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
//                             "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
//                             "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
//                             "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
//                             "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
//                             "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
//                             "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
//                             "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
//                             "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
//                             "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
//                             "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
//                             "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
//                             "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
//                         ]
//                     },
//                     "addedDynamicLink": true,
//                     "sin": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "shareUrlB1": "https://refrclub.com/o/4Yif",
//                     "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
//                     "about": "About the store",
//                     "vFan": 23,
//                     "schedule": {
//                         "openMonE": "19:00",
//                         "openTue": true,
//                         "openSunS": "06:00",
//                         "openWed": true,
//                         "openThu": true,
//                         "openSatS": "06:00",
//                         "openThuE": "19:00",
//                         "openSat": true,
//                         "openTueS": "06:00",
//                         "openWedS": "06:00",
//                         "openFriE": "19:00",
//                         "openSatE": "19:00",
//                         "openSun": false,
//                         "openSunE": "19:00",
//                         "openFri": true,
//                         "opensDailyE": "23:00",
//                         "openMon": true,
//                         "openMonS": "09:00",
//                         "openFriS": "06:00",
//                         "openWedE": "19:00",
//                         "opensDailyS": "10:00",
//                         "openTueE": "19:00",
//                         "openThuS": "06:00",
//                         "opensDaily": false
//                     },
//                     "addedDynamicLinkP1": true,
//                     "type": "Both",
//                     "log": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                     "phone": "9876543210",
//                     "id": "8B9ozj7aTPvywkIvVWiK",
//                     "vGave": 1390,
//                     "vOrdr": 23,
//                     "proCat": [
//                         "gfjgjhgjhghjg",
//                         "hhkhkjhjk",
//                         "some category",
//                         "Dal",
//                         "Paneer",
//                         "Kolhapuri",
//                         "chocolate"
//                     ],
//                     "typeORDER": {
//                         "delivery": "Nationwide",
//                         "return": false,
//                         "refund": false,
//                         "cityCharge": 0,
//                         "logistics": false,
//                         "freeStart": 0,
//                         "freeParcel": false,
//                         "phoneHide": true,
//                         "COD": true,
//                         "nationCharge": 0,
//                         "exchange": false
//                     },
//                     "cashback": 80,
//                     "cat": "food_and_beverages",
//                     "shareUrlP1": "https://refrclub.com/o/EncD",
//                     "loc": [
//                         {
//                             "line1": "Dipesadsadas sadasdas",
//                             "city": "Mumbai Suburban",
//                             "area": "Dent Heal",
//                             "zip": "400050",
//                             "nation": "IND",
//                             "region": "Maharashtra",
//                             "lat": 19.0662066,
//                             "line2": "",
//                             "lon": 72.83105909999999,
//                             "locality": "Mumbai",
//                             "id": "IND_MH_1648672299398",
//                             "state": "MH"
//                         },
//                         {
//                             "city": "Mumbai Suburban",
//                             "nation": "IND",
//                             "state": "MH",
//                             "id": "IND_MH_1656024949912",
//                             "region": "Maharashtra",
//                             "line2": "",
//                             "locality": "Mumbai",
//                             "lon": 72.8213950683594,
//                             "zip": "400053",
//                             "lat": 19.134840193193707,
//                             "line1": "sadas sadasdasd sdasdas",
//                             "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India"
//                         }
//                     ],
//                     "products": 18
//                 },
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
//                 ],
//                 "burnPics": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
//                 ],
//                 "burnCat": "food_and_beverages",
//                 "burnDec": "abc",
//                 "burnCatSub": "Nope",
//                 "burnHigh": "abc",
//                 "description": "rice",
//                 "category": "Dal",
//                 "burn": true,
//                 "relate": [],
//                 "reqBurn": false,
//                 "burnDecShort": "abc",
//                 "vX": [],
//                 "quota": 0,
//                 "code": "123123123123"
//             }
//         ],
//         "gwRefund": [
//             {}
//         ],
//         "journey": "BURN"
//     },
//     {
//         "amSale": 10,
//         "amBurst": 2,
//         "invoice": {
//             "amtRefrCash": 2.1,
//             "COD": false,
//             "useRefrCash": true
//         },
//         "amTax": 0.1,
//         "ordrTYPE": "RefrCASH",
//         "amTotal": 2.1,
//         "status": 0,
//         "earn": 0,
//         "amParcel": 0,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "com": {
//             "seconds": 1665570039,
//             "nanoseconds": 647000000
//         },
//         "amSave": 10.1,
//         "logistics": {
//             "email": "",
//             "name": "Aditya",
//             "PnD_nationCharge": 0,
//             "typeShop": "Both",
//             "addressDrop": {
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "landmark": "Gagandeep bus stop",
//                 "zip": 400056,
//                 "type": "work"
//             },
//             "PnD_parcelNotFree": false,
//             "addressPickT": "shop",
//             "PnD_cityCharge": 0,
//             "require": false,
//             "PnD_freeStart": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "typeCat": "food_and_beverages",
//             "status": 0,
//             "phone": "8879751140",
//             "typeOrdr": "BURN",
//             "addressDropT": "work",
//             "addressPick": {
//                 "region": "Maharashtra",
//                 "locality": "Mumbai",
//                 "lat": 19.0662066,
//                 "lon": 72.83105909999999,
//                 "id": "IND_MH_1648672299398",
//                 "state": "MH",
//                 "area": "Dent Heal",
//                 "nation": "IND",
//                 "line1": "Dipesadsadas sadasdas",
//                 "zip": "400050",
//                 "line2": "",
//                 "city": "Mumbai Suburban"
//             }
//         },
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "upd": {
//             "seconds": 1665570039,
//             "nanoseconds": 647000000
//         },
//         "amParcelCity": false,
//         "camp": null,
//         "shortID": "A000NE",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "cart": [
//             {
//                 "category": "Dal",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "reqBurn": false,
//                 "content": true,
//                 "upd": {
//                     "seconds": 1665569994,
//                     "nanoseconds": 212000000
//                 },
//                 "code": "123123123123",
//                 "variants": [],
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "price": 10,
//                 "storeINFO": {
//                     "subCat": "sc-food_and_beverages-cafe",
//                     "about": "About the store",
//                     "vFan": 23,
//                     "vGave": 1390,
//                     "vAte": 151.2,
//                     "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "vEarn": 26400,
//                     "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                     "id": "8B9ozj7aTPvywkIvVWiK",
//                     "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "shareUrlX1": "https://refrclub.com/o/WoQJ",
//                     "cat": "food_and_beverages",
//                     "shareUrlB1": "https://refrclub.com/o/4Yif",
//                     "email": "dipeshbhoir@hotmail.com",
//                     "products": 18,
//                     "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "userInfo": {
//                         "iso": "IND",
//                         "log": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "payout": false,
//                         "bucket": [
//                             "6cZGYy20f5boFbbsXtYB",
//                             "qqMPDmqy0o01YiiIYqaE",
//                             "kxczduUeyyYUvoCyLvnO",
//                             "6uhvn2NoTtN8ONPuM2qj"
//                         ],
//                         "storeLoc": [
//                             "8B9ozj7aTPvywkIvVWiK"
//                         ],
//                         "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
//                         "sin": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "display": "",
//                         "BankUPI": {
//                             "handle": "dbs",
//                             "fund_account_id": "fa_K9hVBLRtX776iF",
//                             "contact_id": "cont_K9KglWSOWnTNTY",
//                             "username": "dipesious",
//                             "verified": true,
//                             "active": true,
//                             "address": "dipesious@dbs"
//                         },
//                         "acBalGivenV": 1000,
//                         "ban": false,
//                         "emails": [],
//                         "phone": "+919876543210",
//                         "soIG": "dipesious",
//                         "tokenSNS_": [
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
//                             "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
//                             "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
//                             "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
//                             "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
//                             "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
//                             "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
//                             "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
//                             "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
//                             "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
//                             "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
//                             "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
//                             "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
//                             "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
//                             "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
//                             "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
//                         ],
//                         "axess": [
//                             "phone"
//                         ],
//                         "soTW": "dip",
//                         "upd": {
//                             "seconds": 1665263257,
//                             "nanoseconds": 854000000
//                         },
//                         "soYT": "simran",
//                         "name": "Dipeshin",
//                         "cashback": 80,
//                         "acBalVp": 16000,
//                         "acBalCr": 120,
//                         "emailV": false,
//                         "soWA": "9876543210",
//                         "acBalP": 0,
//                         "addr": [
//                             {
//                                 "zip": 401101,
//                                 "type": "work",
//                                 "address": "abc",
//                                 "landmark": "xyz"
//                             },
//                             {
//                                 "zip": 401101,
//                                 "type": "home",
//                                 "landmark": "Tower",
//                                 "address": "Google"
//                             },
//                             {
//                                 "type": "other",
//                                 "landmark": "Opposite gagandeep restaurant ",
//                                 "zip": 400056,
//                                 "address": "101, Leena residence gulmohar road miraj"
//                             },
//                             {
//                                 "type": "other",
//                                 "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
//                                 "zip": 400049,
//                                 "landmark": "Opposite naturals "
//                             }
//                         ],
//                         "storeCam": [
//                             "2GHohG0jEfELHb30c1s7",
//                             "i9MvNIRSZEpyhp05UIws",
//                             "b8fHqM0fyh3EJfGARu3B",
//                             "69Hf6TISpLg3SDwpYyKy",
//                             "2VS4N7OkRrM5pHfwCNuV",
//                             "GBJPmnJ4Q1oA1ynW1brZ",
//                             "rDeB5DwD97Ff1NpLzFdj",
//                             "vJEzPDAJ5koqdbGa7k0N",
//                             "PJcK0Xh43tLpR44xtB6J",
//                             "FkvmAw4pKGhcSrFULyG2",
//                             "dLclMuk5iBysJvOoWRKi",
//                             "ZPkNWVk1trHm3b8GBr4F",
//                             "iWIXIPHAiDIiA9Euexst",
//                             "SBV6Jpa7a2844xyTxDEO",
//                             "1igU0j5Cxxah1ZzYW0oT",
//                             "OgkREW5oDc40YO1psg6q",
//                             "6YEVFDcrnwwGKc4IRPqX",
//                             "qc1ymcPpmQ8yEhHM8zLt",
//                             "2bwi1jsjci7YySD6FWHi",
//                             "x605L2J7JyTzfmtgFL7M",
//                             "TyWGWqQiOSEG0f4XSGju",
//                             "yKTiNocUlsW92jUlr0P1",
//                             "XQBQVol6L4AFU0wdRluS",
//                             "tt5W2R17MPqrjJA7azDi",
//                             "NhtKi3RTN2dLVzcH2hSu",
//                             "dO3WaZ05d3hBgnlt0Fj2",
//                             "sB3sHKwlhmqpkVPm2M1F",
//                             "bSOHjFq1z3di0kl7tDOK",
//                             "fjkXn0gPGux5uYQADX6v",
//                             "Muj3jGOZ7jOWeELzLe0Y",
//                             "5kaSYObDf7s1pRxvqp0s",
//                             "d3Kcq7I3sCdzWMPgD9Rm",
//                             "9e64iZ7UQ538nKB285XT",
//                             "IpQwjUjBAJW8eyMSDDWp",
//                             "xdiMTvN28RncaBT5HHms",
//                             "nRtRMxxicFvlARWiSR8y",
//                             "w4ELXiJiAiPY4RodAz7o",
//                             "78SEsrN2FWWM1NCSzRfk",
//                             "IzSNW9mwHpHHyZ6C9cAD"
//                         ],
//                         "coin": "INR",
//                         "soFB": "dip",
//                         "acBalC": 1113.5500000000002,
//                         "note": [],
//                         "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                         "acBalGivenC": 1980,
//                         "acBalH": 395,
//                         "storeSav": [
//                             "8B9ozj7aTPvywkIvVWiK",
//                             "tjOyZV9TVTpQ1hoccOYB"
//                         ],
//                         "acBalV": 4567.523859999997,
//                         "email": "dipesious@hotmail.com",
//                         "acBalVr": 1788.25,
//                         "admin": true
//                     },
//                     "cashback": 80,
//                     "loc": [
//                         {
//                             "line1": "Dipesadsadas sadasdas",
//                             "lat": 19.0662066,
//                             "locality": "Mumbai",
//                             "id": "IND_MH_1648672299398",
//                             "area": "Dent Heal",
//                             "lon": 72.83105909999999,
//                             "zip": "400050",
//                             "city": "Mumbai Suburban",
//                             "state": "MH",
//                             "region": "Maharashtra",
//                             "line2": "",
//                             "nation": "IND"
//                         },
//                         {
//                             "id": "IND_MH_1656024949912",
//                             "lat": 19.134840193193707,
//                             "line1": "sadas sadasdasd sdasdas",
//                             "locality": "Mumbai",
//                             "nation": "IND",
//                             "state": "MH",
//                             "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
//                             "region": "Maharashtra",
//                             "zip": "400053",
//                             "lon": 72.8213950683594,
//                             "line2": "",
//                             "city": "Mumbai Suburban"
//                         }
//                     ],
//                     "schedule": {
//                         "openTueE": "19:00",
//                         "openThuE": "19:00",
//                         "openSatE": "19:00",
//                         "openMonS": "09:00",
//                         "openMon": true,
//                         "openFri": true,
//                         "opensDaily": false,
//                         "openThuS": "06:00",
//                         "openSat": true,
//                         "openMonE": "19:00",
//                         "openSun": false,
//                         "openTueS": "06:00",
//                         "openThu": true,
//                         "openWedE": "19:00",
//                         "openWed": true,
//                         "openWedS": "06:00",
//                         "openSatS": "06:00",
//                         "openSunS": "06:00",
//                         "openFriE": "19:00",
//                         "opensDailyS": "10:00",
//                         "openFriS": "06:00",
//                         "openSunE": "19:00",
//                         "opensDailyE": "23:00",
//                         "openTue": true
//                     },
//                     "log": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
//                     "phone": "9876543210",
//                     "banners": [
//                         "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
//                     ],
//                     "vOrdr": 23,
//                     "type": "Both",
//                     "addedDynamicLink": true,
//                     "name": "Fit Food",
//                     "proCat": [
//                         "gfjgjhgjhghjg",
//                         "hhkhkjhjk",
//                         "some category",
//                         "Dal",
//                         "Paneer",
//                         "Kolhapuri",
//                         "chocolate"
//                     ],
//                     "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
//                     "shareUrlV1": "https://refrclub.com/o/tobR",
//                     "upd": {
//                         "seconds": 1664544116,
//                         "nanoseconds": 946000000
//                     },
//                     "typeORDER": {
//                         "refund": false,
//                         "COD": true,
//                         "phoneHide": true,
//                         "nationCharge": 0,
//                         "exchange": false,
//                         "delivery": "Nationwide",
//                         "return": false,
//                         "freeParcel": false,
//                         "cityCharge": 0,
//                         "freeStart": 0,
//                         "logistics": false
//                     },
//                     "addedDynamicLinkP1": true,
//                     "shareUrlP1": "https://refrclub.com/o/EncD",
//                     "sin": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     }
//                 },
//                 "burnCat": "food_and_beverages",
//                 "Q": 1,
//                 "relate": [],
//                 "flash": false,
//                 "burnCatSub": "Nope",
//                 "burnBrand": "abc",
//                 "sold": 0,
//                 "warranty": true,
//                 "quota": 0,
//                 "costBurn": 1.8,
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
//                 ],
//                 "vX": [],
//                 "id": "AH1YkgZwvrKZo1zcuDN9",
//                 "burnPics": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
//                 ],
//                 "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
//                 "sin": {
//                     "seconds": 1664607562,
//                     "nanoseconds": 148000000
//                 },
//                 "title": "fried rice",
//                 "burn": true,
//                 "description": "rice",
//                 "burnDecShort": "abc",
//                 "burnDec": "abc",
//                 "burnSpec": "abc",
//                 "cost": 2,
//                 "burnHigh": "abc"
//             }
//         ],
//         "id": "GRMDD8bREgOYsqezjoXE",
//         "amGateway": 0,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "addORDER",
//             "BURN",
//             null
//         ],
//         "sin": {
//             "seconds": 1665570039,
//             "nanoseconds": 647000000
//         },
//         "amTaxTDS": 0,
//         "storeName": "Fit Food",
//         "journey": "BURN",
//         "refr": null,
//         "amRefr": 0.14,
//         "amTaxTCS": 0.02,
//         "setShortID": true,
//         "code": null,
//         "userName": "Aditya",
//         "amCost": 0
//     },
//     {
//         "com": {
//             "seconds": 1665567420,
//             "nanoseconds": 668000000
//         },
//         "amCost": 0,
//         "camp": {
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "countP": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "cbExi": 30,
//             "ban": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "storeTyp": "Both",
//             "countM": 0,
//             "paid": false,
//             "countS": 0,
//             "stage": 0,
//             "min": 1200,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "stoped": false,
//             "customPay": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "cbNew": 80,
//             "tX": "t1",
//             "max": 0,
//             "type": "flat",
//             "expiry": false,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "name": "Campaign-39",
//             "customAct": false,
//             "cbDir": 40,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "paused": false
//         },
//         "refr": {
//             "earn": 0,
//             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "name": "Aditya"
//         },
//         "id": "ShPT9Gtfo3Y26sED6Re3",
//         "amParcelCity": false,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "setShortID": true,
//         "amSave": 5.05,
//         "amGateway": 0,
//         "earn": 0,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A000Ky"
//         ],
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amBurst": 1,
//         "amTaxTCS": 0.01,
//         "ordrTYPE": "RefrCASH",
//         "code": "A000Ky",
//         "amTax": 0.05,
//         "amTotal": 1.05,
//         "amParcel": 0,
//         "invoice": {
//             "COD": false,
//             "amtRefrCash": 1.05,
//             "useRefrCash": true
//         },
//         "logistics": {
//             "typeOrdr": "F2F_ONLINE",
//             "addressDropT": "work",
//             "typeShop": "Both",
//             "PnD_freeStart": 0,
//             "PnD_cityCharge": 0,
//             "require": false,
//             "addressPickT": "shop",
//             "PnD_parcelNotFree": false,
//             "typeCat": "food_and_beverages",
//             "PnD_nationCharge": 0,
//             "addressPick": {
//                 "locality": "Mumbai",
//                 "state": "MH",
//                 "lat": 19.0662066,
//                 "region": "Maharashtra",
//                 "area": "Dent Heal",
//                 "nation": "IND",
//                 "zip": "400050",
//                 "city": "Mumbai Suburban",
//                 "lon": 72.83105909999999,
//                 "id": "IND_MH_1648672299398",
//                 "line1": "Dipesadsadas sadasdas",
//                 "line2": ""
//             },
//             "phone": "8879751140",
//             "status": -1000,
//             "name": "Aditya",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressDrop": {
//                 "landmark": "Gagandeep bus stop",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "zip": 400056,
//                 "type": "work"
//             },
//             "email": ""
//         },
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "amRefr": 0,
//         "status": -10,
//         "sin": {
//             "seconds": 1665567219,
//             "nanoseconds": 640000000
//         },
//         "amTaxTDS": 0,
//         "storeName": "Fit Food",
//         "journey": "F2F",
//         "amSale": 5,
//         "gwRefund": [
//             {}
//         ],
//         "shortID": "A000NA",
//         "upd": {
//             "seconds": 1665567219,
//             "nanoseconds": 640000000
//         },
//         "userName": "Aditya",
//         "cart": [
//             {
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "category": "chocolate",
//                 "sold": 0,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "code": "123123123",
//                 "content": true,
//                 "banners": [],
//                 "quota": 0,
//                 "cost": 1,
//                 "Q": 1,
//                 "burn": false,
//                 "reqBurn": false,
//                 "warranty": true,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "variants": [],
//                 "description": "Chocolate",
//                 "vX": [],
//                 "title": "JimJam",
//                 "price": 5,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 }
//             }
//         ]
//     },
//     {
//         "code": null,
//         "amSave": 5.05,
//         "amTaxTCS": 0.01,
//         "refr": null,
//         "amTax": 0.05,
//         "earn": 0,
//         "ordrTYPE": "RefrCASH",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "invoice": {
//             "amtRefrCash": 1.05,
//             "COD": false,
//             "useRefrCash": true
//         },
//         "com": {
//             "seconds": 1665566874,
//             "nanoseconds": 50000000
//         },
//         "camp": {
//             "countP": 0,
//             "countS": 0,
//             "min": 1200,
//             "expiry": false,
//             "ban": false,
//             "cbNew": 80,
//             "customAct": false,
//             "storeTyp": "Both",
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "max": 0,
//             "type": "flat",
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "name": "Campaign-39",
//             "cbExi": 30,
//             "paused": false,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "stoped": false,
//             "stage": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "paid": false,
//             "cbDir": 40,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "tX": "t1",
//             "customPay": 0,
//             "countM": 0
//         },
//         "setShortID": true,
//         "amBurst": 1,
//         "upd": {
//             "seconds": 1665566874,
//             "nanoseconds": 50000000
//         },
//         "amRefr": 0,
//         "amGateway": 0,
//         "amCost": 0,
//         "storeName": "Fit Food",
//         "amParcel": 0,
//         "cart": [
//             {
//                 "warranty": true,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "reqBurn": false,
//                 "banners": [],
//                 "variants": [],
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "title": "JimJam",
//                 "burn": false,
//                 "sold": 0,
//                 "description": "Chocolate",
//                 "code": "123123123",
//                 "content": true,
//                 "price": 5,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "cost": 1,
//                 "vX": [],
//                 "Q": 1,
//                 "category": "chocolate",
//                 "quota": 0
//             }
//         ],
//         "amTaxTDS": 0,
//         "shortID": "A000N1",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "id": "FMQ5U3RHLo4C8PzmI5cB",
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "sin": {
//             "seconds": 1665566874,
//             "nanoseconds": 50000000
//         },
//         "userName": "Aditya",
//         "logistics": {
//             "typeOrdr": "DIRECT_ONLINE",
//             "addressPickT": "shop",
//             "email": "",
//             "typeCat": "food_and_beverages",
//             "require": false,
//             "typeShop": "Both",
//             "status": 0,
//             "addressDropT": "work",
//             "PnD_cityCharge": 0,
//             "addressPick": {
//                 "zip": "400050",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lon": 72.83105909999999,
//                 "region": "Maharashtra",
//                 "lat": 19.0662066,
//                 "nation": "IND",
//                 "locality": "Mumbai",
//                 "area": "Dent Heal",
//                 "state": "MH",
//                 "city": "Mumbai Suburban",
//                 "line2": "",
//                 "id": "IND_MH_1648672299398"
//             },
//             "name": "Aditya",
//             "PnD_nationCharge": 0,
//             "PnD_parcelNotFree": false,
//             "addressDrop": {
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "landmark": "Gagandeep bus stop",
//                 "type": "work",
//                 "zip": 400056
//             },
//             "PnD_freeStart": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "phone": "8879751140"
//         },
//         "amTotal": 1.05,
//         "amSale": 5,
//         "amParcelCity": false,
//         "status": 0,
//         "journey": "DIRECT",
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
//     },
//     {
//         "ordrTYPE": "CASH",
//         "amSave": 0,
//         "setShortID": true,
//         "status": -10,
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "amParcelCity": false,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "camp": null,
//         "invoice": {
//             "amtRefrCash": 0,
//             "COD": false,
//             "useRefrCash": false
//         },
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "com": {
//             "seconds": 1665565996,
//             "nanoseconds": 733000000
//         },
//         "logistics": {
//             "status": 0,
//             "require": false,
//             "addressDrop": null,
//             "addressPick": null
//         },
//         "amParcel": 0,
//         "sin": {
//             "seconds": 1665565996,
//             "nanoseconds": 733000000
//         },
//         "amTotal": 0,
//         "amSale": 0,
//         "code": "A000Ky",
//         "amCost": 0,
//         "amRefr": 0,
//         "type": [
//             "CASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "POS",
//             "REDEEM",
//             "A000Ky"
//         ],
//         "userName": "Aditya",
//         "shortID": "A000M9",
//         "cart": [],
//         "amTaxTDS": 0,
//         "upd": {
//             "seconds": 1665566015,
//             "nanoseconds": 595000000
//         },
//         "earn": 0,
//         "id": "cnR09TV238Q6A9bqKRXQ",
//         "journey": "POS",
//         "amBurst": 0,
//         "amTax": 0,
//         "storeName": "Fit Food",
//         "amGateway": 0,
//         "amTaxTCS": 0,
//         "refr": null
//     },
//     {
//         "shortID": "A000M8",
//         "code": "A000Ky",
//         "invoice": {
//             "useRefrCash": false,
//             "COD": false,
//             "amtRefrCash": 0
//         },
//         "amCost": 0,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amGateway": 0,
//         "journey": "F2F",
//         "amTax": 0,
//         "amTaxTDS": 0,
//         "upd": {
//             "seconds": 1665565774,
//             "nanoseconds": 302000000
//         },
//         "type": [
//             "CASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "REDEEM",
//             "A000Ky",
//             "addORDER"
//         ],
//         "amTotal": 1200,
//         "amParcelCity": false,
//         "amBurst": 0,
//         "amTaxTCS": 0,
//         "amParcel": 0,
//         "ordrTYPE": "CASH",
//         "amRefr": 0,
//         "userName": "Aditya",
//         "amSale": 0,
//         "setShortID": true,
//         "refr": {
//             "earn": 30,
//             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "name": "Aditya"
//         },
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "logistics": {
//             "typeShop": "Both",
//             "name": "Aditya",
//             "addressPick": {
//                 "lat": 19.0662066,
//                 "locality": "Mumbai",
//                 "nation": "IND",
//                 "region": "Maharashtra",
//                 "zip": "400050",
//                 "line2": "",
//                 "state": "MH",
//                 "id": "IND_MH_1648672299398",
//                 "lon": 72.83105909999999,
//                 "area": "Dent Heal",
//                 "city": "Mumbai Suburban",
//                 "line1": "Dipesadsadas sadasdas"
//             },
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "email": "",
//             "typeCat": "food_and_beverages",
//             "addressDrop": null,
//             "require": false,
//             "addressDropT": null,
//             "phone": "+918879751140",
//             "addressPickT": "shop",
//             "typeOrdr": "F2F_OFFLINE",
//             "status": 0
//         },
//         "id": "KArfNzg5avGffh6ApiRD",
//         "cart": [],
//         "com": {
//             "seconds": 1665565804,
//             "nanoseconds": 43000000
//         },
//         "earn": 80,
//         "earnTotal": 110,
//         "camp": {
//             "paid": false,
//             "customAct": false,
//             "countP": 0,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "name": "Campaign-39",
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "customPay": 0,
//             "expiry": false,
//             "cbNew": 80,
//             "type": "flat",
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "cbExi": 30,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "stoped": false,
//             "ban": false,
//             "min": 1200,
//             "cbDir": 40,
//             "storeTyp": "Both",
//             "tX": "t1",
//             "countS": 0,
//             "countM": 0,
//             "max": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "paused": false,
//             "stage": 0,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
//         },
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "amSave": 0,
//         "status": 10,
//         "sin": {
//             "seconds": 1665565774,
//             "nanoseconds": 302000000
//         },
//         "storeName": "Fit Food"
//     },
//     {
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "amTaxTCS": 0,
//         "setShortID": true,
//         "id": "wgKcrjW6ksJulLauCnaH",
//         "storeName": "Fit Food",
//         "amCost": 0,
//         "userName": "Aditya",
//         "com": {
//             "seconds": 1665565433,
//             "nanoseconds": 267000000
//         },
//         "cart": [],
//         "amParcelCity": false,
//         "type": [
//             "CASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "POS",
//             "REDEEM",
//             "A000Ky",
//             "addORDER"
//         ],
//         "refr": null,
//         "amBurst": 0,
//         "journey": "POS",
//         "ordrTYPE": "CASH",
//         "amTax": 0,
//         "amParcel": 0,
//         "sin": {
//             "seconds": 1665565401,
//             "nanoseconds": 149000000
//         },
//         "amSave": 0,
//         "amTaxTDS": 0,
//         "amTotal": 1200,
//         "shortID": "A000Mz",
//         "logistics": {
//             "require": false,
//             "addressDrop": null,
//             "addressPick": null,
//             "status": 0
//         },
//         "code": "A000Ky",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "upd": {
//             "seconds": 1665565401,
//             "nanoseconds": 149000000
//         },
//         "status": 10,
//         "amRefr": 0,
//         "invoice": {
//             "COD": false,
//             "amtRefrCash": 0,
//             "useRefrCash": false
//         },
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "earn": 40,
//         "amGateway": 0,
//         "camp": {
//             "paused": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "stoped": false,
//             "stage": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "paid": false,
//             "cbExi": 30,
//             "customAct": false,
//             "ban": false,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "cbDir": 40,
//             "min": 1200,
//             "tX": "t1",
//             "cbNew": 80,
//             "countS": 0,
//             "expiry": false,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "name": "Campaign-39",
//             "customPay": 0,
//             "countP": 0,
//             "type": "flat",
//             "storeTyp": "Both",
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "max": 0,
//             "countM": 0
//         },
//         "amSale": 0
//     },
//     {
//         "amSale": 5,
//         "amCost": 1.05,
//         "gwID": "pay_KSgB6tQzWObfab",
//         "status": 1,
//         "amRefr": 0,
//         "shortID": "A000Mx",
//         "gwSIGN": "8aca58adcb1457b3331e780d3ece296941848b9aacc4293385e9c23093a15bbe",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amBurst": 1,
//         "id": "VpxcrtBq8KMsjGjb662a",
//         "amParcelCity": false,
//         "amTotal": 1.05,
//         "gwInfo": {
//             "method": "upi",
//             "id": "pay_KSgB6tQzWObfab",
//             "card_id": null,
//             "bank": null,
//             "status": "captured",
//             "vpa": "adityakirtane27@okaxis",
//             "currency": "INR",
//             "international": false,
//             "captured": true,
//             "amount_refunded": 0,
//             "description": "payment to Fit Food",
//             "error_step": null,
//             "tax": 0,
//             "contact": "+918879751140",
//             "error_source": null,
//             "entity": "payment",
//             "notes": {
//                 "description": "descriptionX"
//             },
//             "fee": 3,
//             "invoice_id": null,
//             "wallet": null,
//             "email": "adityakirtane27@gmail.com",
//             "error_reason": null,
//             "acquirer_data": {
//                 "rrn": "228531637058"
//             },
//             "created_at": 1665538193,
//             "order_id": "order_KSgArnlmnVWMVs",
//             "error_description": null,
//             "error_code": null,
//             "refund_status": null,
//             "amount": 105
//         },
//         "setShortID": true,
//         "earn": 0,
//         "camp": {
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "type": "flat",
//             "paused": false,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "customAct": false,
//             "stoped": false,
//             "customPay": 0,
//             "expiry": false,
//             "countM": 0,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "paid": false,
//             "max": 0,
//             "min": 1200,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "name": "Campaign-39",
//             "cbExi": 30,
//             "stage": 0,
//             "cbNew": 80,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "storeTyp": "Both",
//             "countP": 0,
//             "cbDir": 40,
//             "tX": "t1",
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "countS": 0,
//             "ban": false,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             }
//         },
//         "com": {
//             "seconds": 1665538175,
//             "nanoseconds": 571000000
//         },
//         "amParcel": 0,
//         "cart": [
//             {
//                 "banners": [],
//                 "title": "JimJam",
//                 "burn": false,
//                 "reqBurn": false,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "quota": 0,
//                 "content": true,
//                 "price": 5,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "code": "123123123",
//                 "cost": 1,
//                 "category": "chocolate",
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "description": "Chocolate",
//                 "vX": [],
//                 "Q": 1,
//                 "variants": [],
//                 "warranty": true,
//                 "sold": 0,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "id": "WdH3xlYAQlgwBkha2EsA"
//             }
//         ],
//         "code": null,
//         "upd": {
//             "seconds": 1665538175,
//             "nanoseconds": 571000000
//         },
//         "amSave": 4,
//         "amTaxTCS": 0.01,
//         "storeName": "Fit Food",
//         "amTax": 0.05,
//         "ordrTYPE": "ONLINE",
//         "logistics": {
//             "typeCat": "food_and_beverages",
//             "addressDropT": "work",
//             "PnD_nationCharge": 0,
//             "typeOrdr": "DIRECT_ONLINE",
//             "status": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressDrop": {
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "zip": 400056,
//                 "type": "work",
//                 "landmark": "Gagandeep bus stop"
//             },
//             "addressPickT": "shop",
//             "PnD_cityCharge": 0,
//             "phone": "8879751140",
//             "addressPick": {
//                 "nation": "IND",
//                 "state": "MH",
//                 "id": "IND_MH_1648672299398",
//                 "lon": 72.83105909999999,
//                 "lat": 19.0662066,
//                 "area": "Dent Heal",
//                 "zip": "400050",
//                 "region": "Maharashtra",
//                 "line1": "Dipesadsadas sadasdas",
//                 "locality": "Mumbai",
//                 "line2": "",
//                 "city": "Mumbai Suburban"
//             },
//             "PnD_freeStart": 0,
//             "require": false,
//             "typeShop": "Both",
//             "name": "Aditya",
//             "email": "",
//             "PnD_parcelNotFree": false
//         },
//         "refr": null,
//         "sin": {
//             "seconds": 1665538175,
//             "nanoseconds": 571000000
//         },
//         "invoice": {
//             "useRefrCash": false,
//             "amtRefrCash": 0,
//             "COD": false
//         },
//         "amGateway": 0.02478,
//         "amTaxTDS": 0,
//         "userName": "Aditya",
//         "gwORDR": "order_KSgArnlmnVWMVs",
//         "journey": "DIRECT",
//         "type": [
//             "ONLINE",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "sid": "8B9ozj7aTPvywkIvVWiK"
//     },
//     {
//         "earn": 0,
//         "amCost": 0,
//         "amSale": 10,
//         "status": 0,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amTaxTCS": 0.05,
//         "amRefr": 0,
//         "sin": {
//             "seconds": 1665535018,
//             "nanoseconds": 733000000
//         },
//         "cart": [
//             {
//                 "vX": [],
//                 "upd": {
//                     "seconds": 1664607617,
//                     "nanoseconds": 932000000
//                 },
//                 "cost": 5,
//                 "category": "Dal",
//                 "code": "123123123123",
//                 "Q": 1,
//                 "burn": false,
//                 "description": "rice",
//                 "variants": [],
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
//                 ],
//                 "reqBurn": false,
//                 "price": 10,
//                 "sold": 0,
//                 "id": "AH1YkgZwvrKZo1zcuDN9",
//                 "quota": 0,
//                 "warranty": true,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "title": "fried rice",
//                 "content": true,
//                 "sin": {
//                     "seconds": 1664607562,
//                     "nanoseconds": 148000000
//                 }
//             }
//         ],
//         "id": "2c8AxITR1E6wblmidMSp",
//         "journey": "F2F",
//         "amTotal": 5.25,
//         "com": {
//             "seconds": 1665535018,
//             "nanoseconds": 733000000
//         },
//         "amParcel": 0,
//         "camp": {
//             "cbNew": 80,
//             "min": 1200,
//             "stoped": false,
//             "countP": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "cbExi": 30,
//             "tX": "t1",
//             "storeTyp": "Both",
//             "ban": false,
//             "name": "Campaign-39",
//             "stage": 0,
//             "customPay": 0,
//             "type": "flat",
//             "customAct": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "paid": false,
//             "expiry": false,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "cbDir": 40,
//             "countM": 0,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "paused": false,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "max": 0,
//             "countS": 0,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             }
//         },
//         "code": "A0001N",
//         "ordrTYPE": "RefrCASH",
//         "amSave": 10.25,
//         "invoice": {
//             "amtRefrCash": 5.25,
//             "COD": false,
//             "useRefrCash": true
//         },
//         "amTax": 0.25,
//         "amTaxTDS": 0,
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A0001N"
//         ],
//         "storeName": "Fit Food",
//         "logistics": {
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressDropT": "work",
//             "name": "Dipeshin",
//             "PnD_parcelNotFree": false,
//             "typeShop": "Both",
//             "typeOrdr": "F2F_ONLINE",
//             "addressPickT": "shop",
//             "PnD_nationCharge": 0,
//             "phone": "9876543210",
//             "typeCat": "food_and_beverages",
//             "PnD_freeStart": 0,
//             "addressDrop": {
//                 "zip": 401101,
//                 "type": "work",
//                 "address": "abc",
//                 "landmark": "xyz"
//             },
//             "require": false,
//             "addressPick": {
//                 "id": "IND_MH_1648672299398",
//                 "lat": 19.0662066,
//                 "locality": "Mumbai",
//                 "state": "MH",
//                 "region": "Maharashtra",
//                 "lon": 72.83105909999999,
//                 "nation": "IND",
//                 "line1": "Dipesadsadas sadasdas",
//                 "line2": "",
//                 "area": "Dent Heal",
//                 "city": "Mumbai Suburban",
//                 "zip": "400050"
//             },
//             "PnD_cityCharge": 0,
//             "status": 0,
//             "email": "dipesious@hotmail.com"
//         },
//         "refr": {
//             "name": "Pratik B",
//             "earn": 0,
//             "uid": "8zQ1ijM8wybv8r6ggXTaCa7cZLj2"
//         },
//         "upd": {
//             "seconds": 1665535018,
//             "nanoseconds": 733000000
//         },
//         "shortID": "A000Mv",
//         "userName": "Dipeshin",
//         "amBurst": 5,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amParcelCity": false,
//         "setShortID": true,
//         "amGateway": 0
//     },
//     {
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A0001N"
//         ],
//         "sin": {
//             "seconds": 1665534764,
//             "nanoseconds": 795000000
//         },
//         "code": "A0001N",
//         "ordrTYPE": "RefrCASH",
//         "amGateway": 0,
//         "earn": 100,
//         "storeName": "Fit Food",
//         "amParcel": 0,
//         "journey": "F2F",
//         "com": {
//             "seconds": 1665534764,
//             "nanoseconds": 795000000
//         },
//         "amTotal": 784.35,
//         "amTaxTCS": 7.47,
//         "cart": [
//             {
//                 "code": "21069099",
//                 "cost": 249,
//                 "upd": {
//                     "seconds": 1656595043,
//                     "nanoseconds": 979000000
//                 },
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "vX": [],
//                 "Q": 1,
//                 "variants": [],
//                 "quota": 0,
//                 "reqBurn": false,
//                 "category": "Dal",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "sold": 0,
//                 "warranty": true,
//                 "description": "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fh25O95gX19QwOYWqprXx1656595042885?alt=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb"
//                 ],
//                 "burn": false,
//                 "price": 299,
//                 "sin": {
//                     "seconds": 1656594533,
//                     "nanoseconds": 801000000
//                 },
//                 "id": "h25O95gX19QwOYWqprXx",
//                 "title": "Dal Tadka ",
//                 "content": true
//             },
//             {
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fojgm1JXri2o54qR0fVlw1656595095219?alt=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948"
//                 ],
//                 "burn": false,
//                 "variants": [],
//                 "title": "Paneer Butter Masala ",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "Q": 1,
//                 "warranty": true,
//                 "content": true,
//                 "description": "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
//                 "price": 299,
//                 "upd": {
//                     "seconds": 1656595096,
//                     "nanoseconds": 333000000
//                 },
//                 "quota": 0,
//                 "category": "Paneer",
//                 "sold": 0,
//                 "id": "ojgm1JXri2o54qR0fVlw",
//                 "cost": 249,
//                 "vX": [],
//                 "code": "0406",
//                 "sin": {
//                     "seconds": 1656594838,
//                     "nanoseconds": 139000000
//                 },
//                 "reqBurn": false,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
//             },
//             {
//                 "vX": [],
//                 "warranty": true,
//                 "sold": 0,
//                 "quota": 0,
//                 "title": "Veg Kolhapuri",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1656595149710?alt=media&token=5fe88fd3-c22a-4aef-858d-a37e74b01496",
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907519289?alt=media&token=251cca35-dcff-4b40-a1ea-0b61871dd3fd",
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907535340?alt=media&token=f2398da4-28f3-4d10-9dd6-fbf3f9fb1999",
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907558667?alt=media&token=424c6593-6080-4639-989e-6f53e480a54e"
//                 ],
//                 "variants": [],
//                 "burn": false,
//                 "Q": 1,
//                 "sin": {
//                     "seconds": 1656594957,
//                     "nanoseconds": 592000000
//                 },
//                 "reqBurn": false,
//                 "content": true,
//                 "upd": {
//                     "seconds": 1658907561,
//                     "nanoseconds": 363000000
//                 },
//                 "cost": 249,
//                 "description": "his spicy and tasty mixed vegetable based dish has its origin in kolhapur, a historical city in south maharashtra. Kolhapuri cuisine is known for its hot, spicy and pungent flavors. however, not all the food from the Kolhapuri cuisine is spicy & robust.",
//                 "price": 299,
//                 "id": "vp92P8ftA5QcPWJ4KmGA",
//                 "category": "Kolhapuri",
//                 "code": "0406",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
//             }
//         ],
//         "refr": {
//             "uid": "8zQ1ijM8wybv8r6ggXTaCa7cZLj2",
//             "earn": 50,
//             "name": "Pratik B"
//         },
//         "amBurst": 747,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amRefr": 0,
//         "userName": "Dipeshin",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "camp": {
//             "max": 0,
//             "stoped": false,
//             "tX": "t1",
//             "dateE": {
//                 "seconds": 1666204200,
//                 "nanoseconds": 0
//             },
//             "paid": false,
//             "countS": 0,
//             "type": "flat",
//             "id": "78SEsrN2FWWM1NCSzRfk",
//             "paused": false,
//             "ban": false,
//             "customPay": 0,
//             "sin": {
//                 "seconds": 1662190042,
//                 "nanoseconds": 807000000
//             },
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "upd": {
//                 "seconds": 1662190042,
//                 "nanoseconds": 807000000
//             },
//             "cbDir": 20,
//             "customAct": false,
//             "expiry": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "countP": 0,
//             "stage": 0,
//             "cbExi": 50,
//             "name": "Flash Deal",
//             "countM": 0,
//             "cbNew": 100,
//             "dateS": {
//                 "seconds": 1662921000,
//                 "nanoseconds": 0
//             },
//             "storeTyp": "Both",
//             "min": 600
//         },
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "invoice": {
//             "useRefrCash": true,
//             "COD": false,
//             "amtRefrCash": 784.35
//         },
//         "amParcelCity": false,
//         "setShortID": true,
//         "id": "K5a4SmM6Q2nqZkR0ptrt",
//         "logistics": {
//             "PnD_freeStart": 0,
//             "PnD_parcelNotFree": false,
//             "addressPickT": "shop",
//             "typeOrdr": "F2F_ONLINE",
//             "addressPick": {
//                 "region": "Maharashtra",
//                 "state": "MH",
//                 "zip": "400050",
//                 "locality": "Mumbai",
//                 "line2": "",
//                 "lat": 19.0662066,
//                 "id": "IND_MH_1648672299398",
//                 "line1": "Dipesadsadas sadasdas",
//                 "area": "Dent Heal",
//                 "nation": "IND",
//                 "city": "Mumbai Suburban",
//                 "lon": 72.83105909999999
//             },
//             "addressDrop": {
//                 "landmark": "xyz",
//                 "address": "abc",
//                 "type": "work",
//                 "zip": 401101
//             },
//             "phone": "9876543210",
//             "status": 0,
//             "require": false,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "typeShop": "Both",
//             "PnD_nationCharge": 0,
//             "typeCat": "food_and_beverages",
//             "addressDropT": "work",
//             "PnD_cityCharge": 0,
//             "email": "dipesious@hotmail.com",
//             "name": "Dipeshin"
//         },
//         "status": 0,
//         "shortID": "A000Ms",
//         "amTaxTDS": 0,
//         "amSave": 934.35,
//         "upd": {
//             "seconds": 1665534764,
//             "nanoseconds": 795000000
//         },
//         "amTax": 37.35,
//         "amCost": 0,
//         "amSale": 897
//     },
//     {
//         "amPaid": 1800,
//         "amGive": 1800,
//         "to": "Δ",
//         "upd": {
//             "seconds": 1665534654,
//             "nanoseconds": 312000000
//         },
//         "amSave": 0,
//         "amRate": {
//             "cut": -200,
//             "cutRate": 10,
//             "pay": 1800,
//             "refill": 1800
//         },
//         "com": {
//             "seconds": 1665534654,
//             "nanoseconds": 312000000
//         },
//         "amCost": 1800,
//         "amTotal": 1800,
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "id": "CFYvk67xwOFlKxfweYHk",
//         "type": [
//             "addBalance",
//             "cashbackBalance",
//             "clientAc",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "Dipeshin",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "Δ",
//             "admin"
//         ],
//         "journey": "ADMIN",
//         "amSale": 0,
//         "sin": {
//             "seconds": 1665534654,
//             "nanoseconds": 312000000
//         },
//         "via": {
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "name": "Dipeshin"
//         },
//         "status": 10
//     },
//     {
//         "upd": {
//             "seconds": 1665533290,
//             "nanoseconds": 374000000
//         },
//         "amSale": 200,
//         "setShortID": true,
//         "storeName": "Fit Food",
//         "ordrTYPE": "RefrCASH",
//         "code": null,
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "logistics": {
//             "email": "dipesious@hotmail.com",
//             "addressPickT": "shop",
//             "PnD_cityCharge": 0,
//             "typeOrdr": "BURN",
//             "status": 0,
//             "PnD_freeStart": 0,
//             "addressPick": {
//                 "line1": "Dipesadsadas sadasdas",
//                 "region": "Maharashtra",
//                 "lat": 19.0662066,
//                 "state": "MH",
//                 "id": "IND_MH_1648672299398",
//                 "nation": "IND",
//                 "city": "Mumbai Suburban",
//                 "area": "Dent Heal",
//                 "line2": "",
//                 "zip": "400050",
//                 "locality": "Mumbai",
//                 "lon": 72.83105909999999
//             },
//             "name": "Dipeshin",
//             "require": false,
//             "addressDrop": {
//                 "landmark": "xyz",
//                 "address": "abc",
//                 "type": "work",
//                 "zip": 401101
//             },
//             "typeShop": "Both",
//             "phone": "9876543210",
//             "addressDropT": "work",
//             "PnD_parcelNotFree": false,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_nationCharge": 0,
//             "typeCat": "food_and_beverages"
//         },
//         "amParcel": 0,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amTaxTDS": 0,
//         "journey": "BURN",
//         "earn": 0,
//         "amGateway": 0,
//         "refr": null,
//         "amTax": 5,
//         "camp": null,
//         "amCost": 0,
//         "sin": {
//             "seconds": 1665533290,
//             "nanoseconds": 374000000
//         },
//         "shortID": "A000Mr",
//         "id": "9DFRpImFtCgGQ9kjK4Gu",
//         "cart": [
//             {
//                 "description": "Cotton T-shirt, Crease free",
//                 "burnPics": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1659688665932?alt=media&token=52307c86-9780-4f91-8d01-df66d0567222"
//                 ],
//                 "burn": true,
//                 "burnDec": "Activewear, anywhere. All-weather comfort and the freedom to move. Jogging, stretching, or chasing dreams, yourfitted tee won’t let you down.  With light fabric that keeps you cool and dry, this round neck T-shirt is soft, with raglan sleeves for advanced flexibility. Your exercise essential, everyone’s absolute favorite.",
//                 "sold": 0,
//                 "burnCat": "fashion_and_accessories",
//                 "Q": 1,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "burnDecShort": "Cotton T-shirt, Crease free",
//                 "relate": [],
//                 "vX": [
//                     {
//                         "id": "uWQXKBUU0IvPs419RV9O",
//                         "countQ": 1,
//                         "nowVarient": [
//                             {
//                                 "name": "#ff0000",
//                                 "type": "palete"
//                             },
//                             {
//                                 "type": "material",
//                                 "name": "Cotton"
//                             },
//                             {
//                                 "type": "size",
//                                 "name": "XS"
//                             }
//                         ]
//                     }
//                 ],
//                 "flash": false,
//                 "burnCatSub": "Nope",
//                 "storeINFO": {
//                     "vFan": 21,
//                     "name": "Fit Food",
//                     "shareUrlP1": "https://refrclub.com/o/EncD",
//                     "upd": {
//                         "seconds": 1664544116,
//                         "nanoseconds": 946000000
//                     },
//                     "products": 18,
//                     "typeORDER": {
//                         "cityCharge": 0,
//                         "delivery": "Nationwide",
//                         "COD": true,
//                         "exchange": false,
//                         "return": false,
//                         "freeParcel": false,
//                         "phoneHide": true,
//                         "refund": false,
//                         "freeStart": 0,
//                         "nationCharge": 0,
//                         "logistics": false
//                     },
//                     "banners": [
//                         "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
//                     ],
//                     "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
//                     "vAte": 151.2,
//                     "proCat": [
//                         "gfjgjhgjhghjg",
//                         "hhkhkjhjk",
//                         "some category",
//                         "Dal",
//                         "Paneer",
//                         "Kolhapuri",
//                         "chocolate"
//                     ],
//                     "type": "Both",
//                     "userInfo": {
//                         "acBalH": 695,
//                         "storeCam": [
//                             "2GHohG0jEfELHb30c1s7",
//                             "i9MvNIRSZEpyhp05UIws",
//                             "b8fHqM0fyh3EJfGARu3B",
//                             "69Hf6TISpLg3SDwpYyKy",
//                             "2VS4N7OkRrM5pHfwCNuV",
//                             "GBJPmnJ4Q1oA1ynW1brZ",
//                             "rDeB5DwD97Ff1NpLzFdj",
//                             "vJEzPDAJ5koqdbGa7k0N",
//                             "PJcK0Xh43tLpR44xtB6J",
//                             "FkvmAw4pKGhcSrFULyG2",
//                             "dLclMuk5iBysJvOoWRKi",
//                             "ZPkNWVk1trHm3b8GBr4F",
//                             "iWIXIPHAiDIiA9Euexst",
//                             "SBV6Jpa7a2844xyTxDEO",
//                             "1igU0j5Cxxah1ZzYW0oT",
//                             "OgkREW5oDc40YO1psg6q",
//                             "6YEVFDcrnwwGKc4IRPqX",
//                             "qc1ymcPpmQ8yEhHM8zLt",
//                             "2bwi1jsjci7YySD6FWHi",
//                             "x605L2J7JyTzfmtgFL7M",
//                             "TyWGWqQiOSEG0f4XSGju",
//                             "yKTiNocUlsW92jUlr0P1",
//                             "XQBQVol6L4AFU0wdRluS",
//                             "tt5W2R17MPqrjJA7azDi",
//                             "NhtKi3RTN2dLVzcH2hSu",
//                             "dO3WaZ05d3hBgnlt0Fj2",
//                             "sB3sHKwlhmqpkVPm2M1F",
//                             "bSOHjFq1z3di0kl7tDOK",
//                             "fjkXn0gPGux5uYQADX6v",
//                             "Muj3jGOZ7jOWeELzLe0Y",
//                             "5kaSYObDf7s1pRxvqp0s",
//                             "d3Kcq7I3sCdzWMPgD9Rm",
//                             "9e64iZ7UQ538nKB285XT",
//                             "IpQwjUjBAJW8eyMSDDWp",
//                             "xdiMTvN28RncaBT5HHms",
//                             "nRtRMxxicFvlARWiSR8y",
//                             "w4ELXiJiAiPY4RodAz7o",
//                             "78SEsrN2FWWM1NCSzRfk",
//                             "IzSNW9mwHpHHyZ6C9cAD"
//                         ],
//                         "upd": {
//                             "seconds": 1665263257,
//                             "nanoseconds": 854000000
//                         },
//                         "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                         "tokenSNS_": [
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
//                             "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
//                             "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
//                             "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
//                             "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
//                             "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
//                             "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
//                             "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
//                             "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
//                             "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
//                             "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
//                             "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
//                             "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
//                             "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
//                             "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
//                             "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
//                         ],
//                         "log": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "cashback": 80,
//                         "phone": "+919876543210",
//                         "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
//                         "emailV": false,
//                         "storeLoc": [
//                             "8B9ozj7aTPvywkIvVWiK"
//                         ],
//                         "iso": "IND",
//                         "display": "",
//                         "acBalVp": 16000,
//                         "coin": "INR",
//                         "acBalV": 4567.523859999997,
//                         "acBalC": 208.14999999999998,
//                         "soTW": "dip",
//                         "email": "dipesious@hotmail.com",
//                         "axess": [
//                             "phone"
//                         ],
//                         "acBalGivenC": 180,
//                         "soYT": "simran",
//                         "admin": true,
//                         "BankUPI": {
//                             "username": "dipesious",
//                             "handle": "dbs",
//                             "active": true,
//                             "contact_id": "cont_K9KglWSOWnTNTY",
//                             "verified": true,
//                             "address": "dipesious@dbs",
//                             "fund_account_id": "fa_K9hVBLRtX776iF"
//                         },
//                         "emails": [],
//                         "soIG": "dipesious",
//                         "sin": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "addr": [
//                             {
//                                 "type": "work",
//                                 "address": "abc",
//                                 "landmark": "xyz",
//                                 "zip": 401101
//                             },
//                             {
//                                 "zip": 401101,
//                                 "address": "Google",
//                                 "landmark": "Tower",
//                                 "type": "home"
//                             },
//                             {
//                                 "address": "101, Leena residence gulmohar road miraj",
//                                 "landmark": "Opposite gagandeep restaurant ",
//                                 "zip": 400056,
//                                 "type": "other"
//                             },
//                             {
//                                 "landmark": "Opposite naturals ",
//                                 "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
//                                 "type": "other",
//                                 "zip": 400049
//                             }
//                         ],
//                         "storeSav": [
//                             "8B9ozj7aTPvywkIvVWiK",
//                             "tjOyZV9TVTpQ1hoccOYB"
//                         ],
//                         "acBalCr": 20,
//                         "note": [],
//                         "payout": false,
//                         "soWA": "9876543210",
//                         "bucket": [
//                             "6cZGYy20f5boFbbsXtYB",
//                             "qqMPDmqy0o01YiiIYqaE",
//                             "kxczduUeyyYUvoCyLvnO",
//                             "6uhvn2NoTtN8ONPuM2qj"
//                         ],
//                         "ban": false,
//                         "name": "Dipeshin",
//                         "acBalP": 0,
//                         "acBalVr": 891.55,
//                         "soFB": "dip",
//                         "acBalGivenV": 1000
//                     },
//                     "email": "dipeshbhoir@hotmail.com",
//                     "addedDynamicLinkP1": true,
//                     "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                     "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "cashback": 80,
//                     "cat": "food_and_beverages",
//                     "loc": [
//                         {
//                             "line1": "Dipesadsadas sadasdas",
//                             "zip": "400050",
//                             "nation": "IND",
//                             "locality": "Mumbai",
//                             "city": "Mumbai Suburban",
//                             "lat": 19.0662066,
//                             "area": "Dent Heal",
//                             "id": "IND_MH_1648672299398",
//                             "lon": 72.83105909999999,
//                             "state": "MH",
//                             "line2": "",
//                             "region": "Maharashtra"
//                         },
//                         {
//                             "lat": 19.134840193193707,
//                             "lon": 72.8213950683594,
//                             "line1": "sadas sadasdasd sdasdas",
//                             "city": "Mumbai Suburban",
//                             "nation": "IND",
//                             "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
//                             "line2": "",
//                             "zip": "400053",
//                             "region": "Maharashtra",
//                             "locality": "Mumbai",
//                             "id": "IND_MH_1656024949912",
//                             "state": "MH"
//                         }
//                     ],
//                     "vGave": 1240,
//                     "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
//                     "about": "About the store",
//                     "subCat": "sc-food_and_beverages-cafe",
//                     "addedDynamicLink": true,
//                     "log": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "shareUrlB1": "https://refrclub.com/o/4Yif",
//                     "phone": "9876543210",
//                     "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "vEarn": 24000,
//                     "vOrdr": 21,
//                     "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "schedule": {
//                         "openSun": false,
//                         "openFriE": "19:00",
//                         "openMonS": "09:00",
//                         "openMonE": "19:00",
//                         "openWedE": "19:00",
//                         "opensDailyE": "23:00",
//                         "opensDaily": false,
//                         "openThuE": "19:00",
//                         "openTue": true,
//                         "opensDailyS": "10:00",
//                         "openSat": true,
//                         "openThuS": "06:00",
//                         "openFri": true,
//                         "openTueE": "19:00",
//                         "openThu": true,
//                         "openSatS": "06:00",
//                         "openSunE": "19:00",
//                         "openFriS": "06:00",
//                         "openSatE": "19:00",
//                         "openWed": true,
//                         "openSunS": "06:00",
//                         "openMon": true,
//                         "openWedS": "06:00",
//                         "openTueS": "06:00"
//                     },
//                     "shareUrlV1": "https://refrclub.com/o/tobR",
//                     "id": "8B9ozj7aTPvywkIvVWiK",
//                     "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "shareUrlX1": "https://refrclub.com/o/WoQJ",
//                     "sin": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     }
//                 },
//                 "costBurn": 90,
//                 "variants": [
//                     {
//                         "type": "palete",
//                         "name": "#ffff00"
//                     },
//                     {
//                         "type": "palete",
//                         "name": "#ff0000"
//                     },
//                     {
//                         "name": "#008000",
//                         "type": "palete"
//                     },
//                     {
//                         "name": "Cotton",
//                         "type": "material"
//                     },
//                     {
//                         "type": "size",
//                         "name": "XL"
//                     },
//                     {
//                         "name": "XS",
//                         "type": "size"
//                     },
//                     {
//                         "name": "S",
//                         "type": "size"
//                     },
//                     {
//                         "name": "M",
//                         "type": "size"
//                     }
//                 ],
//                 "burnBrand": "Fit Food",
//                 "title": "New Product",
//                 "id": "uWQXKBUU0IvPs419RV9O",
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1654168139744?alt=media&token=f577b316-c499-4929-b46a-2c2ed7d21b08"
//                 ],
//                 "category": "some category",
//                 "burnSpec": "All weather comfort",
//                 "burnHigh": "Moisture-wicking\nWrinkle resistant\nPure Quick Dry Fabric",
//                 "quota": 0,
//                 "warranty": true,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "code": "123456",
//                 "cost": 100,
//                 "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1659688665932?alt=media&token=52307c86-9780-4f91-8d01-df66d0567222",
//                 "reqBurn": false,
//                 "price": 200,
//                 "upd": {
//                     "seconds": 1662623385,
//                     "nanoseconds": 358000000
//                 },
//                 "content": false,
//                 "sin": {
//                     "seconds": 1648679682,
//                     "nanoseconds": 333000000
//                 }
//             }
//         ],
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "addORDER",
//             "BURN",
//             null
//         ],
//         "status": 0,
//         "amBurst": 100,
//         "invoice": {
//             "COD": false,
//             "amtRefrCash": 105,
//             "useRefrCash": true
//         },
//         "amSave": 205,
//         "com": {
//             "seconds": 1665533290,
//             "nanoseconds": 374000000
//         },
//         "amParcelCity": false,
//         "amTotal": 105,
//         "amRefr": 7.000000000000001,
//         "amTaxTCS": 1,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "userName": "Dipeshin"
//     },
//     {
//         "amTax": 0.05,
//         "gwInfo": {
//             "fee": 3,
//             "order_id": "order_KSeYkqcmME1hZd",
//             "currency": "INR",
//             "entity": "payment",
//             "international": false,
//             "status": "captured",
//             "method": "upi",
//             "notes": {
//                 "description": "descriptionX"
//             },
//             "email": "adityakirtane27@gmail.com",
//             "amount": 105,
//             "amount_refunded": 0,
//             "card_id": null,
//             "id": "pay_KSeYze2tRDVFmY",
//             "error_reason": null,
//             "tax": 0,
//             "captured": true,
//             "error_description": null,
//             "error_code": null,
//             "error_step": null,
//             "wallet": null,
//             "created_at": 1665532506,
//             "acquirer_data": {
//                 "rrn": "228531312272"
//             },
//             "error_source": null,
//             "refund_status": null,
//             "description": "payment to Fit Food",
//             "invoice_id": null,
//             "contact": "+918879751140",
//             "bank": null,
//             "vpa": "adityakirtane27@okaxis"
//         },
//         "status": 1,
//         "invoice": {
//             "COD": false,
//             "amtRefrCash": 0,
//             "useRefrCash": false
//         },
//         "shortID": "A000Mp",
//         "gwORDR": "order_KSeYkqcmME1hZd",
//         "logistics": {
//             "email": "",
//             "PnD_nationCharge": 0,
//             "require": false,
//             "name": "Aditya",
//             "typeOrdr": "DIRECT_ONLINE",
//             "PnD_cityCharge": 0,
//             "status": 0,
//             "typeShop": "Both",
//             "addressPick": {
//                 "state": "MH",
//                 "id": "IND_MH_1648672299398",
//                 "zip": "400050",
//                 "line1": "Dipesadsadas sadasdas",
//                 "line2": "",
//                 "area": "Dent Heal",
//                 "region": "Maharashtra",
//                 "city": "Mumbai Suburban",
//                 "nation": "IND",
//                 "lon": 72.83105909999999,
//                 "lat": 19.0662066,
//                 "locality": "Mumbai"
//             },
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_parcelNotFree": false,
//             "typeCat": "food_and_beverages",
//             "addressPickT": "shop",
//             "phone": "8879751140",
//             "PnD_freeStart": 0,
//             "addressDropT": "work",
//             "addressDrop": {
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "zip": 400056,
//                 "landmark": "Gagandeep bus stop",
//                 "type": "work"
//             }
//         },
//         "amCost": 1.05,
//         "ordrTYPE": "ONLINE",
//         "amSave": 4,
//         "amGateway": 0.02478,
//         "sin": {
//             "seconds": 1665532489,
//             "nanoseconds": 818000000
//         },
//         "code": null,
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "camp": {
//             "cbDir": 40,
//             "customAct": false,
//             "max": 0,
//             "paused": false,
//             "type": "flat",
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "ban": false,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "min": 1200,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "expiry": false,
//             "tX": "t1",
//             "name": "Campaign-39",
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "storeTyp": "Both",
//             "countS": 0,
//             "paid": false,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "cbExi": 30,
//             "countM": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "countP": 0,
//             "stage": 0,
//             "cbNew": 80,
//             "customPay": 0,
//             "stoped": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
//         },
//         "amBurst": 1,
//         "gwID": "pay_KSeYze2tRDVFmY",
//         "amTaxTCS": 0.01,
//         "userName": "Aditya",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amRefr": 0,
//         "amParcelCity": false,
//         "amTaxTDS": 0,
//         "amParcel": 0,
//         "amTotal": 1.05,
//         "upd": {
//             "seconds": 1665532489,
//             "nanoseconds": 818000000
//         },
//         "journey": "DIRECT",
//         "gwSIGN": "ae1770c18886679857facd314163369ddf36807cf3998990b007e92a1f840e58",
//         "com": {
//             "seconds": 1665532489,
//             "nanoseconds": 818000000
//         },
//         "storeName": "Fit Food",
//         "type": [
//             "ONLINE",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "amSale": 5,
//         "cart": [
//             {
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "price": 5,
//                 "code": "123123123",
//                 "variants": [],
//                 "warranty": true,
//                 "cost": 1,
//                 "content": true,
//                 "banners": [],
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "vX": [],
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "category": "chocolate",
//                 "reqBurn": false,
//                 "sold": 0,
//                 "description": "Chocolate",
//                 "burn": false,
//                 "title": "JimJam",
//                 "Q": 1,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "quota": 0
//             }
//         ],
//         "id": "4FuYYzqjR3GjG0OuC50r",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "setShortID": true,
//         "refr": null,
//         "earn": 0
//     },
//     {
//         "amSave": 934.35,
//         "storeName": "Fit Food",
//         "sin": {
//             "seconds": 1665532254,
//             "nanoseconds": 6000000
//         },
//         "earn": 20,
//         "camp": {
//             "cbNew": 100,
//             "min": 600,
//             "dateS": {
//                 "seconds": 1662921000,
//                 "nanoseconds": 0
//             },
//             "id": "78SEsrN2FWWM1NCSzRfk",
//             "upd": {
//                 "seconds": 1662190042,
//                 "nanoseconds": 807000000
//             },
//             "paid": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "name": "Flash Deal",
//             "customAct": false,
//             "ban": false,
//             "storeTyp": "Both",
//             "cbDir": 20,
//             "paused": false,
//             "countS": 0,
//             "countP": 0,
//             "dateE": {
//                 "seconds": 1666204200,
//                 "nanoseconds": 0
//             },
//             "expiry": false,
//             "countM": 0,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "customPay": 0,
//             "type": "flat",
//             "max": 0,
//             "tX": "t1",
//             "stage": 0,
//             "stoped": false,
//             "cbExi": 50,
//             "sin": {
//                 "seconds": 1662190042,
//                 "nanoseconds": 807000000
//             }
//         },
//         "journey": "DIRECT",
//         "logistics": {
//             "require": false,
//             "PnD_cityCharge": 0,
//             "name": "Dipeshin",
//             "typeCat": "food_and_beverages",
//             "typeOrdr": "DIRECT_ONLINE",
//             "phone": "9876543210",
//             "PnD_freeStart": 0,
//             "addressDropT": "work",
//             "email": "dipesious@hotmail.com",
//             "addressPickT": "shop",
//             "PnD_parcelNotFree": false,
//             "typeShop": "Both",
//             "PnD_nationCharge": 0,
//             "addressDrop": {
//                 "address": "abc",
//                 "zip": 401101,
//                 "landmark": "xyz",
//                 "type": "work"
//             },
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressPick": {
//                 "id": "IND_MH_1648672299398",
//                 "locality": "Mumbai",
//                 "area": "Dent Heal",
//                 "lon": 72.83105909999999,
//                 "line2": "",
//                 "region": "Maharashtra",
//                 "state": "MH",
//                 "lat": 19.0662066,
//                 "zip": "400050",
//                 "nation": "IND",
//                 "city": "Mumbai Suburban",
//                 "line1": "Dipesadsadas sadasdas"
//             },
//             "status": 0
//         },
//         "code": null,
//         "amTaxTCS": 7.47,
//         "amCost": 0,
//         "status": 0,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amSale": 897,
//         "userName": "Dipeshin",
//         "com": {
//             "seconds": 1665532254,
//             "nanoseconds": 6000000
//         },
//         "amBurst": 747,
//         "invoice": {
//             "COD": false,
//             "amtRefrCash": 784.35,
//             "useRefrCash": true
//         },
//         "amTotal": 784.35,
//         "setShortID": true,
//         "amRefr": 0,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amGateway": 0,
//         "amTax": 37.35,
//         "amParcel": 0,
//         "shortID": "A000Mn",
//         "upd": {
//             "seconds": 1665532254,
//             "nanoseconds": 6000000
//         },
//         "id": "NRgZuFPyIRUJUnJE4Oz1",
//         "ordrTYPE": "RefrCASH",
//         "cart": [
//             {
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "description": "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
//                 "id": "h25O95gX19QwOYWqprXx",
//                 "burn": false,
//                 "upd": {
//                     "seconds": 1656595043,
//                     "nanoseconds": 979000000
//                 },
//                 "variants": [],
//                 "quota": 0,
//                 "content": true,
//                 "cost": 249,
//                 "warranty": true,
//                 "reqBurn": false,
//                 "sold": 0,
//                 "price": 299,
//                 "title": "Dal Tadka ",
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fh25O95gX19QwOYWqprXx1656595042885?alt=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb"
//                 ],
//                 "Q": 1,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "vX": [],
//                 "sin": {
//                     "seconds": 1656594533,
//                     "nanoseconds": 801000000
//                 },
//                 "category": "Dal",
//                 "code": "21069099"
//             },
//             {
//                 "code": "0406",
//                 "title": "Paneer Butter Masala ",
//                 "Q": 1,
//                 "category": "Paneer",
//                 "sold": 0,
//                 "price": 299,
//                 "burn": false,
//                 "description": "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
//                 "warranty": true,
//                 "content": true,
//                 "quota": 0,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "cost": 249,
//                 "id": "ojgm1JXri2o54qR0fVlw",
//                 "vX": [],
//                 "reqBurn": false,
//                 "upd": {
//                     "seconds": 1656595096,
//                     "nanoseconds": 333000000
//                 },
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "sin": {
//                     "seconds": 1656594838,
//                     "nanoseconds": 139000000
//                 },
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fojgm1JXri2o54qR0fVlw1656595095219?alt=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948"
//                 ],
//                 "variants": []
//             },
//             {
//                 "id": "vp92P8ftA5QcPWJ4KmGA",
//                 "quota": 0,
//                 "title": "Veg Kolhapuri",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "price": 299,
//                 "reqBurn": false,
//                 "sin": {
//                     "seconds": 1656594957,
//                     "nanoseconds": 592000000
//                 },
//                 "category": "Kolhapuri",
//                 "variants": [],
//                 "code": "0406",
//                 "Q": 1,
//                 "warranty": true,
//                 "sold": 0,
//                 "vX": [],
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "content": true,
//                 "upd": {
//                     "seconds": 1658907561,
//                     "nanoseconds": 363000000
//                 },
//                 "description": "his spicy and tasty mixed vegetable based dish has its origin in kolhapur, a historical city in south maharashtra. Kolhapuri cuisine is known for its hot, spicy and pungent flavors. however, not all the food from the Kolhapuri cuisine is spicy & robust.",
//                 "burn": false,
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1656595149710?alt=media&token=5fe88fd3-c22a-4aef-858d-a37e74b01496",
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907519289?alt=media&token=251cca35-dcff-4b40-a1ea-0b61871dd3fd",
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907535340?alt=media&token=f2398da4-28f3-4d10-9dd6-fbf3f9fb1999",
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fvp92P8ftA5QcPWJ4KmGA1658907558667?alt=media&token=424c6593-6080-4639-989e-6f53e480a54e"
//                 ],
//                 "cost": 249
//             }
//         ],
//         "amTaxTDS": 0,
//         "refr": null,
//         "amParcelCity": false
//     },
//     {
//         "com": {
//             "seconds": 1665530773,
//             "nanoseconds": 293000000
//         },
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "amParcel": 0,
//         "logistics": {
//             "addressDropT": "work",
//             "name": "Dipeshin",
//             "typeOrdr": "DIRECT_ONLINE",
//             "typeShop": "Both",
//             "phone": "9876543210",
//             "email": "dipesious@hotmail.com",
//             "PnD_parcelNotFree": false,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressPick": {
//                 "id": "IND_MH_1648672299398",
//                 "line2": "",
//                 "state": "MH",
//                 "zip": "400050",
//                 "area": "Dent Heal",
//                 "nation": "IND",
//                 "line1": "Dipesadsadas sadasdas",
//                 "region": "Maharashtra",
//                 "lon": 72.83105909999999,
//                 "lat": 19.0662066,
//                 "city": "Mumbai Suburban",
//                 "locality": "Mumbai"
//             },
//             "typeCat": "food_and_beverages",
//             "addressDrop": {
//                 "type": "work",
//                 "landmark": "xyz",
//                 "address": "abc",
//                 "zip": 401101
//             },
//             "addressPickT": "shop",
//             "PnD_nationCharge": 0,
//             "status": 0,
//             "PnD_cityCharge": 0,
//             "PnD_freeStart": 0,
//             "require": false
//         },
//         "amParcelCity": false,
//         "amTotal": 5.25,
//         "amTaxTCS": 0.05,
//         "amTax": 0.25,
//         "storeName": "Fit Food",
//         "amGateway": 0,
//         "code": null,
//         "setShortID": true,
//         "camp": {
//             "min": 1200,
//             "stoped": false,
//             "customPay": 0,
//             "stage": 0,
//             "max": 0,
//             "expiry": false,
//             "paid": false,
//             "tX": "t1",
//             "cbExi": 30,
//             "customAct": false,
//             "name": "Campaign-39",
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "paused": false,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "type": "flat",
//             "countS": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "cbDir": 40,
//             "countP": 0,
//             "cbNew": 80,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "countM": 0,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "ban": false,
//             "storeTyp": "Both"
//         },
//         "status": 0,
//         "amBurst": 5,
//         "cart": [
//             {
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
//                 ],
//                 "id": "AH1YkgZwvrKZo1zcuDN9",
//                 "category": "Dal",
//                 "Q": 1,
//                 "burn": false,
//                 "content": true,
//                 "sold": 0,
//                 "quota": 0,
//                 "title": "fried rice",
//                 "upd": {
//                     "seconds": 1664607617,
//                     "nanoseconds": 932000000
//                 },
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "vX": [],
//                 "sin": {
//                     "seconds": 1664607562,
//                     "nanoseconds": 148000000
//                 },
//                 "cost": 5,
//                 "warranty": true,
//                 "price": 10,
//                 "code": "123123123123",
//                 "description": "rice",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "reqBurn": false,
//                 "variants": []
//             }
//         ],
//         "amCost": 0,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "invoice": {
//             "amtRefrCash": 5.25,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "id": "e4lg66IxzeHvprkDbomm",
//         "ordrTYPE": "RefrCASH",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amSale": 10,
//         "shortID": "A000Ml",
//         "amRefr": 0,
//         "earn": 0,
//         "refr": null,
//         "userName": "Dipeshin",
//         "amSave": 10.25,
//         "sin": {
//             "seconds": 1665530773,
//             "nanoseconds": 293000000
//         },
//         "upd": {
//             "seconds": 1665530773,
//             "nanoseconds": 293000000
//         },
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amTaxTDS": 0,
//         "journey": "DIRECT"
//     },
//     {
//         "refr": null,
//         "amTotal": 5.25,
//         "id": "n9hnNYrreYnkqla0C3Qd",
//         "journey": "DIRECT",
//         "earn": 0,
//         "invoice": {
//             "COD": false,
//             "useRefrCash": true,
//             "amtRefrCash": 5.25
//         },
//         "com": {
//             "seconds": 1665530659,
//             "nanoseconds": 730000000
//         },
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amSale": 10,
//         "amSave": 10.25,
//         "code": null,
//         "amParcel": 0,
//         "logistics": {
//             "PnD_nationCharge": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "PnD_parcelNotFree": false,
//             "typeCat": "food_and_beverages",
//             "typeOrdr": "DIRECT_ONLINE",
//             "PnD_freeStart": 0,
//             "PnD_cityCharge": 0,
//             "phone": "9876543210",
//             "addressPickT": "shop",
//             "email": "dipesious@hotmail.com",
//             "name": "Dipeshin",
//             "addressDropT": "work",
//             "require": false,
//             "addressPick": {
//                 "city": "Mumbai Suburban",
//                 "state": "MH",
//                 "area": "Dent Heal",
//                 "nation": "IND",
//                 "lat": 19.0662066,
//                 "zip": "400050",
//                 "line1": "Dipesadsadas sadasdas",
//                 "lon": 72.83105909999999,
//                 "region": "Maharashtra",
//                 "locality": "Mumbai",
//                 "line2": "",
//                 "id": "IND_MH_1648672299398"
//             },
//             "status": 0,
//             "typeShop": "Both",
//             "addressDrop": {
//                 "type": "work",
//                 "zip": 401101,
//                 "address": "abc",
//                 "landmark": "xyz"
//             }
//         },
//         "userName": "Dipeshin",
//         "amTaxTCS": 0.05,
//         "amParcelCity": false,
//         "amGateway": 0,
//         "sin": {
//             "seconds": 1665530659,
//             "nanoseconds": 730000000
//         },
//         "amCost": 0,
//         "status": 0,
//         "amTaxTDS": 0,
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "cart": [
//             {
//                 "category": "Dal",
//                 "content": true,
//                 "variants": [],
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "vX": [],
//                 "quota": 0,
//                 "sin": {
//                     "seconds": 1664607562,
//                     "nanoseconds": 148000000
//                 },
//                 "title": "fried rice",
//                 "warranty": true,
//                 "id": "AH1YkgZwvrKZo1zcuDN9",
//                 "upd": {
//                     "seconds": 1664607617,
//                     "nanoseconds": 932000000
//                 },
//                 "burn": false,
//                 "price": 10,
//                 "description": "rice",
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
//                 ],
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "reqBurn": false,
//                 "Q": 1,
//                 "sold": 0,
//                 "cost": 5,
//                 "code": "123123123123"
//             }
//         ],
//         "storeName": "Fit Food",
//         "upd": {
//             "seconds": 1665530659,
//             "nanoseconds": 730000000
//         },
//         "amTax": 0.25,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "ordrTYPE": "RefrCASH",
//         "amRefr": 0,
//         "camp": {
//             "paid": false,
//             "type": "flat",
//             "customAct": false,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "countS": 0,
//             "storeTyp": "Both",
//             "max": 0,
//             "paused": false,
//             "stoped": false,
//             "name": "Campaign-39",
//             "customPay": 0,
//             "countP": 0,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "countM": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "cbDir": 40,
//             "ban": false,
//             "min": 1200,
//             "cbExi": 30,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "expiry": false,
//             "cbNew": 80,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "tX": "t1",
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "stage": 0
//         },
//         "amBurst": 5,
//         "shortID": "A000Mj",
//         "setShortID": true
//     },
//     {
//         "amTax": 5,
//         "amTaxTDS": 0,
//         "amSale": 200,
//         "amTotal": 105,
//         "code": null,
//         "logistics": {
//             "PnD_parcelNotFree": false,
//             "email": "",
//             "addressDropT": "home",
//             "addressPickT": "shop",
//             "require": false,
//             "PnD_cityCharge": 0,
//             "typeCat": "food_and_beverages",
//             "addressPick": {
//                 "line1": "Dipesadsadas sadasdas",
//                 "region": "Maharashtra",
//                 "state": "MH",
//                 "area": "Dent Heal",
//                 "city": "Mumbai Suburban",
//                 "lon": 72.83105909999999,
//                 "locality": "Mumbai",
//                 "line2": "",
//                 "lat": 19.0662066,
//                 "nation": "IND",
//                 "id": "IND_MH_1648672299398",
//                 "zip": "400050"
//             },
//             "typeShop": "Both",
//             "status": 20,
//             "PnD_freeStart": 0,
//             "name": "Shraddha ",
//             "phone": "9833006431",
//             "PnD_nationCharge": 0,
//             "typeOrdr": "BURN",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressDrop": {
//                 "zip": 400056,
//                 "landmark": "Juhu ",
//                 "type": "home",
//                 "address": "Leena residency "
//             }
//         },
//         "amSave": 205,
//         "ordrTYPE": "RefrCASH",
//         "sin": {
//             "seconds": 1664640322,
//             "nanoseconds": 653000000
//         },
//         "userName": "Shraddha ",
//         "journey": "BURN",
//         "cart": [
//             {
//                 "code": "123456",
//                 "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1659688665932?alt=media&token=52307c86-9780-4f91-8d01-df66d0567222",
//                 "burn": true,
//                 "burnHigh": "Moisture-wicking\nWrinkle resistant\nPure Quick Dry Fabric",
//                 "relate": [],
//                 "reqBurn": false,
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1654168139744?alt=media&token=f577b316-c499-4929-b46a-2c2ed7d21b08"
//                 ],
//                 "burnSpec": "All weather comfort",
//                 "burnCat": "fashion_and_accessories",
//                 "storeINFO": {
//                     "log": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "cat": "food_and_beverages",
//                     "name": "Fit Food",
//                     "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "upd": {
//                         "seconds": 1664544116,
//                         "nanoseconds": 946000000
//                     },
//                     "type": "Both",
//                     "addedDynamicLinkP1": true,
//                     "typeORDER": {
//                         "freeStart": 0,
//                         "exchange": false,
//                         "logistics": false,
//                         "freeParcel": false,
//                         "refund": false,
//                         "cityCharge": 0,
//                         "delivery": "Nationwide",
//                         "phoneHide": true,
//                         "COD": true,
//                         "nationCharge": 0,
//                         "return": false
//                     },
//                     "products": 18,
//                     "shareUrlP1": "https://refrclub.com/o/EncD",
//                     "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "subCat": "sc-food_and_beverages-cafe",
//                     "vOrdr": 15,
//                     "shareUrlB1": "https://refrclub.com/o/4Yif",
//                     "vFan": 15,
//                     "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
//                     "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                     "shareUrlX1": "https://refrclub.com/o/WoQJ",
//                     "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
//                     "vEarn": 16300,
//                     "id": "8B9ozj7aTPvywkIvVWiK",
//                     "shareUrlV1": "https://refrclub.com/o/tobR",
//                     "addedDynamicLink": true,
//                     "phone": "9876543210",
//                     "sin": {
//                         "seconds": 1648672299,
//                         "nanoseconds": 867000000
//                     },
//                     "vGave": 820,
//                     "loc": [
//                         {
//                             "state": "MH",
//                             "lat": 19.0662066,
//                             "city": "Mumbai Suburban",
//                             "lon": 72.83105909999999,
//                             "locality": "Mumbai",
//                             "line1": "Dipesadsadas sadasdas",
//                             "line2": "",
//                             "id": "IND_MH_1648672299398",
//                             "region": "Maharashtra",
//                             "zip": "400050",
//                             "area": "Dent Heal",
//                             "nation": "IND"
//                         },
//                         {
//                             "city": "Mumbai Suburban",
//                             "region": "Maharashtra",
//                             "id": "IND_MH_1656024949912",
//                             "nation": "IND",
//                             "state": "MH",
//                             "lat": 19.134840193193707,
//                             "zip": "400053",
//                             "line2": "",
//                             "lon": 72.8213950683594,
//                             "line1": "sadas sadasdasd sdasdas",
//                             "locality": "Mumbai",
//                             "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India"
//                         }
//                     ],
//                     "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
//                     "schedule": {
//                         "openThuE": "19:00",
//                         "openTueE": "19:00",
//                         "openThuS": "06:00",
//                         "openWed": true,
//                         "openSunE": "19:00",
//                         "openMonS": "09:00",
//                         "openTueS": "06:00",
//                         "openMon": true,
//                         "openSat": true,
//                         "openFri": true,
//                         "openThu": true,
//                         "openWedE": "19:00",
//                         "opensDaily": false,
//                         "openFriS": "06:00",
//                         "openTue": true,
//                         "openMonE": "19:00",
//                         "openFriE": "19:00",
//                         "openSunS": "06:00",
//                         "opensDailyE": "23:00",
//                         "openWedS": "06:00",
//                         "openSatE": "19:00",
//                         "opensDailyS": "10:00",
//                         "openSatS": "06:00",
//                         "openSun": false
//                     },
//                     "userInfo": {
//                         "acBalVp": 0,
//                         "emailV": false,
//                         "tokenSNS_": [
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
//                             "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
//                             "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
//                             "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
//                             "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
//                             "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
//                             "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
//                             "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A"
//                         ],
//                         "admin": true,
//                         "payout": false,
//                         "addr": [
//                             {
//                                 "address": "abc",
//                                 "type": "work",
//                                 "landmark": "xyz",
//                                 "zip": 401101
//                             },
//                             {
//                                 "zip": 401101,
//                                 "landmark": "Tower",
//                                 "type": "home",
//                                 "address": "Google"
//                             },
//                             {
//                                 "type": "other",
//                                 "address": "101, Leena residence gulmohar road miraj",
//                                 "landmark": "Opposite gagandeep restaurant ",
//                                 "zip": 400056
//                             }
//                         ],
//                         "emails": [],
//                         "soFB": "dip",
//                         "BankUPI": {
//                             "handle": "dbs",
//                             "verified": true,
//                             "fund_account_id": "fa_K9hVBLRtX776iF",
//                             "address": "dipesious@dbs",
//                             "username": "dipesious",
//                             "contact_id": "cont_K9KglWSOWnTNTY",
//                             "active": true
//                         },
//                         "bucket": [
//                             "6cZGYy20f5boFbbsXtYB",
//                             "qqMPDmqy0o01YiiIYqaE",
//                             "4kEFw9hSljDVm2a6GnQo",
//                             "kxczduUeyyYUvoCyLvnO"
//                         ],
//                         "iso": "IND",
//                         "tokenSNS": "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
//                         "name": "Dipeshin",
//                         "acBalGivenV": 0,
//                         "soTW": "dip",
//                         "display": "",
//                         "acBalP": 0,
//                         "acBalVr": 10.5,
//                         "storeLoc": [
//                             "8B9ozj7aTPvywkIvVWiK"
//                         ],
//                         "note": [],
//                         "acBalH": 355,
//                         "soYT": "simran",
//                         "log": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "soIG": "dipesious",
//                         "email": "dipesious@hotmail.com",
//                         "storeSav": [
//                             "8B9ozj7aTPvywkIvVWiK",
//                             "tjOyZV9TVTpQ1hoccOYB"
//                         ],
//                         "storeCam": [
//                             "2GHohG0jEfELHb30c1s7",
//                             "i9MvNIRSZEpyhp05UIws",
//                             "b8fHqM0fyh3EJfGARu3B",
//                             "69Hf6TISpLg3SDwpYyKy",
//                             "2VS4N7OkRrM5pHfwCNuV",
//                             "GBJPmnJ4Q1oA1ynW1brZ",
//                             "rDeB5DwD97Ff1NpLzFdj",
//                             "vJEzPDAJ5koqdbGa7k0N",
//                             "PJcK0Xh43tLpR44xtB6J",
//                             "FkvmAw4pKGhcSrFULyG2",
//                             "dLclMuk5iBysJvOoWRKi",
//                             "ZPkNWVk1trHm3b8GBr4F",
//                             "iWIXIPHAiDIiA9Euexst",
//                             "SBV6Jpa7a2844xyTxDEO",
//                             "1igU0j5Cxxah1ZzYW0oT",
//                             "OgkREW5oDc40YO1psg6q",
//                             "6YEVFDcrnwwGKc4IRPqX",
//                             "qc1ymcPpmQ8yEhHM8zLt",
//                             "2bwi1jsjci7YySD6FWHi",
//                             "x605L2J7JyTzfmtgFL7M",
//                             "TyWGWqQiOSEG0f4XSGju",
//                             "yKTiNocUlsW92jUlr0P1",
//                             "XQBQVol6L4AFU0wdRluS",
//                             "tt5W2R17MPqrjJA7azDi",
//                             "NhtKi3RTN2dLVzcH2hSu",
//                             "dO3WaZ05d3hBgnlt0Fj2",
//                             "sB3sHKwlhmqpkVPm2M1F",
//                             "bSOHjFq1z3di0kl7tDOK",
//                             "fjkXn0gPGux5uYQADX6v",
//                             "Muj3jGOZ7jOWeELzLe0Y",
//                             "5kaSYObDf7s1pRxvqp0s",
//                             "d3Kcq7I3sCdzWMPgD9Rm",
//                             "9e64iZ7UQ538nKB285XT",
//                             "IpQwjUjBAJW8eyMSDDWp",
//                             "xdiMTvN28RncaBT5HHms",
//                             "nRtRMxxicFvlARWiSR8y",
//                             "w4ELXiJiAiPY4RodAz7o",
//                             "78SEsrN2FWWM1NCSzRfk",
//                             "IzSNW9mwHpHHyZ6C9cAD"
//                         ],
//                         "acBalCr": 20,
//                         "soWA": "9876543210",
//                         "phone": "+919876543210",
//                         "axess": [
//                             "phone"
//                         ],
//                         "coin": "INR",
//                         "cashback": 80,
//                         "acBalV": 127.1542,
//                         "upd": {
//                             "seconds": 1664195780,
//                             "nanoseconds": 646000000
//                         },
//                         "ban": false,
//                         "acBalGivenC": 180,
//                         "acBalC": 532,
//                         "sin": {
//                             "seconds": 1648670306,
//                             "nanoseconds": 23000000
//                         },
//                         "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
//                     },
//                     "banners": [
//                         "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
//                     ],
//                     "email": "dipeshbhoir@hotmail.com",
//                     "cashback": 80,
//                     "about": "About the store",
//                     "proCat": [
//                         "gfjgjhgjhghjg",
//                         "hhkhkjhjk",
//                         "some category",
//                         "Dal",
//                         "Paneer",
//                         "Kolhapuri",
//                         "chocolate"
//                     ],
//                     "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8"
//                 },
//                 "description": "Cotton T-shirt, Crease free",
//                 "warranty": true,
//                 "costBurn": 90,
//                 "flash": false,
//                 "Q": 1,
//                 "burnDecShort": "Cotton T-shirt, Crease free",
//                 "sin": {
//                     "seconds": 1648679682,
//                     "nanoseconds": 333000000
//                 },
//                 "variants": [
//                     {
//                         "type": "palete",
//                         "name": "#ffff00"
//                     },
//                     {
//                         "name": "#ff0000",
//                         "type": "palete"
//                     },
//                     {
//                         "type": "palete",
//                         "name": "#008000"
//                     },
//                     {
//                         "type": "material",
//                         "name": "Cotton"
//                     },
//                     {
//                         "type": "size",
//                         "name": "XL"
//                     },
//                     {
//                         "type": "size",
//                         "name": "XS"
//                     },
//                     {
//                         "type": "size",
//                         "name": "S"
//                     },
//                     {
//                         "name": "M",
//                         "type": "size"
//                     }
//                 ],
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "id": "uWQXKBUU0IvPs419RV9O",
//                 "burnBrand": "Fit Food",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "price": 200,
//                 "upd": {
//                     "seconds": 1662623385,
//                     "nanoseconds": 358000000
//                 },
//                 "burnCatSub": "Nope",
//                 "sold": 0,
//                 "burnDec": "Activewear, anywhere. All-weather comfort and the freedom to move. Jogging, stretching, or chasing dreams, yourfitted tee won’t let you down.  With light fabric that keeps you cool and dry, this round neck T-shirt is soft, with raglan sleeves for advanced flexibility. Your exercise essential, everyone’s absolute favorite.",
//                 "vX": [
//                     {
//                         "id": "uWQXKBUU0IvPs419RV9O",
//                         "nowVarient": [
//                             {
//                                 "type": "palete",
//                                 "name": "#ffff00"
//                             },
//                             {
//                                 "name": "Cotton",
//                                 "type": "material"
//                             },
//                             {
//                                 "type": "size",
//                                 "name": "XS"
//                             }
//                         ],
//                         "countQ": 1
//                     }
//                 ],
//                 "cost": 100,
//                 "category": "some category",
//                 "quota": 0,
//                 "content": false,
//                 "burnPics": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FuWQXKBUU0IvPs419RV9O1659688665932?alt=media&token=52307c86-9780-4f91-8d01-df66d0567222"
//                 ],
//                 "title": "New Product"
//             }
//         ],
//         "id": "b1sVZCmFRwXABytKb5ZY",
//         "amTaxTCS": 1,
//         "com": {
//             "seconds": 1665489735,
//             "nanoseconds": 228000000
//         },
//         "amCost": 0,
//         "amBurst": 100,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
//         "amGateway": 0,
//         "camp": null,
//         "shortID": "A000Ly",
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "type": [
//             "RefrCASH",
//             "GdViTqOv51YIsNxHV58LpXpx99n1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "storeORDER",
//             "clientAc",
//             "addORDER",
//             "BURN",
//             null
//         ],
//         "storeName": "Fit Food",
//         "upd": {
//             "seconds": 1664640322,
//             "nanoseconds": 653000000
//         },
//         "earn": 0,
//         "invoice": {
//             "amtRefrCash": 105,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "setShortID": true,
//         "amParcelCity": false,
//         "amParcel": 0,
//         "refr": null,
//         "amRefr": 7.000000000000001,
//         "status": 10
//     },
//     {
//         "amParcelCity": false,
//         "status": 10,
//         "storeName": "Fit Food",
//         "setShortID": true,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amCost": 0,
//         "sin": {
//             "seconds": 1664463471,
//             "nanoseconds": 646000000
//         },
//         "amParcel": 0,
//         "ordrTYPE": "RefrCASH",
//         "upd": {
//             "seconds": 1664463471,
//             "nanoseconds": 646000000
//         },
//         "shortID": "A000Lw",
//         "amTaxTDS": 0,
//         "amTaxTCS": 0.1,
//         "type": [
//             "RefrCASH",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "userName": "Dipeshin",
//         "amSale": 20,
//         "code": null,
//         "invoice": {
//             "amtRefrCash": 10.5,
//             "useRefrCash": true,
//             "COD": false
//         },
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amTotal": 10.5,
//         "amRefr": 0,
//         "logistics": {
//             "typeShop": "Both",
//             "addressPickT": "shop",
//             "PnD_parcelNotFree": false,
//             "addressDropT": "work",
//             "typeCat": "food_and_beverages",
//             "status": 20,
//             "PnD_cityCharge": 0,
//             "require": false,
//             "addressPick": {
//                 "lat": 19.0662066,
//                 "zip": "400050",
//                 "region": "Maharashtra",
//                 "line1": "Dipesadsadas sadasdas",
//                 "city": "Mumbai Suburban",
//                 "line2": "",
//                 "lon": 72.83105909999999,
//                 "area": "Dent Heal",
//                 "locality": "Mumbai",
//                 "id": "IND_MH_1648672299398",
//                 "nation": "IND",
//                 "state": "MH"
//             },
//             "addressDrop": {
//                 "type": "other",
//                 "landmark": "Opposite gagandeep restaurant ",
//                 "address": "101, Leena residence gulmohar road miraj",
//                 "zip": 400056
//             },
//             "typeOrdr": "DIRECT_ONLINE",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "name": "Dipeshin",
//             "phone": "9876543210",
//             "PnD_freeStart": 0,
//             "email": "dipesious@hotmail.com",
//             "PnD_nationCharge": 0
//         },
//         "amGateway": 0,
//         "id": "Xqui1Pa3ghP3XyKMsmk5",
//         "amTax": 0.5,
//         "earn": 0,
//         "camp": {
//             "countS": 0,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "name": "Campaign-39",
//             "tX": "t1",
//             "customPay": 0,
//             "storeTyp": "Both",
//             "cbExi": 30,
//             "stoped": false,
//             "paused": false,
//             "max": 0,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "stage": 0,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "expiry": false,
//             "type": "flat",
//             "min": 1200,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "customAct": false,
//             "paid": false,
//             "cbDir": 40,
//             "countM": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "countP": 0,
//             "cbNew": 80,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "ban": false
//         },
//         "com": {
//             "seconds": 1665489728,
//             "nanoseconds": 701000000
//         },
//         "refr": null,
//         "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "journey": "DIRECT",
//         "amSave": 20.5,
//         "cart": [
//             {
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "Q": 1,
//                 "vX": [
//                     {
//                         "id": "s15R9CsWGf0DjDkGRwfV",
//                         "countQ": 1,
//                         "nowVarient": [
//                             {
//                                 "name": "#ff0000",
//                                 "type": "palete"
//                             },
//                             {
//                                 "name": "Xl",
//                                 "type": "size"
//                             },
//                             {
//                                 "type": "color",
//                                 "name": "#123123"
//                             }
//                         ]
//                     },
//                     {
//                         "nowVarient": [
//                             {
//                                 "type": "palete",
//                                 "name": "#ff0000"
//                             },
//                             {
//                                 "type": "size",
//                                 "name": "Xl"
//                             },
//                             {
//                                 "name": "#123123",
//                                 "type": "color"
//                             }
//                         ],
//                         "countQ": 1,
//                         "id": "s15R9CsWGf0DjDkGRwfV"
//                     },
//                     {
//                         "nowVarient": [
//                             {
//                                 "name": "#ff0000",
//                                 "type": "palete"
//                             },
//                             {
//                                 "type": "size",
//                                 "name": "Xl"
//                             },
//                             {
//                                 "name": "#123123",
//                                 "type": "color"
//                             }
//                         ],
//                         "id": "s15R9CsWGf0DjDkGRwfV",
//                         "countQ": 1
//                     },
//                     {
//                         "id": "s15R9CsWGf0DjDkGRwfV",
//                         "nowVarient": [
//                             {
//                                 "type": "palete",
//                                 "name": "#ff0000"
//                             },
//                             {
//                                 "type": "size",
//                                 "name": "Xl"
//                             },
//                             {
//                                 "name": "#333",
//                                 "type": "color"
//                             }
//                         ],
//                         "countQ": 1
//                     },
//                     {
//                         "id": "s15R9CsWGf0DjDkGRwfV",
//                         "countQ": 1,
//                         "nowVarient": [
//                             {
//                                 "type": "palete",
//                                 "name": "#ff0000"
//                             },
//                             {
//                                 "type": "size",
//                                 "name": "Xl"
//                             },
//                             {
//                                 "type": "color",
//                                 "name": "#123123"
//                             }
//                         ]
//                     }
//                 ],
//                 "description": "elo",
//                 "id": "s15R9CsWGf0DjDkGRwfV",
//                 "burn": false,
//                 "warranty": false,
//                 "reqBurn": false,
//                 "cost": 10,
//                 "quota": 0,
//                 "upd": {
//                     "seconds": 1664434855,
//                     "nanoseconds": 40000000
//                 },
//                 "sold": 0,
//                 "title": "Abcd",
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
//                 ],
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "variants": [
//                     {
//                         "name": "Xl",
//                         "type": "size"
//                     },
//                     {
//                         "name": "#ff0000",
//                         "type": "palete"
//                     },
//                     {
//                         "type": "color",
//                         "name": "#333"
//                     },
//                     {
//                         "type": "color",
//                         "name": "#123123"
//                     }
//                 ],
//                 "sin": {
//                     "seconds": 1662754531,
//                     "nanoseconds": 334000000
//                 },
//                 "content": true,
//                 "price": 20,
//                 "category": "some category",
//                 "code": "Some Hsn"
//             }
//         ],
//         "amBurst": 10
//     },
//     {
//         "id": "S84Zu5UcBchXhBQQxgfa",
//         "status": 10,
//         "amRefr": 0,
//         "amParcelCity": false,
//         "camp": {
//             "name": "Campaign-39",
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "cbNew": 80,
//             "max": 0,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "min": 1200,
//             "stage": 0,
//             "expiry": false,
//             "paid": false,
//             "stoped": false,
//             "type": "flat",
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "tX": "t1",
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "ban": false,
//             "cbExi": 30,
//             "paused": false,
//             "cbDir": 40,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "customPay": 0,
//             "countS": 0,
//             "countM": 0,
//             "customAct": false,
//             "storeTyp": "Both",
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "countP": 0
//         },
//         "amTaxTCS": 0.1,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "cart": [
//             {
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "title": "Abcd",
//                 "sin": {
//                     "seconds": 1662754531,
//                     "nanoseconds": 334000000
//                 },
//                 "content": true,
//                 "quota": 0,
//                 "burn": false,
//                 "reqBurn": false,
//                 "id": "s15R9CsWGf0DjDkGRwfV",
//                 "vX": [
//                     {
//                         "nowVarient": [
//                             {
//                                 "type": "palete",
//                                 "name": "#ff0000"
//                             },
//                             {
//                                 "name": "Xl",
//                                 "type": "size"
//                             },
//                             {
//                                 "name": "#333",
//                                 "type": "color"
//                             }
//                         ],
//                         "countQ": 1,
//                         "id": "s15R9CsWGf0DjDkGRwfV"
//                     }
//                 ],
//                 "category": "some category",
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
//                 ],
//                 "code": "Some Hsn",
//                 "warranty": false,
//                 "upd": {
//                     "seconds": 1664434855,
//                     "nanoseconds": 40000000
//                 },
//                 "sold": 0,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "price": 20,
//                 "description": "elo",
//                 "cost": 10,
//                 "variants": [
//                     {
//                         "type": "size",
//                         "name": "Xl"
//                     },
//                     {
//                         "type": "palete",
//                         "name": "#ff0000"
//                     },
//                     {
//                         "name": "#333",
//                         "type": "color"
//                     },
//                     {
//                         "type": "color",
//                         "name": "#123123"
//                     }
//                 ],
//                 "Q": 1
//             }
//         ],
//         "amTax": 0.5,
//         "storeName": "Fit Food",
//         "amParcel": 0,
//         "ordrTYPE": "RefrCASH",
//         "journey": "F2F",
//         "type": [
//             "RefrCASH",
//             "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A0001c"
//         ],
//         "amTaxTDS": 0,
//         "amSave": 20.5,
//         "amTotal": 10.5,
//         "amCost": 0,
//         "amBurst": 10,
//         "com": {
//             "seconds": 1665489726,
//             "nanoseconds": 253000000
//         },
//         "refr": {
//             "name": "Roshan",
//             "uid": "a45fWFfduyg8Z8dSn6kkQWtkaZl1",
//             "earn": 0
//         },
//         "earn": 0,
//         "by": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
//         "invoice": {
//             "amtRefrCash": 10.5,
//             "COD": false,
//             "useRefrCash": true
//         },
//         "setShortID": true,
//         "userName": "Rohan",
//         "amGateway": 0,
//         "upd": {
//             "seconds": 1664463753,
//             "nanoseconds": 571000000
//         },
//         "shortID": "A000Lx",
//         "code": "A0001c",
//         "logistics": {
//             "PnD_nationCharge": 0,
//             "status": 20,
//             "email": "",
//             "addressDropT": "home",
//             "typeCat": "food_and_beverages",
//             "PnD_parcelNotFree": false,
//             "require": false,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "addressPick": {
//                 "zip": "400050",
//                 "locality": "Mumbai",
//                 "state": "MH",
//                 "city": "Mumbai Suburban",
//                 "nation": "IND",
//                 "area": "Dent Heal",
//                 "line2": "",
//                 "lat": 19.0662066,
//                 "region": "Maharashtra",
//                 "lon": 72.83105909999999,
//                 "line1": "Dipesadsadas sadasdas",
//                 "id": "IND_MH_1648672299398"
//             },
//             "typeOrdr": "F2F_ONLINE",
//             "addressPickT": "shop",
//             "phone": "7208256169",
//             "name": "Rohan",
//             "addressDrop": {
//                 "address": "101",
//                 "type": "home",
//                 "zip": 400056,
//                 "landmark": "Leena"
//             },
//             "typeShop": "Both",
//             "PnD_freeStart": 0,
//             "PnD_cityCharge": 0
//         },
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "sin": {
//             "seconds": 1664463753,
//             "nanoseconds": 571000000
//         },
//         "amSale": 20
//     },
//     {
//         "invoice": {
//             "useRefrCash": true,
//             "COD": false,
//             "amtRefrCash": 10.5
//         },
//         "cart": [
//             {
//                 "content": true,
//                 "burn": false,
//                 "upd": {
//                     "seconds": 1664434855,
//                     "nanoseconds": 40000000
//                 },
//                 "id": "s15R9CsWGf0DjDkGRwfV",
//                 "title": "Abcd",
//                 "vX": [
//                     {
//                         "nowVarient": [
//                             {
//                                 "type": "palete",
//                                 "name": "#ff0000"
//                             },
//                             {
//                                 "type": "size",
//                                 "name": "Xl"
//                             },
//                             {
//                                 "name": "#123123",
//                                 "type": "color"
//                             }
//                         ],
//                         "countQ": 1,
//                         "id": "s15R9CsWGf0DjDkGRwfV"
//                     }
//                 ],
//                 "code": "Some Hsn",
//                 "quota": 0,
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "sold": 0,
//                 "description": "elo",
//                 "category": "some category",
//                 "banners": [
//                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
//                 ],
//                 "cost": 10,
//                 "variants": [
//                     {
//                         "type": "size",
//                         "name": "Xl"
//                     },
//                     {
//                         "type": "palete",
//                         "name": "#ff0000"
//                     },
//                     {
//                         "type": "color",
//                         "name": "#333"
//                     },
//                     {
//                         "name": "#123123",
//                         "type": "color"
//                     }
//                 ],
//                 "warranty": false,
//                 "Q": 1,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "sin": {
//                     "seconds": 1662754531,
//                     "nanoseconds": 334000000
//                 },
//                 "reqBurn": false,
//                 "price": 20
//             }
//         ],
//         "amTax": 0.5,
//         "storeName": "Fit Food",
//         "amSave": 20.5,
//         "earn": 0,
//         "com": {
//             "seconds": 1665489723,
//             "nanoseconds": 909000000
//         },
//         "logistics": {
//             "addressPick": {
//                 "lat": 19.0662066,
//                 "line1": "Dipesadsadas sadasdas",
//                 "line2": "",
//                 "zip": "400050",
//                 "locality": "Mumbai",
//                 "state": "MH",
//                 "lon": 72.83105909999999,
//                 "area": "Dent Heal",
//                 "city": "Mumbai Suburban",
//                 "region": "Maharashtra",
//                 "id": "IND_MH_1648672299398",
//                 "nation": "IND"
//             },
//             "addressDropT": "home",
//             "addressDrop": {
//                 "address": "101",
//                 "type": "home",
//                 "zip": 400056,
//                 "landmark": "Leena"
//             },
//             "email": "",
//             "phone": "7208256169",
//             "typeShop": "Both",
//             "PnD_parcelNotFree": false,
//             "PnD_cityCharge": 0,
//             "require": false,
//             "addressPickT": "shop",
//             "typeCat": "food_and_beverages",
//             "PnD_nationCharge": 0,
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "status": 20,
//             "name": "Rohan",
//             "typeOrdr": "F2F_ONLINE",
//             "PnD_freeStart": 0
//         },
//         "setShortID": true,
//         "amTotal": 10.5,
//         "shortID": "A000Lv",
//         "userName": "Rohan",
//         "by": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
//         "amTaxTDS": 0,
//         "amRefr": 0,
//         "amBurst": 10,
//         "id": "wIYztcNdH3RIqjgvEt4L",
//         "ordrTYPE": "RefrCASH",
//         "status": 10,
//         "amCost": 0,
//         "refr": {
//             "uid": "a45fWFfduyg8Z8dSn6kkQWtkaZl1",
//             "name": "Roshan",
//             "earn": 0
//         },
//         "journey": "F2F",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amParcel": 0,
//         "amTaxTCS": 0.1,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "amGateway": 0,
//         "camp": {
//             "min": 1200,
//             "name": "Campaign-39",
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "type": "flat",
//             "customPay": 0,
//             "stoped": false,
//             "paused": false,
//             "cbExi": 30,
//             "max": 0,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "cbDir": 40,
//             "countS": 0,
//             "countP": 0,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "stage": 0,
//             "countM": 0,
//             "tX": "t1",
//             "expiry": false,
//             "storeTyp": "Both",
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "paid": false,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "ban": false,
//             "customAct": false,
//             "cbNew": 80
//         },
//         "sin": {
//             "seconds": 1664463808,
//             "nanoseconds": 190000000
//         },
//         "code": "A0001c",
//         "upd": {
//             "seconds": 1664463808,
//             "nanoseconds": 190000000
//         },
//         "type": [
//             "RefrCASH",
//             "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "F2F",
//             "A0001c"
//         ],
//         "amParcelCity": false,
//         "amSale": 20
//     },
//     {
//         "amRefr": 0,
//         "gwID": "pay_KQqIBAbX4IH8ED",
//         "logistics": {
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "email": "",
//             "addressPick": {
//                 "lat": 19.0662066,
//                 "city": "Mumbai Suburban",
//                 "id": "IND_MH_1648672299398",
//                 "line1": "Dipesadsadas sadasdas",
//                 "line2": "",
//                 "area": "Dent Heal",
//                 "locality": "Mumbai",
//                 "region": "Maharashtra",
//                 "nation": "IND",
//                 "lon": 72.83105909999999,
//                 "zip": "400050",
//                 "state": "MH"
//             },
//             "addressDrop": {
//                 "type": "work",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "landmark": "Gagandeep bus stop",
//                 "zip": 400056
//             },
//             "PnD_nationCharge": 0,
//             "PnD_freeStart": 0,
//             "typeOrdr": "DIRECT_ONLINE",
//             "phone": "8879751140",
//             "name": "Aditya",
//             "addressPickT": "shop",
//             "require": false,
//             "PnD_cityCharge": 0,
//             "status": 20,
//             "typeCat": "food_and_beverages",
//             "typeShop": "Both",
//             "addressDropT": "work",
//             "PnD_parcelNotFree": false
//         },
//         "amSave": 4,
//         "id": "bfVLlPVpFGFi4pcQoIps",
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "amCost": 1.05,
//         "sin": {
//             "seconds": 1665137040,
//             "nanoseconds": 436000000
//         },
//         "gwORDR": "order_KQqGdolaxgxeAh",
//         "amGateway": 0.02478,
//         "camp": {
//             "countS": 0,
//             "cbNew": 80,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "stage": 0,
//             "countP": 0,
//             "name": "Campaign-39",
//             "customAct": false,
//             "paused": false,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "storeTyp": "Both",
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "type": "flat",
//             "expiry": false,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "cbExi": 30,
//             "tX": "t1",
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "ban": false,
//             "max": 0,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "stoped": false,
//             "countM": 0,
//             "cbDir": 40,
//             "paid": false,
//             "min": 1200,
//             "customPay": 0
//         },
//         "ordrTYPE": "ONLINE",
//         "journey": "DIRECT",
//         "refr": null,
//         "type": [
//             "ONLINE",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "earn": 0,
//         "setShortID": true,
//         "amTax": 0.05,
//         "gwInfo": {
//             "created_at": 1665137131,
//             "id": "pay_KQqIBAbX4IH8ED",
//             "amount": 105,
//             "card_id": null,
//             "amount_refunded": 0,
//             "tax": 0,
//             "email": "adityakirtane27@gmail.com",
//             "refund_status": null,
//             "error_step": null,
//             "notes": {
//                 "description": "descriptionX"
//             },
//             "error_description": null,
//             "captured": true,
//             "entity": "payment",
//             "error_code": null,
//             "contact": "+918879751140",
//             "acquirer_data": {
//                 "rrn": "228011142297"
//             },
//             "error_source": null,
//             "description": "payment to Fit Food",
//             "order_id": "order_KQqGdolaxgxeAh",
//             "fee": 3,
//             "international": false,
//             "method": "upi",
//             "error_reason": null,
//             "wallet": null,
//             "currency": "INR",
//             "status": "captured",
//             "vpa": "adityakirtane27@okaxis",
//             "invoice_id": null,
//             "bank": null
//         },
//         "com": {
//             "seconds": 1665489716,
//             "nanoseconds": 734000000
//         },
//         "code": null,
//         "amTaxTDS": 0,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "gwSIGN": "8b682045f58f206b70830d9b169d5df8c738c54f859fde3a9ffbeddccd7adaf5",
//         "cart": [
//             {
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "cost": 1,
//                 "code": "123123123",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "vX": [],
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "description": "Chocolate",
//                 "price": 5,
//                 "title": "JimJam",
//                 "reqBurn": false,
//                 "banners": [],
//                 "burn": false,
//                 "Q": 1,
//                 "quota": 0,
//                 "sold": 0,
//                 "warranty": true,
//                 "content": true,
//                 "category": "chocolate",
//                 "variants": []
//             }
//         ],
//         "amTotal": 1.05,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amTaxTCS": 0.01,
//         "amBurst": 1,
//         "userName": "Aditya",
//         "storeName": "Fit Food",
//         "shortID": "A000Lu",
//         "invoice": {
//             "useRefrCash": false,
//             "COD": false,
//             "amtRefrCash": 0
//         },
//         "status": 10,
//         "amParcel": 0,
//         "upd": {
//             "seconds": 1665137040,
//             "nanoseconds": 436000000
//         },
//         "amParcelCity": false,
//         "amSale": 5
//     },
//     {
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "amBurst": 1,
//         "amCost": 1.05,
//         "storeName": "Fit Food",
//         "upd": {
//             "seconds": 1665148753,
//             "nanoseconds": 995000000
//         },
//         "sin": {
//             "seconds": 1665148753,
//             "nanoseconds": 995000000
//         },
//         "earn": 0,
//         "amTaxTDS": 0,
//         "amGateway": 0.02478,
//         "amSale": 5,
//         "gwORDR": "order_KQtarx1Tu5j2gX",
//         "cart": [
//             {
//                 "title": "JimJam",
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "content": true,
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "banners": [],
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "variants": [],
//                 "warranty": true,
//                 "burn": false,
//                 "category": "chocolate",
//                 "reqBurn": false,
//                 "code": "123123123",
//                 "price": 5,
//                 "Q": 1,
//                 "description": "Chocolate",
//                 "vX": [],
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "quota": 0,
//                 "sold": 0,
//                 "cost": 1
//             }
//         ],
//         "code": null,
//         "logistics": {
//             "email": "",
//             "typeCat": "food_and_beverages",
//             "PnD_cityCharge": 0,
//             "addressDropT": "work",
//             "require": false,
//             "PnD_freeStart": 0,
//             "typeShop": "Both",
//             "PnD_nationCharge": 0,
//             "addressPick": {
//                 "lon": 72.83105909999999,
//                 "area": "Dent Heal",
//                 "id": "IND_MH_1648672299398",
//                 "line2": "",
//                 "line1": "Dipesadsadas sadasdas",
//                 "locality": "Mumbai",
//                 "state": "MH",
//                 "lat": 19.0662066,
//                 "region": "Maharashtra",
//                 "city": "Mumbai Suburban",
//                 "zip": "400050",
//                 "nation": "IND"
//             },
//             "status": 20,
//             "PnD_parcelNotFree": false,
//             "addressPickT": "shop",
//             "addressDrop": {
//                 "landmark": "Gagandeep bus stop",
//                 "type": "work",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "zip": 400056
//             },
//             "typeOrdr": "DIRECT_ONLINE",
//             "phone": "8879751140",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "name": "Aditya"
//         },
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "gwSIGN": "e246d492c92944250aeb8b4fae68edf8a1fb68e7b427ab39f812d1c4d3aeca79",
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amTax": 0.05,
//         "camp": {
//             "customAct": false,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "min": 1200,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "storeTyp": "Both",
//             "type": "flat",
//             "ban": false,
//             "cbDir": 40,
//             "countM": 0,
//             "tX": "t1",
//             "customPay": 0,
//             "stoped": false,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "stage": 0,
//             "expiry": false,
//             "paused": false,
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "paid": false,
//             "countS": 0,
//             "cbNew": 80,
//             "max": 0,
//             "cbExi": 30,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "name": "Campaign-39",
//             "countP": 0,
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "sid": "8B9ozj7aTPvywkIvVWiK"
//         },
//         "shortID": "A000F4",
//         "journey": "DIRECT",
//         "amRefr": 0,
//         "status": 10,
//         "gwInfo": {
//             "vpa": "adityakirtane27@okaxis",
//             "invoice_id": null,
//             "card_id": null,
//             "bank": null,
//             "method": "upi",
//             "status": "captured",
//             "acquirer_data": {
//                 "rrn": "228016364896"
//             },
//             "tax": 0,
//             "id": "pay_KQtc4jk590JqTh",
//             "refund_status": null,
//             "order_id": "order_KQtarx1Tu5j2gX",
//             "wallet": null,
//             "error_step": null,
//             "notes": {
//                 "description": "descriptionX"
//             },
//             "error_code": null,
//             "international": false,
//             "error_reason": null,
//             "captured": true,
//             "amount": 105,
//             "created_at": 1665148826,
//             "entity": "payment",
//             "description": "payment to Fit Food",
//             "currency": "INR",
//             "amount_refunded": 0,
//             "fee": 3,
//             "contact": "+918879751140",
//             "error_description": null,
//             "email": "adityakirtane27@gmail.com",
//             "error_source": null
//         },
//         "com": {
//             "seconds": 1665489710,
//             "nanoseconds": 24000000
//         },
//         "amParcelCity": false,
//         "invoice": {
//             "useRefrCash": false,
//             "amtRefrCash": 0,
//             "COD": false
//         },
//         "gwID": "pay_KQtc4jk590JqTh",
//         "amParcel": 0,
//         "type": [
//             "ONLINE",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "amSave": 4,
//         "refr": null,
//         "id": "djItSNyM0hvmv8who9OJ",
//         "ordrTYPE": "ONLINE",
//         "userName": "Aditya",
//         "amTaxTCS": 0.01,
//         "setShortID": true,
//         "amTotal": 1.05
//     },
//     {
//         "amParcelCity": false,
//         "amGateway": 0,
//         "com": {
//             "seconds": 1665489705,
//             "nanoseconds": 949000000
//         },
//         "journey": "DIRECT",
//         "status": 10,
//         "amRefr": 0,
//         "storeName": "Fit Food",
//         "setShortID": true,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "amBurst": 1,
//         "ordrTYPE": "RefrCASH",
//         "amParcel": 0,
//         "type": [
//             "RefrCASH",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "shortID": "A000FU",
//         "amTotal": 1.05,
//         "amTaxTDS": 0,
//         "amSave": 5.05,
//         "earn": 0,
//         "id": "SaD3pW3fNLZ4SnhPdqO1",
//         "amTax": 0.05,
//         "sin": {
//             "seconds": 1665147111,
//             "nanoseconds": 943000000
//         },
//         "camp": {
//             "stoped": false,
//             "cbNew": 80,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "min": 1200,
//             "paid": false,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             },
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "ban": false,
//             "countP": 0,
//             "storeTyp": "Both",
//             "expiry": false,
//             "countM": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "cbDir": 40,
//             "type": "flat",
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "stage": 0,
//             "max": 0,
//             "paused": false,
//             "tX": "t1",
//             "name": "Campaign-39",
//             "countS": 0,
//             "customAct": false,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "cbExi": 30,
//             "customPay": 0
//         },
//         "amSale": 5,
//         "logistics": {
//             "addressPick": {
//                 "line1": "Dipesadsadas sadasdas",
//                 "lat": 19.0662066,
//                 "city": "Mumbai Suburban",
//                 "lon": 72.83105909999999,
//                 "line2": "",
//                 "zip": "400050",
//                 "state": "MH",
//                 "id": "IND_MH_1648672299398",
//                 "region": "Maharashtra",
//                 "locality": "Mumbai",
//                 "area": "Dent Heal",
//                 "nation": "IND"
//             },
//             "PnD_parcelNotFree": false,
//             "PnD_freeStart": 0,
//             "PnD_cityCharge": 0,
//             "PnD_nationCharge": 0,
//             "phone": "8879751140",
//             "name": "Aditya",
//             "typeOrdr": "DIRECT_ONLINE",
//             "typeShop": "Both",
//             "require": false,
//             "addressPickT": "shop",
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "typeCat": "food_and_beverages",
//             "addressDropT": "work",
//             "addressDrop": {
//                 "type": "work",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
//                 "zip": 400056,
//                 "landmark": "Gagandeep bus stop"
//             },
//             "email": "",
//             "status": 20
//         },
//         "code": null,
//         "amCost": 0,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "userName": "Aditya",
//         "invoice": {
//             "amtRefrCash": 1.05,
//             "COD": false,
//             "useRefrCash": true
//         },
//         "refr": null,
//         "upd": {
//             "seconds": 1665147111,
//             "nanoseconds": 943000000
//         },
//         "cart": [
//             {
//                 "sold": 0,
//                 "variants": [],
//                 "title": "JimJam",
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "reqBurn": false,
//                 "cost": 1,
//                 "price": 5,
//                 "code": "123123123",
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "category": "chocolate",
//                 "quota": 0,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "burn": false,
//                 "vX": [],
//                 "banners": [],
//                 "content": true,
//                 "description": "Chocolate",
//                 "warranty": true,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "Q": 1
//             }
//         ],
//         "amTaxTCS": 0.01
//     },
//     {
//         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//         "storeName": "Fit Food",
//         "code": null,
//         "type": [
//             "ONLINE",
//             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
//             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "8B9ozj7aTPvywkIvVWiK",
//             "addORDER",
//             "storeORDER",
//             "clientAc",
//             "DIRECT"
//         ],
//         "refr": null,
//         "journey": "DIRECT",
//         "amTaxTCS": 0.01,
//         "sid": "8B9ozj7aTPvywkIvVWiK",
//         "done": {
//             "seconds": 1665487991,
//             "nanoseconds": 683000000
//         },
//         "camp": {
//             "stoped": false,
//             "paused": false,
//             "ban": false,
//             "name": "Campaign-39",
//             "paid": false,
//             "cbDir": 40,
//             "storeTyp": "Both",
//             "type": "flat",
//             "min": 1200,
//             "stage": 0,
//             "countP": 0,
//             "cbExi": 30,
//             "countM": 0,
//             "sid": "8B9ozj7aTPvywkIvVWiK",
//             "customAct": false,
//             "sin": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "id": "IzSNW9mwHpHHyZ6C9cAD",
//             "expiry": false,
//             "cbNew": 80,
//             "countS": 0,
//             "dateE": {
//                 "seconds": 1672425000,
//                 "nanoseconds": 0
//             },
//             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//             "tX": "t1",
//             "customPay": 0,
//             "upd": {
//                 "seconds": 1663417144,
//                 "nanoseconds": 438000000
//             },
//             "max": 0,
//             "dateS": {
//                 "seconds": 1663353000,
//                 "nanoseconds": 0
//             }
//         },
//         "amParcelCity": false,
//         "amBurst": 1,
//         "amCost": 1.05,
//         "amTax": 0.05,
//         "ordrTYPE": "ONLINE",
//         "amSave": 4,
//         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//         "com": {
//             "seconds": 1665487973,
//             "nanoseconds": 245000000
//         },
//         "gwID": "pay_KSRsYxhm2YP1fq",
//         "upd": {
//             "seconds": 1665487818,
//             "nanoseconds": 369000000
//         },
//         "earn": 0,
//         "cart": [
//             {
//                 "sin": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "cost": 1,
//                 "code": "123123123",
//                 "price": 5,
//                 "upd": {
//                     "seconds": 1664608438,
//                     "nanoseconds": 150000000
//                 },
//                 "title": "JimJam",
//                 "sid": "8B9ozj7aTPvywkIvVWiK",
//                 "reqBurn": false,
//                 "category": "chocolate",
//                 "content": true,
//                 "id": "WdH3xlYAQlgwBkha2EsA",
//                 "Q": 1,
//                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
//                 "variants": [],
//                 "warranty": true,
//                 "description": "Chocolate",
//                 "quota": 0,
//                 "sold": 0,
//                 "banners": [],
//                 "vX": [],
//                 "burn": false
//             }
//         ],
//         "gwSIGN": "b32edd7148d2569023887786c3642de88e3aca8556446b09579148ec735853d7",
//         "amTaxTDS": 0,
//         "gwInfo": {
//             "fee": 3,
//             "contact": "+918879751140",
//             "tax": 0,
//             "email": "adityakirtane27@gmail.com",
//             "amount_refunded": 0,
//             "error_step": null,
//             "bank": null,
//             "currency": "INR",
//             "description": "payment to Fit Food",
//             "order_id": "order_KSRsI3jepL8hxR",
//             "amount": 105,
//             "method": "upi",
//             "entity": "payment",
//             "error_source": null,
//             "international": false,
//             "notes": {
//                 "description": "descriptionX"
//             },
//             "refund_status": null,
//             "status": "captured",
//             "created_at": 1665487838,
//             "error_description": null,
//             "invoice_id": null,
//             "acquirer_data": {
//                 "rrn": "228420268789"
//             },
//             "wallet": null,
//             "card_id": null,
//             "vpa": "adityakirtane27@okaxis",
//             "error_reason": null,
//             "error_code": null,
//             "captured": true,
//             "id": "pay_KSRsYxhm2YP1fq"
//         },
//         "id": "8v8u7pfYYtZhY291kDWf",
//         "gwORDR": "order_KSRsI3jepL8hxR",
//         "amTotal": 1.05,
//         "setShortID": true,
//         "sin": {
//             "seconds": 1665487818,
//             "nanoseconds": 369000000
//         },
//         "amGateway": 0.02478,
//         "shortID": "A000Lp",
//         "amParcel": 0,
//         "amRefr": 0,
//         "logistics": {
//             "typeSuCat": "sc-food_and_beverages-cafe",
//             "name": "Aditya",
//             "email": "",
//             "addressDrop": {
//                 "type": "work",
//                 "zip": 400056,
//                 "landmark": "Gagandeep bus stop",
//                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
//             },
//             "status": 20,
//             "addressPickT": "shop",
//             "PnD_cityCharge": 0,
//             "addressPick": {
//                 "zip": "400050",
//                 "locality": "Mumbai",
//                 "id": "IND_MH_1648672299398",
//                 "state": "MH",
//                 "line2": "",
//                 "lat": 19.0662066,
//                 "lon": 72.83105909999999,
//                 "area": "Dent Heal",
//                 "city": "Mumbai Suburban",
//                 "region": "Maharashtra",
//                 "nation": "IND",
//                 "line1": "Dipesadsadas sadasdas"
//             },
//             "addressDropT": "work",
//             "typeOrdr": "DIRECT_ONLINE",
//             "typeCat": "food_and_beverages",
//             "typeShop": "Both",
//             "PnD_nationCharge": 0,
//             "PnD_parcelNotFree": false,
//             "phone": "8879751140",
//             "PnD_freeStart": 0,
//             "require": false
//         },
//         "status": 10,
//         "invoice": {
//             "amtRefrCash": 0,
//             "COD": false,
//             "useRefrCash": false
//         },
//         "amSale": 5,
//         "userName": "Aditya"
//     }
// ]
    // [
    //     {
    //         "amTax": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "SryCASVgU2Orw2pFuXMHCUpURH52",
    //             "pvu3QhN1wT6bxX4YheC5",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Q8"
    //         ],
    //         "status": -10,
    //         "upd": {
    //             "seconds": 1665400928,
    //             "nanoseconds": 252000000
    //         },
    //         "invoice": {
    //             "useRefrCash": false,
    //             "COD": false,
    //             "amtRefrCash": 0
    //         },
    //         "camp": null,
    //         "userName": "Aditya",
    //         "refr": null,
    //         "amGateway": 0,
    //         "amRefr": 0,
    //         "logistics": {
    //             "addressDrop": null,
    //             "require": false,
    //             "status": 0,
    //             "addressPick": null
    //         },
    //         "amSave": 0,
    //         "setShortID": true,
    //         "ordrTYPE": "CASH",
    //         "cart": [],
    //         "to": "SryCASVgU2Orw2pFuXMHCUpURH52",
    //         "code": "A000Q8",
    //         "journey": "POS",
    //         "amCost": 0,
    //         "amTotal": 0,
    //         "amBurst": 0,
    //         "id": "VIzEpqHVr7HVA1aUpA0E",
    //         "amParcel": 0,
    //         "sid": "pvu3QhN1wT6bxX4YheC5",
    //         "shortID": "A000Ju",
    //         "earn": 0,
    //         "sin": {
    //             "seconds": 1665400926,
    //             "nanoseconds": 599000000
    //         },
    //         "com": {
    //             "seconds": 1665400926,
    //             "nanoseconds": 599000000
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "storeName": "The house of pasta",
    //         "amTaxTCS": 0,
    //         "amParcelCity": false,
    //         "amSale": 0,
    //         "amTaxTDS": 0
    //     },
    //     {
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "refr": {
    //             "name": "Shraddha ",
    //             "earn": 50,
    //             "uid": "GdViTqOv51YIsNxHV58LpXpx99n1"
    //         },
    //         "amTaxTDS": 0,
    //         "camp": {
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "dateS": {
    //                 "seconds": 1662921000,
    //                 "nanoseconds": 0
    //             },
    //             "dateE": {
    //                 "seconds": 1666204200,
    //                 "nanoseconds": 0
    //             },
    //             "storeTyp": "Both",
    //             "id": "78SEsrN2FWWM1NCSzRfk",
    //             "cbDir": 20,
    //             "max": 0,
    //             "cbExi": 50,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "stage": 0,
    //             "ban": false,
    //             "countS": 0,
    //             "stoped": false,
    //             "tX": "t1",
    //             "customPay": 0,
    //             "paused": false,
    //             "sin": {
    //                 "seconds": 1662190042,
    //                 "nanoseconds": 807000000
    //             },
    //             "countP": 0,
    //             "paid": false,
    //             "name": "Flash Deal",
    //             "min": 600,
    //             "upd": {
    //                 "seconds": 1662190042,
    //                 "nanoseconds": 807000000
    //             },
    //             "customAct": false,
    //             "expiry": false,
    //             "type": "flat",
    //             "countM": 0,
    //             "cbNew": 100
    //         },
    //         "userName": "Aditya",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amParcelCity": false,
    //         "amCost": 0,
    //         "earnTotal": 150,
    //         "amParcel": 0,
    //         "amSave": 0,
    //         "amRefr": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "REDEEM",
    //             "A00009",
    //             "addORDER",
    //             "GdViTqOv51YIsNxHV58LpXpx99n1"
    //         ],
    //         "ordrTYPE": "CASH",
    //         "journey": "F2F",
    //         "upd": {
    //             "seconds": 1665390950,
    //             "nanoseconds": 1000000
    //         },
    //         "status": 10,
    //         "amTotal": 600,
    //         "storeName": "Fit Food",
    //         "code": "A00009",
    //         "amBurst": 0,
    //         "cart": [],
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "useRefrCash": false,
    //             "COD": false
    //         },
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "com": {
    //             "seconds": 1665390964,
    //             "nanoseconds": 104000000
    //         },
    //         "id": "TcjB9CK9nI8UPwFLSPWz",
    //         "amTax": 0,
    //         "amTaxTCS": 0,
    //         "earn": 100,
    //         "setShortID": true,
    //         "logistics": {
    //             "typeCat": "food_and_beverages",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "require": false,
    //             "phone": "+918879751140",
    //             "typeOrdr": "F2F_OFFLINE",
    //             "typeShop": "Both",
    //             "status": 0,
    //             "email": "",
    //             "addressDropT": null,
    //             "addressPickT": "shop",
    //             "addressPick": {
    //                 "lon": 72.83105909999999,
    //                 "line2": "",
    //                 "zip": "400050",
    //                 "region": "Maharashtra",
    //                 "state": "MH",
    //                 "city": "Mumbai Suburban",
    //                 "nation": "IND",
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "locality": "Mumbai",
    //                 "area": "Dent Heal",
    //                 "lat": 19.0662066,
    //                 "id": "IND_MH_1648672299398"
    //             },
    //             "name": "Aditya",
    //             "addressDrop": null
    //         },
    //         "shortID": "A000JQ",
    //         "amSale": 0,
    //         "amGateway": 0,
    //         "sin": {
    //             "seconds": 1665390950,
    //             "nanoseconds": 1000000
    //         }
    //     },
    //     {
    //         "camp": {
    //             "expiry": false,
    //             "ban": false,
    //             "customPay": 0,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "countM": 0,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "stage": 0,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "tX": "t1",
    //             "cbDir": 40,
    //             "countS": 0,
    //             "paid": false,
    //             "max": 0,
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "customAct": false,
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "storeTyp": "Both",
    //             "name": "Campaign-39",
    //             "cbNew": 80,
    //             "paused": false,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "cbExi": 30,
    //             "type": "flat",
    //             "stoped": false,
    //             "min": 1200,
    //             "countP": 0
    //         },
    //         "amParcelCity": false,
    //         "logistics": {
    //             "require": false,
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "addressPick": {
    //                 "state": "MH",
    //                 "nation": "IND",
    //                 "lat": 19.0662066,
    //                 "region": "Maharashtra",
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "lon": 72.83105909999999,
    //                 "line2": "",
    //                 "locality": "Mumbai",
    //                 "id": "IND_MH_1648672299398",
    //                 "area": "Dent Heal",
    //                 "city": "Mumbai Suburban",
    //                 "zip": "400050"
    //             },
    //             "addressDrop": null,
    //             "typeShop": "Both",
    //             "name": "Aditya",
    //             "addressDropT": null,
    //             "addressPickT": "shop",
    //             "typeCat": "food_and_beverages",
    //             "status": 0,
    //             "email": "",
    //             "typeOrdr": "F2F_OFFLINE",
    //             "phone": "+918879751140"
    //         },
    //         "amTotal": 1200,
    //         "cart": [],
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "amGateway": 0,
    //         "userName": "Aditya",
    //         "code": "A000Ky",
    //         "journey": "F2F",
    //         "amSave": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "REDEEM",
    //             "A000Ky",
    //             "addORDER"
    //         ],
    //         "earn": 80,
    //         "shortID": "A000JO",
    //         "amBurst": 0,
    //         "id": "vUdll8AtuSSv9u7FWE0f",
    //         "amRefr": 0,
    //         "amCost": 0,
    //         "ordrTYPE": "CASH",
    //         "amSale": 0,
    //         "amTax": 0,
    //         "sin": {
    //             "seconds": 1665390644,
    //             "nanoseconds": 90000000
    //         },
    //         "amParcel": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "COD": false,
    //             "useRefrCash": false
    //         },
    //         "refr": {
    //             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "earn": 30,
    //             "name": "Aditya"
    //         },
    //         "amTaxTCS": 0,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "com": {
    //             "seconds": 1665390686,
    //             "nanoseconds": 321000000
    //         },
    //         "status": 10,
    //         "earnTotal": 110,
    //         "upd": {
    //             "seconds": 1665390644,
    //             "nanoseconds": 90000000
    //         },
    //         "storeName": "Fit Food",
    //         "amTaxTDS": 0,
    //         "setShortID": true
    //     },
    //     {
    //         "logistics": {
    //             "addressDrop": {
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400056,
    //                 "type": "work"
    //             },
    //             "status": 20,
    //             "typeCat": "food_and_beverages",
    //             "PnD_cityCharge": 0,
    //             "addressPickT": "shop",
    //             "name": "Aditya",
    //             "addressPick": {
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "area": "Dent Heal",
    //                 "zip": "400050",
    //                 "state": "MH",
    //                 "region": "Maharashtra",
    //                 "id": "IND_MH_1648672299398",
    //                 "locality": "Mumbai",
    //                 "lon": 72.83105909999999,
    //                 "nation": "IND",
    //                 "city": "Mumbai Suburban",
    //                 "line2": "",
    //                 "lat": 19.0662066
    //             },
    //             "email": "",
    //             "typeShop": "Both",
    //             "PnD_nationCharge": 0,
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "PnD_parcelNotFree": false,
    //             "PnD_freeStart": 0,
    //             "phone": "8879751140",
    //             "require": false,
    //             "typeOrdr": "F2F_ONLINE",
    //             "addressDropT": "work"
    //         },
    //         "camp": {
    //             "max": 0,
    //             "customPay": 0,
    //             "customAct": false,
    //             "countP": 0,
    //             "storeTyp": "Both",
    //             "countM": 0,
    //             "paused": false,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "expiry": false,
    //             "name": "Campaign-39",
    //             "min": 1200,
    //             "tX": "t1",
    //             "cbNew": 80,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "type": "flat",
    //             "cbExi": 30,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "stage": 0,
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "countS": 0,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "stoped": false,
    //             "ban": false,
    //             "paid": false,
    //             "cbDir": 40
    //         },
    //         "amBurst": 1,
    //         "invoice": {
    //             "amtRefrCash": 1.05,
    //             "useRefrCash": true,
    //             "COD": false
    //         },
    //         "cart": [
    //             {
    //                 "description": "Chocolate",
    //                 "code": "123123123",
    //                 "warranty": true,
    //                 "banners": [],
    //                 "category": "chocolate",
    //                 "sold": 0,
    //                 "vX": [],
    //                 "upd": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "title": "JimJam",
    //                 "sin": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "burn": false,
    //                 "reqBurn": false,
    //                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //                 "cost": 1,
    //                 "sid": "8B9ozj7aTPvywkIvVWiK",
    //                 "id": "WdH3xlYAQlgwBkha2EsA",
    //                 "quota": 0,
    //                 "variants": [],
    //                 "Q": 1,
    //                 "price": 5,
    //                 "content": true
    //             }
    //         ],
    //         "amTotal": 1.05,
    //         "amTax": 0.05,
    //         "status": 10,
    //         "storeName": "Fit Food",
    //         "id": "lOsYm8PmqQhnJWWTbfBX",
    //         "amSave": 5.05,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amSale": 5,
    //         "userName": "Aditya",
    //         "ordrTYPE": "RefrCASH",
    //         "type": [
    //             "RefrCASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "A000Ky"
    //         ],
    //         "sin": {
    //             "seconds": 1665183854,
    //             "nanoseconds": 107000000
    //         },
    //         "refr": {
    //             "earn": 0,
    //             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "name": "Aditya"
    //         },
    //         "amGateway": 0,
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "setShortID": true,
    //         "amCost": 0,
    //         "journey": "F2F",
    //         "amParcel": 0,
    //         "amRefr": 0,
    //         "amParcelCity": false,
    //         "com": {
    //             "seconds": 1665262552,
    //             "nanoseconds": 93000000
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "earn": 0,
    //         "shortID": "A000GF",
    //         "code": "A000Ky",
    //         "amTaxTDS": 0,
    //         "amTaxTCS": 0.01,
    //         "upd": {
    //             "seconds": 1665183854,
    //             "nanoseconds": 107000000
    //         }
    //     },
    //     {
    //         "amTotal": 1.05,
    //         "invoice": {
    //             "useRefrCash": true,
    //             "COD": false,
    //             "amtRefrCash": 1.05
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "userName": "Aditya",
    //         "setShortID": true,
    //         "type": [
    //             "RefrCASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "A000Ky"
    //         ],
    //         "amParcel": 0,
    //         "amTaxTDS": 0,
    //         "amCost": 0,
    //         "journey": "F2F",
    //         "amParcelCity": false,
    //         "code": "A000Ky",
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "id": "Jhe8VHC2hvCx3wsByE5K",
    //         "amTax": 0.05,
    //         "upd": {
    //             "seconds": 1665183583,
    //             "nanoseconds": 894000000
    //         },
    //         "storeName": "Fit Food",
    //         "camp": {
    //             "cbNew": 80,
    //             "max": 0,
    //             "countP": 0,
    //             "name": "Campaign-39",
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "cbDir": 40,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "type": "flat",
    //             "cbExi": 30,
    //             "paid": false,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "min": 1200,
    //             "stage": 0,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "paused": false,
    //             "ban": false,
    //             "tX": "t1",
    //             "expiry": false,
    //             "countM": 0,
    //             "countS": 0,
    //             "storeTyp": "Both",
    //             "stoped": false,
    //             "customAct": false,
    //             "customPay": 0
    //         },
    //         "amRefr": 0,
    //         "refr": {
    //             "name": "Aditya",
    //             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "earn": 0
    //         },
    //         "sin": {
    //             "seconds": 1665183583,
    //             "nanoseconds": 894000000
    //         },
    //         "amTaxTCS": 0.01,
    //         "shortID": "A000GD",
    //         "ordrTYPE": "RefrCASH",
    //         "status": 10,
    //         "earn": 0,
    //         "amSale": 5,
    //         "amGateway": 0,
    //         "amBurst": 1,
    //         "logistics": {
    //             "addressPick": {
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "nation": "IND",
    //                 "zip": "400050",
    //                 "id": "IND_MH_1648672299398",
    //                 "state": "MH",
    //                 "lon": 72.83105909999999,
    //                 "line2": "",
    //                 "locality": "Mumbai",
    //                 "lat": 19.0662066,
    //                 "area": "Dent Heal",
    //                 "region": "Maharashtra",
    //                 "city": "Mumbai Suburban"
    //             },
    //             "addressDrop": {
    //                 "type": "work",
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400056
    //             },
    //             "status": 20,
    //             "typeCat": "food_and_beverages",
    //             "addressDropT": "work",
    //             "phone": "8879751140",
    //             "name": "Aditya",
    //             "PnD_freeStart": 0,
    //             "PnD_cityCharge": 0,
    //             "email": "",
    //             "typeShop": "Both",
    //             "addressPickT": "shop",
    //             "typeOrdr": "F2F_ONLINE",
    //             "PnD_nationCharge": 0,
    //             "PnD_parcelNotFree": false,
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "require": false
    //         },
    //         "com": {
    //             "seconds": 1665262549,
    //             "nanoseconds": 48000000
    //         },
    //         "cart": [
    //             {
    //                 "code": "123123123",
    //                 "cost": 1,
    //                 "vX": [],
    //                 "burn": false,
    //                 "content": true,
    //                 "banners": [],
    //                 "description": "Chocolate",
    //                 "sold": 0,
    //                 "Q": 1,
    //                 "category": "chocolate",
    //                 "warranty": true,
    //                 "upd": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //                 "id": "WdH3xlYAQlgwBkha2EsA",
    //                 "variants": [],
    //                 "reqBurn": false,
    //                 "price": 5,
    //                 "sid": "8B9ozj7aTPvywkIvVWiK",
    //                 "title": "JimJam",
    //                 "sin": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "quota": 0
    //             }
    //         ],
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amSave": 5.05
    //     },
    //     {
    //         "shortID": "A000Fn",
    //         "refr": null,
    //         "logistics": {
    //             "status": 0,
    //             "require": false,
    //             "addressPick": null,
    //             "addressDrop": null
    //         },
    //         "amCost": 0,
    //         "amTotal": 100,
    //         "upd": {
    //             "seconds": 1665153021,
    //             "nanoseconds": 27000000
    //         },
    //         "amParcelCity": false,
    //         "to": "I6sgDPgDHWVFb2fUfpocMCGQ4BF2",
    //         "userName": "Aditya",
    //         "sid": "j6JA0nwrggysVGfkRLO6",
    //         "amGateway": 0,
    //         "amSave": 0,
    //         "amBurst": 0,
    //         "amTaxTDS": 0,
    //         "cart": [],
    //         "amSale": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "earn": 25,
    //         "invoice": {
    //             "useRefrCash": false,
    //             "amtRefrCash": 0,
    //             "COD": false
    //         },
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "I6sgDPgDHWVFb2fUfpocMCGQ4BF2",
    //             "j6JA0nwrggysVGfkRLO6",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ci",
    //             "addORDER"
    //         ],
    //         "storeName": "Dent Heal ",
    //         "setShortID": true,
    //         "amTaxTCS": 0,
    //         "amParcel": 0,
    //         "camp": {
    //             "stoped": false,
    //             "tX": "t11",
    //             "paused": false,
    //             "countM": 0,
    //             "min": 100,
    //             "id": "gQQb596qPJeT9Xa5xXNX",
    //             "stage": 0,
    //             "countS": 0,
    //             "name": "Campaign-1",
    //             "sid": "j6JA0nwrggysVGfkRLO6",
    //             "ban": false,
    //             "storeTyp": "Offl",
    //             "countP": 0,
    //             "expiry": false,
    //             "paid": false,
    //             "cbNew": 50,
    //             "type": "flat",
    //             "by": "I6sgDPgDHWVFb2fUfpocMCGQ4BF2",
    //             "dateE": {
    //                 "seconds": 1665212400,
    //                 "nanoseconds": 0
    //             },
    //             "cbDir": 25,
    //             "customPay": 0,
    //             "upd": {
    //                 "seconds": 1662630707,
    //                 "nanoseconds": 802000000
    //             },
    //             "customAct": false,
    //             "cbExi": 25,
    //             "max": 0,
    //             "dateS": {
    //                 "seconds": 1662620400,
    //                 "nanoseconds": 0
    //             },
    //             "sin": {
    //                 "seconds": 1662630707,
    //                 "nanoseconds": 802000000
    //             }
    //         },
    //         "amTax": 0,
    //         "journey": "POS",
    //         "ordrTYPE": "CASH",
    //         "com": {
    //             "seconds": 1665153050,
    //             "nanoseconds": 218000000
    //         },
    //         "amRefr": 0,
    //         "status": 10,
    //         "sin": {
    //             "seconds": 1665153021,
    //             "nanoseconds": 27000000
    //         },
    //         "code": "A000Ci",
    //         "id": "ZtSjd2o3dB4wCNubaU8E"
    //     },
    //     {
    //         "amCost": 0,
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amTotal": 0,
    //         "amSale": 0,
    //         "upd": {
    //             "seconds": 1665152786,
    //             "nanoseconds": 106000000
    //         },
    //         "amTaxTDS": 0,
    //         "amParcelCity": false,
    //         "cart": [],
    //         "invoice": {
    //             "COD": false,
    //             "amtRefrCash": 0,
    //             "useRefrCash": false
    //         },
    //         "com": {
    //             "seconds": 1665152737,
    //             "nanoseconds": 942000000
    //         },
    //         "status": -10,
    //         "ordrTYPE": "CASH",
    //         "refr": {
    //             "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "name": "Aditya",
    //             "earn": 0
    //         },
    //         "camp": {
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "paused": false,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "storeTyp": "Both",
    //             "countS": 0,
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "countP": 0,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "name": "Campaign-39",
    //             "paid": false,
    //             "stage": 0,
    //             "cbNew": 80,
    //             "cbExi": 30,
    //             "ban": false,
    //             "expiry": false,
    //             "countM": 0,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "stoped": false,
    //             "min": 1200,
    //             "max": 0,
    //             "customAct": false,
    //             "customPay": 0,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "tX": "t1",
    //             "cbDir": 40,
    //             "type": "flat"
    //         },
    //         "amTaxTCS": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "REDEEM",
    //             "A000Ky"
    //         ],
    //         "amSave": 0,
    //         "amParcel": 0,
    //         "setShortID": true,
    //         "storeName": "Fit Food",
    //         "shortID": "A000Fj",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "id": "ZncHuBBOJ8RpCWC4vVu2",
    //         "code": "A000Ky",
    //         "amBurst": 0,
    //         "amGateway": 0,
    //         "earn": 0,
    //         "logistics": {
    //             "addressDropT": null,
    //             "addressPickT": "shop",
    //             "typeCat": "food_and_beverages",
    //             "email": "",
    //             "typeOrdr": "F2F_OFFLINE",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "typeShop": "Both",
    //             "addressPick": {
    //                 "line2": "",
    //                 "area": "Dent Heal",
    //                 "zip": "400050",
    //                 "locality": "Mumbai",
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "state": "MH",
    //                 "lon": 72.83105909999999,
    //                 "id": "IND_MH_1648672299398",
    //                 "region": "Maharashtra",
    //                 "lat": 19.0662066,
    //                 "nation": "IND",
    //                 "city": "Mumbai Suburban"
    //             },
    //             "status": 0,
    //             "phone": "+918879751140",
    //             "addressDrop": null,
    //             "require": false,
    //             "name": "Aditya"
    //         },
    //         "sin": {
    //             "seconds": 1665152737,
    //             "nanoseconds": 942000000
    //         },
    //         "userName": "Aditya",
    //         "journey": "F2F",
    //         "amRefr": 0,
    //         "amTax": 0
    //     },
    //     {
    //         "amBurst": 1,
    //         "shortID": "A000F4",
    //         "amTaxTDS": 0,
    //         "status": 1,
    //         "cart": [
    //             {
    //                 "price": 5,
    //                 "reqBurn": false,
    //                 "sold": 0,
    //                 "id": "WdH3xlYAQlgwBkha2EsA",
    //                 "code": "123123123",
    //                 "sid": "8B9ozj7aTPvywkIvVWiK",
    //                 "category": "chocolate",
    //                 "variants": [],
    //                 "warranty": true,
    //                 "content": true,
    //                 "banners": [],
    //                 "Q": 1,
    //                 "upd": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "cost": 1,
    //                 "sin": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //                 "title": "JimJam",
    //                 "burn": false,
    //                 "quota": 0,
    //                 "vX": [],
    //                 "description": "Chocolate"
    //             }
    //         ],
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "COD": false,
    //             "useRefrCash": false
    //         },
    //         "amTotal": 1.05,
    //         "logistics": {
    //             "phone": "8879751140",
    //             "addressDropT": "work",
    //             "name": "Aditya",
    //             "PnD_cityCharge": 0,
    //             "typeCat": "food_and_beverages",
    //             "PnD_freeStart": 0,
    //             "PnD_nationCharge": 0,
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "PnD_parcelNotFree": false,
    //             "email": "",
    //             "typeShop": "Both",
    //             "require": false,
    //             "addressDrop": {
    //                 "landmark": "Gagandeep bus stop",
    //                 "type": "work",
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "zip": 400056
    //             },
    //             "addressPickT": "shop",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "addressPick": {
    //                 "area": "Dent Heal",
    //                 "region": "Maharashtra",
    //                 "lat": 19.0662066,
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "zip": "400050",
    //                 "city": "Mumbai Suburban",
    //                 "nation": "IND",
    //                 "lon": 72.83105909999999,
    //                 "state": "MH",
    //                 "locality": "Mumbai",
    //                 "line2": "",
    //                 "id": "IND_MH_1648672299398"
    //             },
    //             "status": 0
    //         },
    //         "amTax": 0.05,
    //         "refr": null,
    //         "gwORDR": "order_KQtarx1Tu5j2gX",
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "amGateway": 0.02478,
    //         "upd": {
    //             "seconds": 1665148753,
    //             "nanoseconds": 995000000
    //         },
    //         "amParcel": 0,
    //         "amTaxTCS": 0.01,
    //         "amRefr": 0,
    //         "com": {
    //             "seconds": 1665148753,
    //             "nanoseconds": 995000000
    //         },
    //         "gwID": "pay_KQtc4jk590JqTh",
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "gwSIGN": "e246d492c92944250aeb8b4fae68edf8a1fb68e7b427ab39f812d1c4d3aeca79",
    //         "userName": "Aditya",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "setShortID": true,
    //         "gwInfo": {
    //             "vpa": "adityakirtane27@okaxis",
    //             "notes": {
    //                 "description": "descriptionX"
    //             },
    //             "wallet": null,
    //             "card_id": null,
    //             "amount_refunded": 0,
    //             "email": "adityakirtane27@gmail.com",
    //             "status": "captured",
    //             "contact": "+918879751140",
    //             "bank": null,
    //             "id": "pay_KQtc4jk590JqTh",
    //             "error_description": null,
    //             "captured": true,
    //             "error_reason": null,
    //             "refund_status": null,
    //             "order_id": "order_KQtarx1Tu5j2gX",
    //             "currency": "INR",
    //             "method": "upi",
    //             "error_step": null,
    //             "error_source": null,
    //             "fee": 3,
    //             "international": false,
    //             "error_code": null,
    //             "description": "payment to Fit Food",
    //             "acquirer_data": {
    //                 "rrn": "228016364896"
    //             },
    //             "invoice_id": null,
    //             "tax": 0,
    //             "amount": 105,
    //             "created_at": 1665148826,
    //             "entity": "payment"
    //         },
    //         "storeName": "Fit Food",
    //         "id": "djItSNyM0hvmv8who9OJ",
    //         "ordrTYPE": "ONLINE",
    //         "amSale": 5,
    //         "camp": {
    //             "customAct": false,
    //             "stoped": false,
    //             "paid": false,
    //             "max": 0,
    //             "countM": 0,
    //             "stage": 0,
    //             "cbExi": 30,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "type": "flat",
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "countS": 0,
    //             "min": 1200,
    //             "name": "Campaign-39",
    //             "cbDir": 40,
    //             "countP": 0,
    //             "storeTyp": "Both",
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "expiry": false,
    //             "customPay": 0,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "cbNew": 80,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "tX": "t1",
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "ban": false,
    //             "paused": false
    //         },
    //         "amParcelCity": false,
    //         "journey": "DIRECT",
    //         "amCost": 1.05,
    //         "earn": 0,
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ],
    //         "sin": {
    //             "seconds": 1665148753,
    //             "nanoseconds": 995000000
    //         },
    //         "amSave": 4,
    //         "code": null
    //     },
    //     {
    //         "code": null,
    //         "storeName": "Fit Food",
    //         "amGateway": 0,
    //         "amSale": 5,
    //         "amTotal": 1.05,
    //         "userName": "Aditya",
    //         "amTaxTCS": 0.01,
    //         "id": "SaD3pW3fNLZ4SnhPdqO1",
    //         "sin": {
    //             "seconds": 1665147111,
    //             "nanoseconds": 943000000
    //         },
    //         "com": {
    //             "seconds": 1665147111,
    //             "nanoseconds": 943000000
    //         },
    //         "amParcelCity": false,
    //         "amSave": 5.05,
    //         "refr": null,
    //         "journey": "DIRECT",
    //         "amTax": 0.05,
    //         "upd": {
    //             "seconds": 1665147111,
    //             "nanoseconds": 943000000
    //         },
    //         "cart": [
    //             {
    //                 "category": "chocolate",
    //                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //                 "upd": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "banners": [],
    //                 "content": true,
    //                 "title": "JimJam",
    //                 "cost": 1,
    //                 "sin": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "sid": "8B9ozj7aTPvywkIvVWiK",
    //                 "warranty": true,
    //                 "reqBurn": false,
    //                 "id": "WdH3xlYAQlgwBkha2EsA",
    //                 "price": 5,
    //                 "quota": 0,
    //                 "Q": 1,
    //                 "variants": [],
    //                 "vX": [],
    //                 "burn": false,
    //                 "sold": 0,
    //                 "description": "Chocolate",
    //                 "code": "123123123"
    //             }
    //         ],
    //         "status": 0,
    //         "amTaxTDS": 0,
    //         "camp": {
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "paused": false,
    //             "tX": "t1",
    //             "customAct": false,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "stoped": false,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "min": 1200,
    //             "stage": 0,
    //             "countS": 0,
    //             "cbNew": 80,
    //             "storeTyp": "Both",
    //             "countM": 0,
    //             "expiry": false,
    //             "customPay": 0,
    //             "max": 0,
    //             "type": "flat",
    //             "countP": 0,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "cbExi": 30,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "paid": false,
    //             "name": "Campaign-39",
    //             "cbDir": 40,
    //             "ban": false,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
    //         },
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amCost": 0,
    //         "ordrTYPE": "RefrCASH",
    //         "logistics": {
    //             "email": "",
    //             "name": "Aditya",
    //             "addressPickT": "shop",
    //             "typeShop": "Both",
    //             "addressDropT": "work",
    //             "status": 0,
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "phone": "8879751140",
    //             "addressDrop": {
    //                 "zip": 400056,
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "type": "work",
    //                 "landmark": "Gagandeep bus stop"
    //             },
    //             "typeCat": "food_and_beverages",
    //             "PnD_nationCharge": 0,
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "PnD_cityCharge": 0,
    //             "addressPick": {
    //                 "line2": "",
    //                 "area": "Dent Heal",
    //                 "id": "IND_MH_1648672299398",
    //                 "lon": 72.83105909999999,
    //                 "state": "MH",
    //                 "zip": "400050",
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "nation": "IND",
    //                 "region": "Maharashtra",
    //                 "city": "Mumbai Suburban",
    //                 "lat": 19.0662066,
    //                 "locality": "Mumbai"
    //             },
    //             "require": false,
    //             "PnD_parcelNotFree": false,
    //             "PnD_freeStart": 0
    //         },
    //         "earn": 0,
    //         "amParcel": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "invoice": {
    //             "amtRefrCash": 1.05,
    //             "useRefrCash": true,
    //             "COD": false
    //         },
    //         "setShortID": true,
    //         "amRefr": 0,
    //         "shortID": "A000FU",
    //         "type": [
    //             "RefrCASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ],
    //         "amBurst": 1
    //     },
    //     {
    //         "id": "bfVLlPVpFGFi4pcQoIps",
    //         "storeName": "Fit Food",
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amTaxTCS": 0.01,
    //         "amTotal": 1.05,
    //         "gwSIGN": "8b682045f58f206b70830d9b169d5df8c738c54f859fde3a9ffbeddccd7adaf5",
    //         "com": {
    //             "seconds": 1665137040,
    //             "nanoseconds": 436000000
    //         },
    //         "cart": [
    //             {
    //                 "burn": false,
    //                 "warranty": true,
    //                 "category": "chocolate",
    //                 "sid": "8B9ozj7aTPvywkIvVWiK",
    //                 "quota": 0,
    //                 "variants": [],
    //                 "price": 5,
    //                 "reqBurn": false,
    //                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //                 "title": "JimJam",
    //                 "vX": [],
    //                 "cost": 1,
    //                 "sold": 0,
    //                 "upd": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "description": "Chocolate",
    //                 "sin": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "code": "123123123",
    //                 "Q": 1,
    //                 "content": true,
    //                 "id": "WdH3xlYAQlgwBkha2EsA",
    //                 "banners": []
    //             }
    //         ],
    //         "amTaxTDS": 0,
    //         "amRefr": 0,
    //         "amParcelCity": false,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amCost": 1.05,
    //         "amGateway": 0.02478,
    //         "amParcel": 0,
    //         "refr": null,
    //         "gwORDR": "order_KQqGdolaxgxeAh",
    //         "sin": {
    //             "seconds": 1665137040,
    //             "nanoseconds": 436000000
    //         },
    //         "camp": {
    //             "stage": 0,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "expiry": false,
    //             "paid": false,
    //             "type": "flat",
    //             "cbDir": 40,
    //             "paused": false,
    //             "customPay": 0,
    //             "ban": false,
    //             "cbNew": 80,
    //             "countP": 0,
    //             "min": 1200,
    //             "name": "Campaign-39",
    //             "tX": "t1",
    //             "countM": 0,
    //             "customAct": false,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "max": 0,
    //             "cbExi": 30,
    //             "storeTyp": "Both",
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "countS": 0,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "stoped": false,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             }
    //         },
    //         "gwInfo": {
    //             "email": "adityakirtane27@gmail.com",
    //             "entity": "payment",
    //             "error_source": null,
    //             "method": "upi",
    //             "vpa": "adityakirtane27@okaxis",
    //             "currency": "INR",
    //             "description": "payment to Fit Food",
    //             "order_id": "order_KQqGdolaxgxeAh",
    //             "error_code": null,
    //             "error_step": null,
    //             "notes": {
    //                 "description": "descriptionX"
    //             },
    //             "created_at": 1665137131,
    //             "error_reason": null,
    //             "bank": null,
    //             "id": "pay_KQqIBAbX4IH8ED",
    //             "invoice_id": null,
    //             "tax": 0,
    //             "contact": "+918879751140",
    //             "error_description": null,
    //             "captured": true,
    //             "international": false,
    //             "fee": 3,
    //             "acquirer_data": {
    //                 "rrn": "228011142297"
    //             },
    //             "amount": 105,
    //             "status": "captured",
    //             "refund_status": null,
    //             "card_id": null,
    //             "amount_refunded": 0,
    //             "wallet": null
    //         },
    //         "amTax": 0.05,
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "gwID": "pay_KQqIBAbX4IH8ED",
    //         "status": 1,
    //         "amSale": 5,
    //         "ordrTYPE": "ONLINE",
    //         "upd": {
    //             "seconds": 1665137040,
    //             "nanoseconds": 436000000
    //         },
    //         "journey": "DIRECT",
    //         "code": null,
    //         "userName": "Aditya",
    //         "invoice": {
    //             "useRefrCash": false,
    //             "COD": false,
    //             "amtRefrCash": 0
    //         },
    //         "earn": 0,
    //         "logistics": {
    //             "PnD_cityCharge": 0,
    //             "addressPickT": "shop",
    //             "typeCat": "food_and_beverages",
    //             "name": "Aditya",
    //             "PnD_freeStart": 0,
    //             "PnD_nationCharge": 0,
    //             "addressDropT": "work",
    //             "addressDrop": {
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "zip": 400056,
    //                 "landmark": "Gagandeep bus stop",
    //                 "type": "work"
    //             },
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "typeShop": "Both",
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "email": "",
    //             "addressPick": {
    //                 "nation": "IND",
    //                 "area": "Dent Heal",
    //                 "lat": 19.0662066,
    //                 "state": "MH",
    //                 "lon": 72.83105909999999,
    //                 "zip": "400050",
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "id": "IND_MH_1648672299398",
    //                 "line2": "",
    //                 "region": "Maharashtra",
    //                 "city": "Mumbai Suburban",
    //                 "locality": "Mumbai"
    //             },
    //             "require": false,
    //             "phone": "8879751140",
    //             "status": 0,
    //             "PnD_parcelNotFree": false
    //         },
    //         "amBurst": 1,
    //         "amSave": 4,
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ]
    //     },
    //     {
    //         "storeName": "Fit Food",
    //         "logistics": {
    //             "email": "",
    //             "require": false,
    //             "typeCat": "food_and_beverages",
    //             "name": "Aditya",
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "addressPick": {
    //                 "state": "MH",
    //                 "line2": "",
    //                 "city": "Mumbai Suburban",
    //                 "region": "Maharashtra",
    //                 "lat": 19.0662066,
    //                 "id": "IND_MH_1648672299398",
    //                 "lon": 72.83105909999999,
    //                 "locality": "Mumbai",
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "zip": "400050",
    //                 "nation": "IND",
    //                 "area": "Dent Heal"
    //             },
    //             "PnD_cityCharge": 0,
    //             "addressDropT": "work",
    //             "PnD_nationCharge": 0,
    //             "addressDrop": {
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "type": "work",
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400056
    //             },
    //             "PnD_parcelNotFree": false,
    //             "typeShop": "Both",
    //             "phone": "8879751140",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "status": 20,
    //             "PnD_freeStart": 0,
    //             "addressPickT": "shop"
    //         },
    //         "code": null,
    //         "refr": null,
    //         "sin": {
    //             "seconds": 1665136887,
    //             "nanoseconds": 83000000
    //         },
    //         "id": "cTek7XfalONULH4oRsPV",
    //         "amGateway": 0,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "camp": {
    //             "cbExi": 30,
    //             "type": "flat",
    //             "min": 1200,
    //             "name": "Campaign-39",
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "tX": "t1",
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "customPay": 0,
    //             "expiry": false,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "countS": 0,
    //             "countP": 0,
    //             "customAct": false,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "paused": false,
    //             "max": 0,
    //             "stage": 0,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "ban": false,
    //             "cbNew": 80,
    //             "paid": false,
    //             "storeTyp": "Both",
    //             "stoped": false,
    //             "countM": 0,
    //             "cbDir": 40
    //         },
    //         "amTaxTDS": 0,
    //         "amTax": 0.05,
    //         "com": {
    //             "seconds": 1665136981,
    //             "nanoseconds": 749000000
    //         },
    //         "cart": [
    //             {
    //                 "vX": [],
    //                 "reqBurn": false,
    //                 "variants": [],
    //                 "sin": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "upd": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "warranty": true,
    //                 "category": "chocolate",
    //                 "content": true,
    //                 "banners": [],
    //                 "code": "123123123",
    //                 "price": 5,
    //                 "sid": "8B9ozj7aTPvywkIvVWiK",
    //                 "Q": 1,
    //                 "title": "JimJam",
    //                 "burn": false,
    //                 "quota": 0,
    //                 "cost": 1,
    //                 "sold": 0,
    //                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //                 "description": "Chocolate",
    //                 "id": "WdH3xlYAQlgwBkha2EsA"
    //             }
    //         ],
    //         "setShortID": true,
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "amTaxTCS": 0.01,
    //         "ordrTYPE": "RefrCASH",
    //         "amParcelCity": false,
    //         "type": [
    //             "RefrCASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ],
    //         "amSale": 5,
    //         "invoice": {
    //             "useRefrCash": true,
    //             "COD": false,
    //             "amtRefrCash": 1.05
    //         },
    //         "journey": "DIRECT",
    //         "upd": {
    //             "seconds": 1665136887,
    //             "nanoseconds": 83000000
    //         },
    //         "amParcel": 0,
    //         "status": 10,
    //         "earn": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "shortID": "A000Jm",
    //         "amSave": 5.05,
    //         "amRefr": 0,
    //         "amTotal": 1.05,
    //         "amBurst": 1,
    //         "amCost": 0,
    //         "userName": "Aditya",
    //         "done": {
    //             "seconds": 1665398738,
    //             "nanoseconds": 857000000
    //         }
    //     },
    //     {
    //         "userName": "Aditya",
    //         "logistics": {
    //             "phone": "8879751140",
    //             "status": 0,
    //             "addressPickT": "shop",
    //             "typeCat": "supermarket",
    //             "PnD_parcelNotFree": false,
    //             "PnD_nationCharge": 0,
    //             "name": "Aditya",
    //             "addressDrop": {
    //                 "type": "home",
    //                 "landmark": "Sumeru tower",
    //                 "address": "Amrut kunj CHS Sai kunj bhavan G/002 ganesh nagar tisgaon kalyan east",
    //                 "zip": 421306
    //             },
    //             "require": false,
    //             "PnD_freeStart": 0,
    //             "PnD_cityCharge": 0,
    //             "addressPick": {
    //                 "nation": "IND",
    //                 "line1": "2217 Solus ",
    //                 "zip": "400607",
    //                 "id": "IND_MH_1657089479303",
    //                 "area": "hirana",
    //                 "region": "Maharashtra",
    //                 "city": "Thane",
    //                 "locality": "Thane",
    //                 "lat": 19.2591372,
    //                 "state": "MH",
    //                 "line2": "",
    //                 "lon": 72.9844401
    //             },
    //             "typeShop": "Onli",
    //             "typeOrdr": "BURN",
    //             "typeSuCat": "supermarket-any",
    //             "email": "",
    //             "addressDropT": "home"
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "id": "Uw7PVdY0z3gFOTCnzgqD",
    //         "com": {
    //             "seconds": 1665135695,
    //             "nanoseconds": 781000000
    //         },
    //         "camp": null,
    //         "earn": 0,
    //         "status": 0,
    //         "amBurst": 134,
    //         "amTaxTDS": 0,
    //         "refr": null,
    //         "upd": {
    //             "seconds": 1665135695,
    //             "nanoseconds": 781000000
    //         },
    //         "amTax": 0,
    //         "amTaxTCS": 1.34,
    //         "amParcelCity": false,
    //         "amGateway": 0,
    //         "type": [
    //             "RefrCASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "7HRRyBvNstY7i2Fvd4ES6ryhiBX2",
    //             "uq7KsHGVWUSLiPuIituu",
    //             "storeORDER",
    //             "clientAc",
    //             "addORDER",
    //             "BURN",
    //             null
    //         ],
    //         "code": null,
    //         "sin": {
    //             "seconds": 1665135695,
    //             "nanoseconds": 781000000
    //         },
    //         "amTotal": 134,
    //         "amCost": 0,
    //         "amParcel": 0,
    //         "amSave": 149,
    //         "to": "7HRRyBvNstY7i2Fvd4ES6ryhiBX2",
    //         "journey": "BURN",
    //         "invoice": {
    //             "amtRefrCash": 134,
    //             "useRefrCash": true,
    //             "COD": false
    //         },
    //         "cart": [
    //             {
    //                 "burnCat": "electronics",
    //                 "title": "Shut Up And Take My Money Card With Window Exclusive",
    //                 "burn": true,
    //                 "cost": 134,
    //                 "quota": 0,
    //                 "variants": [
    //                     {
    //                         "name": "Rectangular Chip",
    //                         "type": "size"
    //                     },
    //                     {
    //                         "type": "size",
    //                         "name": "Square Chip"
    //                     }
    //                 ],
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeG6GeTZube1KUxPk0LsI1658568756449?alt=media&token=4d40d9d6-75e7-4739-8d1d-cb88a902f72a"
    //                 ],
    //                 "reqBurn": false,
    //                 "description": "Are you bored of your plain and dull card? Why not turn it into something more exciting? Say by adding a new layer of oomph and elegance with a customized WrapCart skin! This vinyl card skin is easy to apply and remove and leaves absolutely no residue. And best of all it doesn’t cost a bomb to make your card look like ‘da bomb’!",
    //                 "flash": false,
    //                 "burnBrand": "Wrapcart",
    //                 "burnDec": "Are you bored of your plain and dull card? Why not turn it into something more exciting? Say by adding a new layer of oomph and elegance with a customized WrapCart skin! This vinyl card skin is easy to apply and to remove and leaves absolutely no residue. And best of all- it doesn’t cost a bomb to make your card look like ‘da bomb’! Elevate your card to be a reflection of you with WrapCart. We at WrapCart bring you a fun and quirky collection of skins to place on your debit and credit card to bring it to life! WrapCart is proud to be a market leader due to our revolutionary Bank Card Skins.    Whether it be a gold, silver, platinum, diamond, or titanium card we use only the most premium high-quality vinyl to create our credit card skins and debit card skins. Don’t worry, the adhesives and vinyl we use doesn’t stain, discolor, or leave any residue on your precious card. We use the best technology that helps eliminate bubbles and wrinkles. It also makes your card easy to apply or remove. Our debit card covers and credit card covers fit smoothly and evenly to make your card look the best. By taking into account the shape of the chip on your card, we provide the perfect fit.",
    //                 "vX": [
    //                     {
    //                         "countQ": 1,
    //                         "nowVarient": [
    //                             {
    //                                 "name": "Rectangular Chip",
    //                                 "type": "size"
    //                             }
    //                         ],
    //                         "id": "eG6GeTZube1KUxPk0LsI"
    //                     }
    //                 ],
    //                 "category": "Card Skins",
    //                 "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeG6GeTZube1KUxPk0LsI1658572519649?alt=media&token=9d1ee76a-7690-427b-adad-9aaae05d89fd",
    //                 "burnPics": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeG6GeTZube1KUxPk0LsI1658572519649?alt=media&token=9d1ee76a-7690-427b-adad-9aaae05d89fd",
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeG6GeTZube1KUxPk0LsI1658572525696?alt=media&token=22542cdf-03fd-4b1b-90ae-8f2c2a4528ce",
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeG6GeTZube1KUxPk0LsI1658572530997?alt=media&token=86883188-5647-46fc-b6df-0a5601d29d70"
    //                 ],
    //                 "by": "7HRRyBvNstY7i2Fvd4ES6ryhiBX2",
    //                 "code": 391690,
    //                 "relate": [],
    //                 "burnDecShort": "Shut Up And Take My Money Card With Window Exclusive",
    //                 "Q": 1,
    //                 "burnHigh": "But wait. All that sounds good but will my card work? YES absolutely! We at WrapCart designed our card skins to be thin enough to allow you to Tap, Swipe, and Insert as usual!\n ",
    //                 "sin": {
    //                     "seconds": 1658567590,
    //                     "nanoseconds": 872000000
    //                 },
    //                 "warranty": true,
    //                 "upd": {
    //                     "seconds": 1664357292,
    //                     "nanoseconds": 718000000
    //                 },
    //                 "id": "eG6GeTZube1KUxPk0LsI",
    //                 "burnSpec": "Best price- check. Bragging right- check. High quality material- check. ",
    //                 "storeINFO": {
    //                     "cat": "supermarket",
    //                     "email": "aditya@wrapcart.com",
    //                     "id": "uq7KsHGVWUSLiPuIituu",
    //                     "sin": {
    //                         "seconds": 1657089478,
    //                         "nanoseconds": 362000000
    //                     },
    //                     "shareUrlB1": "https://refrclub.com/o/F8a4",
    //                     "banners": [],
    //                     "subCat": "supermarket-any",
    //                     "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2Fuq7KsHGVWUSLiPuIituu&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fuq7KsHGVWUSLiPuIituu&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fuq7KsHGVWUSLiPuIituu&ofl=club.refr.app&st=Wrapcart&sd=We%E2%80%99re%20pretty%20up%20and%20coming%20in%20terms%20of%20our%20scale%2C%20but%20the%20grandiose%20of%20our%20vision%20surrenders%20to%20one%20thing%2C%20and%20one%20thing%20only%2C%20%E2%80%98The%20Customer%E2%80%99s%20Service%E2%80%99.%20Here%20at%20WrapCart%2C%20we%20provide%20the%20coolest%2C%20the%20strongest%20and%20the%20dopest%20wraps%20that%20you%20could%20imagine.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252Fuq7KsHGVWUSLiPuIituuLOGO1657089479953%3Falt%3Dmedia%26token%3Df4e5979d-eaf7-4a97-9fb9-5274d2c1f3c2",
    //                     "userInfo": {
    //                         "sin": {
    //                             "seconds": 1657089203,
    //                             "nanoseconds": 127000000
    //                         },
    //                         "acBalCr": 0,
    //                         "uid": "7HRRyBvNstY7i2Fvd4ES6ryhiBX2",
    //                         "display": "",
    //                         "tokenSNS": "cpM42O_STD5iuOYVgDgCPz:APA91bGZEXWQour7nqFHtKflkoFdWh5DtdtP4fqN3wvBKgQBF6DnkKIJLzjCbGd_l1Slv_NClWWCvE_mji_2mNQGaJAwVFqDjmK-tg_5avyczXqtXzijOOx_lOyZxkJ0LAEjJZRA2PQx",
    //                         "phone": "+919819987275",
    //                         "soWA": "9819987275",
    //                         "acBalH": 1660,
    //                         "cashback": 50,
    //                         "storeCam": [
    //                             "TO8Q9oKX0EhFd9l4s66z"
    //                         ],
    //                         "soIG": "wrap_cart",
    //                         "acBalP": 0,
    //                         "email": "aditya@wrapcart.com",
    //                         "ban": false,
    //                         "storeLoc": [
    //                             "uq7KsHGVWUSLiPuIituu"
    //                         ],
    //                         "soYT": "UCV_RTI77_poRtSY9lCIbl-A",
    //                         "note": [
    //                             {
    //                                 "info": "Hi Gold Pirates India LLP welcome to Refr",
    //                                 "URL": "",
    //                                 "sin": 1657089204164,
    //                                 "by": "Refr"
    //                             }
    //                         ],
    //                         "upd": {
    //                             "seconds": 1664451915,
    //                             "nanoseconds": 623000000
    //                         },
    //                         "soFB": "WrapCartOfficial/",
    //                         "acBalVr": 548,
    //                         "soTW": "",
    //                         "tokenSNS_": [
    //                             "cpM42O_STD5iuOYVgDgCPz:APA91bGZEXWQour7nqFHtKflkoFdWh5DtdtP4fqN3wvBKgQBF6DnkKIJLzjCbGd_l1Slv_NClWWCvE_mji_2mNQGaJAwVFqDjmK-tg_5avyczXqtXzijOOx_lOyZxkJ0LAEjJZRA2PQx"
    //                         ],
    //                         "coin": "INR",
    //                         "log": {
    //                             "seconds": 1657089203,
    //                             "nanoseconds": 127000000
    //                         },
    //                         "acBalV": 0,
    //                         "iso": "IND",
    //                         "emails": [],
    //                         "emailV": false,
    //                         "axess": [
    //                             "phone"
    //                         ],
    //                         "name": "Gold Pirates India LLP",
    //                         "acBalC": 0
    //                     },
    //                     "loc": [
    //                         {
    //                             "state": "MH",
    //                             "lon": 72.9844401,
    //                             "city": "Thane",
    //                             "lat": 19.2591372,
    //                             "line2": "",
    //                             "nation": "IND",
    //                             "line1": "2217 Solus ",
    //                             "region": "Maharashtra",
    //                             "area": "hirana",
    //                             "locality": "Thane",
    //                             "id": "IND_MH_1657089479303",
    //                             "zip": "400607"
    //                         }
    //                     ],
    //                     "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2Fuq7KsHGVWUSLiPuIituu&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fuq7KsHGVWUSLiPuIituu&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fuq7KsHGVWUSLiPuIituu&ofl=club.refr.app&st=Wrapcart&sd=We%E2%80%99re%20pretty%20up%20and%20coming%20in%20terms%20of%20our%20scale%2C%20but%20the%20grandiose%20of%20our%20vision%20surrenders%20to%20one%20thing%2C%20and%20one%20thing%20only%2C%20%E2%80%98The%20Customer%E2%80%99s%20Service%E2%80%99.%20Here%20at%20WrapCart%2C%20we%20provide%20the%20coolest%2C%20the%20strongest%20and%20the%20dopest%20wraps%20that%20you%20could%20imagine.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252Fuq7KsHGVWUSLiPuIituuLOGO1657089479953%3Falt%3Dmedia%26token%3Df4e5979d-eaf7-4a97-9fb9-5274d2c1f3c2",
    //                     "phone": "9819987275",
    //                     "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fuq7KsHGVWUSLiPuIituuPOST1657089482097?alt=media&token=c48e73f0-a006-4385-8fc6-8ea43a69966a",
    //                     "type": "Onli",
    //                     "shareUrlV1": "https://refrclub.com/o/bzNQ",
    //                     "name": "WrapCart",
    //                     "log": {
    //                         "seconds": 1657089478,
    //                         "nanoseconds": 362000000
    //                     },
    //                     "about": "We’re pretty up and coming in terms of our scale, but the grandiose of our vision surrenders to one thing, and one thing only, ‘The Customer’s Service’. Here at WrapCart, we provide the coolest, the strongest and the dopest wraps that you could imagine.",
    //                     "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2Fuq7KsHGVWUSLiPuIituu&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fuq7KsHGVWUSLiPuIituu&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fuq7KsHGVWUSLiPuIituu&ofl=club.refr.app&st=Wrapcart&sd=We%E2%80%99re%20pretty%20up%20and%20coming%20in%20terms%20of%20our%20scale%2C%20but%20the%20grandiose%20of%20our%20vision%20surrenders%20to%20one%20thing%2C%20and%20one%20thing%20only%2C%20%E2%80%98The%20Customer%E2%80%99s%20Service%E2%80%99.%20Here%20at%20WrapCart%2C%20we%20provide%20the%20coolest%2C%20the%20strongest%20and%20the%20dopest%20wraps%20that%20you%20could%20imagine.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252Fuq7KsHGVWUSLiPuIituuLOGO1657089479953%3Falt%3Dmedia%26token%3Df4e5979d-eaf7-4a97-9fb9-5274d2c1f3c2",
    //                     "schedule": {
    //                         "openFriS": "07:00",
    //                         "openFri": true,
    //                         "openThuE": "23:00",
    //                         "openWedE": "23:00",
    //                         "opensDailyS": "07:00",
    //                         "openWed": true,
    //                         "openSun": false,
    //                         "openTueE": "23:00",
    //                         "openFriE": "23:00",
    //                         "opensDailyE": "23:00",
    //                         "opensDaily": true,
    //                         "openThu": true,
    //                         "openSunE": "23:00",
    //                         "openSat": true,
    //                         "openSatE": "23:00",
    //                         "openWedS": "07:00",
    //                         "openMonS": "07:00",
    //                         "openSunS": "07:00",
    //                         "openTueS": "07:00",
    //                         "openTue": true,
    //                         "openThuS": "07:00",
    //                         "openSatS": "07:00",
    //                         "openMon": true,
    //                         "openMonE": "23:00"
    //                     },
    //                     "cashback": 50,
    //                     "addedDynamicLink": true,
    //                     "proCat": [
    //                         "Mobile Acessories",
    //                         "Laptop Acessories",
    //                         "Organizers",
    //                         " Mobile Acessories ",
    //                         "Bags ",
    //                         "Ipad Sleeves",
    //                         "Card Skins",
    //                         "I Watch Acessories",
    //                         "Audio TWS Acessories",
    //                         "Car Stickers",
    //                         "Bumper Stickers",
    //                         "CAR SIDE MIRROR DECALS",
    //                         "Bike Fuel Tank Decals",
    //                         "Laptop Stickers",
    //                         "Duffel Bag"
    //                     ],
    //                     "upd": {
    //                         "seconds": 1662551142,
    //                         "nanoseconds": 68000000
    //                     },
    //                     "shareUrlX1": "https://refrclub.com/o/N4uT",
    //                     "shareUrlP1": "https://refrclub.com/o/VY2j",
    //                     "typeORDER": {
    //                         "freeStart": 0,
    //                         "logistics": false,
    //                         "refund": false,
    //                         "COD": false,
    //                         "phoneHide": true,
    //                         "return": false,
    //                         "nationCharge": 0,
    //                         "cityCharge": 0,
    //                         "delivery": "Nationwide",
    //                         "exchange": false,
    //                         "freeParcel": false
    //                     },
    //                     "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2Fuq7KsHGVWUSLiPuIituu&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fuq7KsHGVWUSLiPuIituu&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fuq7KsHGVWUSLiPuIituu&ofl=club.refr.app&st=Wrapcart&sd=We%E2%80%99re%20pretty%20up%20and%20coming%20in%20terms%20of%20our%20scale%2C%20but%20the%20grandiose%20of%20our%20vision%20surrenders%20to%20one%20thing%2C%20and%20one%20thing%20only%2C%20%E2%80%98The%20Customer%E2%80%99s%20Service%E2%80%99.%20Here%20at%20WrapCart%2C%20we%20provide%20the%20coolest%2C%20the%20strongest%20and%20the%20dopest%20wraps%20that%20you%20could%20imagine.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252Fuq7KsHGVWUSLiPuIituuLOGO1657089479953%3Falt%3Dmedia%26token%3Df4e5979d-eaf7-4a97-9fb9-5274d2c1f3c2",
    //                     "products": 83,
    //                     "addedDynamicLinkP1": true,
    //                     "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fuq7KsHGVWUSLiPuIituuLOGO1657089479953?alt=media&token=f4e5979d-eaf7-4a97-9fb9-5274d2c1f3c2",
    //                     "by": "7HRRyBvNstY7i2Fvd4ES6ryhiBX2"
    //                 },
    //                 "content": false,
    //                 "sold": 0,
    //                 "burnCatSub": "Nope",
    //                 "costBurn": 120.6,
    //                 "sid": "uq7KsHGVWUSLiPuIituu",
    //                 "price": 149
    //             }
    //         ],
    //         "amSale": 149,
    //         "sid": "uq7KsHGVWUSLiPuIituu",
    //         "storeName": "WrapCart",
    //         "ordrTYPE": "RefrCASH",
    //         "amRefr": 9.38
    //     },
    //     {
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amParcel": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky",
    //             "addORDER"
    //         ],
    //         "amTotal": 1500,
    //         "amSave": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amTaxTDS": 0,
    //         "amCost": 0,
    //         "amSale": 0,
    //         "amGateway": 0,
    //         "logistics": {
    //             "addressDrop": null,
    //             "status": 0,
    //             "addressPick": null,
    //             "require": false
    //         },
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "refr": null,
    //         "amParcelCity": false,
    //         "amBurst": 0,
    //         "com": {
    //             "seconds": 1665134700,
    //             "nanoseconds": 40000000
    //         },
    //         "amTax": 0,
    //         "journey": "POS",
    //         "upd": {
    //             "seconds": 1665134671,
    //             "nanoseconds": 352000000
    //         },
    //         "userName": "Aditya",
    //         "amTaxTCS": 0,
    //         "amRefr": 0,
    //         "sin": {
    //             "seconds": 1665134671,
    //             "nanoseconds": 352000000
    //         },
    //         "storeName": "Fit Food",
    //         "cart": [],
    //         "earn": 40,
    //         "ordrTYPE": "CASH",
    //         "code": "A000Ky",
    //         "camp": {
    //             "customPay": 0,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "min": 1200,
    //             "cbExi": 30,
    //             "cbNew": 80,
    //             "max": 0,
    //             "stage": 0,
    //             "countS": 0,
    //             "expiry": false,
    //             "cbDir": 40,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "name": "Campaign-39",
    //             "customAct": false,
    //             "paused": false,
    //             "stoped": false,
    //             "countM": 0,
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "paid": false,
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "tX": "t1",
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "countP": 0,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "type": "flat",
    //             "storeTyp": "Both",
    //             "ban": false,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             }
    //         },
    //         "id": "MlOWplNMSeKJb7KoHzne",
    //         "invoice": {
    //             "useRefrCash": false,
    //             "amtRefrCash": 0,
    //             "COD": false
    //         },
    //         "status": 10
    //     },
    //     {
    //         "userName": "Aditya",
    //         "id": "afpuKOc1qS61D0fH2iqs",
    //         "amBurst": 0,
    //         "refr": null,
    //         "amSave": 0,
    //         "amTaxTDS": 0,
    //         "amTax": 0,
    //         "camp": null,
    //         "amRefr": 0,
    //         "com": {
    //             "seconds": 1665035032,
    //             "nanoseconds": 187000000
    //         },
    //         "earn": 0,
    //         "status": -10,
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "useRefrCash": false,
    //             "COD": false
    //         },
    //         "amGateway": 0,
    //         "amCost": 0,
    //         "amParcel": 0,
    //         "amParcelCity": false,
    //         "amSale": 0,
    //         "to": "I6sgDPgDHWVFb2fUfpocMCGQ4BF2",
    //         "sid": "j6JA0nwrggysVGfkRLO6",
    //         "upd": {
    //             "seconds": 1665035049,
    //             "nanoseconds": 112000000
    //         },
    //         "ordrTYPE": "CASH",
    //         "logistics": {
    //             "require": false,
    //             "addressPick": null,
    //             "status": 0,
    //             "addressDrop": null
    //         },
    //         "journey": "POS",
    //         "amTaxTCS": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "I6sgDPgDHWVFb2fUfpocMCGQ4BF2",
    //             "j6JA0nwrggysVGfkRLO6",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ci"
    //         ],
    //         "sin": {
    //             "seconds": 1665035032,
    //             "nanoseconds": 187000000
    //         },
    //         "amTotal": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "code": "A000Ci",
    //         "storeName": "Dent Heal ",
    //         "cart": []
    //     },
    //     {
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //             "l0UiOYWVKZwNeyptT6oF",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "REDEEM",
    //             "A000Ic"
    //         ],
    //         "amTaxTCS": 0,
    //         "amParcel": 0,
    //         "amCost": 0,
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "COD": false,
    //             "useRefrCash": false
    //         },
    //         "earn": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "cart": [],
    //         "amTaxTDS": 0,
    //         "journey": "F2F",
    //         "sid": "l0UiOYWVKZwNeyptT6oF",
    //         "ordrTYPE": "CASH",
    //         "refr": {
    //             "uid": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
    //             "earn": 0,
    //             "name": "Rohan"
    //         },
    //         "amTax": 0,
    //         "amBurst": 0,
    //         "amGateway": 0,
    //         "sin": {
    //             "seconds": 1665033540,
    //             "nanoseconds": 712000000
    //         },
    //         "code": "A000Ic",
    //         "to": "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //         "upd": {
    //             "seconds": 1665033547,
    //             "nanoseconds": 148000000
    //         },
    //         "com": {
    //             "seconds": 1665033540,
    //             "nanoseconds": 712000000
    //         },
    //         "logistics": {
    //             "addressPick": {
    //                 "state": "MH",
    //                 "lat": 19.214589471895756,
    //                 "area": "Shop No. 1, Swapnapurti CHS Ltd, Jivlapada Road, Thakur Village, Kandivali East, Siddharth Nagar, Borivali East, Mumbai, Maharashtra 400101, India",
    //                 "region": "Maharashtra",
    //                 "locality": "Mumbai",
    //                 "nation": "IND",
    //                 "line2": "",
    //                 "lon": 72.87071307247066,
    //                 "zip": "400101",
    //                 "line1": "Shop no. 16, Gokul Horizon, Opp Gundecha Trillium, Thakur village, Kandivali (east) ",
    //                 "city": "Mumbai Suburban",
    //                 "id": "IND_MH_1650641843138"
    //             },
    //             "status": 0,
    //             "addressDrop": null,
    //             "typeShop": "Both",
    //             "name": "Aditya",
    //             "addressPickT": "shop",
    //             "typeCat": "food_and_beverages",
    //             "email": "",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "phone": "+918879751140",
    //             "require": false,
    //             "addressDropT": null,
    //             "typeOrdr": "F2F_OFFLINE"
    //         },
    //         "amParcelCity": false,
    //         "amRefr": 0,
    //         "storeName": "Cheese Buddy Mast",
    //         "amTotal": 0,
    //         "userName": "Aditya",
    //         "id": "3LKdnDum2LDgOCETEQOs",
    //         "status": -10,
    //         "camp": {
    //             "sid": "l0UiOYWVKZwNeyptT6oF",
    //             "id": "QcL4OhfJrfi5MsxadhBw",
    //             "dateS": {
    //                 "seconds": 1663180200,
    //                 "nanoseconds": 0
    //             },
    //             "storeTyp": "Both",
    //             "countP": 0,
    //             "stage": 0,
    //             "expiry": false,
    //             "countM": 0,
    //             "max": 0,
    //             "dateE": {
    //                 "seconds": 1668450600,
    //                 "nanoseconds": 0
    //             },
    //             "stoped": false,
    //             "customPay": 0,
    //             "type": "flat",
    //             "upd": {
    //                 "seconds": 1663243362,
    //                 "nanoseconds": 661000000
    //             },
    //             "cbExi": 10,
    //             "paused": false,
    //             "tX": "t11",
    //             "name": "Campaign-3",
    //             "ban": false,
    //             "customAct": false,
    //             "by": "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //             "cbDir": 17.5,
    //             "countS": 0,
    //             "cbNew": 35,
    //             "paid": false,
    //             "sin": {
    //                 "seconds": 1663243362,
    //                 "nanoseconds": 661000000
    //             },
    //             "min": 300
    //         },
    //         "amSave": 0,
    //         "amSale": 0
    //     },
    //     {
    //         "amRefr": 0,
    //         "status": 10,
    //         "journey": "F2F",
    //         "amParcelCity": false,
    //         "com": {
    //             "seconds": 1664981829,
    //             "nanoseconds": 287000000
    //         },
    //         "upd": {
    //             "seconds": 1664981693,
    //             "nanoseconds": 212000000
    //         },
    //         "amTotal": 387,
    //         "cart": [],
    //         "amGateway": 0,
    //         "logistics": {
    //             "email": "",
    //             "require": false,
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "phone": "+918879751140",
    //             "addressDrop": null,
    //             "addressPick": {
    //                 "area": "Shop No. 1, Swapnapurti CHS Ltd, Jivlapada Road, Thakur Village, Kandivali East, Siddharth Nagar, Borivali East, Mumbai, Maharashtra 400101, India",
    //                 "zip": "400101",
    //                 "line1": "Shop no. 16, Gokul Horizon, Opp Gundecha Trillium, Thakur village, Kandivali (east) ",
    //                 "lat": 19.214589471895756,
    //                 "locality": "Mumbai",
    //                 "region": "Maharashtra",
    //                 "state": "MH",
    //                 "lon": 72.87071307247066,
    //                 "id": "IND_MH_1650641843138",
    //                 "line2": "",
    //                 "nation": "IND",
    //                 "city": "Mumbai Suburban"
    //             },
    //             "typeCat": "food_and_beverages",
    //             "typeShop": "Both",
    //             "status": 0,
    //             "addressPickT": "shop",
    //             "addressDropT": null,
    //             "name": "Aditya",
    //             "typeOrdr": "F2F_OFFLINE"
    //         },
    //         "camp": {
    //             "max": 0,
    //             "id": "QcL4OhfJrfi5MsxadhBw",
    //             "paid": false,
    //             "stage": 0,
    //             "sin": {
    //                 "seconds": 1663243362,
    //                 "nanoseconds": 661000000
    //             },
    //             "by": "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //             "dateE": {
    //                 "seconds": 1668450600,
    //                 "nanoseconds": 0
    //             },
    //             "cbExi": 10,
    //             "name": "Campaign-3",
    //             "ban": false,
    //             "storeTyp": "Both",
    //             "customAct": false,
    //             "upd": {
    //                 "seconds": 1663243362,
    //                 "nanoseconds": 661000000
    //             },
    //             "type": "flat",
    //             "cbDir": 17.5,
    //             "paused": false,
    //             "sid": "l0UiOYWVKZwNeyptT6oF",
    //             "stoped": false,
    //             "countP": 0,
    //             "countS": 0,
    //             "tX": "t11",
    //             "customPay": 0,
    //             "expiry": false,
    //             "dateS": {
    //                 "seconds": 1663180200,
    //                 "nanoseconds": 0
    //             },
    //             "countM": 0,
    //             "min": 300,
    //             "cbNew": 35
    //         },
    //         "to": "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //         "earn": 35,
    //         "amParcel": 0,
    //         "refr": {
    //             "uid": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
    //             "name": "Rohan",
    //             "earn": 10
    //         },
    //         "userName": "Aditya",
    //         "ordrTYPE": "CASH",
    //         "id": "lw0MZ2ARR6FuXCQTv9W7",
    //         "amSave": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "earnTotal": 45,
    //         "code": "A000Ic",
    //         "storeName": "Cheese Buddy Mast",
    //         "sid": "l0UiOYWVKZwNeyptT6oF",
    //         "sin": {
    //             "seconds": 1664981693,
    //             "nanoseconds": 212000000
    //         },
    //         "amTaxTCS": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //             "l0UiOYWVKZwNeyptT6oF",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "REDEEM",
    //             "A000Ic",
    //             "addORDER",
    //             "AhUWpPpy5AOG0bJlKgvwIAtTIP73"
    //         ],
    //         "amCost": 0,
    //         "amBurst": 0,
    //         "amSale": 0,
    //         "invoice": {
    //             "COD": false,
    //             "useRefrCash": false,
    //             "amtRefrCash": 0
    //         },
    //         "amTax": 0,
    //         "amTaxTDS": 0
    //     },
    //     {
    //         "amTaxTCS": 0,
    //         "amRefr": 0,
    //         "refr": {
    //             "name": "Rohan",
    //             "uid": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
    //             "earn": 10
    //         },
    //         "journey": "F2F",
    //         "amTaxTDS": 0,
    //         "amParcelCity": false,
    //         "id": "M8D1YSAYJdTwQWNELs2u",
    //         "amParcel": 0,
    //         "to": "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //         "earn": 35,
    //         "code": "A000Ic",
    //         "userName": "Aditya",
    //         "amGateway": 0,
    //         "invoice": {
    //             "COD": false,
    //             "amtRefrCash": 0,
    //             "useRefrCash": false
    //         },
    //         "amCost": 0,
    //         "status": 10,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "ordrTYPE": "CASH",
    //         "sin": {
    //             "seconds": 1664981759,
    //             "nanoseconds": 28000000
    //         },
    //         "camp": {
    //             "customPay": 0,
    //             "stage": 0,
    //             "countM": 0,
    //             "storeTyp": "Both",
    //             "cbNew": 35,
    //             "paid": false,
    //             "sid": "l0UiOYWVKZwNeyptT6oF",
    //             "customAct": false,
    //             "paused": false,
    //             "name": "Campaign-3",
    //             "countP": 0,
    //             "max": 0,
    //             "ban": false,
    //             "expiry": false,
    //             "stoped": false,
    //             "upd": {
    //                 "seconds": 1663243362,
    //                 "nanoseconds": 661000000
    //             },
    //             "sin": {
    //                 "seconds": 1663243362,
    //                 "nanoseconds": 661000000
    //             },
    //             "type": "flat",
    //             "by": "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //             "cbDir": 17.5,
    //             "dateE": {
    //                 "seconds": 1668450600,
    //                 "nanoseconds": 0
    //             },
    //             "min": 300,
    //             "id": "QcL4OhfJrfi5MsxadhBw",
    //             "countS": 0,
    //             "cbExi": 10,
    //             "tX": "t11",
    //             "dateS": {
    //                 "seconds": 1663180200,
    //                 "nanoseconds": 0
    //             }
    //         },
    //         "amSale": 0,
    //         "amTotal": 387,
    //         "com": {
    //             "seconds": 1664981822,
    //             "nanoseconds": 421000000
    //         },
    //         "cart": [],
    //         "sid": "l0UiOYWVKZwNeyptT6oF",
    //         "amSave": 0,
    //         "amBurst": 0,
    //         "storeName": "Cheese Buddy Mast",
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "gQjNG48bnUQf9scKNHGPCx8AIiJ2",
    //             "l0UiOYWVKZwNeyptT6oF",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "REDEEM",
    //             "A000Ic",
    //             "addORDER",
    //             "AhUWpPpy5AOG0bJlKgvwIAtTIP73"
    //         ],
    //         "earnTotal": 45,
    //         "upd": {
    //             "seconds": 1664981759,
    //             "nanoseconds": 28000000
    //         },
    //         "amTax": 0,
    //         "logistics": {
    //             "addressPick": {
    //                 "region": "Maharashtra",
    //                 "nation": "IND",
    //                 "line2": "",
    //                 "lat": 19.214589471895756,
    //                 "lon": 72.87071307247066,
    //                 "zip": "400101",
    //                 "line1": "Shop no. 16, Gokul Horizon, Opp Gundecha Trillium, Thakur village, Kandivali (east) ",
    //                 "id": "IND_MH_1650641843138",
    //                 "city": "Mumbai Suburban",
    //                 "state": "MH",
    //                 "area": "Shop No. 1, Swapnapurti CHS Ltd, Jivlapada Road, Thakur Village, Kandivali East, Siddharth Nagar, Borivali East, Mumbai, Maharashtra 400101, India",
    //                 "locality": "Mumbai"
    //             },
    //             "typeOrdr": "F2F_OFFLINE",
    //             "require": false,
    //             "email": "",
    //             "addressPickT": "shop",
    //             "typeShop": "Both",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "name": "Aditya",
    //             "typeCat": "food_and_beverages",
    //             "status": 0,
    //             "phone": "+918879751140",
    //             "addressDrop": null,
    //             "addressDropT": null
    //         }
    //     },
    //     {
    //         "amParcelCity": false,
    //         "amCost": 142.25,
    //         "ordrTYPE": "RefrCASH+ONLINE",
    //         "code": null,
    //         "to": "FtjikezBSjcQ1HKTDLct3gWSyKY2",
    //         "amSale": 345,
    //         "amTaxTDS": 0,
    //         "amSave": 220,
    //         "amRefr": 0,
    //         "storeName": "Chenggong",
    //         "journey": "DIRECT",
    //         "amGateway": 3.3571,
    //         "status": 10,
    //         "amParcel": 0,
    //         "logistics": {
    //             "typeSuCat": "sc-food_and_beverages-restaurants",
    //             "PnD_parcelNotFree": false,
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "PnD_freeStart": 0,
    //             "typeCat": "food_and_beverages",
    //             "typeShop": "Both",
    //             "addressPickT": "shop",
    //             "status": 20,
    //             "addressDrop": {
    //                 "type": "home",
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400049,
    //                 "address": "31, Chiranjeev building, Gulmohar cross road 4, JVPD Scheme, Mumbai 400049"
    //             },
    //             "PnD_cityCharge": 0,
    //             "email": "",
    //             "addressPick": {
    //                 "area": "Narayan niwas bil",
    //                 "nation": "IND",
    //                 "line2": "",
    //                 "id": "IND_MH_1655389503118",
    //                 "city": "Mumbai Suburban",
    //                 "line1": "Shop no.5",
    //                 "locality": "Mumbai",
    //                 "lat": 19.103741,
    //                 "state": "MH",
    //                 "region": "Maharashtra",
    //                 "zip": "400057",
    //                 "lon": 72.850771
    //             },
    //             "addressDropT": "home",
    //             "phone": "8879751140",
    //             "require": false,
    //             "name": "Aditya",
    //             "PnD_nationCharge": 0
    //         },
    //         "amTax": 17.25,
    //         "amTaxTCS": 3.45,
    //         "invoice": {
    //             "amtRefrCash": 220,
    //             "COD": false,
    //             "useRefrCash": true
    //         },
    //         "camp": {
    //             "by": "FtjikezBSjcQ1HKTDLct3gWSyKY2",
    //             "dateS": {
    //                 "seconds": 1664130600,
    //                 "nanoseconds": 0
    //             },
    //             "paid": false,
    //             "expiry": false,
    //             "type": "flat",
    //             "ban": false,
    //             "id": "qFQfX11V2jHkMzynVVBO",
    //             "sid": "qpb270TwRSNrMVWeMFzF",
    //             "tX": "t1",
    //             "sin": {
    //                 "seconds": 1664208463,
    //                 "nanoseconds": 576000000
    //             },
    //             "stage": 0,
    //             "upd": {
    //                 "seconds": 1664208463,
    //                 "nanoseconds": 576000000
    //             },
    //             "cbNew": 40,
    //             "countP": 0,
    //             "dateE": {
    //                 "seconds": 1667932200,
    //                 "nanoseconds": 0
    //             },
    //             "max": 0,
    //             "countS": 0,
    //             "countM": 0,
    //             "min": 300,
    //             "paused": false,
    //             "name": "Campaign-1",
    //             "customPay": 0,
    //             "stoped": false,
    //             "customAct": false,
    //             "storeTyp": "Both",
    //             "cbExi": 10,
    //             "cbDir": 20
    //         },
    //         "cart": [
    //             {
    //                 "sid": "qpb270TwRSNrMVWeMFzF",
    //                 "id": "VqbuPioC1Wbftk7G61X4",
    //                 "price": 145,
    //                 "upd": {
    //                     "seconds": 1664527329,
    //                     "nanoseconds": 356000000
    //                 },
    //                 "variants": [],
    //                 "by": "FtjikezBSjcQ1HKTDLct3gWSyKY2",
    //                 "code": "Σ",
    //                 "warranty": true,
    //                 "Q": 1,
    //                 "vX": [],
    //                 "banners": [],
    //                 "quota": 0,
    //                 "cost": 145,
    //                 "reqBurn": false,
    //                 "burn": false,
    //                 "sin": {
    //                     "seconds": 1664527329,
    //                     "nanoseconds": 356000000
    //                 },
    //                 "description": "Σ",
    //                 "sold": 0,
    //                 "content": false,
    //                 "category": "Rice/Noodles-Veg",
    //                 "title": "Veg Fried Rice | Noodles"
    //             },
    //             {
    //                 "burn": false,
    //                 "vX": [],
    //                 "upd": {
    //                     "seconds": 1664527330,
    //                     "nanoseconds": 592000000
    //                 },
    //                 "sid": "qpb270TwRSNrMVWeMFzF",
    //                 "cost": 200,
    //                 "content": false,
    //                 "id": "bsdtpe4peqgg7VXpHDUr",
    //                 "sin": {
    //                     "seconds": 1664527330,
    //                     "nanoseconds": 592000000
    //                 },
    //                 "warranty": true,
    //                 "price": 200,
    //                 "Q": 1,
    //                 "variants": [],
    //                 "by": "FtjikezBSjcQ1HKTDLct3gWSyKY2",
    //                 "reqBurn": false,
    //                 "category": "Rice/Noodles-Non veg",
    //                 "banners": [],
    //                 "description": "Σ",
    //                 "title": "Chicken Schezwan Rice | Noodles",
    //                 "quota": 0,
    //                 "sold": 0,
    //                 "code": "Σ"
    //             }
    //         ],
    //         "gwSIGN": "0f35c9c00458a3bcf69179f70d16b30df0111b8c73b6b421a70f1aec8f189735",
    //         "gwID": "pay_KPEgQHimMhzPvf",
    //         "sid": "qpb270TwRSNrMVWeMFzF",
    //         "refr": null,
    //         "userName": "Aditya",
    //         "gwORDR": "order_KPEeboqYe4C0LQ",
    //         "amBurst": 345,
    //         "id": "BJTUhPcoODlXQpl2eXMI",
    //         "sin": {
    //             "seconds": 1664786240,
    //             "nanoseconds": 130000000
    //         },
    //         "amTotal": 362.25,
    //         "type": [
    //             "RefrCASH+ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "FtjikezBSjcQ1HKTDLct3gWSyKY2",
    //             "qpb270TwRSNrMVWeMFzF",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ],
    //         "done": {
    //             "seconds": 1664798582,
    //             "nanoseconds": 990000000
    //         },
    //         "upd": {
    //             "seconds": 1664786240,
    //             "nanoseconds": 130000000
    //         },
    //         "com": {
    //             "seconds": 1664797148,
    //             "nanoseconds": 115000000
    //         },
    //         "earn": 20,
    //         "gwInfo": {
    //             "invoice_id": null,
    //             "acquirer_data": {
    //                 "rrn": "227676619014"
    //             },
    //             "status": "captured",
    //             "fee": 337,
    //             "wallet": null,
    //             "international": false,
    //             "order_id": "order_KPEeboqYe4C0LQ",
    //             "captured": true,
    //             "tax": 52,
    //             "entity": "payment",
    //             "description": "payment to Chenggong",
    //             "amount_refunded": 0,
    //             "vpa": "padmaneaditya@okaxis",
    //             "bank": null,
    //             "amount": 14225,
    //             "method": "upi",
    //             "card_id": null,
    //             "error_step": null,
    //             "currency": "INR",
    //             "error_code": null,
    //             "contact": "+918879751140",
    //             "notes": {
    //                 "description": "descriptionX"
    //             },
    //             "id": "pay_KPEgQHimMhzPvf",
    //             "created_at": 1664786346,
    //             "error_source": null,
    //             "email": "adityakirtane27@gmail.com",
    //             "refund_status": null,
    //             "error_reason": null,
    //             "error_description": null
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
    //     },
    //     {
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amParcel": 0,
    //         "sin": {
    //             "seconds": 1664788623,
    //             "nanoseconds": 73000000
    //         },
    //         "earn": 40,
    //         "amTaxTDS": 0,
    //         "amTaxTCS": 0,
    //         "com": {
    //             "seconds": 1664788640,
    //             "nanoseconds": 526000000
    //         },
    //         "upd": {
    //             "seconds": 1664788623,
    //             "nanoseconds": 73000000
    //         },
    //         "logistics": {
    //             "addressDrop": null,
    //             "status": 0,
    //             "require": false,
    //             "addressPick": null
    //         },
    //         "amBurst": 0,
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "invoice": {
    //             "useRefrCash": false,
    //             "amtRefrCash": 0,
    //             "COD": false
    //         },
    //         "amCost": 0,
    //         "amTax": 0,
    //         "amTotal": 2000,
    //         "amParcelCity": false,
    //         "journey": "POS",
    //         "amSale": 0,
    //         "status": 10,
    //         "refr": null,
    //         "code": "A000Ky",
    //         "id": "hv8raqn4fypRnqpwSPKr",
    //         "amSave": 0,
    //         "storeName": "Fit Food",
    //         "camp": {
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "paid": false,
    //             "paused": false,
    //             "stoped": false,
    //             "countS": 0,
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "countM": 0,
    //             "ban": false,
    //             "cbNew": 80,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "expiry": false,
    //             "customPay": 0,
    //             "cbDir": 40,
    //             "cbExi": 30,
    //             "tX": "t1",
    //             "countP": 0,
    //             "name": "Campaign-39",
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "min": 1200,
    //             "customAct": false,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "max": 0,
    //             "type": "flat",
    //             "storeTyp": "Both",
    //             "stage": 0
    //         },
    //         "amRefr": 0,
    //         "userName": "Aditya",
    //         "cart": [],
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky",
    //             "addORDER"
    //         ],
    //         "amGateway": 0,
    //         "ordrTYPE": "CASH"
    //     },
    //     {
    //         "userName": "Aditya",
    //         "amRefr": 0,
    //         "amParcelCity": false,
    //         "ordrTYPE": "CASH",
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "esscE4Ioj0eKSrdbGbwh7wW6gLI3",
    //             "SSyGERxsvi0c6a2uQWAh",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Kc"
    //         ],
    //         "sid": "SSyGERxsvi0c6a2uQWAh",
    //         "cart": [],
    //         "amGateway": 0,
    //         "code": "A000Kc",
    //         "invoice": {
    //             "useRefrCash": false,
    //             "COD": false,
    //             "amtRefrCash": 0
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amTaxTDS": 0,
    //         "com": {
    //             "seconds": 1664630348,
    //             "nanoseconds": 899000000
    //         },
    //         "logistics": {
    //             "status": 0,
    //             "require": false,
    //             "addressPick": null,
    //             "addressDrop": null
    //         },
    //         "amSave": 0,
    //         "amBurst": 0,
    //         "to": "esscE4Ioj0eKSrdbGbwh7wW6gLI3",
    //         "amCost": 0,
    //         "camp": null,
    //         "amTaxTCS": 0,
    //         "earn": 0,
    //         "refr": null,
    //         "storeName": "Pavbhaji Bistro",
    //         "status": -10,
    //         "amSale": 0,
    //         "amTotal": 0,
    //         "sin": {
    //             "seconds": 1664630348,
    //             "nanoseconds": 899000000
    //         },
    //         "journey": "POS",
    //         "upd": {
    //             "seconds": 1664630351,
    //             "nanoseconds": 341000000
    //         },
    //         "amParcel": 0,
    //         "amTax": 0,
    //         "id": "8LOrhiSXP3cUbJJ9zKWa"
    //     },
    //     {
    //         "refr": null,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky"
    //         ],
    //         "ordrTYPE": "CASH",
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "earn": 0,
    //         "code": "A000Ky",
    //         "journey": "POS",
    //         "cart": [],
    //         "sin": {
    //             "seconds": 1664628116,
    //             "nanoseconds": 671000000
    //         },
    //         "amGateway": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "storeName": "Fit Food",
    //         "com": {
    //             "seconds": 1664628116,
    //             "nanoseconds": 671000000
    //         },
    //         "amTax": 0,
    //         "amTaxTCS": 0,
    //         "status": -10,
    //         "upd": {
    //             "seconds": 1664628130,
    //             "nanoseconds": 869000000
    //         },
    //         "amRefr": 0,
    //         "logistics": {
    //             "addressDrop": null,
    //             "addressPick": null,
    //             "status": 0,
    //             "require": false
    //         },
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "useRefrCash": false,
    //             "COD": false
    //         },
    //         "amSale": 0,
    //         "amTotal": 0,
    //         "amTaxTDS": 0,
    //         "amParcelCity": false,
    //         "camp": null,
    //         "amParcel": 0,
    //         "amBurst": 0,
    //         "amCost": 0,
    //         "userName": "Aditya",
    //         "id": "rNjlL3L4RbLAMSC43QP6",
    //         "amSave": 0
    //     },
    //     {
    //         "to": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //         "id": "oRuZAWTdDW1ZDhmfynyw",
    //         "journey": "F2F",
    //         "amTotal": 145,
    //         "invoice": {
    //             "useRefrCash": false,
    //             "COD": false,
    //             "amtRefrCash": 0
    //         },
    //         "amRefr": 0,
    //         "sin": {
    //             "seconds": 1664519089,
    //             "nanoseconds": 926000000
    //         },
    //         "status": 10,
    //         "amSale": 240,
    //         "amTaxTDS": 0,
    //         "amParcel": 40,
    //         "done": {
    //             "seconds": 1664625544,
    //             "nanoseconds": 276000000
    //         },
    //         "amParcelCity": false,
    //         "storeName": "Coco Cafe",
    //         "refr": {
    //             "uid": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //             "earn": 50,
    //             "name": "Shraddha "
    //         },
    //         "amGateway": 3.4219999999999997,
    //         "gwInfo": {
    //             "bank": null,
    //             "error_source": null,
    //             "description": "payment to Coco Cafe",
    //             "tax": 52,
    //             "currency": "INR",
    //             "error_reason": null,
    //             "card_id": null,
    //             "created_at": 1664519118,
    //             "error_code": null,
    //             "method": "upi",
    //             "order_id": "order_KO0nGQEw6JtnRp",
    //             "captured": true,
    //             "acquirer_data": {
    //                 "rrn": "227314897402"
    //             },
    //             "entity": "payment",
    //             "id": "pay_KO0niysqQAE40V",
    //             "wallet": null,
    //             "invoice_id": null,
    //             "email": "adityakirtane27@gmail.com",
    //             "error_description": null,
    //             "amount_refunded": 0,
    //             "error_step": null,
    //             "refund_status": null,
    //             "vpa": "adityakirtane27@okaxis",
    //             "contact": "+918879751140",
    //             "status": "captured",
    //             "fee": 342,
    //             "notes": {
    //                 "description": "descriptionX"
    //             },
    //             "amount": 14500,
    //             "international": false
    //         },
    //         "cart": [
    //             {
    //                 "warranty": false,
    //                 "sold": 0,
    //                 "content": true,
    //                 "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //                 "price": 100,
    //                 "sid": "GQpgth7uBClObv3GWhgE",
    //                 "quota": 0,
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FrlMuVKSee3lUzxRf7dMA1660755683089?alt=media&token=bf0d3233-aa96-47e2-b6c9-49ce523e73af"
    //                 ],
    //                 "upd": {
    //                     "seconds": 1660755684,
    //                     "nanoseconds": 487000000
    //                 },
    //                 "cost": 50,
    //                 "category": "Food and beverages",
    //                 "code": "1234",
    //                 "Q": 2,
    //                 "vX": [],
    //                 "reqBurn": false,
    //                 "sin": {
    //                     "seconds": 1660755684,
    //                     "nanoseconds": 487000000
    //                 },
    //                 "variants": [],
    //                 "title": "Pancake",
    //                 "burn": false,
    //                 "id": "rlMuVKSee3lUzxRf7dMA",
    //                 "description": "Chocolate and honey"
    //             }
    //         ],
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "earn": 100,
    //         "code": "A00017",
    //         "ordrTYPE": "ONLINE",
    //         "amTaxTCS": 1.4000000000000001,
    //         "camp": {
    //             "customPay": 0,
    //             "storeTyp": "Both",
    //             "tX": "t1",
    //             "sin": {
    //                 "seconds": 1662398933,
    //                 "nanoseconds": 266000000
    //             },
    //             "paused": false,
    //             "countM": 0,
    //             "dateE": {
    //                 "seconds": 1664908200,
    //                 "nanoseconds": 0
    //             },
    //             "expiry": false,
    //             "min": 100,
    //             "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //             "countP": 0,
    //             "cbExi": 50,
    //             "name": "Campaign-3",
    //             "id": "QjzcNf3iXnvgHn7uqi4X",
    //             "upd": {
    //                 "seconds": 1662398933,
    //                 "nanoseconds": 266000000
    //             },
    //             "type": "flat",
    //             "cbDir": 50,
    //             "cbNew": 100,
    //             "customAct": false,
    //             "countS": 0,
    //             "stoped": false,
    //             "paid": false,
    //             "sid": "GQpgth7uBClObv3GWhgE",
    //             "max": 0,
    //             "ban": false,
    //             "stage": 0,
    //             "dateS": {
    //                 "seconds": 1662316200,
    //                 "nanoseconds": 0
    //             }
    //         },
    //         "logistics": {
    //             "addressDrop": {
    //                 "type": "work",
    //                 "landmark": "Gagandeep bus stop",
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "zip": 400056
    //             },
    //             "require": false,
    //             "typeShop": "Both",
    //             "typeCat": "food_and_beverages",
    //             "PnD_parcelNotFree": true,
    //             "PnD_cityCharge": 40,
    //             "addressDropT": "work",
    //             "addressPickT": "shop",
    //             "name": "Aditya",
    //             "addressPick": {
    //                 "line2": "",
    //                 "lat": 19.11322818798366,
    //                 "city": "Mumbai Suburban",
    //                 "locality": "Mumbai",
    //                 "area": "DHRUV, Main Gulmohar Road,, Juhu Scheme, Vile Parle (West),, opp. Gagandeep, Junaid Nagar, Yadav Nagar, Vile Parle West, Mumbai, Maharashtra 400049, India",
    //                 "state": "MH",
    //                 "id": "IND_MH_1660754948549",
    //                 "lon": 72.83698261885085,
    //                 "nation": "IND",
    //                 "line1": "101, leena residency, 7, Gulmohar Rd, Junaid Nagar, Yadav Nagar, Juhu, Mumbai, Maharashtra 400056",
    //                 "region": "Maharashtra",
    //                 "zip": "400049"
    //             },
    //             "typeSuCat": "sc-food_and_beverages-bakery",
    //             "phone": "8879751140",
    //             "email": "",
    //             "status": 20,
    //             "PnD_freeStart": 1000,
    //             "PnD_nationCharge": 40,
    //             "typeOrdr": "F2F_ONLINE"
    //         },
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "GdViTqOv51YIsNxHV58LpXpx99n1",
    //             "GQpgth7uBClObv3GWhgE",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "A00017"
    //         ],
    //         "gwSIGN": "adb20b03902f742d62d8de543668ebec7cdbc9c1a2960028329e44c742c00200",
    //         "amBurst": 100,
    //         "userName": "Aditya",
    //         "amTax": 5,
    //         "gwID": "pay_KO0niysqQAE40V",
    //         "gwORDR": "order_KO0nGQEw6JtnRp",
    //         "sid": "GQpgth7uBClObv3GWhgE",
    //         "com": {
    //             "seconds": 1664625513,
    //             "nanoseconds": 101000000
    //         },
    //         "amCost": 145,
    //         "amSave": 100,
    //         "upd": {
    //             "seconds": 1664519089,
    //             "nanoseconds": 926000000
    //         }
    //     },
    //     {
    //         "amGateway": 0,
    //         "ordrTYPE": "CASH",
    //         "com": {
    //             "seconds": 1664620206,
    //             "nanoseconds": 580000000
    //         },
    //         "status": -10,
    //         "sin": {
    //             "seconds": 1664620206,
    //             "nanoseconds": 580000000
    //         },
    //         "invoice": {
    //             "COD": false,
    //             "amtRefrCash": 0,
    //             "useRefrCash": false
    //         },
    //         "amSale": 0,
    //         "storeName": "Fit Food",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amSave": 0,
    //         "earn": 0,
    //         "camp": null,
    //         "logistics": {
    //             "status": 0,
    //             "require": false,
    //             "addressDrop": null,
    //             "addressPick": null
    //         },
    //         "upd": {
    //             "seconds": 1664620249,
    //             "nanoseconds": 165000000
    //         },
    //         "journey": "POS",
    //         "amCost": 0,
    //         "cart": [],
    //         "code": "A000Ky",
    //         "amTaxTCS": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky"
    //         ],
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "amTaxTDS": 0,
    //         "amParcelCity": false,
    //         "amBurst": 0,
    //         "userName": "Aditya",
    //         "amTotal": 0,
    //         "amParcel": 0,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "refr": null,
    //         "amRefr": 0,
    //         "id": "zOSKvZOW5HKyxBNdxB5y",
    //         "amTax": 0
    //     },
    //     {
    //         "logistics": {
    //             "require": false,
    //             "status": 0,
    //             "addressPick": null,
    //             "addressDrop": null
    //         },
    //         "amSave": 0,
    //         "journey": "POS",
    //         "status": 10,
    //         "amTax": 0,
    //         "refr": null,
    //         "amCost": 0,
    //         "ordrTYPE": "CASH",
    //         "amParcel": 0,
    //         "amGateway": 0,
    //         "amTotal": 2000,
    //         "sin": {
    //             "seconds": 1664619564,
    //             "nanoseconds": 606000000
    //         },
    //         "amTaxTDS": 0,
    //         "cart": [],
    //         "storeName": "Fit Food",
    //         "amBurst": 0,
    //         "upd": {
    //             "seconds": 1664619564,
    //             "nanoseconds": 606000000
    //         },
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "COD": false,
    //             "useRefrCash": false
    //         },
    //         "amSale": 0,
    //         "amParcelCity": false,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "code": "A000Ky",
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "id": "RRQQEYKIbpBgjWoDl73h",
    //         "amRefr": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amTaxTCS": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky",
    //             "addORDER"
    //         ],
    //         "com": {
    //             "seconds": 1664619599,
    //             "nanoseconds": 793000000
    //         },
    //         "camp": {
    //             "cbNew": 80,
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "customAct": false,
    //             "expiry": false,
    //             "name": "Campaign-39",
    //             "tX": "t1",
    //             "ban": false,
    //             "countP": 0,
    //             "countS": 0,
    //             "cbExi": 30,
    //             "type": "flat",
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "countM": 0,
    //             "storeTyp": "Both",
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "stoped": false,
    //             "customPay": 0,
    //             "min": 1200,
    //             "cbDir": 40,
    //             "stage": 0,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "paid": false,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "paused": false,
    //             "max": 0
    //         },
    //         "userName": "Aditya",
    //         "earn": 40
    //     },
    //     {
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amSale": 0,
    //         "status": -10,
    //         "amTax": 0,
    //         "userName": "Aditya",
    //         "ordrTYPE": "CASH",
    //         "amTaxTCS": 0,
    //         "amParcelCity": false,
    //         "id": "vE4uLNjJbKb3G8QPbg6c",
    //         "com": {
    //             "seconds": 1664619426,
    //             "nanoseconds": 591000000
    //         },
    //         "refr": null,
    //         "earn": 40,
    //         "amTotal": 2000,
    //         "sin": {
    //             "seconds": 1664619407,
    //             "nanoseconds": 855000000
    //         },
    //         "amSave": 0,
    //         "amCost": 0,
    //         "journey": "POS",
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky",
    //             "addORDER"
    //         ],
    //         "upd": {
    //             "seconds": 1664619486,
    //             "nanoseconds": 989000000
    //         },
    //         "amParcel": 0,
    //         "storeName": "Fit Food",
    //         "code": "A000Ky",
    //         "amRefr": 0,
    //         "amTaxTDS": 0,
    //         "amBurst": 0,
    //         "cart": [],
    //         "logistics": {
    //             "addressPick": null,
    //             "require": false,
    //             "addressDrop": null,
    //             "status": 0
    //         },
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "useRefrCash": false,
    //             "COD": false
    //         },
    //         "amGateway": 0,
    //         "camp": {
    //             "tX": "t1",
    //             "cbDir": 40,
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "name": "Campaign-39",
    //             "customPay": 0,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "max": 0,
    //             "countP": 0,
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "expiry": false,
    //             "type": "flat",
    //             "paid": false,
    //             "stage": 0,
    //             "countM": 0,
    //             "stoped": false,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "countS": 0,
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "cbExi": 30,
    //             "storeTyp": "Both",
    //             "customAct": false,
    //             "cbNew": 80,
    //             "paused": false,
    //             "ban": false,
    //             "min": 1200,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
    //         }
    //     },
    //     {
    //         "camp": {
    //             "type": "flat",
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "max": 0,
    //             "cbDir": 40,
    //             "stage": 0,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "expiry": false,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "name": "Campaign-39",
    //             "tX": "t1",
    //             "cbExi": 30,
    //             "id": "IzSNW9mwHpHHyZ6C9cAD",
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "stoped": false,
    //             "storeTyp": "Both",
    //             "customAct": false,
    //             "countM": 0,
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "customPay": 0,
    //             "paused": false,
    //             "ban": false,
    //             "countS": 0,
    //             "countP": 0,
    //             "paid": false,
    //             "min": 1200,
    //             "cbNew": 80
    //         },
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "useRefrCash": false,
    //             "COD": false
    //         },
    //         "amBurst": 0,
    //         "earn": 40,
    //         "journey": "POS",
    //         "com": {
    //             "seconds": 1664619177,
    //             "nanoseconds": 734000000
    //         },
    //         "amTax": 0,
    //         "amParcel": 0,
    //         "amTaxTCS": 0,
    //         "amSale": 0,
    //         "amParcelCity": false,
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "storeName": "Fit Food",
    //         "amTaxTDS": 0,
    //         "code": "A000Ky",
    //         "cart": [],
    //         "ordrTYPE": "CASH",
    //         "logistics": {
    //             "addressDrop": null,
    //             "require": false,
    //             "status": 0,
    //             "addressPick": null
    //         },
    //         "userName": "Aditya",
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky",
    //             "addORDER"
    //         ],
    //         "amCost": 0,
    //         "sin": {
    //             "seconds": 1664619149,
    //             "nanoseconds": 795000000
    //         },
    //         "amGateway": 0,
    //         "id": "Q1xGHc8OwxuX0E9tByHf",
    //         "refr": null,
    //         "upd": {
    //             "seconds": 1664619353,
    //             "nanoseconds": 641000000
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amRefr": 0,
    //         "amTotal": 2000,
    //         "status": -10,
    //         "amSave": 0
    //     },
    //     {
    //         "id": "3nxTJTTuwMq10yJBlD01",
    //         "code": "A000CR",
    //         "com": {
    //             "seconds": 1664615731,
    //             "nanoseconds": 833000000
    //         },
    //         "camp": {
    //             "cbExi": 50,
    //             "cbNew": 100,
    //             "stage": 0,
    //             "id": "78SEsrN2FWWM1NCSzRfk",
    //             "paused": false,
    //             "stoped": false,
    //             "customAct": false,
    //             "min": 600,
    //             "storeTyp": "Both",
    //             "countS": 0,
    //             "countP": 0,
    //             "upd": {
    //                 "seconds": 1662190042,
    //                 "nanoseconds": 807000000
    //             },
    //             "max": 0,
    //             "paid": false,
    //             "dateS": {
    //                 "seconds": 1662921000,
    //                 "nanoseconds": 0
    //             },
    //             "expiry": false,
    //             "countM": 0,
    //             "ban": false,
    //             "cbDir": 20,
    //             "type": "flat",
    //             "dateE": {
    //                 "seconds": 1666204200,
    //                 "nanoseconds": 0
    //             },
    //             "tX": "t1",
    //             "name": "Flash Deal",
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "sin": {
    //                 "seconds": 1662190042,
    //                 "nanoseconds": 807000000
    //             },
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "customPay": 0
    //         },
    //         "amTotal": 1.05,
    //         "gwORDR": "order_KOQJtFKMg9I6Br",
    //         "amTax": 0.05,
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "useRefrCash": false,
    //             "COD": false
    //         },
    //         "amTaxTDS": 0,
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "A000CR"
    //         ],
    //         "storeName": "Fit Food",
    //         "cart": [
    //             {
    //                 "burn": false,
    //                 "cost": 1,
    //                 "category": "chocolate",
    //                 "variants": [],
    //                 "banners": [],
    //                 "sin": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "upd": {
    //                     "seconds": 1664608438,
    //                     "nanoseconds": 150000000
    //                 },
    //                 "Q": 1,
    //                 "quota": 0,
    //                 "id": "WdH3xlYAQlgwBkha2EsA",
    //                 "sid": "8B9ozj7aTPvywkIvVWiK",
    //                 "price": 5,
    //                 "title": "JimJam",
    //                 "reqBurn": false,
    //                 "description": "Chocolate",
    //                 "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //                 "sold": 0,
    //                 "content": true,
    //                 "warranty": true,
    //                 "code": "123123123",
    //                 "vX": []
    //             }
    //         ],
    //         "amTaxTCS": 0.01,
    //         "sin": {
    //             "seconds": 1664608983,
    //             "nanoseconds": 310000000
    //         },
    //         "journey": "F2F",
    //         "ordrTYPE": "ONLINE",
    //         "amParcel": 0,
    //         "refr": {
    //             "earn": 0,
    //             "uid": "84tYnw9SH8dqJC7svx93NSxUz8f1",
    //             "name": "Aditya"
    //         },
    //         "amSale": 5,
    //         "gwID": "pay_KOQKHXnG2PXaXi",
    //         "amRefr": 0,
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amCost": 1.05,
    //         "logistics": {
    //             "addressDrop": {
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "type": "work",
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400056
    //             },
    //             "status": 20,
    //             "addressPickT": "shop",
    //             "addressDropT": "work",
    //             "name": "Aditya",
    //             "typeOrdr": "F2F_ONLINE",
    //             "PnD_parcelNotFree": false,
    //             "PnD_cityCharge": 0,
    //             "addressPick": {
    //                 "region": "Maharashtra",
    //                 "area": "Dent Heal",
    //                 "city": "Mumbai Suburban",
    //                 "lon": 72.83105909999999,
    //                 "state": "MH",
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "line2": "",
    //                 "zip": "400050",
    //                 "locality": "Mumbai",
    //                 "lat": 19.0662066,
    //                 "id": "IND_MH_1648672299398",
    //                 "nation": "IND"
    //             },
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "require": false,
    //             "phone": "8879751140",
    //             "PnD_nationCharge": 0,
    //             "email": "",
    //             "typeShop": "Both",
    //             "PnD_freeStart": 0,
    //             "typeCat": "food_and_beverages"
    //         },
    //         "gwSIGN": "0256ed028ce0249b480af3a2982b4aeae9760269773deebc84ee0526172bb63c",
    //         "userName": "Aditya",
    //         "gwInfo": {
    //             "created_at": 1664609008,
    //             "wallet": null,
    //             "error_description": null,
    //             "captured": true,
    //             "card_id": null,
    //             "description": "payment to Fit Food",
    //             "refund_status": null,
    //             "error_code": null,
    //             "tax": 0,
    //             "error_source": null,
    //             "id": "pay_KOQKHXnG2PXaXi",
    //             "status": "captured",
    //             "international": false,
    //             "currency": "INR",
    //             "invoice_id": null,
    //             "amount_refunded": 0,
    //             "method": "upi",
    //             "email": "adityakirtane27@gmail.com",
    //             "bank": null,
    //             "amount": 105,
    //             "contact": "+918879751140",
    //             "error_step": null,
    //             "order_id": "order_KOQJtFKMg9I6Br",
    //             "entity": "payment",
    //             "notes": {
    //                 "description": "descriptionX"
    //             },
    //             "error_reason": null,
    //             "vpa": "adityakirtane27@okaxis",
    //             "fee": 3,
    //             "acquirer_data": {
    //                 "rrn": "227441426280"
    //             }
    //         },
    //         "status": 10,
    //         "amSave": 4,
    //         "amGateway": 0.02478,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amParcelCity": false,
    //         "amBurst": 1,
    //         "earn": 0,
    //         "done": {
    //             "seconds": 1664625588,
    //             "nanoseconds": 676000000
    //         },
    //         "upd": {
    //             "seconds": 1664608983,
    //             "nanoseconds": 310000000
    //         }
    //     },
    //     {
    //         "amTaxTDS": 0,
    //         "camp": null,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amSave": 0,
    //         "code": "A000Ky",
    //         "earn": 0,
    //         "ordrTYPE": "CASH",
    //         "id": "UvJGNLMzqmykhzO9SBcN",
    //         "amParcelCity": false,
    //         "journey": "POS",
    //         "invoice": {
    //             "COD": false,
    //             "useRefrCash": false,
    //             "amtRefrCash": 0
    //         },
    //         "sin": {
    //             "seconds": 1664551260,
    //             "nanoseconds": 567000000
    //         },
    //         "amCost": 0,
    //         "amTax": 0,
    //         "amTaxTCS": 0,
    //         "refr": null,
    //         "com": {
    //             "seconds": 1664551260,
    //             "nanoseconds": 567000000
    //         },
    //         "amRefr": 0,
    //         "amParcel": 0,
    //         "amBurst": 0,
    //         "logistics": {
    //             "addressPick": null,
    //             "addressDrop": null,
    //             "status": 0,
    //             "require": false
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "userName": "Aditya",
    //         "amSale": 0,
    //         "amGateway": 0,
    //         "storeName": "Fit Food",
    //         "status": -10,
    //         "cart": [],
    //         "amTotal": 0,
    //         "upd": {
    //             "seconds": 1664551269,
    //             "nanoseconds": 36000000
    //         },
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky"
    //         ]
    //     },
    //     {
    //         "amCost": 0,
    //         "amTaxTDS": 0,
    //         "logistics": {
    //             "status": 0,
    //             "addressPick": null,
    //             "addressDrop": null,
    //             "require": false
    //         },
    //         "camp": null,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "code": "A000Ky",
    //         "sin": {
    //             "seconds": 1664551173,
    //             "nanoseconds": 517000000
    //         },
    //         "ordrTYPE": "CASH",
    //         "amGateway": 0,
    //         "userName": "Aditya",
    //         "com": {
    //             "seconds": 1664551173,
    //             "nanoseconds": 517000000
    //         },
    //         "upd": {
    //             "seconds": 1664551196,
    //             "nanoseconds": 249000000
    //         },
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000Ky"
    //         ],
    //         "amTax": 0,
    //         "amRefr": 0,
    //         "journey": "POS",
    //         "earn": 0,
    //         "cart": [],
    //         "status": -10,
    //         "id": "kG7LoMNxcsBTj607a3YC",
    //         "amSave": 0,
    //         "amParcelCity": false,
    //         "amSale": 0,
    //         "amBurst": 0,
    //         "amTaxTCS": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amParcel": 0,
    //         "refr": null,
    //         "amTotal": 0,
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "useRefrCash": false,
    //             "COD": false
    //         },
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "storeName": "Fit Food"
    //     },
    //     {
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "refr": {
    //             "name": "Rohan",
    //             "uid": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
    //             "earn": 0
    //         },
    //         "camp": {
    //             "cbNew": 80,
    //             "countS": 0,
    //             "expiry": false,
    //             "min": 1200,
    //             "customPay": 0,
    //             "max": 0,
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "storeTyp": "Both",
    //             "stoped": false,
    //             "cbDir": 40,
    //             "type": "flat",
    //             "stage": 0,
    //             "name": "Campaign-39",
    //             "sin": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "paused": false,
    //             "paid": false,
    //             "ban": false,
    //             "tX": "t1",
    //             "countP": 0,
    //             "cbExi": 30,
    //             "dateS": {
    //                 "seconds": 1663353000,
    //                 "nanoseconds": 0
    //             },
    //             "customAct": false,
    //             "upd": {
    //                 "seconds": 1663417144,
    //                 "nanoseconds": 438000000
    //             },
    //             "countM": 0,
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "dateE": {
    //                 "seconds": 1672425000,
    //                 "nanoseconds": 0
    //             },
    //             "id": "IzSNW9mwHpHHyZ6C9cAD"
    //         },
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "ordrTYPE": "CASH",
    //         "amSave": 0,
    //         "amTaxTCS": 0,
    //         "code": "A000Dm",
    //         "amTaxTDS": 0,
    //         "earn": 0,
    //         "journey": "F2F",
    //         "status": -10,
    //         "invoice": {
    //             "useRefrCash": false,
    //             "amtRefrCash": 0,
    //             "COD": false
    //         },
    //         "amBurst": 0,
    //         "amParcelCity": false,
    //         "sin": {
    //             "seconds": 1664520880,
    //             "nanoseconds": 701000000
    //         },
    //         "storeName": "Fit Food",
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "REDEEM",
    //             "A000Dm"
    //         ],
    //         "cart": [],
    //         "upd": {
    //             "seconds": 1664520909,
    //             "nanoseconds": 820000000
    //         },
    //         "logistics": {
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "addressPickT": "shop",
    //             "addressDrop": null,
    //             "phone": "+918879751140",
    //             "typeShop": "Both",
    //             "typeCat": "food_and_beverages",
    //             "typeOrdr": "F2F_OFFLINE",
    //             "status": 0,
    //             "require": false,
    //             "email": "",
    //             "addressDropT": null,
    //             "addressPick": {
    //                 "lat": 19.0662066,
    //                 "zip": "400050",
    //                 "nation": "IND",
    //                 "id": "IND_MH_1648672299398",
    //                 "region": "Maharashtra",
    //                 "locality": "Mumbai",
    //                 "line2": "",
    //                 "state": "MH",
    //                 "city": "Mumbai Suburban",
    //                 "lon": 72.83105909999999,
    //                 "area": "Dent Heal",
    //                 "line1": "Dipesadsadas sadasdas"
    //             },
    //             "name": "Aditya"
    //         },
    //         "id": "mr0RKKSRFJWhYBaUbC1I",
    //         "amTotal": 0,
    //         "amRefr": 0,
    //         "amGateway": 0,
    //         "amTax": 0,
    //         "amSale": 0,
    //         "amCost": 0,
    //         "userName": "Aditya",
    //         "com": {
    //             "seconds": 1664520880,
    //             "nanoseconds": 701000000
    //         },
    //         "amParcel": 0
    //     },
    //     {
    //         "amSale": 0,
    //         "storeName": "Fit Food",
    //         "userName": "Aditya",
    //         "cart": [],
    //         "amTaxTCS": 0,
    //         "amTotal": 0,
    //         "amRefr": 0,
    //         "code": "A000Dm",
    //         "amBurst": 0,
    //         "status": -10,
    //         "earn": 0,
    //         "upd": {
    //             "seconds": 1664520665,
    //             "nanoseconds": 393000000
    //         },
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "8B9ozj7aTPvywkIvVWiK",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "REDEEM",
    //             "A000Dm"
    //         ],
    //         "amCost": 0,
    //         "journey": "F2F",
    //         "com": {
    //             "seconds": 1664520584,
    //             "nanoseconds": 471000000
    //         },
    //         "id": "RVH6xncEfcrkgmqemkdl",
    //         "logistics": {
    //             "addressDropT": null,
    //             "status": 0,
    //             "require": false,
    //             "typeCat": "food_and_beverages",
    //             "typeShop": "Both",
    //             "phone": "+918879751140",
    //             "typeOrdr": "F2F_OFFLINE",
    //             "addressPick": {
    //                 "line2": "",
    //                 "locality": "Mumbai",
    //                 "city": "Mumbai Suburban",
    //                 "lat": 19.0662066,
    //                 "area": "Dent Heal",
    //                 "state": "MH",
    //                 "lon": 72.83105909999999,
    //                 "nation": "IND",
    //                 "region": "Maharashtra",
    //                 "zip": "400050",
    //                 "line1": "Dipesadsadas sadasdas",
    //                 "id": "IND_MH_1648672299398"
    //             },
    //             "email": "",
    //             "addressPickT": "shop",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "addressDrop": null,
    //             "name": "Aditya"
    //         },
    //         "ordrTYPE": "CASH",
    //         "sin": {
    //             "seconds": 1664520584,
    //             "nanoseconds": 471000000
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amParcelCity": false,
    //         "amTax": 0,
    //         "sid": "8B9ozj7aTPvywkIvVWiK",
    //         "amGateway": 0,
    //         "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //         "amSave": 0,
    //         "camp": {
    //             "cbExi": 50,
    //             "countM": 0,
    //             "dateE": {
    //                 "seconds": 1666204200,
    //                 "nanoseconds": 0
    //             },
    //             "max": 0,
    //             "customPay": 0,
    //             "sid": "8B9ozj7aTPvywkIvVWiK",
    //             "countP": 0,
    //             "name": "Flash Deal",
    //             "stage": 0,
    //             "expiry": false,
    //             "min": 600,
    //             "sin": {
    //                 "seconds": 1662190042,
    //                 "nanoseconds": 807000000
    //             },
    //             "upd": {
    //                 "seconds": 1662190042,
    //                 "nanoseconds": 807000000
    //             },
    //             "countS": 0,
    //             "stoped": false,
    //             "paused": false,
    //             "storeTyp": "Both",
    //             "type": "flat",
    //             "paid": false,
    //             "dateS": {
    //                 "seconds": 1662921000,
    //                 "nanoseconds": 0
    //             },
    //             "cbDir": 20,
    //             "cbNew": 100,
    //             "customAct": false,
    //             "tX": "t1",
    //             "id": "78SEsrN2FWWM1NCSzRfk",
    //             "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
    //             "ban": false
    //         },
    //         "amParcel": 0,
    //         "amTaxTDS": 0,
    //         "refr": {
    //             "earn": 0,
    //             "uid": "AhUWpPpy5AOG0bJlKgvwIAtTIP73",
    //             "name": "Rohan"
    //         },
    //         "invoice": {
    //             "COD": false,
    //             "useRefrCash": false,
    //             "amtRefrCash": 0
    //         }
    //     },
    //     {
    //         "camp": {
    //             "cbNew": 100,
    //             "paused": false,
    //             "name": "Campaign-3",
    //             "dateE": {
    //                 "seconds": 1664908200,
    //                 "nanoseconds": 0
    //             },
    //             "id": "QjzcNf3iXnvgHn7uqi4X",
    //             "upd": {
    //                 "seconds": 1662398933,
    //                 "nanoseconds": 266000000
    //             },
    //             "countP": 0,
    //             "countM": 0,
    //             "stoped": false,
    //             "tX": "t1",
    //             "ban": false,
    //             "paid": false,
    //             "sid": "GQpgth7uBClObv3GWhgE",
    //             "storeTyp": "Both",
    //             "countS": 0,
    //             "sin": {
    //                 "seconds": 1662398933,
    //                 "nanoseconds": 266000000
    //             },
    //             "stage": 0,
    //             "customAct": false,
    //             "customPay": 0,
    //             "min": 100,
    //             "type": "flat",
    //             "cbDir": 50,
    //             "expiry": false,
    //             "dateS": {
    //                 "seconds": 1662316200,
    //                 "nanoseconds": 0
    //             },
    //             "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //             "cbExi": 50,
    //             "max": 0
    //         },
    //         "sin": {
    //             "seconds": 1664519019,
    //             "nanoseconds": 75000000
    //         },
    //         "invoice": {
    //             "COD": false,
    //             "amtRefrCash": 0,
    //             "useRefrCash": false
    //         },
    //         "amTaxTDS": 0,
    //         "refr": {
    //             "uid": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //             "earn": 50,
    //             "name": "Shraddha "
    //         },
    //         "journey": "F2F",
    //         "earn": 100,
    //         "amParcel": 40,
    //         "amBurst": 100,
    //         "to": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //         "amParcelCity": false,
    //         "ordrTYPE": "ONLINE",
    //         "amTaxTCS": 1.4000000000000001,
    //         "amGateway": 3.4219999999999997,
    //         "amTax": 5,
    //         "status": 0,
    //         "amTotal": 145,
    //         "amSave": 100,
    //         "upd": {
    //             "seconds": 1664519019,
    //             "nanoseconds": 75000000
    //         },
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "GdViTqOv51YIsNxHV58LpXpx99n1",
    //             "GQpgth7uBClObv3GWhgE",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "A00017"
    //         ],
    //         "userName": "Aditya",
    //         "amCost": 145,
    //         "cart": [
    //             {
    //                 "variants": [],
    //                 "sold": 0,
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FrlMuVKSee3lUzxRf7dMA1660755683089?alt=media&token=bf0d3233-aa96-47e2-b6c9-49ce523e73af"
    //                 ],
    //                 "title": "Pancake",
    //                 "warranty": false,
    //                 "upd": {
    //                     "seconds": 1660755684,
    //                     "nanoseconds": 487000000
    //                 },
    //                 "description": "Chocolate and honey",
    //                 "vX": [],
    //                 "content": true,
    //                 "category": "Food and beverages",
    //                 "sin": {
    //                     "seconds": 1660755684,
    //                     "nanoseconds": 487000000
    //                 },
    //                 "id": "rlMuVKSee3lUzxRf7dMA",
    //                 "by": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //                 "cost": 50,
    //                 "reqBurn": false,
    //                 "quota": 0,
    //                 "sid": "GQpgth7uBClObv3GWhgE",
    //                 "code": "1234",
    //                 "price": 100,
    //                 "Q": 2,
    //                 "burn": false
    //             }
    //         ],
    //         "storeName": "Coco Cafe",
    //         "logistics": {
    //             "typeCat": "food_and_beverages",
    //             "typeOrdr": "F2F_ONLINE",
    //             "email": "",
    //             "addressPick": {
    //                 "city": "Mumbai Suburban",
    //                 "lat": 19.11322818798366,
    //                 "region": "Maharashtra",
    //                 "locality": "Mumbai",
    //                 "zip": "400049",
    //                 "nation": "IND",
    //                 "area": "DHRUV, Main Gulmohar Road,, Juhu Scheme, Vile Parle (West),, opp. Gagandeep, Junaid Nagar, Yadav Nagar, Vile Parle West, Mumbai, Maharashtra 400049, India",
    //                 "line2": "",
    //                 "lon": 72.83698261885085,
    //                 "id": "IND_MH_1660754948549",
    //                 "line1": "101, leena residency, 7, Gulmohar Rd, Junaid Nagar, Yadav Nagar, Juhu, Mumbai, Maharashtra 400056",
    //                 "state": "MH"
    //             },
    //             "phone": "8879751140",
    //             "require": false,
    //             "PnD_freeStart": 1000,
    //             "typeShop": "Both",
    //             "PnD_parcelNotFree": true,
    //             "PnD_cityCharge": 40,
    //             "addressDropT": "work",
    //             "typeSuCat": "sc-food_and_beverages-bakery",
    //             "addressPickT": "shop",
    //             "addressDrop": {
    //                 "type": "work",
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400056,
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
    //             },
    //             "name": "Aditya",
    //             "PnD_nationCharge": 40,
    //             "status": 0
    //         },
    //         "sid": "GQpgth7uBClObv3GWhgE",
    //         "id": "AX7Ow5SA1neRYa5Qrv4q",
    //         "code": "A00017",
    //         "amSale": 240,
    //         "amRefr": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "com": {
    //             "seconds": 1664519019,
    //             "nanoseconds": 75000000
    //         }
    //     },
    //     {
    //         "shipCreate": {
    //             "y4Provider": {
    //                 "user_insurance_manadatory": false,
    //                 "seller_address": [],
    //                 "company_auto_shipment_insurance_setting": false,
    //                 "is_allow_templatized_pricing": true,
    //                 "status": 200,
    //                 "is_latlong": 0,
    //                 "eligible_for_insurance": 0,
    //                 "covid_zones": {
    //                     "delivery_zone": null,
    //                     "pickup_zone": null
    //                 },
    //                 "dg_courier": 0,
    //                 "data": {
    //                     "recommended_courier_company_id": 54,
    //                     "is_recommendation_enabled": 1,
    //                     "recommended_by": {
    //                         "id": 6,
    //                         "title": "Recommendation By Shiprocket"
    //                     },
    //                     "shiprocket_recommended_courier_id": 154,
    //                     "available_courier_companies": [
    //                         {
    //                             "mode": 0,
    //                             "pickup_priority": "",
    //                             "etd_hours": 145,
    //                             "is_surface": true,
    //                             "local_region": 2,
    //                             "others": null,
    //                             "charge_weight": 0.5,
    //                             "seconds_left_for_pickup": 0,
    //                             "delivery_performance": 4.4,
    //                             "suppress_text": "",
    //                             "pod_available": "On Request",
    //                             "city": "MUMBAI",
    //                             "surface_max_weight": "12.00",
    //                             "etd": "Oct 06, 2022",
    //                             "rating": 4.4,
    //                             "blocked": 0,
    //                             "postcode": "400056",
    //                             "suppress_date": "",
    //                             "rto_performance": 4.1,
    //                             "other_charges": 0,
    //                             "tracking_performance": 4.2,
    //                             "rank": "",
    //                             "edd": "",
    //                             "freight_charge": 40.32,
    //                             "state": "MAHARASHTRA",
    //                             "min_weight": 0.5,
    //                             "call_before_delivery": "Available",
    //                             "qc_courier": 0,
    //                             "odablock": false,
    //                             "region": 3,
    //                             "courier_type": "0",
    //                             "base_weight": "",
    //                             "description": "",
    //                             "cod_charges": 0,
    //                             "base_courier_id": null,
    //                             "courier_company_id": 54,
    //                             "metro": 1,
    //                             "volumetric_max_weight": null,
    //                             "id": 215607857,
    //                             "realtime_tracking": "Real Time",
    //                             "is_hyperlocal": false,
    //                             "cutoff_time": "10:00",
    //                             "assured_amount": 0,
    //                             "weight_cases": 4.84,
    //                             "courier_name": "Ekart Logistics Surface",
    //                             "coverage_charges": 0,
    //                             "cod_multiplier": 0,
    //                             "pickup_performance": 4.3,
    //                             "cost": "",
    //                             "is_rto_address_available": true,
    //                             "entry_tax": 0,
    //                             "air_max_weight": "0.00",
    //                             "cod": 1,
    //                             "is_international": 0,
    //                             "rto_charges": 40.32,
    //                             "is_custom_rate": 0,
    //                             "estimated_delivery_days": "7",
    //                             "pickup_availability": 0,
    //                             "pickup_supress_hours": 0,
    //                             "suppression_dates": [],
    //                             "rate": 40.32,
    //                             "delivery_boy_contact": "Not Available"
    //                         },
    //                         {
    //                             "postcode": "400056",
    //                             "freight_charge": 48.42,
    //                             "weight_cases": 3.48,
    //                             "assured_amount": 0,
    //                             "courier_type": "0",
    //                             "cod_charges": 0,
    //                             "coverage_charges": 0,
    //                             "edd": "",
    //                             "pod_available": "Instant",
    //                             "cost": "",
    //                             "etd": "Oct 03, 2022",
    //                             "is_custom_rate": 0,
    //                             "rto_performance": 4.2,
    //                             "is_hyperlocal": false,
    //                             "volumetric_max_weight": null,
    //                             "seconds_left_for_pickup": 0,
    //                             "min_weight": 0.5,
    //                             "others": null,
    //                             "local_region": 2,
    //                             "etd_hours": 87,
    //                             "tracking_performance": 3.7,
    //                             "rto_charges": 48.42,
    //                             "rank": "",
    //                             "cod": 1,
    //                             "cutoff_time": "13:00",
    //                             "rate": 48.42,
    //                             "pickup_priority": "",
    //                             "state": "MAHARASHTRA",
    //                             "pickup_performance": 4.11,
    //                             "cod_multiplier": 0,
    //                             "suppress_date": "",
    //                             "odablock": false,
    //                             "rating": 3.8,
    //                             "delivery_performance": 3.41,
    //                             "base_weight": "",
    //                             "pickup_supress_hours": 0,
    //                             "region": 3,
    //                             "pickup_availability": 0,
    //                             "estimated_delivery_days": "4",
    //                             "suppression_dates": [],
    //                             "courier_name": "Delhivery Surface",
    //                             "entry_tax": 0,
    //                             "city": "Mumbai",
    //                             "id": 218773302,
    //                             "charge_weight": 0.5,
    //                             "is_surface": true,
    //                             "suppress_text": "",
    //                             "blocked": 0,
    //                             "surface_max_weight": "4.00",
    //                             "base_courier_id": null,
    //                             "courier_company_id": 43,
    //                             "realtime_tracking": "Real Time",
    //                             "call_before_delivery": "Available",
    //                             "metro": 1,
    //                             "air_max_weight": "0.00",
    //                             "delivery_boy_contact": "Not Available",
    //                             "other_charges": 0,
    //                             "is_rto_address_available": true,
    //                             "is_international": 0,
    //                             "qc_courier": 0,
    //                             "description": "",
    //                             "mode": 0
    //                         },
    //                         {
    //                             "rating": 3,
    //                             "local_region": 2,
    //                             "weight_cases": 2.72,
    //                             "delivery_performance": 4.24,
    //                             "etd_hours": 62,
    //                             "description": "",
    //                             "is_international": 0,
    //                             "other_charges": 0,
    //                             "is_surface": true,
    //                             "freight_charge": 64.29,
    //                             "is_custom_rate": 0,
    //                             "region": 3,
    //                             "coverage_charges": 0,
    //                             "cod": 1,
    //                             "suppress_date": "",
    //                             "surface_max_weight": "0.50",
    //                             "air_max_weight": "0.00",
    //                             "suppression_dates": [],
    //                             "suppress_text": "",
    //                             "mode": 0,
    //                             "tracking_performance": 2,
    //                             "delivery_boy_contact": "Available",
    //                             "qc_courier": 0,
    //                             "assured_amount": 0,
    //                             "is_rto_address_available": true,
    //                             "metro": 1,
    //                             "base_weight": "",
    //                             "volumetric_max_weight": null,
    //                             "etd": "Oct 03, 2022",
    //                             "pod_available": "Instant",
    //                             "base_courier_id": null,
    //                             "courier_name": "Xpressbees Surface",
    //                             "cod_multiplier": 0,
    //                             "rto_performance": 2,
    //                             "seconds_left_for_pickup": 0,
    //                             "pickup_priority": "",
    //                             "estimated_delivery_days": "3",
    //                             "pickup_performance": 3.83,
    //                             "id": 216282299,
    //                             "odablock": false,
    //                             "entry_tax": 0,
    //                             "others": null,
    //                             "city": "Mumbai",
    //                             "rto_charges": 64.29,
    //                             "rank": "",
    //                             "edd": "",
    //                             "cutoff_time": "13:00",
    //                             "courier_type": "0",
    //                             "is_hyperlocal": false,
    //                             "realtime_tracking": "Real Time",
    //                             "courier_company_id": 51,
    //                             "cod_charges": 0,
    //                             "postcode": "400056",
    //                             "call_before_delivery": "Available",
    //                             "cost": "",
    //                             "blocked": 0,
    //                             "charge_weight": 0.5,
    //                             "pickup_availability": 0,
    //                             "pickup_supress_hours": 0,
    //                             "min_weight": 0.5,
    //                             "rate": 64.29,
    //                             "state": "MAHARASHTRA"
    //                         },
    //                         {
    //                             "cutoff_time": "13:00",
    //                             "local_region": 2,
    //                             "coverage_charges": 0,
    //                             "is_custom_rate": 0,
    //                             "metro": 1,
    //                             "charge_weight": 0.5,
    //                             "estimated_delivery_days": "3",
    //                             "suppress_text": "",
    //                             "city": "Mumbai",
    //                             "edd": "",
    //                             "weight_cases": 4.64,
    //                             "pod_available": "On Request",
    //                             "qc_courier": 0,
    //                             "call_before_delivery": "Not Available",
    //                             "region": 3,
    //                             "seconds_left_for_pickup": 0,
    //                             "id": 218237985,
    //                             "is_hyperlocal": false,
    //                             "is_international": 0,
    //                             "suppression_dates": [],
    //                             "courier_company_id": 154,
    //                             "pickup_availability": 0,
    //                             "rto_performance": 3.46,
    //                             "base_weight": "",
    //                             "entry_tax": 0,
    //                             "pickup_supress_hours": 0,
    //                             "cost": "",
    //                             "tracking_performance": 3.33,
    //                             "surface_max_weight": "0.00",
    //                             "etd": "Oct 03, 2022",
    //                             "is_surface": false,
    //                             "rto_charges": 23.4,
    //                             "blocked": 0,
    //                             "volumetric_max_weight": 20,
    //                             "assured_amount": 0,
    //                             "etd_hours": 64,
    //                             "state": "MAHARASHTRA",
    //                             "realtime_tracking": "Real Time",
    //                             "freight_charge": 31.2,
    //                             "rate": 31.2,
    //                             "delivery_boy_contact": "Not Available",
    //                             "pickup_performance": 2,
    //                             "rank": "",
    //                             "postcode": "400056",
    //                             "air_max_weight": "20.00",
    //                             "cod": 1,
    //                             "other_charges": 0,
    //                             "pickup_priority": "",
    //                             "courier_name": "Kerry Indev Express",
    //                             "delivery_performance": 2,
    //                             "cod_multiplier": 0,
    //                             "description": "",
    //                             "base_courier_id": null,
    //                             "odablock": false,
    //                             "is_rto_address_available": true,
    //                             "cod_charges": 0,
    //                             "courier_type": "0",
    //                             "mode": 1,
    //                             "others": null,
    //                             "min_weight": 0.5,
    //                             "rating": 3.1,
    //                             "suppress_date": ""
    //                         },
    //                         {
    //                             "pickup_supress_hours": 0,
    //                             "pickup_availability": 0,
    //                             "seconds_left_for_pickup": 0,
    //                             "cod_multiplier": 0,
    //                             "entry_tax": 0,
    //                             "rto_charges": 48.42,
    //                             "region": 3,
    //                             "qc_courier": 0,
    //                             "rating": 3.2,
    //                             "assured_amount": 0,
    //                             "id": 218732750,
    //                             "courier_name": "Delhivery",
    //                             "odablock": false,
    //                             "blocked": 0,
    //                             "volumetric_max_weight": null,
    //                             "etd": "Oct 03, 2022",
    //                             "state": "MAHARASHTRA",
    //                             "local_region": 2,
    //                             "cod": 1,
    //                             "surface_max_weight": "0.00",
    //                             "estimated_delivery_days": "3",
    //                             "pod_available": "Instant",
    //                             "is_international": 0,
    //                             "cost": "",
    //                             "suppression_dates": [],
    //                             "is_custom_rate": 0,
    //                             "description": "",
    //                             "weight_cases": 2,
    //                             "is_rto_address_available": true,
    //                             "is_hyperlocal": false,
    //                             "etd_hours": 64,
    //                             "cutoff_time": "13:00",
    //                             "is_surface": false,
    //                             "rate": 48.42,
    //                             "metro": 1,
    //                             "tracking_performance": 4.9,
    //                             "postcode": "400056",
    //                             "base_courier_id": null,
    //                             "base_weight": "",
    //                             "air_max_weight": "25.00",
    //                             "suppress_text": "",
    //                             "rto_performance": 2.28,
    //                             "coverage_charges": 0,
    //                             "mode": 1,
    //                             "cod_charges": 0,
    //                             "suppress_date": "",
    //                             "min_weight": 0.5,
    //                             "city": "Mumbai",
    //                             "call_before_delivery": "Available",
    //                             "edd": "",
    //                             "courier_company_id": 10,
    //                             "charge_weight": 0.5,
    //                             "courier_type": "0",
    //                             "pickup_performance": 4.32,
    //                             "delivery_boy_contact": "Not Available",
    //                             "freight_charge": 48.42,
    //                             "delivery_performance": 2.41,
    //                             "rank": "",
    //                             "others": null,
    //                             "other_charges": 0,
    //                             "pickup_priority": "",
    //                             "realtime_tracking": "Real Time"
    //                         }
    //                     ],
    //                     "child_courier_id": null
    //                 },
    //                 "label_generate_type": 2,
    //                 "insurace_opted_at_order_creation": false,
    //                 "currency": "INR"
    //             },
    //             "zEstimate": 80.64,
    //             "y1Login": {
    //                 "first_name": "API",
    //                 "email": "info@refr.club",
    //                 "last_name": "USER",
    //                 "company_id": 2322204,
    //                 "id": 2918191,
    //                 "created_at": "2022-08-18 12:16:06",
    //                 "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI5MTgxOTEsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjY0NDQzNTk3LCJleHAiOjE2NjUzMDc1OTcsIm5iZiI6MTY2NDQ0MzU5NywianRpIjoiWkRZMnVVWkM3bkNpUzVaciJ9.JOr-VFufUZa4cK5Sz9Q4vpPlymJm9SHMsmDAK1OEwIo"
    //             },
    //             "y6Assign": {
    //                 "response": {
    //                     "data": {
    //                         "cod": 0,
    //                         "rto_routing_code": "",
    //                         "transporter_id": "",
    //                         "courier_name": "Ekart Logistics Surface",
    //                         "shipment_id": 261508222,
    //                         "shipped_by": {
    //                             "shipper_address_1": "Shop no  12, Mayfair appts, sundervan complex, andheri west",
    //                             "rto_email": "info@refr.club",
    //                             "shipper_first_mile_activated": 0,
    //                             "shipper_country": "India",
    //                             "rto_state": "Maharashtra",
    //                             "shipper_company_name": "Kusum Rolls ",
    //                             "lat": null,
    //                             "rto_address_1": "Shop no  12, Mayfair appts, sundervan complex, andheri west",
    //                             "rto_company_name": "Kusum Rolls ",
    //                             "shipper_email": "info@refr.club",
    //                             "shipper_phone": "9082952135",
    //                             "rto_country": "India",
    //                             "shipper_state": "Maharashtra",
    //                             "shipper_city": "Mumbai Suburban",
    //                             "rto_phone": "9082952135",
    //                             "long": null,
    //                             "rto_postcode": "400053",
    //                             "shipper_postcode": "400053",
    //                             "rto_address_2": "Kusum Rolls sun",
    //                             "shipper_address_2": "Kusum Rolls sun",
    //                             "rto_city": "Mumbai Suburban"
    //                         },
    //                         "invoice_no": "Retail00019",
    //                         "courier_company_id": 54,
    //                         "child_courier_name": null,
    //                         "routing_code": "",
    //                         "awb_code": "SRTP1216425139",
    //                         "company_id": 2322204,
    //                         "awb_code_status": 1,
    //                         "assigned_date_time": {
    //                             "date": "2022-09-29 14:56:43.573993",
    //                             "timezone_type": 3,
    //                             "timezone": "Asia/Kolkata"
    //                         },
    //                         "transporter_name": "",
    //                         "order_id": 262121642,
    //                         "applied_weight": 0.5
    //                     }
    //                 },
    //                 "awb_assign_status": 1
    //             },
    //             "y5Chosen": {
    //                 "delivery_boy_contact": "Not Available",
    //                 "etd": "Oct 06, 2022",
    //                 "local_region": 2,
    //                 "pod_available": "On Request",
    //                 "cod_charges": 0,
    //                 "mode": 0,
    //                 "cod": 1,
    //                 "charge_weight": 0.5,
    //                 "estimated_delivery_days": "7",
    //                 "freight_charge": 40.32,
    //                 "is_custom_rate": 0,
    //                 "is_international": 0,
    //                 "delivery_performance": 4.4,
    //                 "entry_tax": 0,
    //                 "pickup_availability": 0,
    //                 "is_surface": true,
    //                 "city": "MUMBAI",
    //                 "cutoff_time": "10:00",
    //                 "coverage_charges": 0,
    //                 "base_courier_id": null,
    //                 "volumetric_max_weight": null,
    //                 "pickup_performance": 4.3,
    //                 "courier_company_id": 54,
    //                 "state": "MAHARASHTRA",
    //                 "call_before_delivery": "Available",
    //                 "is_hyperlocal": false,
    //                 "assured_amount": 0,
    //                 "seconds_left_for_pickup": 0,
    //                 "postcode": "400056",
    //                 "region": 3,
    //                 "surface_max_weight": "12.00",
    //                 "etd_hours": 145,
    //                 "min_weight": 0.5,
    //                 "air_max_weight": "0.00",
    //                 "id": 215607857,
    //                 "suppression_dates": [],
    //                 "rto_performance": 4.1,
    //                 "rate": 40.32,
    //                 "odablock": false,
    //                 "qc_courier": 0,
    //                 "tracking_performance": 4.2,
    //                 "edd": "",
    //                 "rank": "",
    //                 "others": null,
    //                 "other_charges": 0,
    //                 "suppress_date": "",
    //                 "weight_cases": 4.84,
    //                 "base_weight": "",
    //                 "courier_type": "0",
    //                 "pickup_supress_hours": 0,
    //                 "blocked": 0,
    //                 "realtime_tracking": "Real Time",
    //                 "cod_multiplier": 0,
    //                 "rto_charges": 40.32,
    //                 "is_rto_address_available": true,
    //                 "cost": "",
    //                 "metro": 1,
    //                 "suppress_text": "",
    //                 "courier_name": "Ekart Logistics Surface",
    //                 "pickup_priority": "",
    //                 "description": "",
    //                 "rating": 4.4
    //             },
    //             "y2Pickup": {
    //                 "address": {
    //                     "updated_at": "2022-09-29 14:56:39",
    //                     "name": "Kusum Rolls ",
    //                     "created_at": "2022-09-29 14:56:39",
    //                     "address_type": null,
    //                     "city": "Mumbai Suburban",
    //                     "state": "Maharashtra",
    //                     "gstin": null,
    //                     "status": 1,
    //                     "lat": null,
    //                     "phone_verified": 1,
    //                     "alternate_phone": null,
    //                     "address": "Shop no. 12, Mayfair appts, sundervan complex, andheri west",
    //                     "country": "India",
    //                     "address_2": "Kusum Rolls sun",
    //                     "extra_info": "{\"source\":3}",
    //                     "rto_address_id": 2950654,
    //                     "company_id": 2322204,
    //                     "pickup_code": "7nyoh1664443596748",
    //                     "id": 2950654,
    //                     "email": "info@refr.club",
    //                     "pin_code": "400053",
    //                     "long": null,
    //                     "phone": "9082952135"
    //                 },
    //                 "company_name": "Refr1 Tech Pvt Ltd.",
    //                 "full_name": "API",
    //                 "pickup_id": 2950654,
    //                 "success": true
    //             },
    //             "zBalance": "756.84",
    //             "y3Order": {
    //                 "courier_company_id": "",
    //                 "shipment_id": 261508222,
    //                 "onboarding_completed_now": 0,
    //                 "courier_name": "",
    //                 "status_code": 1,
    //                 "awb_code": "",
    //                 "status": "NEW",
    //                 "order_id": 262121642
    //             }
    //         },
    //         "upd": {
    //             "seconds": 1664442751,
    //             "nanoseconds": 693000000
    //         },
    //         "code": null,
    //         "amTaxTDS": 0,
    //         "userName": "Aditya",
    //         "journey": "DIRECT",
    //         "gwInfo": {
    //             "amount_refunded": 0,
    //             "error_reason": null,
    //             "refund_status": null,
    //             "error_description": null,
    //             "invoice_id": null,
    //             "notes": {
    //                 "description": "descriptionX"
    //             },
    //             "wallet": null,
    //             "email": "adityakirtane27@gmail.com",
    //             "acquirer_data": {
    //                 "rrn": "227265135042"
    //             },
    //             "captured": true,
    //             "error_source": null,
    //             "contact": "+918879751140",
    //             "card_id": null,
    //             "vpa": "padmaneaditya@okaxis",
    //             "order_id": "order_KNf7HxiA9NFG24",
    //             "status": "captured",
    //             "method": "upi",
    //             "entity": "payment",
    //             "description": "payment to Kusum Rolls ",
    //             "currency": "INR",
    //             "created_at": 1664442880,
    //             "amount": 34335,
    //             "fee": 811,
    //             "error_code": null,
    //             "bank": null,
    //             "error_step": null,
    //             "tax": 124,
    //             "international": false,
    //             "id": "pay_KNf9VeOHu6ztPc"
    //         },
    //         "storeName": "Kusum Rolls ",
    //         "amParcelCity": false,
    //         "amSale": 327,
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //             "ClXxjVuMZ9c4XA9phmqN",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ],
    //         "ordrTYPE": "ONLINE",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "com": {
    //             "seconds": 1664443605,
    //             "nanoseconds": 293000000
    //         },
    //         "shipUpdate": {
    //             "error": "Your shipment has got cancelled, kindly reassign it.",
    //             "track_status": 0
    //         },
    //         "amCost": 343.35,
    //         "amTotal": 343.35,
    //         "gwORDR": "order_KNf7HxiA9NFG24",
    //         "amBurst": 327,
    //         "amTax": 16.35,
    //         "amParcel": 0,
    //         "amRefr": 0,
    //         "earn": 17.1675,
    //         "amTaxTCS": 3.27,
    //         "status": 10,
    //         "gwSIGN": "5e213be7ae6c828932466ed1c02f47a9019e1f7fb536cd2aad56ad61ffbb1a0d",
    //         "camp": {
    //             "min": 200,
    //             "dateS": {
    //                 "seconds": 1663180200,
    //                 "nanoseconds": 0
    //             },
    //             "stage": 0,
    //             "sin": {
    //                 "seconds": 1663222423,
    //                 "nanoseconds": 730000000
    //             },
    //             "countM": 0,
    //             "type": "percent",
    //             "name": "Campaign-2",
    //             "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //             "sid": "ClXxjVuMZ9c4XA9phmqN",
    //             "paid": false,
    //             "storeTyp": "Both",
    //             "dateE": {
    //                 "seconds": 1675103400,
    //                 "nanoseconds": 0
    //             },
    //             "cbDir": 5,
    //             "expiry": false,
    //             "countP": 0,
    //             "customAct": false,
    //             "countS": 0,
    //             "stoped": false,
    //             "upd": {
    //                 "seconds": 1663222423,
    //                 "nanoseconds": 730000000
    //             },
    //             "id": "cCOBhJWhOHK8mr5uGB7n",
    //             "tX": "t1",
    //             "cbNew": 10,
    //             "cbExi": 5,
    //             "ban": false,
    //             "customPay": 0,
    //             "paused": false,
    //             "max": 50
    //         },
    //         "cart": [
    //             {
    //                 "price": 109,
    //                 "sid": "ClXxjVuMZ9c4XA9phmqN",
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F4MuOCa3LVQrIQ1npJhBJ1660386806693?alt=media&token=397b86f8-faa2-4f1f-9997-7cd21378f4c7"
    //                 ],
    //                 "category": "Chicken Roll",
    //                 "variants": [],
    //                 "content": false,
    //                 "cost": 109,
    //                 "upd": {
    //                     "seconds": 1660386811,
    //                     "nanoseconds": 547000000
    //                 },
    //                 "description": "Σ",
    //                 "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //                 "id": "4MuOCa3LVQrIQ1npJhBJ",
    //                 "title": "Chicken Roll",
    //                 "quota": 0,
    //                 "code": "-",
    //                 "Q": 2,
    //                 "sin": {
    //                     "seconds": 1657522280,
    //                     "nanoseconds": 107000000
    //                 },
    //                 "warranty": false,
    //                 "burn": false,
    //                 "reqBurn": false,
    //                 "vX": [],
    //                 "sold": 0
    //             },
    //             {
    //                 "title": "Paneer Roll",
    //                 "price": 109,
    //                 "cost": 109,
    //                 "sid": "ClXxjVuMZ9c4XA9phmqN",
    //                 "warranty": false,
    //                 "quota": 0,
    //                 "category": "Paneer Roll",
    //                 "vX": [],
    //                 "id": "eubWAGNcY6xnEHmXshBb",
    //                 "content": true,
    //                 "sin": {
    //                     "seconds": 1657522275,
    //                     "nanoseconds": 961000000
    //                 },
    //                 "burn": false,
    //                 "upd": {
    //                     "seconds": 1660386244,
    //                     "nanoseconds": 941000000
    //                 },
    //                 "sold": 0,
    //                 "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeubWAGNcY6xnEHmXshBb1660386240411?alt=media&token=dc0c0aed-e983-40d2-bd4c-647bfee93ff5"
    //                 ],
    //                 "code": "-",
    //                 "variants": [],
    //                 "description": "Σ",
    //                 "reqBurn": false,
    //                 "Q": 1
    //             }
    //         ],
    //         "ship": {
    //             "seconds": 1665130715,
    //             "nanoseconds": 788000000
    //         },
    //         "amSave": 0,
    //         "logistics": {
    //             "addressPick": {
    //                 "state": "MH",
    //                 "city": "Mumbai Suburban",
    //                 "area": "Kusum Rolls sun",
    //                 "line2": "",
    //                 "lat": 19.1368874,
    //                 "zip": "400053",
    //                 "locality": "Mumbai",
    //                 "id": "IND_MH_1653035240713",
    //                 "line1": "Shop no. 12, Mayfair appts, sundervan complex, andheri west ",
    //                 "lon": 72.8293228,
    //                 "region": "Maharashtra",
    //                 "nation": "IND"
    //             },
    //             "addressDropT": "work",
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "name": "Aditya",
    //             "phone": "8879751140",
    //             "PnD_nationCharge": 0,
    //             "addressPickT": "shop",
    //             "PnD_parcelNotFree": false,
    //             "status": 10,
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "email": "",
    //             "typeCat": "food_and_beverages",
    //             "PnD_freeStart": 0,
    //             "require": true,
    //             "addressDrop": {
    //                 "type": "work",
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400056
    //             },
    //             "PnD_cityCharge": 0,
    //             "typeShop": "Both"
    //         },
    //         "refr": null,
    //         "amGateway": 8.103060000000001,
    //         "gwID": "pay_KNf9VeOHu6ztPc",
    //         "sin": {
    //             "seconds": 1664442751,
    //             "nanoseconds": 693000000
    //         },
    //         "to": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //         "sid": "ClXxjVuMZ9c4XA9phmqN",
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "useRefrCash": false,
    //             "COD": false
    //         },
    //         "id": "LZmGNTO0UjL8CfUE3bwn"
    //     },
    //     {
    //         "logistics": {
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "addressPick": {
    //                 "lon": 72.8293228,
    //                 "line1": "Shop no. 12, Mayfair appts, sundervan complex, andheri west ",
    //                 "region": "Maharashtra",
    //                 "id": "IND_MH_1653035240713",
    //                 "city": "Mumbai Suburban",
    //                 "nation": "IND",
    //                 "locality": "Mumbai",
    //                 "state": "MH",
    //                 "zip": "400053",
    //                 "line2": "",
    //                 "lat": 19.1368874,
    //                 "area": "Kusum Rolls sun"
    //             },
    //             "email": "",
    //             "typeCat": "food_and_beverages",
    //             "addressDropT": "work",
    //             "PnD_nationCharge": 0,
    //             "PnD_freeStart": 0,
    //             "phone": "8879751140",
    //             "PnD_parcelNotFree": false,
    //             "addressDrop": {
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400056,
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "type": "work"
    //             },
    //             "PnD_cityCharge": 0,
    //             "require": true,
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "typeShop": "Both",
    //             "status": 0,
    //             "name": "Aditya",
    //             "addressPickT": "shop"
    //         },
    //         "sid": "ClXxjVuMZ9c4XA9phmqN",
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //             "ClXxjVuMZ9c4XA9phmqN",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ],
    //         "status": 0,
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "journey": "DIRECT",
    //         "amTotal": 228.9,
    //         "amGateway": 5.40204,
    //         "amParcel": 0,
    //         "invoice": {
    //             "useRefrCash": false,
    //             "COD": false,
    //             "amtRefrCash": 0
    //         },
    //         "id": "6DyuwgNLZ4ks42DtcxUP",
    //         "userName": "Aditya",
    //         "to": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //         "code": null,
    //         "camp": {
    //             "min": 200,
    //             "storeTyp": "Both",
    //             "type": "percent",
    //             "upd": {
    //                 "seconds": 1663222423,
    //                 "nanoseconds": 730000000
    //             },
    //             "customPay": 0,
    //             "sid": "ClXxjVuMZ9c4XA9phmqN",
    //             "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //             "cbDir": 5,
    //             "dateS": {
    //                 "seconds": 1663180200,
    //                 "nanoseconds": 0
    //             },
    //             "countS": 0,
    //             "dateE": {
    //                 "seconds": 1675103400,
    //                 "nanoseconds": 0
    //             },
    //             "cbExi": 5,
    //             "cbNew": 10,
    //             "paid": false,
    //             "countP": 0,
    //             "max": 50,
    //             "customAct": false,
    //             "stoped": false,
    //             "ban": false,
    //             "id": "cCOBhJWhOHK8mr5uGB7n",
    //             "tX": "t1",
    //             "expiry": false,
    //             "paused": false,
    //             "sin": {
    //                 "seconds": 1663222423,
    //                 "nanoseconds": 730000000
    //             },
    //             "countM": 0,
    //             "stage": 0,
    //             "name": "Campaign-2"
    //         },
    //         "amCost": 228.9,
    //         "amSale": 218,
    //         "amTaxTDS": 0,
    //         "storeName": "Kusum Rolls ",
    //         "com": {
    //             "seconds": 1664442646,
    //             "nanoseconds": 481000000
    //         },
    //         "amSave": 0,
    //         "amTaxTCS": 2.18,
    //         "refr": null,
    //         "ordrTYPE": "ONLINE",
    //         "earn": 11.445,
    //         "amRefr": 0,
    //         "sin": {
    //             "seconds": 1664442646,
    //             "nanoseconds": 481000000
    //         },
    //         "upd": {
    //             "seconds": 1664442646,
    //             "nanoseconds": 481000000
    //         },
    //         "cart": [
    //             {
    //                 "burn": false,
    //                 "price": 109,
    //                 "Q": 1,
    //                 "vX": [],
    //                 "warranty": false,
    //                 "cost": 109,
    //                 "title": "Chicken Roll",
    //                 "id": "4MuOCa3LVQrIQ1npJhBJ",
    //                 "upd": {
    //                     "seconds": 1660386811,
    //                     "nanoseconds": 547000000
    //                 },
    //                 "variants": [],
    //                 "sold": 0,
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F4MuOCa3LVQrIQ1npJhBJ1660386806693?alt=media&token=397b86f8-faa2-4f1f-9997-7cd21378f4c7"
    //                 ],
    //                 "reqBurn": false,
    //                 "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //                 "description": "Σ",
    //                 "code": "-",
    //                 "sid": "ClXxjVuMZ9c4XA9phmqN",
    //                 "content": false,
    //                 "quota": 0,
    //                 "category": "Chicken Roll",
    //                 "sin": {
    //                     "seconds": 1657522280,
    //                     "nanoseconds": 107000000
    //                 }
    //             },
    //             {
    //                 "title": "Paneer Roll",
    //                 "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //                 "cost": 109,
    //                 "reqBurn": false,
    //                 "upd": {
    //                     "seconds": 1660386244,
    //                     "nanoseconds": 941000000
    //                 },
    //                 "warranty": false,
    //                 "burn": false,
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeubWAGNcY6xnEHmXshBb1660386240411?alt=media&token=dc0c0aed-e983-40d2-bd4c-647bfee93ff5"
    //                 ],
    //                 "content": true,
    //                 "sid": "ClXxjVuMZ9c4XA9phmqN",
    //                 "vX": [],
    //                 "code": "-",
    //                 "id": "eubWAGNcY6xnEHmXshBb",
    //                 "price": 109,
    //                 "description": "Σ",
    //                 "sold": 0,
    //                 "Q": 1,
    //                 "category": "Paneer Roll",
    //                 "sin": {
    //                     "seconds": 1657522275,
    //                     "nanoseconds": 961000000
    //                 },
    //                 "quota": 0,
    //                 "variants": []
    //             }
    //         ],
    //         "amTax": 10.9,
    //         "amBurst": 218,
    //         "amParcelCity": false
    //     },
    //     {
    //         "amTaxTDS": 0,
    //         "sin": {
    //             "seconds": 1664442556,
    //             "nanoseconds": 377000000
    //         },
    //         "ordrTYPE": "ONLINE",
    //         "to": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //         "userName": "Aditya",
    //         "amBurst": 248,
    //         "amParcel": 0,
    //         "upd": {
    //             "seconds": 1664442556,
    //             "nanoseconds": 377000000
    //         },
    //         "amGateway": 6.145439999999999,
    //         "journey": "DIRECT",
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "amSave": 0,
    //         "com": {
    //             "seconds": 1664442556,
    //             "nanoseconds": 377000000
    //         },
    //         "amTax": 12.4,
    //         "amRefr": 0,
    //         "amSale": 248,
    //         "refr": null,
    //         "sid": "ClXxjVuMZ9c4XA9phmqN",
    //         "logistics": {
    //             "phone": "8879751140",
    //             "PnD_cityCharge": 0,
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "typeCat": "food_and_beverages",
    //             "addressPickT": "shop",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "email": "",
    //             "PnD_parcelNotFree": false,
    //             "require": true,
    //             "PnD_freeStart": 0,
    //             "addressDrop": {
    //                 "landmark": "Gagandeep bus stop",
    //                 "zip": 400056,
    //                 "type": "work",
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
    //             },
    //             "PnD_nationCharge": 0,
    //             "addressPick": {
    //                 "lat": 19.1368874,
    //                 "id": "IND_MH_1653035240713",
    //                 "zip": "400053",
    //                 "lon": 72.8293228,
    //                 "region": "Maharashtra",
    //                 "city": "Mumbai Suburban",
    //                 "state": "MH",
    //                 "line1": "Shop no. 12, Mayfair appts, sundervan complex, andheri west ",
    //                 "area": "Kusum Rolls sun",
    //                 "line2": "",
    //                 "nation": "IND",
    //                 "locality": "Mumbai"
    //             },
    //             "status": 0,
    //             "name": "Aditya",
    //             "addressDropT": "work",
    //             "typeShop": "Both"
    //         },
    //         "amCost": 260.4,
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //             "ClXxjVuMZ9c4XA9phmqN",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ],
    //         "storeName": "Kusum Rolls ",
    //         "amTotal": 260.4,
    //         "status": 0,
    //         "earn": 13.02,
    //         "code": null,
    //         "invoice": {
    //             "amtRefrCash": 0,
    //             "COD": false,
    //             "useRefrCash": false
    //         },
    //         "amParcelCity": false,
    //         "id": "JVoWZIik1rr6FUFMTZTu",
    //         "cart": [
    //             {
    //                 "sid": "ClXxjVuMZ9c4XA9phmqN",
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F4MuOCa3LVQrIQ1npJhBJ1660386806693?alt=media&token=397b86f8-faa2-4f1f-9997-7cd21378f4c7"
    //                 ],
    //                 "category": "Chicken Roll",
    //                 "sold": 0,
    //                 "content": false,
    //                 "quota": 0,
    //                 "warranty": false,
    //                 "price": 109,
    //                 "code": "-",
    //                 "description": "Σ",
    //                 "burn": false,
    //                 "reqBurn": false,
    //                 "title": "Chicken Roll",
    //                 "cost": 109,
    //                 "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //                 "upd": {
    //                     "seconds": 1660386811,
    //                     "nanoseconds": 547000000
    //                 },
    //                 "sin": {
    //                     "seconds": 1657522280,
    //                     "nanoseconds": 107000000
    //                 },
    //                 "variants": [],
    //                 "vX": [],
    //                 "Q": 1,
    //                 "id": "4MuOCa3LVQrIQ1npJhBJ"
    //             },
    //             {
    //                 "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //                 "sid": "ClXxjVuMZ9c4XA9phmqN",
    //                 "warranty": true,
    //                 "id": "EBPzmY4oVeIOYruWfQJd",
    //                 "upd": {
    //                     "seconds": 1659349281,
    //                     "nanoseconds": 858000000
    //                 },
    //                 "title": "Veggie Paneer Roll",
    //                 "variants": [],
    //                 "reqBurn": false,
    //                 "sold": 0,
    //                 "category": "Veggie Roll",
    //                 "burn": false,
    //                 "description": "Σ",
    //                 "Q": 1,
    //                 "quota": 0,
    //                 "vX": [],
    //                 "banners": [],
    //                 "sin": {
    //                     "seconds": 1657522275,
    //                     "nanoseconds": 317000000
    //                 },
    //                 "price": 139,
    //                 "content": true,
    //                 "cost": 139,
    //                 "code": "-"
    //             }
    //         ],
    //         "amTaxTCS": 2.48,
    //         "camp": {
    //             "stage": 0,
    //             "tX": "t1",
    //             "paused": false,
    //             "type": "percent",
    //             "upd": {
    //                 "seconds": 1663222423,
    //                 "nanoseconds": 730000000
    //             },
    //             "cbDir": 5,
    //             "id": "cCOBhJWhOHK8mr5uGB7n",
    //             "paid": false,
    //             "dateE": {
    //                 "seconds": 1675103400,
    //                 "nanoseconds": 0
    //             },
    //             "sid": "ClXxjVuMZ9c4XA9phmqN",
    //             "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //             "countM": 0,
    //             "cbExi": 5,
    //             "sin": {
    //                 "seconds": 1663222423,
    //                 "nanoseconds": 730000000
    //             },
    //             "min": 200,
    //             "countS": 0,
    //             "ban": false,
    //             "name": "Campaign-2",
    //             "dateS": {
    //                 "seconds": 1663180200,
    //                 "nanoseconds": 0
    //             },
    //             "max": 50,
    //             "expiry": false,
    //             "stoped": false,
    //             "customPay": 0,
    //             "customAct": false,
    //             "storeTyp": "Both",
    //             "countP": 0,
    //             "cbNew": 10
    //         }
    //     },
    //     {
    //         "ordrTYPE": "ONLINE",
    //         "code": "A000Dc",
    //         "invoice": {
    //             "COD": false,
    //             "useRefrCash": false,
    //             "amtRefrCash": 0
    //         },
    //         "amSave": 0,
    //         "amTax": 12.4,
    //         "amSale": 248,
    //         "com": {
    //             "seconds": 1664442435,
    //             "nanoseconds": 638000000
    //         },
    //         "amParcel": 0,
    //         "camp": {
    //             "type": "percent",
    //             "countM": 0,
    //             "countS": 0,
    //             "cbNew": 10,
    //             "stoped": false,
    //             "max": 50,
    //             "sid": "ClXxjVuMZ9c4XA9phmqN",
    //             "customPay": 0,
    //             "ban": false,
    //             "upd": {
    //                 "seconds": 1663222423,
    //                 "nanoseconds": 730000000
    //             },
    //             "name": "Campaign-2",
    //             "stage": 0,
    //             "storeTyp": "Both",
    //             "paid": false,
    //             "dateE": {
    //                 "seconds": 1675103400,
    //                 "nanoseconds": 0
    //             },
    //             "sin": {
    //                 "seconds": 1663222423,
    //                 "nanoseconds": 730000000
    //             },
    //             "id": "cCOBhJWhOHK8mr5uGB7n",
    //             "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //             "expiry": false,
    //             "paused": false,
    //             "countP": 0,
    //             "cbDir": 5,
    //             "customAct": false,
    //             "min": 200,
    //             "tX": "t1",
    //             "cbExi": 5,
    //             "dateS": {
    //                 "seconds": 1663180200,
    //                 "nanoseconds": 0
    //             }
    //         },
    //         "to": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //         "refr": {
    //             "name": "Simran",
    //             "earn": 12.4,
    //             "uid": "o4883A1Q02RHog58vwassZPcOO02"
    //         },
    //         "upd": {
    //             "seconds": 1664442435,
    //             "nanoseconds": 638000000
    //         },
    //         "amTaxTDS": 0,
    //         "storeName": "Kusum Rolls ",
    //         "id": "u6dvOB5uejFhG36kiMFl",
    //         "amTotal": 260.4,
    //         "amParcelCity": false,
    //         "amCost": 260.4,
    //         "logistics": {
    //             "typeCat": "food_and_beverages",
    //             "PnD_cityCharge": 0,
    //             "require": true,
    //             "PnD_nationCharge": 0,
    //             "status": 0,
    //             "addressPickT": "shop",
    //             "typeSuCat": "sc-food_and_beverages-cafe",
    //             "PnD_freeStart": 0,
    //             "phone": "8879751140",
    //             "addressDrop": {
    //                 "landmark": "Gagandeep bus stop",
    //                 "type": "work",
    //                 "zip": 400056,
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
    //             },
    //             "addressDropT": "work",
    //             "email": "",
    //             "name": "Aditya",
    //             "typeOrdr": "F2F_ONLINE",
    //             "PnD_parcelNotFree": false,
    //             "addressPick": {
    //                 "lon": 72.8293228,
    //                 "area": "Kusum Rolls sun",
    //                 "locality": "Mumbai",
    //                 "line2": "",
    //                 "lat": 19.1368874,
    //                 "nation": "IND",
    //                 "city": "Mumbai Suburban",
    //                 "zip": "400053",
    //                 "state": "MH",
    //                 "line1": "Shop no. 12, Mayfair appts, sundervan complex, andheri west ",
    //                 "id": "IND_MH_1653035240713",
    //                 "region": "Maharashtra"
    //             },
    //             "typeShop": "Both"
    //         },
    //         "sid": "ClXxjVuMZ9c4XA9phmqN",
    //         "userName": "Aditya",
    //         "amTaxTCS": 2.48,
    //         "journey": "F2F",
    //         "earn": 26.04,
    //         "amBurst": 248,
    //         "status": 0,
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //             "ClXxjVuMZ9c4XA9phmqN",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "F2F",
    //             "A000Dc"
    //         ],
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "cart": [
    //             {
    //                 "id": "4MuOCa3LVQrIQ1npJhBJ",
    //                 "description": "Σ",
    //                 "code": "-",
    //                 "vX": [],
    //                 "Q": 1,
    //                 "warranty": false,
    //                 "sid": "ClXxjVuMZ9c4XA9phmqN",
    //                 "sold": 0,
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F4MuOCa3LVQrIQ1npJhBJ1660386806693?alt=media&token=397b86f8-faa2-4f1f-9997-7cd21378f4c7"
    //                 ],
    //                 "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //                 "content": false,
    //                 "variants": [],
    //                 "reqBurn": false,
    //                 "price": 109,
    //                 "cost": 109,
    //                 "sin": {
    //                     "seconds": 1657522280,
    //                     "nanoseconds": 107000000
    //                 },
    //                 "quota": 0,
    //                 "upd": {
    //                     "seconds": 1660386811,
    //                     "nanoseconds": 547000000
    //                 },
    //                 "burn": false,
    //                 "category": "Chicken Roll",
    //                 "title": "Chicken Roll"
    //             },
    //             {
    //                 "variants": [],
    //                 "content": true,
    //                 "title": "Veggie Paneer Roll",
    //                 "quota": 0,
    //                 "reqBurn": false,
    //                 "sin": {
    //                     "seconds": 1657522275,
    //                     "nanoseconds": 317000000
    //                 },
    //                 "vX": [],
    //                 "sold": 0,
    //                 "upd": {
    //                     "seconds": 1659349281,
    //                     "nanoseconds": 858000000
    //                 },
    //                 "category": "Veggie Roll",
    //                 "code": "-",
    //                 "price": 139,
    //                 "warranty": true,
    //                 "Q": 1,
    //                 "by": "cB8lFziWJAeR3QV9LnoZtOhlIyH3",
    //                 "id": "EBPzmY4oVeIOYruWfQJd",
    //                 "cost": 139,
    //                 "burn": false,
    //                 "description": "Σ",
    //                 "banners": [],
    //                 "sid": "ClXxjVuMZ9c4XA9phmqN"
    //             }
    //         ],
    //         "amRefr": 0,
    //         "sin": {
    //             "seconds": 1664442435,
    //             "nanoseconds": 638000000
    //         },
    //         "amGateway": 6.145439999999999
    //     },
    //     {
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //         "to": "O2qq7kOJL8UNaw2BDJ4y1Hkn6nA3",
    //         "gwSIGN": "8963e47a4c10b2bf63d341b5f6bd52c71372ab9c87ac0ad1969e29f8a42619cb",
    //         "amSale": 529,
    //         "amRefr": 0,
    //         "status": 1,
    //         "gwORDR": "order_KLL3hj38rK40z8",
    //         "amBurst": 529,
    //         "gwID": "pay_KLL4Xse9cftOez",
    //         "ordrTYPE": "ONLINE",
    //         "journey": "DIRECT",
    //         "amCost": 529,
    //         "sin": {
    //             "seconds": 1663935434,
    //             "nanoseconds": 609000000
    //         },
    //         "invoice": {
    //             "COD": false,
    //             "useRefrCash": false,
    //             "amtRefrCash": 0
    //         },
    //         "cart": [
    //             {
    //                 "variants": [],
    //                 "id": "0fMq37TyjfBnX3E7g2pm",
    //                 "title": "Daarzel - Hazelnut coated with 45% Dark chocolate| Vegan |Gluten Free | Non GMO | Natural source of Protein & Antioxidants | 50g",
    //                 "by": "O2qq7kOJL8UNaw2BDJ4y1Hkn6nA3",
    //                 "burn": false,
    //                 "sid": "yCAdnFqbOVUbaWXCGY9D",
    //                 "sin": {
    //                     "seconds": 1663776464,
    //                     "nanoseconds": 891000000
    //                 },
    //                 "upd": {
    //                     "seconds": 1663847093,
    //                     "nanoseconds": 693000000
    //                 },
    //                 "code": 1806,
    //                 "quota": 0,
    //                 "reqBurn": false,
    //                 "vX": [],
    //                 "content": true,
    //                 "description": "Nutritional Facts: Per 50 g (As per serving size)*\r\nEnergy: 613.6 Kcal\r\nProtein: 8.7 g\r\nTotal Fats: 45.4 g\r\nSaturated Fat: 36.4 g\r\nUnsaturated Fat: 31.9 g\r\nTrans Fat: 0 g\r\nCarbohydrate: 42.6 g\r\nSugar: 30.54 g\r\n*Approximate Values\r\n\r\nIngredients:\r\nHazelnuts, 45 % Chocolate (Cacao Solids, Sugar, Cacao butter, Soy Lecithin,\r\nVanillin) Cacao Butter, Gum Arabic.\r\n",
    //                 "sold": 0,
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0fMq37TyjfBnX3E7g2pm1663847089233?alt=media&token=e481f5bb-9234-49d2-82a5-4c8b82d682ea"
    //                 ],
    //                 "price": 179,
    //                 "cost": 179,
    //                 "warranty": true,
    //                 "Q": 1,
    //                 "category": "Daarzel Dark Chocolate"
    //             },
    //             {
    //                 "sid": "yCAdnFqbOVUbaWXCGY9D",
    //                 "price": 350,
    //                 "variants": [],
    //                 "vX": [],
    //                 "code": 1806,
    //                 "warranty": true,
    //                 "category": "Daarzel Dark Chocolate",
    //                 "reqBurn": false,
    //                 "cost": 350,
    //                 "sin": {
    //                     "seconds": 1663776475,
    //                     "nanoseconds": 616000000
    //                 },
    //                 "by": "O2qq7kOJL8UNaw2BDJ4y1Hkn6nA3",
    //                 "upd": {
    //                     "seconds": 1663920067,
    //                     "nanoseconds": 111000000
    //                 },
    //                 "quota": 0,
    //                 "burn": false,
    //                 "banners": [
    //                     "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2EwCd9xvfiRFyXiWWzqW1663920060869?alt=media&token=b0c84228-1a35-4fed-8dab-85dec62faab1"
    //                 ],
    //                 "id": "2EwCd9xvfiRFyXiWWzqW",
    //                 "Q": 1,
    //                 "title": "Daarzel - Classic American Fudgy | Chocolate Walnut Brownie | Makes 20 Brownies | 750 g",
    //                 "description": "-",
    //                 "sold": 0,
    //                 "content": true
    //             }
    //         ],
    //         "storeName": "AMBRIONA",
    //         "amGateway": 12.484399999999999,
    //         "sid": "yCAdnFqbOVUbaWXCGY9D",
    //         "logistics": {
    //             "phone": "8879751140",
    //             "addressPickT": "shop",
    //             "name": "Aditya",
    //             "addressDropT": "work",
    //             "PnD_parcelNotFree": false,
    //             "status": 0,
    //             "require": true,
    //             "PnD_nationCharge": 0,
    //             "PnD_cityCharge": 0,
    //             "email": "",
    //             "addressDrop": {
    //                 "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
    //                 "zip": 400056,
    //                 "landmark": "Gagandeep bus stop",
    //                 "type": "work"
    //             },
    //             "typeOrdr": "DIRECT_ONLINE",
    //             "addressPick": {
    //                 "line2": "",
    //                 "lat": 19.1023974,
    //                 "id": "IND_MH_1663323542105",
    //                 "city": "Mumbai Suburban",
    //                 "region": "Maharashtra",
    //                 "state": "MH",
    //                 "locality": "Mumbai",
    //                 "area": "The Summit Business Bay, Western Express Highway, Nav Prabhat Society, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra, India",
    //                 "zip": "400057",
    //                 "lon": 72.85403749999999,
    //                 "line1": "The Summit Business Bay 302  H-2, Western Express Hwy, Nav Prabhat Society, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057",
    //                 "nation": "IND"
    //             },
    //             "typeShop": "Onli",
    //             "typeSuCat": "supermarket-any",
    //             "typeCat": "supermarket",
    //             "PnD_freeStart": 0
    //         },
    //         "type": [
    //             "ONLINE",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "O2qq7kOJL8UNaw2BDJ4y1Hkn6nA3",
    //             "yCAdnFqbOVUbaWXCGY9D",
    //             "addORDER",
    //             "storeORDER",
    //             "clientAc",
    //             "DIRECT"
    //         ],
    //         "refr": null,
    //         "amParcelCity": false,
    //         "amParcel": 0,
    //         "upd": {
    //             "seconds": 1663935434,
    //             "nanoseconds": 609000000
    //         },
    //         "com": {
    //             "seconds": 1663935434,
    //             "nanoseconds": 609000000
    //         },
    //         "code": null,
    //         "amTaxTDS": 0,
    //         "earn": 25,
    //         "userName": "Aditya",
    //         "id": "F47xcVEYBrH2mg6Jiscu",
    //         "gwInfo": {
    //             "wallet": null,
    //             "email": "adityakirtane27@gmail.com",
    //             "international": false,
    //             "error_code": null,
    //             "bank": null,
    //             "amount_refunded": 0,
    //             "error_description": null,
    //             "order_id": "order_KLL3hj38rK40z8",
    //             "amount": 52900,
    //             "fee": 1248,
    //             "tax": 190,
    //             "invoice_id": null,
    //             "contact": "+918879751140",
    //             "entity": "payment",
    //             "notes": {
    //                 "description": "descriptionX"
    //             },
    //             "refund_status": null,
    //             "acquirer_data": {
    //                 "rrn": "226645552439"
    //             },
    //             "id": "pay_KLL4Xse9cftOez",
    //             "card_id": null,
    //             "vpa": "adityakirtane27@okaxis",
    //             "captured": true,
    //             "created_at": 1663935486,
    //             "method": "upi",
    //             "error_step": null,
    //             "status": "captured",
    //             "description": "payment to AMBRIONA",
    //             "error_source": null,
    //             "currency": "INR",
    //             "error_reason": null
    //         },
    //         "amTax": 0,
    //         "amSave": 0,
    //         "amTotal": 529,
    //         "camp": {
    //             "countM": 0,
    //             "countS": 0,
    //             "type": "flat",
    //             "expiry": false,
    //             "sid": "yCAdnFqbOVUbaWXCGY9D",
    //             "paused": false,
    //             "stage": 0,
    //             "stoped": false,
    //             "dateS": {
    //                 "seconds": 1663698600,
    //                 "nanoseconds": 0
    //             },
    //             "min": 499,
    //             "tX": "t11",
    //             "cbDir": 25,
    //             "customPay": 0,
    //             "storeTyp": "Onli",
    //             "cbNew": 50,
    //             "countP": 0,
    //             "customAct": false,
    //             "max": 0,
    //             "dateE": {
    //                 "seconds": 1667154600,
    //                 "nanoseconds": 0
    //             },
    //             "paid": false,
    //             "name": "Campaign-1",
    //             "cbExi": 25,
    //             "upd": {
    //                 "seconds": 1663735113,
    //                 "nanoseconds": 856000000
    //             },
    //             "sin": {
    //                 "seconds": 1663735113,
    //                 "nanoseconds": 856000000
    //             },
    //             "ban": false,
    //             "by": "O2qq7kOJL8UNaw2BDJ4y1Hkn6nA3",
    //             "id": "AQMFOeIqAWuQllcMgdte"
    //         },
    //         "amTaxTCS": 5.29
    //     },
    //     {
    //         "userName": "Aditya",
    //         "com": {
    //             "seconds": 1663337378,
    //             "nanoseconds": 0
    //         },
    //         "journey": "POS",
    //         "to": "GdViTqOv51YIsNxHV58LpXpx99n1",
    //         "invoice": {
    //             "useRefrCash": false,
    //             "amtRefrCash": 0,
    //             "COD": false
    //         },
    //         "code": "A000E6",
    //         "amTaxTDS": 0,
    //         "amTaxTCS": 0,
    //         "amRefr": 0,
    //         "status": -10,
    //         "amParcel": 0,
    //         "amSave": 0,
    //         "camp": null,
    //         "cart": [],
    //         "sid": "GQpgth7uBClObv3GWhgE",
    //         "amTotal": 0,
    //         "type": [
    //             "CASH",
    //             "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
    //             "GdViTqOv51YIsNxHV58LpXpx99n1",
    //             "GQpgth7uBClObv3GWhgE",
    //             "storeORDER",
    //             "clientAc",
    //             "POS",
    //             "REDEEM",
    //             "A000E6"
    //         ],
    //         "ordrTYPE": "CASH",
    //         "amParcelCity": false,
    //         "upd": {
    //             "seconds": 1663337387,
    //             "nanoseconds": 762000000
    //         },
    //         "earn": 0,
    //         "storeName": "Coco Cafe",
    //         "amSale": 0,
    //         "refr": null,
    //         "amCost": 0,
    //         "amTax": 0,
    //         "amGateway": 0,
    //         "logistics": {
    //             "status": 0,
    //             "addressDrop": null,
    //             "addressPick": null,
    //             "require": false
    //         },
    //         "id": "8q2SbH2ABKTcWAKO3NYq",
    //         "amBurst": 0,
    //         "sin": {
    //             "seconds": 1663337378,
    //             "nanoseconds": 0
    //         },
    //         "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
    //     }
    // ]
  ;

  constructor(private _bottomSheet: MatBottomSheet) { 
    console.log(this.payments);
  }


  howitwork() {
    this._bottomSheet.open(CustHowitWorkComponent, {
      panelClass: 'wallethowitworks',
    });
  }

  ngOnInit(): void {
  }

}
