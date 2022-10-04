import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  highlights = false;
  phone: string = '9167452128';
  openedAccordianLists: any = [];
  deserts = false;
  showAddToCard: boolean = false;
  iMinStore = false;
  storeTyp = '';
  makeChanges = false;
  show = false;
  about_store = false;
  viewTyp = '';
  isReadMore = true;
  imagesLoaded: string[] = ['123'];
  friend = 'Aditya';
  searchTHEM = '';
  // products: any[] = [];
  proCat: string[] = ['Recommended'];
  selectedCamp: string = '';
  campaignList: any[] = [];
  storeCat = 'Televisions & Large Appliances';
  mine: any = {
    acBalC: '1000',
  };
  setJourney = {
    journey: 'F2F',
  };
  auth: any = {
    myCart: [{ prodName: 'asdasdads' }, { prodName: 'asdasdads' }],
    myLoc: {
      locality: 'Mumbai',
      postal_code: '400097',
    },
  };

  products: any[] = [
    {
      id: '123',
      category: 'Recommended',
      burn: false,
      reqBurn: false,
      title: 'Dal Tadka',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aspernatur natus? Repudiandae, nobis error autem deleniti recusandae assumenda fugiat alias debitis odio quae, earum iste hic tenetur voluptate ipsa asperiores!',
      price: '1002',
      cost: '1231',
      banners: [
        'data:image/jpeg;base64,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',
      ],
    },
    {
      id: '123',
      category: 'Recommended',
      burn: false,
      reqBurn: false,
      title: 'Dal Tadka',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aspernatur natus? Repudiandae, nobis error autem deleniti recusandae assumenda fugiat alias debitis odio quae, earum iste hic tenetur voluptate ipsa asperiores!',
      price: '1002',
      cost: '1231',
      banners: [],
    },
  ];

  campaign = [
    {
      id: '123445123',
      type: 'percent',
      cbNew: 30,
      min: 1000,
      max: 100000,
      dateS: 1000000,
      dateE: 1231320,
    },
  ];

  currentLocation = {
    area: 'Malad',
    locality: 'Mumbai',
    lat: 17.23123123123,
    lon: 18.23131321321,
  };
  store = {
    logo: '',
    name: 'Fit Foods',
    banner: '',
    banners: ['', ''],
    typeORDER: {
      refund: false,
      phoneHide: false,
    },
    schedule: {
      opensDaily: true,
      openBreak: false,
    },
    about:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aspernatur natus? Repudiandae, nobis error autem deleniti recusandae assumenda fugiat alias debitis odio quae, earum iste hic tenetur voluptate ipsa asperiores!',
    userInfo: {
      soIG: true,
      soFB: true,
      soWA: true,
    },
    loc: '',
  };

  constructor(
    private dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.storeTyp = 'Onli';
    // this.storeTyp = 'Offl';
    // this.storeTyp = 'Both';

    if (this.storeTyp == 'Onli') {
      this.viewTyp = 'Online';
    }
    if (this.storeTyp == 'Offl') {
      this.viewTyp = 'Offline';
    }
    if (this.storeTyp == 'Both') {
      this.viewTyp = 'Offline';
    }
  }

  howRedeem(): void {}

  calculateStartExpiry(fsDateS: any, fsDateE: any) {
    return true;
  }

  getWidth() {
    var state = 0;
    var stateMax = 2;
    //state -= 1;
    return (state / stateMax) * 100 + '%';
  }

  showCat(products: any[], category: string) {
    return true;
  }

  get getheight() {
    return window.innerHeight;
  }
  get getwidth() {
    return window.innerWidth;
  }

  openCart() {}

  startAtStoreF2F(a: any) {}

  mapLink(storeName: string, lat: number, lon: number) {
    return (
      'https://maps.google.com/?q=' +
      lat +
      ',' +
      lon +
      '&title=' +
      storeName +
      '&content=' +
      'This is a Refr Club Store'
    );
  }

  storeLoc(location: any) {
    // let isPhone = this.getwidth < 768;
    // let w = isPhone ? this.getwidth + 'px' : '480px';
    // let h = isPhone ? this.getheight + 'px' : '98vh';
    // const refDialog = this.dialog.open(StorelocateComponent, {
    //   width: w,
    //   minWidth: '95vw',
    //   maxWidth: '200px',
    //   // height: '400px',
    //   hasBackdrop: true,
    //   disableClose: false,
    //   panelClass: 'storepage_address', //, autoFocus:false
    // });
    // refDialog.afterClosed().subscribe(() => {});
  }

  productpop(): void {
    // this._bottomSheet.open(StorevarientComponent, {
    //   panelClass: 'wallethowitworks',
    // });
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  getCartItemLength(id: string) {
    // if (!this.auth.myCart.includes(id)) {
    //   return 0;
    // }
    // else {
    //   let x = 0;
    //   for (let i = 0; i < this.auth.myCart.length; i++) {
    //     if (this.auth.myCart[i] == id) { x++ }
    //     if ((i + 1) == this.auth.myCart.length) {
    //       return x;
    //     }
    //   }
    // }
    return 0;
  }

  getSchedule(schedule: any) {
    if (schedule.opensDaily) {
      if (!schedule.openBreak) {
        return 'Daily : ' + schedule.openMonS + ' to ' + schedule.opensDailyE;
      } else {
        const daysO =
          schedule.openMon &&
          schedule.openTue &&
          schedule.openWed &&
          schedule.openThu &&
          schedule.openFri &&
          schedule.openSat
            ? 'Mon-Sat'
            : (schedule.openMon ? 'Mon,' : '') +
              (schedule.openTue ? 'Tue,' : '') +
              (schedule.openWed ? 'Wed,' : '') +
              (schedule.openThu ? 'Thu,' : '') +
              (schedule.openFri ? 'Fri,' : '') +
              (schedule.openSat ? 'Sat,' : '') +
              (schedule.openSun ? 'Sun,' : '') +
              '';
        const daysC =
          '' +
          (!schedule.openMon ? 'Mon,' : '') +
          (!schedule.openTue ? 'Tue,' : '') +
          (!schedule.openWed ? 'Wed,' : '') +
          (!schedule.openThu ? 'Thu,' : '') +
          (!schedule.openFri ? 'Fri,' : '') +
          (!schedule.openSat ? 'Sat,' : '') +
          (!schedule.openSun ? 'Sun,' : '') +
          '';
        return (
          daysO +
          ' : ' +
          schedule.openMonS +
          '-' +
          schedule.openBreakS +
          ' & ' +
          schedule.openBreakE +
          '-' +
          schedule.opensDailyE +
          (daysC ? ' ' + daysC + ' closed' : '')
        );
      }
    } else {
      return 'XXX';
    }
  }

  openBottomSheet(): void {
    // this._bottomSheet.open(RedeemonlineComponent);
    // this._bottomSheet.open(RedeemofflineComponent);
  }

  howitworks() {
    // this._bottomSheet.open(OnoffstorehowitworksComponent, {
    //   panelClass: 'storepage',
    // });
  }

  changeViewTyp(segmentValue: string) {
    this.viewTyp = segmentValue;
  }

  termncondition(): void {
    // this._bottomSheet.open(ShoptermnconditionComponent);
  }

  showAndHideAddToCard(id: any, variants: any, a: boolean, x: any) {
    this.auth.myCart.push(id);
    this.showAddToCard = true;
  }

  showAccordion(value: string) {
    let index = this.openedAccordianLists.indexOf(value);
    if (index === -1) {
      this.openedAccordianLists.push(value);
    } 
    else {
      this.openedAccordianLists.splice(index, 1);
    }
  }
  openDetail(id: string, variants: any, x: any) {}

  checkSearch(title: string) {}

  redeem_cta() {
    // this._bottomSheet.open(RedeemsheetComponent, {
    //   panelClass: 'redeem_cta',
    // });
  }

  totalCost() {}
}