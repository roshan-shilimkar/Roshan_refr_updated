import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustOrderDetailsComponent } from '../cust-order-details/cust-order-details.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  ordr: any = {
    setShortID: true,
    invoice: {
      COD: false,
      amtRefrCash: 402.5,
      useRefrCash: true,
    },
    gwInfo: {
      refund_status: null,
      fee: 41,
      error_source: null,
      error_step: null,
      method: 'upi',
      error_reason: null,
      contact: '+919833006431',
      invoice_id: null,
      email: 'shraddhakarkare10@gmail.com',
      error_code: null,
      vpa: '9833006431@paytm',
      notes: {
        description: 'descriptionX',
      },
      error_description: null,
      amount_refunded: 0,
      bank: null,
      status: 'captured',
      description: 'payment to The Dessert Bliss ',
      acquirer_data: {
        rrn: '228191946452',
      },
      wallet: null,
      international: false,
      amount: 1750,
      order_id: 'order_KRM57z5SiCf79G',
      card_id: null,
      entity: 'payment',
      currency: 'INR',
      created_at: 1665249181,
      tax: 6,
      id: 'pay_KRM6tsC9jwSW8h',
      captured: true,
    },
    storeName: 'The Dessert Bliss ',
    amTaxTCS: 4,
    logistics: {
      typeSuCat: 'sc-food_and_beverages-bakery',
      PnD_nationCharge: 0,
      PnD_parcelNotFree: false,
      PnD_cityCharge: 0,
      email: '',
      addressDrop: {
        zip: 400057,
        type: 'home',
        address: 'Parmar building, Paranjape road ',
        landmark: 'Near naturals ',
      },
      typeOrdr: 'F2F_ONLINE',
      typeCat: 'food_and_beverages',
      PnD_freeStart: 0,
      typeShop: 'Both',
      phone: '9833006431',
      addressDropT: 'home',
      name: 'Shraddha ',
      status: 20,
      addressPick: {
        city: 'Mumbai Suburban',
        region: 'Maharashtra',
        lat: 19.1072841,
        line1: 'Shop no 1, nemesis nivara',
        area: 'The dessert blis',
        state: 'MH',
        id: 'IND_MH_1655471687916',
        nation: 'IND',
        locality: 'Mumbai',
        lon: 72.8484893,
        line2: '',
        zip: '400057',
      },
      addressPickT: 'shop',
      require: false,
    },
    sin: {
      seconds: 1665249075,
      nanoseconds: 528000000,
    },
    amParcelCity: true,
    earn: 40,
    amParcel: 0,
    cart: [
      {
        price: 400,
        upd: {
          seconds: 1657707608,
          nanoseconds: 261000000,
        },
        quota: 0,
        by: 'getQSiNTbHWPniXzmo7N3SL87ds1',
        description: 'Medium (Half Kg)',
        title: 'Double Chocolate',
        content: true,
        burn: false,
        Q: 1,
        cost: 400,
        reqBurn: false,
        sin: {
          seconds: 1657707608,
          nanoseconds: 261000000,
        },
        warranty: true,
        id: 'DMYcpXCD2FsHN5yjQOHw',
        sid: 'YnIzpSDLQNJ4XZBbjJo2',
        banners: [],
        variants: [],
        category: 'Dessert Bliss Exotic',
        sold: 0,
        code: '-',
        vX: [],
      },
    ],
    to: 'getQSiNTbHWPniXzmo7N3SL87ds1',
    type: [
      'RefrCASH+ONLINE',
      'GdViTqOv51YIsNxHV58LpXpx99n1',
      'getQSiNTbHWPniXzmo7N3SL87ds1',
      'YnIzpSDLQNJ4XZBbjJo2',
      'addORDER',
      'storeORDER',
      'clientAc',
      'F2F',
      'A000IC',
    ],
    amSave: 402.5,
    sid: 'YnIzpSDLQNJ4XZBbjJo2',
    amRefr: 0,
    status: 10,
    amCost: 17.5,
    journey: 'F2F',
    amGateway: 0.413,
    refr: {
      name: 'Rati ',
      uid: '7ARbHhRULKXaSsWV9A5sRjmAPwB2',
      earn: 20,
    },
    upd: {
      seconds: 1665249075,
      nanoseconds: 528000000,
    },
    by: 'GdViTqOv51YIsNxHV58LpXpx99n1',
    amBurst: 400,
    gwSIGN: 'f17f5295417b2fe1a64196874d5834e33990fff0a204d04e8e6e4cb5109ac918',
    ordrTYPE: 'RefrCASH+ONLINE',
    gwORDR: 'order_KRM57z5SiCf79G',
    amTaxTDS: 0,
    amSale: 400,
    id: 'TYDfnD4dTT9YAF03Z0YH',
    gwID: 'pay_KRM6tsC9jwSW8h',
    userName: 'Shraddha ',
    amTax: 20,
    com: {
      seconds: 1665249222,
      nanoseconds: 267000000,
    },
    camp: {
      dateS: {
        seconds: 1663785000,
        nanoseconds: 0,
      },
      cbExi: 20,
      tX: 't1',
      stoped: false,
      stage: 0,
      customAct: false,
      paused: false,
      sin: {
        seconds: 1663843375,
        nanoseconds: 129000000,
      },
      dateE: {
        seconds: 1677522600,
        nanoseconds: 0,
      },
      customPay: 0,
      expiry: false,
      min: 400,
      cbDir: 20,
      storeTyp: 'Both',
      countS: 0,
      upd: {
        seconds: 1663843375,
        nanoseconds: 129000000,
      },
      cbNew: 40,
      max: 0,
      sid: 'YnIzpSDLQNJ4XZBbjJo2',
      id: 'lPaBMPkVF5vkwzaPYCn9',
      countM: 0,
      type: 'flat',
      name: 'Campaign',
      paid: false,
      by: 'getQSiNTbHWPniXzmo7N3SL87ds1',
      ban: false,
      countP: 0,
    },
    code: 'A000IC',
    shortID: 'A000Ic',
    amTotal: 420,
  };

  show = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  get getHeight() {
    return window.innerHeight;
  }
  get getWidth() {
    return window.innerWidth;
  }

  orderdetails() {
    let isPhone = this.getWidth < 768;
    let w = isPhone ? this.getWidth + 'px' : '480px';
    let h = isPhone ? this.getHeight + 'px' : '98vh';
    const refDialog = this.dialog.open(CustOrderDetailsComponent, {
      width: w,
      minWidth: '320px',
      maxWidth: '480px',
      height: h,
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout', //, autoFocus:false
      data: this.ordr,
    });
    refDialog.afterClosed().subscribe(() => {});
  }
}
