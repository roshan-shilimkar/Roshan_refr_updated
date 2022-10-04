import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareAdvocacyComponent } from 'src/app/share-advocacy/share-advocacy.component';
import { ShareLoyaltyComponent } from 'src/app/share-loyalty/share-loyalty.component';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit {
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
  paymentOrder: any = [
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTax: 0,
      amParcel: 0,
      amTotal: 500,
      earn: 50,
      cart: [],
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 0, useRefrCash: false },
      logistics: {
      },
      status: 10,
      journey: "POS",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "CASH",
      userName: "Roshan"
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTax: 0,
      amParcel: 0,
      amTotal: 500,
      status: 10,
      earn: 50,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [{
            countQ: 1,
            id: "s15R9CsWGf0DjDkGRwfV",
            nowVarient: [
              { name: '#ff0000', type: 'palete' },
              { name: 'Xl', type: 'size' },
              { name: '#123123', type: 'color' }],
          }
          ],
          variants: [],
          warranty: true
        },
        {
          Q: 3,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 249,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants",
        require: false,
        status: 20,
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: true, amtRefrCash: 0, useRefrCash: false },
      journey: "DIRECT",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "COD",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: -10,
      amTax: 0,
      amParcel: 0,
      earn: 50,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        },
        {
          Q: 3,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 249,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        status: -10,
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: true, amtRefrCash: 0, useRefrCash: false },
      journey: "F2F",
      storeName: "Fit Foods",
      refr: {
        earn: 25,
        name: "Rati",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      ordrTYPE: "COD",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: -10,
      earn: 0,
      amTax: 0,
      amParcel: 0,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants",
        status: -100,
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: true, amtRefrCash: 0, useRefrCash: false },
      journey: "BURN",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "COD",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: -10,
      earn: 50,
      amTax: 0,
      amParcel: 0,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        },
        {
          Q: 3,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 249,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants",
        status: -100,
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 100, useRefrCash: true },
      journey: "DIRECT",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "RefrCASH+ONLINE",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: -10,
      earn: 50,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        },
        {
          Q: 3,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 249,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants",
        status: -1000,
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 100, useRefrCash: true },
      journey: "F2F",
      storeName: "Fit Foods",
      refr: {
        earn: 25,
        name: "Rati",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      ordrTYPE: "RefrCASH+ONLINE",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: 10,
      amTax: 0,
      amParcel: 0,
      earn: 0,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 100, useRefrCash: true },
      journey: "BURN",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "RefrCASH+ONLINE",
      userName: "Roshan",
    },












    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: 10,
      earn: 50,
      amTax: 0,
      amParcel: 0,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        },
        {
          Q: 3,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 249,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 500, useRefrCash: true },
      journey: "DIRECT",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "RefrCASH",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: 10,
      amTax: 0,
      amParcel: 0,
      earn: 50,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        },
        {
          Q: 3,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 249,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 500, useRefrCash: true },
      journey: "F2F",
      storeName: "Fit Foods",
      refr: {
        earn: 25,
        name: "Rati",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      ordrTYPE: "RefrCASH",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: -100,
      amTax: 0,
      amParcel: 0,
      earn: 0,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 500, useRefrCash: true },
      journey: "BURN",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "RefrCASH",
      userName: "Roshan",
    },













    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: 10,
      amTax: 0,
      amParcel: 0,
      earn: 50,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        },
        {
          Q: 3,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 249,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 0, useRefrCash: false },
      journey: "DIRECT",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "ONLINE",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: 10,
      amTax: 0,
      amParcel: 0,
      earn: 50,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        },
        {
          Q: 3,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 249,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 0, useRefrCash: false },
      journey: "F2F",
      storeName: "Fit Foods",
      refr: {
        earn: 25,
        name: "Rati",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      ordrTYPE: "ONLINE",
      userName: "Roshan",
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      status: 10,
      amTax: 0,
      amParcel: 0,
      earn: 0,
      cart: [
        {
          Q: 5,
          banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=cb3ed260-d191-4e09-821b-c7d45a3ec8bb'],
          burn: false,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          category: "Dal",
          code: "21069099",
          content: true,
          cost: 229,
          description: "Dal Tadka is a popular Indian lentil dish made with arhar dal (husked & split pigeon pea lentils) or masoor dal (husked & split red lentils). This Dal Tadka recipe gives you a delicious creamy dal with smoked flavors.",
          id: "h25O95gX19QwOYWqprXx",
          price: 299,
          quota: 0,
          reqBurn: false,
          sid: "8B9ozj7aTPvywkIvVWiK",
          sin: { seconds: 1656594533, nanoseconds: 801000000 },
          sold: 0,
          title: "Dal Tadka ",
          upd: { seconds: 1656595043, nanoseconds: 979000000 },
          vX: [],
          variants: [],
          warranty: true
        }
      ],
      shipCreate: {
        y5Chosen: {
          freight_charge: 40.32,
        }
      },
      logistics: {
        addressDrop: {
          address: "101",
          landmark: "Leena",
          type: "home",
          zip: 400056,
        },
        addressPick: {
          area: "Dent Heal",
          city: "Mumbai Suburban",
          id: "IND_MH_1648672299398",
          lat: 19.0662066,
          line1: "Dipesadsadas sadasdas",
          line2: "",
          locality: "Mumbai",
          lon: 72.83105909999999,
          nation: "IND",
          region: "Maharashtra",
          state: "MH",
          zip: "400050",
        },
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 0, useRefrCash: false },
      journey: "BURN",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "ONLINE",
      userName: "Roshan",
    },
  ]




  paymentRedeem: any = [{
    userName: 'Roshan',
    journey: 'POS',
    id: '23123123123',
    code: 'sadsdadas',
    sin: { seconds: 1661180330, nanoseconds: 990000000 },
    camp: {
      cbNew: 100,
      min: 10000,
      max: 1000,
    }
  }
  ]

  campALL: any = [

  ]

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  getVARIENT(v: any) {
    console.log("MANKIND", v)
    return v.type + ": " + v.name;
  }

  getCampAmt(a: any, b: string) {

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
