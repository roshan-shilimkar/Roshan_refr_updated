import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
  Merch_id: string;
  Merch_date: string;
  store_name: string;
  store_Phone: string;
  store_mail: string;
  store_type: string;
  store_cat: string;
  activestatus: number;
  camp_wallet: string;
  city: string;
}

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  displayedColumns: string[] = [
    'Mer_id',
    'Store_name',
    'contact',
    'storetype',
    'status',
    'Camp_wallet',
    'city',
    'action',
  ];
  MerchanrdataSource!: MatTableDataSource<UserData>;

  toppings = new FormControl();

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

  sub_cat = new FormControl();

  sub_catlist: string[] = ['beauty', 'restaurants'];

  state = new FormControl();

  state_list: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh ',
    'Chhattisgarh',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    '	Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    '	Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Punjab',
    'Rajasthan',
    'Sikkim	',
    '	Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    '	West Bengal',
  ];

  arealist:Array<string>=['Malad','Goregoan','Dadar']

  city = new FormControl();

  city_list: string[] = ['Kalyan'];

  area = new FormControl();

  area_list: string[] = ['Tisgaon'];

  status = new FormControl();

  statusList: string[] = ['Acive ', 'Inactive'];

  LocationList:Array<string>=['International','National']
  storetypelist:Array<string>=['Online','Offline','Online + Offline'];
  WalleteList:Array<string>=['0 - 1000','1000 - 5000','5000 - 10,000','10,000 - 100,000']
  CampTypeList:Array<string>=['Subscription Base','Reward Base']

  level = new FormControl();

  level_list: string[] = ['1', '2'];
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
    this.MerchanrdataSource.filter = filterValue.trim().toLowerCase();

    if (this.MerchanrdataSource.paginator) {
      this.MerchanrdataSource.paginator.firstPage();
    }
  }

  execute() {
    const users = [
      {
        Merch_id: '1234567890',
        Merch_date: '12/1/2022',
        store_name: 'Aakad bakad baumbay boo',
        store_Phone: '1234567890',
        store_mail: 'akkad@gmail.com',
        store_type: 'Online+Offline',
        store_cat: 'Food',
        activestatus: 0,
        camp_wallet: '5,000',
        city: 'Ahmedabad',
      },
      {
        Merch_id: '1234567890',
        Merch_date: '12/1/2022',
        store_name: 'Aakad bakad baumbay boo',
        store_Phone: '1234567890',
        store_mail: 'akkad@gmail.com',
        store_type: 'Online+Offline',
        store_cat: 'Food',
        activestatus: 1,
        camp_wallet: '5,000',
        city: 'Ahmedabad',
      },
      {
        Merch_id: '1234567890',
        Merch_date: '12/1/2022',
        store_name: 'Aakad bakad baumbay boo',
        store_Phone: '1234567890',
        store_mail: 'akkad@gmail.com',
        store_type: 'Online+Offline',
        store_cat: 'Food',
        activestatus: 0,
        camp_wallet: '5,000',
        city: 'Ahmedabad',
      },
      {
        Merch_id: '1234567890',
        Merch_date: '12/1/2022',
        store_name: 'Aakad bakad baumbay boo',
        store_Phone: '1234567890',
        store_mail: 'akkad@gmail.com',
        store_type: 'Online+Offline',
        store_cat: 'Food',
        activestatus: 1,
        camp_wallet: '5,000',
        city: 'Ahmedabad',
      },
      {
        Merch_id: '1234567890',
        Merch_date: '12/1/2022',
        store_name: 'Aakad bakad baumbay boo',
        store_Phone: '1234567890',
        store_mail: 'akkad@gmail.com',
        store_type: 'Online+Offline',
        store_cat: 'Food',
        activestatus: 0,
        camp_wallet: '5,000',
        city: 'Ahmedabad',
      },
      {
        Merch_id: '1234567890',
        Merch_date: '12/1/2022',
        store_name: 'Aakad bakad baumbay boo',
        store_Phone: '1234567890',
        store_mail: 'akkad@gmail.com',
        store_type: 'Online+Offline',
        store_cat: 'Food',
        activestatus: 1,
        camp_wallet: '5,000',
        city: 'Ahmedabad',
      },
    ];
    this.MerchanrdataSource = new MatTableDataSource(users);
    this.MerchanrdataSource.paginator = this.paginator;
    this.MerchanrdataSource.sort = this.sort;
    // this.auth.getStoreList(100).subscribe((users: any) => {
    //   console.log('List: ', users);
    //   this.dataSource = new MatTableDataSource(users);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }
}
