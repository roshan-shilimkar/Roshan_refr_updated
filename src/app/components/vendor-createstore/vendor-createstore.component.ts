import { Component, OnInit, ViewChild } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-vendor-createstore',
  templateUrl: './vendor-createstore.component.html',
  styleUrls: ['./vendor-createstore.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ]
})
export class VendorCreatestoreComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  selectedIndex: number = 0;
  storeLoc: any = {
    nationISO: "IND",
    stateISO: "",
    storeType: "",
    storeName: "",
    storeAbout: "",
    fullname: "",//mine.name
    phone: "", // mine.phone ? mine.phone.split('+91')[1] : ''
    email: "",// mine.email
    storeCat: "",
    storeSubCat: "",
    locAddress: "",
    locSearch: "",
    loc: {},
    postal_code: "",
    locality: "",
    administrative_area_level_2: "",
    administrative_area_level_1: "",
    point_of_interest: "",
    opensDaily: true, opensDailyS: "07:00", opensDailyE: "23:00",
    openMon: true, openMonS: "07:00", openMonE: "23:00",
    openTue: true, openTueS: "07:00", openTueE: "23:00",
    openWed: true, openWedS: "07:00", openWedE: "23:00",
    openThu: true, openThuS: "07:00", openThuE: "23:00",
    openFri: true, openFriS: "07:00", openFriE: "23:00",
    openSat: true, openSatS: "07:00", openSatE: "23:00",
    openSun: false, openSunS: "07:00", openSunE: "23:00",
    delivery: "Citywide", logistics: false, exchange: true, COD: true,
    by: "",
  }
  loadPlacesAPI = false;
  disableForm = false;
  startScan = false;
  imageUrlBanner: any = "";
  submitFirst = false;
  imageUrlLogo: any = "";
  indStates: Array<any> = [{ isos: "Onli", name: "Online" },
  { isos: "Offl", name: "Offline" },
  { isos: "Both", name: "Online + Offline" }]
  auth = {
    resource: {
      storeTypeNow: "",
      categoryList: [{ id: 1, title: "asdasdads", items: [{ id: "Onli", name: "Online", type: "1" }] }],
      env: {
        storeTyp: [
          { id: "Onli", name: "Online" },
          { id: "Offl", name: "Offline" },
          { id: "Both", name: "Online + Offlisne" }
        ],
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }


  takePicture(asdasd: any) {
    console.log(asdasd)
  }
}
