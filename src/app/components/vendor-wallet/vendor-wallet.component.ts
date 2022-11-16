import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { of, Observable } from 'rxjs';
import { VendorHIWComponent } from '../vendor-hiw/vendor-hiw.component';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-vendor-wallet',
  templateUrl: './vendor-wallet.component.html',
  styleUrls: ['./vendor-wallet.component.scss']
})
export class VendorWalletComponent {
  // asdasdasdd:string="asdasdasdasdaeae";
  payments$: Observable<any> = of();
  activated: number = 1;
  expandedindex: any = null;
  expandedchildindex: any = null;
  invoicedata: any;
  @ViewChild('content', { static: false }) el!: ElementRef;
  Data = [
    { Id: 101, Name: 'Nitin', Salary: 1234 },
    { Id: 102, Name: 'Sonu', Salary: 1234 },
    { Id: 103, Name: 'Mohit', Salary: 1234 },
    { Id: 104, Name: 'Rahul', Salary: 1234 },
    { Id: 105, Name: 'Kunal', Salary: 1234 }
  ];

  mine = {
    acBalV: 2323,
    acBalVr: 2323,
    acBalH: 2323,
  }


  payments: Array<any> = [
    
      {
          "type": [
              "RefrCASH+ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "storeORDER",
              "clientAc",
              "addORDER",
              "BURN",
              null,
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "gwSIGN": "553b5bd58ebd405ea4899f8ad4cb458f026548256bfd07fcb3d52dba0afa837a",
          "logistics": {
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "PnD_cityCharge": 0,
              "addressPickT": "shop",
              "addressDrop": {
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                  "landmark": "Gagandeep bus stop",
                  "zip": 400056,
                  "type": "work"
              },
              "email": "",
              "typeOrdr": "BURN",
              "addressDropT": "work",
              "name": "Aditya",
              "PnD_freeStart": 0,
              "require": false,
              "PnD_parcelNotFree": false,
              "status": 20,
              "typeCat": "food_and_beverages",
              "PnD_nationCharge": 0,
              "typeShop": "Both",
              "addressPick": {
                  "region": "Maharashtra",
                  "lon": 72.83105909999999,
                  "nation": "IND",
                  "locality": "Mumbai",
                  "id": "IND_MH_1648672299398",
                  "city": "Mumbai Suburban",
                  "state": "MH",
                  "lat": 19.0662066,
                  "line1": "Dipesadsadas sadasdas",
                  "line2": "",
                  "zip": "400050",
                  "area": "Dent Heal"
              },
              "phone": "8879751140"
          },
          "amTax": 0,
          "invoice": {
              "useRefrCash": true,
              "amtRefrCash": 1,
              "COD": false
          },
          "amBurst": 2,
          "amGateway": 0.0236,
          "ordrTYPE": "RefrCASH+ONLINE",
          "amParcel": 0,
          "sin": {
              "seconds": 1667459496,
              "nanoseconds": 515000000
          },
          "cart": [
              {
                  "cost": 2,
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "title": "abc",
                  "costBurn": 1.8,
                  "code": "12345678",
                  "sin": {
                      "seconds": 1667459262,
                      "nanoseconds": 705000000
                  },
                  "Q": 1,
                  "quota": 0,
                  "content": true,
                  "description": "abc",
                  "id": "bgUQHQa51eRGfcuxw9Es",
                  "sold": 0,
                  "burnBrand": "abc",
                  "burnHigh": "abc",
                  "vX": [],
                  "relate": [],
                  "burn": true,
                  "burnDecShort": "abc",
                  "variants": [],
                  "burnCatSub": "Nope",
                  "storeINFO": {
                      "shareUrlP1": "https://refrclub.com/o/EncD",
                      "phone": "9876543210",
                      "name": "Fit Food",
                      "type": "Both",
                      "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
                      "shareUrlB1": "https://refrclub.com/o/4Yif",
                      "vFan": 43,
                      "subCat": "sc-food_and_beverages-healthy_snacks",
                      "upd": {
                          "seconds": 1667149326,
                          "nanoseconds": 109000000
                      },
                      "products": 19,
                      "cashback": 8,
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
                          "acBalV": 5499.333599999994,
                          "phone": "+919876543210",
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
                              "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
                              "eNxKvi2UZc2QG5Ao0FT4bj:APA91bHYvXZ2KwmUMIyC7sy1s7jL4YDTD8feVzNV-2AVhk_dQntWyAwMd29MOhzP4HzZkW7kS9kzBhJzxvETIf--on0uHlow9ZiXqxsEifNKo2B400YzkG4R7ok8doUYGcO-l2YwptPm",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bGc1YRXmGAvwCEd5ixCjAuh90ZBTLuPHoRElPzlmhUbC6_daGZhBgzd375yZycDe4pfsme8PYW3ocspEchw9bgtfJGJZHLM7fH8k7nksOum7qKFF-zBJ7SWhLnu6xXn7hTStEjr",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bFsJT54ZwxTaHd1GJygSHbKW4rMHCcT8RHZ9ID3i24p0dVlmwQvwnNroVAIceSbsaCMXzkrmThOY4CXkojq4p37FHjeuCMv17oKHbKyUu8kYelJc17Z_qt3mUZth5gZ-TUVDxU0",
                              "ewAaWPVMGd5qHVFkJVFHkW:APA91bFIULeRklx92CqpXSzhrFPy9vgGGLzhWsBnaeFlZR3rOsG1N1svIcFZAOxw1wST8B-e7cufnjSw4sGC2yaysDZMjHDE4CSw5NCFGQsAzVJCULe3xsFGrhnGgpl7jn5HAB5kwSif",
                              "flfODnMMqd2Skn8wlzxnOr:APA91bFpPuQGx0zTuMwAShAG2KYQ9SY138HVklzmhA3MPDCVb586ch8jdC74yzB08cNK3sGO0zPRU7K6RWKj1V20xxXz9yXXy5sOew8X6KJWY8LUjTAxrHjRjqy9CUtR2xjy-cLWJApH",
                              "eQI1Nvq964agdpMBVCRJov:APA91bGhaG5jZl1x-ZPX1wnVqAJNKMGgdavDsyYLbhj3viuVsOwffZ5qi-UNHPETnc7OwSfrKXDuKvDvsT-OAeg1mvkt_sqcbufuq-Uekszxt0oRfEOXPfKS9jPtH7WmZqimTHyVf91s",
                              "d_hEx4aGq6e0R-Wtsok0IN:APA91bEFyk80Fj9-gYm1brSE-2ZHjdXYcRAL_9Lyr97vis2cUS0kg8hRVJ8sAzJbOEDi0z45OWw3aDNXOeNh6s3rcKicS-5mOFiO-jfJTFOuj_iNzdZ4YfJPxpeNQypez-STl9dV75y0",
                              "cynYYwZHMZ5IRz-g5lfBjB:APA91bE_mp7lzNqD3OEUkF5khz-JTuDTS-vU4z9aDQdMHGUYakZoOQ4FCKLrhNfmFtxKDIKRSDKrLRI_DOhBDFP-Ukye1DF810fybUI_4YTzL9BnRZFiEeluA2OyvhZBHOvXFymSnimn",
                              "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI"
                          ],
                          "log": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                          "acBalC": 1117.2500000000005,
                          "acBalP": 0,
                          "acBalGivenV": 2600,
                          "soYT": "simran",
                          "storeLoc": [
                              "8B9ozj7aTPvywkIvVWiK"
                          ],
                          "soIG": "dipesious",
                          "axess": [
                              "phone"
                          ],
                          "admin": true,
                          "email": "dipesious@hotmail.com",
                          "cashback": 8,
                          "ban": false,
                          "acBalGivenC": 1980,
                          "emailV": false,
                          "coin": "INR",
                          "BankUPI": {
                              "address": "dipesious@dbs",
                              "handle": "dbs",
                              "contact_id": "cont_K9KglWSOWnTNTY",
                              "username": "dipesious",
                              "fund_account_id": "fa_K9hVBLRtX776iF",
                              "active": true,
                              "verified": true
                          },
                          "display": "",
                          "storeSav": [
                              "8B9ozj7aTPvywkIvVWiK",
                              "tjOyZV9TVTpQ1hoccOYB"
                          ],
                          "tokenSNS": "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI",
                          "addr": [
                              {
                                  "zip": 401101,
                                  "landmark": "xyz",
                                  "type": "work",
                                  "address": "abc"
                              },
                              {
                                  "zip": 401101,
                                  "type": "home",
                                  "address": "Google",
                                  "landmark": "Tower"
                              },
                              {
                                  "address": "101, Leena residence gulmohar road miraj",
                                  "type": "other",
                                  "zip": 400056,
                                  "landmark": "Opposite gagandeep restaurant "
                              },
                              {
                                  "zip": 400049,
                                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                                  "landmark": "Opposite naturals ",
                                  "type": "other"
                              }
                          ],
                          "soTW": "dip",
                          "acBalCr": 120,
                          "soFB": "dip",
                          "bucket": [
                              "6cZGYy20f5boFbbsXtYB",
                              "qqMPDmqy0o01YiiIYqaE",
                              "kxczduUeyyYUvoCyLvnO",
                              "6uhvn2NoTtN8ONPuM2qj"
                          ],
                          "iso": "IND",
                          "soWA": "9876543210",
                          "acBalH": 400.15,
                          "acBalVr": 2468.85,
                          "sin": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "payout": false,
                          "name": "Dipeshin",
                          "emails": [],
                          "upd": {
                              "seconds": 1667394172,
                              "nanoseconds": 291000000
                          },
                          "note": [],
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
                              "IzSNW9mwHpHHyZ6C9cAD",
                              "si4Ba2AAJX8gOmMEX0DI",
                              "d8Qr9CBymh0HhlLgj0Kd",
                              "m7P29pSnPtsM1xJKr7i7",
                              "zEs8nH8F7ZeL6jilXm9n",
                              "RJMlwhLTqIZECFgd2mvC",
                              "xlpKSHQZKZko52jbfXFP",
                              "NWFtLtMCTNTLsXWT0u0K"
                          ],
                          "acBalVp": 16000
                      },
                      "addedDynamicLink": true,
                      "banners": [
                          "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
                      ],
                      "addedDynamicLinkP1": true,
                      "vOrdr": 43,
                      "sin": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "vGave": 2729.85,
                      "vAte": 1272.7999999999997,
                      "id": "8B9ozj7aTPvywkIvVWiK",
                      "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                      "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "email": "dipeshbhoir@hotmail.com",
                      "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "typeORDER": {
                          "phoneHide": true,
                          "freeStart": 0,
                          "return": true,
                          "delivery": "Nationwide",
                          "cityCharge": 0,
                          "COD": true,
                          "exchange": false,
                          "nationCharge": 0,
                          "logistics": false,
                          "refund": false,
                          "freeParcel": false
                      },
                      "schedule": {
                          "openSunS": "06:00",
                          "openFri": true,
                          "openSun": false,
                          "openMon": true,
                          "openFriE": "19:00",
                          "openThuS": "06:00",
                          "openTueS": "06:00",
                          "openThu": true,
                          "opensDailyS": "10:00",
                          "openTue": true,
                          "openThuE": "19:00",
                          "openSatS": "06:00",
                          "openSatE": "19:00",
                          "openSat": true,
                          "openWedS": "06:00",
                          "opensDailyE": "23:00",
                          "opensDaily": false,
                          "openBreak": false,
                          "openWed": true,
                          "openMonS": "09:00",
                          "openWedE": "19:00",
                          "openFriS": "06:00",
                          "openBreakE": "15:00",
                          "openSunE": "19:00",
                          "openMonE": "19:00",
                          "openBreakS": "11:00",
                          "openTueE": "19:00"
                      },
                      "vEarn": 43449,
                      "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
                      "loc": [
                          {
                              "area": "Dent Heal",
                              "zip": "400050",
                              "state": "MH",
                              "city": "Mumbai Suburban",
                              "region": "Maharashtra",
                              "line2": "",
                              "line1": "Dipesadsadas sadasdas",
                              "lon": 72.83105909999999,
                              "lat": 19.0662066,
                              "nation": "IND",
                              "id": "IND_MH_1648672299398",
                              "locality": "Mumbai"
                          },
                          {
                              "id": "IND_MH_1656024949912",
                              "city": "Mumbai Suburban",
                              "line1": "sadas sadasdasd sdasdas",
                              "zip": "400053",
                              "nation": "IND",
                              "line2": "",
                              "state": "MH",
                              "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                              "lat": 19.134840193193707,
                              "lon": 72.8213950683594,
                              "region": "Maharashtra",
                              "locality": "Mumbai"
                          }
                      ],
                      "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "cat": "food_and_beverages",
                      "log": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "about": "About the store",
                      "shareUrlV1": "https://refrclub.com/o/tobR",
                      "shareUrlX1": "https://refrclub.com/o/WoQJ"
                  },
                  "burnCat": "food_and_beverages",
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459355148?alt=media&token=c703643f-50cd-429b-85bc-8897236934cc",
                  "warranty": true,
                  "flash": false,
                  "reqBurn": false,
                  "category": "gfjgjhgjhghjg",
                  "burnSpec": "abc",
                  "burnDec": "abc",
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459264243?alt=media&token=c47673cc-b95f-4fad-a8f3-992ce069d237"
                  ],
                  "price": 5,
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459355148?alt=media&token=c703643f-50cd-429b-85bc-8897236934cc"
                  ],
                  "upd": {
                      "seconds": 1667459361,
                      "nanoseconds": 631000000
                  }
              }
          ],
          "amRefr": 0.14,
          "setShortID": true,
          "id": "T9zAHHBnmrbMfJIvhRaT",
          "com": {
              "seconds": 1667459620,
              "nanoseconds": 396000000
          },
          "amParcelCity": false,
          "storeName": "Fit Food",
          "camp": null,
          "amCost": 1,
          "code": null,
          "gwORDR": "order_KbTklVDIJLqZMc",
          "amTaxTCS": 0.02,
          "amSale": 5,
          "shortID": "A000jw",
          "journey": "BURN",
          "earn": 0,
          "amTotal": 2,
          "upd": {
              "seconds": 1667459496,
              "nanoseconds": 515000000
          },
          "status": 10,
          "gwID": "pay_KbTl1FkafhAJdK",
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "amSave": 4,
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "refr": null,
          "amTaxTDS": 0,
          "gwInfo": {
              "error_source": null,
              "description": "payment to Fit Food",
              "method": "upi",
              "created_at": 1667459513,
              "currency": "INR",
              "fee": 2,
              "email": "adityakirtane27@gmail.com",
              "amount_refunded": 0,
              "error_description": null,
              "entity": "payment",
              "tax": 0,
              "international": false,
              "error_code": null,
              "invoice_id": null,
              "error_reason": null,
              "vpa": "adityakirtane27@okaxis",
              "acquirer_data": {
                  "rrn": "230723300600"
              },
              "amount": 100,
              "status": "captured",
              "contact": "+918879751140",
              "wallet": null,
              "error_step": null,
              "captured": true,
              "bank": null,
              "id": "pay_KbTl1FkafhAJdK",
              "order_id": "order_KbTklVDIJLqZMc",
              "card_id": null,
              "refund_status": null,
              "notes": {
                  "description": "descriptionX"
              }
          },
          "userName": "Aditya"
      },
      {
          "status": 10,
          "id": "st38UGoQ1slOmSAUCrlr",
          "upd": {
              "seconds": 1667459553,
              "nanoseconds": 493000000
          },
          "earn": 0,
          "amBurst": 2,
          "storeName": "Fit Food",
          "amSave": 4,
          "code": null,
          "setShortID": true,
          "amGateway": 0.0236,
          "sin": {
              "seconds": 1667459553,
              "nanoseconds": 493000000
          },
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amRefr": 0.14,
          "ordrTYPE": "RefrCASH+ONLINE",
          "type": [
              "RefrCASH+ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "storeORDER",
              "clientAc",
              "addORDER",
              "BURN",
              null,
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "amParcel": 0,
          "amCost": 1,
          "amTaxTCS": 0.02,
          "com": {
              "seconds": 1667459617,
              "nanoseconds": 638000000
          },
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "amTax": 0,
          "invoice": {
              "useRefrCash": true,
              "COD": false,
              "amtRefrCash": 1
          },
          "gwInfo": {
              "refund_status": null,
              "email": "adityakirtane27@gmail.com",
              "method": "upi",
              "contact": "+918879751140",
              "error_reason": null,
              "description": "payment to Fit Food",
              "notes": {
                  "description": "descriptionX"
              },
              "status": "captured",
              "id": "pay_KbTmEEBElid09T",
              "amount_refunded": 0,
              "captured": true,
              "error_description": null,
              "bank": null,
              "vpa": "8879751140@paytm",
              "created_at": 1667459582,
              "error_step": null,
              "order_id": "order_KbTllnhL3NC8wW",
              "acquirer_data": {
                  "rrn": "230723181477"
              },
              "fee": 2,
              "error_source": null,
              "amount": 100,
              "card_id": null,
              "wallet": null,
              "error_code": null,
              "tax": 0,
              "currency": "INR",
              "entity": "payment",
              "invoice_id": null,
              "international": false
          },
          "amSale": 5,
          "amParcelCity": false,
          "camp": null,
          "userName": "Aditya",
          "gwORDR": "order_KbTllnhL3NC8wW",
          "cart": [
              {
                  "reqBurn": false,
                  "code": "12345678",
                  "title": "abc",
                  "warranty": true,
                  "burnCatSub": "Nope",
                  "quota": 0,
                  "content": true,
                  "burnCat": "food_and_beverages",
                  "burnSpec": "abc",
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "storeINFO": {
                      "cashback": 8,
                      "vOrdr": 43,
                      "vEarn": 43449,
                      "about": "About the store",
                      "userInfo": {
                          "acBalVr": 2468.85,
                          "emails": [],
                          "soIG": "dipesious",
                          "acBalP": 0,
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
                              "IzSNW9mwHpHHyZ6C9cAD",
                              "si4Ba2AAJX8gOmMEX0DI",
                              "d8Qr9CBymh0HhlLgj0Kd",
                              "m7P29pSnPtsM1xJKr7i7",
                              "zEs8nH8F7ZeL6jilXm9n",
                              "RJMlwhLTqIZECFgd2mvC",
                              "xlpKSHQZKZko52jbfXFP",
                              "NWFtLtMCTNTLsXWT0u0K"
                          ],
                          "emailV": false,
                          "payout": false,
                          "display": "",
                          "axess": [
                              "phone"
                          ],
                          "soWA": "9876543210",
                          "cashback": 8,
                          "acBalGivenV": 2600,
                          "admin": true,
                          "iso": "IND",
                          "soYT": "simran",
                          "acBalGivenC": 1980,
                          "bucket": [
                              "6cZGYy20f5boFbbsXtYB",
                              "qqMPDmqy0o01YiiIYqaE",
                              "kxczduUeyyYUvoCyLvnO",
                              "6uhvn2NoTtN8ONPuM2qj"
                          ],
                          "acBalV": 5499.333599999994,
                          "ban": false,
                          "acBalCr": 120,
                          "storeSav": [
                              "8B9ozj7aTPvywkIvVWiK",
                              "tjOyZV9TVTpQ1hoccOYB"
                          ],
                          "log": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "name": "Dipeshin",
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
                              "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
                              "eNxKvi2UZc2QG5Ao0FT4bj:APA91bHYvXZ2KwmUMIyC7sy1s7jL4YDTD8feVzNV-2AVhk_dQntWyAwMd29MOhzP4HzZkW7kS9kzBhJzxvETIf--on0uHlow9ZiXqxsEifNKo2B400YzkG4R7ok8doUYGcO-l2YwptPm",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bGc1YRXmGAvwCEd5ixCjAuh90ZBTLuPHoRElPzlmhUbC6_daGZhBgzd375yZycDe4pfsme8PYW3ocspEchw9bgtfJGJZHLM7fH8k7nksOum7qKFF-zBJ7SWhLnu6xXn7hTStEjr",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bFsJT54ZwxTaHd1GJygSHbKW4rMHCcT8RHZ9ID3i24p0dVlmwQvwnNroVAIceSbsaCMXzkrmThOY4CXkojq4p37FHjeuCMv17oKHbKyUu8kYelJc17Z_qt3mUZth5gZ-TUVDxU0",
                              "ewAaWPVMGd5qHVFkJVFHkW:APA91bFIULeRklx92CqpXSzhrFPy9vgGGLzhWsBnaeFlZR3rOsG1N1svIcFZAOxw1wST8B-e7cufnjSw4sGC2yaysDZMjHDE4CSw5NCFGQsAzVJCULe3xsFGrhnGgpl7jn5HAB5kwSif",
                              "flfODnMMqd2Skn8wlzxnOr:APA91bFpPuQGx0zTuMwAShAG2KYQ9SY138HVklzmhA3MPDCVb586ch8jdC74yzB08cNK3sGO0zPRU7K6RWKj1V20xxXz9yXXy5sOew8X6KJWY8LUjTAxrHjRjqy9CUtR2xjy-cLWJApH",
                              "eQI1Nvq964agdpMBVCRJov:APA91bGhaG5jZl1x-ZPX1wnVqAJNKMGgdavDsyYLbhj3viuVsOwffZ5qi-UNHPETnc7OwSfrKXDuKvDvsT-OAeg1mvkt_sqcbufuq-Uekszxt0oRfEOXPfKS9jPtH7WmZqimTHyVf91s",
                              "d_hEx4aGq6e0R-Wtsok0IN:APA91bEFyk80Fj9-gYm1brSE-2ZHjdXYcRAL_9Lyr97vis2cUS0kg8hRVJ8sAzJbOEDi0z45OWw3aDNXOeNh6s3rcKicS-5mOFiO-jfJTFOuj_iNzdZ4YfJPxpeNQypez-STl9dV75y0",
                              "cynYYwZHMZ5IRz-g5lfBjB:APA91bE_mp7lzNqD3OEUkF5khz-JTuDTS-vU4z9aDQdMHGUYakZoOQ4FCKLrhNfmFtxKDIKRSDKrLRI_DOhBDFP-Ukye1DF810fybUI_4YTzL9BnRZFiEeluA2OyvhZBHOvXFymSnimn",
                              "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI"
                          ],
                          "acBalC": 1117.2500000000005,
                          "storeLoc": [
                              "8B9ozj7aTPvywkIvVWiK"
                          ],
                          "acBalVp": 16000,
                          "acBalH": 400.15,
                          "sin": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "soTW": "dip",
                          "phone": "+919876543210",
                          "soFB": "dip",
                          "note": [],
                          "BankUPI": {
                              "username": "dipesious",
                              "active": true,
                              "contact_id": "cont_K9KglWSOWnTNTY",
                              "fund_account_id": "fa_K9hVBLRtX776iF",
                              "address": "dipesious@dbs",
                              "handle": "dbs",
                              "verified": true
                          },
                          "upd": {
                              "seconds": 1667394172,
                              "nanoseconds": 291000000
                          },
                          "tokenSNS": "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI",
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
                                  "landmark": "Opposite gagandeep restaurant ",
                                  "type": "other",
                                  "address": "101, Leena residence gulmohar road miraj",
                                  "zip": 400056
                              },
                              {
                                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                                  "landmark": "Opposite naturals ",
                                  "type": "other",
                                  "zip": 400049
                              }
                          ],
                          "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                          "email": "dipesious@hotmail.com",
                          "coin": "INR"
                      },
                      "loc": [
                          {
                              "region": "Maharashtra",
                              "zip": "400050",
                              "line1": "Dipesadsadas sadasdas",
                              "id": "IND_MH_1648672299398",
                              "state": "MH",
                              "locality": "Mumbai",
                              "city": "Mumbai Suburban",
                              "line2": "",
                              "lon": 72.83105909999999,
                              "area": "Dent Heal",
                              "lat": 19.0662066,
                              "nation": "IND"
                          },
                          {
                              "nation": "IND",
                              "locality": "Mumbai",
                              "lat": 19.134840193193707,
                              "region": "Maharashtra",
                              "lon": 72.8213950683594,
                              "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                              "line1": "sadas sadasdasd sdasdas",
                              "state": "MH",
                              "id": "IND_MH_1656024949912",
                              "zip": "400053",
                              "line2": "",
                              "city": "Mumbai Suburban"
                          }
                      ],
                      "cat": "food_and_beverages",
                      "upd": {
                          "seconds": 1667149326,
                          "nanoseconds": 109000000
                      },
                      "products": 19,
                      "shareUrlX1": "https://refrclub.com/o/WoQJ",
                      "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "vGave": 2729.85,
                      "typeORDER": {
                          "return": true,
                          "COD": true,
                          "freeStart": 0,
                          "refund": false,
                          "cityCharge": 0,
                          "freeParcel": false,
                          "delivery": "Nationwide",
                          "logistics": false,
                          "nationCharge": 0,
                          "exchange": false,
                          "phoneHide": true
                      },
                      "addedDynamicLinkP1": true,
                      "sin": {
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
                      "email": "dipeshbhoir@hotmail.com",
                      "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
                      "banners": [
                          "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
                      ],
                      "addedDynamicLink": true,
                      "shareUrlB1": "https://refrclub.com/o/4Yif",
                      "vAte": 1272.7999999999997,
                      "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "subCat": "sc-food_and_beverages-healthy_snacks",
                      "vFan": 43,
                      "log": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "shareUrlV1": "https://refrclub.com/o/tobR",
                      "type": "Both",
                      "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "schedule": {
                          "opensDailyE": "23:00",
                          "openTueE": "19:00",
                          "openTue": true,
                          "openBreak": false,
                          "openFriS": "06:00",
                          "openThuS": "06:00",
                          "openSatS": "06:00",
                          "openWedE": "19:00",
                          "openSunE": "19:00",
                          "openSun": false,
                          "openWedS": "06:00",
                          "openMonE": "19:00",
                          "openBreakE": "15:00",
                          "openThuE": "19:00",
                          "openFri": true,
                          "openTueS": "06:00",
                          "openMonS": "09:00",
                          "opensDaily": false,
                          "openSatE": "19:00",
                          "openBreakS": "11:00",
                          "openMon": true,
                          "openFriE": "19:00",
                          "openWed": true,
                          "openSunS": "06:00",
                          "openSat": true,
                          "opensDailyS": "10:00",
                          "openThu": true
                      },
                      "phone": "9876543210",
                      "name": "Fit Food",
                      "id": "8B9ozj7aTPvywkIvVWiK",
                      "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
                      "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                      "shareUrlP1": "https://refrclub.com/o/EncD"
                  },
                  "vX": [],
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459355148?alt=media&token=c703643f-50cd-429b-85bc-8897236934cc"
                  ],
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "sin": {
                      "seconds": 1667459262,
                      "nanoseconds": 705000000
                  },
                  "burn": true,
                  "burnDec": "abc",
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459355148?alt=media&token=c703643f-50cd-429b-85bc-8897236934cc",
                  "burnDecShort": "abc",
                  "costBurn": 1.8,
                  "burnBrand": "abc",
                  "description": "abc",
                  "burnHigh": "abc",
                  "Q": 1,
                  "upd": {
                      "seconds": 1667459361,
                      "nanoseconds": 631000000
                  },
                  "price": 5,
                  "relate": [],
                  "flash": false,
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459264243?alt=media&token=c47673cc-b95f-4fad-a8f3-992ce069d237"
                  ],
                  "sold": 0,
                  "category": "gfjgjhgjhghjg",
                  "id": "bgUQHQa51eRGfcuxw9Es",
                  "variants": [],
                  "cost": 2
              }
          ],
          "shortID": "A000jy",
          "gwSIGN": "072a3e303b9e36f71dd72d56d5be1a29755ce96efe7f3482b7e3e9598de2315b",
          "amTotal": 2,
          "gwID": "pay_KbTmEEBElid09T",
          "amTaxTDS": 0,
          "journey": "BURN",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "logistics": {
              "PnD_parcelNotFree": false,
              "name": "Aditya",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "phone": "8879751140",
              "addressPick": {
                  "line2": "",
                  "lat": 19.0662066,
                  "locality": "Mumbai",
                  "nation": "IND",
                  "lon": 72.83105909999999,
                  "id": "IND_MH_1648672299398",
                  "zip": "400050",
                  "line1": "Dipesadsadas sadasdas",
                  "state": "MH",
                  "region": "Maharashtra",
                  "city": "Mumbai Suburban",
                  "area": "Dent Heal"
              },
              "addressDrop": {
                  "zip": 400056,
                  "type": "work",
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                  "landmark": "Gagandeep bus stop"
              },
              "typeOrdr": "BURN",
              "addressDropT": "work",
              "status": 20,
              "require": false,
              "email": "",
              "typeCat": "food_and_beverages",
              "addressPickT": "shop",
              "PnD_freeStart": 0,
              "PnD_cityCharge": 0,
              "typeShop": "Both",
              "PnD_nationCharge": 0
          },
          "refr": null
      },
      {
          "cart": [
              {
                  "price": 5,
                  "category": "gfjgjhgjhghjg",
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "burnBrand": "abc",
                  "burnSpec": "abc",
                  "warranty": true,
                  "storeINFO": {
                      "about": "About the store",
                      "shareUrlX1": "https://refrclub.com/o/WoQJ",
                      "phone": "9876543210",
                      "cat": "food_and_beverages",
                      "loc": [
                          {
                              "lat": 19.0662066,
                              "zip": "400050",
                              "region": "Maharashtra",
                              "line2": "",
                              "nation": "IND",
                              "locality": "Mumbai",
                              "id": "IND_MH_1648672299398",
                              "area": "Dent Heal",
                              "line1": "Dipesadsadas sadasdas",
                              "state": "MH",
                              "lon": 72.83105909999999,
                              "city": "Mumbai Suburban"
                          },
                          {
                              "line1": "sadas sadasdasd sdasdas",
                              "nation": "IND",
                              "zip": "400053",
                              "lon": 72.8213950683594,
                              "line2": "",
                              "lat": 19.134840193193707,
                              "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                              "id": "IND_MH_1656024949912",
                              "city": "Mumbai Suburban",
                              "locality": "Mumbai",
                              "region": "Maharashtra",
                              "state": "MH"
                          }
                      ],
                      "shareUrlP1": "https://refrclub.com/o/EncD",
                      "vFan": 43,
                      "vGave": 2729.85,
                      "log": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "email": "dipeshbhoir@hotmail.com",
                      "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                      "banners": [
                          "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
                      ],
                      "name": "Fit Food",
                      "schedule": {
                          "openThuE": "19:00",
                          "openThu": true,
                          "openSatS": "06:00",
                          "openWedS": "06:00",
                          "openFriE": "19:00",
                          "openMonE": "19:00",
                          "openSunE": "19:00",
                          "openSat": true,
                          "openFri": true,
                          "opensDaily": false,
                          "openTueE": "19:00",
                          "openTue": true,
                          "openFriS": "06:00",
                          "opensDailyS": "10:00",
                          "openSatE": "19:00",
                          "openSunS": "06:00",
                          "openMon": true,
                          "openBreakE": "15:00",
                          "openSun": false,
                          "opensDailyE": "23:00",
                          "openBreakS": "11:00",
                          "openTueS": "06:00",
                          "openThuS": "06:00",
                          "openMonS": "09:00",
                          "openWedE": "19:00",
                          "openWed": true,
                          "openBreak": false
                      },
                      "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "subCat": "sc-food_and_beverages-healthy_snacks",
                      "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
                      "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
                      "addedDynamicLinkP1": true,
                      "vOrdr": 43,
                      "userInfo": {
                          "acBalVp": 16000,
                          "name": "Dipeshin",
                          "acBalVr": 2443.85,
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
                              "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
                              "eNxKvi2UZc2QG5Ao0FT4bj:APA91bHYvXZ2KwmUMIyC7sy1s7jL4YDTD8feVzNV-2AVhk_dQntWyAwMd29MOhzP4HzZkW7kS9kzBhJzxvETIf--on0uHlow9ZiXqxsEifNKo2B400YzkG4R7ok8doUYGcO-l2YwptPm",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bGc1YRXmGAvwCEd5ixCjAuh90ZBTLuPHoRElPzlmhUbC6_daGZhBgzd375yZycDe4pfsme8PYW3ocspEchw9bgtfJGJZHLM7fH8k7nksOum7qKFF-zBJ7SWhLnu6xXn7hTStEjr",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bFsJT54ZwxTaHd1GJygSHbKW4rMHCcT8RHZ9ID3i24p0dVlmwQvwnNroVAIceSbsaCMXzkrmThOY4CXkojq4p37FHjeuCMv17oKHbKyUu8kYelJc17Z_qt3mUZth5gZ-TUVDxU0",
                              "ewAaWPVMGd5qHVFkJVFHkW:APA91bFIULeRklx92CqpXSzhrFPy9vgGGLzhWsBnaeFlZR3rOsG1N1svIcFZAOxw1wST8B-e7cufnjSw4sGC2yaysDZMjHDE4CSw5NCFGQsAzVJCULe3xsFGrhnGgpl7jn5HAB5kwSif",
                              "flfODnMMqd2Skn8wlzxnOr:APA91bFpPuQGx0zTuMwAShAG2KYQ9SY138HVklzmhA3MPDCVb586ch8jdC74yzB08cNK3sGO0zPRU7K6RWKj1V20xxXz9yXXy5sOew8X6KJWY8LUjTAxrHjRjqy9CUtR2xjy-cLWJApH",
                              "eQI1Nvq964agdpMBVCRJov:APA91bGhaG5jZl1x-ZPX1wnVqAJNKMGgdavDsyYLbhj3viuVsOwffZ5qi-UNHPETnc7OwSfrKXDuKvDvsT-OAeg1mvkt_sqcbufuq-Uekszxt0oRfEOXPfKS9jPtH7WmZqimTHyVf91s",
                              "d_hEx4aGq6e0R-Wtsok0IN:APA91bEFyk80Fj9-gYm1brSE-2ZHjdXYcRAL_9Lyr97vis2cUS0kg8hRVJ8sAzJbOEDi0z45OWw3aDNXOeNh6s3rcKicS-5mOFiO-jfJTFOuj_iNzdZ4YfJPxpeNQypez-STl9dV75y0",
                              "cynYYwZHMZ5IRz-g5lfBjB:APA91bE_mp7lzNqD3OEUkF5khz-JTuDTS-vU4z9aDQdMHGUYakZoOQ4FCKLrhNfmFtxKDIKRSDKrLRI_DOhBDFP-Ukye1DF810fybUI_4YTzL9BnRZFiEeluA2OyvhZBHOvXFymSnimn",
                              "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI"
                          ],
                          "admin": true,
                          "bucket": [
                              "6cZGYy20f5boFbbsXtYB",
                              "qqMPDmqy0o01YiiIYqaE",
                              "kxczduUeyyYUvoCyLvnO",
                              "6uhvn2NoTtN8ONPuM2qj"
                          ],
                          "acBalCr": 120,
                          "acBalV": 5499.333599999994,
                          "email": "dipesious@hotmail.com",
                          "storeSav": [
                              "8B9ozj7aTPvywkIvVWiK",
                              "tjOyZV9TVTpQ1hoccOYB"
                          ],
                          "iso": "IND",
                          "acBalC": 1117.2500000000005,
                          "soIG": "dipesious",
                          "acBalGivenC": 1980,
                          "emails": [],
                          "phone": "+919876543210",
                          "log": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "acBalP": 0,
                          "payout": false,
                          "display": "",
                          "addr": [
                              {
                                  "type": "work",
                                  "landmark": "xyz",
                                  "zip": 401101,
                                  "address": "abc"
                              },
                              {
                                  "zip": 401101,
                                  "landmark": "Tower",
                                  "type": "home",
                                  "address": "Google"
                              },
                              {
                                  "type": "other",
                                  "landmark": "Opposite gagandeep restaurant ",
                                  "zip": 400056,
                                  "address": "101, Leena residence gulmohar road miraj"
                              },
                              {
                                  "landmark": "Opposite naturals ",
                                  "zip": 400049,
                                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                                  "type": "other"
                              }
                          ],
                          "axess": [
                              "phone"
                          ],
                          "storeLoc": [
                              "8B9ozj7aTPvywkIvVWiK"
                          ],
                          "cashback": 8,
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
                              "IzSNW9mwHpHHyZ6C9cAD",
                              "si4Ba2AAJX8gOmMEX0DI",
                              "d8Qr9CBymh0HhlLgj0Kd",
                              "m7P29pSnPtsM1xJKr7i7",
                              "zEs8nH8F7ZeL6jilXm9n",
                              "RJMlwhLTqIZECFgd2mvC",
                              "xlpKSHQZKZko52jbfXFP",
                              "NWFtLtMCTNTLsXWT0u0K"
                          ],
                          "soTW": "dip",
                          "note": [],
                          "acBalH": 400.15,
                          "coin": "INR",
                          "BankUPI": {
                              "handle": "dbs",
                              "fund_account_id": "fa_K9hVBLRtX776iF",
                              "active": true,
                              "username": "dipesious",
                              "address": "dipesious@dbs",
                              "verified": true,
                              "contact_id": "cont_K9KglWSOWnTNTY"
                          },
                          "ban": false,
                          "soFB": "dip",
                          "tokenSNS": "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI",
                          "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                          "acBalGivenV": 2600,
                          "emailV": false,
                          "upd": {
                              "seconds": 1667394172,
                              "nanoseconds": 291000000
                          },
                          "soWA": "9876543210",
                          "sin": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          }
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
                      "addedDynamicLink": true,
                      "shareUrlV1": "https://refrclub.com/o/tobR",
                      "vAte": 1268.7999999999997,
                      "type": "Both",
                      "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "vEarn": 43449,
                      "sin": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "products": 19,
                      "upd": {
                          "seconds": 1667149326,
                          "nanoseconds": 109000000
                      },
                      "id": "8B9ozj7aTPvywkIvVWiK",
                      "cashback": 8,
                      "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "shareUrlB1": "https://refrclub.com/o/4Yif",
                      "typeORDER": {
                          "phoneHide": true,
                          "cityCharge": 0,
                          "logistics": false,
                          "delivery": "Nationwide",
                          "return": true,
                          "refund": false,
                          "freeStart": 0,
                          "nationCharge": 0,
                          "exchange": false,
                          "freeParcel": false,
                          "COD": true
                      }
                  },
                  "id": "bgUQHQa51eRGfcuxw9Es",
                  "relate": [],
                  "Q": 1,
                  "flash": false,
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459355148?alt=media&token=c703643f-50cd-429b-85bc-8897236934cc",
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "costBurn": 1.8,
                  "vX": [],
                  "burn": true,
                  "content": true,
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459264243?alt=media&token=c47673cc-b95f-4fad-a8f3-992ce069d237"
                  ],
                  "burnDec": "abc",
                  "description": "abc",
                  "code": "12345678",
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FbgUQHQa51eRGfcuxw9Es1667459355148?alt=media&token=c703643f-50cd-429b-85bc-8897236934cc"
                  ],
                  "sold": 0,
                  "burnHigh": "abc",
                  "variants": [],
                  "cost": 2,
                  "burnCatSub": "Nope",
                  "burnCat": "food_and_beverages",
                  "quota": 0,
                  "burnDecShort": "abc",
                  "sin": {
                      "seconds": 1667459262,
                      "nanoseconds": 705000000
                  },
                  "upd": {
                      "seconds": 1667459361,
                      "nanoseconds": 631000000
                  },
                  "title": "abc",
                  "reqBurn": false
              }
          ],
          "amSale": 5,
          "gwORDR": "order_KbTimQMSmPOGM9",
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "amTotal": 2,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "ordrTYPE": "RefrCASH+ONLINE",
          "amTax": 0,
          "amGateway": 0.0236,
          "amTaxTDS": 0,
          "amSave": 4,
          "gwID": "pay_KbTj4o1R3JRVbq",
          "id": "0blp0J61IsdsQifP3x39",
          "amTaxTCS": 0.02,
          "type": [
              "RefrCASH+ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "storeORDER",
              "clientAc",
              "addORDER",
              "BURN",
              null,
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "amCost": 1,
          "amParcel": 0,
          "invoice": {
              "amtRefrCash": 1,
              "useRefrCash": true,
              "COD": false
          },
          "logistics": {
              "addressPickT": "shop",
              "addressDrop": {
                  "zip": 400056,
                  "landmark": "Gagandeep bus stop",
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                  "type": "work"
              },
              "addressDropT": "work",
              "email": "",
              "PnD_parcelNotFree": false,
              "typeCat": "food_and_beverages",
              "PnD_nationCharge": 0,
              "name": "Aditya",
              "PnD_freeStart": 0,
              "addressPick": {
                  "region": "Maharashtra",
                  "line2": "",
                  "lon": 72.83105909999999,
                  "city": "Mumbai Suburban",
                  "lat": 19.0662066,
                  "area": "Dent Heal",
                  "zip": "400050",
                  "locality": "Mumbai",
                  "line1": "Dipesadsadas sadasdas",
                  "nation": "IND",
                  "state": "MH",
                  "id": "IND_MH_1648672299398"
              },
              "status": 20,
              "typeOrdr": "BURN",
              "PnD_cityCharge": 0,
              "require": false,
              "typeShop": "Both",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "phone": "8879751140"
          },
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "shortID": "A000jt",
          "gwSIGN": "71ea07ecf08d4b5f1d6d615bc221d3cc729da532bfd6d184ab90f8b4c2d10d12",
          "sin": {
              "seconds": 1667459383,
              "nanoseconds": 217000000
          },
          "userName": "Aditya",
          "refr": null,
          "earn": 0,
          "upd": {
              "seconds": 1667459383,
              "nanoseconds": 217000000
          },
          "amRefr": 0.14,
          "setShortID": true,
          "amBurst": 2,
          "amParcelCity": false,
          "storeName": "Fit Food",
          "code": null,
          "camp": null,
          "gwInfo": {
              "international": false,
              "amount_refunded": 0,
              "email": "adityakirtane27@gmail.com",
              "vpa": "adityakirtane27@okaxis",
              "currency": "INR",
              "error_source": null,
              "acquirer_data": {
                  "rrn": "230723243893"
              },
              "error_step": null,
              "method": "upi",
              "error_reason": null,
              "error_description": null,
              "created_at": 1667459403,
              "wallet": null,
              "contact": "+918879751140",
              "id": "pay_KbTj4o1R3JRVbq",
              "bank": null,
              "entity": "payment",
              "tax": 0,
              "error_code": null,
              "card_id": null,
              "captured": true,
              "refund_status": null,
              "invoice_id": null,
              "status": "captured",
              "description": "payment to Fit Food",
              "order_id": "order_KbTimQMSmPOGM9",
              "fee": 2,
              "notes": {
                  "description": "descriptionX"
              },
              "amount": 100
          },
          "status": 10,
          "com": {
              "seconds": 1667459441,
              "nanoseconds": 998000000
          },
          "journey": "BURN"
      },
      {
          "gwInfo": {
              "contact": "+919167452128",
              "card_id": null,
              "notes": {
                  "description": "descriptionX"
              },
              "currency": "INR",
              "fee": 2,
              "method": "upi",
              "acquirer_data": {
                  "rrn": "230722510660"
              },
              "error_description": null,
              "status": "captured",
              "description": "payment to Fit Food",
              "invoice_id": null,
              "entity": "payment",
              "error_reason": null,
              "vpa": "roshanshilimar123@okaxis",
              "error_source": null,
              "id": "pay_KbTM8vbPCWRNfR",
              "amount": 100,
              "international": false,
              "amount_refunded": 0,
              "email": "roshankailashshilimkar@gmail.com",
              "order_id": "order_KbTLuiq9zYJIAq",
              "created_at": 1667458100,
              "error_code": null,
              "captured": true,
              "refund_status": null,
              "bank": null,
              "tax": 0,
              "wallet": null,
              "error_step": null
          },
          "amTotal": 2,
          "cart": [
              {
                  "flash": false,
                  "cost": 2,
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "relate": [],
                  "burnDecShort": "abc",
                  "burn": false,
                  "quota": 0,
                  "burnDec": "abc",
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                  ],
                  "code": "Some Hsn",
                  "sin": {
                      "seconds": 1662754531,
                      "nanoseconds": 334000000
                  },
                  "burnSpec": "abc",
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
                  ],
                  "burnHigh": "abc",
                  "burnCat": "food_and_beverages",
                  "upd": {
                      "seconds": 1665744132,
                      "nanoseconds": 420000000
                  },
                  "reqBurn": false,
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "vX": [
                      {
                          "nowVarient": [
                              {
                                  "type": "palete",
                                  "name": "#ff0000"
                              },
                              {
                                  "type": "size",
                                  "name": "Xl"
                              },
                              {
                                  "name": "#333",
                                  "type": "color"
                              }
                          ],
                          "id": "s15R9CsWGf0DjDkGRwfV",
                          "countQ": 1
                      }
                  ],
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99",
                  "content": true,
                  "costBurn": 1.8,
                  "warranty": false,
                  "price": 10,
                  "description": "elo",
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "category": "some category",
                  "title": "Abcd",
                  "burnBrand": "abc",
                  "Q": 1,
                  "burnCatSub": "Nope",
                  "variants": [
                      {
                          "type": "size",
                          "name": "Xl"
                      },
                      {
                          "name": "#ff0000",
                          "type": "palete"
                      },
                      {
                          "name": "#333",
                          "type": "color"
                      },
                      {
                          "name": "#123123",
                          "type": "color"
                      }
                  ],
                  "sold": 0
              }
          ],
          "sin": {
              "seconds": 1667458084,
              "nanoseconds": 441000000
          },
          "refr": {
              "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "earn": 0,
              "name": "Aditya"
          },
          "amTaxTCS": 0.02,
          "logistics": {
              "typeOrdr": "F2F_ONLINE",
              "name": "Roshan",
              "require": false,
              "status": 20,
              "addressDropT": "home",
              "addressDrop": {
                  "type": "home",
                  "zip": 400097,
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                  "landmark": "Opposite of maple height building "
              },
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "PnD_freeStart": 0,
              "PnD_cityCharge": 0,
              "phone": "9167452128",
              "PnD_nationCharge": 0,
              "typeShop": "Both",
              "email": "",
              "PnD_parcelNotFree": false,
              "addressPick": {
                  "lat": 19.0662066,
                  "state": "MH",
                  "line2": "",
                  "line1": "Dipesadsadas sadasdas",
                  "area": "Dent Heal",
                  "city": "Mumbai Suburban",
                  "lon": 72.83105909999999,
                  "zip": "400050",
                  "locality": "Mumbai",
                  "id": "IND_MH_1648672299398",
                  "nation": "IND",
                  "region": "Maharashtra"
              },
              "typeCat": "food_and_beverages",
              "addressPickT": "shop"
          },
          "gwSIGN": "91b5f0bb5c9c18c55eeb60003cda9528b1de7345ac035c92b0cb5a8c9e99aa32",
          "amSave": 9,
          "code": "A000Ky",
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "id": "XPspBVctZNMkftqBxVWR",
          "shortID": "A000jo",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "com": {
              "seconds": 1667459408,
              "nanoseconds": 218000000
          },
          "invoice": {
              "useRefrCash": true,
              "amtRefrCash": 1,
              "COD": false
          },
          "upd": {
              "seconds": 1667458084,
              "nanoseconds": 441000000
          },
          "gwID": "pay_KbTM8vbPCWRNfR",
          "gwORDR": "order_KbTLuiq9zYJIAq",
          "amGateway": 0.0236,
          "setShortID": true,
          "amCost": 1,
          "userName": "Roshan",
          "journey": "F2F",
          "type": [
              "RefrCASH+ONLINE",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000Ky",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "amTaxTDS": 0,
          "ordrTYPE": "RefrCASH+ONLINE",
          "amParcel": 0,
          "amBurst": 2,
          "storeName": "Fit Food",
          "amParcelCity": false,
          "earn": 0,
          "amRefr": 0,
          "status": 10,
          "amSale": 10,
          "amTax": 0,
          "camp": {
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "ban": false,
              "customAct": false,
              "paused": false,
              "paid": false,
              "type": "flat",
              "cbExi": 4,
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "cbDir": 2,
              "storeTyp": "Both",
              "stage": 0,
              "countS": 0,
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "tX": "t1",
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "countP": 0,
              "name": "Campaign-47",
              "customPay": 0,
              "cbNew": 8,
              "min": 8,
              "max": 0,
              "stoped": false,
              "countM": 0,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "expiry": false
          }
      },
      {
          "amParcel": 0,
          "sin": {
              "seconds": 1667458901,
              "nanoseconds": 134000000
          },
          "ordrTYPE": "RefrCASH",
          "shortID": "A000jq",
          "storeName": "Fit Food",
          "upd": {
              "seconds": 1667458901,
              "nanoseconds": 134000000
          },
          "amSave": 10,
          "amRefr": 0.07,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "amBurst": 1,
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "code": null,
          "logistics": {
              "status": 20,
              "email": "",
              "addressDrop": {
                  "zip": 400097,
                  "type": "home",
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                  "landmark": "Opposite of maple height building "
              },
              "addressDropT": "home",
              "PnD_parcelNotFree": false,
              "require": false,
              "PnD_nationCharge": 0,
              "PnD_freeStart": 0,
              "name": "Roshan",
              "PnD_cityCharge": 0,
              "typeCat": "food_and_beverages",
              "typeOrdr": "BURN",
              "addressPick": {
                  "state": "MH",
                  "area": "Dent Heal",
                  "region": "Maharashtra",
                  "nation": "IND",
                  "city": "Mumbai Suburban",
                  "zip": "400050",
                  "line1": "Dipesadsadas sadasdas",
                  "lat": 19.0662066,
                  "lon": 72.83105909999999,
                  "id": "IND_MH_1648672299398",
                  "locality": "Mumbai",
                  "line2": ""
              },
              "phone": "9167452128",
              "typeShop": "Both",
              "addressPickT": "shop",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks"
          },
          "amGateway": 0,
          "camp": null,
          "amTaxTCS": 0.01,
          "amTotal": 1,
          "userName": "Roshan",
          "setShortID": true,
          "amParcelCity": false,
          "type": [
              "RefrCASH",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "storeORDER",
              "clientAc",
              "addORDER",
              "BURN",
              null,
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "invoice": {
              "useRefrCash": true,
              "amtRefrCash": 1,
              "COD": false
          },
          "status": 10,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "journey": "BURN",
          "com": {
              "seconds": 1667459405,
              "nanoseconds": 432000000
          },
          "amTax": 0,
          "earn": 0,
          "refr": null,
          "cart": [
              {
                  "burnCatSub": "Nope",
                  "sin": {
                      "seconds": 1667458398,
                      "nanoseconds": 504000000
                  },
                  "Q": 1,
                  "burnBrand": "abc",
                  "burnSpec": "abc",
                  "burn": true,
                  "burnDecShort": "abc ",
                  "storeINFO": {
                      "vAte": 1268.7999999999997,
                      "addedDynamicLinkP1": true,
                      "vEarn": 43449,
                      "shareUrlP1": "https://refrclub.com/o/EncD",
                      "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "shareUrlB1": "https://refrclub.com/o/4Yif",
                      "sin": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "loc": [
                          {
                              "nation": "IND",
                              "lat": 19.0662066,
                              "locality": "Mumbai",
                              "city": "Mumbai Suburban",
                              "lon": 72.83105909999999,
                              "area": "Dent Heal",
                              "line2": "",
                              "state": "MH",
                              "zip": "400050",
                              "line1": "Dipesadsadas sadasdas",
                              "region": "Maharashtra",
                              "id": "IND_MH_1648672299398"
                          },
                          {
                              "lon": 72.8213950683594,
                              "city": "Mumbai Suburban",
                              "lat": 19.134840193193707,
                              "locality": "Mumbai",
                              "line2": "",
                              "zip": "400053",
                              "line1": "sadas sadasdasd sdasdas",
                              "region": "Maharashtra",
                              "state": "MH",
                              "id": "IND_MH_1656024949912",
                              "nation": "IND",
                              "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India"
                          }
                      ],
                      "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
                      "banners": [
                          "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
                      ],
                      "typeORDER": {
                          "nationCharge": 0,
                          "cityCharge": 0,
                          "exchange": false,
                          "refund": false,
                          "logistics": false,
                          "freeStart": 0,
                          "delivery": "Nationwide",
                          "phoneHide": true,
                          "COD": true,
                          "return": true,
                          "freeParcel": false
                      },
                      "shareUrlX1": "https://refrclub.com/o/WoQJ",
                      "userInfo": {
                          "email": "dipesious@hotmail.com",
                          "addr": [
                              {
                                  "landmark": "xyz",
                                  "address": "abc",
                                  "type": "work",
                                  "zip": 401101
                              },
                              {
                                  "zip": 401101,
                                  "type": "home",
                                  "landmark": "Tower",
                                  "address": "Google"
                              },
                              {
                                  "zip": 400056,
                                  "address": "101, Leena residence gulmohar road miraj",
                                  "landmark": "Opposite gagandeep restaurant ",
                                  "type": "other"
                              },
                              {
                                  "type": "other",
                                  "zip": 400049,
                                  "landmark": "Opposite naturals ",
                                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme "
                              }
                          ],
                          "coin": "INR",
                          "upd": {
                              "seconds": 1667394172,
                              "nanoseconds": 291000000
                          },
                          "phone": "+919876543210",
                          "axess": [
                              "phone"
                          ],
                          "acBalGivenV": 2600,
                          "acBalV": 5598.333599999994,
                          "bucket": [
                              "6cZGYy20f5boFbbsXtYB",
                              "qqMPDmqy0o01YiiIYqaE",
                              "kxczduUeyyYUvoCyLvnO",
                              "6uhvn2NoTtN8ONPuM2qj"
                          ],
                          "soWA": "9876543210",
                          "storeSav": [
                              "8B9ozj7aTPvywkIvVWiK",
                              "tjOyZV9TVTpQ1hoccOYB"
                          ],
                          "soYT": "simran",
                          "iso": "IND",
                          "note": [],
                          "storeLoc": [
                              "8B9ozj7aTPvywkIvVWiK"
                          ],
                          "acBalP": 0,
                          "acBalVr": 2466.85,
                          "payout": false,
                          "soFB": "dip",
                          "emailV": false,
                          "soIG": "dipesious",
                          "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                          "tokenSNS": "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI",
                          "acBalVp": 16000,
                          "BankUPI": {
                              "address": "dipesious@dbs",
                              "handle": "dbs",
                              "active": true,
                              "fund_account_id": "fa_K9hVBLRtX776iF",
                              "username": "dipesious",
                              "verified": true,
                              "contact_id": "cont_K9KglWSOWnTNTY"
                          },
                          "acBalGivenC": 1980,
                          "sin": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "emails": [],
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
                              "IzSNW9mwHpHHyZ6C9cAD",
                              "si4Ba2AAJX8gOmMEX0DI",
                              "d8Qr9CBymh0HhlLgj0Kd",
                              "m7P29pSnPtsM1xJKr7i7",
                              "zEs8nH8F7ZeL6jilXm9n",
                              "RJMlwhLTqIZECFgd2mvC",
                              "xlpKSHQZKZko52jbfXFP",
                              "NWFtLtMCTNTLsXWT0u0K",
                              "iZ0WJpj4WDxyZ4jo8nFp"
                          ],
                          "admin": true,
                          "acBalCr": 120,
                          "ban": false,
                          "acBalH": 376.15,
                          "soTW": "dip",
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
                              "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
                              "eNxKvi2UZc2QG5Ao0FT4bj:APA91bHYvXZ2KwmUMIyC7sy1s7jL4YDTD8feVzNV-2AVhk_dQntWyAwMd29MOhzP4HzZkW7kS9kzBhJzxvETIf--on0uHlow9ZiXqxsEifNKo2B400YzkG4R7ok8doUYGcO-l2YwptPm",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bGc1YRXmGAvwCEd5ixCjAuh90ZBTLuPHoRElPzlmhUbC6_daGZhBgzd375yZycDe4pfsme8PYW3ocspEchw9bgtfJGJZHLM7fH8k7nksOum7qKFF-zBJ7SWhLnu6xXn7hTStEjr",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bFsJT54ZwxTaHd1GJygSHbKW4rMHCcT8RHZ9ID3i24p0dVlmwQvwnNroVAIceSbsaCMXzkrmThOY4CXkojq4p37FHjeuCMv17oKHbKyUu8kYelJc17Z_qt3mUZth5gZ-TUVDxU0",
                              "ewAaWPVMGd5qHVFkJVFHkW:APA91bFIULeRklx92CqpXSzhrFPy9vgGGLzhWsBnaeFlZR3rOsG1N1svIcFZAOxw1wST8B-e7cufnjSw4sGC2yaysDZMjHDE4CSw5NCFGQsAzVJCULe3xsFGrhnGgpl7jn5HAB5kwSif",
                              "flfODnMMqd2Skn8wlzxnOr:APA91bFpPuQGx0zTuMwAShAG2KYQ9SY138HVklzmhA3MPDCVb586ch8jdC74yzB08cNK3sGO0zPRU7K6RWKj1V20xxXz9yXXy5sOew8X6KJWY8LUjTAxrHjRjqy9CUtR2xjy-cLWJApH",
                              "eQI1Nvq964agdpMBVCRJov:APA91bGhaG5jZl1x-ZPX1wnVqAJNKMGgdavDsyYLbhj3viuVsOwffZ5qi-UNHPETnc7OwSfrKXDuKvDvsT-OAeg1mvkt_sqcbufuq-Uekszxt0oRfEOXPfKS9jPtH7WmZqimTHyVf91s",
                              "d_hEx4aGq6e0R-Wtsok0IN:APA91bEFyk80Fj9-gYm1brSE-2ZHjdXYcRAL_9Lyr97vis2cUS0kg8hRVJ8sAzJbOEDi0z45OWw3aDNXOeNh6s3rcKicS-5mOFiO-jfJTFOuj_iNzdZ4YfJPxpeNQypez-STl9dV75y0",
                              "cynYYwZHMZ5IRz-g5lfBjB:APA91bE_mp7lzNqD3OEUkF5khz-JTuDTS-vU4z9aDQdMHGUYakZoOQ4FCKLrhNfmFtxKDIKRSDKrLRI_DOhBDFP-Ukye1DF810fybUI_4YTzL9BnRZFiEeluA2OyvhZBHOvXFymSnimn",
                              "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI"
                          ],
                          "acBalC": 1117.2500000000005,
                          "display": "",
                          "cashback": 8,
                          "log": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "name": "Dipeshin"
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
                      "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                      "id": "8B9ozj7aTPvywkIvVWiK",
                      "phone": "9876543210",
                      "subCat": "sc-food_and_beverages-healthy_snacks",
                      "name": "Fit Food",
                      "log": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "vFan": 43,
                      "vOrdr": 43,
                      "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "type": "Both",
                      "vGave": 2729.85,
                      "email": "dipeshbhoir@hotmail.com",
                      "upd": {
                          "seconds": 1667149326,
                          "nanoseconds": 109000000
                      },
                      "shareUrlV1": "https://refrclub.com/o/tobR",
                      "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "addedDynamicLink": true,
                      "cashback": 8,
                      "schedule": {
                          "openFriS": "06:00",
                          "openThu": true,
                          "openFriE": "19:00",
                          "openBreakE": "15:00",
                          "openMon": true,
                          "openSatS": "06:00",
                          "openBreakS": "11:00",
                          "openSatE": "19:00",
                          "openTue": true,
                          "openMonS": "09:00",
                          "opensDailyE": "23:00",
                          "openTueE": "19:00",
                          "openSat": true,
                          "openSunE": "19:00",
                          "openSun": false,
                          "openMonE": "19:00",
                          "openThuS": "06:00",
                          "opensDailyS": "10:00",
                          "openBreak": false,
                          "openWedS": "06:00",
                          "openThuE": "19:00",
                          "openTueS": "06:00",
                          "openSunS": "06:00",
                          "openWed": true,
                          "openFri": true,
                          "openWedE": "19:00",
                          "opensDaily": false
                      },
                      "cat": "food_and_beverages",
                      "products": 18,
                      "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
                      "about": "About the store"
                  },
                  "relate": [],
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkTGPBV7L0ewCwkGIL1XA1667458759300?alt=media&token=56ae2369-96c0-4f37-aa7c-56fab96bc1c1",
                  "category": "Dal",
                  "variants": [],
                  "warranty": true,
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkTGPBV7L0ewCwkGIL1XA1667458759300?alt=media&token=56ae2369-96c0-4f37-aa7c-56fab96bc1c1"
                  ],
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkTGPBV7L0ewCwkGIL1XA1667458398667?alt=media&token=b49f7c55-aa15-4f8a-9c30-fcae47ea1ddf"
                  ],
                  "code": "122131123",
                  "costBurn": 0.9,
                  "price": 10,
                  "upd": {
                      "seconds": 1667458852,
                      "nanoseconds": 248000000
                  },
                  "burnCat": "food_and_beverages",
                  "id": "kTGPBV7L0ewCwkGIL1XA",
                  "burnHigh": "abc",
                  "burnDec": "abc",
                  "cost": 1,
                  "flash": false,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "reqBurn": false,
                  "quota": 0,
                  "sold": 0,
                  "description": "abc",
                  "content": false,
                  "vX": [],
                  "title": "ABC"
              }
          ],
          "amTaxTDS": 0,
          "amSale": 10,
          "id": "22c4F0P1FdD2rAhlxeCA",
          "amCost": 0
      },
      {
          "cart": [
              {
                  "burnCat": "food_and_beverages",
                  "storeINFO": {
                      "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "shareUrlV1": "https://refrclub.com/o/tobR",
                      "vOrdr": 43,
                      "vAte": 1268.7999999999997,
                      "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Food&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "subCat": "sc-food_and_beverages-healthy_snacks",
                      "shareUrlX1": "https://refrclub.com/o/WoQJ",
                      "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544103649?alt=media&token=cace74d2-365e-4906-8c4c-4cfcf199aa74",
                      "cat": "food_and_beverages",
                      "vEarn": 43449,
                      "email": "dipeshbhoir@hotmail.com",
                      "addedDynamicLink": true,
                      "upd": {
                          "seconds": 1667149326,
                          "nanoseconds": 109000000
                      },
                      "userInfo": {
                          "acBalGivenC": 1980,
                          "tokenSNS": "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI",
                          "payout": false,
                          "soYT": "simran",
                          "storeSav": [
                              "8B9ozj7aTPvywkIvVWiK",
                              "tjOyZV9TVTpQ1hoccOYB"
                          ],
                          "storeLoc": [
                              "8B9ozj7aTPvywkIvVWiK"
                          ],
                          "acBalP": 0,
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
                              "cblvG8Ot9VKeS74dKh1hNC:APA91bHax360B95xeR4u379j0SJiUIkU0NSHTlMTtfCExE-8OO-DD2072NoyvrDAcvO3CYHLIAf985WsV-bXz2dsYf2m58g1Tk2ymi2N0-a8ASzPOhXJA9xIrqstvpJBCovqBkrTXxCZ",
                              "eNxKvi2UZc2QG5Ao0FT4bj:APA91bHYvXZ2KwmUMIyC7sy1s7jL4YDTD8feVzNV-2AVhk_dQntWyAwMd29MOhzP4HzZkW7kS9kzBhJzxvETIf--on0uHlow9ZiXqxsEifNKo2B400YzkG4R7ok8doUYGcO-l2YwptPm",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bGc1YRXmGAvwCEd5ixCjAuh90ZBTLuPHoRElPzlmhUbC6_daGZhBgzd375yZycDe4pfsme8PYW3ocspEchw9bgtfJGJZHLM7fH8k7nksOum7qKFF-zBJ7SWhLnu6xXn7hTStEjr",
                              "d3f1kKHT0yUgg4CzfhmwMh:APA91bFsJT54ZwxTaHd1GJygSHbKW4rMHCcT8RHZ9ID3i24p0dVlmwQvwnNroVAIceSbsaCMXzkrmThOY4CXkojq4p37FHjeuCMv17oKHbKyUu8kYelJc17Z_qt3mUZth5gZ-TUVDxU0",
                              "ewAaWPVMGd5qHVFkJVFHkW:APA91bFIULeRklx92CqpXSzhrFPy9vgGGLzhWsBnaeFlZR3rOsG1N1svIcFZAOxw1wST8B-e7cufnjSw4sGC2yaysDZMjHDE4CSw5NCFGQsAzVJCULe3xsFGrhnGgpl7jn5HAB5kwSif",
                              "flfODnMMqd2Skn8wlzxnOr:APA91bFpPuQGx0zTuMwAShAG2KYQ9SY138HVklzmhA3MPDCVb586ch8jdC74yzB08cNK3sGO0zPRU7K6RWKj1V20xxXz9yXXy5sOew8X6KJWY8LUjTAxrHjRjqy9CUtR2xjy-cLWJApH",
                              "eQI1Nvq964agdpMBVCRJov:APA91bGhaG5jZl1x-ZPX1wnVqAJNKMGgdavDsyYLbhj3viuVsOwffZ5qi-UNHPETnc7OwSfrKXDuKvDvsT-OAeg1mvkt_sqcbufuq-Uekszxt0oRfEOXPfKS9jPtH7WmZqimTHyVf91s",
                              "d_hEx4aGq6e0R-Wtsok0IN:APA91bEFyk80Fj9-gYm1brSE-2ZHjdXYcRAL_9Lyr97vis2cUS0kg8hRVJ8sAzJbOEDi0z45OWw3aDNXOeNh6s3rcKicS-5mOFiO-jfJTFOuj_iNzdZ4YfJPxpeNQypez-STl9dV75y0",
                              "cynYYwZHMZ5IRz-g5lfBjB:APA91bE_mp7lzNqD3OEUkF5khz-JTuDTS-vU4z9aDQdMHGUYakZoOQ4FCKLrhNfmFtxKDIKRSDKrLRI_DOhBDFP-Ukye1DF810fybUI_4YTzL9BnRZFiEeluA2OyvhZBHOvXFymSnimn",
                              "e7gSGJrTYcZa0M24mOd-ln:APA91bHZL-LKmqdEUSAxwlHAdrfxaSd__CtGg-9_dR8WcFH7gib8MEeEZ2ixELWkgMrpckgoYbqgqVTSDPThzmHDgxUNtSHqIXcle75hkvxX5WjZ2EipU_JV4_rLdAPEULsRwa3hGggI"
                          ],
                          "BankUPI": {
                              "fund_account_id": "fa_K9hVBLRtX776iF",
                              "verified": true,
                              "handle": "dbs",
                              "active": true,
                              "address": "dipesious@dbs",
                              "username": "dipesious",
                              "contact_id": "cont_K9KglWSOWnTNTY"
                          },
                          "soWA": "9876543210",
                          "emailV": false,
                          "addr": [
                              {
                                  "landmark": "xyz",
                                  "type": "work",
                                  "address": "abc",
                                  "zip": 401101
                              },
                              {
                                  "zip": 401101,
                                  "type": "home",
                                  "address": "Google",
                                  "landmark": "Tower"
                              },
                              {
                                  "address": "101, Leena residence gulmohar road miraj",
                                  "type": "other",
                                  "zip": 400056,
                                  "landmark": "Opposite gagandeep restaurant "
                              },
                              {
                                  "address": "31 Chiranjeev building,  Gulmohar cross road no. 4 jvpd scheme ",
                                  "landmark": "Opposite naturals ",
                                  "type": "other",
                                  "zip": 400049
                              }
                          ],
                          "display": "",
                          "upd": {
                              "seconds": 1667394172,
                              "nanoseconds": 291000000
                          },
                          "acBalGivenV": 2600,
                          "admin": true,
                          "name": "Dipeshin",
                          "acBalVr": 2467.85,
                          "soFB": "dip",
                          "acBalC": 1117.2500000000005,
                          "bucket": [
                              "6cZGYy20f5boFbbsXtYB",
                              "qqMPDmqy0o01YiiIYqaE",
                              "kxczduUeyyYUvoCyLvnO",
                              "6uhvn2NoTtN8ONPuM2qj"
                          ],
                          "emails": [],
                          "cashback": 8,
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
                              "IzSNW9mwHpHHyZ6C9cAD",
                              "si4Ba2AAJX8gOmMEX0DI",
                              "d8Qr9CBymh0HhlLgj0Kd",
                              "m7P29pSnPtsM1xJKr7i7",
                              "zEs8nH8F7ZeL6jilXm9n",
                              "RJMlwhLTqIZECFgd2mvC",
                              "xlpKSHQZKZko52jbfXFP",
                              "NWFtLtMCTNTLsXWT0u0K",
                              "iZ0WJpj4WDxyZ4jo8nFp"
                          ],
                          "acBalH": 376.15,
                          "acBalV": 5598.333599999994,
                          "acBalVp": 16000,
                          "uid": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                          "sin": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "log": {
                              "seconds": 1648670306,
                              "nanoseconds": 23000000
                          },
                          "ban": false,
                          "phone": "+919876543210",
                          "acBalCr": 120,
                          "axess": [
                              "phone"
                          ],
                          "iso": "IND",
                          "coin": "INR",
                          "email": "dipesious@hotmail.com",
                          "soIG": "dipesious",
                          "note": [],
                          "soTW": "dip"
                      },
                      "log": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "banners": [
                          "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1660791163789?alt=media&token=c790f623-7b8b-4791-9db2-903588eaecbb"
                      ],
                      "id": "8B9ozj7aTPvywkIvVWiK",
                      "products": 18,
                      "proCat": [
                          "gfjgjhgjhghjg",
                          "hhkhkjhjk",
                          "some category",
                          "Dal",
                          "Paneer",
                          "Kolhapuri",
                          "chocolate"
                      ],
                      "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                      "about": "About the store",
                      "loc": [
                          {
                              "region": "Maharashtra",
                              "id": "IND_MH_1648672299398",
                              "line2": "",
                              "area": "Dent Heal",
                              "lon": 72.83105909999999,
                              "line1": "Dipesadsadas sadasdas",
                              "nation": "IND",
                              "city": "Mumbai Suburban",
                              "locality": "Mumbai",
                              "zip": "400050",
                              "lat": 19.0662066,
                              "state": "MH"
                          },
                          {
                              "zip": "400053",
                              "area": "26-2, Vidhneswar Temple Marg, Swastik Cooperative Housing Society, SV Patel Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                              "region": "Maharashtra",
                              "nation": "IND",
                              "id": "IND_MH_1656024949912",
                              "lat": 19.134840193193707,
                              "locality": "Mumbai",
                              "state": "MH",
                              "line2": "",
                              "lon": 72.8213950683594,
                              "city": "Mumbai Suburban",
                              "line1": "sadas sadasdasd sdasdas"
                          }
                      ],
                      "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8B9ozj7aTPvywkIvVWiK&ofl=club.refr.app&st=Fit%20Foods&sd=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8B9ozj7aTPvywkIvVWiK1656593787215%3Falt%3Dmedia%26token%3D7cec8f94-bc20-4a14-92ee-c77e82ade5c8",
                      "sin": {
                          "seconds": 1648672299,
                          "nanoseconds": 867000000
                      },
                      "shareUrlP1": "https://refrclub.com/o/EncD",
                      "type": "Both",
                      "vFan": 43,
                      "typeORDER": {
                          "COD": true,
                          "freeStart": 0,
                          "delivery": "Nationwide",
                          "freeParcel": false,
                          "exchange": false,
                          "return": true,
                          "cityCharge": 0,
                          "refund": false,
                          "logistics": false,
                          "nationCharge": 0,
                          "phoneHide": true
                      },
                      "shareUrlB1": "https://refrclub.com/o/4Yif",
                      "schedule": {
                          "openMonE": "19:00",
                          "openThu": true,
                          "openWedE": "19:00",
                          "openSun": false,
                          "openBreak": false,
                          "openWedS": "06:00",
                          "openBreakS": "11:00",
                          "openWed": true,
                          "opensDailyE": "23:00",
                          "openMonS": "09:00",
                          "openThuS": "06:00",
                          "openFriE": "19:00",
                          "openSatS": "06:00",
                          "openThuE": "19:00",
                          "opensDailyS": "10:00",
                          "opensDaily": false,
                          "openSatE": "19:00",
                          "openTueS": "06:00",
                          "openFriS": "06:00",
                          "openFri": true,
                          "openTueE": "19:00",
                          "openMon": true,
                          "openSat": true,
                          "openSunE": "19:00",
                          "openSunS": "06:00",
                          "openBreakE": "15:00",
                          "openTue": true
                      },
                      "name": "Fit Food",
                      "addedDynamicLinkP1": true,
                      "cashback": 8,
                      "vGave": 2729.85,
                      "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8B9ozj7aTPvywkIvVWiK1664544112393?alt=media&token=d9cd0883-b09e-4a40-8d8c-ea636efbff9c",
                      "phone": "9876543210"
                  },
                  "burnCatSub": "Nope",
                  "burnDecShort": "abc ",
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkTGPBV7L0ewCwkGIL1XA1667458759300?alt=media&token=56ae2369-96c0-4f37-aa7c-56fab96bc1c1",
                  "vX": [],
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "quota": 0,
                  "Q": 1,
                  "relate": [],
                  "burnSpec": "abc",
                  "cost": 1,
                  "description": "abc",
                  "warranty": true,
                  "burn": true,
                  "title": "ABC",
                  "burnBrand": "abc",
                  "upd": {
                      "seconds": 1667458852,
                      "nanoseconds": 248000000
                  },
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkTGPBV7L0ewCwkGIL1XA1667458398667?alt=media&token=b49f7c55-aa15-4f8a-9c30-fcae47ea1ddf"
                  ],
                  "costBurn": 0.9,
                  "content": false,
                  "flash": false,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "code": "122131123",
                  "category": "Dal",
                  "burnDec": "abc",
                  "burnHigh": "abc",
                  "price": 10,
                  "sin": {
                      "seconds": 1667458398,
                      "nanoseconds": 504000000
                  },
                  "variants": [],
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkTGPBV7L0ewCwkGIL1XA1667458759300?alt=media&token=56ae2369-96c0-4f37-aa7c-56fab96bc1c1"
                  ],
                  "sold": 0,
                  "reqBurn": false,
                  "id": "kTGPBV7L0ewCwkGIL1XA"
              }
          ],
          "amTotal": 1,
          "amTax": 0,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "gwInfo": {
              "error_reason": null,
              "method": "upi",
              "amount_refunded": 0,
              "wallet": null,
              "entity": "payment",
              "vpa": "roshanshilimar123@okaxis",
              "international": false,
              "card_id": null,
              "amount": 100,
              "bank": null,
              "created_at": 1667458989,
              "error_step": null,
              "error_source": null,
              "status": "captured",
              "notes": {
                  "description": "descriptionX"
              },
              "currency": "INR",
              "refund_status": null,
              "contact": "+919167452128",
              "error_description": null,
              "acquirer_data": {
                  "rrn": "230723008680"
              },
              "id": "pay_KbTbnTw109NU9h",
              "tax": 0,
              "description": "payment to Fit Food",
              "email": "roshankailashshilimkar@gmail.com",
              "fee": 2,
              "captured": true,
              "order_id": "order_KbTaq6Dv4ZG7Nm",
              "invoice_id": null,
              "error_code": null
          },
          "shortID": "A000js",
          "setShortID": true,
          "logistics": {
              "name": "Roshan",
              "addressDropT": "home",
              "PnD_nationCharge": 0,
              "email": "",
              "addressPickT": "shop",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "PnD_parcelNotFree": false,
              "phone": "9167452128",
              "addressDrop": {
                  "landmark": "Opposite of maple height building ",
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                  "zip": 400097,
                  "type": "home"
              },
              "PnD_cityCharge": 0,
              "typeOrdr": "BURN",
              "status": 20,
              "addressPick": {
                  "zip": "400050",
                  "line1": "Dipesadsadas sadasdas",
                  "lat": 19.0662066,
                  "region": "Maharashtra",
                  "line2": "",
                  "lon": 72.83105909999999,
                  "city": "Mumbai Suburban",
                  "locality": "Mumbai",
                  "area": "Dent Heal",
                  "id": "IND_MH_1648672299398",
                  "nation": "IND",
                  "state": "MH"
              },
              "typeCat": "food_and_beverages",
              "PnD_freeStart": 0,
              "require": false,
              "typeShop": "Both"
          },
          "amParcelCity": false,
          "ordrTYPE": "ONLINE",
          "amRefr": 0.07,
          "id": "NIJWMhUQa01ad9wwL7J1",
          "com": {
              "seconds": 1667459402,
              "nanoseconds": 149000000
          },
          "amBurst": 1,
          "code": null,
          "amTaxTCS": 0.01,
          "journey": "BURN",
          "storeName": "Fit Food",
          "amSave": 9,
          "gwORDR": "order_KbTaq6Dv4ZG7Nm",
          "earn": 0,
          "amGateway": 0.0236,
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "refr": null,
          "sin": {
              "seconds": 1667458931,
              "nanoseconds": 579000000
          },
          "invoice": {
              "amtRefrCash": 0,
              "useRefrCash": false,
              "COD": false
          },
          "amCost": 1,
          "gwID": "pay_KbTbnTw109NU9h",
          "userName": "Roshan",
          "amParcel": 0,
          "gwSIGN": "7a2a91b16213b20d6123bccff21a93ee632d4c93e7ff059cb19a4ec465812dda",
          "type": [
              "ONLINE",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "storeORDER",
              "clientAc",
              "addORDER",
              "BURN",
              null,
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "status": 10,
          "amTaxTDS": 0,
          "camp": null,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "upd": {
              "seconds": 1667458931,
              "nanoseconds": 579000000
          },
          "amSale": 10
      },
      {
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "logistics": {
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "PnD_nationCharge": 0,
              "PnD_cityCharge": 0,
              "typeCat": "food_and_beverages",
              "email": "",
              "addressPick": {
                  "area": "Dent Heal",
                  "nation": "IND",
                  "lat": 19.0662066,
                  "locality": "Mumbai",
                  "line1": "Dipesadsadas sadasdas",
                  "lon": 72.83105909999999,
                  "line2": "",
                  "state": "MH",
                  "region": "Maharashtra",
                  "city": "Mumbai Suburban",
                  "zip": "400050",
                  "id": "IND_MH_1648672299398"
              },
              "name": "Roshan",
              "PnD_parcelNotFree": false,
              "typeShop": "Both",
              "addressDropT": "home",
              "addressPickT": "shop",
              "phone": "9167452128",
              "status": 20,
              "addressDrop": {
                  "zip": 400097,
                  "landmark": "Opposite of maple height building ",
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                  "type": "home"
              },
              "typeOrdr": "F2F_ONLINE",
              "require": false,
              "PnD_freeStart": 0
          },
          "invoice": {
              "COD": false,
              "useRefrCash": true,
              "amtRefrCash": 8
          },
          "amTotal": 9,
          "gwID": "pay_KbTKifWtHdntv4",
          "amTaxTCS": 0.09,
          "refr": {
              "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "earn": 4,
              "name": "Aditya"
          },
          "amParcelCity": false,
          "amSale": 25,
          "ordrTYPE": "RefrCASH+ONLINE",
          "amBurst": 9,
          "gwSIGN": "f59e5c84600fd6f88b1cd606894f414a1b19d45b5fff44e3c759fabf13c553cb",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "amRefr": 0,
          "shortID": "A000jm",
          "type": [
              "RefrCASH+ONLINE",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000Ky",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "id": "cEorRx6lz9bXQLKq231y",
          "setShortID": true,
          "upd": {
              "seconds": 1667458007,
              "nanoseconds": 29000000
          },
          "gwInfo": {
              "captured": true,
              "order_id": "order_KbTKYlDr8XOPrE",
              "acquirer_data": {
                  "rrn": "230722469011"
              },
              "wallet": null,
              "id": "pay_KbTKifWtHdntv4",
              "contact": "+919167452128",
              "card_id": null,
              "tax": 0,
              "vpa": "roshanshilimar123@okaxis",
              "notes": {
                  "description": "descriptionX"
              },
              "amount_refunded": 0,
              "entity": "payment",
              "email": "roshanshilimar123@gmail.com",
              "error_code": null,
              "amount": 100,
              "description": "payment to Fit Food",
              "international": false,
              "method": "upi",
              "status": "captured",
              "invoice_id": null,
              "currency": "INR",
              "bank": null,
              "error_description": null,
              "refund_status": null,
              "created_at": 1667458019,
              "error_reason": null,
              "error_source": null,
              "error_step": null,
              "fee": 2
          },
          "storeName": "Fit Food",
          "amParcel": 0,
          "earn": 8,
          "amGateway": 0.0236,
          "gwORDR": "order_KbTKYlDr8XOPrE",
          "sin": {
              "seconds": 1667458007,
              "nanoseconds": 29000000
          },
          "amTaxTDS": 0,
          "camp": {
              "type": "flat",
              "expiry": false,
              "customAct": false,
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "ban": false,
              "cbDir": 2,
              "countM": 0,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "name": "Campaign-47",
              "max": 0,
              "countP": 0,
              "tX": "t1",
              "paused": false,
              "min": 8,
              "stage": 0,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "paid": false,
              "cbExi": 4,
              "cbNew": 8,
              "stoped": false,
              "customPay": 0,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "storeTyp": "Both",
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "countS": 0,
              "id": "iZ0WJpj4WDxyZ4jo8nFp"
          },
          "com": {
              "seconds": 1667458057,
              "nanoseconds": 467000000
          },
          "cart": [
              {
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "category": "Paneer",
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fojgm1JXri2o54qR0fVlw1656595095219?alt=media&token=3c30cd26-4def-43d2-aebf-993e0d2d8948"
                  ],
                  "upd": {
                      "seconds": 1667455903,
                      "nanoseconds": 71000000
                  },
                  "content": true,
                  "burn": false,
                  "price": 5,
                  "vX": [],
                  "Q": 1,
                  "warranty": true,
                  "reqBurn": false,
                  "variants": [],
                  "id": "ojgm1JXri2o54qR0fVlw",
                  "sin": {
                      "seconds": 1656594838,
                      "nanoseconds": 139000000
                  },
                  "code": "0406",
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "quota": 0,
                  "sold": 0,
                  "title": "Paneer Butter Masala ",
                  "cost": 5,
                  "description": "Luscious gravy thats tomato based and has a natural sweetness with a slight tang"
              },
              {
                  "category": "some category",
                  "quota": 0,
                  "reqBurn": false,
                  "burnDec": "abc",
                  "title": "Abcd",
                  "code": "Some Hsn",
                  "burnSpec": "abc",
                  "content": true,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "burnCatSub": "Nope",
                  "costBurn": 1.8,
                  "cost": 2,
                  "description": "elo",
                  "sin": {
                      "seconds": 1662754531,
                      "nanoseconds": 334000000
                  },
                  "upd": {
                      "seconds": 1665744132,
                      "nanoseconds": 420000000
                  },
                  "price": 10,
                  "burnDecShort": "abc",
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
                  ],
                  "warranty": false,
                  "burn": false,
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                  ],
                  "vX": [
                      {
                          "nowVarient": [
                              {
                                  "name": "#ff0000",
                                  "type": "palete"
                              },
                              {
                                  "type": "color",
                                  "name": "#333"
                              },
                              {
                                  "name": "Xl",
                                  "type": "size"
                              }
                          ],
                          "id": "s15R9CsWGf0DjDkGRwfV",
                          "countQ": 1
                      },
                      {
                          "countQ": 1,
                          "nowVarient": [
                              {
                                  "type": "palete",
                                  "name": "#ff0000"
                              },
                              {
                                  "name": "Xl",
                                  "type": "size"
                              },
                              {
                                  "type": "color",
                                  "name": "#333"
                              }
                          ],
                          "id": "s15R9CsWGf0DjDkGRwfV"
                      }
                  ],
                  "sold": 0,
                  "relate": [],
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "Q": 2,
                  "burnHigh": "abc",
                  "flash": false,
                  "burnBrand": "abc",
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "variants": [
                      {
                          "name": "Xl",
                          "type": "size"
                      },
                      {
                          "name": "#ff0000",
                          "type": "palete"
                      },
                      {
                          "name": "#333",
                          "type": "color"
                      },
                      {
                          "type": "color",
                          "name": "#123123"
                      }
                  ],
                  "burnCat": "food_and_beverages",
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
              }
          ],
          "amTax": 0,
          "journey": "F2F",
          "userName": "Roshan",
          "code": "A000Ky",
          "amCost": 1,
          "status": 10,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amSave": 24
      },
      {
          "com": {
              "seconds": 1667457919,
              "nanoseconds": 769000000
          },
          "amTaxTDS": 0,
          "earn": 0,
          "invoice": {
              "amtRefrCash": 0,
              "COD": false,
              "useRefrCash": false
          },
          "amParcel": 0,
          "userName": "Roshan",
          "upd": {
              "seconds": 1667457876,
              "nanoseconds": 909000000
          },
          "journey": "F2F",
          "setShortID": true,
          "gwSIGN": "3909e16c78b2800df838624068d56cf6cdb49edcece9383cfd5dfe9b8dd10a7a",
          "gwORDR": "order_KbTIGBX4e9WNVH",
          "status": 10,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "id": "OtNbBW7NkvPTRALquUYu",
          "type": [
              "ONLINE",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000Ky",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "amCost": 2,
          "sin": {
              "seconds": 1667457876,
              "nanoseconds": 909000000
          },
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amSale": 10,
          "amParcelCity": false,
          "amTax": 0,
          "code": "A000Ky",
          "shortID": "A000jk",
          "amTotal": 2,
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "ordrTYPE": "ONLINE",
          "amRefr": 0,
          "gwID": "pay_KbTIPt26i6ov8s",
          "amGateway": 0.0472,
          "logistics": {
              "require": false,
              "PnD_parcelNotFree": false,
              "email": "",
              "typeCat": "food_and_beverages",
              "addressPick": {
                  "lat": 19.0662066,
                  "lon": 72.83105909999999,
                  "city": "Mumbai Suburban",
                  "line1": "Dipesadsadas sadasdas",
                  "zip": "400050",
                  "id": "IND_MH_1648672299398",
                  "region": "Maharashtra",
                  "area": "Dent Heal",
                  "line2": "",
                  "nation": "IND",
                  "locality": "Mumbai",
                  "state": "MH"
              },
              "typeShop": "Both",
              "addressDrop": {
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                  "landmark": "Opposite of maple height building ",
                  "zip": 400097,
                  "type": "home"
              },
              "status": 20,
              "phone": "9167452128",
              "PnD_cityCharge": 0,
              "PnD_nationCharge": 0,
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "name": "Roshan",
              "addressDropT": "home",
              "typeOrdr": "F2F_ONLINE",
              "PnD_freeStart": 0,
              "addressPickT": "shop"
          },
          "amBurst": 2,
          "refr": {
              "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "earn": 0,
              "name": "Aditya"
          },
          "storeName": "Fit Food",
          "gwInfo": {
              "vpa": "roshanshilimar123@okaxis",
              "description": "payment to Fit Food",
              "international": false,
              "fee": 4,
              "email": "roshanshilimar123@gmail.com",
              "amount": 200,
              "invoice_id": null,
              "captured": true,
              "status": "captured",
              "amount_refunded": 0,
              "order_id": "order_KbTIGBX4e9WNVH",
              "error_source": null,
              "refund_status": null,
              "error_reason": null,
              "currency": "INR",
              "entity": "payment",
              "method": "upi",
              "bank": null,
              "notes": {
                  "description": "descriptionX"
              },
              "created_at": 1667457888,
              "card_id": null,
              "contact": "+919167452128",
              "tax": 0,
              "id": "pay_KbTIPt26i6ov8s",
              "error_step": null,
              "error_code": null,
              "error_description": null,
              "acquirer_data": {
                  "rrn": "230722408200"
              },
              "wallet": null
          },
          "amSave": 8,
          "cart": [
              {
                  "content": true,
                  "variants": [
                      {
                          "type": "size",
                          "name": "Xl"
                      },
                      {
                          "name": "#ff0000",
                          "type": "palete"
                      },
                      {
                          "name": "#333",
                          "type": "color"
                      },
                      {
                          "type": "color",
                          "name": "#123123"
                      }
                  ],
                  "sold": 0,
                  "burnSpec": "abc",
                  "costBurn": 1.8,
                  "reqBurn": false,
                  "Q": 1,
                  "vX": [
                      {
                          "countQ": 1,
                          "nowVarient": [
                              {
                                  "name": "#ff0000",
                                  "type": "palete"
                              },
                              {
                                  "name": "Xl",
                                  "type": "size"
                              },
                              {
                                  "type": "color",
                                  "name": "#123123"
                              }
                          ],
                          "id": "s15R9CsWGf0DjDkGRwfV"
                      }
                  ],
                  "price": 10,
                  "burn": false,
                  "burnBrand": "abc",
                  "flash": false,
                  "burnCat": "food_and_beverages",
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "burnDecShort": "abc",
                  "sin": {
                      "seconds": 1662754531,
                      "nanoseconds": 334000000
                  },
                  "warranty": false,
                  "title": "Abcd",
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99",
                  "description": "elo",
                  "cost": 2,
                  "code": "Some Hsn",
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                  ],
                  "burnCatSub": "Nope",
                  "burnHigh": "abc",
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
                  ],
                  "quota": 0,
                  "category": "some category",
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "relate": [],
                  "upd": {
                      "seconds": 1665744132,
                      "nanoseconds": 420000000
                  },
                  "burnDec": "abc",
                  "sid": "8B9ozj7aTPvywkIvVWiK"
              }
          ],
          "camp": {
              "customPay": 0,
              "countM": 0,
              "stoped": false,
              "countP": 0,
              "storeTyp": "Both",
              "type": "flat",
              "expiry": false,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "cbNew": 8,
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "customAct": false,
              "cbExi": 4,
              "min": 8,
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "max": 0,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "tX": "t1",
              "countS": 0,
              "stage": 0,
              "ban": false,
              "paid": false,
              "cbDir": 2,
              "name": "Campaign-47",
              "paused": false,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              }
          },
          "amTaxTCS": 0.02
      },
      {
          "amTaxTCS": 0.1,
          "amTaxTDS": 0,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "amTotal": 10,
          "ordrTYPE": "ONLINE",
          "shortID": "A000ji",
          "gwSIGN": "1851c9b3cd1d4a752134358acbf0684d6f391f19d96f961778c946b08469e71d",
          "upd": {
              "seconds": 1667457750,
              "nanoseconds": 383000000
          },
          "amParcel": 0,
          "amTax": 0,
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amBurst": 10,
          "amRefr": 0,
          "gwID": "pay_KbTGfIZDQNFcN6",
          "camp": {
              "paused": false,
              "countP": 0,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "cbExi": 4,
              "cbNew": 8,
              "customAct": false,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "tX": "t1",
              "countS": 0,
              "stage": 0,
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "name": "Campaign-47",
              "min": 8,
              "max": 0,
              "storeTyp": "Both",
              "stoped": false,
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "ban": false,
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "customPay": 0,
              "type": "flat",
              "cbDir": 2,
              "countM": 0,
              "expiry": false,
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "paid": false
          },
          "refr": {
              "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "earn": 4,
              "name": "Aditya"
          },
          "userName": "Roshan",
          "gwInfo": {
              "tax": 4,
              "created_at": 1667457789,
              "fee": 24,
              "amount": 1000,
              "error_description": null,
              "vpa": "roshanshilimar123@okaxis",
              "id": "pay_KbTGfIZDQNFcN6",
              "method": "upi",
              "acquirer_data": {
                  "rrn": "230722363605"
              },
              "error_code": null,
              "error_source": null,
              "currency": "INR",
              "captured": true,
              "description": "payment to Fit Food",
              "status": "captured",
              "order_id": "order_KbTG2TX43SxU2P",
              "bank": null,
              "invoice_id": null,
              "refund_status": null,
              "error_reason": null,
              "card_id": null,
              "amount_refunded": 0,
              "notes": {
                  "description": "descriptionX"
              },
              "error_step": null,
              "contact": "+919167452128",
              "email": "roshanshilimar123@gmail.com",
              "wallet": null,
              "international": false,
              "entity": "payment"
          },
          "amSave": 100,
          "logistics": {
              "name": "Roshan",
              "addressPickT": "shop",
              "addressDrop": {
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                  "zip": 400097,
                  "type": "home",
                  "landmark": "Opposite of maple height building "
              },
              "addressPick": {
                  "state": "MH",
                  "nation": "IND",
                  "line2": "",
                  "lon": 72.83105909999999,
                  "line1": "Dipesadsadas sadasdas",
                  "city": "Mumbai Suburban",
                  "locality": "Mumbai",
                  "lat": 19.0662066,
                  "id": "IND_MH_1648672299398",
                  "zip": "400050",
                  "area": "Dent Heal",
                  "region": "Maharashtra"
              },
              "email": "",
              "addressDropT": "home",
              "typeShop": "Both",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "PnD_parcelNotFree": false,
              "PnD_cityCharge": 0,
              "PnD_freeStart": 0,
              "phone": "9167452128",
              "status": 20,
              "typeOrdr": "F2F_ONLINE",
              "require": false,
              "PnD_nationCharge": 0,
              "typeCat": "food_and_beverages"
          },
          "amParcelCity": false,
          "sin": {
              "seconds": 1667457750,
              "nanoseconds": 383000000
          },
          "code": "A000Ky",
          "amCost": 10,
          "type": [
              "ONLINE",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000Ky",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "amSale": 110,
          "invoice": {
              "amtRefrCash": 0,
              "useRefrCash": false,
              "COD": false
          },
          "amGateway": 0.236,
          "status": 10,
          "journey": "F2F",
          "id": "mlT3mmo7Q1V5073JcGA4",
          "com": {
              "seconds": 1667457901,
              "nanoseconds": 251000000
          },
          "setShortID": true,
          "storeName": "Fit Food",
          "gwORDR": "order_KbTG2TX43SxU2P",
          "cart": [
              {
                  "warranty": true,
                  "title": "Sandwich",
                  "cost": 10,
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmEeeVq9q1itbbv7bAPaq1666903171882?alt=media&token=28dd6fd0-1b7d-4877-852c-86a9a31b74ed"
                  ],
                  "category": "Paneer",
                  "description": "Sandwich ",
                  "content": true,
                  "id": "mEeeVq9q1itbbv7bAPaq",
                  "sold": 0,
                  "burn": false,
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "sin": {
                      "seconds": 1666903176,
                      "nanoseconds": 730000000
                  },
                  "variants": [],
                  "Q": 1,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "quota": 0,
                  "reqBurn": false,
                  "price": 110,
                  "vX": [],
                  "upd": {
                      "seconds": 1667402410,
                      "nanoseconds": 161000000
                  },
                  "code": "45666"
              }
          ],
          "earn": 8
      },
      {
          "setShortID": true,
          "journey": "F2F",
          "camp": {
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "ban": false,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "expiry": false,
              "paused": false,
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "countM": 0,
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "countP": 0,
              "tX": "t1",
              "cbNew": 8,
              "stage": 0,
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "cbExi": 4,
              "stoped": false,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "min": 8,
              "customPay": 0,
              "paid": false,
              "max": 0,
              "cbDir": 2,
              "customAct": false,
              "storeTyp": "Both",
              "name": "Campaign-47",
              "countS": 0,
              "type": "flat"
          },
          "amParcelCity": false,
          "amTax": 0,
          "amCost": 0,
          "amTaxTCS": 0.1,
          "amGateway": 0,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "sin": {
              "seconds": 1667457110,
              "nanoseconds": 392000000
          },
          "amTotal": 10,
          "cart": [
              {
                  "Q": 1,
                  "quota": 0,
                  "title": "Sandwich",
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "upd": {
                      "seconds": 1667402410,
                      "nanoseconds": 161000000
                  },
                  "reqBurn": false,
                  "burn": false,
                  "description": "Sandwich ",
                  "variants": [],
                  "content": true,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "vX": [],
                  "cost": 10,
                  "sold": 0,
                  "id": "mEeeVq9q1itbbv7bAPaq",
                  "category": "Paneer",
                  "code": "45666",
                  "price": 110,
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmEeeVq9q1itbbv7bAPaq1666903171882?alt=media&token=28dd6fd0-1b7d-4877-852c-86a9a31b74ed"
                  ],
                  "sin": {
                      "seconds": 1666903176,
                      "nanoseconds": 730000000
                  },
                  "warranty": true
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
              "A000JQ",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "status": 10,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amBurst": 10,
          "userName": "Aditya",
          "amParcel": 0,
          "ordrTYPE": "RefrCASH",
          "code": "A000JQ",
          "shortID": "A000j4",
          "amSave": 110,
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "storeName": "Fit Food",
          "invoice": {
              "amtRefrCash": 10,
              "useRefrCash": true,
              "COD": false
          },
          "amRefr": 0,
          "earn": 8,
          "refr": {
              "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "earn": 4,
              "name": "Roshan"
          },
          "id": "yB4uutwgFrlS7W5kVOpe",
          "amTaxTDS": 0,
          "logistics": {
              "status": 20,
              "typeCat": "food_and_beverages",
              "addressPick": {
                  "id": "IND_MH_1648672299398",
                  "nation": "IND",
                  "zip": "400050",
                  "line1": "Dipesadsadas sadasdas",
                  "lat": 19.0662066,
                  "line2": "",
                  "region": "Maharashtra",
                  "lon": 72.83105909999999,
                  "city": "Mumbai Suburban",
                  "locality": "Mumbai",
                  "state": "MH",
                  "area": "Dent Heal"
              },
              "name": "Aditya",
              "PnD_parcelNotFree": false,
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "addressDropT": "work",
              "PnD_freeStart": 0,
              "PnD_nationCharge": 0,
              "email": "",
              "addressDrop": {
                  "zip": 400056,
                  "type": "work",
                  "landmark": "Gagandeep bus stop",
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
              },
              "phone": "8879751140",
              "typeOrdr": "F2F_ONLINE",
              "addressPickT": "shop",
              "require": false,
              "typeShop": "Both",
              "PnD_cityCharge": 0
          },
          "upd": {
              "seconds": 1667457110,
              "nanoseconds": 392000000
          },
          "com": {
              "seconds": 1667457522,
              "nanoseconds": 349000000
          },
          "amSale": 110
      },
      {
          "type": [
              "RefrCASH",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000JQ",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "code": "A000JQ",
          "sin": {
              "seconds": 1667457150,
              "nanoseconds": 164000000
          },
          "cart": [
              {
                  "content": true,
                  "warranty": false,
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "cost": 2,
                  "quota": 0,
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99",
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
                  ],
                  "burnSpec": "abc",
                  "vX": [
                      {
                          "id": "s15R9CsWGf0DjDkGRwfV",
                          "nowVarient": [
                              {
                                  "type": "palete",
                                  "name": "#ff0000"
                              },
                              {
                                  "name": "Xl",
                                  "type": "size"
                              },
                              {
                                  "type": "color",
                                  "name": "#333"
                              }
                          ],
                          "countQ": 1
                      }
                  ],
                  "code": "Some Hsn",
                  "upd": {
                      "seconds": 1665744132,
                      "nanoseconds": 420000000
                  },
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                  ],
                  "burnCat": "food_and_beverages",
                  "costBurn": 1.8,
                  "reqBurn": false,
                  "relate": [],
                  "sold": 0,
                  "title": "Abcd",
                  "burnHigh": "abc",
                  "Q": 1,
                  "sin": {
                      "seconds": 1662754531,
                      "nanoseconds": 334000000
                  },
                  "price": 10,
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "description": "elo",
                  "burnCatSub": "Nope",
                  "burnBrand": "abc",
                  "burn": false,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "category": "some category",
                  "burnDecShort": "abc",
                  "flash": false,
                  "burnDec": "abc",
                  "variants": [
                      {
                          "type": "size",
                          "name": "Xl"
                      },
                      {
                          "type": "palete",
                          "name": "#ff0000"
                      },
                      {
                          "name": "#333",
                          "type": "color"
                      },
                      {
                          "type": "color",
                          "name": "#123123"
                      }
                  ]
              }
          ],
          "amTaxTCS": 0.02,
          "amParcelCity": false,
          "amParcel": 0,
          "amBurst": 2,
          "userName": "Aditya",
          "ordrTYPE": "RefrCASH",
          "storeName": "Fit Food",
          "upd": {
              "seconds": 1667457150,
              "nanoseconds": 164000000
          },
          "logistics": {
              "PnD_nationCharge": 0,
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "typeShop": "Both",
              "require": false,
              "typeOrdr": "F2F_ONLINE",
              "PnD_cityCharge": 0,
              "phone": "8879751140",
              "addressDrop": {
                  "type": "work",
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                  "zip": 400056,
                  "landmark": "Gagandeep bus stop"
              },
              "addressPick": {
                  "region": "Maharashtra",
                  "line1": "Dipesadsadas sadasdas",
                  "locality": "Mumbai",
                  "nation": "IND",
                  "zip": "400050",
                  "state": "MH",
                  "id": "IND_MH_1648672299398",
                  "area": "Dent Heal",
                  "lat": 19.0662066,
                  "lon": 72.83105909999999,
                  "city": "Mumbai Suburban",
                  "line2": ""
              },
              "addressPickT": "shop",
              "PnD_freeStart": 0,
              "name": "Aditya",
              "PnD_parcelNotFree": false,
              "addressDropT": "work",
              "email": "",
              "status": 20,
              "typeCat": "food_and_beverages"
          },
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "journey": "F2F",
          "amSave": 10,
          "amCost": 0,
          "setShortID": true,
          "amSale": 10,
          "shortID": "A000j6",
          "amTax": 0,
          "amTaxTDS": 0,
          "camp": {
              "paid": false,
              "countP": 0,
              "countM": 0,
              "customAct": false,
              "min": 8,
              "name": "Campaign-47",
              "cbDir": 2,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "cbExi": 4,
              "cbNew": 8,
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "expiry": false,
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "tX": "t1",
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "max": 0,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "stoped": false,
              "ban": false,
              "countS": 0,
              "stage": 0,
              "customPay": 0,
              "paused": false,
              "type": "flat",
              "storeTyp": "Both"
          },
          "refr": {
              "name": "Roshan",
              "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "earn": 0
          },
          "amTotal": 2,
          "status": 10,
          "id": "fAIoFkOul4PTtFdx6Uwk",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "amGateway": 0,
          "invoice": {
              "COD": false,
              "amtRefrCash": 2,
              "useRefrCash": true
          },
          "com": {
              "seconds": 1667457520,
              "nanoseconds": 34000000
          },
          "earn": 0,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amRefr": 0
      },
      {
          "userName": "Aditya",
          "earn": 8,
          "code": "A000JQ",
          "sin": {
              "seconds": 1667457185,
              "nanoseconds": 63000000
          },
          "logistics": {
              "addressPick": {
                  "locality": "Mumbai",
                  "nation": "IND",
                  "city": "Mumbai Suburban",
                  "line1": "Dipesadsadas sadasdas",
                  "state": "MH",
                  "line2": "",
                  "zip": "400050",
                  "region": "Maharashtra",
                  "id": "IND_MH_1648672299398",
                  "lat": 19.0662066,
                  "lon": 72.83105909999999,
                  "area": "Dent Heal"
              },
              "PnD_cityCharge": 0,
              "require": false,
              "name": "Aditya",
              "email": "",
              "addressPickT": "shop",
              "phone": "8879751140",
              "typeOrdr": "F2F_ONLINE",
              "typeShop": "Both",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "addressDropT": "work",
              "typeCat": "food_and_beverages",
              "addressDrop": {
                  "landmark": "Gagandeep bus stop",
                  "zip": 400056,
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                  "type": "work"
              },
              "PnD_nationCharge": 0,
              "PnD_parcelNotFree": false,
              "status": 20,
              "PnD_freeStart": 0
          },
          "shortID": "A000jb",
          "id": "yvHiE61XxXtTCE1pSQtU",
          "invoice": {
              "COD": false,
              "amtRefrCash": 0,
              "useRefrCash": false
          },
          "camp": {
              "paid": false,
              "max": 0,
              "cbNew": 8,
              "stage": 0,
              "stoped": false,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "cbDir": 2,
              "customPay": 0,
              "countP": 0,
              "ban": false,
              "storeTyp": "Both",
              "paused": false,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "tX": "t1",
              "name": "Campaign-47",
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "countS": 0,
              "expiry": false,
              "type": "flat",
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "countM": 0,
              "customAct": false,
              "cbExi": 4,
              "min": 8
          },
          "type": [
              "ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000JQ",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "amRefr": 0,
          "status": 10,
          "amGateway": 0.236,
          "amTotal": 10,
          "refr": {
              "earn": 4,
              "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "name": "Roshan"
          },
          "amCost": 10,
          "amTaxTCS": 0.1,
          "cart": [
              {
                  "price": 110,
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmEeeVq9q1itbbv7bAPaq1666903171882?alt=media&token=28dd6fd0-1b7d-4877-852c-86a9a31b74ed"
                  ],
                  "Q": 1,
                  "title": "Sandwich",
                  "reqBurn": false,
                  "code": "45666",
                  "vX": [],
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "description": "Sandwich ",
                  "sold": 0,
                  "content": true,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "cost": 10,
                  "burn": false,
                  "variants": [],
                  "sin": {
                      "seconds": 1666903176,
                      "nanoseconds": 730000000
                  },
                  "warranty": true,
                  "category": "Paneer",
                  "upd": {
                      "seconds": 1667402410,
                      "nanoseconds": 161000000
                  },
                  "id": "mEeeVq9q1itbbv7bAPaq",
                  "quota": 0
              }
          ],
          "amBurst": 10,
          "upd": {
              "seconds": 1667457185,
              "nanoseconds": 63000000
          },
          "ordrTYPE": "ONLINE",
          "amTax": 0,
          "gwInfo": {
              "acquirer_data": {
                  "rrn": "230722100857"
              },
              "contact": "+918879751140",
              "order_id": "order_KbT64orVQhRP5g",
              "error_source": null,
              "error_step": null,
              "description": "payment to Fit Food",
              "invoice_id": null,
              "status": "captured",
              "id": "pay_KbT6V8DVz5KKJT",
              "international": false,
              "captured": true,
              "entity": "payment",
              "email": "adityakirtane27@gmail.com",
              "card_id": null,
              "amount": 1000,
              "refund_status": null,
              "error_code": null,
              "tax": 4,
              "error_description": null,
              "created_at": 1667457212,
              "currency": "INR",
              "method": "upi",
              "fee": 24,
              "notes": {
                  "description": "descriptionX"
              },
              "wallet": null,
              "amount_refunded": 0,
              "error_reason": null,
              "bank": null,
              "vpa": "adityakirtane27@okaxis"
          },
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "storeName": "Fit Food",
          "com": {
              "seconds": 1667457517,
              "nanoseconds": 888000000
          },
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "journey": "F2F",
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "setShortID": true,
          "amSave": 100,
          "gwSIGN": "79615212461a425d72b698a47db56dbc0b185ef15e41cd8278d259c6512f1a22",
          "amTaxTDS": 0,
          "amParcelCity": false,
          "gwORDR": "order_KbT64orVQhRP5g",
          "gwID": "pay_KbT6V8DVz5KKJT",
          "amParcel": 0,
          "amSale": 110
      },
      {
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "gwORDR": "order_KbT7dJj7cnSr03",
          "invoice": {
              "useRefrCash": false,
              "amtRefrCash": 0,
              "COD": false
          },
          "userName": "Aditya",
          "camp": {
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "customAct": false,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "stoped": false,
              "customPay": 0,
              "paid": false,
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "countS": 0,
              "cbNew": 8,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "cbDir": 2,
              "max": 0,
              "min": 8,
              "ban": false,
              "name": "Campaign-47",
              "countP": 0,
              "countM": 0,
              "paused": false,
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "tX": "t1",
              "storeTyp": "Both",
              "type": "flat",
              "stage": 0,
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "expiry": false,
              "cbExi": 4
          },
          "journey": "F2F",
          "ordrTYPE": "ONLINE",
          "setShortID": true,
          "id": "O0Zc2ZSUzbBSo4mlBF31",
          "amTaxTDS": 0,
          "amParcel": 0,
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "earn": 0,
          "amBurst": 2,
          "sin": {
              "seconds": 1667457273,
              "nanoseconds": 385000000
          },
          "cart": [
              {
                  "warranty": false,
                  "burnDecShort": "abc",
                  "price": 10,
                  "vX": [
                      {
                          "id": "s15R9CsWGf0DjDkGRwfV",
                          "countQ": 1,
                          "nowVarient": [
                              {
                                  "type": "palete",
                                  "name": "#ff0000"
                              },
                              {
                                  "name": "Xl",
                                  "type": "size"
                              },
                              {
                                  "type": "color",
                                  "name": "#333"
                              }
                          ]
                      }
                  ],
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "upd": {
                      "seconds": 1665744132,
                      "nanoseconds": 420000000
                  },
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "flash": false,
                  "burnBrand": "abc",
                  "sin": {
                      "seconds": 1662754531,
                      "nanoseconds": 334000000
                  },
                  "title": "Abcd",
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                  ],
                  "burnSpec": "abc",
                  "Q": 1,
                  "category": "some category",
                  "burnCat": "food_and_beverages",
                  "description": "elo",
                  "content": true,
                  "cost": 2,
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
                  ],
                  "relate": [],
                  "quota": 0,
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "costBurn": 1.8,
                  "code": "Some Hsn",
                  "reqBurn": false,
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99",
                  "burn": false,
                  "sold": 0,
                  "burnHigh": "abc",
                  "burnCatSub": "Nope",
                  "variants": [
                      {
                          "name": "Xl",
                          "type": "size"
                      },
                      {
                          "type": "palete",
                          "name": "#ff0000"
                      },
                      {
                          "name": "#333",
                          "type": "color"
                      },
                      {
                          "type": "color",
                          "name": "#123123"
                      }
                  ],
                  "burnDec": "abc"
              }
          ],
          "amSave": 8,
          "amCost": 2,
          "gwInfo": {
              "notes": {
                  "description": "descriptionX"
              },
              "order_id": "order_KbT7dJj7cnSr03",
              "email": "adityakirtane27@gmail.com",
              "entity": "payment",
              "contact": "+918879751140",
              "id": "pay_KbT7x3eym45pMX",
              "amount_refunded": 0,
              "wallet": null,
              "bank": null,
              "invoice_id": null,
              "error_reason": null,
              "amount": 200,
              "status": "captured",
              "refund_status": null,
              "description": "payment to Fit Food",
              "currency": "INR",
              "international": false,
              "fee": 4,
              "tax": 0,
              "error_source": null,
              "created_at": 1667457294,
              "error_step": null,
              "card_id": null,
              "vpa": "adityakirtane27@okaxis",
              "acquirer_data": {
                  "rrn": "230722137891"
              },
              "error_code": null,
              "captured": true,
              "method": "upi",
              "error_description": null
          },
          "status": 10,
          "amGateway": 0.0472,
          "gwID": "pay_KbT7x3eym45pMX",
          "upd": {
              "seconds": 1667457273,
              "nanoseconds": 385000000
          },
          "code": "A000JQ",
          "amTotal": 2,
          "shortID": "A000jc",
          "com": {
              "seconds": 1667457515,
              "nanoseconds": 634000000
          },
          "refr": {
              "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "earn": 0,
              "name": "Roshan"
          },
          "storeName": "Fit Food",
          "amTax": 0,
          "amRefr": 0,
          "amSale": 10,
          "logistics": {
              "addressPickT": "shop",
              "typeOrdr": "F2F_ONLINE",
              "typeCat": "food_and_beverages",
              "PnD_parcelNotFree": false,
              "addressDropT": "work",
              "addressPick": {
                  "area": "Dent Heal",
                  "nation": "IND",
                  "zip": "400050",
                  "lon": 72.83105909999999,
                  "lat": 19.0662066,
                  "line1": "Dipesadsadas sadasdas",
                  "city": "Mumbai Suburban",
                  "id": "IND_MH_1648672299398",
                  "line2": "",
                  "state": "MH",
                  "locality": "Mumbai",
                  "region": "Maharashtra"
              },
              "PnD_nationCharge": 0,
              "status": 20,
              "addressDrop": {
                  "type": "work",
                  "landmark": "Gagandeep bus stop",
                  "zip": 400056,
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
              },
              "phone": "8879751140",
              "require": false,
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "typeShop": "Both",
              "name": "Aditya",
              "PnD_cityCharge": 0,
              "PnD_freeStart": 0,
              "email": ""
          },
          "gwSIGN": "717e96451eba0869cfaaa84d6b04823f59f57c07b5ddaeb35e48e61622211ad5",
          "amParcelCity": false,
          "amTaxTCS": 0.02,
          "type": [
              "ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000JQ",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "sid": "8B9ozj7aTPvywkIvVWiK"
      },
      {
          "gwSIGN": "b4999015c38356de0f5e5f44973528baa8c629b36cdedeb7027c70d4ae17a0f5",
          "amTotal": 10,
          "gwORDR": "order_KbT8rbFLBqchI3",
          "logistics": {
              "addressPickT": "shop",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "PnD_freeStart": 0,
              "status": 20,
              "phone": "8879751140",
              "typeShop": "Both",
              "PnD_cityCharge": 0,
              "typeCat": "food_and_beverages",
              "addressDrop": {
                  "type": "work",
                  "landmark": "Gagandeep bus stop",
                  "zip": 400056,
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
              },
              "email": "",
              "typeOrdr": "F2F_ONLINE",
              "PnD_parcelNotFree": false,
              "name": "Aditya",
              "require": false,
              "addressDropT": "work",
              "addressPick": {
                  "lat": 19.0662066,
                  "lon": 72.83105909999999,
                  "state": "MH",
                  "area": "Dent Heal",
                  "line1": "Dipesadsadas sadasdas",
                  "region": "Maharashtra",
                  "city": "Mumbai Suburban",
                  "line2": "",
                  "nation": "IND",
                  "zip": "400050",
                  "locality": "Mumbai",
                  "id": "IND_MH_1648672299398"
              },
              "PnD_nationCharge": 0
          },
          "com": {
              "seconds": 1667457513,
              "nanoseconds": 727000000
          },
          "earn": 8,
          "type": [
              "RefrCASH+ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000JQ",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "amParcel": 0,
          "amTax": 0,
          "amTaxTCS": 0.1,
          "amTaxTDS": 0,
          "refr": {
              "name": "Roshan",
              "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "earn": 4
          },
          "cart": [
              {
                  "Q": 1,
                  "sold": 0,
                  "content": true,
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmEeeVq9q1itbbv7bAPaq1666903171882?alt=media&token=28dd6fd0-1b7d-4877-852c-86a9a31b74ed"
                  ],
                  "burn": false,
                  "sin": {
                      "seconds": 1666903176,
                      "nanoseconds": 730000000
                  },
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "description": "Sandwich ",
                  "category": "Paneer",
                  "upd": {
                      "seconds": 1667402410,
                      "nanoseconds": 161000000
                  },
                  "price": 110,
                  "code": "45666",
                  "reqBurn": false,
                  "variants": [],
                  "warranty": true,
                  "id": "mEeeVq9q1itbbv7bAPaq",
                  "cost": 10,
                  "vX": [],
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "title": "Sandwich",
                  "quota": 0
              }
          ],
          "journey": "F2F",
          "camp": {
              "name": "Campaign-47",
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "tX": "t1",
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "type": "flat",
              "countM": 0,
              "countP": 0,
              "stoped": false,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "cbNew": 8,
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "countS": 0,
              "min": 8,
              "ban": false,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "max": 0,
              "paid": false,
              "storeTyp": "Both",
              "customPay": 0,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "expiry": false,
              "stage": 0,
              "cbExi": 4,
              "cbDir": 2,
              "paused": false,
              "customAct": false
          },
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "storeName": "Fit Food",
          "gwID": "pay_KbT9DUcygZYh1q",
          "gwInfo": {
              "bank": null,
              "tax": 2,
              "amount_refunded": 0,
              "card_id": null,
              "error_reason": null,
              "entity": "payment",
              "contact": "+918879751140",
              "currency": "INR",
              "error_step": null,
              "amount": 500,
              "error_description": null,
              "invoice_id": null,
              "description": "payment to Fit Food",
              "captured": true,
              "id": "pay_KbT9DUcygZYh1q",
              "vpa": "adityakirtane27@okaxis",
              "fee": 12,
              "error_source": null,
              "order_id": "order_KbT8rbFLBqchI3",
              "refund_status": null,
              "created_at": 1667457366,
              "international": false,
              "status": "captured",
              "notes": {
                  "description": "descriptionX"
              },
              "method": "upi",
              "acquirer_data": {
                  "rrn": "230722169894"
              },
              "error_code": null,
              "wallet": null,
              "email": "adityakirtane27@gmail.com"
          },
          "code": "A000JQ",
          "shortID": "A000je",
          "amRefr": 0,
          "upd": {
              "seconds": 1667457343,
              "nanoseconds": 442000000
          },
          "ordrTYPE": "RefrCASH+ONLINE",
          "sin": {
              "seconds": 1667457343,
              "nanoseconds": 442000000
          },
          "invoice": {
              "useRefrCash": true,
              "COD": false,
              "amtRefrCash": 5
          },
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amSave": 105,
          "userName": "Aditya",
          "setShortID": true,
          "id": "VQOOHk87Ypdq4K6mQZzk",
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "amSale": 110,
          "amCost": 5,
          "amBurst": 10,
          "amGateway": 0.118,
          "amParcelCity": false,
          "status": 10
      },
      {
          "ordrTYPE": "RefrCASH+ONLINE",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "amCost": 1,
          "journey": "F2F",
          "amBurst": 2,
          "cart": [
              {
                  "burnDecShort": "abc",
                  "relate": [],
                  "title": "Abcd",
                  "costBurn": 1.8,
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "vX": [
                      {
                          "id": "s15R9CsWGf0DjDkGRwfV",
                          "nowVarient": [
                              {
                                  "name": "#ff0000",
                                  "type": "palete"
                              },
                              {
                                  "type": "size",
                                  "name": "Xl"
                              },
                              {
                                  "name": "#333",
                                  "type": "color"
                              }
                          ],
                          "countQ": 1
                      }
                  ],
                  "burnDec": "abc",
                  "sin": {
                      "seconds": 1662754531,
                      "nanoseconds": 334000000
                  },
                  "price": 10,
                  "burnSpec": "abc",
                  "upd": {
                      "seconds": 1665744132,
                      "nanoseconds": 420000000
                  },
                  "content": true,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "quota": 0,
                  "sold": 0,
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99",
                  "warranty": false,
                  "burnCat": "food_and_beverages",
                  "burnBrand": "abc",
                  "reqBurn": false,
                  "burnCatSub": "Nope",
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                  ],
                  "category": "some category",
                  "burnHigh": "abc",
                  "description": "elo",
                  "flash": false,
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
                  ],
                  "Q": 1,
                  "variants": [
                      {
                          "name": "Xl",
                          "type": "size"
                      },
                      {
                          "name": "#ff0000",
                          "type": "palete"
                      },
                      {
                          "type": "color",
                          "name": "#333"
                      },
                      {
                          "type": "color",
                          "name": "#123123"
                      }
                  ],
                  "code": "Some Hsn",
                  "burn": false,
                  "cost": 2,
                  "sid": "8B9ozj7aTPvywkIvVWiK"
              }
          ],
          "earn": 0,
          "amParcelCity": false,
          "amTotal": 2,
          "gwID": "pay_KbTARyIrZ9zZJD",
          "com": {
              "seconds": 1667457510,
              "nanoseconds": 558000000
          },
          "amSale": 10,
          "storeName": "Fit Food",
          "userName": "Aditya",
          "shortID": "A000jg",
          "gwInfo": {
              "bank": null,
              "card_id": null,
              "error_code": null,
              "entity": "payment",
              "error_reason": null,
              "contact": "+918879751140",
              "international": false,
              "created_at": 1667457436,
              "error_step": null,
              "error_description": null,
              "amount": 100,
              "method": "upi",
              "acquirer_data": {
                  "rrn": "230722201284"
              },
              "error_source": null,
              "amount_refunded": 0,
              "notes": {
                  "description": "descriptionX"
              },
              "status": "captured",
              "order_id": "order_KbTAJY6GgRvzvF",
              "invoice_id": null,
              "refund_status": null,
              "fee": 2,
              "email": "adityakirtane27@gmail.com",
              "currency": "INR",
              "id": "pay_KbTARyIrZ9zZJD",
              "tax": 0,
              "description": "payment to Fit Food",
              "wallet": null,
              "captured": true,
              "vpa": "adityakirtane27@okaxis"
          },
          "amTax": 0,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amTaxTDS": 0,
          "status": 10,
          "amGateway": 0.0236,
          "code": "A000JQ",
          "setShortID": true,
          "upd": {
              "seconds": 1667457425,
              "nanoseconds": 743000000
          },
          "logistics": {
              "phone": "8879751140",
              "typeCat": "food_and_beverages",
              "typeShop": "Both",
              "addressPickT": "shop",
              "PnD_cityCharge": 0,
              "addressDrop": {
                  "zip": 400056,
                  "type": "work",
                  "landmark": "Gagandeep bus stop",
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west"
              },
              "name": "Aditya",
              "PnD_nationCharge": 0,
              "status": 20,
              "addressDropT": "work",
              "email": "",
              "addressPick": {
                  "state": "MH",
                  "lat": 19.0662066,
                  "id": "IND_MH_1648672299398",
                  "region": "Maharashtra",
                  "line1": "Dipesadsadas sadasdas",
                  "line2": "",
                  "area": "Dent Heal",
                  "zip": "400050",
                  "nation": "IND",
                  "lon": 72.83105909999999,
                  "locality": "Mumbai",
                  "city": "Mumbai Suburban"
              },
              "PnD_parcelNotFree": false,
              "require": false,
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "typeOrdr": "F2F_ONLINE",
              "PnD_freeStart": 0
          },
          "gwSIGN": "f3fc353240f6d9aaf0355ccae403494f964e3e1112279cb3f45c048948aa6283",
          "amRefr": 0,
          "gwORDR": "order_KbTAJY6GgRvzvF",
          "amTaxTCS": 0.02,
          "sin": {
              "seconds": 1667457425,
              "nanoseconds": 743000000
          },
          "invoice": {
              "useRefrCash": true,
              "COD": false,
              "amtRefrCash": 1
          },
          "amSave": 9,
          "amParcel": 0,
          "camp": {
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "countS": 0,
              "min": 8,
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "paid": false,
              "max": 0,
              "stage": 0,
              "expiry": false,
              "countP": 0,
              "name": "Campaign-47",
              "paused": false,
              "countM": 0,
              "ban": false,
              "stoped": false,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "tX": "t1",
              "cbExi": 4,
              "cbDir": 2,
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "customAct": false,
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "cbNew": 8,
              "customPay": 0,
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "type": "flat",
              "storeTyp": "Both",
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              }
          },
          "refr": {
              "earn": 0,
              "name": "Roshan",
              "uid": "aBbP0FKIXvYdxNE7ictPnPo33th1"
          },
          "id": "xTt8vuJzeLTt3IJv1esz",
          "type": [
              "RefrCASH+ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000JQ",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ]
      },
      {
          "cart": [
              {
                  "warranty": false,
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
                  ],
                  "sold": 0,
                  "price": 10,
                  "quota": 0,
                  "title": "Abcd",
                  "burnCatSub": "Nope",
                  "cost": 2,
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                  ],
                  "code": "Some Hsn",
                  "costBurn": 1.8,
                  "burnBrand": "abc",
                  "sin": {
                      "seconds": 1662754531,
                      "nanoseconds": 334000000
                  },
                  "burnCat": "food_and_beverages",
                  "variants": [
                      {
                          "name": "Xl",
                          "type": "size"
                      },
                      {
                          "type": "palete",
                          "name": "#ff0000"
                      },
                      {
                          "name": "#333",
                          "type": "color"
                      },
                      {
                          "type": "color",
                          "name": "#123123"
                      }
                  ],
                  "burnDecShort": "abc",
                  "description": "elo",
                  "flash": false,
                  "content": true,
                  "reqBurn": false,
                  "Q": 1,
                  "category": "some category",
                  "burnHigh": "abc",
                  "burnSpec": "abc",
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "burnDec": "abc",
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99",
                  "upd": {
                      "seconds": 1665744132,
                      "nanoseconds": 420000000
                  },
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "burn": false,
                  "vX": [
                      {
                          "nowVarient": [
                              {
                                  "name": "#ff0000",
                                  "type": "palete"
                              },
                              {
                                  "name": "Xl",
                                  "type": "size"
                              },
                              {
                                  "type": "color",
                                  "name": "#123123"
                              }
                          ],
                          "countQ": 1,
                          "id": "s15R9CsWGf0DjDkGRwfV"
                      }
                  ],
                  "relate": []
              }
          ],
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "id": "eYGXuFcXf5noP4i4ozOg",
          "ordrTYPE": "RefrCASH+ONLINE",
          "amTax": 0,
          "amParcelCity": false,
          "gwORDR": "order_KbSwA71rSfNGHt",
          "amSave": 9,
          "earn": 0,
          "amTaxTCS": 0.02,
          "amTaxTDS": 0,
          "amGateway": 0.0236,
          "com": {
              "seconds": 1667456928,
              "nanoseconds": 238000000
          },
          "shortID": "A000jW",
          "upd": {
              "seconds": 1667456621,
              "nanoseconds": 91000000
          },
          "code": null,
          "camp": {
              "stoped": false,
              "stage": 0,
              "ban": false,
              "countP": 0,
              "dateS": {
                  "seconds": 1666895400,
                  "nanoseconds": 0
              },
              "cbDir": 5,
              "expiry": false,
              "paid": false,
              "tX": "t1",
              "sin": {
                  "seconds": 1666902331,
                  "nanoseconds": 860000000
              },
              "storeTyp": "Both",
              "type": "flat",
              "min": 100,
              "name": "Campaign-45",
              "customPay": 0,
              "cbNew": 10,
              "max": 0,
              "countM": 0,
              "upd": {
                  "seconds": 1666902331,
                  "nanoseconds": 860000000
              },
              "countS": 0,
              "cbExi": 5,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "id": "xlpKSHQZKZko52jbfXFP",
              "dateE": {
                  "seconds": 1672425000,
                  "nanoseconds": 0
              },
              "customAct": false,
              "paused": false
          },
          "setShortID": true,
          "type": [
              "RefrCASH+ONLINE",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "DIRECT",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "refr": null,
          "amCost": 1,
          "storeName": "Fit Food",
          "logistics": {
              "addressPickT": "shop",
              "name": "Roshan",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "PnD_nationCharge": 0,
              "PnD_parcelNotFree": false,
              "require": false,
              "phone": "9167452128",
              "status": 20,
              "typeCat": "food_and_beverages",
              "PnD_cityCharge": 0,
              "addressPick": {
                  "id": "IND_MH_1648672299398",
                  "line2": "",
                  "state": "MH",
                  "city": "Mumbai Suburban",
                  "lat": 19.0662066,
                  "region": "Maharashtra",
                  "line1": "Dipesadsadas sadasdas",
                  "zip": "400050",
                  "lon": 72.83105909999999,
                  "area": "Dent Heal",
                  "nation": "IND",
                  "locality": "Mumbai"
              },
              "addressDropT": "home",
              "typeShop": "Both",
              "email": "",
              "PnD_freeStart": 0,
              "addressDrop": {
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                  "zip": 400097,
                  "type": "home",
                  "landmark": "Opposite of maple height building "
              },
              "typeOrdr": "DIRECT_ONLINE"
          },
          "amBurst": 2,
          "sin": {
              "seconds": 1667456621,
              "nanoseconds": 91000000
          },
          "gwInfo": {
              "entity": "payment",
              "status": "captured",
              "amount_refunded": 0,
              "error_source": null,
              "order_id": "order_KbSwA71rSfNGHt",
              "international": false,
              "amount": 100,
              "description": "payment to Fit Food",
              "refund_status": null,
              "contact": "+919167452128",
              "tax": 0,
              "vpa": "roshanshilimar123@okaxis",
              "error_description": null,
              "bank": null,
              "card_id": null,
              "created_at": 1667456639,
              "invoice_id": null,
              "currency": "INR",
              "fee": 2,
              "email": "roshankailashshilimkar@gmail.com",
              "id": "pay_KbSwQAFuD4io2d",
              "error_reason": null,
              "method": "upi",
              "wallet": null,
              "error_step": null,
              "error_code": null,
              "acquirer_data": {
                  "rrn": "230721825240"
              },
              "captured": true,
              "notes": {
                  "description": "descriptionX"
              }
          },
          "amParcel": 0,
          "status": 10,
          "journey": "DIRECT",
          "invoice": {
              "amtRefrCash": 1,
              "useRefrCash": true,
              "COD": false
          },
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "gwID": "pay_KbSwQAFuD4io2d",
          "amSale": 10,
          "gwSIGN": "07fc455247312a9318f48bd666b1bd98546e6cc10a94fd9c805fa4f874b4e139",
          "amTotal": 2,
          "amRefr": 0,
          "userName": "Roshan"
      },
      {
          "storeName": "Fit Food",
          "amRefr": 0,
          "upd": {
              "seconds": 1667456622,
              "nanoseconds": 197000000
          },
          "userName": "Aditya",
          "earn": 0,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "amTotal": 2,
          "gwORDR": "order_KbSwCfO5dyInwp",
          "amParcel": 0,
          "amTaxTDS": 0,
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "refr": null,
          "com": {
              "seconds": 1667456917,
              "nanoseconds": 681000000
          },
          "amBurst": 2,
          "amCost": 2,
          "amSave": 8,
          "invoice": {
              "COD": false,
              "useRefrCash": false,
              "amtRefrCash": 0
          },
          "cart": [
              {
                  "costBurn": 1.8,
                  "burnCat": "food_and_beverages",
                  "Q": 1,
                  "content": true,
                  "variants": [
                      {
                          "name": "Xl",
                          "type": "size"
                      },
                      {
                          "name": "#ff0000",
                          "type": "palete"
                      },
                      {
                          "type": "color",
                          "name": "#333"
                      },
                      {
                          "name": "#123123",
                          "type": "color"
                      }
                  ],
                  "burnPics": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99"
                  ],
                  "upd": {
                      "seconds": 1665744132,
                      "nanoseconds": 420000000
                  },
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "category": "some category",
                  "id": "s15R9CsWGf0DjDkGRwfV",
                  "burnDecShort": "abc",
                  "sin": {
                      "seconds": 1662754531,
                      "nanoseconds": 334000000
                  },
                  "code": "Some Hsn",
                  "sold": 0,
                  "description": "elo",
                  "title": "Abcd",
                  "burnHigh": "abc",
                  "quota": 0,
                  "burnDec": "abc",
                  "cost": 2,
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "flash": false,
                  "burnCatSub": "Nope",
                  "price": 10,
                  "burnSpec": "abc",
                  "warranty": false,
                  "vX": [
                      {
                          "countQ": 1,
                          "nowVarient": [
                              {
                                  "type": "palete",
                                  "name": "#ff0000"
                              },
                              {
                                  "name": "Xl",
                                  "type": "size"
                              },
                              {
                                  "name": "#333",
                                  "type": "color"
                              }
                          ],
                          "id": "s15R9CsWGf0DjDkGRwfV"
                      }
                  ],
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1664434848087?alt=media&token=de9de432-abcd-4996-be6b-cd6cad018170"
                  ],
                  "burnBrand": "abc",
                  "burnPic": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs15R9CsWGf0DjDkGRwfV1665742489698?alt=media&token=1fb9220b-826c-4e29-bbe2-c29ac52a7e99",
                  "relate": [],
                  "reqBurn": false,
                  "burn": false
              }
          ],
          "setShortID": true,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amGateway": 0.0472,
          "amSale": 10,
          "amParcelCity": false,
          "gwInfo": {
              "entity": "payment",
              "wallet": null,
              "order_id": "order_KbSwCfO5dyInwp",
              "refund_status": null,
              "bank": null,
              "tax": 0,
              "captured": true,
              "status": "captured",
              "vpa": "adityakirtane27@okaxis",
              "notes": {
                  "description": "descriptionX"
              },
              "error_reason": null,
              "currency": "INR",
              "amount": 200,
              "description": "payment to Fit Food",
              "created_at": 1667456645,
              "invoice_id": null,
              "error_code": null,
              "amount_refunded": 0,
              "fee": 4,
              "contact": "+918879751140",
              "error_description": null,
              "international": false,
              "id": "pay_KbSwX5swasV00u",
              "error_source": null,
              "method": "upi",
              "card_id": null,
              "error_step": null,
              "email": "adityakirtane27@gmail.com",
              "acquirer_data": {
                  "rrn": "230721823530"
              }
          },
          "status": 10,
          "sin": {
              "seconds": 1667456622,
              "nanoseconds": 197000000
          },
          "journey": "DIRECT",
          "logistics": {
              "typeCat": "food_and_beverages",
              "PnD_parcelNotFree": false,
              "typeShop": "Both",
              "PnD_cityCharge": 0,
              "addressDropT": "work",
              "addressDrop": {
                  "type": "work",
                  "landmark": "Gagandeep bus stop",
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                  "zip": 400056
              },
              "status": 20,
              "name": "Aditya",
              "PnD_freeStart": 0,
              "require": false,
              "addressPickT": "shop",
              "addressPick": {
                  "zip": "400050",
                  "locality": "Mumbai",
                  "lon": 72.83105909999999,
                  "nation": "IND",
                  "area": "Dent Heal",
                  "state": "MH",
                  "line2": "",
                  "line1": "Dipesadsadas sadasdas",
                  "id": "IND_MH_1648672299398",
                  "city": "Mumbai Suburban",
                  "region": "Maharashtra",
                  "lat": 19.0662066
              },
              "typeOrdr": "DIRECT_ONLINE",
              "PnD_nationCharge": 0,
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "email": "",
              "phone": "8879751140"
          },
          "id": "QxUWKv8eKbx4b3bz12O3",
          "ordrTYPE": "ONLINE",
          "shortID": "A000jX",
          "code": null,
          "type": [
              "ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "DIRECT",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "amTax": 0,
          "amTaxTCS": 0.02,
          "gwID": "pay_KbSwX5swasV00u",
          "gwSIGN": "f80f0ba55ccbc3e7cfe0e527ede01f437d2e3fca571ae88478047b6beee979ce",
          "camp": {
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "expiry": false,
              "cbDir": 2,
              "paused": false,
              "customPay": 0,
              "cbExi": 4,
              "max": 0,
              "stoped": false,
              "tX": "t1",
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "countM": 0,
              "paid": false,
              "ban": false,
              "cbNew": 8,
              "countP": 0,
              "min": 8,
              "type": "flat",
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "customAct": false,
              "stage": 0,
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "countS": 0,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "storeTyp": "Both",
              "name": "Campaign-47",
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
          }
      },
      {
          "earn": 2,
          "camp": {
              "customPay": 0,
              "customAct": false,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "countM": 0,
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "paid": false,
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "min": 8,
              "expiry": false,
              "name": "Campaign-47",
              "paused": false,
              "type": "flat",
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "tX": "t1",
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "cbDir": 2,
              "stoped": false,
              "cbNew": 8,
              "cbExi": 4,
              "max": 0,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "stage": 0,
              "countS": 0,
              "ban": false,
              "storeTyp": "Both",
              "countP": 0
          },
          "gwID": "pay_KbSzBzG6PYfUm1",
          "code": null,
          "com": {
              "seconds": 1667456915,
              "nanoseconds": 506000000
          },
          "journey": "DIRECT",
          "by": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
          "userName": "Aditya",
          "amGateway": 0.118,
          "amTax": 0,
          "cart": [
              {
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmEeeVq9q1itbbv7bAPaq1666903171882?alt=media&token=28dd6fd0-1b7d-4877-852c-86a9a31b74ed"
                  ],
                  "price": 110,
                  "id": "mEeeVq9q1itbbv7bAPaq",
                  "reqBurn": false,
                  "warranty": true,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "upd": {
                      "seconds": 1667402410,
                      "nanoseconds": 161000000
                  },
                  "burn": false,
                  "cost": 10,
                  "sin": {
                      "seconds": 1666903176,
                      "nanoseconds": 730000000
                  },
                  "title": "Sandwich",
                  "variants": [],
                  "content": true,
                  "description": "Sandwich ",
                  "quota": 0,
                  "vX": [],
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "category": "Paneer",
                  "sold": 0,
                  "code": "45666",
                  "Q": 1
              }
          ],
          "amSave": 105,
          "status": 10,
          "upd": {
              "seconds": 1667456777,
              "nanoseconds": 962000000
          },
          "gwInfo": {
              "international": false,
              "created_at": 1667456797,
              "invoice_id": null,
              "error_source": null,
              "notes": {
                  "description": "descriptionX"
              },
              "id": "pay_KbSzBzG6PYfUm1",
              "email": "adityakirtane27@gmail.com",
              "amount_refunded": 0,
              "contact": "+918879751140",
              "error_step": null,
              "description": "payment to Fit Food",
              "entity": "payment",
              "wallet": null,
              "amount": 500,
              "status": "captured",
              "bank": null,
              "fee": 12,
              "error_reason": null,
              "captured": true,
              "vpa": "adityakirtane27@okaxis",
              "currency": "INR",
              "tax": 2,
              "method": "upi",
              "acquirer_data": {
                  "rrn": "230721904953"
              },
              "card_id": null,
              "refund_status": null,
              "order_id": "order_KbSyuThJqO99S4",
              "error_code": null,
              "error_description": null
          },
          "amParcel": 0,
          "amParcelCity": false,
          "id": "muWAPPIOjSKqDt7cNkBj",
          "amRefr": 0,
          "invoice": {
              "useRefrCash": true,
              "amtRefrCash": 5,
              "COD": false
          },
          "gwORDR": "order_KbSyuThJqO99S4",
          "gwSIGN": "884fdbeff1e8b00cacb0b90d0d10bfd6c6052ae718021bd626639c7d0a03ecf5",
          "sin": {
              "seconds": 1667456777,
              "nanoseconds": 962000000
          },
          "storeName": "Fit Food",
          "amTaxTDS": 0,
          "ordrTYPE": "RefrCASH+ONLINE",
          "amCost": 5,
          "logistics": {
              "PnD_nationCharge": 0,
              "PnD_freeStart": 0,
              "status": 20,
              "phone": "8879751140",
              "addressDrop": {
                  "address": "101 leena residency, junaid nagar, yadav nagar,ville parle west",
                  "type": "work",
                  "zip": 400056,
                  "landmark": "Gagandeep bus stop"
              },
              "require": false,
              "name": "Aditya",
              "PnD_cityCharge": 0,
              "typeCat": "food_and_beverages",
              "addressPick": {
                  "state": "MH",
                  "line2": "",
                  "city": "Mumbai Suburban",
                  "id": "IND_MH_1648672299398",
                  "lon": 72.83105909999999,
                  "line1": "Dipesadsadas sadasdas",
                  "area": "Dent Heal",
                  "lat": 19.0662066,
                  "locality": "Mumbai",
                  "nation": "IND",
                  "zip": "400050",
                  "region": "Maharashtra"
              },
              "typeShop": "Both",
              "PnD_parcelNotFree": false,
              "email": "",
              "typeOrdr": "DIRECT_ONLINE",
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "addressPickT": "shop",
              "addressDropT": "work"
          },
          "amSale": 110,
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "shortID": "A000jY",
          "type": [
              "RefrCASH+ONLINE",
              "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "DIRECT",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "amBurst": 10,
          "setShortID": true,
          "amTotal": 10,
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "refr": null,
          "amTaxTCS": 0.1
      },
      {
          "amTaxTCS": 0.1,
          "code": null,
          "gwID": "pay_KbSzaZo1LKsPHq",
          "amBurst": 10,
          "logistics": {
              "PnD_nationCharge": 0,
              "addressDropT": "home",
              "require": false,
              "typeOrdr": "DIRECT_ONLINE",
              "typeShop": "Both",
              "PnD_parcelNotFree": false,
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "phone": "9167452128",
              "typeCat": "food_and_beverages",
              "addressPickT": "shop",
              "PnD_freeStart": 0,
              "addressPick": {
                  "nation": "IND",
                  "lon": 72.83105909999999,
                  "line2": "",
                  "line1": "Dipesadsadas sadasdas",
                  "locality": "Mumbai",
                  "zip": "400050",
                  "city": "Mumbai Suburban",
                  "lat": 19.0662066,
                  "id": "IND_MH_1648672299398",
                  "region": "Maharashtra",
                  "state": "MH",
                  "area": "Dent Heal"
              },
              "addressDrop": {
                  "zip": 400097,
                  "type": "home",
                  "landmark": "Opposite of maple height building ",
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road"
              },
              "PnD_cityCharge": 0,
              "status": 20,
              "email": "",
              "name": "Roshan"
          },
          "storeName": "Fit Food",
          "ordrTYPE": "ONLINE",
          "amGateway": 0.236,
          "amTaxTDS": 0,
          "sin": {
              "seconds": 1667456805,
              "nanoseconds": 964000000
          },
          "userName": "Roshan",
          "journey": "DIRECT",
          "upd": {
              "seconds": 1667456805,
              "nanoseconds": 964000000
          },
          "gwORDR": "order_KbSzOvS8xyGgIJ",
          "amTotal": 10,
          "earn": 2,
          "camp": {
              "tX": "t1",
              "upd": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "dateS": {
                  "seconds": 1667413800,
                  "nanoseconds": 0
              },
              "customPay": 0,
              "id": "iZ0WJpj4WDxyZ4jo8nFp",
              "type": "flat",
              "dateE": {
                  "seconds": 1670005800,
                  "nanoseconds": 0
              },
              "stoped": false,
              "paused": false,
              "customAct": false,
              "countP": 0,
              "cbNew": 8,
              "name": "Campaign-47",
              "expiry": false,
              "countM": 0,
              "max": 0,
              "paid": false,
              "stage": 0,
              "cbDir": 2,
              "sin": {
                  "seconds": 1667456085,
                  "nanoseconds": 65000000
              },
              "storeTyp": "Both",
              "cbExi": 4,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "min": 8,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "countS": 0,
              "ban": false
          },
          "amSale": 110,
          "type": [
              "ONLINE",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "DIRECT",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1"
          ],
          "cart": [
              {
                  "content": true,
                  "upd": {
                      "seconds": 1667402410,
                      "nanoseconds": 161000000
                  },
                  "category": "Paneer",
                  "sin": {
                      "seconds": 1666903176,
                      "nanoseconds": 730000000
                  },
                  "reqBurn": false,
                  "sold": 0,
                  "cost": 10,
                  "title": "Sandwich",
                  "quota": 0,
                  "warranty": true,
                  "variants": [],
                  "Q": 1,
                  "price": 110,
                  "code": "45666",
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "vX": [],
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmEeeVq9q1itbbv7bAPaq1666903171882?alt=media&token=28dd6fd0-1b7d-4877-852c-86a9a31b74ed"
                  ],
                  "description": "Sandwich ",
                  "burn": false,
                  "id": "mEeeVq9q1itbbv7bAPaq"
              }
          ],
          "amTax": 0,
          "amRefr": 0,
          "amCost": 10,
          "status": 10,
          "setShortID": true,
          "amParcel": 0,
          "refr": null,
          "gwSIGN": "41bf31b84d22324ee4292a779b38923f695faeb09919a0dc097141e842063096",
          "com": {
              "seconds": 1667456913,
              "nanoseconds": 786000000
          },
          "shortID": "A000jZ",
          "id": "WY5QbtreDt9xdyF228bG",
          "invoice": {
              "COD": false,
              "useRefrCash": false,
              "amtRefrCash": 0
          },
          "amSave": 100,
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amParcelCity": false,
          "gwInfo": {
              "tax": 4,
              "international": false,
              "email": "roshankailashshilimkar@gmail.com",
              "id": "pay_KbSzaZo1LKsPHq",
              "error_code": null,
              "fee": 24,
              "wallet": null,
              "error_description": null,
              "notes": {
                  "description": "descriptionX"
              },
              "amount_refunded": 0,
              "invoice_id": null,
              "method": "upi",
              "vpa": "roshanshilimar123@okaxis",
              "entity": "payment",
              "status": "captured",
              "bank": null,
              "error_reason": null,
              "card_id": null,
              "error_source": null,
              "currency": "INR",
              "refund_status": null,
              "order_id": "order_KbSzOvS8xyGgIJ",
              "description": "payment to Fit Food",
              "created_at": 1667456819,
              "acquirer_data": {
                  "rrn": "230721916762"
              },
              "amount": 1000,
              "error_step": null,
              "captured": true,
              "contact": "+919167452128"
          }
      },
      {
          "id": "nxg4cNl7nScdN4iByAtw",
          "com": {
              "seconds": 1667455643,
              "nanoseconds": 49000000
          },
          "type": [
              "addBalance",
              "campaignBalance",
              "vendorAc",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
          ],
          "amSale": 0,
          "to": "Δ",
          "sin": {
              "seconds": 1667455643,
              "nanoseconds": 49000000
          },
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "amRate": [
              {
                  "total": 2000,
                  "refill": 1660,
                  "cost": 2000,
                  "refrGST_c": 9,
                  "refrGST_s": 9,
                  "refrGw": 47.2,
                  "refr": 700,
                  "tX": "t11",
                  "refrGST": 44.66,
                  "refrGwRATE": 2.36,
                  "refrGST_n": 18
              },
              {
                  "refrGST_n": 18,
                  "refrGST_c": 9,
                  "refrGST": 57.84,
                  "refrGST_s": 9,
                  "tX": "t12",
                  "refrGwRATE": 2.36,
                  "refill": 2550,
                  "refr": 700,
                  "refrGw": 70.8,
                  "cost": 3000,
                  "total": 3000
              },
              {
                  "refrGST_n": 18,
                  "refrGST_c": 9,
                  "tX": "t13",
                  "cost": 5000,
                  "refrGST": 81.15,
                  "refrGw": 118,
                  "refrGST_s": 9,
                  "refill": 4350,
                  "total": 5000,
                  "refr": 700,
                  "refrGwRATE": 2.36
              },
              {
                  "refrGST_s": 9,
                  "refrGST_c": 9,
                  "refill": 8900,
                  "refrGST_n": 18,
                  "tX": "t14",
                  "refr": 700,
                  "cost": 10000,
                  "refrGwRATE": 2.36,
                  "refrGST": 131.8,
                  "refrGw": 236,
                  "total": 10000
              },
              {
                  "cost": 15000,
                  "total": 15000,
                  "refrGwRATE": 2.36,
                  "refrGST_s": 9,
                  "tX": "t15",
                  "refrGST_n": 18,
                  "refrGST": 151.93,
                  "refrGw": 354,
                  "refill": 13650,
                  "refr": 700,
                  "refrGST_c": 9
              },
              {
                  "refrGST_c": 9,
                  "refill": 18600,
                  "refrGST_n": 18,
                  "refrGwRATE": 2.36,
                  "tX": "t16",
                  "refr": 700,
                  "refrGST_s": 9,
                  "refrGw": 472,
                  "refrGST": 141.56,
                  "cost": 20000,
                  "total": 20000
              }
          ],
          "shortID": "A000jT",
          "amCamp": 2000,
          "amTotal": 2000,
          "setShortID": true,
          "amCost": 2000,
          "upd": {
              "seconds": 1667455643,
              "nanoseconds": 49000000
          },
          "amSave": 0
      },
      {
          "sin": {
              "seconds": 1667455593,
              "nanoseconds": 563000000
          },
          "setShortID": true,
          "upd": {
              "seconds": 1667455593,
              "nanoseconds": 563000000
          },
          "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "to": "Δ",
          "amTotal": 2000,
          "shortID": "A000jR",
          "com": {
              "seconds": 1667455593,
              "nanoseconds": 563000000
          },
          "id": "MhwZKZ7S6KQTDoJbDl5G",
          "type": [
              "addBalance",
              "campaignBalance",
              "vendorAc",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2"
          ],
          "amSale": 0,
          "amSave": 0,
          "amCamp": 2000,
          "amCost": 2000,
          "amRate": [
              {
                  "refrGw": 47.2,
                  "cost": 2000,
                  "refrGST_n": 18,
                  "refill": 1660,
                  "tX": "t11",
                  "refrGST_s": 9,
                  "refrGwRATE": 2.36,
                  "refrGST": 44.66,
                  "refr": 700,
                  "refrGST_c": 9,
                  "total": 2000
              },
              {
                  "refrGST_n": 18,
                  "tX": "t12",
                  "refr": 700,
                  "cost": 3000,
                  "refrGST_s": 9,
                  "refill": 2550,
                  "refrGST_c": 9,
                  "refrGwRATE": 2.36,
                  "refrGw": 70.8,
                  "refrGST": 57.84,
                  "total": 3000
              },
              {
                  "tX": "t13",
                  "refrGST_s": 9,
                  "refrGwRATE": 2.36,
                  "refrGST_n": 18,
                  "cost": 5000,
                  "refr": 700,
                  "refrGw": 118,
                  "refrGST": 81.15,
                  "refill": 4350,
                  "total": 5000,
                  "refrGST_c": 9
              },
              {
                  "refrGST": 131.8,
                  "refrGST_n": 18,
                  "refrGST_c": 9,
                  "refrGwRATE": 2.36,
                  "refrGw": 236,
                  "refill": 8900,
                  "refrGST_s": 9,
                  "tX": "t14",
                  "total": 10000,
                  "cost": 10000,
                  "refr": 700
              },
              {
                  "total": 15000,
                  "refill": 13650,
                  "refrGST_c": 9,
                  "refrGST_n": 18,
                  "refrGST_s": 9,
                  "refrGwRATE": 2.36,
                  "cost": 15000,
                  "refr": 700,
                  "refrGST": 151.93,
                  "tX": "t15",
                  "refrGw": 354
              },
              {
                  "refrGwRATE": 2.36,
                  "cost": 20000,
                  "refrGST": 141.56,
                  "refrGST_c": 9,
                  "total": 20000,
                  "refill": 18600,
                  "refr": 700,
                  "refrGST_n": 18,
                  "refrGw": 472,
                  "refrGST_s": 9,
                  "tX": "t16"
              }
          ]
      },
      {
          "setShortID": true,
          "cart": [
              {
                  "warranty": true,
                  "sold": 0,
                  "vX": [],
                  "burn": false,
                  "description": "Sandwich ",
                  "variants": [],
                  "banners": [
                      "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmEeeVq9q1itbbv7bAPaq1666903171882?alt=media&token=28dd6fd0-1b7d-4877-852c-86a9a31b74ed"
                  ],
                  "reqBurn": false,
                  "category": "Paneer",
                  "price": 110,
                  "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
                  "code": "45666",
                  "content": true,
                  "sid": "8B9ozj7aTPvywkIvVWiK",
                  "Q": 1,
                  "title": "Sandwich",
                  "sin": {
                      "seconds": 1666903176,
                      "nanoseconds": 730000000
                  },
                  "id": "mEeeVq9q1itbbv7bAPaq",
                  "upd": {
                      "seconds": 1667402410,
                      "nanoseconds": 161000000
                  },
                  "quota": 0,
                  "cost": 10
              }
          ],
          "amTaxTDS": 0,
          "amBurst": 10,
          "by": "aBbP0FKIXvYdxNE7ictPnPo33th1",
          "amTaxTCS": 0.1,
          "amSale": 110,
          "refr": {
              "uid": "jyAHGdwpx6Yc6k6ecr0xzvkZh8v1",
              "name": "Aditya",
              "earn": 4
          },
          "userName": "Roshan",
          "sin": {
              "seconds": 1667402648,
              "nanoseconds": 972000000
          },
          "amGateway": 0,
          "logistics": {
              "status": 20,
              "PnD_nationCharge": 0,
              "PnD_freeStart": 0,
              "require": false,
              "typeSuCat": "sc-food_and_beverages-healthy_snacks",
              "addressPickT": "shop",
              "PnD_parcelNotFree": false,
              "PnD_cityCharge": 0,
              "addressPick": {
                  "lon": 72.83105909999999,
                  "locality": "Mumbai",
                  "line2": "",
                  "city": "Mumbai Suburban",
                  "area": "Dent Heal",
                  "line1": "Dipesadsadas sadasdas",
                  "id": "IND_MH_1648672299398",
                  "lat": 19.0662066,
                  "region": "Maharashtra",
                  "state": "MH",
                  "zip": "400050",
                  "nation": "IND"
              },
              "name": "Roshan",
              "typeCat": "food_and_beverages",
              "addressDropT": "home",
              "addressDrop": {
                  "zip": 400097,
                  "landmark": "Opposite of maple height building ",
                  "address": "706 C wing, Pratap nagar SRA building,pratap nagar,shivaji nagar Road",
                  "type": "home"
              },
              "phone": "9167452128",
              "email": "",
              "typeShop": "Both",
              "typeOrdr": "F2F_ONLINE"
          },
          "amRefr": 0,
          "journey": "F2F",
          "com": {
              "seconds": 1667455584,
              "nanoseconds": 302000000
          },
          "amParcelCity": false,
          "ordrTYPE": "RefrCASH",
          "invoice": {
              "useRefrCash": true,
              "COD": false,
              "amtRefrCash": 10
          },
          "earn": 8,
          "storeName": "Fit Food",
          "sid": "8B9ozj7aTPvywkIvVWiK",
          "upd": {
              "seconds": 1667402648,
              "nanoseconds": 972000000
          },
          "camp": {
              "dateE": {
                  "seconds": 1669919400,
                  "nanoseconds": 0
              },
              "cbDir": 2,
              "sid": "8B9ozj7aTPvywkIvVWiK",
              "id": "NWFtLtMCTNTLsXWT0u0K",
              "max": 0,
              "paid": false,
              "cbNew": 8,
              "countM": 0,
              "expiry": false,
              "customPay": 0,
              "customAct": false,
              "dateS": {
                  "seconds": 1667327400,
                  "nanoseconds": 0
              },
              "countS": 0,
              "countP": 0,
              "type": "flat",
              "tX": "t1",
              "stoped": false,
              "ban": false,
              "by": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "upd": {
                  "seconds": 1667402358,
                  "nanoseconds": 971000000
              },
              "storeTyp": "Both",
              "min": 10,
              "sin": {
                  "seconds": 1667402358,
                  "nanoseconds": 971000000
              },
              "name": "Campaign-46",
              "cbExi": 4,
              "paused": false,
              "stage": 0
          },
          "amCost": 0,
          "id": "4GivDYHXDuXHkm1i3r66",
          "code": "A000Ky",
          "type": [
              "RefrCASH",
              "aBbP0FKIXvYdxNE7ictPnPo33th1",
              "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
              "8B9ozj7aTPvywkIvVWiK",
              "addORDER",
              "storeORDER",
              "clientAc",
              "F2F",
              "A000Ky",
              "clientAc_aBbP0FKIXvYdxNE7ictPnPo33th1",
              "clientAc_jyAHGdwpx6Yc6k6ecr0xzvkZh8v1"
          ],
          "to": "zn99lfRpB4bDy4KBvu4K1QpSMBk2",
          "shortID": "A000jL",
          "amSave": 110,
          "amTax": 0,
          "amParcel": 0,
          "status": 10,
          "amTotal": 10
      }


  ];

  constructor(private _bottomSheet: MatBottomSheet) {



    // this.invoicedata = {
    //   storename: "",
    //   shopaddress: "",
    //   orderId: "",
    //   orderdate: "",
    //   Cust_name: "",
    //   Cust_Phone_No: "",
    //   billing_address: "",
    //   cart: "",
    //   parcelcost: 0,
    //   Fulltotal: 0,
    //   Tax: 0,
    //   AMtWords: '',
    //   InvoiceNo: '',
    //   Sindata: '',
    //   Total: 0,
    //   Cat: '',
    //   sub_cat: '',
    // }
  }

  ngOnInit(): void {
  }

  getrefilvalue(rates: Array<any>, total: any) {
    return rates[rates.findIndex(rates => rates.total == total)].refill;
  }

  SavePDF() {
    let doc = new jsPDF('p', 'pt', [1400, 1500]);
    doc.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("demo.pdf");
      }
    });
  }

  howitworks() {
    this._bottomSheet.open(VendorHIWComponent, {
      panelClass: 'storepage',
    });
  }

  Downloadinvoice(x: any) {
    console.log(x.cart)
    const fireBaseTime = new Date(
      x.sin.seconds * 1000 + x.sin.nanoseconds / 1000000,
    );
    const date = fireBaseTime.toDateString().substring(4);
    this.invoicedata = {
      Total: x.amBurst,
      storename: x.storeName,
      shopaddress: x.logistics.addressPick.line1 + ", " + x.logistics.addressPick.zip + ", " + x.logistics.addressPick.locality,
      orderId: x.id,
      orderdate: x.sin,
      Cust_name: x.userName,
      Cust_Phone_No: x.logistics.phone,
      billing_address: x.logistics.addressDrop.address + ", " + x.logistics.addressDrop.zip + ", " + x.logistics.addressDrop.landmark,
      cart: x.cart,
      parcelcost: x.amParcel,
      Fulltotal: x.amTotal,
      Tax: x.amTax,
      AMtWords: this.convertinstring((parseInt(x.amTotal)).toString()),
      InvoiceNo: x.shortID,
      Sindata: date,
      Cat: x.logistics.typeCat,
      sub_cat: x.logistics.typeSuCat
    }
    // this.SavePDF();
    console.log(this.invoicedata);
  }


  convertinstring(num: string) {
    var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if ((num = num.toString()).length > 9) return 'overflow';
    let fullnO = '000000000' + num;
    let n: any = (fullnO).substring((fullnO.length - 9), fullnO.length).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
  }
}
