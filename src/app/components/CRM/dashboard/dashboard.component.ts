import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface marchantData {
  MerchantId: string;
  storename: string;
  phoneNo: string;
  mailid: string;
  storetype: string;
  category: string;
  Campwallet: string;
  city: string;
  status: number;
  action: string;
}

export interface userData {
  userid: string;
  U_regData: string;
  User_name: string;
  User_Mob: string;
  User_mail: string;
  city: string;
  level: number;
  Refr_E: string;
  Bus_share: string;
  Rec_used: string;
  status: number;
}

export interface orderData {
  orderid: string;
  orderdatetime: string;
  S_name: string;
  c_name: string;
  category: string;
  sub_cat: string;
  items: Array<any>;
  T_amount: number;
  ordertype: string;
  city: string;
  order_status: number;
}

export interface redeemreqdata {
  Req_id: string;
  Req_datetime: string;
  cust_name: string;
  cust_number: string;
  Store_name: string;
  store_number: string;
  Sale_type: string;
  amtotal: string;
  cashbackAmt: string;
  city: string;
  R_status: number
}

export interface usertransdata {
  tran_id: string;
  tran_datetime: string;
  cust_name: string;
  cust_contact: string;
  mer_name: string,
  mer_contact: string,
  category: string;
  sub_category: string;
  bill_amt: string;
  trans_type: string;
  cart: Array<any>;
  payment_method: string;
  refrG: string;
  refrE: string;
}

export interface mertrandata {
  tranid: string;
  tran_dateTime: string;
  storename: string;
  contact: string;
  mailid: string;
  storetype: string;
  category: string;
  subcategory: string;
  amt: string;
  transtype: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selected = 'option2';
  alldata: Array<any> = [];
  marchantColumns: string[] = [
    'MerchantId',
    'storename',
    'contact',
    'storetype',
    'status',
    'Campaign_Wallet',
    'city',
    'action',
  ];

  usercolumn: string[] = [
    'User_id',
    'User_name',
    'User_contact',
    'city',
    'level',
    'Refr_E',
    'Bus_share',
    'recc_used',
    'status',
    'action',
  ]

  Ordercolumns: string[] = [
    'orderD',
    'StoreName',
    'Cust_Name',
    'Category',
    'items',
    'Tamount',
    'City',
    'Order_status',
    'action',
  ]

  redeemColumns: string[] = [
    'Details',
    'Cust_Details',
    'Store_Details',
    'Sale_type',
    'Order_value',
    'CashbackAmt',
    'city',
    'r_status',
    'action',
  ];

  usertrancolumn: string[] = [
    'tran_id',
    'contact',
    'store',
    'category',
    'bill',
    'transationtype',
    'paymentmode',
    'refrcash_E',
    'refrcash_P',
    'action',
  ]

  mertrancolumn: string[] = [
    'tran_id',
    'store_name',
    'contact',
    'store_type',
    'Category',
    'Amount',
    'trans_type',
    'action'
  ];
  MerchantdataSource!: MatTableDataSource<marchantData>;
  UserdataSource!: MatTableDataSource<userData>;
  orderdatasource!: MatTableDataSource<orderData>;
  redeemreqdatasource!: MatTableDataSource<redeemreqdata>;
  usertrandatasource!: MatTableDataSource<usertransdata>;
  mertrandatasource!: MatTableDataSource<mertrandata>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }
  ngAfterViewInit() {
    setTimeout(() => {
      this.execute();
    }, 1000);
  }

  execute() {

    this.alldata = [{
      title: "Users",
      imgurl: "",
      count: "8,784,705",
    },
    {
      title: "Merchants",
      imgurl: "",
      count: "8,784,705",
    },
    {
      title: "Orders",
      imgurl: "",
      count: "8,784,705",
    },
    {
      title: "Campaigns",
      imgurl: "",
      count: "8,784,705",
    },
    {
      title: "Total Campaign Wallet Fund",
      imgurl: "",
      count: "8,784,705",
    },
    {
      title: "Total Store Wallet Fund",
      imgurl: "",
      count: "8,784,705",
    },
    {
      title: "Total Rewards",
      imgurl: "",
      count: "8,784,705",
    },
    {
      title: "Total Commission",
      imgurl: "",
      count: "8,784,705",
    }];


    const merchant = [{
      MerchantId: '12331231231',
      storename: 'Aakad bakad baumbay boo',
      phoneNo: '12345671234567890',
      mailid: 'abbb@gmail.com',
      storetype: 'Online+Offline',
      category: 'Food',
      status: 0,
      Campwallet: '5,000 ',
      city: 'Mumbai',
      action: 'yes',
    },
    {
      MerchantId: '12331231231',
      storename: 'Aakad bakad baumbay boo',
      phoneNo: '12345671234567890',
      mailid: 'abbb@gmail.com',
      storetype: 'Online+Offline',
      category: 'Food',
      status: 1,
      Campwallet: '5,000',
      city: 'Ahmedabad',
      action: 'yes',
    }];
    this.MerchantdataSource = new MatTableDataSource(merchant);
    this.MerchantdataSource.sort = this.sort;



    const users=[{
      userid: '1234567890',
      U_regData: '12/1/2022',
      User_name: 'Vishal Pise',
      User_Mob: '1234567890',
      User_mail: 'akkad@gmail.com',
      city: 'Ahemdabad',
      level: 1,
      Refr_E: '5000',
      Bus_share: '25',
      Rec_used: '50',
      status: 1,
    },
    {
      userid: '1234567890',
      U_regData: '12/1/2022',
      User_name: 'Vishal Pise',
      User_Mob: '1234567890',
      User_mail: 'akkad@gmail.com',
      city: 'Ahemdabad',
      level: 2,
      Refr_E: '5000',
      Bus_share: '25',
      Rec_used: '50',
      status: 0,
    }]

    this.UserdataSource = new MatTableDataSource(users);
    this.UserdataSource.sort = this.sort;

    const orders = [{
      orderid: '12345671234567',
      orderdatetime: '23/01/2022 11:23 AM',
      S_name: 'Aakad bakad baumbay boo',
      c_name: 'Brij Mohanlal Desai',
      category: 'Food',
      sub_cat: 'Restaurant',
      items: [{ itemname: 'Dal tadka' }, { itemname: 'asdadsasd' }],
      T_amount: 200,
      ordertype: 'Online',
      city: 'Ahmedabad',
      order_status: 1,
    },
    {
      orderid: '12345671234567',
      orderdatetime: '23/01/2022 11:23 AM',
      S_name: 'Aakad bakad baumbay boo',
      c_name: 'Brij Mohanlal Desai',
      category: 'Food',
      sub_cat: 'Restaurant',
      items: [{ itemname: 'Dal tadka' }],
      T_amount: 200,
      ordertype: 'COD',
      city: 'Ahmedabad',
      order_status: 2,
    },
    {
      orderid: '12345671234567',
      orderdatetime: '23/01/2022 11:23 AM',
      S_name: 'Aakad bakad baumbay boo',
      c_name: 'Brij Mohanlal Desai',
      category: 'Food',
      sub_cat: 'Restaurant',
      items: [{ itemname: 'Dal tadka' }],
      T_amount: 200,
      ordertype: 'RefrCash',
      city: 'Ahmedabad',
      order_status: 3,
    },
    {
      orderid: '12345671234567',
      orderdatetime: '23/01/2022 11:23 AM',
      S_name: 'Aakad bakad baumbay boo',
      c_name: 'Brij Mohanlal Desai',
      category: 'Food',
      sub_cat: 'Restaurant',
      items: [{ itemname: 'Dal tadka' }],
      T_amount: 200,
      ordertype: 'RefrCash+Online',
      city: 'Ahmedabad',
      order_status: 4,
    },
    {
      orderid: '12345671234567',
      orderdatetime: '23/01/2022 11:23 AM',
      S_name: 'Aakad bakad baumbay boo',
      c_name: 'Brij Mohanlal Desai',
      category: 'Food',
      sub_cat: 'Restaurant',
      items: [{ itemname: 'Dal tadka' }],
      T_amount: 200,
      ordertype: 'CASH',
      city: 'Ahmedabad',
      order_status: 5,
    }
    ];
    this.orderdatasource = new MatTableDataSource(orders);
    this.orderdatasource.sort = this.sort;


    const redeemreq = [{
      Req_id: "1234567890",
      Req_datetime: "23/1/2022 11:23am",
      cust_name: "Roshan",
      cust_number: "1234567890",
      Store_name: "Aakad bakad baumbay boo",
      store_number: "1234567890",
      Sale_type: 'F2F',
      amtotal: '999',
      cashbackAmt: '100',
      city: 'Ahmedabad',
      R_status: 1,
    },
    {
      Req_id: "1234567890",
      Req_datetime: "23/1/2022 11:23am",
      cust_name: "Roshan",
      cust_number: "1234567890",
      Store_name: "Aakad bakad baumbay boo",
      store_number: "1234567890",
      Sale_type: 'F2F',
      amtotal: '999',
      cashbackAmt: '100',
      city: 'Ahmedabad',
      R_status: 0,
    },
    {
      Req_id: "1234567890",
      Req_datetime: "23/1/2022 11:23am",
      cust_name: "Roshan",
      cust_number: "1234567890",
      Store_name: "Aakad bakad baumbay boo",
      store_number: "1234567890",
      Sale_type: 'F2F',
      amtotal: '999',
      cashbackAmt: '100',
      city: 'Ahmedabad',
      R_status: -1,
    },
    ]
    this.redeemreqdatasource = new MatTableDataSource(redeemreq);
    this.redeemreqdatasource.sort = this.sort;


    const usertran = [{
      tran_id: '1234567890',
      tran_datetime: '23/1/2022 11:23am',
      cust_name: 'Roshan',
      cust_contact: '1234567890',
      mer_name: 'Akkad Bakkad Bombay Boo',
      mer_contact: '1234567890',
      category: 'Health',
      sub_category: 'Dentist',
      bill_amt: '120000',
      trans_type: 'Direct',
      cart: [{ name: 'dal tadka' }],
      payment_method: 'Digital',
      refrG: '1200',
      refrE: '0',
    },
    {
      tran_id: '1234567890',
      tran_datetime: '23/1/2022 11:23am',
      cust_name: 'Roshan',
      cust_contact: '1234567890',
      mer_name: 'Akkad Bakkad Bombay Boo',
      mer_contact: '1234567890',
      category: 'Health',
      sub_category: 'Dentist',
      bill_amt: '120000',
      trans_type: 'Direct',
      cart: [],
      payment_method: 'Digital',
      refrG: '1200',
      refrE: '0',
    },
    {
      tran_id: '1234567890',
      tran_datetime: '23/1/2022 11:23am',
      cust_name: 'Roshan',
      cust_contact: '1234567890',
      mer_name: 'Akkad Bakkad Bombay Boo',
      mer_contact: '1234567890',
      category: 'Health',
      sub_category: 'Dentist',
      bill_amt: '120000',
      trans_type: 'Direct',
      cart: [{ name: 'dal tadka' }],
      payment_method: 'Cash',
      refrG: '1200',
      refrE: '0',
    }
    ]
    this.usertrandatasource = new MatTableDataSource(usertran);
    this.usertrandatasource.sort = this.sort;




    const mertran = [{
      tranid: '12234567890',
      tran_dateTime: '23/1/2022 11:23am',
      storename: 'Akkad Bakkad Bombay Boo',
      contact: '12234567890',
      mailid: 'akkad@gmail.com',
      storetype: 'Online',
      category: 'Health',
      subcategory: 'Dentist',
      amt: '10000',
      transtype: 'Campaign Refill',
    },
    {
      tranid: '12234567890',
      tran_dateTime: '23/1/2022 11:23am',
      storename: 'Akkad Bakkad Bombay Boo',
      contact: '12234567890',
      mailid: 'akkad@gmail.com',
      storetype: 'Offline',
      category: 'Health',
      subcategory: 'Dentist',
      amt: '10000',
      transtype: 'Campaign Refill',
    },

    {
      tranid: '12234567890',
      tran_dateTime: '23/1/2022 11:23am',
      storename: 'Akkad Bakkad Bombay Boo',
      contact: '12234567890',
      mailid: 'akkad@gmail.com',
      storetype: 'Online+Offline',
      category: 'Health',
      subcategory: 'Dentist',
      amt: '10000',
      transtype: 'Transfer',
    },

    {
      tranid: '12234567890',
      tran_dateTime: '23/1/2022 11:23am',
      storename: 'Akkad Bakkad Bombay Boo',
      contact: '12234567890',
      mailid: 'akkad@gmail.com',
      storetype: 'Online',
      category: 'Health',
      subcategory: 'Dentist',
      amt: '10000',
      transtype: 'Withdraw',
    },
    ]
    this.mertrandatasource = new MatTableDataSource(mertran);
    this.mertrandatasource.sort = this.sort;
  }


  ngOnInit(): void {
  }

}
