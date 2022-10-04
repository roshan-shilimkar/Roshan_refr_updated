import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  heading1: string;
  des: string;
  mrpprice: string;
  dspprice: string;
  quantity: string;

  action: string;
}

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.scss']
})
export class MerchantProfileComponent implements OnInit {

    // ===========

    types: Food[] = [
      // { value: 'electronic-0', viewValue: 'Electronic' },
      { value: 'a-1', viewValue: 'Television & Large appliances' },
      { value: 'a-2', viewValue: 'Accessories' },
      { value: 'a-3', viewValue: 'Mobile phones' },
      { value: 'a-4', viewValue: 'Computer & Tablets' },
    ];
  
    // --------------
  
    selected = 'option2';
  
    displayedColumns: string[] = [
      'heading1',
  
      'mrpprice',
      'dspprice',
      'quantity',
      'action',
    ];
    dataSource!: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    ngAfterViewInit() {
      setTimeout(() => {
        this.execute();
      }, 1000);
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
    execute() {
      const users = [
        {
          heading1: 'Iphone13',
          des: 'loremasdaasdasdajsdjaddasjiasdjnsdnj',
          mrpprice: '100',
          dspprice: '100',
          quantity: '100',
          action: 'yes',
        },
      ];
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // this.auth.getStoreList(100).subscribe((users: any) => {
      //   console.log('List: ', users);
      //   this.dataSource = new MatTableDataSource(users);
      //   this.dataSource.paginator = this.paginator;
      //   this.dataSource.sort = this.sort;
      // });
    }
  
    // ----------------
    openFile() {
      document.querySelector('input')?.click();
    }
    handle(e: any) {
      console.log('Change input file');
    }
  
    toppings = new FormControl();
  
    toppingList: string[] = [
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
  
    store = new FormControl();
  
    storeList: string[] = ['Online', 'Offline', 'Online+Offline'];
  
    burn = new FormControl();
  
    burnList: string[] = ['Yes', 'No'];
  
    sub_cat = new FormControl();
  
    sub_catlist: string[] = ['Men', 'Women', 'Kids', 'Footwear', 'Accessories'];
  
    sa = new FormControl();
  
    saList: string[] = ['Active', 'Inactive'];



  constructor() { }

  ngOnInit(): void {
  }

}
