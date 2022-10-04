import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resource.service';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

export interface UserData {
  id: string;
  name: string;
  //progress: string;
  //fruit: string;
}
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  displayedColumns: string[] = [
    'Tran_id', 'Phone_no', 'DAT', 'CatAsubCat', 'Bill', 'Type', 'PayMode', 'Refr_eard', 'Refr_Paid', 'manage'
  ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  payments: any = [

    //add fund transactions
    {
      amCamp: 5126,
      amCost: 5126,
      amRate: [{
        cost: 5000,
        refill: 4300,
        refr: 700,
        refrGST: 18,
        refrGw: 126,
        refrGwGST: 18,
        tX: "t1",
        total: 5126,
      },
      {
        cost: 10000,
        refill: 8800,
        refr: 1200,
        refrGST: 18,
        refrGw: 216,
        refrGwGST: 18,
        tX: "t2",
        total: 10216,
      },
      {
        cost: 15000,
        refill: 13500,
        refr: 1500,
        refrGST: 18,
        refrGw: 270,
        refrGwGST: 18,
        tX: "t3",
        total: 15270,
      },
      {
        cost: 20000,
        refill: 18000,
        refr: 2000,
        refrGST: 18,
        refrGw: 360,
        refrGwGST: 18,
        tX: "t4",
        total: 20360,
      }
      ],
      amSale: 0,
      amSave: 0,
      amTotal: 5126,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      com: { seconds: 1659626237, nanoseconds: 912000000 },
      gwID: "pay_K1bRsNpnlWI2Wg",
      gwInfo: {
        acquirer_data: { auth_code: '100843' },
        amount: 512600,
        amount_refunded: 0,
        bank: null,
        captured: true,
        card_id: "card_K1bRsa2YeZeL0F",
        contact: "+919619566685",
        created_at: 1659626355,
        currency: "INR",
        description: "Campaign Refill",
        email: "chadha.rati@gmail.com",
        entity: "payment",
        error_code: null,
        error_description: null,
        error_reason: null,
        error_source: null,
        error_step: null,
        fee: 12098,
        id: "pay_K1bRsNpnlWI2Wg",
        international: false,
        invoice_id: null,
        method: "card",
        notes: { description: 'descriptionX' },
        order_id: "order_K1bPsBbYnMu68s",
        refund_status: null,
        status: "captured",
        tax: 1846,
        token_id: "token_K1bRshgjMH7thn",
        vpa: null,
        wallet: null,
      },
      gwORDR: "order_K1bPsBbYnMu68s",
      gwSIGN: "396e15828b484de280a064e9846c5e2b48cc6f783c83b1824c2665b3353315e5",
      id: "scg0SjCujG6iqbLfB2xO",
      sin: { seconds: 1659626237, nanoseconds: 912000000 },
      status: 10,
      to: "Δ",
      type: ['addBalance', 'campaignBalance', 'vendorAc', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2'],
      upd: { seconds: 1659626237, nanoseconds: 912000000 },
    },
    // add fund transactions Failed
    {
      amCamp: 5126,
      amCost: 5126,
      amRate: [{
        cost: 5000,
        refill: 4300,
        refr: 700,
        refrGST: 18,
        refrGw: 126,
        refrGwGST: 18,
        tX: "t1",
        total: 5126,
      },
      {
        cost: 10000,
        refill: 8800,
        refr: 1200,
        refrGST: 18,
        refrGw: 216,
        refrGwGST: 18,
        tX: "t2",
        total: 10216,
      },
      {
        cost: 15000,
        refill: 13500,
        refr: 1500,
        refrGST: 18,
        refrGw: 270,
        refrGwGST: 18,
        tX: "t3",
        total: 15270,
      },
      {
        cost: 20000,
        refill: 18000,
        refr: 2000,
        refrGST: 18,
        refrGw: 360,
        refrGwGST: 18,
        tX: "t4",
        total: 20360,
      }
      ],
      amSale: 0,
      amSave: 0,
      amTotal: 5126,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      com: { seconds: 1659626173, nanoseconds: 432000000 },
      id: "SkFtywFJk2ydvUHoIptB",
      sin: { seconds: 1659626173, nanoseconds: 432000000 },
      to: "Δ",
      type: ['addBalance', 'campaignBalance', 'vendorAc', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2'],
      upd: { seconds: 1659626173, nanoseconds: 432000000 },
    },
    //camp. refil 
    {
      amCost: 500,
      amGive: 500,
      amPaid: 500,
      amRate: {cutRate: 0, refill: 500, pay: 500, cut: 0},
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      com: {seconds: 1659597444, nanoseconds: 2000000},
      id: "aoSD1Q5UnqbezJCpfgLA",
      sin: {seconds: 1659597444, nanoseconds: 2000000},
      status: 10,
      to: "Δ",
      type: ['addBalance', 'campaignBalance', 'vendorAc', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', 'Dipeshin', 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', 'admin'],
      upd: {seconds: 1659597444, nanoseconds: 2000000},
      via: {by: 'zn99lfRpB4bDy4KBvu4K1QpSMBk2', name: 'Dipeshin'},
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      earn: 50,
      cart: [],
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 0, useRefrCash: false },
      status: 10,
      journey: "DIRECT",
      storeName: "Fit Foods",
      refr: null,
      ordrTYPE: "CASH",
      userName: "Roshan"
    },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      earn: 50,
      cart: [],
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 0, useRefrCash: false },
      status: 10,
      journey: "F2F",
      storeName: "Fit Foods",
      refr: {
        earn: 25,
        name: "Rati",
        uid: "7ARbHhRULKXaSsWV9A5sRjmAPwB2"
      },
      ordrTYPE: "CASH",
      userName: "Roshan",
    },








    // {
    //   amCost: 0,
    //   amSale: 0,
    //   amSave: 0,
    //   amTotal: 500,
    //   earn: 50,
    //   cart: [],
    //   id: "bDjUjiz0OxImLPAlc5S4",
    //   status: 10,
    //   invoice: { COD: false, amtRefrCash: 0, useRefrCash: false },
    //   journey: "DIRECT",
    //   storeName: "Fit Foods",
    //   refr: null,
    //   ordrTYPE: "ONLINE",
    //   userName: "Roshan",
    // },
    {
      amCost: 0,
      amSale: 0,
      amSave: 0,
      amTotal: 500,
      earn: 50,
      cart: [],
      id: "bDjUjiz0OxImLPAlc5S4",
      status: 10,
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
      earn: 50,
      cart: [],
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 100, useRefrCash: true },
      status: 10,
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
      earn: 50,
      cart: [],
      id: "bDjUjiz0OxImLPAlc5S4",
      invoice: { COD: false, amtRefrCash: 100, useRefrCash: true },
      status: 10,
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
        phone: "9167452128",
        typeCat: "food_and_beverags",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
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
      status: 10,
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
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
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
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
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
        phone: "9167452128",
        typeCat: "food_and_beverages",
        typeOrdr: "DIRECT_ONLINE",
        typeShop: "Both",
        typeSuCat: "sc-food_and_beverages-restaurants"
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
  id?: number;
  constructor(private router:Router,private actRoute: ActivatedRoute , public resource: ResourceService, public dialog: MatDialog) {
    // const aR = this.actRoute.snapshot.params;
    // this.id = aR["id"] || null;
    this.id = 1
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.execute();
    }, 1000)
  }

  execute() {
    this.dataSource = new MatTableDataSource(this.payments);
  }

  oepndetails(data: any) {
    // console.log("data"+ JSON.stringify(data));
    // this.router.navigate(['/CRMTransDetail'],{queryParams: {state: {highlight:data}}});
    const refDialog = this.dialog.open(TransactionDetailsComponent, {
      width: '90%',
      minWidth: '90%',
      maxWidth: '90%',
      height: '80%',
      hasBackdrop: true,
      disableClose: false,
      panelClass: 'dialogLayout',
      data: { trandata: data, id: this.id },
    });
    refDialog.afterClosed().subscribe(() => { });
  }
}
