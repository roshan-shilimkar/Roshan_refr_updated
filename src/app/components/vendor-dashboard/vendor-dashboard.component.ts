import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareAdvocacyComponent } from 'src/app/share-advocacy/share-advocacy.component';
import { ShareLoyaltyComponent } from 'src/app/share-loyalty/share-loyalty.component';

export interface camptype {
  sid: string,
  dateS: any,
  min: number,
  max: number,
  countM: number,
  storeTyp: string,
  ban: false,
  paid: false,
  id: string,
  customAct: false,
  expiry: false,
  dateE: any,
  cbDir: number,
  sin: any,
  by: string,
  countP: number,
  cbExi: number,
  cbNew: number,
  countS: number,
  stoped: false,
  stage: number,
  type: string,
  tX: string,
  paused: false,
  name: string,
  upd: any,
  customPay: number,
}

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit {
  camparr: Array<camptype> = [];
  enteredamt: number;
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

    //BURN online Shipping && logistics not require
    {
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "invoice": {
        "COD": false,
        "useRefrCash": true,
        "amtRefrCash": 2.1
      },
      "earn": 0,
      "status": 10,
      "amTaxTDS": 0,
      "shortID": "A000NE",
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amRefr": 0.14,
      "setShortID": true,
      "amSale": 10,
      "ordrTYPE": "RefrCASH",
      "amTax": 0.1,
      "amSave": 10.1,
      "refr": null,
      "amCost": 0,
      "amBurst": 2,
      "storeName": "Fit Food",
      "amParcelCity": false,
      "amTaxTCS": 0.02,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amTotal": 2.1,
      "logistics": {
        "phone": "8879751140",
        "addressPick": {
          "locality": "Mumbai",
          "id": "IND_MH_1648672299398",
          "state": "MH",
          "lon": 72.83105909999999,
          "area": "Dent Heal",
          "city": "Mumbai Suburban",
          "nation": "IND",
          "zip": "400050",
          "lat": 19.0662066,
          "region": "Maharashtra",
          "line1": "Dipesadsadas sadasdas",
          "line2": ""
        },
        "PnD_freeStart": 0,
        "PnD_cityCharge": 0,
        "status": 10,
        "PnD_nationCharge": 0,
        "addressDrop": {
          "zip": 400056,
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "landmark": "Gagandeep bus stop",
          "type": "work"
        },
        "email": "",
        "PnD_parcelNotFree": false,
        "typeCat": "food_and_beverages",
        "name": "Aditya",
        "typeShop": "Both",
        "typeOrdr": "BURN",
        "require": false,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "addressDropT": "work",
        "addressPickT": "shop"
      },
      "upd": {
        "seconds": 1665570039,
        "nanoseconds": 647000000
      },
      "id": "GRMDD8bREgOYsqezjoXE",
      "amGateway": 0,
      "com": {
        "seconds": 1665570039,
        "nanoseconds": 647000000
      },
      "code": null,
      "journey": "BURN",
      "amParcel": 0,
      "camp": null,
      "cart": [
        {
          "Q": 1,
          "relate": [],
          "content": true,
          "quota": 0,
          "description": "rice",
          "burn": true,
          "vX": [],
          "reqBurn": false,
          "burnCat": "food_and_beverages",
          "burnSpec": "abc",
          "flash": false,
          "variants": [],
          "category": "Dal",
          "warranty": true,
          "burnHigh": "abc",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
          "price": 10,
          "id": "AH1YkgZwvrKZo1zcuDN9",
          "storeINFO": {
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "sin": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "typeORDER": {
              "COD": true,
              "freeStart": 0,
              "phoneHide": true,
              "exchange": false,
              "return": false,
              "logistics": false,
              "refund": false,
              "freeParcel": false,
              "delivery": "Nationwide",
              "nationCharge": 0,
              "cityCharge": 0
            },
            "vOrdr": 23,
            "type": "Both",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "cashback": 80,
            "shareUrlX1": "https://refrclub.com/o/WoQJ",
            "addedDynamicLinkP1": true,
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "about": "About the store",
            "id": "8B9ozj7aTPvywkIvVWiK",
            "email": "dipeshbhoir@hotmail.com",
            "vGave": 1390,
            "shareUrlB1": "https://refrclub.com/o/4Yif",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
            "loc": [
              {
                "line2": "",
                "lon": 72.83105909999999,
                "region": "Maharashtra",
                "state": "MH",
                "area": "Dent Heal",
                "line1": "Dipesadsadas sadasdas",
                "zip": "400050",
                "nation": "IND",
                "city": "Mumbai Suburban",
                "id": "IND_MH_1648672299398",
                "lat": 19.0662066,
                "locality": "Mumbai"
              },
              {
                "lon": 72.8213950683594,
                "line1": "sadas sadasdasd sdasdas",
                "locality": "Mumbai",
                "state": "MH",
                "lat": 19.134840193193707,
                "id": "IND_MH_1656024949912",
                "zip": "400053",
                "line2": "",
                "city": "Mumbai Suburban",
                "nation": "IND",
                "region": "Maharashtra",
                "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India"
              }
            ],
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
            "phone": "9876543210",
            "userInfo": {
              "axess": [
                "phone"
              ],
              "soWA": "9876543210",
              "acBalV": 4567.523859999997,
              "storeCam": [
                "2GHohG0jEfELHb30c1s7",
                "i9MvNIRSZEpyhp05UIws",
                "b8fHqM0fyh3EJfGARu3B",
                "69Hf6TISpLg3SDwpYyKy",
                "2VS4N7OkRrM5pHfwCNuV",
                "GBJPmnJ4Q1oA1ynW1brZ",
                "rDeB5DwD97Ff1NpLzFdj",
                "vJEzPDAJ5koqdbGa7k0N",
                "PJcK0Xh43tLpR44xtB6J",
                "FkvmAw4pKGhcSrFULyG2",
                "dLclMuk5iBysJvOoWRKi",
                "ZPkNWVk1trHm3b8GBr4F",
                "iWIXIPHAiDIiA9Euexst",
                "SBV6Jpa7a2844xyTxDEO",
                "1igU0j5Cxxah1ZzYW0oT",
                "OgkREW5oDc40YO1psg6q",
                "6YEVFDcrnwwGKc4IRPqX",
                "qc1ymcPpmQ8yEhHM8zLt",
                "2bwi1jsjci7YySD6FWHi",
                "x605L2J7JyTzfmtgFL7M",
                "TyWGWqQiOSEG0f4XSGju",
                "yKTiNocUlsW92jUlr0P1",
                "XQBQVol6L4AFU0wdRluS",
                "tt5W2R17MPqrjJA7azDi",
                "NhtKi3RTN2dLVzcH2hSu",
                "dO3WaZ05d3hBgnlt0Fj2",
                "sB3sHKwlhmqpkVPm2M1F",
                "bSOHjFq1z3di0kl7tDOK",
                "fjkXn0gPGux5uYQADX6v",
                "Muj3jGOZ7jOWeELzLe0Y",
                "5kaSYObDf7s1pRxvqp0s",
                "d3Kcq7I3sCdzWMPgD9Rm",
                "9e64iZ7UQ538nKB285XT",
                "IpQwjUjBAJW8eyMSDDWp",
                "xdiMTvN28RncaBT5HHms",
                "nRtRMxxicFvlARWiSR8y",
                "w4ELXiJiAiPY4RodAz7o",
                "78SEsrN2FWWM1NCSzRfk",
                "IzSNW9mwHpHHyZ6C9cAD"
              ],
              "BankUPI": {
                "fund_account_id": "fa_K9hVBLRtX776iF",
                "contact_id": "cont_K9KglWSOWnTNTY",
                "verified": true,
                "handle": "dbs",
                "active": true,
                "username": "dipesious",
                "address": "dipesious@dbs"
              },
              "soIG": "dipesious",
              "name": "Dipeshin",
              "acBalGivenC": 1980,
              "cashback": 80,
              "acBalVp": 16000,
              "ban": false,
              "sin": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "display": "",
              "soFB": "dip",
              "acBalC": 1113.5500000000002,
              "emails": [],
              "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "coin": "INR",
              "storeLoc": [
                "8B9ozj7aTPvywkIvVWiK"
              ],
              "note": [],
              "iso": "IND",
              "phone": "+919876543210",
              "email": "dipesious@hotmail.com",
              "acBalP": 0,
              "addr": [
                {
                  "type": "work",
                  "landmark": "xyz",
                  "zip": 401101,
                  "address": "abc"
                },
                {
                  "landmark": "Tower",
                  "zip": 401101,
                  "address": "Google",
                  "type": "home"
                },
                {
                  "type": "other",
                  "zip": 400056,
                  "address": "101, Leena residence gulmohar road miraj",
                  "landmark": "Opposite gagandeep restaurant "
                },
                {
                  "zip": 400049,
                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                  "landmark": "Opposite naturals ",
                  "type": "other"
                }
              ],
              "storeSav": [
                "8B9ozj7aTPvywkIvVWiK",
                "tjOyZV9TVTpQ1hoccOYB"
              ],
              "acBalH": 395,
              "admin": true,
              "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
              "upd": {
                "seconds": 1665263257,
                "nanoseconds": 854000000
              },
              "tokenSNS_": [
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
                "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
                "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
                "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
                "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
                "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
                "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
                "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
                "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
                "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
                "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
                "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
                "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
                "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
                "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
                "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
              ],
              "soTW": "dip",
              "log": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "bucket": [
                "6cZGYy20f5boFbbsXtYB",
                "qqMPDmqy0o01YiiIYqaE",
                "kxczduUeyyYUvoCyLvnO",
                "6uhvn2NoTtN8ONPuM2qj"
              ],
              "emailV": false,
              "soYT": "simran",
              "acBalCr": 120,
              "acBalVr": 1788.25,
              "acBalGivenV": 1000,
              "payout": false
            },
            "name": "Fit Food",
            "upd": {
              "seconds": 1664544116,
              "nanoseconds": 946000000
            },
            "shareUrlP1": "https://refrclub.com/o/EncD",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "vEarn": 26400,
            "vAte": 151.2,
            "products": 18,
            "subCat": "sc-food_and_beverages-cafe",
            "schedule": {
              "openSunE": "19:00",
              "openFri": true,
              "openThu": true,
              "openSat": true,
              "openSatS": "06:00",
              "openThuS": "06:00",
              "opensDaily": false,
              "openMonS": "09:00",
              "openTue": true,
              "openWed": true,
              "openSatE": "19:00",
              "openWedE": "19:00",
              "opensDailyE": "23:00",
              "openSunS": "06:00",
              "openMon": true,
              "openTueE": "19:00",
              "opensDailyS": "10:00",
              "openThuE": "19:00",
              "openSun": false,
              "openFriE": "19:00",
              "openTueS": "06:00",
              "openMonE": "19:00",
              "openFriS": "06:00",
              "openWedS": "06:00"
            },
            "proCat": [
              "gfjgjhgjhghjg",
              "hhkhkjhjk",
              "some category",
              "Dal",
              "Paneer",
              "Kolhapuri",
              "chocolate"
            ],
            "log": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "addedDynamicLink": true,
            "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
            ],
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "shareUrlV1": "https://refrclub.com/o/tobR",
            "vFan": 23,
            "cat": "food_and_beverages"
          },
          "sold": 0,
          "burnDec": "abc",
          "burnBrand": "abc",
          "burnCatSub": "Nope",
          "sin": {
            "seconds": 1664607562,
            "nanoseconds": 148000000
          },
          "costBurn": 1.8,
          "burnPics": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
          ],
          "code": "123123123123",
          "cost": 2,
          "upd": {
            "seconds": 1665569994,
            "nanoseconds": 212000000
          },
          "banners": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
          ],
          "burnDecShort": "abc",
          "title": "fried rice"
        }
      ],
      "sin": {
        "seconds": 1665570039,
        "nanoseconds": 647000000
      },
      "userName": "Aditya",
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "addORDER",
        "BURN",
        null
      ]
    },
    //F2F Online Shipping && logistics not require
    {
      "amGateway": 0,
      "camp": {
        "customPay": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "tX": "t1",
        "ban": false,
        "storeTyp": "Both",
        "paused": false,
        "min": 1200,
        "max": 0,
        "stage": 0,
        "type": "flat",
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "countP": 0,
        "expiry": false,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "countM": 0,
        "cbNew": 80,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "customAct": false,
        "cbDir": 40,
        "name": "Campaign-39",
        "countS": 0,
        "stoped": false,
        "paid": false,
        "cbExi": 30
      },
      "sin": {
        "seconds": 1665567219,
        "nanoseconds": 640000000
      },
      "amParcel": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amSale": 5,
      "amCost": 0,
      "storeName": "Fit Food",
      "logistics": {
        "addressDrop": {
          "zip": 400056,
          "type": "work",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "landmark": "Gagandeep bus stop"
        },
        "PnD_cityCharge": 0,
        "PnD_nationCharge": 0,
        "typeCat": "food_and_beverages",
        "addressDropT": "work",
        "typeShop": "Both",
        "email": "",
        "phone": "8879751140",
        "addressPick": {
          "id": "IND_MH_1648672299398",
          "lon": 72.83105909999999,
          "region": "Maharashtra",
          "state": "MH",
          "area": "Dent Heal",
          "line2": "",
          "nation": "IND",
          "zip": "400050",
          "locality": "Mumbai",
          "lat": 19.0662066,
          "line1": "Dipesadsadas sadasdas",
          "city": "Mumbai Suburban"
        },
        "addressPickT": "shop",
        "PnD_freeStart": 0,
        "PnD_parcelNotFree": false,
        "status": 10,
        "require": false,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "name": "Aditya",
        "typeOrdr": "F2F_ONLINE"
      },
      "com": {
        "seconds": 1665567219,
        "nanoseconds": 640000000
      },
      "amParcelCity": false,
      "amRefr": 0,
      "refr": {
        "earn": 0,
        "name": "Aditya",
        "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
      },
      "earn": 0,
      "shortID": "A000NA",
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "setShortID": true,
      "status": 10,
      "journey": "F2F",
      "amTaxTCS": 0.01,
      "invoice": {
        "useRefrCash": true,
        "amtRefrCash": 1.05,
        "COD": false
      },
      "amSave": 5.05,
      "cart": [
        {
          "description": "Chocolate",
          "quota": 0,
          "vX": [],
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "reqBurn": false,
          "code": "123123123",
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "id": "WdH3xlYAQlgwBkha2EsA",
          "sold": 0,
          "warranty": true,
          "category": "chocolate",
          "burn": false,
          "variants": [],
          "content": true,
          "Q": 1,
          "banners": [],
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "cost": 1,
          "title": "JimJam",
          "price": 5
        }
      ],
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "F2F",
        "A000Ky"
      ],
      "code": "A000Ky",
      "amTax": 0.05,
      "amTotal": 1.05,
      "amTaxTDS": 0,
      "amBurst": 1,
      "upd": {
        "seconds": 1665567219,
        "nanoseconds": 640000000
      },
      "id": "ShPT9Gtfo3Y26sED6Re3",
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "userName": "Aditya",
      "ordrTYPE": "RefrCASH"
    },
    // Direct Shipping Order && logistics not require
    {
      "com": {
        "seconds": 1665566874,
        "nanoseconds": 50000000
      },
      "refr": null,
      "invoice": {
        "COD": false,
        "useRefrCash": true,
        "amtRefrCash": 1.05
      },
      "storeName": "Fit Food",
      "journey": "DIRECT",
      "amTaxTDS": 0,
      "amGateway": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amSave": 5.05,
      "code": null,
      "upd": {
        "seconds": 1665566874,
        "nanoseconds": 50000000
      },
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amTaxTCS": 0.01,
      "amTax": 0.05,
      "setShortID": true,
      "status": 10,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "userName": "Aditya",
      "shortID": "A000N1",
      "camp": {
        "customPay": 0,
        "cbExi": 30,
        "countS": 0,
        "type": "flat",
        "cbNew": 80,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "paused": false,
        "paid": false,
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "min": 1200,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "cbDir": 40,
        "storeTyp": "Both",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "max": 0,
        "countP": 0,
        "expiry": false,
        "ban": false,
        "name": "Campaign-39",
        "stoped": false,
        "stage": 0,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "customAct": false,
        "tX": "t1",
        "countM": 0,
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        }
      },
      "id": "FMQ5U3RHLo4C8PzmI5cB",
      "ordrTYPE": "RefrCASH",
      "amSale": 5,
      "amBurst": 1,
      "amCost": 0,
      "amParcel": 0,
      "amTotal": 1.05,
      "amParcelCity": false,
      "earn": 0,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      "cart": [
        {
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "vX": [],
          "variants": [],
          "burn": false,
          "category": "chocolate",
          "price": 5,
          "Q": 1,
          "reqBurn": false,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "quota": 0,
          "code": "123123123",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "title": "JimJam",
          "id": "WdH3xlYAQlgwBkha2EsA",
          "warranty": true,
          "content": true,
          "description": "Chocolate",
          "sold": 0,
          "cost": 1,
          "banners": [],
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          }
        }
      ],
      "amRefr": 0,
      "logistics": {
        "typeCat": "food_and_beverages",
        "PnD_nationCharge": 0,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "name": "Aditya",
        "require": false,
        "status": 10,
        "PnD_parcelNotFree": false,
        "PnD_freeStart": 0,
        "email": "",
        "typeOrdr": "DIRECT_ONLINE",
        "addressPickT": "shop",
        "addressPick": {
          "id": "IND_MH_1648672299398",
          "line2": "",
          "nation": "IND",
          "line1": "Dipesadsadas sadasdas",
          "city": "Mumbai Suburban",
          "lon": 72.83105909999999,
          "lat": 19.0662066,
          "locality": "Mumbai",
          "zip": "400050",
          "area": "Dent Heal",
          "state": "MH",
          "region": "Maharashtra"
        },
        "addressDrop": {
          "type": "work",
          "zip": 400056,
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "landmark": "Gagandeep bus stop"
        },
        "PnD_cityCharge": 0,
        "typeShop": "Both",
        "addressDropT": "work",
        "phone": "8879751140"
      },
      "sin": {
        "seconds": 1665566874,
        "nanoseconds": 50000000
      }
    },




    //Direct shipping && logistics require
    {
      "amTotal": 1.05,
      "amTaxTDS": 0,
      "amTax": 0.05,
      "amSale": 5,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amBurst": 1,
      "amParcelCity": false,
      "amRefr": 0,
      "userName": "Aditya",
      "amCost": 0,
      "camp": {
        "paid": false,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "stage": 0,
        "storeTyp": "Both",
        "customAct": false,
        "customPay": 0,
        "ban": false,
        "name": "Campaign-39",
        "stoped": false,
        "countP": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "expiry": false,
        "cbExi": 30,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "paused": false,
        "cbDir": 40,
        "min": 1200,
        "countS": 0,
        "tX": "t1",
        "cbNew": 80,
        "max": 0,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "type": "flat",
        "countM": 0,
        "id": "IzSNW9mwHpHHyZ6C9cAD"
      },
      "status": 10,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amParcel": 0,
      "shortID": "A000Nh",
      "sin": {
        "seconds": 1665574180,
        "nanoseconds": 19000000
      },
      "invoice": {
        "COD": false,
        "amtRefrCash": 1.05,
        "useRefrCash": true
      },
      "amTaxTCS": 0.01,
      "amGateway": 0,
      "ordrTYPE": "RefrCASH",
      "storeName": "Fit Food",
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "cart": [
        {
          "code": "123123123",
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "banners": [],
          "price": 5,
          "id": "WdH3xlYAQlgwBkha2EsA",
          "vX": [],
          "Q": 1,
          "reqBurn": false,
          "title": "JimJam",
          "content": true,
          "description": "Chocolate",
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "variants": [],
          "burn": false,
          "category": "chocolate",
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "sold": 0,
          "cost": 1,
          "quota": 0,
          "warranty": true
        }
      ],
      "code": null,
      "logistics": {
        "typeShop": "Both",
        "addressDropT": "work",
        "name": "Aditya",
        "typeCat": "food_and_beverages",
        "addressDrop": {
          "type": "work",
          "landmark": "Gagandeep bus stop",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "zip": 400056
        },
        "addressPickT": "shop",
        "status": 10,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "PnD_parcelNotFree": false,
        "phone": "8879751140",
        "PnD_cityCharge": 0,
        "require": true,
        "email": "",
        "addressPick": {
          "region": "Maharashtra",
          "zip": "400050",
          "lon": 72.83105909999999,
          "line1": "Dipesadsadas sadasdas",
          "state": "MH",
          "area": "Dent Heal",
          "lat": 19.0662066,
          "locality": "Mumbai",
          "line2": "",
          "city": "Mumbai Suburban",
          "id": "IND_MH_1648672299398",
          "nation": "IND"
        },
        "PnD_freeStart": 0,
        "PnD_nationCharge": 0,
        "typeOrdr": "DIRECT_ONLINE"
      },
      "refr": null,
      "upd": {
        "seconds": 1665574180,
        "nanoseconds": 19000000
      },
      "setShortID": true,
      "id": "w9SlnkQwfm8k1B8T4DWQ",
      "earn": 0,
      "com": {
        "seconds": 1665574180,
        "nanoseconds": 19000000
      },
      "journey": "DIRECT",
      "amSave": 5.05
    },
    //F2F shipping && logistics require
    {
      "com": {
        "seconds": 1665573023,
        "nanoseconds": 785000000
      },
      "logistics": {
        "addressDropT": "work",
        "PnD_parcelNotFree": false,
        "typeShop": "Both",
        "addressDrop": {
          "landmark": "Gagandeep bus stop",
          "type": "work",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "zip": 400056
        },
        "addressPick": {
          "line2": "",
          "lon": 72.83105909999999,
          "area": "Dent Heal",
          "id": "IND_MH_1648672299398",
          "nation": "IND",
          "region": "Maharashtra",
          "line1": "Dipesadsadas sadasdas",
          "locality": "Mumbai",
          "city": "Mumbai Suburban",
          "zip": "400050",
          "lat": 19.0662066,
          "state": "MH"
        },
        "typeCat": "food_and_beverages",
        "addressPickT": "shop",
        "name": "Aditya",
        "typeOrdr": "F2F_ONLINE",
        "PnD_nationCharge": 0,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "phone": "8879751140",
        "require": true,
        "email": "",
        "PnD_freeStart": 0,
        "status": 10,
        "PnD_cityCharge": 0
      },
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amBurst": 1,
      "camp": {
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "max": 0,
        "type": "flat",
        "paid": false,
        "stage": 0,
        "countM": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "countS": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "customAct": false,
        "paused": false,
        "cbDir": 40,
        "ban": false,
        "customPay": 0,
        "cbNew": 80,
        "storeTyp": "Both",
        "min": 1200,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "expiry": false,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "tX": "t1",
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "stoped": false,
        "name": "Campaign-39",
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "countP": 0,
        "cbExi": 30
      },
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "invoice": {
        "amtRefrCash": 1.05,
        "COD": false,
        "useRefrCash": true
      },
      "amTaxTDS": 0,
      "sin": {
        "seconds": 1665573023,
        "nanoseconds": 785000000
      },
      "code": "A000Ky",
      "amGateway": 0,
      "amTaxTCS": 0.01,
      "userName": "Aditya",
      "storeName": "Fit Food",
      "refr": {
        "name": "Aditya",
        "earn": 0,
        "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
      },
      "amTotal": 1.05,
      "amSale": 5,
      "amParcelCity": false,
      "amCost": 0,
      "setShortID": true,
      "amTax": 0.05,
      "amSave": 5.05,
      "amRefr": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "upd": {
        "seconds": 1665573023,
        "nanoseconds": 785000000
      },
      "id": "XX54PSZgyMJwbDOlA0v5",
      "earn": 0,
      "amParcel": 0,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "F2F",
        "A000Ky"
      ],
      "status": 10,
      "ordrTYPE": "RefrCASH",
      "shortID": "A000N3",
      "journey": "F2F",
      "cart": [
        {
          "Q": 1,
          "banners": [],
          "price": 5,
          "variants": [],
          "warranty": true,
          "vX": [],
          "cost": 1,
          "burn": false,
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "quota": 0,
          "category": "chocolate",
          "title": "JimJam",
          "sold": 0,
          "content": true,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "description": "Chocolate",
          "code": "123123123",
          "reqBurn": false,
          "id": "WdH3xlYAQlgwBkha2EsA",
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          }
        }
      ]
    },
    //BURN shipping && logistics require
    {
      "amCost": 0,
      "amSale": 10,
      "userName": "Aditya",
      "com": {
        "seconds": 1665573056,
        "nanoseconds": 790000000
      },
      "amParcel": 0,
      "invoice": {
        "amtRefrCash": 2.1,
        "useRefrCash": true,
        "COD": false
      },
      "amTax": 0.1,
      "ordrTYPE": "RefrCASH",
      "status": 10,
      "amParcelCity": false,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "addORDER",
        "BURN",
        null
      ],
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "refr": null,
      "earn": 0,
      "code": null,
      "cart": [
        {
          "burnBrand": "abc",
          "burnSpec": "abc",
          "burn": true,
          "reqBurn": false,
          "storeINFO": {
            "userInfo": {
              "emailV": false,
              "sin": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "display": "",
              "iso": "IND",
              "addr": [
                {
                  "landmark": "xyz",
                  "zip": 401101,
                  "type": "work",
                  "address": "abc"
                },
                {
                  "zip": 401101,
                  "address": "Google",
                  "type": "home",
                  "landmark": "Tower"
                },
                {
                  "address": "101, Leena residence gulmohar road miraj",
                  "zip": 400056,
                  "type": "other",
                  "landmark": "Opposite gagandeep restaurant "
                },
                {
                  "zip": 400049,
                  "landmark": "Opposite naturals ",
                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                  "type": "other"
                }
              ],
              "acBalGivenV": 1000,
              "soWA": "9876543210",
              "storeSav": [
                "8B9ozj7aTPvywkIvVWiK",
                "tjOyZV9TVTpQ1hoccOYB"
              ],
              "soTW": "dip",
              "ban": false,
              "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
              "storeLoc": [
                "8B9ozj7aTPvywkIvVWiK"
              ],
              "acBalVp": 16000,
              "name": "Dipeshin",
              "coin": "INR",
              "acBalC": 1113.5500000000002,
              "acBalGivenC": 1980,
              "soFB": "dip",
              "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "acBalV": 4569.351059999996,
              "emails": [],
              "note": [],
              "phone": "+919876543210",
              "admin": true,
              "axess": [
                "phone"
              ],
              "acBalCr": 120,
              "acBalVr": 1794.5499999999997,
              "acBalP": 0,
              "bucket": [
                "6cZGYy20f5boFbbsXtYB",
                "qqMPDmqy0o01YiiIYqaE",
                "kxczduUeyyYUvoCyLvnO",
                "6uhvn2NoTtN8ONPuM2qj"
              ],
              "acBalH": 395,
              "tokenSNS_": [
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
                "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
                "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
                "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
                "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
                "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
                "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
                "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
                "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
                "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
                "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
                "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
                "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
                "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
                "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
                "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
              ],
              "payout": false,
              "soYT": "simran",
              "storeCam": [
                "2GHohG0jEfELHb30c1s7",
                "i9MvNIRSZEpyhp05UIws",
                "b8fHqM0fyh3EJfGARu3B",
                "69Hf6TISpLg3SDwpYyKy",
                "2VS4N7OkRrM5pHfwCNuV",
                "GBJPmnJ4Q1oA1ynW1brZ",
                "rDeB5DwD97Ff1NpLzFdj",
                "vJEzPDAJ5koqdbGa7k0N",
                "PJcK0Xh43tLpR44xtB6J",
                "FkvmAw4pKGhcSrFULyG2",
                "dLclMuk5iBysJvOoWRKi",
                "ZPkNWVk1trHm3b8GBr4F",
                "iWIXIPHAiDIiA9Euexst",
                "SBV6Jpa7a2844xyTxDEO",
                "1igU0j5Cxxah1ZzYW0oT",
                "OgkREW5oDc40YO1psg6q",
                "6YEVFDcrnwwGKc4IRPqX",
                "qc1ymcPpmQ8yEhHM8zLt",
                "2bwi1jsjci7YySD6FWHi",
                "x605L2J7JyTzfmtgFL7M",
                "TyWGWqQiOSEG0f4XSGju",
                "yKTiNocUlsW92jUlr0P1",
                "XQBQVol6L4AFU0wdRluS",
                "tt5W2R17MPqrjJA7azDi",
                "NhtKi3RTN2dLVzcH2hSu",
                "dO3WaZ05d3hBgnlt0Fj2",
                "sB3sHKwlhmqpkVPm2M1F",
                "bSOHjFq1z3di0kl7tDOK",
                "fjkXn0gPGux5uYQADX6v",
                "Muj3jGOZ7jOWeELzLe0Y",
                "5kaSYObDf7s1pRxvqp0s",
                "d3Kcq7I3sCdzWMPgD9Rm",
                "9e64iZ7UQ538nKB285XT",
                "IpQwjUjBAJW8eyMSDDWp",
                "xdiMTvN28RncaBT5HHms",
                "nRtRMxxicFvlARWiSR8y",
                "w4ELXiJiAiPY4RodAz7o",
                "78SEsrN2FWWM1NCSzRfk",
                "IzSNW9mwHpHHyZ6C9cAD"
              ],
              "soIG": "dipesious",
              "upd": {
                "seconds": 1665263257,
                "nanoseconds": 854000000
              },
              "log": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "email": "dipesious@hotmail.com",
              "cashback": 80,
              "BankUPI": {
                "active": true,
                "address": "dipesious@dbs",
                "handle": "dbs",
                "username": "dipesious",
                "verified": true,
                "contact_id": "cont_K9KglWSOWnTNTY",
                "fund_account_id": "fa_K9hVBLRtX776iF"
              }
            },
            "cashback": 80,
            "cat": "food_and_beverages",
            "addedDynamicLink": true,
            "about": "About the store",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "shareUrlP1": "https://refrclub.com/o/EncD",
            "loc": [
              {
                "lon": 72.83105909999999,
                "locality": "Mumbai",
                "zip": "400050",
                "area": "Dent Heal",
                "region": "Maharashtra",
                "id": "IND_MH_1648672299398",
                "line2": "",
                "lat": 19.0662066,
                "city": "Mumbai Suburban",
                "state": "MH",
                "nation": "IND",
                "line1": "Dipesadsadas sadasdas"
              },
              {
                "nation": "IND",
                "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                "zip": "400053",
                "id": "IND_MH_1656024949912",
                "state": "MH",
                "line1": "sadas sadasdasd sdasdas",
                "lat": 19.134840193193707,
                "locality": "Mumbai",
                "line2": "",
                "region": "Maharashtra",
                "city": "Mumbai Suburban",
                "lon": 72.8213950683594
              }
            ],
            "shareUrlV1": "https://refrclub.com/o/tobR",
            "vGave": 1390,
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
            "addedDynamicLinkP1": true,
            "schedule": {
              "openMon": true,
              "openSatS": "06:00",
              "openFri": true,
              "openFriS": "06:00",
              "openTueE": "19:00",
              "openSunS": "06:00",
              "openSat": true,
              "opensDaily": false,
              "openWedE": "19:00",
              "openFriE": "19:00",
              "opensDailyS": "10:00",
              "openThuS": "06:00",
              "openSunE": "19:00",
              "openSun": false,
              "openTueS": "06:00",
              "openWed": true,
              "openThu": true,
              "openTue": true,
              "openThuE": "19:00",
              "openMonE": "19:00",
              "openSatE": "19:00",
              "openWedS": "06:00",
              "opensDailyE": "23:00",
              "openMonS": "09:00"
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "id": "8B9ozj7aTPvywkIvVWiK",
            "vAte": 153.29999999999998,
            "upd": {
              "seconds": 1665572836,
              "nanoseconds": 194000000
            },
            "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
            ],
            "log": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "email": "dipeshbhoir@hotmail.com",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
            "vFan": 23,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "products": 18,
            "subCat": "sc-food_and_beverages-cafe",
            "proCat": [
              "gfjgjhgjhghjg",
              "hhkhkjhjk",
              "some category",
              "Dal",
              "Paneer",
              "Kolhapuri",
              "chocolate"
            ],
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "name": "Fit Food",
            "vEarn": 26400,
            "sin": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "typeORDER": {
              "COD": true,
              "phoneHide": true,
              "logistics": true,
              "cityCharge": 0,
              "return": false,
              "nationCharge": 0,
              "exchange": false,
              "delivery": "Nationwide",
              "freeParcel": false,
              "refund": false,
              "freeStart": 0
            },
            "vOrdr": 23,
            "type": "Both",
            "shareUrlX1": "https://refrclub.com/o/WoQJ",
            "shareUrlB1": "https://refrclub.com/o/4Yif",
            "phone": "9876543210",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8"
          },
          "cost": 2,
          "burnCatSub": "Nope",
          "vX": [],
          "quota": 0,
          "warranty": true,
          "banners": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
          ],
          "id": "AH1YkgZwvrKZo1zcuDN9",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "burnPics": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
          ],
          "upd": {
            "seconds": 1665569994,
            "nanoseconds": 212000000
          },
          "sold": 0,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "description": "rice",
          "title": "fried rice",
          "Q": 1,
          "relate": [],
          "burnDec": "abc",
          "code": "123123123123",
          "sin": {
            "seconds": 1664607562,
            "nanoseconds": 148000000
          },
          "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
          "costBurn": 1.8,
          "burnCat": "food_and_beverages",
          "variants": [],
          "price": 10,
          "flash": false,
          "burnDecShort": "abc",
          "content": true,
          "burnHigh": "abc",
          "category": "Dal"
        }
      ],
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amTaxTCS": 0.02,
      "storeName": "Fit Food",
      "sin": {
        "seconds": 1665573056,
        "nanoseconds": 790000000
      },
      "camp": null,
      "setShortID": true,
      "amGateway": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amTaxTDS": 0,
      "upd": {
        "seconds": 1665573056,
        "nanoseconds": 790000000
      },
      "amSave": 10.1,
      "shortID": "A000N5",
      "id": "bIyV5T8htM0af60g1D2E",
      "logistics": {
        "typeSuCat": "sc-food_and_beverages-cafe",
        "phone": "8879751140",
        "addressPick": {
          "region": "Maharashtra",
          "zip": "400050",
          "lat": 19.0662066,
          "locality": "Mumbai",
          "state": "MH",
          "line2": "",
          "id": "IND_MH_1648672299398",
          "lon": 72.83105909999999,
          "area": "Dent Heal",
          "line1": "Dipesadsadas sadasdas",
          "nation": "IND",
          "city": "Mumbai Suburban"
        },
        "email": "",
        "PnD_freeStart": 0,
        "PnD_cityCharge": 0,
        "typeOrdr": "BURN",
        "addressDrop": {
          "landmark": "Gagandeep bus stop",
          "type": "work",
          "zip": 400056,
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
        },
        "addressDropT": "work",
        "status": 10,
        "typeShop": "Both",
        "PnD_nationCharge": 0,
        "typeCat": "food_and_beverages",
        "require": true,
        "name": "Aditya",
        "PnD_parcelNotFree": false,
        "addressPickT": "shop"
      },
      "amBurst": 2,
      "journey": "BURN",
      "amRefr": 0.14,
      "amTotal": 2.1
    },




    //Direct placed && logistics require
    {
      "amTotal": 1.05,
      "amTaxTDS": 0,
      "amTax": 0.05,
      "amSale": 5,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amBurst": 1,
      "amParcelCity": false,
      "amRefr": 0,
      "userName": "Aditya",
      "amCost": 0,
      "camp": {
        "paid": false,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "stage": 0,
        "storeTyp": "Both",
        "customAct": false,
        "customPay": 0,
        "ban": false,
        "name": "Campaign-39",
        "stoped": false,
        "countP": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "expiry": false,
        "cbExi": 30,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "paused": false,
        "cbDir": 40,
        "min": 1200,
        "countS": 0,
        "tX": "t1",
        "cbNew": 80,
        "max": 0,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "type": "flat",
        "countM": 0,
        "id": "IzSNW9mwHpHHyZ6C9cAD"
      },
      "status": 0,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amParcel": 0,
      "shortID": "A000Nh",
      "sin": {
        "seconds": 1665574180,
        "nanoseconds": 19000000
      },
      "invoice": {
        "COD": false,
        "amtRefrCash": 1.05,
        "useRefrCash": true
      },
      "amTaxTCS": 0.01,
      "amGateway": 0,
      "ordrTYPE": "RefrCASH",
      "storeName": "Fit Food",
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "cart": [
        {
          "code": "123123123",
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "banners": [],
          "price": 5,
          "id": "WdH3xlYAQlgwBkha2EsA",
          "vX": [],
          "Q": 1,
          "reqBurn": false,
          "title": "JimJam",
          "content": true,
          "description": "Chocolate",
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "variants": [],
          "burn": false,
          "category": "chocolate",
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "sold": 0,
          "cost": 1,
          "quota": 0,
          "warranty": true
        }
      ],
      "code": null,
      "logistics": {
        "typeShop": "Both",
        "addressDropT": "work",
        "name": "Aditya",
        "typeCat": "food_and_beverages",
        "addressDrop": {
          "type": "work",
          "landmark": "Gagandeep bus stop",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "zip": 400056
        },
        "addressPickT": "shop",
        "status": 0,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "PnD_parcelNotFree": false,
        "phone": "8879751140",
        "PnD_cityCharge": 0,
        "require": true,
        "email": "",
        "addressPick": {
          "region": "Maharashtra",
          "zip": "400050",
          "lon": 72.83105909999999,
          "line1": "Dipesadsadas sadasdas",
          "state": "MH",
          "area": "Dent Heal",
          "lat": 19.0662066,
          "locality": "Mumbai",
          "line2": "",
          "city": "Mumbai Suburban",
          "id": "IND_MH_1648672299398",
          "nation": "IND"
        },
        "PnD_freeStart": 0,
        "PnD_nationCharge": 0,
        "typeOrdr": "DIRECT_ONLINE"
      },
      "refr": null,
      "upd": {
        "seconds": 1665574180,
        "nanoseconds": 19000000
      },
      "setShortID": true,
      "id": "w9SlnkQwfm8k1B8T4DWQ",
      "earn": 0,
      "com": {
        "seconds": 1665574180,
        "nanoseconds": 19000000
      },
      "journey": "DIRECT",
      "amSave": 5.05
    },
    //F2F placed && logistics require
    {
      "com": {
        "seconds": 1665573023,
        "nanoseconds": 785000000
      },
      "logistics": {
        "addressDropT": "work",
        "PnD_parcelNotFree": false,
        "typeShop": "Both",
        "addressDrop": {
          "landmark": "Gagandeep bus stop",
          "type": "work",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "zip": 400056
        },
        "addressPick": {
          "line2": "",
          "lon": 72.83105909999999,
          "area": "Dent Heal",
          "id": "IND_MH_1648672299398",
          "nation": "IND",
          "region": "Maharashtra",
          "line1": "Dipesadsadas sadasdas",
          "locality": "Mumbai",
          "city": "Mumbai Suburban",
          "zip": "400050",
          "lat": 19.0662066,
          "state": "MH"
        },
        "typeCat": "food_and_beverages",
        "addressPickT": "shop",
        "name": "Aditya",
        "typeOrdr": "F2F_ONLINE",
        "PnD_nationCharge": 0,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "phone": "8879751140",
        "require": true,
        "email": "",
        "PnD_freeStart": 0,
        "status": 0,
        "PnD_cityCharge": 0
      },
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amBurst": 1,
      "camp": {
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "max": 0,
        "type": "flat",
        "paid": false,
        "stage": 0,
        "countM": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "countS": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "customAct": false,
        "paused": false,
        "cbDir": 40,
        "ban": false,
        "customPay": 0,
        "cbNew": 80,
        "storeTyp": "Both",
        "min": 1200,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "expiry": false,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "tX": "t1",
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "stoped": false,
        "name": "Campaign-39",
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "countP": 0,
        "cbExi": 30
      },
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "invoice": {
        "amtRefrCash": 1.05,
        "COD": false,
        "useRefrCash": true
      },
      "amTaxTDS": 0,
      "sin": {
        "seconds": 1665573023,
        "nanoseconds": 785000000
      },
      "code": "A000Ky",
      "amGateway": 0,
      "amTaxTCS": 0.01,
      "userName": "Aditya",
      "storeName": "Fit Food",
      "refr": {
        "name": "Aditya",
        "earn": 0,
        "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
      },
      "amTotal": 1.05,
      "amSale": 5,
      "amParcelCity": false,
      "amCost": 0,
      "setShortID": true,
      "amTax": 0.05,
      "amSave": 5.05,
      "amRefr": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "upd": {
        "seconds": 1665573023,
        "nanoseconds": 785000000
      },
      "id": "XX54PSZgyMJwbDOlA0v5",
      "earn": 0,
      "amParcel": 0,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "F2F",
        "A000Ky"
      ],
      "status": 0,
      "ordrTYPE": "RefrCASH",
      "shortID": "A000N3",
      "journey": "F2F",
      "cart": [
        {
          "Q": 1,
          "banners": [],
          "price": 5,
          "variants": [],
          "warranty": true,
          "vX": [],
          "cost": 1,
          "burn": false,
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "quota": 0,
          "category": "chocolate",
          "title": "JimJam",
          "sold": 0,
          "content": true,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "description": "Chocolate",
          "code": "123123123",
          "reqBurn": false,
          "id": "WdH3xlYAQlgwBkha2EsA",
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          }
        }
      ]
    },
    //BURN placed && logistics require
    {
      "amCost": 0,
      "amSale": 10,
      "userName": "Aditya",
      "com": {
        "seconds": 1665573056,
        "nanoseconds": 790000000
      },
      "amParcel": 0,
      "invoice": {
        "amtRefrCash": 2.1,
        "useRefrCash": true,
        "COD": false
      },
      "amTax": 0.1,
      "ordrTYPE": "RefrCASH",
      "status": 0,
      "amParcelCity": false,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "addORDER",
        "BURN",
        null
      ],
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "refr": null,
      "earn": 0,
      "code": null,
      "cart": [
        {
          "burnBrand": "abc",
          "burnSpec": "abc",
          "burn": true,
          "reqBurn": false,
          "storeINFO": {
            "userInfo": {
              "emailV": false,
              "sin": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "display": "",
              "iso": "IND",
              "addr": [
                {
                  "landmark": "xyz",
                  "zip": 401101,
                  "type": "work",
                  "address": "abc"
                },
                {
                  "zip": 401101,
                  "address": "Google",
                  "type": "home",
                  "landmark": "Tower"
                },
                {
                  "address": "101, Leena residence gulmohar road miraj",
                  "zip": 400056,
                  "type": "other",
                  "landmark": "Opposite gagandeep restaurant "
                },
                {
                  "zip": 400049,
                  "landmark": "Opposite naturals ",
                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                  "type": "other"
                }
              ],
              "acBalGivenV": 1000,
              "soWA": "9876543210",
              "storeSav": [
                "8B9ozj7aTPvywkIvVWiK",
                "tjOyZV9TVTpQ1hoccOYB"
              ],
              "soTW": "dip",
              "ban": false,
              "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
              "storeLoc": [
                "8B9ozj7aTPvywkIvVWiK"
              ],
              "acBalVp": 16000,
              "name": "Dipeshin",
              "coin": "INR",
              "acBalC": 1113.5500000000002,
              "acBalGivenC": 1980,
              "soFB": "dip",
              "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "acBalV": 4569.351059999996,
              "emails": [],
              "note": [],
              "phone": "+919876543210",
              "admin": true,
              "axess": [
                "phone"
              ],
              "acBalCr": 120,
              "acBalVr": 1794.5499999999997,
              "acBalP": 0,
              "bucket": [
                "6cZGYy20f5boFbbsXtYB",
                "qqMPDmqy0o01YiiIYqaE",
                "kxczduUeyyYUvoCyLvnO",
                "6uhvn2NoTtN8ONPuM2qj"
              ],
              "acBalH": 395,
              "tokenSNS_": [
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
                "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
                "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
                "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
                "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
                "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
                "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
                "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
                "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
                "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
                "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
                "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
                "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
                "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
                "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
                "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
              ],
              "payout": false,
              "soYT": "simran",
              "storeCam": [
                "2GHohG0jEfELHb30c1s7",
                "i9MvNIRSZEpyhp05UIws",
                "b8fHqM0fyh3EJfGARu3B",
                "69Hf6TISpLg3SDwpYyKy",
                "2VS4N7OkRrM5pHfwCNuV",
                "GBJPmnJ4Q1oA1ynW1brZ",
                "rDeB5DwD97Ff1NpLzFdj",
                "vJEzPDAJ5koqdbGa7k0N",
                "PJcK0Xh43tLpR44xtB6J",
                "FkvmAw4pKGhcSrFULyG2",
                "dLclMuk5iBysJvOoWRKi",
                "ZPkNWVk1trHm3b8GBr4F",
                "iWIXIPHAiDIiA9Euexst",
                "SBV6Jpa7a2844xyTxDEO",
                "1igU0j5Cxxah1ZzYW0oT",
                "OgkREW5oDc40YO1psg6q",
                "6YEVFDcrnwwGKc4IRPqX",
                "qc1ymcPpmQ8yEhHM8zLt",
                "2bwi1jsjci7YySD6FWHi",
                "x605L2J7JyTzfmtgFL7M",
                "TyWGWqQiOSEG0f4XSGju",
                "yKTiNocUlsW92jUlr0P1",
                "XQBQVol6L4AFU0wdRluS",
                "tt5W2R17MPqrjJA7azDi",
                "NhtKi3RTN2dLVzcH2hSu",
                "dO3WaZ05d3hBgnlt0Fj2",
                "sB3sHKwlhmqpkVPm2M1F",
                "bSOHjFq1z3di0kl7tDOK",
                "fjkXn0gPGux5uYQADX6v",
                "Muj3jGOZ7jOWeELzLe0Y",
                "5kaSYObDf7s1pRxvqp0s",
                "d3Kcq7I3sCdzWMPgD9Rm",
                "9e64iZ7UQ538nKB285XT",
                "IpQwjUjBAJW8eyMSDDWp",
                "xdiMTvN28RncaBT5HHms",
                "nRtRMxxicFvlARWiSR8y",
                "w4ELXiJiAiPY4RodAz7o",
                "78SEsrN2FWWM1NCSzRfk",
                "IzSNW9mwHpHHyZ6C9cAD"
              ],
              "soIG": "dipesious",
              "upd": {
                "seconds": 1665263257,
                "nanoseconds": 854000000
              },
              "log": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "email": "dipesious@hotmail.com",
              "cashback": 80,
              "BankUPI": {
                "active": true,
                "address": "dipesious@dbs",
                "handle": "dbs",
                "username": "dipesious",
                "verified": true,
                "contact_id": "cont_K9KglWSOWnTNTY",
                "fund_account_id": "fa_K9hVBLRtX776iF"
              }
            },
            "cashback": 80,
            "cat": "food_and_beverages",
            "addedDynamicLink": true,
            "about": "About the store",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "shareUrlP1": "https://refrclub.com/o/EncD",
            "loc": [
              {
                "lon": 72.83105909999999,
                "locality": "Mumbai",
                "zip": "400050",
                "area": "Dent Heal",
                "region": "Maharashtra",
                "id": "IND_MH_1648672299398",
                "line2": "",
                "lat": 19.0662066,
                "city": "Mumbai Suburban",
                "state": "MH",
                "nation": "IND",
                "line1": "Dipesadsadas sadasdas"
              },
              {
                "nation": "IND",
                "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                "zip": "400053",
                "id": "IND_MH_1656024949912",
                "state": "MH",
                "line1": "sadas sadasdasd sdasdas",
                "lat": 19.134840193193707,
                "locality": "Mumbai",
                "line2": "",
                "region": "Maharashtra",
                "city": "Mumbai Suburban",
                "lon": 72.8213950683594
              }
            ],
            "shareUrlV1": "https://refrclub.com/o/tobR",
            "vGave": 1390,
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
            "addedDynamicLinkP1": true,
            "schedule": {
              "openMon": true,
              "openSatS": "06:00",
              "openFri": true,
              "openFriS": "06:00",
              "openTueE": "19:00",
              "openSunS": "06:00",
              "openSat": true,
              "opensDaily": false,
              "openWedE": "19:00",
              "openFriE": "19:00",
              "opensDailyS": "10:00",
              "openThuS": "06:00",
              "openSunE": "19:00",
              "openSun": false,
              "openTueS": "06:00",
              "openWed": true,
              "openThu": true,
              "openTue": true,
              "openThuE": "19:00",
              "openMonE": "19:00",
              "openSatE": "19:00",
              "openWedS": "06:00",
              "opensDailyE": "23:00",
              "openMonS": "09:00"
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "id": "8B9ozj7aTPvywkIvVWiK",
            "vAte": 153.29999999999998,
            "upd": {
              "seconds": 1665572836,
              "nanoseconds": 194000000
            },
            "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
            ],
            "log": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "email": "dipeshbhoir@hotmail.com",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
            "vFan": 23,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "products": 18,
            "subCat": "sc-food_and_beverages-cafe",
            "proCat": [
              "gfjgjhgjhghjg",
              "hhkhkjhjk",
              "some category",
              "Dal",
              "Paneer",
              "Kolhapuri",
              "chocolate"
            ],
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "name": "Fit Food",
            "vEarn": 26400,
            "sin": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "typeORDER": {
              "COD": true,
              "phoneHide": true,
              "logistics": true,
              "cityCharge": 0,
              "return": false,
              "nationCharge": 0,
              "exchange": false,
              "delivery": "Nationwide",
              "freeParcel": false,
              "refund": false,
              "freeStart": 0
            },
            "vOrdr": 23,
            "type": "Both",
            "shareUrlX1": "https://refrclub.com/o/WoQJ",
            "shareUrlB1": "https://refrclub.com/o/4Yif",
            "phone": "9876543210",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8"
          },
          "cost": 2,
          "burnCatSub": "Nope",
          "vX": [],
          "quota": 0,
          "warranty": true,
          "banners": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
          ],
          "id": "AH1YkgZwvrKZo1zcuDN9",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "burnPics": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
          ],
          "upd": {
            "seconds": 1665569994,
            "nanoseconds": 212000000
          },
          "sold": 0,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "description": "rice",
          "title": "fried rice",
          "Q": 1,
          "relate": [],
          "burnDec": "abc",
          "code": "123123123123",
          "sin": {
            "seconds": 1664607562,
            "nanoseconds": 148000000
          },
          "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
          "costBurn": 1.8,
          "burnCat": "food_and_beverages",
          "variants": [],
          "price": 10,
          "flash": false,
          "burnDecShort": "abc",
          "content": true,
          "burnHigh": "abc",
          "category": "Dal"
        }
      ],
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amTaxTCS": 0.02,
      "storeName": "Fit Food",
      "sin": {
        "seconds": 1665573056,
        "nanoseconds": 790000000
      },
      "camp": null,
      "setShortID": true,
      "amGateway": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amTaxTDS": 0,
      "upd": {
        "seconds": 1665573056,
        "nanoseconds": 790000000
      },
      "amSave": 10.1,
      "shortID": "A000N5",
      "id": "bIyV5T8htM0af60g1D2E",
      "logistics": {
        "typeSuCat": "sc-food_and_beverages-cafe",
        "phone": "8879751140",
        "addressPick": {
          "region": "Maharashtra",
          "zip": "400050",
          "lat": 19.0662066,
          "locality": "Mumbai",
          "state": "MH",
          "line2": "",
          "id": "IND_MH_1648672299398",
          "lon": 72.83105909999999,
          "area": "Dent Heal",
          "line1": "Dipesadsadas sadasdas",
          "nation": "IND",
          "city": "Mumbai Suburban"
        },
        "email": "",
        "PnD_freeStart": 0,
        "PnD_cityCharge": 0,
        "typeOrdr": "BURN",
        "addressDrop": {
          "landmark": "Gagandeep bus stop",
          "type": "work",
          "zip": 400056,
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
        },
        "addressDropT": "work",
        "status": 0,
        "typeShop": "Both",
        "PnD_nationCharge": 0,
        "typeCat": "food_and_beverages",
        "require": true,
        "name": "Aditya",
        "PnD_parcelNotFree": false,
        "addressPickT": "shop"
      },
      "amBurst": 2,
      "journey": "BURN",
      "amRefr": 0.14,
      "amTotal": 2.1
    },




    //direct Delivered
    {
      "setShortID": true,
      "amCost": 0,
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amSave": 5.05,
      "ordrTYPE": "RefrCASH",
      "userName": "Aditya",
      "amTax": 0.05,
      "sin": {
        "seconds": 1665571097,
        "nanoseconds": 573000000
      },
      "amGateway": 0,
      "amRefr": 0,
      "amTaxTDS": 0,
      "camp": {
        "type": "flat",
        "cbDir": 40,
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "paused": false,
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "cbNew": 80,
        "storeTyp": "Both",
        "name": "Campaign-39",
        "countM": 0,
        "min": 1200,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "customPay": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "ban": false,
        "countP": 0,
        "stage": 0,
        "tX": "t1",
        "max": 0,
        "cbExi": 30,
        "paid": false,
        "customAct": false,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "expiry": false,
        "countS": 0,
        "stoped": false
      },
      "amTotal": 1.05,
      "storeName": "Fit Food",
      "code": null,
      "cart": [
        {
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "category": "chocolate",
          "variants": [],
          "code": "123123123",
          "cost": 1,
          "burn": false,
          "reqBurn": false,
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "content": true,
          "id": "WdH3xlYAQlgwBkha2EsA",
          "quota": 0,
          "title": "JimJam",
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "description": "Chocolate",
          "banners": [],
          "sold": 0,
          "vX": [],
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "Q": 1,
          "price": 5,
          "warranty": true
        }
      ],
      "shortID": "A000NM",
      "amParcelCity": false,
      "amBurst": 1,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      "amSale": 5,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "journey": "DIRECT",
      "logistics": {
        "PnD_cityCharge": 0,
        "phone": "8879751140",
        "PnD_parcelNotFree": false,
        "require": false,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "addressPickT": "shop",
        "typeCat": "food_and_beverages",
        "PnD_freeStart": 0,
        "PnD_nationCharge": 0,
        "typeShop": "Both",
        "status": 20,
        "addressDrop": {
          "type": "work",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "landmark": "Gagandeep bus stop",
          "zip": 400056
        },
        "name": "Aditya",
        "email": "",
        "addressPick": {
          "lat": 19.0662066,
          "zip": "400050",
          "id": "IND_MH_1648672299398",
          "region": "Maharashtra",
          "area": "Dent Heal",
          "line2": "",
          "lon": 72.83105909999999,
          "locality": "Mumbai",
          "state": "MH",
          "city": "Mumbai Suburban",
          "nation": "IND",
          "line1": "Dipesadsadas sadasdas"
        },
        "addressDropT": "work",
        "typeOrdr": "DIRECT_ONLINE"
      },
      "refr": null,
      "invoice": {
        "COD": false,
        "useRefrCash": true,
        "amtRefrCash": 1.05
      },
      "amParcel": 0,
      "upd": {
        "seconds": 1665571097,
        "nanoseconds": 573000000
      },
      "earn": 0,
      "status": 10,
      "amTaxTCS": 0.01,
      "id": "SW9pblruzz2leJYmpqQS",
      "com": {
        "seconds": 1665571464,
        "nanoseconds": 66000000
      }
    },
    //burn Delivered
    {
      "setShortID": true,
      "amTax": 0.1,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "addORDER",
        "BURN",
        null
      ],
      "id": "giAISi5kYGQEqPE0zKZ3",
      "upd": {
        "seconds": 1665571160,
        "nanoseconds": 693000000
      },
      "amTaxTCS": 0.02,
      "amCost": 0,
      "amBurst": 2,
      "invoice": {
        "amtRefrCash": 2.1,
        "COD": false,
        "useRefrCash": true
      },
      "amParcelCity": false,
      "amGateway": 0,
      "amSave": 10.1,
      "code": null,
      "cart": [
        {
          "vX": [],
          "code": "123123123123",
          "cost": 2,
          "burnDecShort": "abc",
          "quota": 0,
          "description": "rice",
          "reqBurn": false,
          "id": "AH1YkgZwvrKZo1zcuDN9",
          "warranty": true,
          "burnCatSub": "Nope",
          "Q": 1,
          "burnCat": "food_and_beverages",
          "title": "fried rice",
          "flash": false,
          "relate": [],
          "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
          "burn": true,
          "costBurn": 1.8,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "upd": {
            "seconds": 1665569994,
            "nanoseconds": 212000000
          },
          "burnPics": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
          ],
          "sold": 0,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "burnDec": "abc",
          "burnHigh": "abc",
          "content": true,
          "burnSpec": "abc",
          "category": "Dal",
          "price": 10,
          "variants": [],
          "sin": {
            "seconds": 1664607562,
            "nanoseconds": 148000000
          },
          "burnBrand": "abc",
          "banners": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
          ],
          "storeINFO": {
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "upd": {
              "seconds": 1664544116,
              "nanoseconds": 946000000
            },
            "vEarn": 26400,
            "name": "Fit Food",
            "vOrdr": 23,
            "vFan": 23,
            "schedule": {
              "openTue": true,
              "openThuS": "06:00",
              "openTueS": "06:00",
              "openMonS": "09:00",
              "openSun": false,
              "openWed": true,
              "openSunE": "19:00",
              "openThu": true,
              "openFri": true,
              "openWedS": "06:00",
              "openWedE": "19:00",
              "openSat": true,
              "opensDailyS": "10:00",
              "openSatS": "06:00",
              "opensDaily": false,
              "openSatE": "19:00",
              "openThuE": "19:00",
              "openTueE": "19:00",
              "opensDailyE": "23:00",
              "openSunS": "06:00",
              "openFriS": "06:00",
              "openMon": true,
              "openFriE": "19:00",
              "openMonE": "19:00"
            },
            "email": "dipeshbhoir@hotmail.com",
            "vGave": 1390,
            "sin": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "addedDynamicLinkP1": true,
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "type": "Both",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
            "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
            ],
            "shareUrlB1": "https://refrclub.com/o/4Yif",
            "subCat": "sc-food_and_beverages-cafe",
            "typeORDER": {
              "refund": false,
              "freeParcel": false,
              "cityCharge": 0,
              "phoneHide": true,
              "delivery": "Nationwide",
              "return": false,
              "nationCharge": 0,
              "freeStart": 0,
              "exchange": false,
              "COD": true,
              "logistics": false
            },
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "addedDynamicLink": true,
            "products": 18,
            "shareUrlV1": "https://refrclub.com/o/tobR",
            "id": "8B9ozj7aTPvywkIvVWiK",
            "loc": [
              {
                "line1": "Dipesadsadas sadasdas",
                "lon": 72.83105909999999,
                "region": "Maharashtra",
                "lat": 19.0662066,
                "city": "Mumbai Suburban",
                "zip": "400050",
                "id": "IND_MH_1648672299398",
                "locality": "Mumbai",
                "nation": "IND",
                "line2": "",
                "state": "MH",
                "area": "Dent Heal"
              },
              {
                "region": "Maharashtra",
                "city": "Mumbai Suburban",
                "lon": 72.8213950683594,
                "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                "line1": "sadas sadasdasd sdasdas",
                "lat": 19.134840193193707,
                "nation": "IND",
                "line2": "",
                "id": "IND_MH_1656024949912",
                "locality": "Mumbai",
                "state": "MH",
                "zip": "400053"
              }
            ],
            "phone": "9876543210",
            "vAte": 151.2,
            "userInfo": {
              "acBalVp": 16000,
              "upd": {
                "seconds": 1665263257,
                "nanoseconds": 854000000
              },
              "note": [],
              "acBalH": 395,
              "ban": false,
              "soYT": "simran",
              "sin": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "acBalGivenV": 1000,
              "payout": false,
              "BankUPI": {
                "contact_id": "cont_K9KglWSOWnTNTY",
                "handle": "dbs",
                "username": "dipesious",
                "verified": true,
                "active": true,
                "fund_account_id": "fa_K9hVBLRtX776iF",
                "address": "dipesious@dbs"
              },
              "soWA": "9876543210",
              "soTW": "dip",
              "storeLoc": [
                "8B9ozj7aTPvywkIvVWiK"
              ],
              "phone": "+919876543210",
              "iso": "IND",
              "bucket": [
                "6cZGYy20f5boFbbsXtYB",
                "qqMPDmqy0o01YiiIYqaE",
                "kxczduUeyyYUvoCyLvnO",
                "6uhvn2NoTtN8ONPuM2qj"
              ],
              "storeCam": [
                "2GHohG0jEfELHb30c1s7",
                "i9MvNIRSZEpyhp05UIws",
                "b8fHqM0fyh3EJfGARu3B",
                "69Hf6TISpLg3SDwpYyKy",
                "2VS4N7OkRrM5pHfwCNuV",
                "GBJPmnJ4Q1oA1ynW1brZ",
                "rDeB5DwD97Ff1NpLzFdj",
                "vJEzPDAJ5koqdbGa7k0N",
                "PJcK0Xh43tLpR44xtB6J",
                "FkvmAw4pKGhcSrFULyG2",
                "dLclMuk5iBysJvOoWRKi",
                "ZPkNWVk1trHm3b8GBr4F",
                "iWIXIPHAiDIiA9Euexst",
                "SBV6Jpa7a2844xyTxDEO",
                "1igU0j5Cxxah1ZzYW0oT",
                "OgkREW5oDc40YO1psg6q",
                "6YEVFDcrnwwGKc4IRPqX",
                "qc1ymcPpmQ8yEhHM8zLt",
                "2bwi1jsjci7YySD6FWHi",
                "x605L2J7JyTzfmtgFL7M",
                "TyWGWqQiOSEG0f4XSGju",
                "yKTiNocUlsW92jUlr0P1",
                "XQBQVol6L4AFU0wdRluS",
                "tt5W2R17MPqrjJA7azDi",
                "NhtKi3RTN2dLVzcH2hSu",
                "dO3WaZ05d3hBgnlt0Fj2",
                "sB3sHKwlhmqpkVPm2M1F",
                "bSOHjFq1z3di0kl7tDOK",
                "fjkXn0gPGux5uYQADX6v",
                "Muj3jGOZ7jOWeELzLe0Y",
                "5kaSYObDf7s1pRxvqp0s",
                "d3Kcq7I3sCdzWMPgD9Rm",
                "9e64iZ7UQ538nKB285XT",
                "IpQwjUjBAJW8eyMSDDWp",
                "xdiMTvN28RncaBT5HHms",
                "nRtRMxxicFvlARWiSR8y",
                "w4ELXiJiAiPY4RodAz7o",
                "78SEsrN2FWWM1NCSzRfk",
                "IzSNW9mwHpHHyZ6C9cAD"
              ],
              "cashback": 80,
              "acBalV": 4567.523859999997,
              "acBalC": 1113.5500000000002,
              "log": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "soIG": "dipesious",
              "email": "dipesious@hotmail.com",
              "admin": true,
              "tokenSNS_": [
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
                "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
                "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
                "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
                "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
                "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
                "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
                "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
                "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
                "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
                "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
                "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
                "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
                "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
                "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
                "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
              ],
              "display": "",
              "storeSav": [
                "8B9ozj7aTPvywkIvVWiK",
                "tjOyZV9TVTpQ1hoccOYB"
              ],
              "name": "Dipeshin",
              "emails": [],
              "acBalVr": 1792.4499999999998,
              "acBalGivenC": 1980,
              "axess": [
                "phone"
              ],
              "acBalP": 0,
              "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
              "acBalCr": 120,
              "soFB": "dip",
              "addr": [
                {
                  "landmark": "xyz",
                  "zip": 401101,
                  "type": "work",
                  "address": "abc"
                },
                {
                  "type": "home",
                  "zip": 401101,
                  "landmark": "Tower",
                  "address": "Google"
                },
                {
                  "landmark": "Opposite gagandeep restaurant ",
                  "type": "other",
                  "address": "101, Leena residence gulmohar road miraj",
                  "zip": 400056
                },
                {
                  "zip": 400049,
                  "landmark": "Opposite naturals ",
                  "type": "other",
                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme "
                }
              ],
              "coin": "INR",
              "emailV": false
            },
            "cashback": 80,
            "log": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "proCat": [
              "gfjgjhgjhghjg",
              "hhkhkjhjk",
              "some category",
              "Dal",
              "Paneer",
              "Kolhapuri",
              "chocolate"
            ],
            "about": "About the store",
            "shareUrlP1": "https://refrclub.com/o/EncD",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "cat": "food_and_beverages",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
            "shareUrlX1": "https://refrclub.com/o/WoQJ"
          }
        }
      ],
      "shortID": "A000NQ",
      "amParcel": 0,
      "com": {
        "seconds": 1665571468,
        "nanoseconds": 353000000
      },
      "camp": null,
      "userName": "Aditya",
      "amTaxTDS": 0,
      "status": 10,
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "storeName": "Fit Food",
      "earn": 0,
      "ordrTYPE": "RefrCASH",
      "amRefr": 0.14,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "sin": {
        "seconds": 1665571160,
        "nanoseconds": 693000000
      },
      "journey": "BURN",
      "amTotal": 2.1,
      "amSale": 10,
      "refr": null,
      "logistics": {
        "typeShop": "Both",
        "phone": "8879751140",
        "addressDropT": "work",
        "status": 20,
        "typeOrdr": "BURN",
        "addressPickT": "shop",
        "name": "Aditya",
        "typeCat": "food_and_beverages",
        "PnD_parcelNotFree": false,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "PnD_freeStart": 0,
        "addressDrop": {
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "landmark": "Gagandeep bus stop",
          "zip": 400056,
          "type": "work"
        },
        "PnD_nationCharge": 0,
        "require": false,
        "PnD_cityCharge": 0,
        "addressPick": {
          "area": "Dent Heal",
          "state": "MH",
          "region": "Maharashtra",
          "lon": 72.83105909999999,
          "id": "IND_MH_1648672299398",
          "city": "Mumbai Suburban",
          "locality": "Mumbai",
          "zip": "400050",
          "line2": "",
          "nation": "IND",
          "lat": 19.0662066,
          "line1": "Dipesadsadas sadasdas"
        },
        "email": ""
      },
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
    },
    //f2f Delivered
    {
      "amTaxTDS": 0,
      "camp": {
        "min": 1200,
        "tX": "t1",
        "cbExi": 30,
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "type": "flat",
        "paused": false,
        "cbDir": 40,
        "expiry": false,
        "countM": 0,
        "name": "Campaign-39",
        "customPay": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "storeTyp": "Both",
        "max": 0,
        "countP": 0,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "cbNew": 80,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "stoped": false,
        "paid": false,
        "stage": 0,
        "ban": false,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "customAct": false,
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "countS": 0
      },
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amParcelCity": false,
      "amGateway": 0,
      "code": "A000Ky",
      "userName": "Aditya",
      "amTotal": 1.05,
      "cart": [
        {
          "content": true,
          "warranty": true,
          "title": "JimJam",
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "burn": false,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "quota": 0,
          "sold": 0,
          "cost": 1,
          "code": "123123123",
          "category": "chocolate",
          "description": "Chocolate",
          "reqBurn": false,
          "Q": 1,
          "variants": [],
          "vX": [],
          "banners": [],
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "id": "WdH3xlYAQlgwBkha2EsA",
          "price": 5
        }
      ],
      "amRefr": 0,
      "refr": {
        "name": "Aditya",
        "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "earn": 0
      },
      "id": "Jfuw3DUsgUYgITNAoipr",
      "journey": "F2F",
      "ordrTYPE": "RefrCASH",
      "shortID": "A000NO",
      "logistics": {
        "typeOrdr": "F2F_ONLINE",
        "typeSuCat": "sc-food_and_beverages-cafe",
        "PnD_nationCharge": 0,
        "PnD_cityCharge": 0,
        "addressPick": {
          "state": "MH",
          "region": "Maharashtra",
          "city": "Mumbai Suburban",
          "nation": "IND",
          "locality": "Mumbai",
          "zip": "400050",
          "id": "IND_MH_1648672299398",
          "lon": 72.83105909999999,
          "lat": 19.0662066,
          "area": "Dent Heal",
          "line2": "",
          "line1": "Dipesadsadas sadasdas"
        },
        "phone": "8879751140",
        "email": "",
        "addressPickT": "shop",
        "addressDropT": "work",
        "addressDrop": {
          "type": "work",
          "landmark": "Gagandeep bus stop",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "zip": 400056
        },
        "PnD_parcelNotFree": false,
        "require": false,
        "PnD_freeStart": 0,
        "typeShop": "Both",
        "status": 20,
        "name": "Aditya",
        "typeCat": "food_and_beverages"
      },
      "invoice": {
        "amtRefrCash": 1.05,
        "COD": false,
        "useRefrCash": true
      },
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "F2F",
        "A000Ky"
      ],
      "com": {
        "seconds": 1665571471,
        "nanoseconds": 387000000
      },
      "amCost": 0,
      "amSave": 5.05,
      "amTaxTCS": 0.01,
      "status": 10,
      "amSale": 5,
      "upd": {
        "seconds": 1665571137,
        "nanoseconds": 5000000
      },
      "amBurst": 1,
      "sin": {
        "seconds": 1665571137,
        "nanoseconds": 5000000
      },
      "storeName": "Fit Food",
      "amParcel": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "earn": 0,
      "amTax": 0.05,
      "setShortID": true
    },




    //direct shipping
    {
      "ordrTYPE": "RefrCASH",
      "amCost": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amBurst": 1,
      "amTaxTCS": 0.01,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      "amSale": 5,
      "userName": "Aditya",
      "amTaxTDS": 0,
      "amGateway": 0,
      "storeName": "Fit Food",
      "sin": {
        "seconds": 1665571097,
        "nanoseconds": 573000000
      },
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "camp": {
        "stoped": false,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "max": 0,
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "ban": false,
        "paused": false,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "cbNew": 80,
        "expiry": false,
        "name": "Campaign-39",
        "countS": 0,
        "countM": 0,
        "stage": 0,
        "cbDir": 40,
        "customPay": 0,
        "type": "flat",
        "countP": 0,
        "tX": "t1",
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "storeTyp": "Both",
        "min": 1200,
        "customAct": false,
        "paid": false,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "cbExi": 30
      },
      "status": 10,
      "amParcel": 0,
      "shortID": "A000NM",
      "refr": null,
      "amTotal": 1.05,
      "cart": [
        {
          "title": "JimJam",
          "content": true,
          "variants": [],
          "sold": 0,
          "code": "123123123",
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "price": 5,
          "banners": [],
          "warranty": true,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "cost": 1,
          "burn": false,
          "description": "Chocolate",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "vX": [],
          "id": "WdH3xlYAQlgwBkha2EsA",
          "category": "chocolate",
          "reqBurn": false,
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "Q": 1,
          "quota": 0
        }
      ],
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "journey": "DIRECT",
      "setShortID": true,
      "id": "SW9pblruzz2leJYmpqQS",
      "amRefr": 0,
      "upd": {
        "seconds": 1665571097,
        "nanoseconds": 573000000
      },
      "invoice": {
        "useRefrCash": true,
        "amtRefrCash": 1.05,
        "COD": false
      },
      "amTax": 0.05,
      "com": {
        "seconds": 1665571175,
        "nanoseconds": 896000000
      },
      "amSave": 5.05,
      "code": null,
      "earn": 0,
      "amParcelCity": false,
      "logistics": {
        "PnD_nationCharge": 0,
        "PnD_freeStart": 0,
        "email": "",
        "PnD_parcelNotFree": false,
        "addressPick": {
          "state": "MH",
          "city": "Mumbai Suburban",
          "lat": 19.0662066,
          "line1": "Dipesadsadas sadasdas",
          "region": "Maharashtra",
          "area": "Dent Heal",
          "lon": 72.83105909999999,
          "line2": "",
          "id": "IND_MH_1648672299398",
          "locality": "Mumbai",
          "zip": "400050",
          "nation": "IND"
        },
        "typeSuCat": "sc-food_and_beverages-cafe",
        "status": 10,
        "PnD_cityCharge": 0,
        "typeShop": "Both",
        "typeOrdr": "DIRECT_ONLINE",
        "phone": "8879751140",
        "addressDrop": {
          "zip": 400056,
          "landmark": "Gagandeep bus stop",
          "type": "work",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
        },
        "name": "Aditya",
        "require": false,
        "typeCat": "food_and_beverages",
        "addressPickT": "shop",
        "addressDropT": "work"
      }
    },
    // burn shipping 
    {
      "amSave": 10.1,
      "invoice": {
        "amtRefrCash": 2.1,
        "COD": false,
        "useRefrCash": true
      },
      "amTax": 0.1,
      "userName": "Aditya",
      "amParcel": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amRefr": 0.14,
      "amBurst": 2,
      "sin": {
        "seconds": 1665571160,
        "nanoseconds": 693000000
      },
      "shortID": "A000NQ",
      "logistics": {
        "addressPickT": "shop",
        "require": false,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "PnD_cityCharge": 0,
        "typeShop": "Both",
        "addressPick": {
          "area": "Dent Heal",
          "lon": 72.83105909999999,
          "locality": "Mumbai",
          "nation": "IND",
          "line2": "",
          "region": "Maharashtra",
          "state": "MH",
          "line1": "Dipesadsadas sadasdas",
          "zip": "400050",
          "city": "Mumbai Suburban",
          "lat": 19.0662066,
          "id": "IND_MH_1648672299398"
        },
        "PnD_parcelNotFree": false,
        "PnD_freeStart": 0,
        "typeCat": "food_and_beverages",
        "typeOrdr": "BURN",
        "name": "Aditya",
        "PnD_nationCharge": 0,
        "phone": "8879751140",
        "status": 10,
        "addressDropT": "work",
        "addressDrop": {
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "type": "work",
          "zip": 400056,
          "landmark": "Gagandeep bus stop"
        },
        "email": ""
      },
      "earn": 0,
      "id": "giAISi5kYGQEqPE0zKZ3",
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amParcelCity": false,
      "amGateway": 0,
      "camp": null,
      "amTaxTDS": 0,
      "setShortID": true,
      "amCost": 0,
      "ordrTYPE": "RefrCASH",
      "cart": [
        {
          "description": "rice",
          "burn": true,
          "burnDec": "abc",
          "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
          "burnHigh": "abc",
          "sin": {
            "seconds": 1664607562,
            "nanoseconds": 148000000
          },
          "burnDecShort": "abc",
          "storeINFO": {
            "shareUrlB1": "https://refrclub.com/o/4Yif",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
            "vAte": 151.2,
            "vFan": 23,
            "typeORDER": {
              "phoneHide": true,
              "freeParcel": false,
              "return": false,
              "cityCharge": 0,
              "exchange": false,
              "refund": false,
              "delivery": "Nationwide",
              "COD": true,
              "logistics": false,
              "freeStart": 0,
              "nationCharge": 0
            },
            "shareUrlV1": "https://refrclub.com/o/tobR",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "log": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
            "loc": [
              {
                "id": "IND_MH_1648672299398",
                "locality": "Mumbai",
                "line1": "Dipesadsadas sadasdas",
                "lat": 19.0662066,
                "nation": "IND",
                "area": "Dent Heal",
                "line2": "",
                "city": "Mumbai Suburban",
                "zip": "400050",
                "region": "Maharashtra",
                "state": "MH",
                "lon": 72.83105909999999
              },
              {
                "nation": "IND",
                "city": "Mumbai Suburban",
                "line2": "",
                "lat": 19.134840193193707,
                "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                "id": "IND_MH_1656024949912",
                "lon": 72.8213950683594,
                "locality": "Mumbai",
                "zip": "400053",
                "line1": "sadas sadasdasd sdasdas",
                "state": "MH",
                "region": "Maharashtra"
              }
            ],
            "shareUrlP1": "https://refrclub.com/o/EncD",
            "vGave": 1390,
            "name": "Fit Food",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "subCat": "sc-food_and_beverages-cafe",
            "proCat": [
              "gfjgjhgjhghjg",
              "hhkhkjhjk",
              "some category",
              "Dal",
              "Paneer",
              "Kolhapuri",
              "chocolate"
            ],
            "userInfo": {
              "acBalV": 4567.523859999997,
              "admin": true,
              "note": [],
              "soFB": "dip",
              "name": "Dipeshin",
              "storeSav": [
                "8B9ozj7aTPvywkIvVWiK",
                "tjOyZV9TVTpQ1hoccOYB"
              ],
              "soTW": "dip",
              "log": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "sin": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "ban": false,
              "soIG": "dipesious",
              "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
              "acBalGivenC": 1980,
              "upd": {
                "seconds": 1665263257,
                "nanoseconds": 854000000
              },
              "cashback": 80,
              "phone": "+919876543210",
              "BankUPI": {
                "contact_id": "cont_K9KglWSOWnTNTY",
                "verified": true,
                "active": true,
                "handle": "dbs",
                "fund_account_id": "fa_K9hVBLRtX776iF",
                "username": "dipesious",
                "address": "dipesious@dbs"
              },
              "email": "dipesious@hotmail.com",
              "payout": false,
              "iso": "IND",
              "acBalCr": 120,
              "acBalVr": 1792.4499999999998,
              "acBalC": 1113.5500000000002,
              "tokenSNS_": [
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
                "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
                "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
                "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
                "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
                "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
                "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
                "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
                "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
                "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
                "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
                "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
                "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
                "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
                "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
                "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
              ],
              "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "acBalGivenV": 1000,
              "addr": [
                {
                  "type": "work",
                  "zip": 401101,
                  "address": "abc",
                  "landmark": "xyz"
                },
                {
                  "landmark": "Tower",
                  "address": "Google",
                  "zip": 401101,
                  "type": "home"
                },
                {
                  "landmark": "Opposite gagandeep restaurant ",
                  "address": "101, Leena residence gulmohar road miraj",
                  "zip": 400056,
                  "type": "other"
                },
                {
                  "type": "other",
                  "zip": 400049,
                  "landmark": "Opposite naturals ",
                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme "
                }
              ],
              "acBalP": 0,
              "display": "",
              "acBalH": 395,
              "soYT": "simran",
              "axess": [
                "phone"
              ],
              "storeCam": [
                "2GHohG0jEfELHb30c1s7",
                "i9MvNIRSZEpyhp05UIws",
                "b8fHqM0fyh3EJfGARu3B",
                "69Hf6TISpLg3SDwpYyKy",
                "2VS4N7OkRrM5pHfwCNuV",
                "GBJPmnJ4Q1oA1ynW1brZ",
                "rDeB5DwD97Ff1NpLzFdj",
                "vJEzPDAJ5koqdbGa7k0N",
                "PJcK0Xh43tLpR44xtB6J",
                "FkvmAw4pKGhcSrFULyG2",
                "dLclMuk5iBysJvOoWRKi",
                "ZPkNWVk1trHm3b8GBr4F",
                "iWIXIPHAiDIiA9Euexst",
                "SBV6Jpa7a2844xyTxDEO",
                "1igU0j5Cxxah1ZzYW0oT",
                "OgkREW5oDc40YO1psg6q",
                "6YEVFDcrnwwGKc4IRPqX",
                "qc1ymcPpmQ8yEhHM8zLt",
                "2bwi1jsjci7YySD6FWHi",
                "x605L2J7JyTzfmtgFL7M",
                "TyWGWqQiOSEG0f4XSGju",
                "yKTiNocUlsW92jUlr0P1",
                "XQBQVol6L4AFU0wdRluS",
                "tt5W2R17MPqrjJA7azDi",
                "NhtKi3RTN2dLVzcH2hSu",
                "dO3WaZ05d3hBgnlt0Fj2",
                "sB3sHKwlhmqpkVPm2M1F",
                "bSOHjFq1z3di0kl7tDOK",
                "fjkXn0gPGux5uYQADX6v",
                "Muj3jGOZ7jOWeELzLe0Y",
                "5kaSYObDf7s1pRxvqp0s",
                "d3Kcq7I3sCdzWMPgD9Rm",
                "9e64iZ7UQ538nKB285XT",
                "IpQwjUjBAJW8eyMSDDWp",
                "xdiMTvN28RncaBT5HHms",
                "nRtRMxxicFvlARWiSR8y",
                "w4ELXiJiAiPY4RodAz7o",
                "78SEsrN2FWWM1NCSzRfk",
                "IzSNW9mwHpHHyZ6C9cAD"
              ],
              "coin": "INR",
              "storeLoc": [
                "8B9ozj7aTPvywkIvVWiK"
              ],
              "emails": [],
              "acBalVp": 16000,
              "bucket": [
                "6cZGYy20f5boFbbsXtYB",
                "qqMPDmqy0o01YiiIYqaE",
                "kxczduUeyyYUvoCyLvnO",
                "6uhvn2NoTtN8ONPuM2qj"
              ],
              "soWA": "9876543210",
              "emailV": false
            },
            "sin": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "email": "dipeshbhoir@hotmail.com",
            "schedule": {
              "openMon": true,
              "openSat": true,
              "openSunS": "06:00",
              "openWedE": "19:00",
              "openTueS": "06:00",
              "openThuS": "06:00",
              "openThuE": "19:00",
              "openSatE": "19:00",
              "opensDaily": false,
              "openSun": false,
              "openFriE": "19:00",
              "openThu": true,
              "opensDailyE": "23:00",
              "openWedS": "06:00",
              "openTueE": "19:00",
              "openWed": true,
              "openMonS": "09:00",
              "openFri": true,
              "openMonE": "19:00",
              "openSatS": "06:00",
              "openSunE": "19:00",
              "openFriS": "06:00",
              "opensDailyS": "10:00",
              "openTue": true
            },
            "id": "8B9ozj7aTPvywkIvVWiK",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "products": 18,
            "phone": "9876543210",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "shareUrlX1": "https://refrclub.com/o/WoQJ",
            "type": "Both",
            "addedDynamicLink": true,
            "about": "About the store",
            "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
            ],
            "cat": "food_and_beverages",
            "addedDynamicLinkP1": true,
            "upd": {
              "seconds": 1664544116,
              "nanoseconds": 946000000
            },
            "vEarn": 26400,
            "cashback": 80,
            "vOrdr": 23
          },
          "price": 10,
          "flash": false,
          "category": "Dal",
          "costBurn": 1.8,
          "quota": 0,
          "banners": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
          ],
          "burnSpec": "abc",
          "relate": [],
          "warranty": true,
          "burnCat": "food_and_beverages",
          "vX": [],
          "cost": 2,
          "id": "AH1YkgZwvrKZo1zcuDN9",
          "burnBrand": "abc",
          "Q": 1,
          "variants": [],
          "burnCatSub": "Nope",
          "code": "123123123123",
          "upd": {
            "seconds": 1665569994,
            "nanoseconds": 212000000
          },
          "sold": 0,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "content": true,
          "reqBurn": false,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "burnPics": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
          ],
          "title": "fried rice"
        }
      ],
      "refr": null,
      "upd": {
        "seconds": 1665571160,
        "nanoseconds": 693000000
      },
      "amTotal": 2.1,
      "code": null,
      "status": 10,
      "amSale": 10,
      "com": {
        "seconds": 1665571180,
        "nanoseconds": 781000000
      },
      "journey": "BURN",
      "storeName": "Fit Food",
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "addORDER",
        "BURN",
        null
      ],
      "amTaxTCS": 0.02,
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
    },
    //f2f shipping 
    {
      "earn": 0,
      "amParcel": 0,
      "amTotal": 1.05,
      "refr": {
        "name": "Aditya",
        "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "earn": 0
      },
      "cart": [
        {
          "sold": 0,
          "content": true,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "Q": 1,
          "cost": 1,
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "vX": [],
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "burn": false,
          "id": "WdH3xlYAQlgwBkha2EsA",
          "description": "Chocolate",
          "quota": 0,
          "banners": [],
          "category": "chocolate",
          "reqBurn": false,
          "variants": [],
          "warranty": true,
          "price": 5,
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "title": "JimJam",
          "code": "123123123"
        }
      ],
      "amSale": 5,
      "camp": {
        "cbDir": 40,
        "type": "flat",
        "stage": 0,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "countM": 0,
        "paused": false,
        "tX": "t1",
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "customPay": 0,
        "paid": false,
        "countP": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "countS": 0,
        "storeTyp": "Both",
        "ban": false,
        "expiry": false,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "stoped": false,
        "cbNew": 80,
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "min": 1200,
        "max": 0,
        "name": "Campaign-39",
        "customAct": false,
        "cbExi": 30
      },
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "journey": "F2F",
      "amSave": 5.05,
      "userName": "Aditya",
      "com": {
        "seconds": 1665571184,
        "nanoseconds": 563000000
      },
      "sin": {
        "seconds": 1665571137,
        "nanoseconds": 5000000
      },
      "ordrTYPE": "RefrCASH",
      "amTax": 0.05,
      "invoice": {
        "COD": false,
        "amtRefrCash": 1.05,
        "useRefrCash": true
      },
      "status": 10,
      "amTaxTDS": 0,
      "amGateway": 0,
      "amParcelCity": false,
      "amTaxTCS": 0.01,
      "code": "A000Ky",
      "amBurst": 1,
      "logistics": {
        "typeOrdr": "F2F_ONLINE",
        "email": "",
        "typeSuCat": "sc-food_and_beverages-cafe",
        "PnD_parcelNotFree": false,
        "typeCat": "food_and_beverages",
        "PnD_nationCharge": 0,
        "PnD_cityCharge": 0,
        "status": 10,
        "addressDrop": {
          "landmark": "Gagandeep bus stop",
          "zip": 400056,
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "type": "work"
        },
        "addressPickT": "shop",
        "phone": "8879751140",
        "name": "Aditya",
        "require": false,
        "typeShop": "Both",
        "addressDropT": "work",
        "PnD_freeStart": 0,
        "addressPick": {
          "nation": "IND",
          "line1": "Dipesadsadas sadasdas",
          "city": "Mumbai Suburban",
          "lon": 72.83105909999999,
          "line2": "",
          "zip": "400050",
          "id": "IND_MH_1648672299398",
          "region": "Maharashtra",
          "locality": "Mumbai",
          "state": "MH",
          "lat": 19.0662066,
          "area": "Dent Heal"
        }
      },
      "amCost": 0,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "F2F",
        "A000Ky"
      ],
      "shortID": "A000NO",
      "upd": {
        "seconds": 1665571137,
        "nanoseconds": 5000000
      },
      "amRefr": 0,
      "setShortID": true,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "id": "Jfuw3DUsgUYgITNAoipr",
      "storeName": "Fit Food"
    },




    //direct refunded
    {
      "amSave": 5.05,
      "status": -10,
      "cart": [
        {
          "burn": false,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "code": "123123123",
          "description": "Chocolate",
          "title": "JimJam",
          "banners": [],
          "warranty": true,
          "price": 5,
          "category": "chocolate",
          "sold": 0,
          "content": true,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "variants": [],
          "quota": 0,
          "vX": [],
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "reqBurn": false,
          "id": "WdH3xlYAQlgwBkha2EsA",
          "cost": 1,
          "Q": 1
        }
      ],
      "amTotal": 1.05,
      "code": null,
      "sin": {
        "seconds": 1665570510,
        "nanoseconds": 569000000
      },
      "storeName": "Fit Food",
      "com": {
        "seconds": 1665570553,
        "nanoseconds": 862000000
      },
      "amTaxTCS": 0.01,
      "journey": "DIRECT",
      "gwRefund": [
        {}
      ],
      "setShortID": true,
      "amParcel": 0,
      "id": "rDtTWZclSMX0khre8BDC",
      "ordrTYPE": "RefrCASH",
      "amBurst": 1,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      "amSale": 5,
      "refr": null,
      "invoice": {
        "COD": false,
        "useRefrCash": true,
        "amtRefrCash": 1.05
      },
      "amTax": 0.05,
      "amGateway": 0,
      "userName": "Aditya",
      "amParcelCity": false,
      "camp": {
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "paid": false,
        "customAct": false,
        "tX": "t1",
        "cbExi": 30,
        "customPay": 0,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "name": "Campaign-39",
        "countP": 0,
        "cbDir": 40,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "stoped": false,
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "paused": false,
        "expiry": false,
        "stage": 0,
        "countM": 0,
        "storeTyp": "Both",
        "countS": 0,
        "type": "flat",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "min": 1200,
        "max": 0,
        "ban": false,
        "cbNew": 80
      },
      "shortID": "A000NI",
      "logistics": {
        "PnD_cityCharge": 0,
        "addressPickT": "shop",
        "PnD_freeStart": 0,
        "addressPick": {
          "region": "Maharashtra",
          "city": "Mumbai Suburban",
          "line2": "",
          "area": "Dent Heal",
          "zip": "400050",
          "id": "IND_MH_1648672299398",
          "state": "MH",
          "nation": "IND",
          "locality": "Mumbai",
          "lon": 72.83105909999999,
          "line1": "Dipesadsadas sadasdas",
          "lat": 19.0662066
        },
        "addressDropT": "work",
        "typeSuCat": "sc-food_and_beverages-cafe",
        "phone": "8879751140",
        "addressDrop": {
          "landmark": "Gagandeep bus stop",
          "zip": 400056,
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "type": "work"
        },
        "require": false,
        "email": "",
        "PnD_nationCharge": 0,
        "name": "Aditya",
        "status": -1000,
        "typeOrdr": "DIRECT_ONLINE",
        "typeCat": "food_and_beverages",
        "typeShop": "Both",
        "PnD_parcelNotFree": false
      },
      "amTaxTDS": 0,
      "amCost": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "upd": {
        "seconds": 1665570510,
        "nanoseconds": 569000000
      },
      "amRefr": 0,
      "earn": 0
    },
    //f2f refunded
    {
      "camp": {
        "paid": false,
        "cbExi": 30,
        "stoped": false,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "expiry": false,
        "customAct": false,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "max": 0,
        "customPay": 0,
        "storeTyp": "Both",
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "type": "flat",
        "cbNew": 80,
        "cbDir": 40,
        "countM": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "paused": false,
        "countS": 0,
        "ban": false,
        "countP": 0,
        "tX": "t1",
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "min": 1200,
        "name": "Campaign-39",
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "stage": 0
      },
      "amBurst": 1,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "F2F",
        "A000Ky"
      ],
      "amCost": 0,
      "gwRefund": [
        {}
      ],
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "status": -10,
      "amTotal": 1.05,
      "ordrTYPE": "RefrCASH",
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "id": "P5sPvvO6fFlclfN4DN5j",
      "amSale": 5,
      "amTaxTCS": 0.01,
      "cart": [
        {
          "sold": 0,
          "burn": false,
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "quota": 0,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "banners": [],
          "reqBurn": false,
          "cost": 1,
          "id": "WdH3xlYAQlgwBkha2EsA",
          "price": 5,
          "category": "chocolate",
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "Q": 1,
          "description": "Chocolate",
          "vX": [],
          "code": "123123123",
          "warranty": true,
          "content": true,
          "variants": [],
          "title": "JimJam"
        }
      ],
      "storeName": "Fit Food",
      "amParcel": 0,
      "journey": "F2F",
      "userName": "Aditya",
      "amSave": 5.05,
      "code": "A000Ky",
      "amTax": 0.05,
      "sin": {
        "seconds": 1665570592,
        "nanoseconds": 769000000
      },
      "shortID": "A000NK",
      "invoice": {
        "useRefrCash": true,
        "COD": false,
        "amtRefrCash": 1.05
      },
      "setShortID": true,
      "amGateway": 0,
      "amParcelCity": false,
      "amTaxTDS": 0,
      "earn": 0,
      "amRefr": 0,
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "upd": {
        "seconds": 1665570592,
        "nanoseconds": 769000000
      },
      "logistics": {
        "typeShop": "Both",
        "typeOrdr": "F2F_ONLINE",
        "status": -1000,
        "require": false,
        "addressDropT": "work",
        "PnD_nationCharge": 0,
        "PnD_freeStart": 0,
        "name": "Aditya",
        "PnD_parcelNotFree": false,
        "addressPick": {
          "area": "Dent Heal",
          "locality": "Mumbai",
          "line2": "",
          "city": "Mumbai Suburban",
          "id": "IND_MH_1648672299398",
          "lon": 72.83105909999999,
          "line1": "Dipesadsadas sadasdas",
          "zip": "400050",
          "nation": "IND",
          "state": "MH",
          "lat": 19.0662066,
          "region": "Maharashtra"
        },
        "email": "",
        "typeCat": "food_and_beverages",
        "typeSuCat": "sc-food_and_beverages-cafe",
        "addressDrop": {
          "landmark": "Gagandeep bus stop",
          "type": "work",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "zip": 400056
        },
        "phone": "8879751140",
        "addressPickT": "shop",
        "PnD_cityCharge": 0
      },
      "refr": {
        "earn": 0,
        "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "name": "Aditya"
      },
      "com": {
        "seconds": 1665570601,
        "nanoseconds": 650000000
      }
    },
    //burn Refunded
    {
      "userName": "Aditya",
      "ordrTYPE": "RefrCASH",
      "sin": {
        "seconds": 1665570347,
        "nanoseconds": 471000000
      },
      "amTaxTCS": 0.02,
      "code": null,
      "journey": "BURN",
      "refr": null,
      "upd": {
        "seconds": 1665570347,
        "nanoseconds": 471000000
      },
      "amCost": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "logistics": {
        "typeShop": "Both",
        "addressPickT": "shop",
        "name": "Aditya",
        "PnD_nationCharge": 0,
        "PnD_parcelNotFree": false,
        "PnD_cityCharge": 0,
        "addressDropT": "work",
        "addressPick": {
          "locality": "Mumbai",
          "line2": "",
          "id": "IND_MH_1648672299398",
          "state": "MH",
          "line1": "Dipesadsadas sadasdas",
          "zip": "400050",
          "area": "Dent Heal",
          "nation": "IND",
          "lon": 72.83105909999999,
          "city": "Mumbai Suburban",
          "region": "Maharashtra",
          "lat": 19.0662066
        },
        "typeOrdr": "BURN",
        "email": "",
        "phone": "8879751140",
        "require": false,
        "typeCat": "food_and_beverages",
        "PnD_freeStart": 0,
        "addressDrop": {
          "zip": 400056,
          "landmark": "Gagandeep bus stop",
          "type": "work",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
        },
        "typeSuCat": "sc-food_and_beverages-cafe",
        "status": -1000
      },
      "status": -10,
      "amTaxTDS": 0,
      "amSave": 10.1,
      "storeName": "Fit Food",
      "amGateway": 0,
      "camp": null,
      "cart": [
        {
          "burnDec": "abc",
          "code": "123123123123",
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "burn": true,
          "burnDecShort": "abc",
          "id": "AH1YkgZwvrKZo1zcuDN9",
          "warranty": true,
          "burnBrand": "abc",
          "flash": false,
          "content": true,
          "variants": [],
          "costBurn": 1.8,
          "sin": {
            "seconds": 1664607562,
            "nanoseconds": 148000000
          },
          "price": 10,
          "quota": 0,
          "title": "fried rice",
          "cost": 2,
          "burnSpec": "abc",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "upd": {
            "seconds": 1665569994,
            "nanoseconds": 212000000
          },
          "Q": 1,
          "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
          "reqBurn": false,
          "vX": [],
          "storeINFO": {
            "type": "Both",
            "userInfo": {
              "emailV": false,
              "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
              "BankUPI": {
                "username": "dipesious",
                "verified": true,
                "address": "dipesious@dbs",
                "fund_account_id": "fa_K9hVBLRtX776iF",
                "active": true,
                "handle": "dbs",
                "contact_id": "cont_K9KglWSOWnTNTY"
              },
              "soIG": "dipesious",
              "name": "Dipeshin",
              "soYT": "simran",
              "storeSav": [
                "8B9ozj7aTPvywkIvVWiK",
                "tjOyZV9TVTpQ1hoccOYB"
              ],
              "payout": false,
              "email": "dipesious@hotmail.com",
              "sin": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "acBalGivenV": 1000,
              "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "acBalVr": 1790.35,
              "soWA": "9876543210",
              "acBalV": 4567.523859999997,
              "axess": [
                "phone"
              ],
              "storeLoc": [
                "8B9ozj7aTPvywkIvVWiK"
              ],
              "ban": false,
              "soTW": "dip",
              "acBalH": 395,
              "bucket": [
                "6cZGYy20f5boFbbsXtYB",
                "qqMPDmqy0o01YiiIYqaE",
                "kxczduUeyyYUvoCyLvnO",
                "6uhvn2NoTtN8ONPuM2qj"
              ],
              "acBalGivenC": 1980,
              "acBalP": 0,
              "display": "",
              "cashback": 80,
              "iso": "IND",
              "addr": [
                {
                  "address": "abc",
                  "landmark": "xyz",
                  "zip": 401101,
                  "type": "work"
                },
                {
                  "landmark": "Tower",
                  "type": "home",
                  "zip": 401101,
                  "address": "Google"
                },
                {
                  "landmark": "Opposite gagandeep restaurant ",
                  "type": "other",
                  "zip": 400056,
                  "address": "101, Leena residence gulmohar road miraj"
                },
                {
                  "landmark": "Opposite naturals ",
                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                  "zip": 400049,
                  "type": "other"
                }
              ],
              "tokenSNS_": [
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
                "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
                "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
                "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
                "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
                "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
                "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
                "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
                "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
                "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
                "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
                "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
                "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
                "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
                "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
                "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
              ],
              "storeCam": [
                "2GHohG0jEfELHb30c1s7",
                "i9MvNIRSZEpyhp05UIws",
                "b8fHqM0fyh3EJfGARu3B",
                "69Hf6TISpLg3SDwpYyKy",
                "2VS4N7OkRrM5pHfwCNuV",
                "GBJPmnJ4Q1oA1ynW1brZ",
                "rDeB5DwD97Ff1NpLzFdj",
                "vJEzPDAJ5koqdbGa7k0N",
                "PJcK0Xh43tLpR44xtB6J",
                "FkvmAw4pKGhcSrFULyG2",
                "dLclMuk5iBysJvOoWRKi",
                "ZPkNWVk1trHm3b8GBr4F",
                "iWIXIPHAiDIiA9Euexst",
                "SBV6Jpa7a2844xyTxDEO",
                "1igU0j5Cxxah1ZzYW0oT",
                "OgkREW5oDc40YO1psg6q",
                "6YEVFDcrnwwGKc4IRPqX",
                "qc1ymcPpmQ8yEhHM8zLt",
                "2bwi1jsjci7YySD6FWHi",
                "x605L2J7JyTzfmtgFL7M",
                "TyWGWqQiOSEG0f4XSGju",
                "yKTiNocUlsW92jUlr0P1",
                "XQBQVol6L4AFU0wdRluS",
                "tt5W2R17MPqrjJA7azDi",
                "NhtKi3RTN2dLVzcH2hSu",
                "dO3WaZ05d3hBgnlt0Fj2",
                "sB3sHKwlhmqpkVPm2M1F",
                "bSOHjFq1z3di0kl7tDOK",
                "fjkXn0gPGux5uYQADX6v",
                "Muj3jGOZ7jOWeELzLe0Y",
                "5kaSYObDf7s1pRxvqp0s",
                "d3Kcq7I3sCdzWMPgD9Rm",
                "9e64iZ7UQ538nKB285XT",
                "IpQwjUjBAJW8eyMSDDWp",
                "xdiMTvN28RncaBT5HHms",
                "nRtRMxxicFvlARWiSR8y",
                "w4ELXiJiAiPY4RodAz7o",
                "78SEsrN2FWWM1NCSzRfk",
                "IzSNW9mwHpHHyZ6C9cAD"
              ],
              "acBalCr": 120,
              "soFB": "dip",
              "note": [],
              "emails": [],
              "coin": "INR",
              "phone": "+919876543210",
              "acBalVp": 16000,
              "upd": {
                "seconds": 1665263257,
                "nanoseconds": 854000000
              },
              "admin": true,
              "acBalC": 1113.5500000000002,
              "log": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              }
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
            "shareUrlX1": "https://refrclub.com/o/WoQJ",
            "typeORDER": {
              "refund": false,
              "return": false,
              "phoneHide": true,
              "delivery": "Nationwide",
              "exchange": false,
              "logistics": false,
              "freeParcel": false,
              "freeStart": 0,
              "COD": true,
              "cityCharge": 0,
              "nationCharge": 0
            },
            "shareUrlB1": "https://refrclub.com/o/4Yif",
            "addedDynamicLink": true,
            "id": "8B9ozj7aTPvywkIvVWiK",
            "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
            ],
            "email": "dipeshbhoir@hotmail.com",
            "subCat": "sc-food_and_beverages-cafe",
            "shareUrlV1": "https://refrclub.com/o/tobR",
            "loc": [
              {
                "lon": 72.83105909999999,
                "id": "IND_MH_1648672299398",
                "region": "Maharashtra",
                "lat": 19.0662066,
                "nation": "IND",
                "state": "MH",
                "area": "Dent Heal",
                "line1": "Dipesadsadas sadasdas",
                "locality": "Mumbai",
                "zip": "400050",
                "city": "Mumbai Suburban",
                "line2": ""
              },
              {
                "lat": 19.134840193193707,
                "region": "Maharashtra",
                "locality": "Mumbai",
                "zip": "400053",
                "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                "state": "MH",
                "line2": "",
                "id": "IND_MH_1656024949912",
                "line1": "sadas sadasdasd sdasdas",
                "lon": 72.8213950683594,
                "city": "Mumbai Suburban",
                "nation": "IND"
              }
            ],
            "cat": "food_and_beverages",
            "about": "About the store",
            "upd": {
              "seconds": 1664544116,
              "nanoseconds": 946000000
            },
            "schedule": {
              "openFriS": "06:00",
              "openTueE": "19:00",
              "openSunS": "06:00",
              "openWedS": "06:00",
              "openWedE": "19:00",
              "openWed": true,
              "openFri": true,
              "openTueS": "06:00",
              "openThuS": "06:00",
              "openMonE": "19:00",
              "openTue": true,
              "openSun": false,
              "openThu": true,
              "openThuE": "19:00",
              "opensDailyS": "10:00",
              "openMonS": "09:00",
              "openMon": true,
              "opensDaily": false,
              "openSatS": "06:00",
              "openSunE": "19:00",
              "opensDailyE": "23:00",
              "openSat": true,
              "openSatE": "19:00",
              "openFriE": "19:00"
            },
            "log": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "vOrdr": 23,
            "vGave": 1390,
            "addedDynamicLinkP1": true,
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "phone": "9876543210",
            "vAte": 151.2,
            "name": "Fit Food",
            "proCat": [
              "gfjgjhgjhghjg",
              "hhkhkjhjk",
              "some category",
              "Dal",
              "Paneer",
              "Kolhapuri",
              "chocolate"
            ],
            "vEarn": 26400,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "cashback": 80,
            "vFan": 23,
            "sin": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "shareUrlP1": "https://refrclub.com/o/EncD",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "products": 18
          },
          "relate": [],
          "description": "rice",
          "burnCatSub": "Nope",
          "banners": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
          ],
          "category": "Dal",
          "sold": 0,
          "burnHigh": "abc",
          "burnPics": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
          ],
          "burnCat": "food_and_beverages"
        }
      ],
      "shortID": "A000NG",
      "amSale": 10,
      "setShortID": true,
      "com": {
        "seconds": 1665570374,
        "nanoseconds": 50000000
      },
      "amParcelCity": false,
      "earn": 0,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "addORDER",
        "BURN",
        null
      ],
      "id": "Bzb57VAYU44YqwqYB2nq",
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "invoice": {
        "useRefrCash": true,
        "amtRefrCash": 2.1,
        "COD": false
      },
      "gwRefund": [
        {}
      ],
      "amTotal": 2.1,
      "amRefr": 0.14,
      "amBurst": 2,
      "amParcel": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amTax": 0.1
    },




    //BURN online placed && logistics not require
    {
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "invoice": {
        "COD": false,
        "useRefrCash": true,
        "amtRefrCash": 2.1
      },
      "earn": 0,
      "status": 0,
      "amTaxTDS": 0,
      "shortID": "A000NE",
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amRefr": 0.14,
      "setShortID": true,
      "amSale": 10,
      "ordrTYPE": "RefrCASH",
      "amTax": 0.1,
      "amSave": 10.1,
      "refr": null,
      "amCost": 0,
      "amBurst": 2,
      "storeName": "Fit Food",
      "amParcelCity": false,
      "amTaxTCS": 0.02,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amTotal": 2.1,
      "logistics": {
        "phone": "8879751140",
        "addressPick": {
          "locality": "Mumbai",
          "id": "IND_MH_1648672299398",
          "state": "MH",
          "lon": 72.83105909999999,
          "area": "Dent Heal",
          "city": "Mumbai Suburban",
          "nation": "IND",
          "zip": "400050",
          "lat": 19.0662066,
          "region": "Maharashtra",
          "line1": "Dipesadsadas sadasdas",
          "line2": ""
        },
        "PnD_freeStart": 0,
        "PnD_cityCharge": 0,
        "status": 0,
        "PnD_nationCharge": 0,
        "addressDrop": {
          "zip": 400056,
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "landmark": "Gagandeep bus stop",
          "type": "work"
        },
        "email": "",
        "PnD_parcelNotFree": false,
        "typeCat": "food_and_beverages",
        "name": "Aditya",
        "typeShop": "Both",
        "typeOrdr": "BURN",
        "require": false,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "addressDropT": "work",
        "addressPickT": "shop"
      },
      "upd": {
        "seconds": 1665570039,
        "nanoseconds": 647000000
      },
      "id": "GRMDD8bREgOYsqezjoXE",
      "amGateway": 0,
      "com": {
        "seconds": 1665570039,
        "nanoseconds": 647000000
      },
      "code": null,
      "journey": "BURN",
      "amParcel": 0,
      "camp": null,
      "cart": [
        {
          "Q": 1,
          "relate": [],
          "content": true,
          "quota": 0,
          "description": "rice",
          "burn": true,
          "vX": [],
          "reqBurn": false,
          "burnCat": "food_and_beverages",
          "burnSpec": "abc",
          "flash": false,
          "variants": [],
          "category": "Dal",
          "warranty": true,
          "burnHigh": "abc",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730",
          "price": 10,
          "id": "AH1YkgZwvrKZo1zcuDN9",
          "storeINFO": {
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "sin": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "typeORDER": {
              "COD": true,
              "freeStart": 0,
              "phoneHide": true,
              "exchange": false,
              "return": false,
              "logistics": false,
              "refund": false,
              "freeParcel": false,
              "delivery": "Nationwide",
              "nationCharge": 0,
              "cityCharge": 0
            },
            "vOrdr": 23,
            "type": "Both",
            "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
            "cashback": 80,
            "shareUrlX1": "https://refrclub.com/o/WoQJ",
            "addedDynamicLinkP1": true,
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "about": "About the store",
            "id": "8B9ozj7aTPvywkIvVWiK",
            "email": "dipeshbhoir@hotmail.com",
            "vGave": 1390,
            "shareUrlB1": "https://refrclub.com/o/4Yif",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
            "loc": [
              {
                "line2": "",
                "lon": 72.83105909999999,
                "region": "Maharashtra",
                "state": "MH",
                "area": "Dent Heal",
                "line1": "Dipesadsadas sadasdas",
                "zip": "400050",
                "nation": "IND",
                "city": "Mumbai Suburban",
                "id": "IND_MH_1648672299398",
                "lat": 19.0662066,
                "locality": "Mumbai"
              },
              {
                "lon": 72.8213950683594,
                "line1": "sadas sadasdasd sdasdas",
                "locality": "Mumbai",
                "state": "MH",
                "lat": 19.134840193193707,
                "id": "IND_MH_1656024949912",
                "zip": "400053",
                "line2": "",
                "city": "Mumbai Suburban",
                "nation": "IND",
                "region": "Maharashtra",
                "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India"
              }
            ],
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
            "phone": "9876543210",
            "userInfo": {
              "axess": [
                "phone"
              ],
              "soWA": "9876543210",
              "acBalV": 4567.523859999997,
              "storeCam": [
                "2GHohG0jEfELHb30c1s7",
                "i9MvNIRSZEpyhp05UIws",
                "b8fHqM0fyh3EJfGARu3B",
                "69Hf6TISpLg3SDwpYyKy",
                "2VS4N7OkRrM5pHfwCNuV",
                "GBJPmnJ4Q1oA1ynW1brZ",
                "rDeB5DwD97Ff1NpLzFdj",
                "vJEzPDAJ5koqdbGa7k0N",
                "PJcK0Xh43tLpR44xtB6J",
                "FkvmAw4pKGhcSrFULyG2",
                "dLclMuk5iBysJvOoWRKi",
                "ZPkNWVk1trHm3b8GBr4F",
                "iWIXIPHAiDIiA9Euexst",
                "SBV6Jpa7a2844xyTxDEO",
                "1igU0j5Cxxah1ZzYW0oT",
                "OgkREW5oDc40YO1psg6q",
                "6YEVFDcrnwwGKc4IRPqX",
                "qc1ymcPpmQ8yEhHM8zLt",
                "2bwi1jsjci7YySD6FWHi",
                "x605L2J7JyTzfmtgFL7M",
                "TyWGWqQiOSEG0f4XSGju",
                "yKTiNocUlsW92jUlr0P1",
                "XQBQVol6L4AFU0wdRluS",
                "tt5W2R17MPqrjJA7azDi",
                "NhtKi3RTN2dLVzcH2hSu",
                "dO3WaZ05d3hBgnlt0Fj2",
                "sB3sHKwlhmqpkVPm2M1F",
                "bSOHjFq1z3di0kl7tDOK",
                "fjkXn0gPGux5uYQADX6v",
                "Muj3jGOZ7jOWeELzLe0Y",
                "5kaSYObDf7s1pRxvqp0s",
                "d3Kcq7I3sCdzWMPgD9Rm",
                "9e64iZ7UQ538nKB285XT",
                "IpQwjUjBAJW8eyMSDDWp",
                "xdiMTvN28RncaBT5HHms",
                "nRtRMxxicFvlARWiSR8y",
                "w4ELXiJiAiPY4RodAz7o",
                "78SEsrN2FWWM1NCSzRfk",
                "IzSNW9mwHpHHyZ6C9cAD"
              ],
              "BankUPI": {
                "fund_account_id": "fa_K9hVBLRtX776iF",
                "contact_id": "cont_K9KglWSOWnTNTY",
                "verified": true,
                "handle": "dbs",
                "active": true,
                "username": "dipesious",
                "address": "dipesious@dbs"
              },
              "soIG": "dipesious",
              "name": "Dipeshin",
              "acBalGivenC": 1980,
              "cashback": 80,
              "acBalVp": 16000,
              "ban": false,
              "sin": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "display": "",
              "soFB": "dip",
              "acBalC": 1113.5500000000002,
              "emails": [],
              "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "coin": "INR",
              "storeLoc": [
                "8B9ozj7aTPvywkIvVWiK"
              ],
              "note": [],
              "iso": "IND",
              "phone": "+919876543210",
              "email": "dipesious@hotmail.com",
              "acBalP": 0,
              "addr": [
                {
                  "type": "work",
                  "landmark": "xyz",
                  "zip": 401101,
                  "address": "abc"
                },
                {
                  "landmark": "Tower",
                  "zip": 401101,
                  "address": "Google",
                  "type": "home"
                },
                {
                  "type": "other",
                  "zip": 400056,
                  "address": "101, Leena residence gulmohar road miraj",
                  "landmark": "Opposite gagandeep restaurant "
                },
                {
                  "zip": 400049,
                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                  "landmark": "Opposite naturals ",
                  "type": "other"
                }
              ],
              "storeSav": [
                "8B9ozj7aTPvywkIvVWiK",
                "tjOyZV9TVTpQ1hoccOYB"
              ],
              "acBalH": 395,
              "admin": true,
              "tokenSNS": "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
              "upd": {
                "seconds": 1665263257,
                "nanoseconds": 854000000
              },
              "tokenSNS_": [
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bHmFCCDYWtAxwbrRD9uHTYF1x62rxq9tI3l_9JD2hk7lRocSXneo2oOHF8Z5OnIIf8qy0avlBL1sYJzwd0HWrJ-Q0EPr3ZeGto2LzkgNbwAPeuN10_38D_pFLx-8misEuIgj-Nb",
                "ffWZ6dpY82FWPAvXT7SIsk:APA91bEH6u99bQob267egHdRtKpBc0i7AIemAfXOBn-uwzvpzvAO8ZNT2vqo017zUCG4zv1EzzEnuPH1O9w6XrcVQ-sTtge5s9un9TaHnZbjbyyULGNxcde-wWJzXi3Wdd-K4dLkJpWe",
                "dTineEWQfV2m7bczf6c62G:APA91bE1nOxJ63-J5jxwIL43ifQVbvmVLvLnwRs9ri4lR3kNtWc_B462SNCuLB977cMvR5jrl3YlLIbKtR1CyaGKda0nsytZtYg3U9O7kGtmtl-ESYRWrwQ4r5Zzxtsns4eb9WYBhzTo",
                "daYwd_DVQ6ZThfEA0mh4LN:APA91bFfsusL-1n5yNE1mTgDG2_u26CqogTQrJXUchmEEUkOjT7XnqrEePGgIp6M_DBIUuiAltYtjXjA2FS18jtt4GZsvqNYqKCkZrTAusY3gK9ppA8aflucATEM1rZ_3GG-whKFBMvl",
                "eNtyp7gw339Ut0MzmPv8-L:APA91bGtNdORcB3nqvMGKx9LbZpBRIB8eqhuCCm3qRR8LiWpv_JCqY7_DUSyp5Dz0FvKABxTBOB6LohB3tEtBMpd--LHNwFZYEqwrSj_Kizgfy5c2xlVzpHDnPEAJ1yJrkINORXQnplq",
                "fhnC5kc7OmtGT1rWc_2ceB:APA91bHkigJbdJy3fIKAcxhZygdAdDFGM9TDEsxnZYwPBdSHzW7mTVIZ6seU84dHN_lFNF7hQXiKPvPP7FldgHzEMTVMn-xeHJ0qGEhchBnXYO0mtcEpAc29jCPPDG5jqi5OpzM3Dfgr",
                "fBR0tI72Jc_IFoPHfHErZK:APA91bFb1F22vD_Q7vGOP-dT8SGlDQYur0JRL1LEN1p9wmsj2AMWEVM-6hP2J1jXFR567sE7gJVjaZL3CZ3RjBHhnZSLR7fM0C4SN4LU_RG5VB29fMHvG5NIOt1eLw-Yh4AfXHl5NcWY",
                "edhEDnwVT7qSrPdcGcohxs:APA91bFCbi423quiFAz3BL5obx11Jx2PGln-JpMujdFU5Trq-ThrT6ZF_Sj9-J4k3OdpbGFBkTzOIzXsRmioUypVfuGmTPiMSlWVQ2jYPFr3vvJiUBmPdJ5_R0-PsDhT0zdrTWvppR7A",
                "egTUaiCJ9xDJKQLjCvzJSc:APA91bFAridiMyeO8rhTiy59w_oal3knnT6TMdWtWZRsTGEdGxFTVN1tOitmNp_XNwkk_BIYTCuLqa9H0UG975sdP5L5Cz8fHXCSbqTJ0WWs-CubvnFqK1ke8ddUY8bc_G0xdNf6ZzrG",
                "dhqliWZSYkqGntlv-XaGGz:APA91bEUwFVhS646Bf6pPGt5Iu3RWIBwfXBKBLt2Y7y0cNOadF2tA-LMd4H9fITztlJNewZ1IF8SF_ZV5b_QBhBdvJpNiJFEZjEqGjt4k5YhxHYSM0I99kM_sYF3-Zy_cuJGC8ZLcLMd",
                "dTineEWQfV2m7bczf6c62G:APA91bFQ8746LCEs4uVZLlYlto24yfiIOOtx5ONccI5u8GZ7zjn0rZVM0JjDM_4Macb-RUyjUsBwJ4by7J_yHLOteH3xtJJ_U8Fi9G9IWvjGRbkWt20kI2hEbWK7zqJWM_gtteL0UPiO",
                "dCw7xEAMROcu8xxyVKMFEP:APA91bG87ZQxoYvc1iBCFLBl5k8e2vYXdQh2Sap_BBFzFQwiBAxemkjUV8MWRQHVa5GFpCqt5q7hk1opMrc7o6rQ8MKatueQCVspxGrjwTljM6bA84xer7UjroX5j8AzEVtevTh0GlPv",
                "fE6EDiDYicfhG0OJ8QJ8QH:APA91bGszCJxdKEnzRW7AIVxF_xjVCZRkC49JNB9q4Kxs2n-u6CMbl5g_-BaUvEZ9poSNAS89vOl9T6fbU2b4a4ECQZyw8n7nWAHEJ22A0i6-H_K6DUowKpkd_48I4mix4CtsBPbvNtT",
                "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
                "dUHJLE688QbSa792zcof-u:APA91bFs0EV5F8wxGs9nS8AXOSKnpF4m6y1JmNOnJkdzX7xMNLH7UkDmZcq2swNmQslu61iOZDiNG7ciqPGIe4_HGcVVp7jtoI1NkaHLKrYWUkZf8CDpgm5dSFv0u0FNa6BLDU1Bs3Uu",
                "e3iqglsFuGh6J7iV3T_jjb:APA91bHuNL-d3F6F--CEMYxZTnMGFLN_iMRG142K9QW290NPqDYpd-97nw14cOo0O0baCFyctvCB-DZXdTBuPB3vRUEiID31PI2dH9jcFSkMm8XXewOaFzL6QDGiuvI_X1Un7vhMXcPY",
                "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ"
              ],
              "soTW": "dip",
              "log": {
                "seconds": 1648670306,
                "nanoseconds": 23000000
              },
              "bucket": [
                "6cZGYy20f5boFbbsXtYB",
                "qqMPDmqy0o01YiiIYqaE",
                "kxczduUeyyYUvoCyLvnO",
                "6uhvn2NoTtN8ONPuM2qj"
              ],
              "emailV": false,
              "soYT": "simran",
              "acBalCr": 120,
              "acBalVr": 1788.25,
              "acBalGivenV": 1000,
              "payout": false
            },
            "name": "Fit Food",
            "upd": {
              "seconds": 1664544116,
              "nanoseconds": 946000000
            },
            "shareUrlP1": "https://refrclub.com/o/EncD",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "vEarn": 26400,
            "vAte": 151.2,
            "products": 18,
            "subCat": "sc-food_and_beverages-cafe",
            "schedule": {
              "openSunE": "19:00",
              "openFri": true,
              "openThu": true,
              "openSat": true,
              "openSatS": "06:00",
              "openThuS": "06:00",
              "opensDaily": false,
              "openMonS": "09:00",
              "openTue": true,
              "openWed": true,
              "openSatE": "19:00",
              "openWedE": "19:00",
              "opensDailyE": "23:00",
              "openSunS": "06:00",
              "openMon": true,
              "openTueE": "19:00",
              "opensDailyS": "10:00",
              "openThuE": "19:00",
              "openSun": false,
              "openFriE": "19:00",
              "openTueS": "06:00",
              "openMonE": "19:00",
              "openFriS": "06:00",
              "openWedS": "06:00"
            },
            "proCat": [
              "gfjgjhgjhghjg",
              "hhkhkjhjk",
              "some category",
              "Dal",
              "Paneer",
              "Kolhapuri",
              "chocolate"
            ],
            "log": {
              "seconds": 1648672299,
              "nanoseconds": 867000000
            },
            "addedDynamicLink": true,
            "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
            ],
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
            "shareUrlV1": "https://refrclub.com/o/tobR",
            "vFan": 23,
            "cat": "food_and_beverages"
          },
          "sold": 0,
          "burnDec": "abc",
          "burnBrand": "abc",
          "burnCatSub": "Nope",
          "sin": {
            "seconds": 1664607562,
            "nanoseconds": 148000000
          },
          "costBurn": 1.8,
          "burnPics": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91665569990708?alt=media&token=0ba600a0-bbbd-4061-b4a8-4608d8b1d730"
          ],
          "code": "123123123123",
          "cost": 2,
          "upd": {
            "seconds": 1665569994,
            "nanoseconds": 212000000
          },
          "banners": [
            "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FAH1YkgZwvrKZo1zcuDN91664607615889?alt=media&token=2b301894-3883-4a67-909f-c0da55b692b5"
          ],
          "burnDecShort": "abc",
          "title": "fried rice"
        }
      ],
      "sin": {
        "seconds": 1665570039,
        "nanoseconds": 647000000
      },
      "userName": "Aditya",
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "addORDER",
        "BURN",
        null
      ]
    },
    //F2F Online placed && logistics not require
    {
      "amGateway": 0,
      "camp": {
        "customPay": 0,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "tX": "t1",
        "ban": false,
        "storeTyp": "Both",
        "paused": false,
        "min": 1200,
        "max": 0,
        "stage": 0,
        "type": "flat",
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "countP": 0,
        "expiry": false,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "countM": 0,
        "cbNew": 80,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "customAct": false,
        "cbDir": 40,
        "name": "Campaign-39",
        "countS": 0,
        "stoped": false,
        "paid": false,
        "cbExi": 30
      },
      "sin": {
        "seconds": 1665567219,
        "nanoseconds": 640000000
      },
      "amParcel": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "amSale": 5,
      "amCost": 0,
      "storeName": "Fit Food",
      "logistics": {
        "addressDrop": {
          "zip": 400056,
          "type": "work",
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "landmark": "Gagandeep bus stop"
        },
        "PnD_cityCharge": 0,
        "PnD_nationCharge": 0,
        "typeCat": "food_and_beverages",
        "addressDropT": "work",
        "typeShop": "Both",
        "email": "",
        "phone": "8879751140",
        "addressPick": {
          "id": "IND_MH_1648672299398",
          "lon": 72.83105909999999,
          "region": "Maharashtra",
          "state": "MH",
          "area": "Dent Heal",
          "line2": "",
          "nation": "IND",
          "zip": "400050",
          "locality": "Mumbai",
          "lat": 19.0662066,
          "line1": "Dipesadsadas sadasdas",
          "city": "Mumbai Suburban"
        },
        "addressPickT": "shop",
        "PnD_freeStart": 0,
        "PnD_parcelNotFree": false,
        "status": 0,
        "require": false,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "name": "Aditya",
        "typeOrdr": "F2F_ONLINE"
      },
      "com": {
        "seconds": 1665567219,
        "nanoseconds": 640000000
      },
      "amParcelCity": false,
      "amRefr": 0,
      "refr": {
        "earn": 0,
        "name": "Aditya",
        "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
      },
      "earn": 0,
      "shortID": "A000NA",
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "setShortID": true,
      "status": 0,
      "journey": "F2F",
      "amTaxTCS": 0.01,
      "invoice": {
        "useRefrCash": true,
        "amtRefrCash": 1.05,
        "COD": false
      },
      "amSave": 5.05,
      "cart": [
        {
          "description": "Chocolate",
          "quota": 0,
          "vX": [],
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "reqBurn": false,
          "code": "123123123",
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "id": "WdH3xlYAQlgwBkha2EsA",
          "sold": 0,
          "warranty": true,
          "category": "chocolate",
          "burn": false,
          "variants": [],
          "content": true,
          "Q": 1,
          "banners": [],
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "cost": 1,
          "title": "JimJam",
          "price": 5
        }
      ],
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "F2F",
        "A000Ky"
      ],
      "code": "A000Ky",
      "amTax": 0.05,
      "amTotal": 1.05,
      "amTaxTDS": 0,
      "amBurst": 1,
      "upd": {
        "seconds": 1665567219,
        "nanoseconds": 640000000
      },
      "id": "ShPT9Gtfo3Y26sED6Re3",
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "userName": "Aditya",
      "ordrTYPE": "RefrCASH"
    },
    // Direct Placed Order && logistics not require
    {
      "com": {
        "seconds": 1665566874,
        "nanoseconds": 50000000
      },
      "refr": null,
      "invoice": {
        "COD": false,
        "useRefrCash": true,
        "amtRefrCash": 1.05
      },
      "storeName": "Fit Food",
      "journey": "DIRECT",
      "amTaxTDS": 0,
      "amGateway": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amSave": 5.05,
      "code": null,
      "upd": {
        "seconds": 1665566874,
        "nanoseconds": 50000000
      },
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amTaxTCS": 0.01,
      "amTax": 0.05,
      "setShortID": true,
      "status": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "userName": "Aditya",
      "shortID": "A000N1",
      "camp": {
        "customPay": 0,
        "cbExi": 30,
        "countS": 0,
        "type": "flat",
        "cbNew": 80,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "paused": false,
        "paid": false,
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "min": 1200,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "cbDir": 40,
        "storeTyp": "Both",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "max": 0,
        "countP": 0,
        "expiry": false,
        "ban": false,
        "name": "Campaign-39",
        "stoped": false,
        "stage": 0,
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "customAct": false,
        "tX": "t1",
        "countM": 0,
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        }
      },
      "id": "FMQ5U3RHLo4C8PzmI5cB",
      "ordrTYPE": "RefrCASH",
      "amSale": 5,
      "amBurst": 1,
      "amCost": 0,
      "amParcel": 0,
      "amTotal": 1.05,
      "amParcelCity": false,
      "earn": 0,
      "type": [
        "RefrCASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "addORDER",
        "storeORDER",
        "clientAc",
        "DIRECT"
      ],
      "cart": [
        {
          "sin": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          },
          "vX": [],
          "variants": [],
          "burn": false,
          "category": "chocolate",
          "price": 5,
          "Q": 1,
          "reqBurn": false,
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "quota": 0,
          "code": "123123123",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "title": "JimJam",
          "id": "WdH3xlYAQlgwBkha2EsA",
          "warranty": true,
          "content": true,
          "description": "Chocolate",
          "sold": 0,
          "cost": 1,
          "banners": [],
          "upd": {
            "seconds": 1664608438,
            "nanoseconds": 150000000
          }
        }
      ],
      "amRefr": 0,
      "logistics": {
        "typeCat": "food_and_beverages",
        "PnD_nationCharge": 0,
        "typeSuCat": "sc-food_and_beverages-cafe",
        "name": "Aditya",
        "require": false,
        "status": 0,
        "PnD_parcelNotFree": false,
        "PnD_freeStart": 0,
        "email": "",
        "typeOrdr": "DIRECT_ONLINE",
        "addressPickT": "shop",
        "addressPick": {
          "id": "IND_MH_1648672299398",
          "line2": "",
          "nation": "IND",
          "line1": "Dipesadsadas sadasdas",
          "city": "Mumbai Suburban",
          "lon": 72.83105909999999,
          "lat": 19.0662066,
          "locality": "Mumbai",
          "zip": "400050",
          "area": "Dent Heal",
          "state": "MH",
          "region": "Maharashtra"
        },
        "addressDrop": {
          "type": "work",
          "zip": 400056,
          "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
          "landmark": "Gagandeep bus stop"
        },
        "PnD_cityCharge": 0,
        "typeShop": "Both",
        "addressDropT": "work",
        "phone": "8879751140"
      },
      "sin": {
        "seconds": 1665566874,
        "nanoseconds": 50000000
      }
    },




    //offline Direct transation
    {
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "type": [
        "CASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "POS",
        "REDEEM",
        "A000Ky",
        "addORDER"
      ],
      "sin": {
        "seconds": 1665565401,
        "nanoseconds": 149000000
      },
      "amGateway": 0,
      "setShortID": true,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "logistics": {
        "require": false,
        "addressPick": null,
        "addressDrop": null,
        "status": 0
      },
      "amTax": 0,
      "code": "A000Ky",
      "amBurst": 0,
      "cart": [],
      "amParcelCity": false,
      "userName": "Aditya",
      "shortID": "A000Mz",
      "invoice": {
        "amtRefrCash": 0,
        "COD": false,
        "useRefrCash": false
      },
      "amSale": 0,
      "amTaxTDS": 0,
      "amSave": 0,
      "camp": {
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "paused": false,
        "countS": 0,
        "min": 1200,
        "countP": 0,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "stage": 0,
        "ban": false,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "cbNew": 80,
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "tX": "t1",
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "customAct": false,
        "paid": false,
        "cbExi": 30,
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "type": "flat",
        "name": "Campaign-39",
        "storeTyp": "Both",
        "cbDir": 40,
        "countM": 0,
        "expiry": false,
        "max": 0,
        "customPay": 0,
        "stoped": false,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
      },
      "status": 10,
      "upd": {
        "seconds": 1665565401,
        "nanoseconds": 149000000
      },
      "amParcel": 0,
      "ordrTYPE": "CASH",
      "storeName": "Fit Food",
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "amRefr": 0,
      "amCost": 0,
      "id": "wgKcrjW6ksJulLauCnaH",
      "journey": "POS",
      "earn": 40,
      "amTaxTCS": 0,
      "com": {
        "seconds": 1665565433,
        "nanoseconds": 267000000
      },
      "refr": null,
      "amTotal": 1200
    },
    //offline F2F transation
    {
      "setShortID": true,
      "cart": [],
      "camp": {
        "stage": 0,
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "customAct": false,
        "paused": false,
        "tX": "t1",
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "cbExi": 30,
        "expiry": false,
        "paid": false,
        "cbNew": 80,
        "customPay": 0,
        "name": "Campaign-39",
        "sin": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        },
        "min": 1200,
        "id": "IzSNW9mwHpHHyZ6C9cAD",
        "countS": 0,
        "dateS": {
          "seconds": 1663353000,
          "nanoseconds": 0
        },
        "max": 0,
        "dateE": {
          "seconds": 1672425000,
          "nanoseconds": 0
        },
        "countM": 0,
        "countP": 0,
        "cbDir": 40,
        "stoped": false,
        "ban": false,
        "storeTyp": "Both",
        "type": "flat",
        "upd": {
          "seconds": 1663417144,
          "nanoseconds": 438000000
        }
      },
      "journey": "F2F",
      "type": [
        "CASH",
        "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "F2F",
        "REDEEM",
        "A000Ky",
        "addORDER"
      ],
      "userName": "Aditya",
      "storeName": "Fit Food",
      "earn": 80,
      "shortID": "A000M8",
      "com": {
        "seconds": 1665565804,
        "nanoseconds": 43000000
      },
      "amTax": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "invoice": {
        "amtRefrCash": 0,
        "useRefrCash": false,
        "COD": false
      },
      "earnTotal": 110,
      "amParcelCity": false,
      "amGateway": 0,
      "sin": {
        "seconds": 1665565774,
        "nanoseconds": 302000000
      },
      "amTotal": 1200,
      "id": "KArfNzg5avGffh6ApiRD",
      "amBurst": 0,
      "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
      "amSale": 0,
      "amTaxTCS": 0,
      "upd": {
        "seconds": 1665565774,
        "nanoseconds": 302000000
      },
      "amTaxTDS": 0,
      "amParcel": 0,
      "amSave": 0,
      "logistics": {
        "phone": "+918879751140",
        "addressDropT": null,
        "name": "Aditya",
        "addressPickT": "shop",
        "addressDrop": null,
        "require": false,
        "addressPick": {
          "nation": "IND",
          "region": "Maharashtra",
          "zip": "400050",
          "id": "IND_MH_1648672299398",
          "locality": "Mumbai",
          "lat": 19.0662066,
          "state": "MH",
          "lon": 72.83105909999999,
          "line1": "Dipesadsadas sadasdas",
          "line2": "",
          "area": "Dent Heal",
          "city": "Mumbai Suburban"
        },
        "typeCat": "food_and_beverages",
        "status": 0,
        "email": "",
        "typeShop": "Both",
        "typeOrdr": "F2F_OFFLINE",
        "typeSuCat": "sc-food_and_beverages-cafe"
      },
      "code": "A000Ky",
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "status": 10,
      "amRefr": 0,
      "amCost": 0,
      "ordrTYPE": "CASH",
      "refr": {
        "earn": 30,
        "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
        "name": "Aditya"
      }
    }




  ]




  paymentRedeem: any = [
    {
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      "type": [
        "CASH",
        "aBbP0FKIXvYdxNE7ictPnPo33th1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "POS",
        "REDEEM",
        "A000JQ",
        "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
      ],
      "shortID": "A0006e",
      "setShortID": true,
      "camp": null,
      "logistics": {
        "status": 0,
        "addressPick": null,
        "require": false,
        "addressDrop": null
      },
      "amTotal": 0,
      "ordrTYPE": "CASH",
      "amGateway": 0,
      "amSale": 0,
      "code": "A000JQ",
      "sin": {
        "seconds": 1666359167,
        "nanoseconds": 380000000
      },
      "amParcelCity": false,
      "com": {
        "seconds": 1666359167,
        "nanoseconds": 380000000
      },
      "id": "39xUsfakx1dm9CGKiCEf",
      "cart": [],
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "storeName": "Fit Food",
      "invoice": {
        "amtRefrCash": 0,
        "COD": false,
        "useRefrCash": false
      },
      "amRefr": 0,
      "amCost": 0,
      "refr": null,
      "amTaxTCS": 0,
      "upd": {
        "seconds": 1666359167,
        "nanoseconds": 380000000
      },
      "amTaxTDS": 0,
      "amParcel": 0,
      "journey": "POS",
      "userName": "Roshan",
      "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
      "amSave": 0,
      "status": 0,
      "amBurst": 0,
      "earn": 0,
      "amTax": 0
    },
    {
      "sin": {
        "seconds": 1666359637,
        "nanoseconds": 52000000
      },
      "type": [
        "CASH",
        "aBbP0FKIXvYdxNE7ictPnPo33th1",
        "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "8B9ozj7aTPvywkIvVWiK",
        "storeORDER",
        "clientAc",
        "F2F",
        "REDEEM",
        "A000JQ",
        "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
        "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
      ],
      "amTax": 0,
      "amTotal": 0,
      "userName": "Roshan",
      "amRefr": 0,
      "upd": {
        "seconds": 1666359637,
        "nanoseconds": 52000000
      },
      "logistics": {
        "status": 0,
        "typeOrdr": "F2F_OFFLINE",
        "addressDropT": null,
        "phone": "+919167452128",
        "typeCat": "food_and_beverages",
        "name": "Roshan",
        "typeShop": "Both",
        "typeSuCat": "sc-food_and_beverages-cafe",
        "email": "",
        "require": false,
        "addressDrop": null,
        "addressPickT": "shop",
        "addressPick": {
          "line1": "Dipesadsadas sadasdas",
          "lat": 19.0662066,
          "region": "Maharashtra",
          "id": "IND_MH_1648672299398",
          "city": "Mumbai Suburban",
          "lon": 72.83105909999999,
          "zip": "400050",
          "state": "MH",
          "area": "Dent Heal",
          "line2": "",
          "nation": "IND",
          "locality": "Mumbai"
        }
      },
      "amTaxTDS": 0,
      "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
      "com": {
        "seconds": 1666359637,
        "nanoseconds": 52000000
      },
      "id": "MYd7AMi0aAmoM3tZKHeP",
      "camp": {
        "cbDir": 5,
        "cbExi": 10,
        "expiry": false,
        "sin": {
          "seconds": 1666266989,
          "nanoseconds": 858000000
        },
        "id": "RJMlwhLTqIZECFgd2mvC",
        "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
        "max": 80,
        "upd": {
          "seconds": 1666266989,
          "nanoseconds": 858000000
        },
        "stage": 0,
        "customPay": 0,
        "countM": 0,
        "countP": 0,
        "dateS": {
          "seconds": 1666204200,
          "nanoseconds": 0
        },
        "dateE": {
          "seconds": 1668882600,
          "nanoseconds": 0
        },
        "customAct": false,
        "tX": "t1",
        "countS": 0,
        "min": 100,
        "sid": "8B9ozj7aTPvywkIvVWiK",
        "ban": false,
        "name": "Campaign-44",
        "cbNew": 20,
        "paid": false,
        "type": "percent",
        "stoped": false,
        "storeTyp": "Both",
        "paused": false
      },
      "amTaxTCS": 0,
      "amCost": 0,
      "shortID": "A0006g",
      "amSave": 0,
      "sid": "8B9ozj7aTPvywkIvVWiK",
      "code": "A000JQ",
      "refr": {
        "earn": 0,
        "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1",
        "name": "Roshan"
      },
      "setShortID": true,
      "journey": "F2F",
      "amBurst": 0,
      "ordrTYPE": "CASH",
      "invoice": {
        "useRefrCash": false,
        "amtRefrCash": 0,
        "COD": false
      },
      "cart": [],
      "amSale": 0,
      "status": 0,
      "amParcelCity": false,
      "amGateway": 0,
      "storeName": "Fit Food",
      "amParcel": 0,
      "earn": 0,
      "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
    }
  ]






  campALL: Array<camptype> = [
    {
      sid: "8B9ozj7aTPvywkIvVWiK",
      dateS: {
        seconds: 1666031400,
        nanoseconds: 0
      },
      min: 999,
      max: 100,
      countM: 0,
      storeTyp: "Both",
      ban: false,
      paid: false,
      id: "d8Qr9CBymh0HhlLgj0Kd",
      customAct: false,
      expiry: false,
      dateE: {
        seconds: 1668796200,
        nanoseconds: 0
      },
      cbDir: 2.5,
      sin: {
        seconds: 1666077660,
        nanoseconds: 884000000
      },
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      countP: 0,
      cbExi: 5,
      cbNew: 10,
      countS: 0,
      stoped: false,
      stage: 0,
      type: "percent",
      tX: "t1",
      paused: false,
      name: "Campaign-41",
      upd: {
        seconds: 1666077660,
        nanoseconds: 884000000
      },
      customPay: 0
    },
    {
      expiry: false,
      sid: "8B9ozj7aTPvywkIvVWiK",
      countP: 0,
      min: 50,
      paused: false,
      stage: 0,
      dateS: {
        seconds: 1665513000,
        nanoseconds: 0
      },
      countM: 0,
      dateE: {
        seconds: 1669746600,
        nanoseconds: 0
      },
      storeTyp: "Both",
      customAct: false,
      max: 0,
      upd: {
        seconds: 1665574403,
        nanoseconds: 533000000
      },
      sin: {
        seconds: 1665574403,
        nanoseconds: 533000000
      },
      stoped: false,
      id: "si4Ba2AAJX8gOmMEX0DI",
      ban: false,
      paid: false,
      name: "Campaign-40",
      by: "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
      cbExi: 5,
      tX: "t1",
      cbDir: 5,
      cbNew: 10,
      countS: 0,
      type: "flat",
      customPay: 0
    }
  ];
  amt:any;

  constructor(public dialog: MatDialog,) {
    console.log("length" + this.paymentOrder.length)
  }

  ngOnInit(): void {
  }

  getCampAmt(c: any, cb: number) {
    // cbDir == cb == 1
    // min == cb == 2
    // max == cb == 3
    if (!c) { return 0 }
    else {
      const x = this.campALL.findIndex(x => x.id == c);
      if (cb == 1) {
        return this.campALL[x].cbDir || 0;
      }
      else if (cb == 2) {
        return this.campALL[x].min || 0;
      }
      else {
        return this.campALL[x].max || 0;
      }
    }
  }

  getVARIENT(v: any) {
    return v.type + ": " + v.name;
  }

  getmincampvalue() {
    let a = this.campALL;
    for (let i = 0; i < this.campALL.length; i++) {
      a.sort(function (a, b) { return a.min - b.min })
    }
    return a[0].min;
  }

  Amtchange(reqata: any, index: any) {
    // console.log("entered amt = " + amt);
    // this.enteredamt = amt;
    // this.paymentRedeem[index].enteredamt;
    console.log("  entred amount    "+this.paymentRedeem[index].enteredamt );
    console.log("  journy    "+reqata.journey );

    if (reqata.journey != "F2F") {
      console.log("1aaaaa");
      console.log("lengthhhhhh = " + this.campALL.length)
      this.camparr = [];
      for (let i = 0; i < this.campALL.length; i++) {
        // console.log("entered Amt =    " + amt);
        // console.log("Camp Min value =    " + this.campALL[i].min);
        // console.log("is amt is greater than or eqaul to camp min value =     " + (amt >= this.campALL[i].min));
        if (this.paymentRedeem[index].enteredamt >= this.campALL[i].min) {
          this.camparr.push(this.campALL[i]);
        }
      }
      console.log("camparr length = " + this.camparr.length)
      if (this.camparr.length > 0 && this.paymentRedeem[index].enteredamt != undefined) {
        // console.log(1);     
        let entered_amount = this.paymentRedeem[index].enteredamt;       
        this.camparr = this.camparr.sort(function (a, b) {
          let C = a.cbDir;
          let D = b.cbDir;

          if (a.type == "percent") {
            C = ((C * entered_amount) / 100) > a.max ? a.max : ((C * entered_amount) / 100);
          }
          if (b.type == "percent") {
            D = ((D * entered_amount) / 100) > b.max ? b.max : ((D * entered_amount) / 100);
          }
          return D - C;
        });
        this.campaign = this.camparr[0].id;

        // }
        // else {
        //   camparr = camparr.sort(function (a, b) {
        //     let c = a.cbDir;
        //     let d = b.cbDir;
        //     if (a.type == "percent") {
        //       c = ((a.cbNew / enteredamt) * 100) > a.max ? a.max : ((a.cbNew / enteredamt) * 100);
        //     }
        //     if (b.type == "percent") {
        //       d = ((b.cbNew / enteredamt) * 100) > b.max ? b.max : ((b.cbNew / enteredamt) * 100);
        //     }
        //     return d - c;
        //   });
        //   this.campaign = camparr[0].id;
        // }
      }
      else {
        // console.log(2);
        this.campaign = "";
      }

      console.log("campaign = " + this.campaign);
    }
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
