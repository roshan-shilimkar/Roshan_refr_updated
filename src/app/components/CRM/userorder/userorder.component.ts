import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


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

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.scss']
})
export class UserorderComponent implements OnInit {

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


  statusList: string[] = ['Placed', 'Delivered', 'Returned', 'Shipped', 'Out for delivery'];
  categories: string[] = [
    'Fashion',
    'Food & Beverages',
    'Salon & Spas',
    'Beauty & Grooming',
    'Electronics',
    'Health',
    'Fitness',
    'Grocery',
    'Pet Store',
    'Pharmacy',
    'Home',
    'Mom & baby',
  ];

  sub_catlist: string[] = ['beauty', 'restaurants'];
  arealist: Array<string> = ['Malad', 'Goregoan', 'Dadar'];
  PaymentTypeList: Array<string> = ['RefrCash', 'Online', 'COD']
  orderdatasource!: MatTableDataSource<orderData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.execute();
    }, 1000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.orderdatasource.filter = filterValue.trim().toLowerCase();

    if (this.orderdatasource.paginator) {
      this.orderdatasource.paginator.firstPage();
    }
  }

  execute() {
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
  }
}
