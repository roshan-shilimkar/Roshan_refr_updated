import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-orders',
  templateUrl: './vendor-orders.component.html',
  styleUrls: ['./vendor-orders.component.scss']
})
export class VendorOrdersComponent implements OnInit {
  selectedindex: any = null;
  makeChanges = false;
  paymentOrder: Array<any> = [
    //Refund Transations
    {
      amGateway: 0,
      amTotal: 10.5,
      by: "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
      upd: {
        seconds: 1662883347,
        nanoseconds: 507000000
      },
      amSave: 20.5,
      com: {
        seconds: 1662883393,
        nanoseconds: 996000000
      },
      journey: "F2F",
      amCost: 0,
      invoice: {
        useRefrCash: true,
        COD: false,
        amtRefrCash: 10.5
      },
      amRefr: 0,
      amSale: 20,
      logistics: {
        addressPickT: "shop",
        name: "Rati ",
        PnD_parcelNotFree: false,
        PnD_freeStart: 0,
        addressDropT: "home",
        PnD_cityCharge: 0,
        email: "",
        typeCat: "food_and_beverages",
        PnD_nationCharge: 0,
        addressPick: {
          locality: "Mumbai",
          line1: "Dipesadsadas sadasdas",
          lat: 19.0662066,
          state: "MH",
          region: "Maharashtra",
          lon: 72.83105909999999,
          line2: "",
          nation: "IND",
          city: "Mumbai Suburban",
          area: "Dent Heal",
          zip: "400050",
          id: "IND_MH_1648672299398"
        },
        typeOrdr: "F2F_ONLINE",
        status: -1000,
        addressDrop: {
          landmark: "Naturals ice cream ",
          address: "801 Kanaiya Kutir, 14th road, Khar West ",
          zip: 400052,
          type: "other"
        },
        typeSuCat: "sc-food_and_beverages-restaurants",
        phone: "9619566685",
        typeShop: "Both",
        require: false
      },
      id: "DRKPSLTPPdUsZRgC7xhQ",
      amBurst: 10,
      amTax: 0.5,
      gwRefund: [
        {}
      ],
      userName: "Rati ",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "RefrCASH",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "F2F",
        "A00009"
      ],
      earn: 0,
      camp: {
        countP: 0,
        storeTyp: "Both",
        stage: 0,
        name: "Campaign-32",
        min: 999,
        expiry: false,
        tX: "t1",
        paused: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        countM: 0,
        sid: "8B9ozj7aTPvywkIvVWiK",
        countS: 0,
        type: "flat",
        max: 0,
        stoped: false,
        dateS: {
          seconds: 1661970600,
          nanoseconds: 0
        },
        upd: {
          seconds: 1661587074,
          nanoseconds: 781000000
        },
        dateE: {
          seconds: 1665772200,
          nanoseconds: 0
        },
        cbNew: 100,
        customAct: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        cbDir: 25,
        sin: {
          seconds: 1661587074,
          nanoseconds: 781000000
        },
        paid: false,
        ban: false,
        cbExi: 50,
        customPay: 0
      },
      sid: "8B9ozj7aTPvywkIvVWiK",
      status: -10,
      sin: {
        seconds: 1662883347,
        nanoseconds: 507000000
      },
      cart: [
        {
          sold: 0,
          variants: [],
          burn: false,
          code: "Some Hsn",
          title: "Abcd",
          id: "s15R9CsWGf0DjDkGRwfV",
          cost: 10,
          sin: {
            seconds: 1662754531,
            nanoseconds: 334000000
          },
          quota: 0,
          warranty: true,
          by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          vX: [],
          upd: {
            seconds: 1662754531,
            nanoseconds: 334000000
          },
          banners: [],
          Q: 1,
          price: 20,
          description: "elo",
          category: "some category",
          reqBurn: false,
          content: true,
          sid: "8B9ozj7aTPvywkIvVWiK"
        }
      ],
      code: "A00009",
      refr: {
        uid: "GdViTqOv51YIsNxHV58LpXpx99n1",
        name: "Shraddha ",
        earn: 0
      },
      storeName: "Fit Food",
      amParcelCity: false,
      amParcel: 0,
      amTaxTCS: 0.1,
      ordrTYPE: "RefrCASH",
      amTaxTDS: 0
    },
    //completed
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 0, COD: false, useRefrCash: false },
      journey: "POS",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "ONLINE",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },
    // options
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 1098.3, COD: false, useRefrCash: true },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 0,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Ratisss "
    },










//Rejected 
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 1098.3, COD: false, useRefrCash: true },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: -10,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: -10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Ratisss "
    },



    //Rejected 
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 1098.3, COD: false, useRefrCash: true },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: -100,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: -10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Ratisss "
    },


    //Refunded 
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 1098.3, COD: false, useRefrCash: true },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: -1000,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: -10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Ratisss "
    },








    // online purchase,Payment Method = Online
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 0, COD: false, useRefrCash: false },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "ONLINE",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // online purchase, Payment Method = Online + Refr Cash
    {
      amBurst: 1046,
      amCost: 1000,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 98.3, COD: false, useRefrCash: true },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH+ONLINE",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // online purchase, Payment Method = Refr Cash
    {
      amBurst: 1046,
      amCost: 0,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 1098.3, COD: true, useRefrCash: true },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // online purchase, Payment Method = RefrCash + COD
    {
      amBurst: 1046,
      amCost: 1000,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 98.3, COD: true, useRefrCash: true },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH+COD",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // online purchase, Payment Method = COD
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 0, COD: true, useRefrCash: false },
      journey: "DIRECT",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "COD",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // BURN purchase,Payment Method = Online
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 0,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 0, COD: false, useRefrCash: false },
      journey: "BURN",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "ONLINE",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // BURN purchase, Payment Method = Online + Refr Cash
    {
      amBurst: 1046,
      amCost: 1000,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 0,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 98.3, COD: false, useRefrCash: true },
      journey: "BURN",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH+ONLINE",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // BURN purchase, Payment Method = Refr Cash
    {
      amBurst: 1046,
      amCost: 0,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 0,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 1098.3, COD: false, useRefrCash: true },
      journey: "BURN",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },


    // BURN purchase, Payment Method = RefrCash + COD
    {
      amBurst: 1046,
      amCost: 1000,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 98.3, COD: true, useRefrCash: true },
      journey: "BURN",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH+COD",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // BURN purchase, Payment Method = COD
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 0, COD: true, useRefrCash: false },
      journey: "BURN",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "COD",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },



    // Instore purchase,Payment Method = Cash
    {
      amBurst: 0,
      amCost: 0,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: false,
      amRefr: 0,
      amSale: 0,
      amSave: 0,
      amTax: 0,
      amTaxTCS: 0,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 0, COD: false, useRefrCash: false },
      journey: "POS",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "CASH",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // Instore purchase,Payment Method = Online + Refrcash
    {
      amBurst: 1046,
      amCost: 1000,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 98.3, COD: false, useRefrCash: true },
      journey: "POS",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH+ONLINE",
      refr: null,
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },




    // online purchase, Payment Method = Online
    // Using Rati's Recommendation
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 0, COD: false, useRefrCash: false },
      journey: "F2F",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "Online",
      refr: {
        earn: 25,
        name: "Rati",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // online purchase, Payment Method = Refr Cash
    // Using Rati's Recommendation
    {
      amBurst: 1046,
      amCost: 0,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 1098.3, COD: false, useRefrCash: true },
      journey: "F2F",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH",
      refr: {
        earn: 25,
        name: "Rati",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },

    // online purchase, Payment Method = Refr Cash + Online
    // Using Rati's Recommendation
    {
      amBurst: 1046,
      amCost: 1000,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 98.3, COD: false, useRefrCash: true },
      journey: "F2F",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH+ONLINE",
      refr: {
        earn: 105,
        name: "Roshan",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },










    // online purchase, Payment Method = Refr Cash + COD
    // Using Rati's Recommendation
    {
      amBurst: 1046,
      amCost: 1000,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 98.3, COD: true, useRefrCash: true },
      journey: "F2F",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "RefrCASH+COD",
      refr: {
        earn: 105,
        name: "Roshan",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    },









    // online purchase, Payment Method = Refr Cash + COD
    // Using Rati's Recommendation
    {
      amBurst: 1046,
      amCost: 1098.3,
      amGateway: 0,
      amParcel: 0,
      amParcelCity: true,
      amRefr: 0,
      amSale: 1296,
      amSave: 250,
      amTax: 52.300000000000004,
      amTaxTCS: 10.46,
      amTaxTDS: 0,
      amTotal: 1098.3,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      camp: {
        ban: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        cbDir: 25,
        cbExi: 50,
        cbNew: 100,
        countM: 0,
        countP: 0,
        countS: 0,
        customAct: false,
        customPay: 0,
        dateE: { seconds: 1665772200, nanoseconds: 0 },
        dateS: { seconds: 1661970600, nanoseconds: 0 },
        expiry: false,
        id: "d3Kcq7I3sCdzWMPgD9Rm",
        max: 0,
        min: 999,
        name: "Campaign-32",
        paid: false,
        paused: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1661587074, nanoseconds: 781000000 },
        stage: 0,
        stoped: false,
        storeTyp: "Both",
        tX: "t1",
        type: "flat",
        upd: { seconds: 1661587074, nanoseconds: 781000000 },
      },
      cart: [{
        Q: 2,
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
      },
      {
        Q: 2,
        banners: ['https://firebasestorage.googleapis.com/v0/b/refr/o…=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948'],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "Paneer",
        code: "0406",
        content: true,
        cost: 249,
        description: "Luscious gravy thats tomato based and has a natural sweetness with a slight tang",
        id: "ojgm1JXri2o54qR0fVlw",
        price: 299,
        quota
          : 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1656594838, nanoseconds: 139000000 },
        sold: 0,
        title: "Paneer Butter Masala ",
        upd: { seconds: 1656595096, nanoseconds: 333000000 },
        vX: [],
        variants: [],
        warranty: true,
      },
      {
        Q: 1,
        banners: [],
        burn: false,
        by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        category: "some category",
        code: "21313212321312313",
        content: true,
        cost: 50,
        description: "weqweqwe",
        id: "AsovGoJ25WjdQjXNOnsa",
        price: 100,
        quota: 0,
        reqBurn: false,
        sid: "8B9ozj7aTPvywkIvVWiK",
        sin: { seconds: 1660193051, nanoseconds: 319000000 },
        sold: 0,
        title: "123",
        upd: { seconds: 1660193051, nanoseconds: 319000000 },
        vX: [],
        variants: [],
        warranty: true
      }
      ],
      code: null,
      com: { seconds: 1662635390, nanoseconds: 187000000 },
      done: { seconds: 1662635408, nanoseconds: 444000000 },
      earn: 25,
      id: "o4UKmfTD0L4z7EvkT45A",
      invoice: { amtRefrCash: 0, COD: true, useRefrCash: false },
      journey: "F2F",
      logistics: {
        PnD_cityCharge: 0,
        PnD_freeStart: 0,
        PnD_nationCharge: 0,
        PnD_parcelNotFree: false,
        addressDrop: {
          address: "801, Kanaiya kutir, 14th road, Linking Road, Khar ",
          landmark: "Near Naturals ",
          type: "home",
          zip: 400050
        },
        addressDropT: "home",
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
          zip: "400050"
        },
        addressPickT: "shop",
        email: "",
        name: "Rati ",
        phone: "9619566685",
        require: false,
        status: 20,
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
      },
      ordrTYPE: "COD",
      refr: {
        earn: 105,
        name: "Roshan",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      sid: "8B9ozj7aTPvywkIvVWiK",
      sin: { seconds: 1662635308, nanoseconds: 292000000 },
      status: 10,
      storeName: "Fit Food",
      to: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      type: [
        "COD",
        "7ARbHhRULKXaSsWV9A5sRjmAPwB2",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      upd: { seconds: 1662635308, nanoseconds: 292000000 },
      userName: "Rati "
    }


  ];
  constructor() { }

  ngOnInit(): void {
  }

  // expandOrdeR(){

  // }

  getVARIENT(v: any) {
    console.log("MANKIND", v)
    return v.type + ": " + v.name;
  }

  ordrStatus(journey: string, ordr: any, setStatus: any) {
    // this.makeChanges = true;
    // console.log(setStatus)

    // if (journey == "F2F") {

    //   if (setStatus == "Placed") {
    //     this.makeChanges = false;

    //   }

    //   if (setStatus == "Refund") {// goes to Refunded
    //     const ordrTYPE = ordr.ordrTYPE;

    //     const sid = ordr.sid;
    //     const uidV = ordr.to;
    //     const uidC = ordr.by;
    //     const uidR = ordr.refr.uid;

    //     const costUSER = ordr.amTotal;
    //     const transferRefrCash = ordr.invoice.useRefrCash ? ordr.invoice.amtRefrCash : 0;
    //     const cashback = ordr.earn;
    //     const referalCashback = ordr.refr.earn;

    //     this.pay.transferRefundF2F(
    //       sid, uidV, uidC, uidR,
    //       costUSER, transferRefrCash, cashback, referalCashback
    //     ).then(ref => {
    //       if (!ref.success) {

    //       } else {
    //         if (ordrTYPE == "RefrCASH+ONLINE" || ordrTYPE == "ONLINE") {
    //           const paymentID = ordr.gwID;
    //           const paymentAmt = ordr.amCost;
    //           this.pay.onlinePaymentRefund("IN", ordr.id, paymentID, paymentAmt, "INR").pipe(take(1)).subscribe((razorRef: any) => {
    //             console.log(razorRef)
    //             if (!razorRef || !razorRef.success) {
    //               this.auth.resource.startSnackBar("Failed to refund.")
    //             } else {
    //               const newLO = ordr.logistics;
    //               newLO.status = -1000;

    //               this.makeChanges = false;
    //               return this.pay.changeRefundOnlineF2F(ordr.id, -10, newLO, razorRef)
    //             }
    //           })

    //         } else {
    //           const newLO = ordr.logistics;
    //           newLO.status = -1000;

    //           this.makeChanges = false;
    //           return this.pay.changeRefundOnlineF2F(ordr.id, -10, newLO, {})
    //         }
    //       }
    //     })

    //     // /*
    //     //     const newLO = ordr.logistics;
    //     //     newLO.status = -1000;

    //     //     const uidC = ordr.by;
    //     //     const uidR = ordr.refr.uid;
    //     //     const amtC = ordr.earn;
    //     //     const amtR = ordr.refr.earn;
    //     //     if(!ordr.gwInfo){
    //     //       console.log("GATEWAY INFO")
    //     //       this.pay.transferRefund(ordr.id, newLO, uidC, uidR, amtC, amtR).then(() => {
    //     //         this.makeChanges = false;
    //     //       })
    //     //     }else{
    //     //       console.log("GATEWAY INFO", ordr.gwInfo)
    //     //     }
    //     // */
    //     // /*
    //     //     this.pay.changeStatusOnlineF2F(ordr.id, -10, newLO).then(() => {
    //     //       this.makeChanges = false;
    //     //     })
    //     // */
    //   }

    //   if (setStatus == "Delivered") {// goes to Delivered
    //     const newLO = ordr.logistics;
    //     newLO.status = 20;

    //     // /*
    //     // this.pay.changeStatusOnlineF2F(ordr.id, 10, newLO)
    //     // */
    //     const uidC = ordr.by;
    //     const uidR = ordr.refr.uid;
    //     const amtC = ordr.earn;
    //     const amtR = ordr.refr.earn;
    //     const sid = ordr.sid;

    //     this.pay.transferDeliveredF2F(sid, ordr.id, newLO, uidC, uidR, amtC, amtR).then(() => {
    //       // remove from reserved & add to permenent balance
    //       this.makeChanges = false;
    //     })
    //   }

    // }

    // if (journey == "DIRECT") {

    //   if (setStatus == "Placed") {
    //     this.makeChanges = false;

    //   }

    //   if (setStatus == "Refund") {// goes to Refunded
    //     const ordrTYPE = ordr.ordrTYPE;

    //     const sid = ordr.sid;
    //     const uidV = ordr.to;
    //     const uidC = ordr.by;
    //     //const uidR = ordr.refr.uid;

    //     const costUSER = ordr.amTotal;
    //     const transferRefrCash = ordr.invoice.useRefrCash ? ordr.invoice.amtRefrCash : 0;
    //     //const cashback = ordr.earn;
    //     //const referalCashback = ordr.refr.earn;

    //     this.pay.transferRefundDIRECT(
    //       sid, uidV, uidC, //uidR, 
    //       costUSER, transferRefrCash //, cashback, referalCashback
    //     ).then(ref => {
    //       if (!ref.success) {
    //         this.auth.resource.startSnackBar("Failed to refund.")
    //       } else {
    //         if (ordrTYPE == "RefrCASH+ONLINE" || ordrTYPE == "ONLINE") {
    //           const paymentID = ordr.gwID;
    //           const paymentAmt = ordr.amCost;
    //           this.pay.onlinePaymentRefund("IN", ordr.id, paymentID, paymentAmt, "INR").pipe(take(1)).subscribe((razorRef: any) => {
    //             console.log("razorRef", razorRef)
    //             if (!razorRef || !razorRef.success) {
    //               this.auth.resource.startSnackBar("Failed to refund.")
    //             } else {
    //               const newLO = ordr.logistics;
    //               newLO.status = -1000;

    //               this.makeChanges = false;
    //               return this.pay.changeRefundOnlineDIRECT(ordr.id, -10, newLO, razorRef)
    //             }
    //           })

    //         } else {
    //           const newLO = ordr.logistics;
    //           newLO.status = -1000;

    //           this.makeChanges = false;
    //           return this.pay.changeRefundOnlineDIRECT(ordr.id, -10, newLO, {})
    //         }
    //       }
    //     })

    //   }

    //   if (setStatus == "Delivered") {// goes to Delivered
    //     const newLO = ordr.logistics;
    //     newLO.status = 20;

    //     /*
    //     this.pay.changeStatusOnlineF2F(ordr.id, 10, newLO)
    //     */
    //     const uidC = ordr.by;
    //     //const uidR = ordr.refr.uid;
    //     const amtC = ordr.earn;
    //     //const amtR = ordr.refr.earn;
    //     const sid = ordr.sid;
    //     console.log("dataSend", ordr)

    //     this.pay.transferDeliveredDIRECT(sid, ordr.id, newLO, uidC, //uidR, 
    //       amtC //, amtR
    //     ).then(() => {
    //       // remove from reserved & add to permenent balance
    //       this.makeChanges = false;
    //     })
    //   }

    // }

    // if (journey == "BURN") {

    //   if (setStatus == "Placed") {
    //     this.makeChanges = false;

    //   }

    //   if (setStatus == "Refund") {// goes to Refunded
    //     const ordrTYPE = ordr.ordrTYPE;

    //     const sid = ordr.sid;
    //     const uidV = ordr.to;
    //     const uidC = ordr.by;
    //     //const uidR = ordr.refr.uid;

    //     const costUSER = ordr.amTotal;
    //     const transferRefrCash = ordr.invoice.useRefrCash ? ordr.invoice.amtRefrCash : 0;
    //     //const cashback = ordr.earn;
    //     //const referalCashback = ordr.refr.earn;

    //     this.pay.transferRefundBURN(
    //       sid, uidV, uidC, //uidR, 
    //       costUSER, transferRefrCash //, cashback, referalCashback
    //     ).then(ref => {
    //       if (!ref.success) {

    //       } else {
    //         if (ordrTYPE == "RefrCASH+ONLINE" || ordrTYPE == "ONLINE") {
    //           const paymentID = ordr.gwID;
    //           const paymentAmt = ordr.amCost;
    //           this.pay.onlinePaymentRefund("IN", ordr.id, paymentID, paymentAmt, "INR").pipe(take(1)).subscribe((razorRef: any) => {
    //             console.log(razorRef)
    //             if (!razorRef || !razorRef.success) {
    //               this.auth.resource.startSnackBar("Failed to refund.")
    //             } else {
    //               const newLO = ordr.logistics;
    //               newLO.status = -1000;

    //               this.makeChanges = false;
    //               return this.pay.changeRefundOnlineBURN(ordr.id, -10, newLO, razorRef)
    //             }
    //           })

    //         } else {
    //           const newLO = ordr.logistics;
    //           newLO.status = -1000;

    //           this.makeChanges = false;
    //           return this.pay.changeRefundOnlineBURN(ordr.id, -10, newLO, {})
    //         }
    //       }
    //     })

    //   }

    //   if (setStatus == "Delivered") {// goes to Delivered
    //     const newLO = ordr.logistics;
    //     newLO.status = 20;

    //     /*
    //     this.pay.changeStatusOnlineF2F(ordr.id, 10, newLO)
    //     */
    //     const uidC = ordr.by;
    //     //const uidR = ordr.refr.uid;
    //     const amtC = ordr.earn;
    //     //const amtR = ordr.refr.earn;
    //     const sid = ordr.sid;
    //     console.log("dataSend", ordr)

    //     this.pay.transferDeliveredBURN(sid, ordr.id, newLO, uidC, //uidR, 
    //       amtC //, amtR
    //     ).then(() => {
    //       // remove from reserved & add to permenent balance
    //       this.makeChanges = false;
    //     })
    //   }

    // }


    // if (setStatus == "Shipping") {// goes to Shipping
    //   const newLO = ordr.logistics;
    //   newLO.status = 10;

    //   if (!ordr.logistics.require) {
    //     this.pay.changeStatusOnlineStore(ordr.id, 10, newLO).then(() => {
    //       this.makeChanges = false;
    //     })
    //   } else {
    //     //this.makeChanges = false;
    //     let w = (this.auth.resource.getWidth - 16) + 'px';
    //     let h = (this.auth.resource.getHeight - 16) + 'px';

    //     const refDialog = this.auth.resource.dialog.open(OrdrShipComponent, {
    //       width: w, minWidth: "320px", maxWidth: "480px",
    //       height: h,
    //       data: { ordr: ordr },
    //       disableClose: true,
    //       panelClass: "dialogClassShipment"//, autoFocus:false
    //     });
    //     refDialog.afterClosed().subscribe(result => {
    //       if (!result || !result.success) {
    //         this.makeChanges = false;
    //       } else {
    //         this.pay.startShiping(ordr.id, result.payDataUpdate).then(() => {
    //           this.pay.changeStatusOnlineStore(ordr.id, 10, newLO).then(() => {
    //             this.makeChanges = false;
    //           })
    //         })
    //       }
    //     })
    //   }
    // }

    // if (setStatus == "Track") {// opens & updates tracking
    //   const ship = ordr.logistics.require
    //   let w = (this.auth.resource.getWidth - 16) + 'px';
    //   let h = (this.auth.resource.getHeight - 16) + 'px';

    //   const refDialog = this.auth.resource.dialog.open(OrdrTrackComponent, {
    //     width: w, minWidth: "320px", maxWidth: "480px",
    //     //height:h, 
    //     maxHeight: h,
    //     data: { ordr: ordr },
    //     //disableClose: true, 
    //     panelClass: "dialogClass"//, autoFocus:false
    //   });
    //   refDialog.afterClosed().subscribe(result => {
    //     if (!result || !result.success) {
    //       this.makeChanges = false;
    //     } else {
    //       if (!ship) {

    //       } else {
    //         // this.pay.updateShiping(ordr.id, result.payDataUpdate).then(() => {
    //         // })
    //         let status = result.status;
    //         // STATUS CODE	DESCRIPTION
    //         // 0	
    //         // 6	Shipped
    //         // 7	Delivered
    //         // 8	Cancelled
    //         // 9	RTO Initiated
    //         // 10	RTO Delivered
    //         // 11	Pending
    //         // 12	Lost
    //         // 13	Pickup Error
    //         // 14	RTO Acknowledged
    //         // 15	Pickup Rescheduled
    //         // 16	Cancellation Requested
    //         // 17	Out For Delivery
    //         // 18	In Transit
    //         // 19	Out For Pickup
    //         // 20	Pickup Exception
    //         // 21	Undelivered

    //         if (status == 0 || status == 8 || status == 16) {
    //           // x.journey == 'F2F' && x.status == -10 && x.logistics.status == -1000 || 
    //           // x.journey == 'DIRECT' && x.status == -10 && x.logistics.status == -1000 || 
    //           // x.journey == 'BURN' && x.status == -10 && x.logistics.status == -1000
    //           if (ordr.status == -10 && ordr.logistics.status == -1000) {
    //             console.log("already refunded")
    //           } else {
    //             this.ordrStatus(journey, ordr, "Refund")
    //             console.log("Done refunded")
    //           }
    //         } else {
    //           if (status == 7) {
    //             this.ordrStatus(journey, ordr, "Delivered")
    //           }
    //         }


    //       }
    //       this.makeChanges = false;
    //     }
    //   })

    // }

  }

}
