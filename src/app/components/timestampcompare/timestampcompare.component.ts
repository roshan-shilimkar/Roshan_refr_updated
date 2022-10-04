import { Unary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OpeningtimeComponent } from 'src/app/openingtime/openingtime.component';

@Component({
  selector: 'app-timestampcompare',
  templateUrl: './timestampcompare.component.html',
  styleUrls: ['./timestampcompare.component.scss']
})
export class TimestampcompareComponent implements OnInit {
  todaysdate: string = "";
  timestampdate: string = "";
  breakS: string = "";
  breakE: string = "";
  OffDays = new FormControl('');
  selectedoffDay: string = "";
  isbreak: boolean = false;
  weekstartday: string = "";
  weekendday: string = "";
  showmssg: boolean = false;
  storeLoc: any = {
    opensDaily: true, opensDailyS: "07:00", opensDailyE: "23:00",
    openBreak: false, openBreakS: "07:00", openBreakE: "23:00",
    openMon: true, openMonS: "07:00", openMonE: "23:00",
    openTue: true, openTueS: "07:00", openTueE: "23:00",
    openWed: true, openWedS: "07:00", openWedE: "23:00",
    openThu: true, openThuS: "07:00", openThuE: "23:00",
    openFri: true, openFriS: "07:00", openFriE: "23:00",
    openSat: true, openSatS: "07:00", openSatE: "23:00",
    openSun: true, openSunS: "07:00", openSunE: "23:00",
  }
  // take Current time from firebse in miliseconds and campare it with store time and show 
  timestamp: any = {
    nanoseconds: 0,
    seconds: 1562524200
  }










  storearr:Array<any>=[
    
    [
        {
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FtSOKXM271hW7U0SvJDj8&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FtSOKXM271hW7U0SvJDj8&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FtSOKXM271hW7U0SvJDj8&ofl=club.refr.app&st=FitFeast&sd=FitFeast%20is%20a%20digital%20first%20FnB%20brand%20with%20a%20curation%20of%20protein-rich%20healthy%20snacks%20in%20novel%20flavours.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FtSOKXM271hW7U0SvJDj8LOGO1664440394045%3Falt%3Dmedia%26token%3Da1d08b59-5a71-4922-99c9-9b8c5eb6da29",
            "products": 0,
            "sin": {
                "seconds": 1664440752,
                "nanoseconds": 663000000
            },
            "shareUrlV1": "https://refrclub.com/o/x1Mi",
            "shareUrlX1": "https://refrclub.com/o/ARSC",
            "email": "contact@fitfeast.in",
            "log": {
                "seconds": 1664440752,
                "nanoseconds": 663000000
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FtSOKXM271hW7U0SvJDj8&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FtSOKXM271hW7U0SvJDj8&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FtSOKXM271hW7U0SvJDj8&ofl=club.refr.app&st=FitFeast&sd=FitFeast%20is%20a%20digital%20first%20FnB%20brand%20with%20a%20curation%20of%20protein-rich%20healthy%20snacks%20in%20novel%20flavours.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FtSOKXM271hW7U0SvJDj8LOGO1664440394045%3Falt%3Dmedia%26token%3Da1d08b59-5a71-4922-99c9-9b8c5eb6da29",
            "banners": [],
            "shareUrlB1": "https://refrclub.com/o/RB4a",
            "phone": "9871285350",
            "schedule": {
                "openSunS": "07:00",
                "openMon": true,
                "opensDailyS": "07:00",
                "openTue": true,
                "openSatE": "23:00",
                "openSunE": "23:00",
                "openThuE": "23:00",
                "opensDailyE": "23:00",
                "openMonS": "07:00",
                "openSatS": "07:00",
                "openSun": false,
                "openWedE": "23:00",
                "openSat": true,
                "openFriE": "23:00",
                "openMonE": "23:00",
                "openFri": true,
                "openThu": true,
                "openTueS": "07:00",
                "openWed": true,
                "openTueE": "23:00",
                "openThuS": "07:00",
                "openWedS": "07:00",
                "opensDaily": true,
                "openFriS": "07:00"
            },
            "cashback": 50,
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FtSOKXM271hW7U0SvJDj8&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FtSOKXM271hW7U0SvJDj8&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FtSOKXM271hW7U0SvJDj8&ofl=club.refr.app&st=FitFeast&sd=FitFeast%20is%20a%20digital%20first%20FnB%20brand%20with%20a%20curation%20of%20protein-rich%20healthy%20snacks%20in%20novel%20flavours.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FtSOKXM271hW7U0SvJDj8LOGO1664440394045%3Falt%3Dmedia%26token%3Da1d08b59-5a71-4922-99c9-9b8c5eb6da29",
            "typeORDER": {
                "refund": false,
                "logistics": false,
                "nationCharge": 0,
                "phoneHide": true,
                "return": false,
                "exchange": false,
                "freeStart": 0,
                "cityCharge": 0,
                "COD": false,
                "freeParcel": false,
                "delivery": "Nationwide"
            },
            "addedDynamicLinkP1": true,
            "about": "FitFeast is a digital first FnB brand with a curation of protein-rich healthy snacks in novel flavours.",
            "by": "DiowgDtlO6PqDDHhWBjW0iy62q62",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FtSOKXM271hW7U0SvJDj8&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FtSOKXM271hW7U0SvJDj8&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FtSOKXM271hW7U0SvJDj8&ofl=club.refr.app&st=FitFeast&sd=FitFeast%20is%20a%20digital%20first%20FnB%20brand%20with%20a%20curation%20of%20protein-rich%20healthy%20snacks%20in%20novel%20flavours.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FtSOKXM271hW7U0SvJDj8LOGO1664440394045%3Falt%3Dmedia%26token%3Da1d08b59-5a71-4922-99c9-9b8c5eb6da29",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtSOKXM271hW7U0SvJDj8POST1664440395941?alt=media&token=809a5cb0-6331-4b08-b3d8-f3aaae6bc4d1",
            "loc": [
                {
                    "area": "neha aviatio",
                    "id": "IND_DL_1664440393472",
                    "zip": "110037",
                    "region": "Delhi",
                    "nation": "IND",
                    "city": "New Delhi",
                    "lat": 28.5495428,
                    "locality": "New Delhi",
                    "state": "DL",
                    "line1": "Neha Aviation Management Private Limited, Road Number 6, Block B, Mahipalpur Extension, Mahipalpur, New Delhi, Delhi, India",
                    "line2": "",
                    "lon": 77.1290028
                }
            ],
            "proCat": [],
            "addedDynamicLink": true,
            "upd": {
                "seconds": 1664448396,
                "nanoseconds": 843000000
            },
            "cat": "food_and_beverages",
            "id": "tSOKXM271hW7U0SvJDj8",
            "type": "Onli",
            "shareUrlP1": "https://refrclub.com/o/YPed",
            "name": "FitFeast",
            "subCat": "sc-food_and_beverages-bakery",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtSOKXM271hW7U0SvJDj8LOGO1664440394045?alt=media&token=a1d08b59-5a71-4922-99c9-9b8c5eb6da29"
        },
        {
            "name": "Food Adda Vile Parle ",
            "proCat": [],
            "by": "8dHd8NfC2NhVUzL5fP4P6H4ryN92",
            "cat": "food_and_beverages",
            "typeORDER": {
                "exchange": true,
                "delivery": "Citywide",
                "return": true,
                "COD": true,
                "logistics": false,
                "refund": true
            },
            "loc": [
                {
                    "lat": 19.1033097,
                    "region": "Maharashtra",
                    "id": "IND_MH_1664372387844",
                    "city": "Mumbai Suburban",
                    "nation": "IND",
                    "zip": "400057",
                    "state": "MH",
                    "locality": "Mumbai",
                    "line2": "",
                    "lon": 72.84963239999999,
                    "area": "Food adda vile ",
                    "line1": "Shop no 12, Thosar House, Hanuman Cross Rd, opposite lakme salon, Satsang CHSL, Navpada, Vile Parle East"
                }
            ],
            "about": "Fast food restaurant ",
            "type": "Both",
            "shareUrlX1": "https://refrclub.com/o/1j4t",
            "addedDynamicLinkP1": true,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2Fn5jCxNQ2UOIB7DdZfXf1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fn5jCxNQ2UOIB7DdZfXf1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fn5jCxNQ2UOIB7DdZfXf1&ofl=club.refr.app&st=Food%20Adda%20Vile%20Parle&sd=Fast%20food%20restaurant&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252Fn5jCxNQ2UOIB7DdZfXf1LOGO1664372388417%3Falt%3Dmedia%26token%3Dd7963833-e67a-4623-b950-be94aac847a7",
            "id": "n5jCxNQ2UOIB7DdZfXf1",
            "shareUrlB1": "https://refrclub.com/o/BqH1",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fn5jCxNQ2UOIB7DdZfXf1POST1664372390790?alt=media&token=631ecf01-3c99-4a21-9108-224395977ba9",
            "schedule": {
                "opensDaily": true,
                "openWedE": "23:00",
                "openWed": true,
                "openSun": false,
                "openSat": true,
                "opensDailyS": "12:00",
                "openMonS": "07:00",
                "openMon": true,
                "openTueS": "07:00",
                "openSunE": "23:00",
                "openFriE": "23:00",
                "openThuE": "23:00",
                "openThuS": "07:00",
                "openMonE": "23:00",
                "openSatE": "23:00",
                "openFriS": "07:00",
                "openSunS": "07:00",
                "openThu": true,
                "openFri": true,
                "openSatS": "07:00",
                "openWedS": "07:00",
                "openTueE": "23:00",
                "opensDailyE": "00:00",
                "openTue": true
            },
            "banners": [],
            "email": "foodaddavileparle12@gmail.com",
            "sin": {
                "seconds": 1664372388,
                "nanoseconds": 111000000
            },
            "log": {
                "seconds": 1664372388,
                "nanoseconds": 111000000
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2Fn5jCxNQ2UOIB7DdZfXf1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fn5jCxNQ2UOIB7DdZfXf1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fn5jCxNQ2UOIB7DdZfXf1&ofl=club.refr.app&st=Food%20Adda%20Vile%20Parle&sd=Fast%20food%20restaurant&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252Fn5jCxNQ2UOIB7DdZfXf1LOGO1664372388417%3Falt%3Dmedia%26token%3Dd7963833-e67a-4623-b950-be94aac847a7",
            "shareUrlV1": "https://refrclub.com/o/6a51",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fn5jCxNQ2UOIB7DdZfXf1LOGO1664372388417?alt=media&token=d7963833-e67a-4623-b950-be94aac847a7",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2Fn5jCxNQ2UOIB7DdZfXf1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fn5jCxNQ2UOIB7DdZfXf1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fn5jCxNQ2UOIB7DdZfXf1&ofl=club.refr.app&st=Food%20Adda%20Vile%20Parle&sd=Fast%20food%20restaurant&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252Fn5jCxNQ2UOIB7DdZfXf1LOGO1664372388417%3Falt%3Dmedia%26token%3Dd7963833-e67a-4623-b950-be94aac847a7",
            "shareUrlP1": "https://refrclub.com/o/KfKw",
            "phone": "9321008857",
            "subCat": "sc-food_and_beverages-cafe",
            "products": 0,
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2Fn5jCxNQ2UOIB7DdZfXf1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fn5jCxNQ2UOIB7DdZfXf1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fn5jCxNQ2UOIB7DdZfXf1&ofl=club.refr.app&st=Food%20Adda%20Vile%20Parle&sd=Fast%20food%20restaurant&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252Fn5jCxNQ2UOIB7DdZfXf1LOGO1664372388417%3Falt%3Dmedia%26token%3Dd7963833-e67a-4623-b950-be94aac847a7",
            "addedDynamicLink": true,
            "upd": {
                "seconds": 1664372388,
                "nanoseconds": 111000000
            }
        },
        {
            "schedule": {
                "opensDailyS": "09:00",
                "openMon": true,
                "openThu": true,
                "openFriS": "07:00",
                "openTueS": "07:00",
                "openSatE": "23:00",
                "openWedE": "23:00",
                "openWed": true,
                "openMonE": "23:00",
                "openThuS": "07:00",
                "openSun": false,
                "openWedS": "07:00",
                "openTueE": "23:00",
                "openSatS": "07:00",
                "openSunE": "23:00",
                "openMonS": "07:00",
                "openSunS": "07:00",
                "openSat": true,
                "openFriE": "23:00",
                "opensDaily": true,
                "openTue": true,
                "openFri": true,
                "openThuE": "23:00",
                "opensDailyE": "21:00"
            },
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FrUfRrKPFDhyE1ugWDGDdLOGO1664350100919?alt=media&token=dace5b98-97d0-4a46-b44e-85677d6972eb",
            "type": "Offl",
            "shareUrlX1": "https://refrclub.com/o/zVWq",
            "cashback": 200,
            "addedDynamicLinkP1": true,
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FrUfRrKPFDhyE1ugWDGDdPOST1664350103488?alt=media&token=aafffc93-c3b2-4a8e-875d-fdbd411903d0",
            "upd": {
                "seconds": 1664350100,
                "nanoseconds": 663000000
            },
            "phone": "8591745286",
            "shareUrlP1": "https://refrclub.com/o/SQLP",
            "proCat": [],
            "products": 0,
            "banners": [],
            "addedDynamicLink": true,
            "cat": "salons_and_spa",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FrUfRrKPFDhyE1ugWDGDd&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FrUfRrKPFDhyE1ugWDGDd&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FrUfRrKPFDhyE1ugWDGDd&ofl=club.refr.app&st=H%20%26%20F%20Unisex%20Salon&sd=Professional%20Celebrity%20Hairstylist&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FrUfRrKPFDhyE1ugWDGDdLOGO1664350100919%3Falt%3Dmedia%26token%3Ddace5b98-97d0-4a46-b44e-85677d6972eb",
            "loc": [
                {
                    "state": "MH",
                    "line2": "",
                    "city": "Mumbai Suburban",
                    "lat": 19.1372481,
                    "locality": "Mumbai",
                    "line1": "Shop no 10, Om Apartment, Opp Bhaktivedanta School",
                    "area": "H & F unisex salon sunder",
                    "nation": "IND",
                    "zip": "400053",
                    "lon": 72.8294172,
                    "id": "IND_MH_1664350100330",
                    "region": "Maharashtra"
                }
            ],
            "shareUrlV1": "https://refrclub.com/o/JAaL",
            "log": {
                "seconds": 1664350100,
                "nanoseconds": 663000000
            },
            "sin": {
                "seconds": 1664350100,
                "nanoseconds": 663000000
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FrUfRrKPFDhyE1ugWDGDd&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FrUfRrKPFDhyE1ugWDGDd&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FrUfRrKPFDhyE1ugWDGDd&ofl=club.refr.app&st=H%20%26%20F%20Unisex%20Salon&sd=Professional%20Celebrity%20Hairstylist&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FrUfRrKPFDhyE1ugWDGDdLOGO1664350100919%3Falt%3Dmedia%26token%3Ddace5b98-97d0-4a46-b44e-85677d6972eb",
            "subCat": "sc-salons_and_spa-unisex_salon",
            "typeORDER": {
                "COD": true,
                "return": true,
                "logistics": false,
                "exchange": true,
                "delivery": "Citywide",
                "refund": true
            },
            "about": "Professional Celebrity Hairstylist ",
            "name": "H & F Unisex Salon",
            "email": "hfunisexsalon@gmail.com",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FrUfRrKPFDhyE1ugWDGDd&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FrUfRrKPFDhyE1ugWDGDd&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FrUfRrKPFDhyE1ugWDGDd&ofl=club.refr.app&st=H%20%26%20F%20Unisex%20Salon&sd=Professional%20Celebrity%20Hairstylist&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FrUfRrKPFDhyE1ugWDGDdLOGO1664350100919%3Falt%3Dmedia%26token%3Ddace5b98-97d0-4a46-b44e-85677d6972eb",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FrUfRrKPFDhyE1ugWDGDd&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FrUfRrKPFDhyE1ugWDGDd&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FrUfRrKPFDhyE1ugWDGDd&ofl=club.refr.app&st=H%20%26%20F%20Unisex%20Salon&sd=Professional%20Celebrity%20Hairstylist&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FrUfRrKPFDhyE1ugWDGDdLOGO1664350100919%3Falt%3Dmedia%26token%3Ddace5b98-97d0-4a46-b44e-85677d6972eb",
            "shareUrlB1": "https://refrclub.com/o/P7qT",
            "id": "rUfRrKPFDhyE1ugWDGDd",
            "by": "6cAlln06FaVVxjKO38x9aaVn5TD3"
        },
        {
            "addedDynamicLink": true,
            "log": {
                "seconds": 1664210011,
                "nanoseconds": 359000000
            },
            "shareUrlB1": "https://refrclub.com/o/ZmTV",
            "upd": {
                "seconds": 1664263393,
                "nanoseconds": 458000000
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F34uZbXrAS6CpaEXxX8U5&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F34uZbXrAS6CpaEXxX8U5&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F34uZbXrAS6CpaEXxX8U5&ofl=club.refr.app&st=Parla%20Pavbhaji&sd=Pav%20bhaji%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F34uZbXrAS6CpaEXxX8U5LOGO1664210012356%3Falt%3Dmedia%26token%3Dcf6c6eee-e2b1-4652-9154-f230f2bf20b9",
            "id": "34uZbXrAS6CpaEXxX8U5",
            "products": 0,
            "loc": [
                {
                    "nation": "IND",
                    "lon": 72.8495842,
                    "id": "IND_MH_1664210011592",
                    "line2": "",
                    "area": "A-407, Ketayun Mansion, Shahaji Raje Marg, Vishnu Prasad Society, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057, India",
                    "region": "Maharashtra",
                    "zip": "400057",
                    "city": "Mumbai Suburban",
                    "lat": 19.1098392,
                    "locality": "Mumbai",
                    "line1": "Shop No.5 narayan nivas, Hanuman Rd, next to Mc donalds, Vile Parle East",
                    "state": "MH"
                }
            ],
            "shareUrlV1": "https://refrclub.com/o/DXEe",
            "phone": "9082697359",
            "by": "YTmfza5za2NXO4u2bNczFUvKLuu1",
            "email": "parlepavbhaji@gmail.com",
            "name": "Parla Pavbhaji ",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F34uZbXrAS6CpaEXxX8U51664263373058?alt=media&token=61bc466f-8cc5-4b5d-a213-4fc25b2be535",
            "cat": "food_and_beverages",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F34uZbXrAS6CpaEXxX8U51664263385832?alt=media&token=0c8e44a9-23e7-4930-a879-172db025f3f4",
            "addedDynamicLinkP1": true,
            "sin": {
                "seconds": 1664210011,
                "nanoseconds": 359000000
            },
            "shareUrlX1": "https://refrclub.com/o/9Vtp",
            "typeORDER": {
                "return": true,
                "exchange": true,
                "COD": true,
                "refund": true,
                "delivery": "Citywide",
                "logistics": false
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F34uZbXrAS6CpaEXxX8U5&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F34uZbXrAS6CpaEXxX8U5&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F34uZbXrAS6CpaEXxX8U5&ofl=club.refr.app&st=Parla%20Pavbhaji&sd=Pav%20bhaji%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F34uZbXrAS6CpaEXxX8U5LOGO1664210012356%3Falt%3Dmedia%26token%3Dcf6c6eee-e2b1-4652-9154-f230f2bf20b9",
            "shareUrlP1": "https://refrclub.com/o/wwZv",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F34uZbXrAS6CpaEXxX8U5&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F34uZbXrAS6CpaEXxX8U5&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F34uZbXrAS6CpaEXxX8U5&ofl=club.refr.app&st=Parla%20Pavbhaji&sd=Pav%20bhaji%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F34uZbXrAS6CpaEXxX8U5LOGO1664210012356%3Falt%3Dmedia%26token%3Dcf6c6eee-e2b1-4652-9154-f230f2bf20b9",
            "subCat": "sc-food_and_beverages-restaurants",
            "type": "Both",
            "proCat": [],
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F34uZbXrAS6CpaEXxX8U5&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F34uZbXrAS6CpaEXxX8U5&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F34uZbXrAS6CpaEXxX8U5&ofl=club.refr.app&st=Parla%20Pavbhaji&sd=Pav%20bhaji%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F34uZbXrAS6CpaEXxX8U5LOGO1664210012356%3Falt%3Dmedia%26token%3Dcf6c6eee-e2b1-4652-9154-f230f2bf20b9",
            "banners": [],
            "about": "Pav bhaji and more ",
            "schedule": {
                "openMon": true,
                "openSunE": "23:00",
                "openSun": false,
                "openWedE": "23:00",
                "openSat": true,
                "opensDailyS": "12:00",
                "openWed": true,
                "openTue": true,
                "openTueS": "07:00",
                "openFri": true,
                "openThuS": "07:00",
                "openWedS": "07:00",
                "openFriE": "23:00",
                "opensDailyE": "23:00",
                "openFriS": "07:00",
                "openThuE": "23:00",
                "opensDaily": true,
                "openSunS": "07:00",
                "openSatE": "23:00",
                "openTueE": "23:00",
                "openThu": true,
                "openMonE": "23:00",
                "openMonS": "07:00",
                "openSatS": "07:00"
            }
        },
        {
            "email": "goldendelicacyoffical@gmail.com",
            "schedule": {
                "openThuS": "07:00",
                "opensDaily": true,
                "openWed": true,
                "openSunE": "23:00",
                "openThu": true,
                "openMonE": "23:00",
                "openSun": false,
                "opensDailyS": "12:00",
                "openSatE": "23:00",
                "openWedE": "23:00",
                "opensDailyE": "00:30",
                "openSat": true,
                "openSunS": "07:00",
                "openFriE": "23:00",
                "openTueE": "23:00",
                "openTue": true,
                "openMonS": "07:00",
                "openWedS": "07:00",
                "openTueS": "07:00",
                "openFriS": "07:00",
                "openThuE": "23:00",
                "openSatS": "07:00",
                "openFri": true,
                "openMon": true
            },
            "shareUrlP1": "https://refrclub.com/o/JziX",
            "addedDynamicLink": true,
            "upd": {
                "seconds": 1664198962,
                "nanoseconds": 572000000
            },
            "proCat": [],
            "type": "Both",
            "shareUrlV1": "https://refrclub.com/o/epT7",
            "banner": "",
            "loc": [
                {
                    "lat": 19.222755148052897,
                    "nation": "IND",
                    "line1": "Shop no 5/6/7/8/9, Om Satya, Opp Reliance mall, shimpoli",
                    "city": "Mumbai Suburban",
                    "line2": "",
                    "state": "MH",
                    "lon": 72.84944413047262,
                    "zip": "400092",
                    "locality": "Mumbai",
                    "id": "IND_MH_1664198962150",
                    "area": "Ankur Palace, Rayani Gram, Borivali West, Mumbai, Maharashtra 400092, India",
                    "region": "Maharashtra"
                }
            ],
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FqoLxExn35fM7RXS7ZAuh&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FqoLxExn35fM7RXS7ZAuh&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FqoLxExn35fM7RXS7ZAuh&ofl=club.refr.app&st=Golden%20Delicacy&sd=Multi%20cuisine%20restaurant%2C%20open%20till%20late%20night&si=",
            "about": "Multi cuisine restaurant, open till late night ",
            "logo": "",
            "sin": {
                "seconds": 1664198962,
                "nanoseconds": 572000000
            },
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FqoLxExn35fM7RXS7ZAuh&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FqoLxExn35fM7RXS7ZAuh&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FqoLxExn35fM7RXS7ZAuh&ofl=club.refr.app&st=Golden%20Delicacy&sd=Multi%20cuisine%20restaurant%2C%20open%20till%20late%20night&si=",
            "banners": [],
            "addedDynamicLinkP1": true,
            "cat": "food_and_beverages",
            "shareUrlB1": "https://refrclub.com/o/XiVp",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FqoLxExn35fM7RXS7ZAuh&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FqoLxExn35fM7RXS7ZAuh&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FqoLxExn35fM7RXS7ZAuh&ofl=club.refr.app&st=Golden%20Delicacy&sd=Multi%20cuisine%20restaurant%2C%20open%20till%20late%20night&si=",
            "name": "Golden Delicacy ",
            "phone": "7861900700",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FqoLxExn35fM7RXS7ZAuh&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FqoLxExn35fM7RXS7ZAuh&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FqoLxExn35fM7RXS7ZAuh&ofl=club.refr.app&st=Golden%20Delicacy&sd=Multi%20cuisine%20restaurant%2C%20open%20till%20late%20night&si=",
            "products": 0,
            "subCat": "sc-food_and_beverages-restaurants",
            "typeORDER": {
                "logistics": false,
                "delivery": "Citywide",
                "exchange": true,
                "return": true,
                "refund": true,
                "COD": true
            },
            "by": "L9vJx7qe1RXmeOI2kSht2QeBUXD3",
            "id": "",
            "shareUrlX1": "https://refrclub.com/o/jhYe",
            "log": {
                "seconds": 1664198962,
                "nanoseconds": 572000000
            }
        },
        {
            "banners": [],
            "id": "oS1SDbyf1siXGYfT4Peg",
            "shareUrlB1": "https://refrclub.com/o/iJvu",
            "addedDynamicLink": true,
            "phone": "9167644083",
            "log": {
                "seconds": 1664024629,
                "nanoseconds": 860000000
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FoS1SDbyf1siXGYfT4Peg&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FoS1SDbyf1siXGYfT4Peg&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FoS1SDbyf1siXGYfT4Peg&ofl=club.refr.app&st=7th%20Heaven&sd=The%20silkiest%2C%20softest%20desserts%20in%20town&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoS1SDbyf1siXGYfT4PegLOGO1664024630019%3Falt%3Dmedia%26token%3D4c4ac3e2-da09-45e8-8409-ca793b29f902",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FoS1SDbyf1siXGYfT4Peg&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FoS1SDbyf1siXGYfT4Peg&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FoS1SDbyf1siXGYfT4Peg&ofl=club.refr.app&st=7th%20Heaven&sd=The%20silkiest%2C%20softest%20desserts%20in%20town&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoS1SDbyf1siXGYfT4PegLOGO1664024630019%3Falt%3Dmedia%26token%3D4c4ac3e2-da09-45e8-8409-ca793b29f902",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FoS1SDbyf1siXGYfT4Peg&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FoS1SDbyf1siXGYfT4Peg&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FoS1SDbyf1siXGYfT4Peg&ofl=club.refr.app&st=7th%20Heaven&sd=The%20silkiest%2C%20softest%20desserts%20in%20town&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoS1SDbyf1siXGYfT4PegLOGO1664024630019%3Falt%3Dmedia%26token%3D4c4ac3e2-da09-45e8-8409-ca793b29f902",
            "upd": {
                "seconds": 1664372454,
                "nanoseconds": 740000000
            },
            "shareUrlV1": "https://refrclub.com/o/cyy4",
            "typeORDER": {
                "refund": true,
                "delivery": "Citywide",
                "logistics": false,
                "exchange": true,
                "return": true,
                "COD": true
            },
            "email": "7thheavenvileparle007@gmail.com",
            "by": "tCt4cNzjw0hY6vE1IbyUJLUkMNm1",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FoS1SDbyf1siXGYfT4Peg&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FoS1SDbyf1siXGYfT4Peg&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FoS1SDbyf1siXGYfT4Peg&ofl=club.refr.app&st=7th%20Heaven&sd=The%20silkiest%2C%20softest%20desserts%20in%20town&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoS1SDbyf1siXGYfT4PegLOGO1664024630019%3Falt%3Dmedia%26token%3D4c4ac3e2-da09-45e8-8409-ca793b29f902",
            "name": "7th Heaven ",
            "proCat": [],
            "subCat": "sc-food_and_beverages-bakery",
            "schedule": {
                "openMon": true,
                "openSatS": "07:00",
                "openFri": true,
                "openTue": true,
                "openSatE": "23:00",
                "openFriS": "07:00",
                "openThu": true,
                "openSat": true,
                "openWed": true,
                "openMonE": "23:00",
                "openTueE": "23:00",
                "openThuS": "07:00",
                "openFriE": "23:00",
                "openSunS": "07:00",
                "opensDailyE": "00:30",
                "openSun": false,
                "opensDaily": true,
                "openTueS": "07:00",
                "openWedS": "07:00",
                "openSunE": "23:00",
                "openThuE": "23:00",
                "openWedE": "23:00",
                "opensDailyS": "09:00",
                "openMonS": "07:00"
            },
            "products": 0,
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoS1SDbyf1siXGYfT4Peg1664372451381?alt=media&token=871eb474-8534-4655-ab94-7ceba0eb2073",
            "shareUrlX1": "https://refrclub.com/o/SJBP",
            "loc": [
                {
                    "line1": "Shop 3, Dunhill Castle, Hanuman Rd, Vile Parle",
                    "lon": 72.85143366585768,
                    "region": "Maharashtra",
                    "locality": "Mumbai",
                    "state": "MH",
                    "city": "Mumbai Suburban",
                    "area": "Hanuman Road, Vishnu Prasad Society, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057, India",
                    "zip": "400057",
                    "nation": "IND",
                    "id": "IND_MH_1664024629655",
                    "lat": 19.10369624266491,
                    "line2": ""
                }
            ],
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoS1SDbyf1siXGYfT4Peg1664201233124?alt=media&token=493ec80d-4183-42ad-935d-8704b117d9af",
            "shareUrlP1": "https://refrclub.com/o/yjMJ",
            "addedDynamicLinkP1": true,
            "type": "Both",
            "cat": "food_and_beverages",
            "about": "The silkiest, softest desserts in town ",
            "sin": {
                "seconds": 1664024629,
                "nanoseconds": 860000000
            }
        },
        {
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLLJimctDneUE0XZqbzTc1664372477280?alt=media&token=e9ea972a-a0d3-4342-8eb7-26426fd2c4ed",
            "about": "It’s best of the food world, served fresh for you ",
            "products": 0,
            "cat": "food_and_beverages",
            "shareUrlX1": "https://refrclub.com/o/fc6D",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FLLJimctDneUE0XZqbzTc&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FLLJimctDneUE0XZqbzTc&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FLLJimctDneUE0XZqbzTc&ofl=club.refr.app&st=Garde%20Manger%20Cafe&sd=It%E2%80%99s%20best%20of%20the%20food%20world%2C%20served%20fresh%20for%20you&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FLLJimctDneUE0XZqbzTcLOGO1664018852676%3Falt%3Dmedia%26token%3D3a212cf8-92e4-4ef4-beb6-cdba46cdbd5d",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLLJimctDneUE0XZqbzTc1664201243061?alt=media&token=253f5873-10f7-4f53-974d-9a63dde5412a",
            "banners": [],
            "name": "Garde Manger Cafe ",
            "subCat": "sc-food_and_beverages-cafe",
            "phone": "7045004488",
            "id": "LLJimctDneUE0XZqbzTc",
            "type": "Both",
            "shareUrlP1": "https://refrclub.com/o/cvrG",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FLLJimctDneUE0XZqbzTc&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FLLJimctDneUE0XZqbzTc&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FLLJimctDneUE0XZqbzTc&ofl=club.refr.app&st=Garde%20Manger%20Cafe&sd=It%E2%80%99s%20best%20of%20the%20food%20world%2C%20served%20fresh%20for%20you&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FLLJimctDneUE0XZqbzTcLOGO1664018852676%3Falt%3Dmedia%26token%3D3a212cf8-92e4-4ef4-beb6-cdba46cdbd5d",
            "upd": {
                "seconds": 1664372481,
                "nanoseconds": 84000000
            },
            "email": "cafegardemanger@gmail.com",
            "log": {
                "seconds": 1664018852,
                "nanoseconds": 511000000
            },
            "addedDynamicLink": true,
            "schedule": {
                "openFri": true,
                "openSatE": "23:00",
                "openSunS": "07:00",
                "openFriS": "07:00",
                "openTue": true,
                "openThuS": "07:00",
                "openThuE": "23:00",
                "openTueS": "07:00",
                "openWedE": "23:00",
                "opensDailyS": "10:00",
                "openFriE": "23:00",
                "opensDaily": true,
                "openWed": true,
                "openThu": true,
                "openMonS": "07:00",
                "openTueE": "23:00",
                "openWedS": "07:00",
                "openMonE": "23:00",
                "openSat": true,
                "openSun": false,
                "openMon": true,
                "openSunE": "23:00",
                "openSatS": "07:00",
                "opensDailyE": "23:30"
            },
            "addedDynamicLinkP1": true,
            "shareUrlV1": "https://refrclub.com/o/5WCk",
            "by": "x3HFIcrrkCYJUITKmU24upn7lTJ3",
            "sin": {
                "seconds": 1664018852,
                "nanoseconds": 511000000
            },
            "shareUrlB1": "https://refrclub.com/o/SkKd",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FLLJimctDneUE0XZqbzTc&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FLLJimctDneUE0XZqbzTc&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FLLJimctDneUE0XZqbzTc&ofl=club.refr.app&st=Garde%20Manger%20Cafe&sd=It%E2%80%99s%20best%20of%20the%20food%20world%2C%20served%20fresh%20for%20you&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FLLJimctDneUE0XZqbzTcLOGO1664018852676%3Falt%3Dmedia%26token%3D3a212cf8-92e4-4ef4-beb6-cdba46cdbd5d",
            "typeORDER": {
                "exchange": true,
                "COD": true,
                "return": true,
                "delivery": "Citywide",
                "refund": true,
                "logistics": false
            },
            "proCat": [],
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FLLJimctDneUE0XZqbzTc&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FLLJimctDneUE0XZqbzTc&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FLLJimctDneUE0XZqbzTc&ofl=club.refr.app&st=Garde%20Manger%20Cafe&sd=It%E2%80%99s%20best%20of%20the%20food%20world%2C%20served%20fresh%20for%20you&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FLLJimctDneUE0XZqbzTcLOGO1664018852676%3Falt%3Dmedia%26token%3D3a212cf8-92e4-4ef4-beb6-cdba46cdbd5d",
            "loc": [
                {
                    "state": "MH",
                    "zip": "400057",
                    "id": "IND_MH_1664018852188",
                    "lat": 19.104891353014885,
                    "line2": "",
                    "area": "Hanuman Society, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057, India",
                    "region": "Maharashtra",
                    "locality": "Mumbai",
                    "lon": 72.85216181841325,
                    "city": "Mumbai Suburban",
                    "line1": "Shop No 1 , Parmar Housing Society Paranjape B Scheme, Rd Number 1, beside Natural Ice Cream, Vile Parle East",
                    "nation": "IND"
                }
            ]
        },
        {
            "upd": {
                "seconds": 1664185675,
                "nanoseconds": 822000000
            },
            "phone": "8789462212",
            "typeORDER": {
                "exchange": true,
                "COD": false,
                "return": true,
                "refund": true,
                "nationCharge": 0,
                "delivery": "Nationwide",
                "freeStart": 0,
                "freeParcel": false,
                "phoneHide": false,
                "logistics": false,
                "cityCharge": 0
            },
            "shareUrlX1": "https://refrclub.com/o/9bWu",
            "shareUrlB1": "https://refrclub.com/o/f7Zi",
            "proCat": [
                "Nail Paints",
                "Lipstick",
                "Foundation",
                "Primer",
                "Nail Paint Remover",
                "Eyeliner",
                "Serum"
            ],
            "addedDynamicLinkP1": true,
            "shareUrlP1": "https://refrclub.com/o/sFT9",
            "cat": "supermarket",
            "banners": [],
            "sin": {
                "seconds": 1664004000,
                "nanoseconds": 2000000
            },
            "loc": [
                {
                    "city": "Dhanbad",
                    "zip": "826001",
                    "lon": 86.4307947,
                    "line2": "",
                    "area": "B- Block, City Centre, Luby Circular Road, Dhanbad Jharkhand-826001",
                    "state": "JH",
                    "lat": 23.8055236,
                    "locality": "Dhanbad",
                    "nation": "IND",
                    "line1": "Surama Building B- Block, City Centre 3rd Floor, Luby Circular Road, Dhanbad Jharkhand-826001",
                    "id": "IND_JH_1664004000798",
                    "region": "Jharkhand"
                }
            ],
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8hynzyLsQqUcMVBgkVI0&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8hynzyLsQqUcMVBgkVI0&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8hynzyLsQqUcMVBgkVI0&ofl=club.refr.app&st=Neyah&sd=Beauty%20is%20your%20aura%20beauty%20is%20who%20you%20are%20within%20-%20and%20Neyah%20loves%20to%20caress%20each%20bit%20of%20your%20skin%20and%20you!%20Neyah%20adores%20being%20your%20go-to%20makeup%20paradise%20that%20focuses%20on%20making%20your%20skin%20feel%20comfortable%20and%20safe.&si=",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8hynzyLsQqUcMVBgkVI0&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8hynzyLsQqUcMVBgkVI0&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8hynzyLsQqUcMVBgkVI0&ofl=club.refr.app&st=Neyah&sd=Beauty%20is%20your%20aura%20beauty%20is%20who%20you%20are%20within%20-%20and%20Neyah%20loves%20to%20caress%20each%20bit%20of%20your%20skin%20and%20you!%20Neyah%20adores%20being%20your%20go-to%20makeup%20paradise%20that%20focuses%20on%20making%20your%20skin%20feel%20comfortable%20and%20safe.&si=",
            "schedule": {
                "opensDailyE": "23:00",
                "openWedS": "07:00",
                "openSun": false,
                "openFri": true,
                "openThu": true,
                "openMonS": "07:00",
                "openSatE": "23:00",
                "openTueE": "23:00",
                "openMon": true,
                "opensDailyS": "07:00",
                "openThuE": "23:00",
                "opensDaily": true,
                "openWedE": "23:00",
                "openTueS": "07:00",
                "openThuS": "07:00",
                "openSat": true,
                "openFriS": "07:00",
                "openMonE": "23:00",
                "openFriE": "23:00",
                "openSunE": "23:00",
                "openSatS": "07:00",
                "openWed": true,
                "openSunS": "07:00",
                "openTue": true
            },
            "addedDynamicLink": true,
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8hynzyLsQqUcMVBgkVI0LOGO1664004001152?alt=media&token=d226df6d-4917-4b55-9d05-2156c79b145a",
            "subCat": "supermarket-any",
            "about": "Beauty is your aura beauty is who you are within - and Neyah loves to caress each bit of your skin and you! Neyah adores being your go-to makeup paradise that focuses on making your skin feel comfortable and safe.",
            "products": 174,
            "id": "8hynzyLsQqUcMVBgkVI0",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8hynzyLsQqUcMVBgkVI0POST1664004002074?alt=media&token=6e8ff22b-ad20-4eb3-a33c-e233975ead8f",
            "shareUrlV1": "https://refrclub.com/o/rHsN",
            "type": "Onli",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8hynzyLsQqUcMVBgkVI0&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8hynzyLsQqUcMVBgkVI0&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8hynzyLsQqUcMVBgkVI0&ofl=club.refr.app&st=Neyah&sd=Beauty%20is%20your%20aura%20beauty%20is%20who%20you%20are%20within%20-%20and%20Neyah%20loves%20to%20caress%20each%20bit%20of%20your%20skin%20and%20you!%20Neyah%20adores%20being%20your%20go-to%20makeup%20paradise%20that%20focuses%20on%20making%20your%20skin%20feel%20comfortable%20and%20safe.&si=",
            "email": "dhruv@neyah.in",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8hynzyLsQqUcMVBgkVI0&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8hynzyLsQqUcMVBgkVI0&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8hynzyLsQqUcMVBgkVI0&ofl=club.refr.app&st=Neyah&sd=Beauty%20is%20your%20aura%20beauty%20is%20who%20you%20are%20within%20-%20and%20Neyah%20loves%20to%20caress%20each%20bit%20of%20your%20skin%20and%20you!%20Neyah%20adores%20being%20your%20go-to%20makeup%20paradise%20that%20focuses%20on%20making%20your%20skin%20feel%20comfortable%20and%20safe.&si=",
            "by": "wlzgLUBMFYSSlUq4EyBlFccwIRY2",
            "log": {
                "seconds": 1664004000,
                "nanoseconds": 2000000
            },
            "name": "Neyah",
            "cashback": 80
        },
        {
            "shareUrlP1": "https://refrclub.com/o/3Tkc",
            "by": "n1Kbo7vjPTevO4x6fHxnNaeB10x1",
            "sin": {
                "seconds": 1664003730,
                "nanoseconds": 249000000
            },
            "upd": {
                "seconds": 1664260189,
                "nanoseconds": 239000000
            },
            "cat": "salons_and_spa",
            "shareUrlV1": "https://refrclub.com/o/MNGi",
            "banners": [],
            "addedDynamicLinkP1": true,
            "about": "Nails and more ",
            "phone": "9820104520",
            "schedule": {
                "openSatS": "07:00",
                "openThuE": "23:00",
                "openWedE": "23:00",
                "openSatE": "23:00",
                "openSunS": "07:00",
                "openSun": false,
                "openTue": true,
                "openThuS": "07:00",
                "openThu": true,
                "openSunE": "23:00",
                "openMon": true,
                "opensDailyS": "10:30",
                "openFriE": "23:00",
                "openWedS": "07:00",
                "openFri": true,
                "openTueS": "07:00",
                "openFriS": "07:00",
                "openMonE": "23:00",
                "opensDailyE": "08:00",
                "openSat": true,
                "openMonS": "07:00",
                "opensDaily": true,
                "openWed": true,
                "openTueE": "23:00"
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F8NnNq79ptphJeLkIG42N&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8NnNq79ptphJeLkIG42N&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F8NnNq79ptphJeLkIG42N&ofl=club.refr.app&st=Blushington&sd=Nails%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8NnNq79ptphJeLkIG42NLOGO1664003730426%3Falt%3Dmedia%26token%3D07756c3b-27af-47c1-9ab6-158ed1d232d7",
            "email": "meenasheregar@gmail.com",
            "subCat": "sc-salons_and_spa-women_salon",
            "products": 0,
            "typeORDER": {
                "refund": true,
                "COD": true,
                "delivery": "Citywide",
                "exchange": true,
                "logistics": false,
                "return": true
            },
            "type": "Offl",
            "log": {
                "seconds": 1664003730,
                "nanoseconds": 249000000
            },
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F8NnNq79ptphJeLkIG42N&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8NnNq79ptphJeLkIG42N&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F8NnNq79ptphJeLkIG42N&ofl=club.refr.app&st=Blushington&sd=Nails%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8NnNq79ptphJeLkIG42NLOGO1664003730426%3Falt%3Dmedia%26token%3D07756c3b-27af-47c1-9ab6-158ed1d232d7",
            "shareUrlB1": "https://refrclub.com/o/6um5",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8NnNq79ptphJeLkIG42N1664260181083?alt=media&token=f3935f5d-ea70-40d3-aca6-11113033b80f",
            "id": "8NnNq79ptphJeLkIG42N",
            "proCat": [],
            "addedDynamicLink": true,
            "shareUrlX1": "https://refrclub.com/o/FyZL",
            "loc": [
                {
                    "id": "IND_MH_1664003730011",
                    "line2": "",
                    "line1": "Shop no. 001 Bhartiya kala mandal Om Nagar, near J B Nagar",
                    "lon": 72.8655922,
                    "locality": "Mumbai",
                    "state": "MH",
                    "city": "Mumbai Suburban",
                    "region": "Maharashtra",
                    "area": "JB naga",
                    "zip": "400047",
                    "lat": 19.1110621,
                    "nation": "IND"
                }
            ],
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F8NnNq79ptphJeLkIG42N&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8NnNq79ptphJeLkIG42N&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F8NnNq79ptphJeLkIG42N&ofl=club.refr.app&st=Blushington&sd=Nails%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8NnNq79ptphJeLkIG42NLOGO1664003730426%3Falt%3Dmedia%26token%3D07756c3b-27af-47c1-9ab6-158ed1d232d7",
            "name": "Blushington ",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8NnNq79ptphJeLkIG42N1664260173071?alt=media&token=4796f6af-367d-4fd3-8766-5bc0e56c7809",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F8NnNq79ptphJeLkIG42N&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8NnNq79ptphJeLkIG42N&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F8NnNq79ptphJeLkIG42N&ofl=club.refr.app&st=Blushington&sd=Nails%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F8NnNq79ptphJeLkIG42NLOGO1664003730426%3Falt%3Dmedia%26token%3D07756c3b-27af-47c1-9ab6-158ed1d232d7"
        },
        {
            "log": {
                "seconds": 1663942075,
                "nanoseconds": 685000000
            },
            "schedule": {
                "opensDailyS": "11:00",
                "openTue": true,
                "openWedS": "07:00",
                "openMonE": "23:00",
                "openSunS": "07:00",
                "openMonS": "07:00",
                "openWedE": "23:00",
                "openFriS": "07:00",
                "opensDaily": true,
                "openFriE": "23:00",
                "openThu": true,
                "openThuS": "07:00",
                "openSun": false,
                "openTueS": "07:00",
                "openMon": true,
                "openSunE": "23:00",
                "openWed": true,
                "opensDailyE": "23:00",
                "openThuE": "23:00",
                "openSat": true,
                "openSatS": "07:00",
                "openFri": true,
                "openTueE": "23:00",
                "openSatE": "23:00"
            },
            "name": "Aromas",
            "addedDynamicLink": true,
            "subCat": "sc-food_and_beverages-restaurants",
            "products": 0,
            "upd": {
                "seconds": 1664017664,
                "nanoseconds": 805000000
            },
            "about": "Pure veg Indian & Chinese",
            "banners": [],
            "sin": {
                "seconds": 1663942075,
                "nanoseconds": 685000000
            },
            "loc": [
                {
                    "lat": 19.21023779999999,
                    "city": "Mumbai Suburban",
                    "line1": "Shop no 13, Emp 31, Neptune, Near Gundecha school",
                    "zip": "400101",
                    "locality": "Mumbai",
                    "area": "Neptune kandivali",
                    "id": "IND_MH_1663942074764",
                    "region": "Maharashtra",
                    "nation": "IND",
                    "state": "MH",
                    "line2": "",
                    "lon": 72.87728059999999
                }
            ],
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F1g31EPxEwHxKvb7fWq4e&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F1g31EPxEwHxKvb7fWq4e&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F1g31EPxEwHxKvb7fWq4e&ofl=club.refr.app&st=Aromas&sd=Pure%20veg%20Indian%20%26%20Chinese&si=",
            "cat": "food_and_beverages",
            "phone": "9136317139",
            "addedDynamicLinkP1": true,
            "email": "aromaspureveg@gmail.com",
            "id": "1g31EPxEwHxKvb7fWq4e",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F1g31EPxEwHxKvb7fWq4eLOGO1663942075920?alt=media&token=05957abd-c6c5-47ec-a4d7-ca7167bdeab7",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F1g31EPxEwHxKvb7fWq4e&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F1g31EPxEwHxKvb7fWq4e&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F1g31EPxEwHxKvb7fWq4e&ofl=club.refr.app&st=Aromas&sd=Pure%20veg%20Indian%20%26%20Chinese&si=",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F1g31EPxEwHxKvb7fWq4e1664017657907?alt=media&token=e0981008-cfd6-4753-909d-ca97c3d7bb2a",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F1g31EPxEwHxKvb7fWq4e&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F1g31EPxEwHxKvb7fWq4e&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F1g31EPxEwHxKvb7fWq4e&ofl=club.refr.app&st=Aromas&sd=Pure%20veg%20Indian%20%26%20Chinese&si=",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F1g31EPxEwHxKvb7fWq4e&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F1g31EPxEwHxKvb7fWq4e&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F1g31EPxEwHxKvb7fWq4e&ofl=club.refr.app&st=Aromas&sd=Pure%20veg%20Indian%20%26%20Chinese&si=",
            "proCat": [],
            "shareUrlX1": "https://refrclub.com/o/aGpv",
            "shareUrlP1": "https://refrclub.com/o/5fdd",
            "type": "Both",
            "shareUrlB1": "https://refrclub.com/o/q1Jk",
            "by": "l5du6WRh8lcFKtnk7jLPNHjyLtt2",
            "shareUrlV1": "https://refrclub.com/o/hE62",
            "typeORDER": {
                "return": true,
                "COD": true,
                "delivery": "Citywide",
                "refund": true,
                "exchange": true,
                "logistics": false
            }
        },
        {
            "shareUrlV1": "https://refrclub.com/o/Rfq3",
            "addedDynamicLinkP1": true,
            "sin": {
                "seconds": 1663932587,
                "nanoseconds": 887000000
            },
            "shareUrlX1": "https://refrclub.com/o/HYkb",
            "addedDynamicLink": true,
            "schedule": {
                "openSatE": "23:00",
                "openMonS": "07:00",
                "openSat": true,
                "openSatS": "07:00",
                "openWedS": "07:00",
                "openWed": true,
                "opensDaily": true,
                "openTue": true,
                "openThu": true,
                "openFriE": "23:00",
                "openSunS": "07:00",
                "openMon": true,
                "openTueS": "07:00",
                "openMonE": "23:00",
                "openThuE": "23:00",
                "openTueE": "23:00",
                "openSunE": "23:00",
                "openThuS": "07:00",
                "openFriS": "07:00",
                "opensDailyE": "20:30",
                "openWedE": "23:00",
                "openSun": false,
                "openFri": true,
                "opensDailyS": "11:00"
            },
            "id": "2NXyWIgMMF8Uh2mgua9q",
            "name": "Mini Delhi ",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2NXyWIgMMF8Uh2mgua9q1664260159777?alt=media&token=6692a9f4-ab10-420a-84c1-6f8dbccc10fa",
            "phone": "8591882650",
            "shareUrlB1": "https://refrclub.com/o/AaQU",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2NXyWIgMMF8Uh2mgua9qPOST1663932589705?alt=media&token=7e8da4e8-28e3-4096-9f1d-0d37f7a54c1d",
            "by": "3VfyPgkAHldmrJORRbLVTDOBHG03",
            "loc": [
                {
                    "region": "Maharashtra",
                    "state": "MH",
                    "line2": "",
                    "locality": "Mumbai",
                    "line1": "Shop no. 9, Crescent building, Makhwana road, Marol, Andheri East  ",
                    "city": "Mumbai Suburban",
                    "id": "IND_MH_1663932587718",
                    "lat": 19.1106256,
                    "nation": "IND",
                    "area": "Makhwana ",
                    "lon": 72.8815125,
                    "zip": "400059"
                }
            ],
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F2NXyWIgMMF8Uh2mgua9q&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F2NXyWIgMMF8Uh2mgua9q&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F2NXyWIgMMF8Uh2mgua9q&ofl=club.refr.app&st=Mini%20Delhi&sd=From%20Streets%20of%20Delhi&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F2NXyWIgMMF8Uh2mgua9qLOGO1663932587990%3Falt%3Dmedia%26token%3D70a176ad-a139-4e0e-bbe4-0f8b239be92c",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F2NXyWIgMMF8Uh2mgua9q&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F2NXyWIgMMF8Uh2mgua9q&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F2NXyWIgMMF8Uh2mgua9q&ofl=club.refr.app&st=Mini%20Delhi&sd=From%20Streets%20of%20Delhi&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F2NXyWIgMMF8Uh2mgua9qLOGO1663932587990%3Falt%3Dmedia%26token%3D70a176ad-a139-4e0e-bbe4-0f8b239be92c",
            "email": "minidelhi0311@gmail.com",
            "upd": {
                "seconds": 1664260167,
                "nanoseconds": 857000000
            },
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F2NXyWIgMMF8Uh2mgua9q&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F2NXyWIgMMF8Uh2mgua9q&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F2NXyWIgMMF8Uh2mgua9q&ofl=club.refr.app&st=Mini%20Delhi&sd=From%20Streets%20of%20Delhi&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F2NXyWIgMMF8Uh2mgua9qLOGO1663932587990%3Falt%3Dmedia%26token%3D70a176ad-a139-4e0e-bbe4-0f8b239be92c",
            "banners": [],
            "about": "From Streets of Delhi ",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F2NXyWIgMMF8Uh2mgua9q&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F2NXyWIgMMF8Uh2mgua9q&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F2NXyWIgMMF8Uh2mgua9q&ofl=club.refr.app&st=Mini%20Delhi&sd=From%20Streets%20of%20Delhi&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F2NXyWIgMMF8Uh2mgua9qLOGO1663932587990%3Falt%3Dmedia%26token%3D70a176ad-a139-4e0e-bbe4-0f8b239be92c",
            "shareUrlP1": "https://refrclub.com/o/xBQ7",
            "products": 77,
            "log": {
                "seconds": 1663932587,
                "nanoseconds": 887000000
            },
            "subCat": "sc-food_and_beverages-restaurants",
            "type": "Both",
            "cat": "food_and_beverages",
            "typeORDER": {
                "exchange": true,
                "COD": true,
                "logistics": false,
                "refund": true,
                "return": true,
                "delivery": "Citywide"
            },
            "proCat": [
                "Combo Meal",
                "Delhi Chole Kulcha",
                "Delhi Chaap",
                "Chinese",
                "Momos",
                "Stuff Kulcha"
            ]
        },
        {
            "upd": {
                "seconds": 1664176663,
                "nanoseconds": 444000000
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FteSrDTNWzX7HmK6lpS48&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FteSrDTNWzX7HmK6lpS48&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FteSrDTNWzX7HmK6lpS48&ofl=club.refr.app&st=Ella%20Foods&sd=Ella%20Foods%20re-envisions%20the%20way%20of%20food%20with%20innovation%20%26%20science%20making%20food%20healthier%20%26%20smarter%20for%20today%E2%80%99s%20world.%20Not%20only%20do%20we%20safeguard%20its%20naturally%20flourishing%20nutrients%20with%20cutting%20edge%20science%20that%20are%20otherwise%20lost%20in%20contemporary%20processing%20but%20also%20make%20food%20perfectly%20safe%20with%20microbial%20free%20purity.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FteSrDTNWzX7HmK6lpS48LOGO1663917332741%3Falt%3Dmedia%26token%3D84eae611-b369-45ad-b476-b80fda310459",
            "subCat": "supermarket-any",
            "phone": "9972937801",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FteSrDTNWzX7HmK6lpS48&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FteSrDTNWzX7HmK6lpS48&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FteSrDTNWzX7HmK6lpS48&ofl=club.refr.app&st=Ella%20Foods&sd=Ella%20Foods%20re-envisions%20the%20way%20of%20food%20with%20innovation%20%26%20science%20making%20food%20healthier%20%26%20smarter%20for%20today%E2%80%99s%20world.%20Not%20only%20do%20we%20safeguard%20its%20naturally%20flourishing%20nutrients%20with%20cutting%20edge%20science%20that%20are%20otherwise%20lost%20in%20contemporary%20processing%20but%20also%20make%20food%20perfectly%20safe%20with%20microbial%20free%20purity.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FteSrDTNWzX7HmK6lpS48LOGO1663917332741%3Falt%3Dmedia%26token%3D84eae611-b369-45ad-b476-b80fda310459",
            "proCat": [
                "Pure Spices & Masalas",
                "Nuts",
                "Seasonings",
                "Beverages Mix",
                "Instant Food"
            ],
            "addedDynamicLink": true,
            "products": 5,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FteSrDTNWzX7HmK6lpS48&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FteSrDTNWzX7HmK6lpS48&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FteSrDTNWzX7HmK6lpS48&ofl=club.refr.app&st=Ella%20Foods&sd=Ella%20Foods%20re-envisions%20the%20way%20of%20food%20with%20innovation%20%26%20science%20making%20food%20healthier%20%26%20smarter%20for%20today%E2%80%99s%20world.%20Not%20only%20do%20we%20safeguard%20its%20naturally%20flourishing%20nutrients%20with%20cutting%20edge%20science%20that%20are%20otherwise%20lost%20in%20contemporary%20processing%20but%20also%20make%20food%20perfectly%20safe%20with%20microbial%20free%20purity.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FteSrDTNWzX7HmK6lpS48LOGO1663917332741%3Falt%3Dmedia%26token%3D84eae611-b369-45ad-b476-b80fda310459",
            "log": {
                "seconds": 1663917332,
                "nanoseconds": 83000000
            },
            "cat": "supermarket",
            "about": "Ella Foods re-envisions the way of food with innovation & science making food healthier & smarter for today’s world. Not only do we safeguard its naturally flourishing nutrients with cutting edge science that are otherwise lost in contemporary processing but also make food perfectly safe with microbial free purity.",
            "type": "Onli",
            "shareUrlV1": "https://refrclub.com/o/uCxw",
            "addedDynamicLinkP1": true,
            "sin": {
                "seconds": 1663917332,
                "nanoseconds": 83000000
            },
            "by": "eW3tp0hiTPYSHXy0mYVbUuetfKa2",
            "email": "bhuvanesh1@ellafoods.in",
            "loc": [
                {
                    "state": "KA",
                    "id": "IND_KA_1663917332234",
                    "line2": "",
                    "region": "Karnataka",
                    "nation": "IND",
                    "lat": 12.989096,
                    "area": "Ella Foods Private Limited Plot B-11, Phase 3, Innova Agri Bio Park,KIADB Industrial Area Malur, Karnataka, India 563130",
                    "lon": 77.92003299999999,
                    "line1": "Ella Foods Private Limited Plot B-11, Phase 3, Innova Agri Bio Park,KIADB Industrial Area Malur, Karnataka, India 563130",
                    "zip": "563130",
                    "city": "Kolar",
                    "locality": "Malur"
                }
            ],
            "banners": [],
            "typeORDER": {
                "delivery": "Nationwide",
                "exchange": false,
                "refund": false,
                "COD": false,
                "logistics": false,
                "return": false,
                "phoneHide": true
            },
            "name": "Ella Foods",
            "cashback": 100,
            "shareUrlB1": "https://refrclub.com/o/78Dj",
            "shareUrlP1": "https://refrclub.com/o/mEDa",
            "shareUrlX1": "https://refrclub.com/o/b1qz",
            "schedule": {
                "openWed": true,
                "openTue": true,
                "openSunS": "07:00",
                "opensDailyS": "07:00",
                "openSunE": "23:00",
                "openThuS": "07:00",
                "openFri": true,
                "openMonE": "23:00",
                "openThu": true,
                "openWedE": "23:00",
                "openTueE": "23:00",
                "openSatE": "23:00",
                "openMonS": "07:00",
                "openSatS": "07:00",
                "openFriE": "23:00",
                "openTueS": "07:00",
                "opensDailyE": "23:00",
                "opensDaily": true,
                "openWedS": "07:00",
                "openSat": true,
                "openSun": false,
                "openMon": true,
                "openFriS": "07:00",
                "openThuE": "23:00"
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FteSrDTNWzX7HmK6lpS48&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FteSrDTNWzX7HmK6lpS48&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FteSrDTNWzX7HmK6lpS48&ofl=club.refr.app&st=Ella%20Foods&sd=Ella%20Foods%20re-envisions%20the%20way%20of%20food%20with%20innovation%20%26%20science%20making%20food%20healthier%20%26%20smarter%20for%20today%E2%80%99s%20world.%20Not%20only%20do%20we%20safeguard%20its%20naturally%20flourishing%20nutrients%20with%20cutting%20edge%20science%20that%20are%20otherwise%20lost%20in%20contemporary%20processing%20but%20also%20make%20food%20perfectly%20safe%20with%20microbial%20free%20purity.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FteSrDTNWzX7HmK6lpS48LOGO1663917332741%3Falt%3Dmedia%26token%3D84eae611-b369-45ad-b476-b80fda310459",
            "id": "teSrDTNWzX7HmK6lpS48",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FteSrDTNWzX7HmK6lpS48LOGO1663917332741?alt=media&token=84eae611-b369-45ad-b476-b80fda310459",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FteSrDTNWzX7HmK6lpS48POST1663917334722?alt=media&token=4e2e743f-aca2-44f1-9623-e44a46d0e891"
        },
        {
            "subCat": "sc-fashion_brand-womens_fashion",
            "log": {
                "seconds": 1663853828,
                "nanoseconds": 571000000
            },
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2Fw8AQNK8Lx141arEXcP9n&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fw8AQNK8Lx141arEXcP9n&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fw8AQNK8Lx141arEXcP9n&ofl=club.refr.app&st=Eleven%20%3A%20Eleven&sd=The%20Fashion%20House&si=",
            "id": "w8AQNK8Lx141arEXcP9n",
            "shareUrlV1": "https://refrclub.com/o/QaQJ",
            "shareUrlX1": "https://refrclub.com/o/odZ3",
            "proCat": [],
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw8AQNK8Lx141arEXcP9n1664201254264?alt=media&token=aec7ad1c-7678-48aa-95d8-19cfed964300",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2Fw8AQNK8Lx141arEXcP9n&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fw8AQNK8Lx141arEXcP9n&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fw8AQNK8Lx141arEXcP9n&ofl=club.refr.app&st=Eleven%20%3A%20Eleven&sd=The%20Fashion%20House&si=",
            "addedDynamicLinkP1": true,
            "loc": [
                {
                    "state": "MH",
                    "nation": "IND",
                    "lat": 19.1452281,
                    "area": "Eleven eleven the fas",
                    "id": "IND_MH_1663853826686",
                    "line2": "",
                    "lon": 72.8233041,
                    "region": "Maharashtra",
                    "line1": "Eleven Eleven (The Fashion House), Lokhandwala Complex, Andheri West, Mumbai, Maharashtra, India",
                    "city": "Mumbai Suburban",
                    "locality": "Mumbai",
                    "zip": "400053"
                }
            ],
            "cat": "fashion_brand",
            "sin": {
                "seconds": 1663853828,
                "nanoseconds": 571000000
            },
            "type": "Offl",
            "name": "Eleven : Eleven",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2Fw8AQNK8Lx141arEXcP9n&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fw8AQNK8Lx141arEXcP9n&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fw8AQNK8Lx141arEXcP9n&ofl=club.refr.app&st=Eleven%20%3A%20Eleven&sd=The%20Fashion%20House&si=",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2Fw8AQNK8Lx141arEXcP9n&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fw8AQNK8Lx141arEXcP9n&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fw8AQNK8Lx141arEXcP9n&ofl=club.refr.app&st=Eleven%20%3A%20Eleven&sd=The%20Fashion%20House&si=",
            "email": "Rohan.mehta2005@gmail.com",
            "phone": "7506365755",
            "upd": {
                "seconds": 1664201269,
                "nanoseconds": 552000000
            },
            "shareUrlB1": "https://refrclub.com/o/zF1G",
            "about": "The Fashion House",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw8AQNK8Lx141arEXcP9n1664201262020?alt=media&token=29b76e62-3c0a-45c6-91d1-adbcce91bd1d",
            "products": 0,
            "shareUrlP1": "https://refrclub.com/o/vqxE",
            "typeORDER": {
                "logistics": false,
                "COD": true,
                "return": true,
                "delivery": "Citywide",
                "refund": true,
                "exchange": true
            },
            "by": "i5iTYm8qNYRTwSnps1RHK3Au8602",
            "banners": [],
            "addedDynamicLink": true,
            "schedule": {
                "opensDailyS": "11:30",
                "openThu": true,
                "openThuE": "23:00",
                "openWed": true,
                "openSunE": "23:00",
                "openSunS": "07:00",
                "openWedE": "23:00",
                "opensDaily": true,
                "openTueE": "23:00",
                "opensDailyE": "21:30",
                "openFriE": "23:00",
                "openTue": true,
                "openSun": false,
                "openMon": true,
                "openThuS": "07:00",
                "openMonS": "07:00",
                "openMonE": "23:00",
                "openSatE": "23:00",
                "openWedS": "07:00",
                "openFriS": "07:00",
                "openSat": true,
                "openSatS": "07:00",
                "openTueS": "07:00",
                "openFri": true
            }
        },
        {
            "by": "6lTmb0fobOZcW0w8oeI36ebz4dF3",
            "products": 0,
            "typeORDER": {
                "COD": true,
                "return": true,
                "exchange": true,
                "logistics": false,
                "refund": true,
                "delivery": "Citywide"
            },
            "proCat": [],
            "subCat": "sc-salons_and_spa-unisex_salon",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F5bIbpZdxiO7sKFLPeDaF&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F5bIbpZdxiO7sKFLPeDaF&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F5bIbpZdxiO7sKFLPeDaF&ofl=club.refr.app&st=Enchante%20Unisex%20Salon&sd=Enchante%20offers%20top%20notch%20salon%20services%20for%20your%20hair%2C%20skin%2C%20hand%20and%20feet&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F5bIbpZdxiO7sKFLPeDaFLOGO1663845022349%3Falt%3Dmedia%26token%3Db2bbe3c6-7436-4ce2-9b84-d0abd4773d37",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F5bIbpZdxiO7sKFLPeDaF&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F5bIbpZdxiO7sKFLPeDaF&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F5bIbpZdxiO7sKFLPeDaF&ofl=club.refr.app&st=Enchante%20Unisex%20Salon&sd=Enchante%20offers%20top%20notch%20salon%20services%20for%20your%20hair%2C%20skin%2C%20hand%20and%20feet&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F5bIbpZdxiO7sKFLPeDaFLOGO1663845022349%3Falt%3Dmedia%26token%3Db2bbe3c6-7436-4ce2-9b84-d0abd4773d37",
            "sin": {
                "seconds": 1663845022,
                "nanoseconds": 969000000
            },
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F5bIbpZdxiO7sKFLPeDaF1663851442030?alt=media&token=6fdea601-87f7-4642-95db-7c3ebcefbe1f",
            "type": "Offl",
            "schedule": {
                "openMon": true,
                "openWed": true,
                "openThu": true,
                "openSunE": "23:00",
                "openThuE": "23:00",
                "opensDailyE": "20:00",
                "openFri": true,
                "opensDaily": true,
                "openMonE": "23:00",
                "openThuS": "07:00",
                "openSatS": "07:00",
                "opensDailyS": "10:00",
                "openSunS": "07:00",
                "openWedE": "23:00",
                "openSun": false,
                "openSatE": "23:00",
                "openMonS": "07:00",
                "openSat": true,
                "openWedS": "07:00",
                "openTue": true,
                "openTueS": "07:00",
                "openFriS": "07:00",
                "openTueE": "23:00",
                "openFriE": "23:00"
            },
            "id": "5bIbpZdxiO7sKFLPeDaF",
            "log": {
                "seconds": 1663845022,
                "nanoseconds": 969000000
            },
            "email": "Appointment@enchantesalon.in",
            "addedDynamicLink": true,
            "loc": [
                {
                    "lon": 72.82380669999999,
                    "lat": 19.1449135,
                    "line1": "3, RNA Arcade, Lokhandwala Complex, Lokhandwala, Lokhandwala",
                    "city": "Mumbai Suburban",
                    "id": "IND_MH_1663845021412",
                    "area": "Enchante the",
                    "state": "MH",
                    "locality": "Mumbai",
                    "nation": "IND",
                    "zip": "400053",
                    "region": "Maharashtra",
                    "line2": ""
                }
            ],
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F5bIbpZdxiO7sKFLPeDaF1663851448731?alt=media&token=79046815-56bd-4feb-aa57-234684e6eefd",
            "shareUrlP1": "https://refrclub.com/o/tBk9",
            "banners": [],
            "phone": "9076076333",
            "name": "Enchante Unisex Salon",
            "shareUrlB1": "https://refrclub.com/o/PqH5",
            "about": "Enchante offers top notch salon services for your hair, skin, hand and feet",
            "shareUrlX1": "https://refrclub.com/o/zQVv",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F5bIbpZdxiO7sKFLPeDaF&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F5bIbpZdxiO7sKFLPeDaF&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F5bIbpZdxiO7sKFLPeDaF&ofl=club.refr.app&st=Enchante%20Unisex%20Salon&sd=Enchante%20offers%20top%20notch%20salon%20services%20for%20your%20hair%2C%20skin%2C%20hand%20and%20feet&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F5bIbpZdxiO7sKFLPeDaFLOGO1663845022349%3Falt%3Dmedia%26token%3Db2bbe3c6-7436-4ce2-9b84-d0abd4773d37",
            "upd": {
                "seconds": 1663851453,
                "nanoseconds": 286000000
            },
            "cat": "salons_and_spa",
            "shareUrlV1": "https://refrclub.com/o/JmBb",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F5bIbpZdxiO7sKFLPeDaF&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F5bIbpZdxiO7sKFLPeDaF&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F5bIbpZdxiO7sKFLPeDaF&ofl=club.refr.app&st=Enchante%20Unisex%20Salon&sd=Enchante%20offers%20top%20notch%20salon%20services%20for%20your%20hair%2C%20skin%2C%20hand%20and%20feet&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F5bIbpZdxiO7sKFLPeDaFLOGO1663845022349%3Falt%3Dmedia%26token%3Db2bbe3c6-7436-4ce2-9b84-d0abd4773d37",
            "addedDynamicLinkP1": true
        },
        {
            "phone": "9820647062",
            "sin": {
                "seconds": 1663836440,
                "nanoseconds": 928000000
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F5dvyydTJAMZN4n8WTUcI1664201284471?alt=media&token=25a7f5cc-8057-4efd-919e-a7cf3476a7d1",
            "id": "5dvyydTJAMZN4n8WTUcI",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F5dvyydTJAMZN4n8WTUcI&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F5dvyydTJAMZN4n8WTUcI&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F5dvyydTJAMZN4n8WTUcI&ofl=club.refr.app&st=Foot%20Balance&sd=Happy%20Feet%2C%20Healthy%20You&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F5dvyydTJAMZN4n8WTUcILOGO1663836441109%3Falt%3Dmedia%26token%3D57552483-5b15-4cbd-bcb2-f20dd13916ad",
            "products": 0,
            "shareUrlX1": "https://refrclub.com/o/Y5o7",
            "by": "pv8GEEbEZreYGQvujcsgRBjzjyH2",
            "name": "Foot Balance ",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F5dvyydTJAMZN4n8WTUcI&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F5dvyydTJAMZN4n8WTUcI&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F5dvyydTJAMZN4n8WTUcI&ofl=club.refr.app&st=Foot%20Balance&sd=Happy%20Feet%2C%20Healthy%20You&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F5dvyydTJAMZN4n8WTUcILOGO1663836441109%3Falt%3Dmedia%26token%3D57552483-5b15-4cbd-bcb2-f20dd13916ad",
            "subCat": "sc-healthcare-physiotherapy",
            "email": "info@footessentials.com",
            "shareUrlV1": "https://refrclub.com/o/9sKj",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F5dvyydTJAMZN4n8WTUcI&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F5dvyydTJAMZN4n8WTUcI&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F5dvyydTJAMZN4n8WTUcI&ofl=club.refr.app&st=Foot%20Balance&sd=Happy%20Feet%2C%20Healthy%20You&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F5dvyydTJAMZN4n8WTUcILOGO1663836441109%3Falt%3Dmedia%26token%3D57552483-5b15-4cbd-bcb2-f20dd13916ad",
            "addedDynamicLinkP1": true,
            "upd": {
                "seconds": 1664201291,
                "nanoseconds": 984000000
            },
            "shareUrlB1": "https://refrclub.com/o/MrnK",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F5dvyydTJAMZN4n8WTUcI1664201276514?alt=media&token=472dcea9-8b99-4a17-9b7a-66618607af4a",
            "banners": [],
            "shareUrlP1": "https://refrclub.com/o/Z23S",
            "loc": [
                {
                    "state": "MH",
                    "region": "Maharashtra",
                    "line1": "B2M2 Anand Amrut",
                    "area": "Foot Balance",
                    "zip": "400057",
                    "lat": 19.1018496,
                    "city": "Mumbai Suburban",
                    "id": "IND_MH_1663836440711",
                    "nation": "IND",
                    "line2": "",
                    "lon": 72.8451552,
                    "locality": "Mumbai"
                }
            ],
            "typeORDER": {
                "refund": true,
                "exchange": true,
                "delivery": "Citywide",
                "return": true,
                "COD": true,
                "logistics": false
            },
            "schedule": {
                "openSun": false,
                "openSat": true,
                "openTueE": "23:00",
                "openSunS": "07:00",
                "openMonE": "23:00",
                "openMonS": "07:00",
                "openThuE": "23:00",
                "openSunE": "23:00",
                "openSatE": "23:00",
                "openThu": true,
                "openFriE": "23:00",
                "openTueS": "07:00",
                "openSatS": "07:00",
                "opensDailyS": "10:00",
                "openTue": true,
                "openFriS": "07:00",
                "openMon": true,
                "openThuS": "07:00",
                "openWedE": "23:00",
                "openFri": true,
                "opensDaily": true,
                "opensDailyE": "19:00",
                "openWedS": "07:00",
                "openWed": true
            },
            "type": "Offl",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F5dvyydTJAMZN4n8WTUcI&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F5dvyydTJAMZN4n8WTUcI&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F5dvyydTJAMZN4n8WTUcI&ofl=club.refr.app&st=Foot%20Balance&sd=Happy%20Feet%2C%20Healthy%20You&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252F5dvyydTJAMZN4n8WTUcILOGO1663836441109%3Falt%3Dmedia%26token%3D57552483-5b15-4cbd-bcb2-f20dd13916ad",
            "about": "Happy Feet, Healthy You",
            "addedDynamicLink": true,
            "cat": "healthcare",
            "proCat": [],
            "log": {
                "seconds": 1663836440,
                "nanoseconds": 928000000
            }
        },
        {
            "products": 0,
            "name": "Make Me Smile",
            "shareUrlV1": "https://refrclub.com/o/QdbZ",
            "phone": "9987307369",
            "id": "dqO6KY1XzuDDflotQLnV",
            "sin": {
                "seconds": 1663832592,
                "nanoseconds": 690000000
            },
            "addedDynamicLink": true,
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FdqO6KY1XzuDDflotQLnV&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FdqO6KY1XzuDDflotQLnV&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FdqO6KY1XzuDDflotQLnV&ofl=club.refr.app&st=Make%20Me%20Smile&sd=Where%20Smiles%20Come%20Alive&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FdqO6KY1XzuDDflotQLnVLOGO1663832592877%3Falt%3Dmedia%26token%3Db4c4c122-901f-4b27-b26a-fea72df64a56",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdqO6KY1XzuDDflotQLnV1663852501398?alt=media&token=0806f8cb-68ac-4ca0-996e-3526a5428756",
            "log": {
                "seconds": 1663832592,
                "nanoseconds": 690000000
            },
            "email": "makemesmile.in@gmail.com",
            "subCat": "sc-healthcare-dentist",
            "shareUrlP1": "https://refrclub.com/o/jLYD",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FdqO6KY1XzuDDflotQLnV&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FdqO6KY1XzuDDflotQLnV&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FdqO6KY1XzuDDflotQLnV&ofl=club.refr.app&st=Make%20Me%20Smile&sd=Where%20Smiles%20Come%20Alive&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FdqO6KY1XzuDDflotQLnVLOGO1663832592877%3Falt%3Dmedia%26token%3Db4c4c122-901f-4b27-b26a-fea72df64a56",
            "banners": [],
            "schedule": {
                "openSatS": "07:00",
                "opensDaily": true,
                "openFriS": "07:00",
                "openMon": true,
                "openWedS": "07:00",
                "openFriE": "23:00",
                "openSatE": "23:00",
                "openSunS": "07:00",
                "opensDailyE": "21:00",
                "openThu": true,
                "openMonE": "23:00",
                "openThuE": "23:00",
                "openSunE": "23:00",
                "openSat": true,
                "openWedE": "23:00",
                "openTueE": "23:00",
                "opensDailyS": "10:00",
                "openTue": true,
                "openFri": true,
                "openThuS": "07:00",
                "openTueS": "07:00",
                "openWed": true,
                "openMonS": "07:00",
                "openSun": false
            },
            "shareUrlX1": "https://refrclub.com/o/43eT",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FdqO6KY1XzuDDflotQLnV&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FdqO6KY1XzuDDflotQLnV&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FdqO6KY1XzuDDflotQLnV&ofl=club.refr.app&st=Make%20Me%20Smile&sd=Where%20Smiles%20Come%20Alive&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FdqO6KY1XzuDDflotQLnVLOGO1663832592877%3Falt%3Dmedia%26token%3Db4c4c122-901f-4b27-b26a-fea72df64a56",
            "by": "hrQgtsJbWlWlBYyRx6rSiHOZ7Jx1",
            "loc": [
                {
                    "nation": "IND",
                    "state": "MH",
                    "area": "Shop no 1, B-26, Wellington, Shastri Nagar Lane 2, Shastri Nagar, Andheri West, Mumbai, Maharashtra 400047, India",
                    "line1": "Shop no 1, B-26, Wellington, Shastri Nagar Lane 2, Shastri Nagar, Andheri West, Mumbai, Maharashtra 400047, India",
                    "lon": 72.82900784457438,
                    "lat": 19.138780127062933,
                    "id": "IND_MH_1663832592298",
                    "zip": "400047",
                    "city": "Mumbai Suburban",
                    "region": "Maharashtra",
                    "line2": "",
                    "locality": "Mumbai"
                }
            ],
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdqO6KY1XzuDDflotQLnV1663852518433?alt=media&token=eb0b57e0-4b3c-4941-875d-0cbc12e08678",
            "cashback": 100,
            "upd": {
                "seconds": 1663852523,
                "nanoseconds": 284000000
            },
            "cat": "healthcare",
            "shareUrlB1": "https://refrclub.com/o/TeKL",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FdqO6KY1XzuDDflotQLnV&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FdqO6KY1XzuDDflotQLnV&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FdqO6KY1XzuDDflotQLnV&ofl=club.refr.app&st=Make%20Me%20Smile&sd=Where%20Smiles%20Come%20Alive&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FdqO6KY1XzuDDflotQLnVLOGO1663832592877%3Falt%3Dmedia%26token%3Db4c4c122-901f-4b27-b26a-fea72df64a56",
            "about": "Where Smiles Come Alive",
            "typeORDER": {
                "refund": true,
                "exchange": true,
                "logistics": false,
                "delivery": "Citywide",
                "COD": true,
                "return": true
            },
            "proCat": [],
            "type": "Offl",
            "addedDynamicLinkP1": true
        },
        {
            "log": {
                "seconds": 1663828392,
                "nanoseconds": 351000000
            },
            "name": "Unlock style",
            "cashback": 50,
            "type": "Offl",
            "about": "All in one salon for men",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHHRf5mPN7wEjQ6DwxQ6T1663852454910?alt=media&token=656e72d0-b1f2-494f-83b4-e727434f8222",
            "schedule": {
                "openWed": true,
                "openTue": true,
                "openSatE": "23:00",
                "openFri": true,
                "openWedE": "23:00",
                "openThuE": "23:00",
                "opensDailyE": "22:00",
                "openSat": true,
                "openTueS": "07:00",
                "openTueE": "23:00",
                "openMonS": "07:00",
                "openSunS": "07:00",
                "openMonE": "23:00",
                "openFriE": "23:00",
                "opensDaily": true,
                "openSatS": "07:00",
                "opensDailyS": "09:00",
                "openMon": true,
                "openSun": false,
                "openFriS": "07:00",
                "openThu": true,
                "openThuS": "07:00",
                "openWedS": "07:00",
                "openSunE": "23:00"
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FHHRf5mPN7wEjQ6DwxQ6T&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FHHRf5mPN7wEjQ6DwxQ6T&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FHHRf5mPN7wEjQ6DwxQ6T&ofl=club.refr.app&st=Unlock%20style&sd=All%20in%20one%20salon%20for%20men&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FHHRf5mPN7wEjQ6DwxQ6TLOGO1663828392649%3Falt%3Dmedia%26token%3D67264677-9de7-4831-9337-8488eb3fcae5",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FHHRf5mPN7wEjQ6DwxQ6T&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FHHRf5mPN7wEjQ6DwxQ6T&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FHHRf5mPN7wEjQ6DwxQ6T&ofl=club.refr.app&st=Unlock%20style&sd=All%20in%20one%20salon%20for%20men&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FHHRf5mPN7wEjQ6DwxQ6TLOGO1663828392649%3Falt%3Dmedia%26token%3D67264677-9de7-4831-9337-8488eb3fcae5",
            "shareUrlP1": "https://refrclub.com/o/KajH",
            "sin": {
                "seconds": 1663828392,
                "nanoseconds": 351000000
            },
            "subCat": "sc-salons_and_spa-men_salon",
            "proCat": [],
            "shareUrlV1": "https://refrclub.com/o/yhFQ",
            "by": "b0buXkL8xQTEYY1hUVx5x7WXHU22",
            "products": 0,
            "shareUrlX1": "https://refrclub.com/o/3nbT",
            "cat": "salons_and_spa",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHHRf5mPN7wEjQ6DwxQ6T1663852465486?alt=media&token=ef82226e-4f67-4e91-91fa-586c30172acb",
            "shareUrlB1": "https://refrclub.com/o/cLBQ",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FHHRf5mPN7wEjQ6DwxQ6T&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FHHRf5mPN7wEjQ6DwxQ6T&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FHHRf5mPN7wEjQ6DwxQ6T&ofl=club.refr.app&st=Unlock%20style&sd=All%20in%20one%20salon%20for%20men&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FHHRf5mPN7wEjQ6DwxQ6TLOGO1663828392649%3Falt%3Dmedia%26token%3D67264677-9de7-4831-9337-8488eb3fcae5",
            "typeORDER": {
                "COD": true,
                "refund": true,
                "exchange": true,
                "delivery": "Citywide",
                "return": true,
                "logistics": false
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FHHRf5mPN7wEjQ6DwxQ6T&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FHHRf5mPN7wEjQ6DwxQ6T&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FHHRf5mPN7wEjQ6DwxQ6T&ofl=club.refr.app&st=Unlock%20style&sd=All%20in%20one%20salon%20for%20men&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FHHRf5mPN7wEjQ6DwxQ6TLOGO1663828392649%3Falt%3Dmedia%26token%3D67264677-9de7-4831-9337-8488eb3fcae5",
            "upd": {
                "seconds": 1663852470,
                "nanoseconds": 256000000
            },
            "banners": [],
            "phone": "9819662204",
            "addedDynamicLinkP1": true,
            "loc": [
                {
                    "zip": "400053",
                    "line2": "",
                    "id": "IND_MH_1663828392236",
                    "locality": "Mumbai",
                    "line1": "Shop No:12, 13 Om Apartment Sundervan, Near Laxmi Industrial Estate, Sundervan Complex, Andheri West, Sundervan Complex, Shastri Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                    "lat": 19.137298022857355,
                    "lon": 72.82949158266375,
                    "city": "Mumbai Suburban",
                    "area": "Shop No:11,12, Om Apartment Sundervan, Near Laxmi Industrial Estate, Sundervan Complex, Andheri West, Sundervan Complex, Shastri Nagar, Andheri West, Mumbai, Maharashtra 400053, India",
                    "state": "MH",
                    "region": "Maharashtra",
                    "nation": "IND"
                }
            ],
            "addedDynamicLink": true,
            "id": "HHRf5mPN7wEjQ6DwxQ6T",
            "email": "Girish_011@hotmail.com"
        },
        {
            "typeORDER": {
                "refund": true,
                "delivery": "Citywide",
                "COD": true,
                "logistics": false,
                "exchange": true,
                "return": true
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmQM2uLqlfZdBVwIp4FOS1663750590861?alt=media&token=6d605a96-3f3f-43cc-b466-502e2e000f74",
            "log": {
                "seconds": 1663691157,
                "nanoseconds": 449000000
            },
            "by": "mXc5tF21S7br9xT2PZbsGyW59EO2",
            "name": "Lookout Salon ",
            "schedule": {
                "openThuS": "07:00",
                "openSun": false,
                "openTue": true,
                "openTueE": "23:00",
                "openSat": true,
                "openWedE": "23:00",
                "openSatE": "23:00",
                "openSatS": "07:00",
                "openThuE": "23:00",
                "openFriE": "23:00",
                "opensDaily": true,
                "openWedS": "07:00",
                "opensDailyE": "22:00",
                "openWed": true,
                "openMon": true,
                "opensDailyS": "09:00",
                "openFriS": "07:00",
                "openMonE": "23:00",
                "openFri": true,
                "openTueS": "07:00",
                "openThu": true,
                "openMonS": "07:00",
                "openSunS": "07:00",
                "openSunE": "23:00"
            },
            "addedDynamicLinkP1": true,
            "addedDynamicLink": true,
            "email": "lookoutsalon@gmail.com",
            "subCat": "sc-salons_and_spa-unisex_salon",
            "sin": {
                "seconds": 1663691157,
                "nanoseconds": 449000000
            },
            "upd": {
                "seconds": 1663750612,
                "nanoseconds": 31000000
            },
            "products": 0,
            "phone": "9819402381",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FmQM2uLqlfZdBVwIp4FOS&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FmQM2uLqlfZdBVwIp4FOS&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FmQM2uLqlfZdBVwIp4FOS&ofl=club.refr.app&st=Lookout%20Salon&sd=Be%20your%20best%20version&si=",
            "cat": "salons_and_spa",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmQM2uLqlfZdBVwIp4FOS1663750601701?alt=media&token=9351439e-b514-4efb-95f4-2c863da17588",
            "id": "mQM2uLqlfZdBVwIp4FOS",
            "shareUrlX1": "https://refrclub.com/o/5JRs",
            "about": "Be your best version ",
            "banners": [],
            "loc": [
                {
                    "id": "IND_MH_1663691157134",
                    "nation": "IND",
                    "line2": "",
                    "area": "Lookout salon",
                    "region": "Maharashtra",
                    "locality": "Mumbai",
                    "zip": "400092",
                    "state": "MH",
                    "city": "Mumbai Suburban",
                    "lon": 72.8411395,
                    "line1": "Shop 1 & 2, Sun Sumit Enclave, Opp Satva Hotel, New link road",
                    "lat": 19.2220907
                }
            ],
            "type": "Offl",
            "shareUrlV1": "https://refrclub.com/o/AYJf",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FmQM2uLqlfZdBVwIp4FOS&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FmQM2uLqlfZdBVwIp4FOS&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FmQM2uLqlfZdBVwIp4FOS&ofl=club.refr.app&st=Lookout%20Salon&sd=Be%20your%20best%20version&si=",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FmQM2uLqlfZdBVwIp4FOS&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FmQM2uLqlfZdBVwIp4FOS&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FmQM2uLqlfZdBVwIp4FOS&ofl=club.refr.app&st=Lookout%20Salon&sd=Be%20your%20best%20version&si=",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FmQM2uLqlfZdBVwIp4FOS&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FmQM2uLqlfZdBVwIp4FOS&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FmQM2uLqlfZdBVwIp4FOS&ofl=club.refr.app&st=Lookout%20Salon&sd=Be%20your%20best%20version&si=",
            "proCat": [],
            "shareUrlP1": "https://refrclub.com/o/gWc8",
            "shareUrlB1": "https://refrclub.com/o/bgvp"
        },
        {
            "type": "Offl",
            "cat": "healthcare",
            "by": "g4VVqpGbg1OWad87T2hr5rYu5xs1",
            "email": "drkejaljain@gmail.com",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FfS3Hh6dY4IOjKkgG9FfG&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FfS3Hh6dY4IOjKkgG9FfG&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FfS3Hh6dY4IOjKkgG9FfG&ofl=club.refr.app&st=DENTIQ&sd=Root%20Canal%2C%20Aesthetics%2C%20Pathology%2C%20Implants&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FfS3Hh6dY4IOjKkgG9FfGLOGO1663687072407%3Falt%3Dmedia%26token%3D6c040a94-8f90-4c00-8a7a-6c789feb7cda",
            "banners": [],
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FfS3Hh6dY4IOjKkgG9FfG&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FfS3Hh6dY4IOjKkgG9FfG&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FfS3Hh6dY4IOjKkgG9FfG&ofl=club.refr.app&st=DENTIQ&sd=Root%20Canal%2C%20Aesthetics%2C%20Pathology%2C%20Implants&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FfS3Hh6dY4IOjKkgG9FfGLOGO1663687072407%3Falt%3Dmedia%26token%3D6c040a94-8f90-4c00-8a7a-6c789feb7cda",
            "phone": "8850430151",
            "shareUrlB1": "https://refrclub.com/o/iiZo",
            "upd": {
                "seconds": 1663828385,
                "nanoseconds": 212000000
            },
            "proCat": [],
            "products": 0,
            "addedDynamicLinkP1": true,
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FfS3Hh6dY4IOjKkgG9FfG&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FfS3Hh6dY4IOjKkgG9FfG&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FfS3Hh6dY4IOjKkgG9FfG&ofl=club.refr.app&st=DENTIQ&sd=Root%20Canal%2C%20Aesthetics%2C%20Pathology%2C%20Implants&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FfS3Hh6dY4IOjKkgG9FfGLOGO1663687072407%3Falt%3Dmedia%26token%3D6c040a94-8f90-4c00-8a7a-6c789feb7cda",
            "about": "Root Canal, Aesthetics, Pathology, Implants ",
            "loc": [
                {
                    "locality": "Mumbai",
                    "nation": "IND",
                    "city": "Mumbai Suburban",
                    "line2": "",
                    "zip": "400092",
                    "area": "Dentiq boriva",
                    "line1": "Shop 14, Shiv Darshan CHS, Shimpoli road, near veg treat",
                    "region": "Maharashtra",
                    "id": "IND_MH_1663687071782",
                    "lat": 19.2225871,
                    "lon": 72.84783949999999,
                    "state": "MH"
                }
            ],
            "shareUrlX1": "https://refrclub.com/o/kkGi",
            "shareUrlV1": "https://refrclub.com/o/MPJE",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FfS3Hh6dY4IOjKkgG9FfG1663828380826?alt=media&token=da453de1-6494-499a-aff9-37c1775c21ba",
            "schedule": {
                "openWedS": "07:00",
                "openSunS": "07:00",
                "openSunE": "23:00",
                "opensDaily": true,
                "openWedE": "23:00",
                "opensDailyE": "21:00",
                "openFriS": "07:00",
                "openThu": true,
                "openMon": true,
                "openMonE": "23:00",
                "openThuE": "23:00",
                "openFri": true,
                "openTue": true,
                "openSun": false,
                "openMonS": "07:00",
                "openTueE": "23:00",
                "openSat": true,
                "openSatS": "07:00",
                "opensDailyS": "09:00",
                "openWed": true,
                "openSatE": "23:00",
                "openThuS": "07:00",
                "openTueS": "07:00",
                "openFriE": "23:00"
            },
            "addedDynamicLink": true,
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FfS3Hh6dY4IOjKkgG9FfG&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FfS3Hh6dY4IOjKkgG9FfG&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FfS3Hh6dY4IOjKkgG9FfG&ofl=club.refr.app&st=DENTIQ&sd=Root%20Canal%2C%20Aesthetics%2C%20Pathology%2C%20Implants&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FfS3Hh6dY4IOjKkgG9FfGLOGO1663687072407%3Falt%3Dmedia%26token%3D6c040a94-8f90-4c00-8a7a-6c789feb7cda",
            "shareUrlP1": "https://refrclub.com/o/G5TS",
            "sin": {
                "seconds": 1663687072,
                "nanoseconds": 61000000
            },
            "id": "fS3Hh6dY4IOjKkgG9FfG",
            "log": {
                "seconds": 1663687072,
                "nanoseconds": 61000000
            },
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FfS3Hh6dY4IOjKkgG9FfG1663828372655?alt=media&token=0439bdad-c7aa-404a-93cb-31cbd03d6b2c",
            "subCat": "sc-healthcare-dentist",
            "name": "DENTIQ",
            "typeORDER": {
                "logistics": false,
                "COD": true,
                "exchange": true,
                "refund": true,
                "delivery": "Citywide",
                "return": true
            }
        },
        {
            "sin": {
                "seconds": 1663682234,
                "nanoseconds": 428000000
            },
            "phone": "9833779127",
            "subCat": "sc-salons_and_spa-unisex_salon",
            "upd": {
                "seconds": 1663682234,
                "nanoseconds": 428000000
            },
            "about": "The salon offers all services such as hair cut treatment etc",
            "type": "Offl",
            "proCat": [],
            "typeORDER": {
                "return": true,
                "exchange": true,
                "logistics": false,
                "refund": true,
                "delivery": "Citywide",
                "COD": true
            },
            "cat": "salons_and_spa",
            "addedDynamicLinkP1": true,
            "shareUrlX1": "https://refrclub.com/o/6UYU",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FR178CyXwBG5qj69Si0fQ&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FR178CyXwBG5qj69Si0fQ&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FR178CyXwBG5qj69Si0fQ&ofl=club.refr.app&st=SV%20Glamup%20Salon&sd=The%20salon%20offers%20all%20services%20such%20as%20hair%20cut%20treatment%20etc&si=",
            "cashback": 30,
            "loc": [
                {
                    "lon": 72.8634499,
                    "lat": 19.1742539,
                    "nation": "IND",
                    "locality": "Mumbai",
                    "area": "Shop Number 4, Yashodham Shop Center, near Royal Challenge Restaurant, Yashodham, Goregaon, Mumbai, Maharashtra 400063, India",
                    "line1": "Shop Number 3, Yashodham Shop Center, near Royal Challenge Restaurant, Yashodham, Goregaon, Mumbai, Maharashtra 400063, India",
                    "state": "MH",
                    "line2": "",
                    "zip": "400063",
                    "id": "IND_MH_1663682233211",
                    "region": "Maharashtra",
                    "city": "Mumbai Suburban"
                }
            ],
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FR178CyXwBG5qj69Si0fQLOGO1663682234083?alt=media&token=004fc12f-4c49-4280-a8a9-37fae324da9e",
            "schedule": {
                "openThu": true,
                "openMonE": "23:00",
                "opensDaily": true,
                "openSunS": "07:00",
                "openMonS": "07:00",
                "openTue": true,
                "openSatE": "23:00",
                "openWed": true,
                "openTueS": "07:00",
                "openFriE": "23:00",
                "openWedE": "23:00",
                "openFriS": "07:00",
                "openSat": true,
                "openThuS": "07:00",
                "openSun": false,
                "opensDailyS": "09:30",
                "openWedS": "07:00",
                "openSatS": "07:00",
                "opensDailyE": "21:30",
                "openMon": true,
                "openThuE": "23:00",
                "openTueE": "23:00",
                "openSunE": "23:00",
                "openFri": true
            },
            "email": "vijaythakur1087@gmail.com",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FR178CyXwBG5qj69Si0fQPOST1663682237154?alt=media&token=cd3790af-6a8b-4a30-9225-0baafb0639d0",
            "shareUrlP1": "https://refrclub.com/o/p3kT",
            "id": "R178CyXwBG5qj69Si0fQ",
            "products": 0,
            "log": {
                "seconds": 1663682234,
                "nanoseconds": 428000000
            },
            "name": "SV Glamup Salon",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FR178CyXwBG5qj69Si0fQ&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FR178CyXwBG5qj69Si0fQ&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FR178CyXwBG5qj69Si0fQ&ofl=club.refr.app&st=SV%20Glamup%20Salon&sd=The%20salon%20offers%20all%20services%20such%20as%20hair%20cut%20treatment%20etc&si=",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FR178CyXwBG5qj69Si0fQ&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FR178CyXwBG5qj69Si0fQ&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FR178CyXwBG5qj69Si0fQ&ofl=club.refr.app&st=SV%20Glamup%20Salon&sd=The%20salon%20offers%20all%20services%20such%20as%20hair%20cut%20treatment%20etc&si=",
            "shareUrlB1": "https://refrclub.com/o/3A2X",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FR178CyXwBG5qj69Si0fQ&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FR178CyXwBG5qj69Si0fQ&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FR178CyXwBG5qj69Si0fQ&ofl=club.refr.app&st=SV%20Glamup%20Salon&sd=The%20salon%20offers%20all%20services%20such%20as%20hair%20cut%20treatment%20etc&si=",
            "by": "qw78F2p1pqZNaCecmbuSFJqk3o22",
            "banners": [],
            "shareUrlV1": "https://refrclub.com/o/VPRZ",
            "addedDynamicLink": true
        },
        {
            "subCat": "sc-salons_and_spa-unisex_salon",
            "shareUrlX1": "https://refrclub.com/o/Ck5W",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FgaTpEPlppIO6PgQJjLJ4&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FgaTpEPlppIO6PgQJjLJ4&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FgaTpEPlppIO6PgQJjLJ4&ofl=club.refr.app&st=LOOKOUT%20Unisex%20Salon&sd=Salon%20%26%20Academy&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FgaTpEPlppIO6PgQJjLJ4LOGO1663673746121%3Falt%3Dmedia%26token%3Dabca4c0f-88d4-4dcd-b3b6-332e5b8001e8",
            "schedule": {
                "openMonE": "23:00",
                "openMon": true,
                "openSun": false,
                "openSunS": "07:00",
                "openSatS": "07:00",
                "openMonS": "07:00",
                "openThuE": "23:00",
                "openTueE": "23:00",
                "openTue": true,
                "openThuS": "07:00",
                "opensDailyE": "22:00",
                "openFriS": "07:00",
                "openFriE": "23:00",
                "openWed": true,
                "openWedE": "23:00",
                "openSat": true,
                "openFri": true,
                "openSatE": "23:00",
                "opensDailyS": "09:24",
                "openWedS": "07:00",
                "openThu": true,
                "opensDaily": true,
                "openSunE": "23:00",
                "openTueS": "07:00"
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FgaTpEPlppIO6PgQJjLJ41663677400589?alt=media&token=ae1190af-6422-4804-83fc-a070ca2e6a02",
            "sin": {
                "seconds": 1663673745,
                "nanoseconds": 932000000
            },
            "id": "gaTpEPlppIO6PgQJjLJ4",
            "upd": {
                "seconds": 1663677456,
                "nanoseconds": 917000000
            },
            "shareUrlV1": "https://refrclub.com/o/UCcC",
            "name": "LOOKOUT Unisex Salon",
            "by": "bg1uu1YkJEgNgQqlRiLBIU50OCe2",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FgaTpEPlppIO6PgQJjLJ4&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FgaTpEPlppIO6PgQJjLJ4&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FgaTpEPlppIO6PgQJjLJ4&ofl=club.refr.app&st=LOOKOUT%20Unisex%20Salon&sd=Salon%20%26%20Academy&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FgaTpEPlppIO6PgQJjLJ4LOGO1663673746121%3Falt%3Dmedia%26token%3Dabca4c0f-88d4-4dcd-b3b6-332e5b8001e8",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FgaTpEPlppIO6PgQJjLJ41663677408672?alt=media&token=63a03755-666a-491d-9850-5a04017e9a5e",
            "shareUrlB1": "https://refrclub.com/o/4JiQ",
            "about": "Salon & Academy ",
            "phone": "7506237986",
            "addedDynamicLink": true,
            "products": 0,
            "typeORDER": {
                "exchange": true,
                "delivery": "Citywide",
                "return": true,
                "refund": true,
                "logistics": false,
                "COD": true
            },
            "banners": [],
            "log": {
                "seconds": 1663673745,
                "nanoseconds": 932000000
            },
            "proCat": [],
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FgaTpEPlppIO6PgQJjLJ4&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FgaTpEPlppIO6PgQJjLJ4&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FgaTpEPlppIO6PgQJjLJ4&ofl=club.refr.app&st=LOOKOUT%20Unisex%20Salon&sd=Salon%20%26%20Academy&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FgaTpEPlppIO6PgQJjLJ4LOGO1663673746121%3Falt%3Dmedia%26token%3Dabca4c0f-88d4-4dcd-b3b6-332e5b8001e8",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FgaTpEPlppIO6PgQJjLJ4&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FgaTpEPlppIO6PgQJjLJ4&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FgaTpEPlppIO6PgQJjLJ4&ofl=club.refr.app&st=LOOKOUT%20Unisex%20Salon&sd=Salon%20%26%20Academy&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FgaTpEPlppIO6PgQJjLJ4LOGO1663673746121%3Falt%3Dmedia%26token%3Dabca4c0f-88d4-4dcd-b3b6-332e5b8001e8",
            "type": "Offl",
            "cat": "salons_and_spa",
            "loc": [
                {
                    "city": "Mumbai Suburban",
                    "line2": "",
                    "id": "IND_MH_1663673745620",
                    "lat": 19.212214,
                    "zip": "400067",
                    "state": "MH",
                    "area": "Lookout salon",
                    "region": "Maharashtra",
                    "line1": "Shop 8-9, Shubkamna CHS, Near Sukh Sagar Hotel",
                    "nation": "IND",
                    "locality": "Mumbai",
                    "lon": 72.841771
                }
            ],
            "addedDynamicLinkP1": true,
            "shareUrlP1": "https://refrclub.com/o/vsJv",
            "email": "lookoutsalonunisexacademy@gmail.com"
        },
        {
            "vFan": 1,
            "loc": [
                {
                    "region": "Maharashtra",
                    "city": "Mumbai Suburban",
                    "zip": "400064",
                    "id": "IND_MH_1663669196735",
                    "lat": 19.1823462,
                    "nation": "IND",
                    "locality": "Mumbai",
                    "state": "MH",
                    "line1": "Shop no.8, KIRAN TOWER, unity complex New Link Rd",
                    "line2": "",
                    "lon": 72.8373315,
                    "area": "9, KIRAN TOWER, New Link Rd, opp. Toyota Showroom, Malad, Chincholi Bunder, Malad West, Mumbai, Maharashtra 400064, India"
                }
            ],
            "products": 0,
            "by": "3YlNNcf8rhSzOrbzVP4ZoXrgDad2",
            "addedDynamicLinkP1": true,
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FypM68iF3Da42w3ZdvxE11663674508493?alt=media&token=6541dc84-d1ae-4cc0-a583-b499094c3500",
            "vOrdr": 1,
            "shareUrlX1": "https://refrclub.com/o/z2zY",
            "typeORDER": {
                "refund": true,
                "delivery": "Citywide",
                "exchange": true,
                "COD": true,
                "logistics": false,
                "return": true
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FypM68iF3Da42w3ZdvxE1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FypM68iF3Da42w3ZdvxE1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FypM68iF3Da42w3ZdvxE1&ofl=club.refr.app&st=Ethereal%20Salon&sd=The%20salon%20is%20highly%20specialized%20in%20offering%20all%20types%20of%20services%20like%20haircut%20treatment%20and%20others&si=",
            "sin": {
                "seconds": 1663669193,
                "nanoseconds": 861000000
            },
            "subCat": "sc-salons_and_spa-unisex_salon",
            "vGave": 20,
            "shareUrlV1": "https://refrclub.com/o/HsFv",
            "proCat": [],
            "cat": "salons_and_spa",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FypM68iF3Da42w3ZdvxE1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FypM68iF3Da42w3ZdvxE1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FypM68iF3Da42w3ZdvxE1&ofl=club.refr.app&st=Ethereal%20Salon&sd=The%20salon%20is%20highly%20specialized%20in%20offering%20all%20types%20of%20services%20like%20haircut%20treatment%20and%20others&si=",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FypM68iF3Da42w3ZdvxE11663674499135?alt=media&token=b20a438c-59c4-48ce-b9fd-3d294ae26faa",
            "schedule": {
                "openSun": false,
                "openThu": true,
                "openFri": true,
                "openThuS": "07:00",
                "opensDaily": true,
                "openWedE": "23:00",
                "opensDailyS": "10:00",
                "openWedS": "07:00",
                "openSat": true,
                "openTueE": "23:00",
                "openFriS": "07:00",
                "openFriE": "23:00",
                "openMonE": "23:00",
                "openSatE": "23:00",
                "openWed": true,
                "openSunE": "23:00",
                "openMon": true,
                "openTueS": "07:00",
                "opensDailyE": "22:00",
                "openTue": true,
                "openSatS": "07:00",
                "openSunS": "07:00",
                "openMonS": "07:00",
                "openThuE": "23:00"
            },
            "vEarn": 400,
            "phone": "7304876101",
            "id": "ypM68iF3Da42w3ZdvxE1",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FypM68iF3Da42w3ZdvxE1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FypM68iF3Da42w3ZdvxE1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FypM68iF3Da42w3ZdvxE1&ofl=club.refr.app&st=Ethereal%20Salon&sd=The%20salon%20is%20highly%20specialized%20in%20offering%20all%20types%20of%20services%20like%20haircut%20treatment%20and%20others&si=",
            "log": {
                "seconds": 1663669193,
                "nanoseconds": 861000000
            },
            "upd": {
                "seconds": 1663674514,
                "nanoseconds": 495000000
            },
            "shareUrlP1": "https://refrclub.com/o/AFkw",
            "name": "Ethereal Salon ",
            "cashback": 40,
            "banners": [],
            "email": "Theetherealsalon@gmail.com",
            "type": "Offl",
            "addedDynamicLink": true,
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FypM68iF3Da42w3ZdvxE1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FypM68iF3Da42w3ZdvxE1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FypM68iF3Da42w3ZdvxE1&ofl=club.refr.app&st=Ethereal%20Salon&sd=The%20salon%20is%20highly%20specialized%20in%20offering%20all%20types%20of%20services%20like%20haircut%20treatment%20and%20others&si=",
            "about": "The salon is highly specialized in offering all types of services like haircut treatment and others",
            "shareUrlB1": "https://refrclub.com/o/5hLn"
        },
        {
            "cat": "food_and_beverages",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FoE29lpvtCUAAIzyUfZdZ&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FoE29lpvtCUAAIzyUfZdZ&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FoE29lpvtCUAAIzyUfZdZ&ofl=club.refr.app&st=Akkad%20Bakkad%20Bombay%20Boom&sd=Sandwiches%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoE29lpvtCUAAIzyUfZdZLOGO1663668417745%3Falt%3Dmedia%26token%3D895fae3d-4a8d-446c-a161-2b1b9c6d2972",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FoE29lpvtCUAAIzyUfZdZ&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FoE29lpvtCUAAIzyUfZdZ&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FoE29lpvtCUAAIzyUfZdZ&ofl=club.refr.app&st=Akkad%20Bakkad%20Bombay%20Boom&sd=Sandwiches%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoE29lpvtCUAAIzyUfZdZLOGO1663668417745%3Falt%3Dmedia%26token%3D895fae3d-4a8d-446c-a161-2b1b9c6d2972",
            "upd": {
                "seconds": 1663674537,
                "nanoseconds": 345000000
            },
            "by": "xrCzEYPwsZQtgCFyAHt0IojOSpk1",
            "email": "omvishwasrao1611@gmail.com",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoE29lpvtCUAAIzyUfZdZ1663674530959?alt=media&token=d71475c0-1a09-4ab8-abd6-229c5e7210b0",
            "shareUrlB1": "https://refrclub.com/o/RAUg",
            "products": 0,
            "banners": [],
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FoE29lpvtCUAAIzyUfZdZ&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FoE29lpvtCUAAIzyUfZdZ&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FoE29lpvtCUAAIzyUfZdZ&ofl=club.refr.app&st=Akkad%20Bakkad%20Bombay%20Boom&sd=Sandwiches%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoE29lpvtCUAAIzyUfZdZLOGO1663668417745%3Falt%3Dmedia%26token%3D895fae3d-4a8d-446c-a161-2b1b9c6d2972",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoE29lpvtCUAAIzyUfZdZ1663669745480?alt=media&token=9679565b-46fb-4207-b5fe-1db13819c3fc",
            "addedDynamicLink": true,
            "sin": {
                "seconds": 1663668417,
                "nanoseconds": 595000000
            },
            "log": {
                "seconds": 1663668417,
                "nanoseconds": 595000000
            },
            "subCat": "sc-food_and_beverages-cafe",
            "id": "oE29lpvtCUAAIzyUfZdZ",
            "shareUrlX1": "https://refrclub.com/o/3U7B",
            "type": "Both",
            "schedule": {
                "openFriS": "07:00",
                "openSatS": "07:00",
                "openWedE": "23:00",
                "openWedS": "07:00",
                "openSun": false,
                "openSunS": "07:00",
                "openSatE": "23:00",
                "openTueS": "07:00",
                "opensDailyS": "12:00",
                "opensDaily": true,
                "openFriE": "23:00",
                "openMonS": "07:00",
                "opensDailyE": "23:00",
                "openThuE": "23:00",
                "openTueE": "23:00",
                "openMon": true,
                "openTue": true,
                "openSunE": "23:00",
                "openThuS": "07:00",
                "openFri": true,
                "openMonE": "23:00",
                "openSat": true,
                "openThu": true,
                "openWed": true
            },
            "name": "Akkad Bakkad Bombay Boom ",
            "loc": [
                {
                    "zip": "400101",
                    "lon": 72.87216599385567,
                    "state": "MH",
                    "area": "Shop No. 31 / 32 / 33 Centrium Mall, Kandivali, Alika Nagar, Gokul Nagar, Kandivali East, Mumbai, Maharashtra 400101, India",
                    "nation": "IND",
                    "locality": "Mumbai",
                    "line1": "Shop no. 6, Pushkar Accord Bldg, Lokhandwala Complex, Kandivali (East)",
                    "line2": "",
                    "region": "Maharashtra",
                    "city": "Mumbai Suburban",
                    "lat": 19.19662900852479,
                    "id": "IND_MH_1663668417104"
                }
            ],
            "addedDynamicLinkP1": true,
            "proCat": [],
            "phone": "9152654270",
            "typeORDER": {
                "delivery": "Citywide",
                "logistics": false,
                "exchange": true,
                "refund": true,
                "return": true,
                "COD": true
            },
            "shareUrlP1": "https://refrclub.com/o/xf4Z",
            "about": "Sandwiches and more ",
            "shareUrlV1": "https://refrclub.com/o/aQuP",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FoE29lpvtCUAAIzyUfZdZ&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FoE29lpvtCUAAIzyUfZdZ&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FoE29lpvtCUAAIzyUfZdZ&ofl=club.refr.app&st=Akkad%20Bakkad%20Bombay%20Boom&sd=Sandwiches%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoE29lpvtCUAAIzyUfZdZLOGO1663668417745%3Falt%3Dmedia%26token%3D895fae3d-4a8d-446c-a161-2b1b9c6d2972"
        },
        {
            "shareUrlP1": "https://refrclub.com/o/6ShS",
            "log": {
                "seconds": 1663667525,
                "nanoseconds": 942000000
            },
            "id": "KsEzydTfIopczwVxj3c1",
            "addedDynamicLink": true,
            "type": "Both",
            "loc": [
                {
                    "lat": 19.196610893247975,
                    "area": "No. 34, Lokhandwala Rd, Kandivali, Alika Nagar, Gokul Nagar, Kandivali East, Mumbai, Maharashtra 400101, India",
                    "state": "MH",
                    "line1": "Shop no 37, Ground Floor, Centrium Shopping Centre Akurli Road, Lokhandwala, Circle, Kandivali East",
                    "locality": "Mumbai",
                    "nation": "IND",
                    "line2": "",
                    "id": "IND_MH_1663667525634",
                    "zip": "400101",
                    "lon": 72.87235120433002,
                    "city": "Mumbai Suburban",
                    "region": "Maharashtra"
                }
            ],
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FKsEzydTfIopczwVxj3c11663674545361?alt=media&token=94ca87d7-439a-41e2-be7f-aba2f6344803",
            "banners": [
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FKsEzydTfIopczwVxj3c11664437063153?alt=media&token=4e78392f-c8e2-43c6-9c9f-ad1f0e7e9379",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FKsEzydTfIopczwVxj3c11664437086610?alt=media&token=9b09d3c8-5a30-459b-bca1-61795d624bae"
            ],
            "shareUrlV1": "https://refrclub.com/o/NwXA",
            "email": "rotigrill1@gmail.com",
            "upd": {
                "seconds": 1664437092,
                "nanoseconds": 839000000
            },
            "schedule": {
                "opensDailyE": "23:30",
                "openSatS": "07:00",
                "openWedE": "23:00",
                "openFri": true,
                "openWedS": "07:00",
                "opensDaily": true,
                "openMonS": "07:00",
                "openSun": false,
                "openSunE": "23:00",
                "openTue": true,
                "openSatE": "23:00",
                "openMon": true,
                "openWed": true,
                "openThuE": "23:00",
                "openFriE": "23:00",
                "openThu": true,
                "openTueS": "07:00",
                "opensDailyS": "11:30",
                "openSat": true,
                "openTueE": "23:00",
                "openThuS": "07:00",
                "openSunS": "07:00",
                "openFriS": "07:00",
                "openMonE": "23:00"
            },
            "about": "Indian Tandoor and Chinese restaurant ",
            "phone": "7700987786",
            "name": "Roti and Grill",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FKsEzydTfIopczwVxj3c1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FKsEzydTfIopczwVxj3c1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FKsEzydTfIopczwVxj3c1&ofl=club.refr.app&st=Roti%20and%20Grill&sd=Indian%20Tandoor%20and%20Chinese%20restaurant&si=",
            "typeORDER": {
                "return": false,
                "COD": false,
                "logistics": false,
                "delivery": "Citywide",
                "exchange": false,
                "refund": false
            },
            "proCat": [],
            "by": "qP033MEWkgbxHEmS51y5XVe7Qh43",
            "shareUrlX1": "https://refrclub.com/o/4aHB",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FKsEzydTfIopczwVxj3c1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FKsEzydTfIopczwVxj3c1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FKsEzydTfIopczwVxj3c1&ofl=club.refr.app&st=Roti%20and%20Grill&sd=Indian%20Tandoor%20and%20Chinese%20restaurant&si=",
            "cat": "food_and_beverages",
            "addedDynamicLinkP1": true,
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FKsEzydTfIopczwVxj3c1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FKsEzydTfIopczwVxj3c1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FKsEzydTfIopczwVxj3c1&ofl=club.refr.app&st=Roti%20and%20Grill&sd=Indian%20Tandoor%20and%20Chinese%20restaurant&si=",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FKsEzydTfIopczwVxj3c1&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FKsEzydTfIopczwVxj3c1&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FKsEzydTfIopczwVxj3c1&ofl=club.refr.app&st=Roti%20and%20Grill&sd=Indian%20Tandoor%20and%20Chinese%20restaurant&si=",
            "subCat": "sc-food_and_beverages-restaurants",
            "shareUrlB1": "https://refrclub.com/o/1YiW",
            "sin": {
                "seconds": 1663667525,
                "nanoseconds": 942000000
            },
            "products": 0,
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FKsEzydTfIopczwVxj3c11663669723319?alt=media&token=18aa33b3-f8a5-438a-bce7-4e5ab765f037"
        },
        {
            "addedDynamicLinkP1": true,
            "shareUrlX1": "https://refrclub.com/o/9NdD",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F5JeZqZ5BCPzO0jLwWoYl&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F5JeZqZ5BCPzO0jLwWoYl&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F5JeZqZ5BCPzO0jLwWoYl&ofl=club.refr.app&st=The%20Shivaay%20Cake%20and%20Bake&sd=Love%20at%201st%20Bite&si=",
            "banners": [],
            "loc": [
                {
                    "lat": 19.1963161,
                    "region": "Maharashtra",
                    "line2": "",
                    "nation": "IND",
                    "city": "Mumbai Suburban",
                    "state": "MH",
                    "locality": "Mumbai",
                    "lon": 72.872303,
                    "area": "Shop No 37, 1st Floor, Centrium Mall, opp. Lokhandwala Circle, Kandivali, Alika Nagar, Lokhandwala Twp, Kandivali East, Mumbai, Maharashtra 400101, India",
                    "line1": "Shop 41,Centrium mall, ground floor, lokhandwala complex, kandivali east",
                    "id": "IND_MH_1663666106773",
                    "zip": "400101"
                }
            ],
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F5JeZqZ5BCPzO0jLwWoYl&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F5JeZqZ5BCPzO0jLwWoYl&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F5JeZqZ5BCPzO0jLwWoYl&ofl=club.refr.app&st=The%20Shivaay%20Cake%20and%20Bake&sd=Love%20at%201st%20Bite&si=",
            "shareUrlP1": "https://refrclub.com/o/5bPP",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F5JeZqZ5BCPzO0jLwWoYl1663666519819?alt=media&token=f796f951-f9b7-4f44-b54f-683ce22b4b8c",
            "phone": "7700006522",
            "subCat": "sc-food_and_beverages-bakery",
            "email": "mukta_shukla2000@yahoo.com",
            "about": "Love at 1st Bite",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F5JeZqZ5BCPzO0jLwWoYl1663669407892?alt=media&token=31847c60-23a8-45e2-97a9-388188593e6c",
            "type": "Both",
            "cat": "food_and_beverages",
            "shareUrlB1": "https://refrclub.com/o/bmP7",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F5JeZqZ5BCPzO0jLwWoYl&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F5JeZqZ5BCPzO0jLwWoYl&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F5JeZqZ5BCPzO0jLwWoYl&ofl=club.refr.app&st=The%20Shivaay%20Cake%20and%20Bake&sd=Love%20at%201st%20Bite&si=",
            "schedule": {
                "openSunS": "07:00",
                "openSunE": "23:00",
                "opensDailyE": "12:00",
                "openThu": true,
                "openTueS": "07:00",
                "openThuS": "07:00",
                "opensDailyS": "09:00",
                "openWedE": "23:00",
                "opensDaily": true,
                "openMonE": "23:00",
                "openThuE": "23:00",
                "openFri": true,
                "openFriE": "23:00",
                "openSatE": "23:00",
                "openSun": false,
                "openSat": true,
                "openWedS": "07:00",
                "openMon": true,
                "openMonS": "07:00",
                "openTue": true,
                "openSatS": "07:00",
                "openWed": true,
                "openFriS": "07:00",
                "openTueE": "23:00"
            },
            "typeORDER": {
                "refund": false,
                "return": false,
                "logistics": false,
                "delivery": "Citywide",
                "exchange": false,
                "COD": false
            },
            "proCat": [],
            "shareUrlV1": "https://refrclub.com/o/KJYa",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F5JeZqZ5BCPzO0jLwWoYl&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F5JeZqZ5BCPzO0jLwWoYl&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F5JeZqZ5BCPzO0jLwWoYl&ofl=club.refr.app&st=The%20Shivaay%20Cake%20and%20Bake&sd=Love%20at%201st%20Bite&si=",
            "addedDynamicLink": true,
            "id": "5JeZqZ5BCPzO0jLwWoYl",
            "sin": {
                "seconds": 1663666108,
                "nanoseconds": 103000000
            },
            "log": {
                "seconds": 1663666108,
                "nanoseconds": 103000000
            },
            "upd": {
                "seconds": 1663669413,
                "nanoseconds": 950000000
            },
            "products": 0,
            "name": "The Shivaay Cake and Bake",
            "by": "Gxi4qrBmtyM393vrYSFnytTxoAA3"
        },
        {
            "subCat": "sc-food_and_beverages-restaurants",
            "typeORDER": {
                "COD": false,
                "delivery": "Citywide",
                "refund": false,
                "return": false,
                "logistics": false,
                "exchange": false
            },
            "products": 0,
            "sin": {
                "seconds": 1663665357,
                "nanoseconds": 631000000
            },
            "phone": "7700001264",
            "upd": {
                "seconds": 1663669551,
                "nanoseconds": 98000000
            },
            "log": {
                "seconds": 1663665357,
                "nanoseconds": 631000000
            },
            "shareUrlP1": "https://refrclub.com/o/WCo8",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FMzrwAQAJJ49fA541SZP0&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FMzrwAQAJJ49fA541SZP0&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FMzrwAQAJJ49fA541SZP0&ofl=club.refr.app&st=The%20Shivaay&sd=Pure%20Veg%20fine%20dine%20restaurant&si=",
            "shareUrlX1": "https://refrclub.com/o/Dgor",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FMzrwAQAJJ49fA541SZP0&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FMzrwAQAJJ49fA541SZP0&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FMzrwAQAJJ49fA541SZP0&ofl=club.refr.app&st=The%20Shivaay&sd=Pure%20Veg%20fine%20dine%20restaurant&si=",
            "name": "The Shivaay",
            "cat": "food_and_beverages",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FMzrwAQAJJ49fA541SZP0&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FMzrwAQAJJ49fA541SZP0&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FMzrwAQAJJ49fA541SZP0&ofl=club.refr.app&st=The%20Shivaay&sd=Pure%20Veg%20fine%20dine%20restaurant&si=",
            "addedDynamicLinkP1": true,
            "about": "Pure Veg fine dine restaurant",
            "proCat": [],
            "by": "N9kGoEgP7wN0VZfNHAJOBpiqquE3",
            "id": "MzrwAQAJJ49fA541SZP0",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FMzrwAQAJJ49fA541SZP0&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FMzrwAQAJJ49fA541SZP0&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FMzrwAQAJJ49fA541SZP0&ofl=club.refr.app&st=The%20Shivaay&sd=Pure%20Veg%20fine%20dine%20restaurant&si=",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMzrwAQAJJ49fA541SZP01663669545198?alt=media&token=09218ff2-0808-4ed7-923e-22b757e801fd",
            "schedule": {
                "opensDailyS": "08:00",
                "openMonS": "07:00",
                "openSunE": "23:00",
                "opensDailyE": "12:00",
                "openWedE": "23:00",
                "openTue": true,
                "openTueE": "23:00",
                "openSatE": "23:00",
                "openFri": true,
                "openTueS": "07:00",
                "openThuE": "23:00",
                "openSat": true,
                "openWedS": "07:00",
                "openFriS": "07:00",
                "openSun": false,
                "opensDaily": true,
                "openFriE": "23:00",
                "openSatS": "07:00",
                "openThu": true,
                "openMonE": "23:00",
                "openMon": true,
                "openWed": true,
                "openSunS": "07:00",
                "openThuS": "07:00"
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMzrwAQAJJ49fA541SZP01663666251609?alt=media&token=ccfe5ccd-bb08-4dbc-b235-a407778228ef",
            "type": "Both",
            "shareUrlB1": "https://refrclub.com/o/77n3",
            "shareUrlV1": "https://refrclub.com/o/me7Q",
            "addedDynamicLink": true,
            "email": "mukta_shukla2000@yahoo.com",
            "loc": [
                {
                    "city": "Mumbai Suburban",
                    "lat": 19.1966288,
                    "locality": "Mumbai",
                    "region": "Maharashtra",
                    "state": "MH",
                    "lon": 72.8722955,
                    "line2": "",
                    "id": "IND_MH_1663665314733",
                    "nation": "IND",
                    "area": "28 to 30, Centrium, Akurli Rd, Kandivali, Alika Nagar, Lokhandwala Twp, Kandivali East, Mumbai, Maharashtra 400101, India",
                    "zip": "400101",
                    "line1": "Shop 31, centrium mall, ground floor, kandivalu east"
                }
            ],
            "banners": [
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMzrwAQAJJ49fA541SZP01663665814356?alt=media&token=4cbc6284-9124-4f7c-9113-48f639336b38",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMzrwAQAJJ49fA541SZP01663665828293?alt=media&token=9dffe853-a17f-49a9-b18b-3965db9fc0f1"
            ]
        },
        {
            "upd": {
                "seconds": 1663666667,
                "nanoseconds": 747000000
            },
            "shareUrlP1": "https://refrclub.com/o/vhgH",
            "phone": "7400009572",
            "shareUrlX1": "https://refrclub.com/o/BXq8",
            "cat": "food_and_beverages",
            "shareUrlV1": "https://refrclub.com/o/48jU",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FDYMIpk48odfhMKo8Km9Z1663666662150?alt=media&token=fc3aca87-c0a8-4700-82c6-4969bc61ae41",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FDYMIpk48odfhMKo8Km9Z&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FDYMIpk48odfhMKo8Km9Z&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FDYMIpk48odfhMKo8Km9Z&ofl=club.refr.app&st=Fast%20Food%20Express&sd=Fast%20food%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FDYMIpk48odfhMKo8Km9ZLOGO1663662883708%3Falt%3Dmedia%26token%3D1c22d980-a0f0-4aba-b662-44232e13d164",
            "name": "Fast Food Express ",
            "shareUrlB1": "https://refrclub.com/o/i267",
            "about": "Fast food and more ",
            "id": "DYMIpk48odfhMKo8Km9Z",
            "schedule": {
                "opensDailyS": "11:00",
                "openWedS": "07:00",
                "openTueE": "23:00",
                "openSunS": "07:00",
                "openThu": true,
                "opensDailyE": "23:30",
                "openSatS": "07:00",
                "openWedE": "23:00",
                "openSat": true,
                "opensDaily": true,
                "openTueS": "07:00",
                "openWed": true,
                "openSun": false,
                "openThuS": "07:00",
                "openFriE": "23:00",
                "openFri": true,
                "openMonE": "23:00",
                "openSatE": "23:00",
                "openMonS": "07:00",
                "openFriS": "07:00",
                "openTue": true,
                "openThuE": "23:00",
                "openMon": true,
                "openSunE": "23:00"
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FDYMIpk48odfhMKo8Km9Z&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FDYMIpk48odfhMKo8Km9Z&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FDYMIpk48odfhMKo8Km9Z&ofl=club.refr.app&st=Fast%20Food%20Express&sd=Fast%20food%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FDYMIpk48odfhMKo8Km9ZLOGO1663662883708%3Falt%3Dmedia%26token%3D1c22d980-a0f0-4aba-b662-44232e13d164",
            "email": "fastfoodexpress2016@gmail.com",
            "addedDynamicLinkP1": true,
            "by": "lLPIzLnGpzL6j7iHwhZtbaT35i43",
            "loc": [
                {
                    "lat": 19.195966213025606,
                    "region": "Maharashtra",
                    "area": "405 - B, Adarsh Nav Yuvak Chs Ltd. , Lokhandwala kandivali, East, opp. 2, Kandivali, Alika Nagar, Gokul Nagar, Kandivali East, Mumbai, Maharashtra 400101, India",
                    "id": "IND_MH_1663662883296",
                    "zip": "400101",
                    "locality": "Mumbai",
                    "lon": 72.87235032773845,
                    "state": "MH",
                    "city": "Mumbai Suburban",
                    "nation": "IND",
                    "line1": "Shop no. 51, Ground floor, Centrium mall, Lokhandwala township, Kandivali (East)",
                    "line2": ""
                }
            ],
            "addedDynamicLink": true,
            "typeORDER": {
                "COD": true,
                "exchange": true,
                "return": true,
                "refund": true,
                "logistics": false,
                "delivery": "Citywide"
            },
            "sin": {
                "seconds": 1663662883,
                "nanoseconds": 512000000
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FDYMIpk48odfhMKo8Km9Z1663665238723?alt=media&token=a66a3807-50ea-461b-b847-08eac358bf34",
            "subCat": "sc-food_and_beverages-restaurants",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FDYMIpk48odfhMKo8Km9Z&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FDYMIpk48odfhMKo8Km9Z&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FDYMIpk48odfhMKo8Km9Z&ofl=club.refr.app&st=Fast%20Food%20Express&sd=Fast%20food%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FDYMIpk48odfhMKo8Km9ZLOGO1663662883708%3Falt%3Dmedia%26token%3D1c22d980-a0f0-4aba-b662-44232e13d164",
            "type": "Both",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FDYMIpk48odfhMKo8Km9Z&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FDYMIpk48odfhMKo8Km9Z&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FDYMIpk48odfhMKo8Km9Z&ofl=club.refr.app&st=Fast%20Food%20Express&sd=Fast%20food%20and%20more&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FDYMIpk48odfhMKo8Km9ZLOGO1663662883708%3Falt%3Dmedia%26token%3D1c22d980-a0f0-4aba-b662-44232e13d164",
            "banners": [],
            "products": 331,
            "proCat": [
                "IDALI-VADA",
                "UTTAPAM",
                "DOSAS",
                "RAVA DOSA",
                "SPECIAL DOSA",
                "SNACKS",
                "FASTING",
                "FRENCH FRIES",
                "SANDWICHES",
                "GRILL SANDWICH",
                "PIZZA",
                "BURGER",
                "PASTA",
                "SIZZLERS",
                "PAV BHAJI",
                "TAWA PULAO",
                "PAPAD",
                "INDIAN SOUP",
                "CHINESE SOUP",
                "STARTERS INDIAN",
                "TANDOORI",
                "CHINESE STARTERS",
                "VEGETABLES",
                "VEG KADAI/HANDI/TAVA",
                "SPECIAL DISHES",
                "IN KOFTA",
                "IN MUSHROOM",
                "IN PANEER",
                "DAL",
                "BASMATI RICE",
                "BIRYANI",
                "INDIAN BREADS",
                "IN NAN",
                "IN KULCHAS",
                "IN PARATHA",
                "SALAD & RAITA TIME",
                "EXTRA ON DEMAND",
                "IN RICE",
                "IN NOODLES",
                "CHOPSUEY",
                "IN GRAVY",
                "FALOODA",
                "ICE CREAM MILK SHAKES",
                "FRUIT MILK SHAKES",
                "FRESH FRUIT JUICES",
                "LASSI",
                "DESSERT",
                "TAHLI"
            ],
            "log": {
                "seconds": 1663662883,
                "nanoseconds": 512000000
            }
        },
        {
            "addedDynamicLinkP1": true,
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fqkc5HV7Kh3c9YsBJPoI71663663109764?alt=media&token=0bc1316b-785a-480c-8296-1bd9eecd3641",
            "about": "Luxury for fingers",
            "banners": [],
            "log": {
                "seconds": 1663588385,
                "nanoseconds": 91000000
            },
            "name": "Toe And Nails Gazebo",
            "type": "Offl",
            "subCat": "sc-salons_and_spa-nail_spa",
            "schedule": {
                "openTueE": "23:00",
                "openTue": true,
                "openWed": true,
                "openFri": true,
                "openSun": false,
                "openSat": true,
                "openMonE": "23:00",
                "openMonS": "07:00",
                "opensDailyE": "20:00",
                "opensDailyS": "10:00",
                "openWedS": "07:00",
                "openFriS": "07:00",
                "openTueS": "07:00",
                "openThu": true,
                "openSatE": "23:00",
                "openFriE": "23:00",
                "openSatS": "07:00",
                "openThuS": "07:00",
                "opensDaily": true,
                "openWedE": "23:00",
                "openMon": true,
                "openSunS": "07:00",
                "openSunE": "23:00",
                "openThuE": "23:00"
            },
            "shareUrlV1": "https://refrclub.com/o/zqL3",
            "email": "yuanthaispa@gmail.com",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fqkc5HV7Kh3c9YsBJPoI71663663275585?alt=media&token=512ac403-32a5-4ba9-8c9f-5542602c4577",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2Fqkc5HV7Kh3c9YsBJPoI7&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fqkc5HV7Kh3c9YsBJPoI7&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fqkc5HV7Kh3c9YsBJPoI7&ofl=club.refr.app&st=Toe%20And%20Nails%20Gazebo&sd=Luxury%20for%20fingers&si=",
            "cat": "salons_and_spa",
            "phone": "8097909475",
            "id": "qkc5HV7Kh3c9YsBJPoI7",
            "sin": {
                "seconds": 1663588385,
                "nanoseconds": 91000000
            },
            "proCat": [],
            "addedDynamicLink": true,
            "loc": [
                {
                    "area": "Yuan thai spa gazeb",
                    "locality": "Mumbai",
                    "state": "MH",
                    "city": "Mumbai Suburban",
                    "lat": 19.1147814,
                    "line2": "",
                    "line1": "Yuan Premium Thai Spa And Salon, Gazebo House, Gulmohar Road, next to Aroma cafe, MHADA Colony, Juhu, Mumbai, Maharashtra, India",
                    "lon": 72.8365364,
                    "nation": "IND",
                    "id": "IND_MH_1663588384874",
                    "zip": "400049",
                    "region": "Maharashtra"
                }
            ],
            "upd": {
                "seconds": 1663663281,
                "nanoseconds": 910000000
            },
            "products": 0,
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2Fqkc5HV7Kh3c9YsBJPoI7&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fqkc5HV7Kh3c9YsBJPoI7&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fqkc5HV7Kh3c9YsBJPoI7&ofl=club.refr.app&st=Toe%20And%20Nails%20Gazebo&sd=Luxury%20for%20fingers&si=",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2Fqkc5HV7Kh3c9YsBJPoI7&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fqkc5HV7Kh3c9YsBJPoI7&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fqkc5HV7Kh3c9YsBJPoI7&ofl=club.refr.app&st=Toe%20And%20Nails%20Gazebo&sd=Luxury%20for%20fingers&si=",
            "shareUrlP1": "https://refrclub.com/o/PNDZ",
            "by": "oow1SmvoseV3D86tCwf67mHy3dr1",
            "shareUrlB1": "https://refrclub.com/o/VavB",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2Fqkc5HV7Kh3c9YsBJPoI7&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fqkc5HV7Kh3c9YsBJPoI7&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fqkc5HV7Kh3c9YsBJPoI7&ofl=club.refr.app&st=Toe%20And%20Nails%20Gazebo&sd=Luxury%20for%20fingers&si=",
            "shareUrlX1": "https://refrclub.com/o/LuQC",
            "typeORDER": {
                "COD": true,
                "delivery": "Citywide",
                "return": true,
                "exchange": true,
                "logistics": false,
                "refund": true
            }
        },
        {
            "type": "Offl",
            "shareUrlV1": "https://refrclub.com/o/j13W",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FxEZ1h9gLqNE2v3R3I6aM&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FxEZ1h9gLqNE2v3R3I6aM&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FxEZ1h9gLqNE2v3R3I6aM&ofl=club.refr.app&st=Nail%20Palace&sd=Giving%20shine%20to%20your%20style&si=",
            "sin": {
                "seconds": 1663588074,
                "nanoseconds": 492000000
            },
            "upd": {
                "seconds": 1663663099,
                "nanoseconds": 225000000
            },
            "loc": [
                {
                    "line1": "The Nail Palace in Bandra, opp. Coffee by Di Bella, Bandra West, Mumbai, Maharashtra, India",
                    "zip": "400050",
                    "lon": 72.8336616,
                    "locality": "Mumbai",
                    "area": "Nail palace bandra",
                    "id": "IND_MH_1663588074302",
                    "city": "Mumbai Suburban",
                    "state": "MH",
                    "region": "Maharashtra",
                    "lat": 19.0664015,
                    "nation": "IND",
                    "line2": ""
                }
            ],
            "schedule": {
                "openFriS": "07:00",
                "openMonE": "23:00",
                "openMonS": "07:00",
                "openWedS": "07:00",
                "openSun": false,
                "openFri": true,
                "opensDailyE": "20:00",
                "openThuE": "23:00",
                "openTueE": "23:00",
                "openWed": true,
                "opensDaily": true,
                "openThu": true,
                "openSat": true,
                "openFriE": "23:00",
                "openSunS": "07:00",
                "openTue": true,
                "openThuS": "07:00",
                "opensDailyS": "10:00",
                "openSunE": "23:00",
                "openSatE": "23:00",
                "openTueS": "07:00",
                "openWedE": "23:00",
                "openMon": true,
                "openSatS": "07:00"
            },
            "email": "yuanthaispa@gmail.com",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FxEZ1h9gLqNE2v3R3I6aM&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FxEZ1h9gLqNE2v3R3I6aM&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FxEZ1h9gLqNE2v3R3I6aM&ofl=club.refr.app&st=Nail%20Palace&sd=Giving%20shine%20to%20your%20style&si=",
            "subCat": "sc-salons_and_spa-nail_spa",
            "phone": "9004241015",
            "by": "8Ml0wJiFRxMHuFU4dLb9qjN2WE53",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FxEZ1h9gLqNE2v3R3I6aM&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FxEZ1h9gLqNE2v3R3I6aM&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FxEZ1h9gLqNE2v3R3I6aM&ofl=club.refr.app&st=Nail%20Palace&sd=Giving%20shine%20to%20your%20style&si=",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FxEZ1h9gLqNE2v3R3I6aM1663663093139?alt=media&token=b7243120-8754-4dee-814a-69e7e6a9d175",
            "about": "Giving shine to your style",
            "banners": [],
            "cat": "salons_and_spa",
            "id": "xEZ1h9gLqNE2v3R3I6aM",
            "name": "The Nail Palace",
            "shareUrlB1": "https://refrclub.com/o/T7WX",
            "proCat": [],
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FxEZ1h9gLqNE2v3R3I6aM1663663074724?alt=media&token=cab388f3-3d5c-46b7-b395-997d449cc8e0",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FxEZ1h9gLqNE2v3R3I6aM&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FxEZ1h9gLqNE2v3R3I6aM&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FxEZ1h9gLqNE2v3R3I6aM&ofl=club.refr.app&st=Nail%20Palace&sd=Giving%20shine%20to%20your%20style&si=",
            "addedDynamicLink": true,
            "products": 0,
            "log": {
                "seconds": 1663588074,
                "nanoseconds": 492000000
            },
            "shareUrlX1": "https://refrclub.com/o/iwGo",
            "shareUrlP1": "https://refrclub.com/o/EiM8",
            "addedDynamicLinkP1": true,
            "typeORDER": {
                "COD": true,
                "refund": true,
                "logistics": false,
                "exchange": true,
                "return": true,
                "delivery": "Citywide"
            }
        },
        {
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FvTD82FnMPl6EWeI1mouW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FvTD82FnMPl6EWeI1mouW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FvTD82FnMPl6EWeI1mouW&ofl=club.refr.app&st=Toe%20and%20Nails&sd=Luxury%20for%20fingers&si=",
            "phone": "9152729049",
            "banners": [],
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FvTD82FnMPl6EWeI1mouW1663663137278?alt=media&token=18e3b8be-bcbd-4477-9d7a-df2645bb6a38",
            "products": 0,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FvTD82FnMPl6EWeI1mouW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FvTD82FnMPl6EWeI1mouW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FvTD82FnMPl6EWeI1mouW&ofl=club.refr.app&st=Toe%20and%20Nails&sd=Luxury%20for%20fingers&si=",
            "addedDynamicLink": true,
            "shareUrlP1": "https://refrclub.com/o/MaFa",
            "shareUrlX1": "https://refrclub.com/o/xkjH",
            "shareUrlV1": "https://refrclub.com/o/toan",
            "proCat": [],
            "addedDynamicLinkP1": true,
            "subCat": "sc-salons_and_spa-nail_spa",
            "cat": "salons_and_spa",
            "id": "vTD82FnMPl6EWeI1mouW",
            "loc": [
                {
                    "city": "Mumbai Suburban",
                    "locality": "Mumbai",
                    "lat": 19.146819,
                    "state": "MH",
                    "id": "IND_MH_1663587890216",
                    "line1": "Toe And Nail : Nail Spa & Nail Salon | Nail Art Academy - oshiwara, Lokhandwala Road, above CCD, Tarapore Gardens, Milat Nagar, Andheri West, Mumbai, Maharashtra, India",
                    "area": "Toe and nail ",
                    "nation": "IND",
                    "lon": 72.8293,
                    "region": "Maharashtra",
                    "line2": "",
                    "zip": "400053"
                }
            ],
            "upd": {
                "seconds": 1663663257,
                "nanoseconds": 535000000
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FvTD82FnMPl6EWeI1mouW1663663251311?alt=media&token=68ea23bc-ff27-4c9a-84c7-a73b7c1613d5",
            "type": "Offl",
            "sin": {
                "seconds": 1663587890,
                "nanoseconds": 425000000
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FvTD82FnMPl6EWeI1mouW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FvTD82FnMPl6EWeI1mouW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FvTD82FnMPl6EWeI1mouW&ofl=club.refr.app&st=Toe%20and%20Nails&sd=Luxury%20for%20fingers&si=",
            "shareUrlB1": "https://refrclub.com/o/J8uU",
            "typeORDER": {
                "logistics": false,
                "exchange": true,
                "return": true,
                "refund": true,
                "COD": true,
                "delivery": "Citywide"
            },
            "log": {
                "seconds": 1663587890,
                "nanoseconds": 425000000
            },
            "by": "Ie3XfX9rE3gYfsk2iKgNjxZVV1s1",
            "about": "Luxury for fingers",
            "email": "yuanthaispa@gmail.com",
            "schedule": {
                "openSat": true,
                "openMon": true,
                "openMonS": "07:00",
                "openWed": true,
                "openSatS": "07:00",
                "openFriE": "23:00",
                "openThuS": "07:00",
                "openThu": true,
                "openTueS": "07:00",
                "openWedE": "23:00",
                "opensDailyE": "22:00",
                "openSun": false,
                "openSatE": "23:00",
                "openThuE": "23:00",
                "opensDaily": true,
                "openWedS": "07:00",
                "openSunS": "07:00",
                "openTueE": "23:00",
                "openFri": true,
                "openSunE": "23:00",
                "openMonE": "23:00",
                "openFriS": "07:00",
                "openTue": true,
                "opensDailyS": "10:00"
            },
            "name": "Toe and Nails ",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FvTD82FnMPl6EWeI1mouW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FvTD82FnMPl6EWeI1mouW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FvTD82FnMPl6EWeI1mouW&ofl=club.refr.app&st=Toe%20and%20Nails&sd=Luxury%20for%20fingers&si="
        },
        {
            "phone": "7718885654",
            "subCat": "sc-salons_and_spa-nail_spa",
            "by": "ZwKlsY2XGiOXVTZs4nAlkGGFiln1",
            "name": "Toe And Nail ",
            "upd": {
                "seconds": 1663663266,
                "nanoseconds": 139000000
            },
            "addedDynamicLink": true,
            "email": "yuanthaispa@gmail.com",
            "log": {
                "seconds": 1663587695,
                "nanoseconds": 734000000
            },
            "addedDynamicLinkP1": true,
            "banners": [],
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FADuRjicrPxTCtZrjCHsP&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FADuRjicrPxTCtZrjCHsP&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FADuRjicrPxTCtZrjCHsP&ofl=club.refr.app&st=Toe%20And%20Nail&sd=Luxury%20for%20fingers&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FADuRjicrPxTCtZrjCHsPLOGO1663587695879%3Falt%3Dmedia%26token%3Db9c7272f-4f05-448a-87b9-a6debbfdff0a",
            "about": "Luxury for fingers",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FADuRjicrPxTCtZrjCHsP&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FADuRjicrPxTCtZrjCHsP&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FADuRjicrPxTCtZrjCHsP&ofl=club.refr.app&st=Toe%20And%20Nail&sd=Luxury%20for%20fingers&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FADuRjicrPxTCtZrjCHsPLOGO1663587695879%3Falt%3Dmedia%26token%3Db9c7272f-4f05-448a-87b9-a6debbfdff0a",
            "proCat": [],
            "cat": "salons_and_spa",
            "loc": [
                {
                    "line1": "Kandivali, Panchsheel Garden, Siddhivinayak Nagar, Kandivali West, Mumbai, Maharashtra, India",
                    "line2": "",
                    "state": "MH",
                    "lon": 72.8393445,
                    "locality": "Mumbai",
                    "nation": "IND",
                    "zip": "400067",
                    "area": "Myst Spa kandvali",
                    "city": "Mumbai Suburban",
                    "lat": 19.2107089,
                    "region": "Maharashtra",
                    "id": "IND_MH_1663587695548"
                }
            ],
            "shareUrlV1": "https://refrclub.com/o/tfYk",
            "typeORDER": {
                "COD": true,
                "delivery": "Citywide",
                "return": true,
                "refund": true,
                "exchange": true,
                "logistics": false
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FADuRjicrPxTCtZrjCHsP&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FADuRjicrPxTCtZrjCHsP&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FADuRjicrPxTCtZrjCHsP&ofl=club.refr.app&st=Toe%20And%20Nail&sd=Luxury%20for%20fingers&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FADuRjicrPxTCtZrjCHsPLOGO1663587695879%3Falt%3Dmedia%26token%3Db9c7272f-4f05-448a-87b9-a6debbfdff0a",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FADuRjicrPxTCtZrjCHsP1663663147815?alt=media&token=3944d3d4-cf41-43e9-a826-fb4be43e6f02",
            "shareUrlX1": "https://refrclub.com/o/nbyc",
            "id": "ADuRjicrPxTCtZrjCHsP",
            "sin": {
                "seconds": 1663587695,
                "nanoseconds": 734000000
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FADuRjicrPxTCtZrjCHsP1663663260095?alt=media&token=42b73d84-2786-4c2c-8005-1361b7dc4c99",
            "type": "Offl",
            "products": 0,
            "shareUrlP1": "https://refrclub.com/o/EaJy",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FADuRjicrPxTCtZrjCHsP&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FADuRjicrPxTCtZrjCHsP&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FADuRjicrPxTCtZrjCHsP&ofl=club.refr.app&st=Toe%20And%20Nail&sd=Luxury%20for%20fingers&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FADuRjicrPxTCtZrjCHsPLOGO1663587695879%3Falt%3Dmedia%26token%3Db9c7272f-4f05-448a-87b9-a6debbfdff0a",
            "shareUrlB1": "https://refrclub.com/o/Rs9H",
            "schedule": {
                "openThuS": "07:00",
                "openWedE": "23:00",
                "openSunE": "23:00",
                "openMon": true,
                "openThuE": "23:00",
                "openTueS": "07:00",
                "opensDailyE": "22:00",
                "openMonE": "23:00",
                "openMonS": "07:00",
                "openSatS": "07:00",
                "opensDailyS": "10:00",
                "opensDaily": true,
                "openFriE": "23:00",
                "openSun": false,
                "openSunS": "07:00",
                "openThu": true,
                "openFri": true,
                "openSat": true,
                "openTue": true,
                "openTueE": "23:00",
                "openSatE": "23:00",
                "openFriS": "07:00",
                "openWed": true,
                "openWedS": "07:00"
            }
        },
        {
            "banners": [],
            "addedDynamicLinkP1": true,
            "email": "yuanthaispa@gmail.com",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FM85oTEHQYLzoPyZErTSW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FM85oTEHQYLzoPyZErTSW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FM85oTEHQYLzoPyZErTSW&ofl=club.refr.app&st=SAGE&sd=Wellness&si=",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FM85oTEHQYLzoPyZErTSWPOST1663587422012?alt=media&token=3a52a534-8620-4bfc-a02d-33de5e383cd1",
            "addedDynamicLink": true,
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FM85oTEHQYLzoPyZErTSW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FM85oTEHQYLzoPyZErTSW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FM85oTEHQYLzoPyZErTSW&ofl=club.refr.app&st=SAGE&sd=Wellness&si=",
            "about": "Wellness ",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FM85oTEHQYLzoPyZErTSW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FM85oTEHQYLzoPyZErTSW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FM85oTEHQYLzoPyZErTSW&ofl=club.refr.app&st=SAGE&sd=Wellness&si=",
            "id": "M85oTEHQYLzoPyZErTSW",
            "schedule": {
                "opensDailyE": "22:00",
                "openWedE": "23:00",
                "openSunE": "23:00",
                "openFri": true,
                "openTueE": "23:00",
                "openFriE": "23:00",
                "openThu": true,
                "openWedS": "07:00",
                "openSatE": "23:00",
                "openMon": true,
                "openSun": false,
                "opensDailyS": "10:00",
                "openFriS": "07:00",
                "openMonS": "07:00",
                "openThuS": "07:00",
                "openWed": true,
                "openSunS": "07:00",
                "openTueS": "07:00",
                "openSat": true,
                "opensDaily": true,
                "openTue": true,
                "openMonE": "23:00",
                "openThuE": "23:00",
                "openSatS": "07:00"
            },
            "subCat": "sc-salons_and_spa-unisex_spa",
            "type": "Offl",
            "upd": {
                "seconds": 1663587419,
                "nanoseconds": 893000000
            },
            "proCat": [],
            "shareUrlV1": "https://refrclub.com/o/dKMi",
            "products": 0,
            "loc": [
                {
                    "zip": "400076",
                    "city": "Mumbai Suburban",
                    "lon": 72.9116354,
                    "area": "Sage wellness powai",
                    "line1": "Sage Wellness in Powai, Hiranandani Gardens, Panchkutir Ganesh Nagar, Powai, Mumbai, Maharashtra, India",
                    "state": "MH",
                    "nation": "IND",
                    "id": "IND_MH_1663587419704",
                    "lat": 19.1193,
                    "locality": "Mumbai",
                    "line2": "",
                    "region": "Maharashtra"
                }
            ],
            "log": {
                "seconds": 1663587419,
                "nanoseconds": 893000000
            },
            "by": "EcQ2qapwM8XTB1SLjGjsbXr7V4C2",
            "name": "SAGE",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FM85oTEHQYLzoPyZErTSWLOGO1663587420041?alt=media&token=e45ec8e9-35de-46a9-88fe-1251014d95a4",
            "shareUrlB1": "https://refrclub.com/o/2NA6",
            "phone": "7700059487",
            "sin": {
                "seconds": 1663587419,
                "nanoseconds": 893000000
            },
            "shareUrlX1": "https://refrclub.com/o/k6G9",
            "shareUrlP1": "https://refrclub.com/o/DGqU",
            "typeORDER": {
                "delivery": "Citywide",
                "refund": true,
                "return": true,
                "logistics": false,
                "exchange": true,
                "COD": true
            },
            "cat": "salons_and_spa",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FM85oTEHQYLzoPyZErTSW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FM85oTEHQYLzoPyZErTSW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FM85oTEHQYLzoPyZErTSW&ofl=club.refr.app&st=SAGE&sd=Wellness&si="
        },
        {
            "upd": {
                "seconds": 1663661806,
                "nanoseconds": 998000000
            },
            "by": "xm5yWcP6Qyglidoz6I0Z12yzl4y1",
            "email": "yuanthaispa@gmail.com",
            "addedDynamicLink": true,
            "about": "Rejuvenate your senses here",
            "id": "T46rsYryPTaoiMMlqK2H",
            "proCat": [],
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FT46rsYryPTaoiMMlqK2H&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FT46rsYryPTaoiMMlqK2H&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FT46rsYryPTaoiMMlqK2H&ofl=club.refr.app&st=Ashoka%20Spa&sd=Rejuvenate%20your%20senses%20here&si=",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FT46rsYryPTaoiMMlqK2H&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FT46rsYryPTaoiMMlqK2H&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FT46rsYryPTaoiMMlqK2H&ofl=club.refr.app&st=Ashoka%20Spa&sd=Rejuvenate%20your%20senses%20here&si=",
            "banners": [],
            "shareUrlX1": "https://refrclub.com/o/zrjn",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "cat": "salons_and_spa",
            "name": "Ashoka Spa",
            "log": {
                "seconds": 1663587259,
                "nanoseconds": 381000000
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FT46rsYryPTaoiMMlqK2H1663661801029?alt=media&token=b5342f36-4966-4a64-a8cf-458e908f7c70",
            "addedDynamicLinkP1": true,
            "phone": "9619092727",
            "sin": {
                "seconds": 1663587259,
                "nanoseconds": 381000000
            },
            "products": 0,
            "type": "Offl",
            "shareUrlV1": "https://refrclub.com/o/fTVb",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FT46rsYryPTaoiMMlqK2H&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FT46rsYryPTaoiMMlqK2H&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FT46rsYryPTaoiMMlqK2H&ofl=club.refr.app&st=Ashoka%20Spa&sd=Rejuvenate%20your%20senses%20here&si=",
            "shareUrlP1": "https://refrclub.com/o/FqXV",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FT46rsYryPTaoiMMlqK2H1663661793358?alt=media&token=1868ba26-6a07-4077-9dad-147b2fe9773a",
            "loc": [
                {
                    "line2": "",
                    "area": "Ashoka Sakina",
                    "line1": "Ashoka Spa in Sakinaka, Safed Pul, Saki Naka, Mumbai, Maharashtra, India",
                    "id": "IND_MH_1663587259119",
                    "locality": "Mumbai",
                    "lon": 72.88647999999999,
                    "state": "MH",
                    "nation": "IND",
                    "city": "Mumbai Suburban",
                    "zip": "400072",
                    "lat": 19.103481,
                    "region": "Maharashtra"
                }
            ],
            "shareUrlB1": "https://refrclub.com/o/ZBAe",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FT46rsYryPTaoiMMlqK2H&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FT46rsYryPTaoiMMlqK2H&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FT46rsYryPTaoiMMlqK2H&ofl=club.refr.app&st=Ashoka%20Spa&sd=Rejuvenate%20your%20senses%20here&si=",
            "schedule": {
                "openFriE": "23:00",
                "opensDailyS": "10:00",
                "openSatE": "23:00",
                "opensDailyE": "22:00",
                "openSatS": "07:00",
                "openSunE": "23:00",
                "openSunS": "07:00",
                "openThuS": "07:00",
                "openSun": false,
                "openWedS": "07:00",
                "openTue": true,
                "openThu": true,
                "openWed": true,
                "openMonS": "07:00",
                "opensDaily": true,
                "openFriS": "07:00",
                "openSat": true,
                "openTueE": "23:00",
                "openTueS": "07:00",
                "openMonE": "23:00",
                "openFri": true,
                "openThuE": "23:00",
                "openMon": true,
                "openWedE": "23:00"
            },
            "typeORDER": {
                "delivery": "Citywide",
                "COD": true,
                "return": true,
                "logistics": false,
                "exchange": true,
                "refund": true
            }
        },
        {
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FHWWWqizXSoq6gwNjUwvn&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FHWWWqizXSoq6gwNjUwvn&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FHWWWqizXSoq6gwNjUwvn&ofl=club.refr.app&st=Casa%20Thai%20Spa&sd=Renew%2C%20Repair%20%26%20Relax&si=",
            "shareUrlV1": "https://refrclub.com/o/3KPV",
            "cat": "salons_and_spa",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHWWWqizXSoq6gwNjUwvn1663658849895?alt=media&token=743ff493-760d-41ed-bcfb-f96ea287d5a8",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "shareUrlB1": "https://refrclub.com/o/WjyX",
            "id": "HWWWqizXSoq6gwNjUwvn",
            "typeORDER": {
                "delivery": "Citywide",
                "exchange": true,
                "refund": true,
                "COD": true,
                "logistics": false,
                "return": true
            },
            "loc": [
                {
                    "locality": "Mumbai",
                    "region": "Maharashtra",
                    "zip": "400072",
                    "nation": "IND",
                    "lat": 19.1185834,
                    "lon": 72.8903667,
                    "city": "Mumbai Suburban",
                    "line2": "",
                    "state": "MH",
                    "area": "Casa thai spa",
                    "line1": "Casa Thai Spa, Saki Vihar Road, Tunga Village, Chandivali, Powai, Mumbai, Maharashtra, India",
                    "id": "IND_MH_1663587126133"
                }
            ],
            "sin": {
                "seconds": 1663587126,
                "nanoseconds": 354000000
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHWWWqizXSoq6gwNjUwvn1663658857028?alt=media&token=1d03740e-5fa7-4f23-8c94-0dcd8f0c2dcf",
            "type": "Offl",
            "about": "Renew, Repair & Relax ",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FHWWWqizXSoq6gwNjUwvn&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FHWWWqizXSoq6gwNjUwvn&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FHWWWqizXSoq6gwNjUwvn&ofl=club.refr.app&st=Casa%20Thai%20Spa&sd=Renew%2C%20Repair%20%26%20Relax&si=",
            "addedDynamicLinkP1": true,
            "schedule": {
                "openFri": true,
                "openMonS": "07:00",
                "openThuE": "23:00",
                "openWed": true,
                "openTueE": "23:00",
                "openFriS": "07:00",
                "openSunS": "07:00",
                "openMon": true,
                "openTueS": "07:00",
                "openMonE": "23:00",
                "openSunE": "23:00",
                "opensDailyE": "22:00",
                "openThu": true,
                "openSatE": "23:00",
                "openSun": false,
                "openTue": true,
                "openWedS": "07:00",
                "openSatS": "07:00",
                "opensDailyS": "10:00",
                "openFriE": "23:00",
                "opensDaily": true,
                "openThuS": "07:00",
                "openSat": true,
                "openWedE": "23:00"
            },
            "name": "Casa Thai Spa",
            "upd": {
                "seconds": 1663658862,
                "nanoseconds": 742000000
            },
            "by": "ZdGbNbHE8aOgsae5wWITS76TRmq1",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FHWWWqizXSoq6gwNjUwvn&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FHWWWqizXSoq6gwNjUwvn&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FHWWWqizXSoq6gwNjUwvn&ofl=club.refr.app&st=Casa%20Thai%20Spa&sd=Renew%2C%20Repair%20%26%20Relax&si=",
            "email": "yuanthaispa@gmail.com",
            "shareUrlX1": "https://refrclub.com/o/w4oV",
            "proCat": [],
            "shareUrlP1": "https://refrclub.com/o/gG3T",
            "phone": "8433630561",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FHWWWqizXSoq6gwNjUwvn&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FHWWWqizXSoq6gwNjUwvn&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FHWWWqizXSoq6gwNjUwvn&ofl=club.refr.app&st=Casa%20Thai%20Spa&sd=Renew%2C%20Repair%20%26%20Relax&si=",
            "banners": [],
            "addedDynamicLink": true,
            "products": 0,
            "log": {
                "seconds": 1663587126,
                "nanoseconds": 354000000
            }
        },
        {
            "name": "Yuan Thai Spa",
            "shareUrlP1": "https://refrclub.com/o/GE2c",
            "products": 0,
            "by": "K6YAsc0rWJV4OcjCfmJtbamanrE3",
            "cat": "salons_and_spa",
            "typeORDER": {
                "return": true,
                "exchange": true,
                "logistics": false,
                "refund": true,
                "delivery": "Citywide",
                "COD": true
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FyXQhNOSAYU8pRtLKpuLB&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FyXQhNOSAYU8pRtLKpuLB&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FyXQhNOSAYU8pRtLKpuLB&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FyXQhNOSAYU8pRtLKpuLB1663663166664?alt=media&token=3e47e4d4-3516-447b-86f5-6c24f083d14f",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FyXQhNOSAYU8pRtLKpuLB&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FyXQhNOSAYU8pRtLKpuLB&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FyXQhNOSAYU8pRtLKpuLB&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "addedDynamicLinkP1": true,
            "addedDynamicLink": true,
            "proCat": [],
            "about": "Opening the Realm of luxury to you",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FyXQhNOSAYU8pRtLKpuLB1663663174077?alt=media&token=6f26a5a0-c1de-4f13-81c9-f428806c6559",
            "shareUrlX1": "https://refrclub.com/o/Tkx9",
            "banners": [],
            "phone": "7045632967",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FyXQhNOSAYU8pRtLKpuLB&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FyXQhNOSAYU8pRtLKpuLB&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FyXQhNOSAYU8pRtLKpuLB&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "loc": [
                {
                    "id": "IND_MH_1663586977758",
                    "lon": 72.8318869,
                    "zip": "400005",
                    "area": "Yuan colaba",
                    "line2": "",
                    "state": "MH",
                    "locality": "Mumbai",
                    "lat": 18.92344139999999,
                    "region": "Maharashtra",
                    "city": "Mumbai",
                    "line1": "Yuan thai spa Colaba, next to Mcdonalds, Apollo Bandar, Colaba, Mumbai, Maharashtra, India",
                    "nation": "IND"
                }
            ],
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FyXQhNOSAYU8pRtLKpuLB&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FyXQhNOSAYU8pRtLKpuLB&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FyXQhNOSAYU8pRtLKpuLB&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "id": "yXQhNOSAYU8pRtLKpuLB",
            "type": "Offl",
            "email": "yuanthaispa@gmail.com",
            "schedule": {
                "openSatE": "23:00",
                "openThu": true,
                "opensDailyS": "10:00",
                "openFriS": "07:00",
                "openMonE": "23:00",
                "openWedS": "07:00",
                "openTueS": "07:00",
                "openWed": true,
                "openMon": true,
                "openWedE": "23:00",
                "openSun": false,
                "openThuS": "07:00",
                "openFri": true,
                "openSatS": "07:00",
                "openSunE": "23:00",
                "openFriE": "23:00",
                "openSat": true,
                "openTue": true,
                "opensDailyE": "22:00",
                "openTueE": "23:00",
                "openThuE": "23:00",
                "openMonS": "07:00",
                "opensDaily": true,
                "openSunS": "07:00"
            },
            "log": {
                "seconds": 1663586977,
                "nanoseconds": 967000000
            },
            "shareUrlB1": "https://refrclub.com/o/hU4A",
            "upd": {
                "seconds": 1663663180,
                "nanoseconds": 459000000
            },
            "sin": {
                "seconds": 1663586977,
                "nanoseconds": 967000000
            },
            "shareUrlV1": "https://refrclub.com/o/Q2cR"
        },
        {
            "shareUrlP1": "https://refrclub.com/o/JgQk",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "proCat": [],
            "shareUrlV1": "https://refrclub.com/o/eiBR",
            "name": "Seafa Boutique Thai Spa",
            "about": "Treat your body, Relax your mind",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FLhdx7ZbvYC1SMkFlfpAW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FLhdx7ZbvYC1SMkFlfpAW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FLhdx7ZbvYC1SMkFlfpAW&ofl=club.refr.app&st=Seefa%20Boutique%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "addedDynamicLinkP1": true,
            "upd": {
                "seconds": 1663661913,
                "nanoseconds": 472000000
            },
            "banners": [],
            "by": "GvfrZzVSsWZgJfn16h5EE5Zm24z2",
            "shareUrlB1": "https://refrclub.com/o/9WaL",
            "type": "Offl",
            "id": "Lhdx7ZbvYC1SMkFlfpAW",
            "loc": [
                {
                    "lon": 72.8304859,
                    "line1": "Seafa Boutique Thai Spa, Arthur Bunder Road, opp. Basilco restauranta, Apollo Bandar, Colaba, Mumbai, Maharashtra, India",
                    "id": "IND_MH_1663586863319",
                    "locality": "Mumbai",
                    "city": "Mumbai",
                    "zip": "400005",
                    "lat": 18.9187007,
                    "line2": "",
                    "state": "MH",
                    "nation": "IND",
                    "region": "Maharashtra",
                    "area": "Seefa Colaba"
                }
            ],
            "addedDynamicLink": true,
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLhdx7ZbvYC1SMkFlfpAW1663661876759?alt=media&token=579afeb3-b223-4c33-8475-bc4e809fdf27",
            "shareUrlX1": "https://refrclub.com/o/XX6i",
            "phone": "8433586807",
            "log": {
                "seconds": 1663586863,
                "nanoseconds": 524000000
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FLhdx7ZbvYC1SMkFlfpAW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FLhdx7ZbvYC1SMkFlfpAW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FLhdx7ZbvYC1SMkFlfpAW&ofl=club.refr.app&st=Seefa%20Boutique%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "products": 0,
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLhdx7ZbvYC1SMkFlfpAW1663661907620?alt=media&token=a2de843b-c5cc-4d5c-a5ac-09a2f3690463",
            "schedule": {
                "openSunS": "07:00",
                "openThuE": "23:00",
                "openSunE": "23:00",
                "opensDailyE": "22:00",
                "openWedS": "07:00",
                "openFriE": "23:00",
                "openSat": true,
                "openFri": true,
                "openSatS": "07:00",
                "opensDaily": true,
                "openTueS": "07:00",
                "openSatE": "23:00",
                "openMonE": "23:00",
                "openTue": true,
                "openWed": true,
                "openMonS": "07:00",
                "openMon": true,
                "openThuS": "07:00",
                "openWedE": "23:00",
                "openFriS": "07:00",
                "openThu": true,
                "openTueE": "23:00",
                "opensDailyS": "10:00",
                "openSun": false
            },
            "typeORDER": {
                "logistics": false,
                "COD": true,
                "delivery": "Citywide",
                "refund": true,
                "exchange": true,
                "return": true
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FLhdx7ZbvYC1SMkFlfpAW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FLhdx7ZbvYC1SMkFlfpAW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FLhdx7ZbvYC1SMkFlfpAW&ofl=club.refr.app&st=Seefa%20Boutique%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "cat": "salons_and_spa",
            "sin": {
                "seconds": 1663586863,
                "nanoseconds": 524000000
            },
            "email": "yuanthaispa@gmail.com",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FLhdx7ZbvYC1SMkFlfpAW&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FLhdx7ZbvYC1SMkFlfpAW&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FLhdx7ZbvYC1SMkFlfpAW&ofl=club.refr.app&st=Seefa%20Boutique%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si="
        },
        {
            "email": "yuanthaispa@gmail.com",
            "shareUrlP1": "https://refrclub.com/o/pyNV",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FaClvDkMAvdR6L5LbtWqT&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FaClvDkMAvdR6L5LbtWqT&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FaClvDkMAvdR6L5LbtWqT&ofl=club.refr.app&st=Aura%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "id": "aClvDkMAvdR6L5LbtWqT",
            "addedDynamicLink": true,
            "schedule": {
                "openThuS": "07:00",
                "openTue": true,
                "openSunS": "07:00",
                "openSatS": "07:00",
                "openFri": true,
                "openSat": true,
                "openFriS": "07:00",
                "openSatE": "23:00",
                "openMonE": "23:00",
                "openSun": false,
                "opensDaily": true,
                "openMon": true,
                "openMonS": "07:00",
                "openSunE": "23:00",
                "openWed": true,
                "openFriE": "23:00",
                "openWedE": "23:00",
                "openTueS": "07:00",
                "opensDailyE": "22:00",
                "openThuE": "23:00",
                "openWedS": "07:00",
                "openTueE": "23:00",
                "openThu": true,
                "opensDailyS": "10:00"
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaClvDkMAvdR6L5LbtWqT1663665001279?alt=media&token=2339fadf-24c6-4bb2-afaa-514c28edc773",
            "phone": "8655224333",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FaClvDkMAvdR6L5LbtWqT&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FaClvDkMAvdR6L5LbtWqT&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FaClvDkMAvdR6L5LbtWqT&ofl=club.refr.app&st=Aura%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaClvDkMAvdR6L5LbtWqT1663664994622?alt=media&token=b0983701-021b-490c-b411-af0acfb5e792",
            "proCat": [],
            "log": {
                "seconds": 1663586587,
                "nanoseconds": 184000000
            },
            "products": 0,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FaClvDkMAvdR6L5LbtWqT&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FaClvDkMAvdR6L5LbtWqT&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FaClvDkMAvdR6L5LbtWqT&ofl=club.refr.app&st=Aura%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "sin": {
                "seconds": 1663586587,
                "nanoseconds": 184000000
            },
            "addedDynamicLinkP1": true,
            "about": "Treat your body, Relax your mind",
            "name": "Aura Thai Spa",
            "loc": [
                {
                    "lat": 19.0558011,
                    "region": "Maharashtra",
                    "zip": "400071",
                    "id": "IND_MH_1663586586995",
                    "city": "Mumbai Suburban",
                    "lon": 72.90033269999999,
                    "line1": "Aura Thai Spa in Chembur, Central Avenue, Chembur, Mumbai, Maharashtra, India",
                    "line2": "",
                    "locality": "Mumbai",
                    "nation": "IND",
                    "state": "MH",
                    "area": "Aura thai spa chembu"
                }
            ],
            "shareUrlX1": "https://refrclub.com/o/Zetb",
            "typeORDER": {
                "return": true,
                "delivery": "Citywide",
                "refund": true,
                "logistics": false,
                "COD": true,
                "exchange": true
            },
            "banners": [],
            "cat": "salons_and_spa",
            "type": "Offl",
            "shareUrlB1": "https://refrclub.com/o/i3rm",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FaClvDkMAvdR6L5LbtWqT&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FaClvDkMAvdR6L5LbtWqT&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FaClvDkMAvdR6L5LbtWqT&ofl=club.refr.app&st=Aura%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "upd": {
                "seconds": 1663665006,
                "nanoseconds": 630000000
            },
            "by": "lOG2kyhsUxZLmUM7yNDHqA6DoVp1",
            "shareUrlV1": "https://refrclub.com/o/GsNP"
        },
        {
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F0X35ClGN2bRdtXdriBbf&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F0X35ClGN2bRdtXdriBbf&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F0X35ClGN2bRdtXdriBbf&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "phone": "8291894623",
            "shareUrlP1": "https://refrclub.com/o/MtxB",
            "banners": [],
            "products": 0,
            "upd": {
                "seconds": 1664017265,
                "nanoseconds": 689000000
            },
            "loc": [
                {
                    "lat": 19.0593208,
                    "nation": "IND",
                    "area": "Yuan thai spa chem",
                    "line1": "Yuan Thai Spa And Salon in Chembur, nr. Chembur Gaothan, Chembur Gaothan, Chembur, Mumbai, Maharashtra, India",
                    "lon": 72.89726879999999,
                    "line2": "",
                    "zip": "400071",
                    "id": "IND_MH_1663586461024",
                    "region": "Maharashtra",
                    "locality": "Mumbai",
                    "city": "Mumbai Suburban",
                    "state": "MH"
                }
            ],
            "schedule": {
                "opensDailyS": "10:00",
                "openThu": true,
                "openTueE": "23:00",
                "openSunS": "07:00",
                "openTueS": "07:00",
                "opensDailyE": "22:00",
                "openThuS": "07:00",
                "openSatS": "07:00",
                "openMon": true,
                "openFri": true,
                "openMonE": "23:00",
                "openWed": true,
                "openSunE": "23:00",
                "openSatE": "23:00",
                "openMonS": "07:00",
                "openTue": true,
                "openFriE": "23:00",
                "openWedE": "23:00",
                "opensDaily": true,
                "openFriS": "07:00",
                "openSun": false,
                "openWedS": "07:00",
                "openThuE": "23:00",
                "openSat": true
            },
            "email": "yuanthaispa@gmail.com",
            "log": {
                "seconds": 1663586461,
                "nanoseconds": 428000000
            },
            "name": "Yuan Thai Spa Chembur",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0X35ClGN2bRdtXdriBbf1663663326910?alt=media&token=0269ed94-e219-45bf-858a-1c31dc715ff7",
            "addedDynamicLink": true,
            "id": "0X35ClGN2bRdtXdriBbf",
            "sin": {
                "seconds": 1663586461,
                "nanoseconds": 428000000
            },
            "proCat": [],
            "subCat": "sc-salons_and_spa-unisex_spa",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F0X35ClGN2bRdtXdriBbf&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F0X35ClGN2bRdtXdriBbf&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F0X35ClGN2bRdtXdriBbf&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "shareUrlX1": "https://refrclub.com/o/9PoU",
            "type": "Offl",
            "addedDynamicLinkP1": true,
            "cat": "salons_and_spa",
            "typeORDER": {
                "logistics": false,
                "exchange": true,
                "COD": true,
                "refund": true,
                "delivery": "Citywide",
                "return": true
            },
            "shareUrlB1": "https://refrclub.com/o/FgDy",
            "shareUrlV1": "https://refrclub.com/o/yXY6",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0X35ClGN2bRdtXdriBbf1663663334888?alt=media&token=b9d5a104-205f-4e58-8256-617c92f8f5d4",
            "about": "Opening the Realm of luxury to you",
            "by": "RbNLihMEzzMSObkPZ41WObSHBjg2",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F0X35ClGN2bRdtXdriBbf&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F0X35ClGN2bRdtXdriBbf&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F0X35ClGN2bRdtXdriBbf&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F0X35ClGN2bRdtXdriBbf&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F0X35ClGN2bRdtXdriBbf&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F0X35ClGN2bRdtXdriBbf&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si="
        },
        {
            "shareUrlB1": "https://refrclub.com/o/vn3h",
            "addedDynamicLinkP1": true,
            "cat": "salons_and_spa",
            "email": "yuanthaispa@gmail.com",
            "typeORDER": {
                "refund": true,
                "exchange": true,
                "return": true,
                "COD": true,
                "delivery": "Citywide",
                "logistics": false
            },
            "proCat": [],
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FX8NSse5LZWoAyg2L91bX&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FX8NSse5LZWoAyg2L91bX&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FX8NSse5LZWoAyg2L91bX&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "schedule": {
                "openFri": true,
                "opensDailyS": "10:00",
                "openWedS": "07:00",
                "opensDaily": true,
                "openMonE": "23:00",
                "openFriE": "23:00",
                "openSunS": "07:00",
                "openTueE": "23:00",
                "openSatS": "07:00",
                "openSun": false,
                "openFriS": "07:00",
                "openThu": true,
                "openMonS": "07:00",
                "openSatE": "23:00",
                "openMon": true,
                "openThuE": "23:00",
                "openWed": true,
                "openSat": true,
                "openTueS": "07:00",
                "opensDailyE": "22:00",
                "openThuS": "07:00",
                "openTue": true,
                "openWedE": "23:00",
                "openSunE": "23:00"
            },
            "banners": [],
            "about": "Opening the Realm of luxury to you",
            "name": "Yuan Thai Spa Oshiwara",
            "upd": {
                "seconds": 1664017214,
                "nanoseconds": 588000000
            },
            "shareUrlX1": "https://refrclub.com/o/XR74",
            "by": "xNJNVyqvwdRsnRJ4q81RM3LzZRA2",
            "loc": [
                {
                    "lat": 19.1468637,
                    "id": "IND_MH_1663586340904",
                    "state": "MH",
                    "line2": "",
                    "zip": "400053",
                    "locality": "Mumbai",
                    "city": "Mumbai Suburban",
                    "line1": "Yuan thai spa oshiwara, Tarapore Gardens, Milat Nagar, Andheri West, Mumbai, Maharashtra, India",
                    "nation": "IND",
                    "lon": 72.8292221,
                    "area": "Yuan thai spa",
                    "region": "Maharashtra"
                }
            ],
            "products": 0,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FX8NSse5LZWoAyg2L91bX&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FX8NSse5LZWoAyg2L91bX&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FX8NSse5LZWoAyg2L91bX&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "addedDynamicLink": true,
            "shareUrlP1": "https://refrclub.com/o/nmKt",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FX8NSse5LZWoAyg2L91bX1663663349382?alt=media&token=afc3a38c-9ff0-41b5-a2ed-f526cd92eaf8",
            "sin": {
                "seconds": 1663586341,
                "nanoseconds": 109000000
            },
            "subCat": "sc-salons_and_spa-unisex_spa",
            "shareUrlV1": "https://refrclub.com/o/jTSB",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FX8NSse5LZWoAyg2L91bX&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FX8NSse5LZWoAyg2L91bX&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FX8NSse5LZWoAyg2L91bX&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "type": "Offl",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FX8NSse5LZWoAyg2L91bX&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FX8NSse5LZWoAyg2L91bX&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FX8NSse5LZWoAyg2L91bX&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FX8NSse5LZWoAyg2L91bX1663663342794?alt=media&token=fb1a08d6-51a4-428a-b408-fa3bd105cac5",
            "log": {
                "seconds": 1663586341,
                "nanoseconds": 109000000
            },
            "id": "X8NSse5LZWoAyg2L91bX",
            "phone": "9167564639"
        },
        {
            "name": "Yuan Thai Spa Grand Road",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FSGde47dXbPFCaQCGTn0y&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FSGde47dXbPFCaQCGTn0y&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FSGde47dXbPFCaQCGTn0y&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FSGde47dXbPFCaQCGTn0y&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FSGde47dXbPFCaQCGTn0y&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FSGde47dXbPFCaQCGTn0y&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "about": "Opening the Realm of luxury to you",
            "cat": "salons_and_spa",
            "sin": {
                "seconds": 1663586116,
                "nanoseconds": 875000000
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSGde47dXbPFCaQCGTn0y1663663371863?alt=media&token=a2483288-f310-4915-9c87-c21ce486ab24",
            "schedule": {
                "openMonS": "07:00",
                "openSunE": "23:00",
                "openMon": true,
                "openMonE": "23:00",
                "openFriE": "23:00",
                "openSun": false,
                "openTueS": "07:00",
                "opensDailyS": "10:00",
                "openWed": true,
                "openWedS": "07:00",
                "openSatS": "07:00",
                "openFriS": "07:00",
                "openFri": true,
                "openThuE": "23:00",
                "opensDailyE": "22:00",
                "openSat": true,
                "openWedE": "23:00",
                "openSunS": "07:00",
                "opensDaily": true,
                "openTueE": "23:00",
                "openThuS": "07:00",
                "openTue": true,
                "openSatE": "23:00",
                "openThu": true
            },
            "addedDynamicLinkP1": true,
            "typeORDER": {
                "delivery": "Citywide",
                "COD": true,
                "return": true,
                "exchange": true,
                "logistics": false,
                "refund": true
            },
            "upd": {
                "seconds": 1664017176,
                "nanoseconds": 773000000
            },
            "id": "SGde47dXbPFCaQCGTn0y",
            "log": {
                "seconds": 1663586116,
                "nanoseconds": 875000000
            },
            "products": 0,
            "shareUrlP1": "https://refrclub.com/o/58Jm",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FSGde47dXbPFCaQCGTn0y&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FSGde47dXbPFCaQCGTn0y&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FSGde47dXbPFCaQCGTn0y&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FSGde47dXbPFCaQCGTn0y&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FSGde47dXbPFCaQCGTn0y&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FSGde47dXbPFCaQCGTn0y&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "shareUrlX1": "https://refrclub.com/o/fMJS",
            "banners": [],
            "shareUrlV1": "https://refrclub.com/o/C3SG",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSGde47dXbPFCaQCGTn0y1663663358167?alt=media&token=75246cad-3ab1-4503-a53e-4774f539d1f9",
            "shareUrlB1": "https://refrclub.com/o/1F2v",
            "proCat": [],
            "subCat": "sc-salons_and_spa-unisex_spa",
            "by": "hk2TzYyJpvXTiM3Fpn1irW2KSRR2",
            "email": "yuanthaispa@gmail.com",
            "phone": "9987296343",
            "type": "Offl",
            "loc": [
                {
                    "lon": 72.8072845,
                    "area": "Yuan thai spa ",
                    "zip": "400026",
                    "id": "IND_MH_1663586116667",
                    "region": "Maharashtra",
                    "city": "Mumbai",
                    "locality": "Mumbai",
                    "line2": "",
                    "nation": "IND",
                    "lat": 18.9653124,
                    "state": "MH",
                    "line1": "Yuan Thai Spa in Pedder Road, Pedder Road, opp. Reliance Jewel, Grant Road West, Cumballa Hill, Mumbai, Maharashtra, India"
                }
            ],
            "addedDynamicLink": true
        },
        {
            "loc": [
                {
                    "region": "Maharashtra",
                    "locality": "Mumbai",
                    "lon": 72.8365364,
                    "lat": 19.1147814,
                    "state": "MH",
                    "line2": "",
                    "zip": "400049",
                    "line1": "Gazebo House, 52, Ground floor, Gulmohar Road",
                    "area": "Yuan thai spa gaze",
                    "nation": "IND",
                    "id": "IND_MH_1663585910525",
                    "city": "Mumbai Suburban"
                }
            ],
            "banners": [],
            "phone": "9136376272",
            "name": "Yuan Thai Spa Juhu",
            "by": "qktTVHOKlOedHtR0x3SxqVyIziR2",
            "log": {
                "seconds": 1663585910,
                "nanoseconds": 730000000
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2Fv4toNNEQi0fHgekgsgVc&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fv4toNNEQi0fHgekgsgVc&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2Fv4toNNEQi0fHgekgsgVc&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fv4toNNEQi0fHgekgsgVc1663663381075?alt=media&token=a1e5898c-ac65-4b88-aa9c-5e555640d62f",
            "shareUrlX1": "https://refrclub.com/o/gJHT",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "shareUrlP1": "https://refrclub.com/o/Gvgx",
            "cat": "salons_and_spa",
            "proCat": [],
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fv4toNNEQi0fHgekgsgVc1663663388742?alt=media&token=dcfe0399-f490-488c-b07d-814767f798b8",
            "email": "yuanthaispa@gmail.com",
            "type": "Offl",
            "shareUrlV1": "https://refrclub.com/o/oYCr",
            "typeORDER": {
                "refund": true,
                "COD": true,
                "logistics": false,
                "return": true,
                "delivery": "Citywide",
                "exchange": true
            },
            "about": "Opening the Realm of luxury to you",
            "sin": {
                "seconds": 1663585910,
                "nanoseconds": 730000000
            },
            "schedule": {
                "openSatS": "07:00",
                "openSat": true,
                "opensDailyS": "10:00",
                "openMonS": "07:00",
                "opensDailyE": "22:00",
                "openFriE": "23:00",
                "openSunE": "23:00",
                "openSatE": "23:00",
                "openSunS": "07:00",
                "openWed": true,
                "openWedE": "23:00",
                "openWedS": "07:00",
                "openSun": false,
                "openTue": true,
                "openTueS": "07:00",
                "openMonE": "23:00",
                "opensDaily": true,
                "openThuE": "23:00",
                "openMon": true,
                "openFriS": "07:00",
                "openThuS": "07:00",
                "openThu": true,
                "openFri": true,
                "openTueE": "23:00"
            },
            "shareUrlB1": "https://refrclub.com/o/kFx3",
            "addedDynamicLinkP1": true,
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2Fv4toNNEQi0fHgekgsgVc&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fv4toNNEQi0fHgekgsgVc&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2Fv4toNNEQi0fHgekgsgVc&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2Fv4toNNEQi0fHgekgsgVc&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fv4toNNEQi0fHgekgsgVc&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2Fv4toNNEQi0fHgekgsgVc&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "upd": {
                "seconds": 1664016984,
                "nanoseconds": 455000000
            },
            "addedDynamicLink": true,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2Fv4toNNEQi0fHgekgsgVc&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fv4toNNEQi0fHgekgsgVc&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2Fv4toNNEQi0fHgekgsgVc&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "id": "v4toNNEQi0fHgekgsgVc",
            "products": 0
        },
        {
            "upd": {
                "seconds": 1663663408,
                "nanoseconds": 923000000
            },
            "email": "yuanthaispa@gmail.com",
            "banners": [],
            "subCat": "sc-salons_and_spa-unisex_spa",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F5k2QQSywFUN98DV1Vrmn1663663396873?alt=media&token=e351ce6f-8538-4fb7-9d94-49ee2e7f3abc",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F5k2QQSywFUN98DV1Vrmn&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F5k2QQSywFUN98DV1Vrmn&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F5k2QQSywFUN98DV1Vrmn&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Real%20luxury%20to%20you&si=",
            "schedule": {
                "openFri": true,
                "opensDaily": true,
                "openWedE": "23:00",
                "openFriS": "07:00",
                "openThu": true,
                "openSatE": "23:00",
                "openThuS": "07:00",
                "openSatS": "07:00",
                "openMonE": "23:00",
                "openThuE": "23:00",
                "openTueS": "07:00",
                "openSunE": "23:00",
                "openTue": true,
                "openMonS": "07:00",
                "opensDailyS": "10:00",
                "opensDailyE": "22:00",
                "openWedS": "07:00",
                "openSun": false,
                "openSat": true,
                "openTueE": "23:00",
                "openMon": true,
                "openFriE": "23:00",
                "openSunS": "07:00",
                "openWed": true
            },
            "name": "Yuan Thai Spa",
            "cat": "salons_and_spa",
            "loc": [
                {
                    "zip": "400049",
                    "id": "IND_MH_1663585754319",
                    "lon": 72.8274742,
                    "area": "Yuan juhu",
                    "line1": "1st floor 104, Sea view apt, Juhu tara road, above shivas salon",
                    "line2": "",
                    "locality": "Mumbai",
                    "region": "Maharashtra",
                    "lat": 19.086229,
                    "city": "Mumbai Suburban",
                    "nation": "IND",
                    "state": "MH"
                }
            ],
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F5k2QQSywFUN98DV1Vrmn&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F5k2QQSywFUN98DV1Vrmn&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F5k2QQSywFUN98DV1Vrmn&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Real%20luxury%20to%20you&si=",
            "about": "Opening the Real luxury to you",
            "by": "7SzPy7g8XuRMqiqF799YUpsqqE13",
            "shareUrlV1": "https://refrclub.com/o/UE6N",
            "shareUrlX1": "https://refrclub.com/o/rMM9",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F5k2QQSywFUN98DV1Vrmn1663663402906?alt=media&token=6de8d1a5-cd6f-4e3a-892d-a43d6b90c3f2",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F5k2QQSywFUN98DV1Vrmn&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F5k2QQSywFUN98DV1Vrmn&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F5k2QQSywFUN98DV1Vrmn&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Real%20luxury%20to%20you&si=",
            "shareUrlP1": "https://refrclub.com/o/8kvW",
            "addedDynamicLink": true,
            "id": "5k2QQSywFUN98DV1Vrmn",
            "phone": "9987570943",
            "log": {
                "seconds": 1663585754,
                "nanoseconds": 527000000
            },
            "sin": {
                "seconds": 1663585754,
                "nanoseconds": 527000000
            },
            "proCat": [],
            "shareUrlB1": "https://refrclub.com/o/syYD",
            "typeORDER": {
                "logistics": false,
                "COD": true,
                "return": true,
                "exchange": true,
                "refund": true,
                "delivery": "Citywide"
            },
            "addedDynamicLinkP1": true,
            "type": "Offl",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F5k2QQSywFUN98DV1Vrmn&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F5k2QQSywFUN98DV1Vrmn&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F5k2QQSywFUN98DV1Vrmn&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Real%20luxury%20to%20you&si=",
            "products": 0
        },
        {
            "sin": {
                "seconds": 1663585625,
                "nanoseconds": 827000000
            },
            "name": "Yuan Thai Spa Bandra",
            "log": {
                "seconds": 1663585625,
                "nanoseconds": 827000000
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FeuOAwAwvlKK7fcVrvEBC&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FeuOAwAwvlKK7fcVrvEBC&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FeuOAwAwvlKK7fcVrvEBC&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "phone": "9930543431",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FeuOAwAwvlKK7fcVrvEBC&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FeuOAwAwvlKK7fcVrvEBC&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FeuOAwAwvlKK7fcVrvEBC&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "proCat": [],
            "by": "R8OvwhQJd5R2mcVIt1SsjDykMUd2",
            "typeORDER": {
                "COD": true,
                "refund": true,
                "return": true,
                "delivery": "Citywide",
                "logistics": false,
                "exchange": true
            },
            "products": 0,
            "schedule": {
                "openThuE": "23:00",
                "openWed": true,
                "opensDailyE": "22:00",
                "openSunE": "23:00",
                "openWedS": "07:00",
                "openFriE": "23:00",
                "openMonE": "23:00",
                "opensDailyS": "10:00",
                "openMon": true,
                "openWedE": "23:00",
                "openThuS": "07:00",
                "openTueE": "23:00",
                "openTue": true,
                "openSun": false,
                "openSatE": "23:00",
                "opensDaily": true,
                "openFri": true,
                "openSunS": "07:00",
                "openFriS": "07:00",
                "openThu": true,
                "openTueS": "07:00",
                "openSatS": "07:00",
                "openMonS": "07:00",
                "openSat": true
            },
            "shareUrlX1": "https://refrclub.com/o/b9d9",
            "shareUrlV1": "https://refrclub.com/o/Traa",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FeuOAwAwvlKK7fcVrvEBC&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FeuOAwAwvlKK7fcVrvEBC&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FeuOAwAwvlKK7fcVrvEBC&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "banners": [],
            "addedDynamicLink": true,
            "shareUrlB1": "https://refrclub.com/o/76bg",
            "cat": "salons_and_spa",
            "addedDynamicLinkP1": true,
            "email": "yuanthaispa@gmail.com",
            "loc": [
                {
                    "line2": "",
                    "area": "Yuan thai bandra",
                    "lat": 19.0664508,
                    "region": "Maharashtra",
                    "id": "IND_MH_1663585625594",
                    "line1": "Shanti Kutir, Co-op housing society ltd, linking road, opp McDonald’s ",
                    "lon": 72.8337143,
                    "state": "MH",
                    "nation": "IND",
                    "zip": "400052",
                    "city": "Mumbai Suburban",
                    "locality": "Mumbai"
                }
            ],
            "type": "Offl",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeuOAwAwvlKK7fcVrvEBC1663663421294?alt=media&token=2de5adbf-51e9-498d-8e30-a5e9a69cd6d3",
            "about": "Opening the Realm of luxury to you",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FeuOAwAwvlKK7fcVrvEBC&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FeuOAwAwvlKK7fcVrvEBC&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FeuOAwAwvlKK7fcVrvEBC&ofl=club.refr.app&st=Yuan%20Thai%20Spa&sd=Opening%20the%20Realm%20of%20luxury%20to%20you&si=",
            "upd": {
                "seconds": 1664199545,
                "nanoseconds": 851000000
            },
            "subCat": "sc-salons_and_spa-unisex_spa",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FeuOAwAwvlKK7fcVrvEBC1663663412275?alt=media&token=48dc583d-49d3-433d-934d-18f52b7b6cc7",
            "shareUrlP1": "https://refrclub.com/o/maUV",
            "id": "euOAwAwvlKK7fcVrvEBC"
        },
        {
            "cat": "salons_and_spa",
            "addedDynamicLinkP1": true,
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FWyuQJgPSMThvFMLTEHUD&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FWyuQJgPSMThvFMLTEHUD&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FWyuQJgPSMThvFMLTEHUD&ofl=club.refr.app&st=Aura%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "products": 0,
            "shareUrlV1": "https://refrclub.com/o/Eotg",
            "phone": "8433531994",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FWyuQJgPSMThvFMLTEHUD&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FWyuQJgPSMThvFMLTEHUD&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FWyuQJgPSMThvFMLTEHUD&ofl=club.refr.app&st=Aura%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "log": {
                "seconds": 1663585140,
                "nanoseconds": 247000000
            },
            "name": "Aura Thai Spa",
            "email": "yuanthaispa@gmail.com",
            "id": "WyuQJgPSMThvFMLTEHUD",
            "schedule": {
                "openSatE": "23:00",
                "opensDailyS": "22:00",
                "openThuS": "07:00",
                "openTueE": "23:00",
                "openMonS": "07:00",
                "openMon": true,
                "openSatS": "07:00",
                "openMonE": "23:00",
                "openSun": false,
                "openTue": true,
                "openWedS": "07:00",
                "openThu": true,
                "openFriS": "07:00",
                "openSat": true,
                "openSunE": "23:00",
                "openFri": true,
                "opensDailyE": "22:00",
                "openWedE": "23:00",
                "openFriE": "23:00",
                "openSunS": "07:00",
                "openWed": true,
                "openThuE": "23:00",
                "openTueS": "07:00",
                "opensDaily": true
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWyuQJgPSMThvFMLTEHUD1663658589559?alt=media&token=e5becc7f-08e7-4db7-81ba-60477ce9d869",
            "loc": [
                {
                    "lat": 19.1193513,
                    "region": "Maharashtra",
                    "lon": 72.9119175,
                    "locality": "Mumbai",
                    "line2": "",
                    "id": "IND_MH_1663585139638",
                    "nation": "IND",
                    "area": "Aura thai spa powai",
                    "line1": "1st floor, Galleria Shopping mall, shop no 156/157, Hiranandani garden",
                    "city": "Mumbai Suburban",
                    "state": "MH",
                    "zip": "400076"
                }
            ],
            "upd": {
                "seconds": 1663658595,
                "nanoseconds": 457000000
            },
            "by": "lm4xmB0wy2Zy9h32F3rUTKeunmC2",
            "shareUrlB1": "https://refrclub.com/o/zc3s",
            "about": "Treat your body, Relax your mind",
            "banners": [],
            "proCat": [],
            "type": "Offl",
            "shareUrlP1": "https://refrclub.com/o/D7ks",
            "shareUrlX1": "https://refrclub.com/o/VhCS",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FWyuQJgPSMThvFMLTEHUD&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FWyuQJgPSMThvFMLTEHUD&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FWyuQJgPSMThvFMLTEHUD&ofl=club.refr.app&st=Aura%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "typeORDER": {
                "refund": true,
                "COD": true,
                "return": true,
                "logistics": false,
                "exchange": true,
                "delivery": "Citywide"
            },
            "addedDynamicLink": true,
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FWyuQJgPSMThvFMLTEHUD&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FWyuQJgPSMThvFMLTEHUD&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FWyuQJgPSMThvFMLTEHUD&ofl=club.refr.app&st=Aura%20Thai%20Spa&sd=Treat%20your%20body%2C%20Relax%20your%20mind&si=",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "sin": {
                "seconds": 1663585140,
                "nanoseconds": 247000000
            },
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWyuQJgPSMThvFMLTEHUD1663658582417?alt=media&token=daca397c-827f-4b65-b186-1885b40f7394"
        },
        {
            "addedDynamicLink": true,
            "shareUrlX1": "https://refrclub.com/o/CQmA",
            "shareUrlB1": "https://refrclub.com/o/K492",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F7idNAjWqICj6KuR3xgB2&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F7idNAjWqICj6KuR3xgB2&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F7idNAjWqICj6KuR3xgB2&ofl=club.refr.app&st=TRUE%20Spa%20%26%20Salon&sd=Luxury%20Spa%20%26%20Salon%20Experience&si=",
            "typeORDER": {
                "COD": true,
                "delivery": "Citywide",
                "refund": true,
                "logistics": false,
                "exchange": true,
                "return": true
            },
            "schedule": {
                "openFriE": "23:00",
                "openMonS": "07:00",
                "openTueS": "07:00",
                "openThu": true,
                "opensDaily": true,
                "openTueE": "23:00",
                "openMon": true,
                "openFriS": "07:00",
                "openSun": false,
                "openWedE": "23:00",
                "openSunE": "23:00",
                "opensDailyS": "10:00",
                "openSatS": "07:00",
                "openSunS": "07:00",
                "openWedS": "07:00",
                "opensDailyE": "22:00",
                "openWed": true,
                "openSat": true,
                "openThuE": "23:00",
                "openThuS": "07:00",
                "openSatE": "23:00",
                "openTue": true,
                "openFri": true,
                "openMonE": "23:00"
            },
            "log": {
                "seconds": 1663584923,
                "nanoseconds": 547000000
            },
            "loc": [
                {
                    "lat": 19.0683901,
                    "line1": "Shop no 3, Chetak CHS, Nargis Dutt Road",
                    "city": "Mumbai Suburban",
                    "state": "MH",
                    "line2": "",
                    "area": "TRUE Spa ",
                    "lon": 72.8285454,
                    "id": "IND_MH_1663584923284",
                    "locality": "Mumbai",
                    "region": "Maharashtra",
                    "zip": "400050",
                    "nation": "IND"
                }
            ],
            "upd": {
                "seconds": 1663658554,
                "nanoseconds": 121000000
            },
            "by": "POMH06MSBYPG53b6DlDuyz8T1h22",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F7idNAjWqICj6KuR3xgB21663658533565?alt=media&token=cf741107-dcb8-4d27-b755-2b357f8875d3",
            "banners": [],
            "shareUrlV1": "https://refrclub.com/o/vU49",
            "about": "Luxury Spa & Salon Experience ",
            "addedDynamicLinkP1": true,
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F7idNAjWqICj6KuR3xgB2&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F7idNAjWqICj6KuR3xgB2&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F7idNAjWqICj6KuR3xgB2&ofl=club.refr.app&st=TRUE%20Spa%20%26%20Salon&sd=Luxury%20Spa%20%26%20Salon%20Experience&si=",
            "phone": "8104665906",
            "cat": "salons_and_spa",
            "shareUrlP1": "https://refrclub.com/o/asz7",
            "products": 0,
            "proCat": [],
            "email": "yuanthaispa@gmail.com",
            "name": "TRUE Spa & Salon",
            "id": "7idNAjWqICj6KuR3xgB2",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F7idNAjWqICj6KuR3xgB2&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F7idNAjWqICj6KuR3xgB2&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F7idNAjWqICj6KuR3xgB2&ofl=club.refr.app&st=TRUE%20Spa%20%26%20Salon&sd=Luxury%20Spa%20%26%20Salon%20Experience&si=",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F7idNAjWqICj6KuR3xgB2&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F7idNAjWqICj6KuR3xgB2&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F7idNAjWqICj6KuR3xgB2&ofl=club.refr.app&st=TRUE%20Spa%20%26%20Salon&sd=Luxury%20Spa%20%26%20Salon%20Experience&si=",
            "sin": {
                "seconds": 1663584923,
                "nanoseconds": 547000000
            },
            "type": "Offl",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F7idNAjWqICj6KuR3xgB21663658547745?alt=media&token=2948c1a2-36d9-44bd-a91e-f080ad25b482"
        },
        {
            "products": 0,
            "shareUrlV1": "https://refrclub.com/o/Yt2M",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FzJzhuozfIkjEAsweL8Yy&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FzJzhuozfIkjEAsweL8Yy&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FzJzhuozfIkjEAsweL8Yy&ofl=club.refr.app&st=Majestic%20Ayurveda&sd=Health%20%26%20Wellbeing&si=",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "id": "zJzhuozfIkjEAsweL8Yy",
            "proCat": [],
            "log": {
                "seconds": 1663584681,
                "nanoseconds": 667000000
            },
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FzJzhuozfIkjEAsweL8Yy1663661844123?alt=media&token=1e0d17e4-12cc-4b9a-9a92-03c8a3f751e2",
            "schedule": {
                "openSunS": "07:00",
                "openWed": true,
                "openWedS": "07:00",
                "openFriE": "23:00",
                "openMon": true,
                "opensDailyE": "22:00",
                "openWedE": "23:00",
                "openSatE": "23:00",
                "openTue": true,
                "openThuS": "07:00",
                "openSatS": "07:00",
                "openFri": true,
                "openThu": true,
                "opensDailyS": "10:00",
                "opensDaily": true,
                "openMonE": "23:00",
                "openSun": false,
                "openSat": true,
                "openFriS": "07:00",
                "openSunE": "23:00",
                "openTueS": "07:00",
                "openMonS": "07:00",
                "openThuE": "23:00",
                "openTueE": "23:00"
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FzJzhuozfIkjEAsweL8Yy&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FzJzhuozfIkjEAsweL8Yy&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FzJzhuozfIkjEAsweL8Yy&ofl=club.refr.app&st=Majestic%20Ayurveda&sd=Health%20%26%20Wellbeing&si=",
            "email": "yuanthaispa@gmail.com",
            "typeORDER": {
                "delivery": "Citywide",
                "logistics": false,
                "return": true,
                "COD": true,
                "refund": true,
                "exchange": true
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FzJzhuozfIkjEAsweL8Yy&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FzJzhuozfIkjEAsweL8Yy&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FzJzhuozfIkjEAsweL8Yy&ofl=club.refr.app&st=Majestic%20Ayurveda&sd=Health%20%26%20Wellbeing&si=",
            "sin": {
                "seconds": 1663584681,
                "nanoseconds": 667000000
            },
            "banners": [],
            "name": "Majestic Ayurveda ",
            "shareUrlP1": "https://refrclub.com/o/hPPh",
            "cat": "salons_and_spa",
            "addedDynamicLinkP1": true,
            "type": "Offl",
            "loc": [
                {
                    "lat": 19.1695564,
                    "state": "MH",
                    "lon": 72.8452617,
                    "line1": "Shop no 1, Unnat Nagar Road, S.V. Road",
                    "locality": "Mumbai",
                    "zip": "400062",
                    "city": "Mumbai Suburban",
                    "region": "Maharashtra",
                    "area": "Majestic Goregao",
                    "nation": "IND",
                    "line2": "",
                    "id": "IND_MH_1663584681430"
                }
            ],
            "addedDynamicLink": true,
            "shareUrlX1": "https://refrclub.com/o/Umi8",
            "about": "Health & Wellbeing ",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FzJzhuozfIkjEAsweL8Yy&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FzJzhuozfIkjEAsweL8Yy&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FzJzhuozfIkjEAsweL8Yy&ofl=club.refr.app&st=Majestic%20Ayurveda&sd=Health%20%26%20Wellbeing&si=",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FzJzhuozfIkjEAsweL8Yy1663661837324?alt=media&token=3d8a08d0-f1bf-4126-b2e0-561016a2b383",
            "shareUrlB1": "https://refrclub.com/o/qnqi",
            "upd": {
                "seconds": 1663661850,
                "nanoseconds": 264000000
            },
            "phone": "7208186443",
            "by": "TJ54XN0MHSh5KvHibNnfDLvg2WL2"
        },
        {
            "cat": "salons_and_spa",
            "sin": {
                "seconds": 1663584442,
                "nanoseconds": 107000000
            },
            "shareUrlX1": "https://refrclub.com/o/5icw",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F2aMBQuXJ4mUu2E6PSeqq&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F2aMBQuXJ4mUu2E6PSeqq&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F2aMBQuXJ4mUu2E6PSeqq&ofl=club.refr.app&st=Myst%20Spa%20%26%20Salon&sd=Beauty%20is%20my%20attitude&si=",
            "name": "Myst Spa & Salon",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2aMBQuXJ4mUu2E6PSeqq1663658651597?alt=media&token=5ac6cdb1-4e38-4715-b48c-b087c94ca155",
            "log": {
                "seconds": 1663584442,
                "nanoseconds": 107000000
            },
            "type": "Offl",
            "proCat": [],
            "about": "Beauty is my attitude",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2aMBQuXJ4mUu2E6PSeqq1663658644189?alt=media&token=024c6e19-2448-4a63-bb33-90db63e41b1c",
            "products": 0,
            "schedule": {
                "openFri": true,
                "opensDaily": true,
                "openSun": false,
                "openSunE": "23:00",
                "openMonE": "23:00",
                "openMonS": "07:00",
                "openWedS": "07:00",
                "openSatS": "07:00",
                "opensDailyE": "22:00",
                "openMon": true,
                "openThu": true,
                "openWedE": "23:00",
                "openSatE": "23:00",
                "openTueS": "07:00",
                "opensDailyS": "10:00",
                "openFriS": "07:00",
                "openThuS": "07:00",
                "openWed": true,
                "openSat": true,
                "openSunS": "07:00",
                "openTue": true,
                "openThuE": "23:00",
                "openFriE": "23:00",
                "openTueE": "23:00"
            },
            "upd": {
                "seconds": 1663658657,
                "nanoseconds": 840000000
            },
            "shareUrlV1": "https://refrclub.com/o/AxGR",
            "email": "yuanthaispa@gmail.com",
            "addedDynamicLink": true,
            "loc": [
                {
                    "locality": "Mumbai",
                    "lon": 72.8393445,
                    "zip": "400067",
                    "city": "Mumbai Suburban",
                    "line2": "",
                    "state": "MH",
                    "line1": "Shop no 23,Madhurima Society C wing, Mahavir Nagar, Panchsheel Garden",
                    "nation": "IND",
                    "id": "IND_MH_1663584441896",
                    "region": "Maharashtra",
                    "lat": 19.2107089,
                    "area": "Myst Kandi"
                }
            ],
            "phone": "9324088565",
            "typeORDER": {
                "delivery": "Citywide",
                "logistics": false,
                "COD": true,
                "return": true,
                "refund": true,
                "exchange": true
            },
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F2aMBQuXJ4mUu2E6PSeqq&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F2aMBQuXJ4mUu2E6PSeqq&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F2aMBQuXJ4mUu2E6PSeqq&ofl=club.refr.app&st=Myst%20Spa%20%26%20Salon&sd=Beauty%20is%20my%20attitude&si=",
            "by": "xwvO4oeC5fTCimEIQ6GbZosW2h13",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F2aMBQuXJ4mUu2E6PSeqq&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F2aMBQuXJ4mUu2E6PSeqq&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F2aMBQuXJ4mUu2E6PSeqq&ofl=club.refr.app&st=Myst%20Spa%20%26%20Salon&sd=Beauty%20is%20my%20attitude&si=",
            "id": "2aMBQuXJ4mUu2E6PSeqq",
            "shareUrlP1": "https://refrclub.com/o/Rduk",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "shareUrlB1": "https://refrclub.com/o/Hwh5",
            "addedDynamicLinkP1": true,
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F2aMBQuXJ4mUu2E6PSeqq&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F2aMBQuXJ4mUu2E6PSeqq&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F2aMBQuXJ4mUu2E6PSeqq&ofl=club.refr.app&st=Myst%20Spa%20%26%20Salon&sd=Beauty%20is%20my%20attitude&si=",
            "banners": []
        },
        {
            "shareUrlX1": "https://refrclub.com/o/xA8U",
            "cat": "salons_and_spa",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FoOWln9WM64mjH1QEotxV&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FoOWln9WM64mjH1QEotxV&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FoOWln9WM64mjH1QEotxV&ofl=club.refr.app&st=Thai%20Magica&sd=Experience%20the%20magic%20of%20thailand&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoOWln9WM64mjH1QEotxVLOGO1663584206391%3Falt%3Dmedia%26token%3D3a0e403c-bf73-4eb5-bf81-5ffaf7ad2f0d",
            "shareUrlV1": "https://refrclub.com/o/Nrhy",
            "type": "Offl",
            "about": "Experience the magic of thailand",
            "shareUrlB1": "https://refrclub.com/o/u11k",
            "proCat": [],
            "id": "oOWln9WM64mjH1QEotxV",
            "shareUrlP1": "https://refrclub.com/o/Fpah",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoOWln9WM64mjH1QEotxVPOST1663584208971?alt=media&token=a74c9e12-c4c6-44af-818e-f4b52a30afba",
            "upd": {
                "seconds": 1663584206,
                "nanoseconds": 233000000
            },
            "by": "ZDAZQzhIssgcUats1EWxszykGIx2",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FoOWln9WM64mjH1QEotxV&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FoOWln9WM64mjH1QEotxV&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FoOWln9WM64mjH1QEotxV&ofl=club.refr.app&st=Thai%20Magica&sd=Experience%20the%20magic%20of%20thailand&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoOWln9WM64mjH1QEotxVLOGO1663584206391%3Falt%3Dmedia%26token%3D3a0e403c-bf73-4eb5-bf81-5ffaf7ad2f0d",
            "typeORDER": {
                "refund": true,
                "exchange": true,
                "COD": true,
                "return": true,
                "delivery": "Citywide",
                "logistics": false
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FoOWln9WM64mjH1QEotxV&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FoOWln9WM64mjH1QEotxV&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FoOWln9WM64mjH1QEotxV&ofl=club.refr.app&st=Thai%20Magica&sd=Experience%20the%20magic%20of%20thailand&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoOWln9WM64mjH1QEotxVLOGO1663584206391%3Falt%3Dmedia%26token%3D3a0e403c-bf73-4eb5-bf81-5ffaf7ad2f0d",
            "log": {
                "seconds": 1663584206,
                "nanoseconds": 233000000
            },
            "name": "Thai Magica",
            "addedDynamicLinkP1": true,
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoOWln9WM64mjH1QEotxVLOGO1663584206391?alt=media&token=3a0e403c-bf73-4eb5-bf81-5ffaf7ad2f0d",
            "products": 0,
            "email": "yuanthaispa@gmail.com",
            "phone": "9769941333",
            "subCat": "sc-salons_and_spa-unisex_spa",
            "loc": [
                {
                    "lat": 19.2222431,
                    "lon": 72.8404023,
                    "city": "Mumbai Suburban",
                    "area": "Thai Magica",
                    "region": "Maharashtra",
                    "zip": "400092",
                    "nation": "IND",
                    "state": "MH",
                    "line2": "",
                    "id": "IND_MH_1663584206009",
                    "line1": "1st floor, Sanskruti CHS LTD, New link road, above ICICI bank, Shimpoli ",
                    "locality": "W"
                }
            ],
            "addedDynamicLink": true,
            "schedule": {
                "openFri": true,
                "openMonE": "23:00",
                "openThuS": "07:00",
                "opensDaily": true,
                "openWedE": "23:00",
                "openSunE": "23:00",
                "openTueE": "23:00",
                "openFriS": "07:00",
                "openSun": false,
                "openTue": true,
                "openThuE": "23:00",
                "openSatS": "07:00",
                "openMon": true,
                "openWedS": "07:00",
                "openTueS": "07:00",
                "openFriE": "23:00",
                "opensDailyS": "10:00",
                "openMonS": "07:00",
                "opensDailyE": "22:00",
                "openSunS": "07:00",
                "openSatE": "23:00",
                "openSat": true,
                "openWed": true,
                "openThu": true
            },
            "sin": {
                "seconds": 1663584206,
                "nanoseconds": 233000000
            },
            "banners": [],
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FoOWln9WM64mjH1QEotxV&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FoOWln9WM64mjH1QEotxV&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FoOWln9WM64mjH1QEotxV&ofl=club.refr.app&st=Thai%20Magica&sd=Experience%20the%20magic%20of%20thailand&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FoOWln9WM64mjH1QEotxVLOGO1663584206391%3Falt%3Dmedia%26token%3D3a0e403c-bf73-4eb5-bf81-5ffaf7ad2f0d"
        },
        {
            "email": "cutsandcolorz@gmail.com",
            "name": "Cuts & Colorz ",
            "type": "Offl",
            "vGave": 50,
            "about": "Cuts and Colorz Salon & Spa service excellence is the only key to success",
            "shareUrlX1": "https://refrclub.com/o/4gco",
            "vFan": 1,
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FkR3Iddhu0w6HFc9yiANS&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FkR3Iddhu0w6HFc9yiANS&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FkR3Iddhu0w6HFc9yiANS&ofl=club.refr.app&st=Cuts%20%26%20Colorz&sd=Cuts%20and%20Colorz%20Salon%20%26%20Spa%20service%20excellence%20is%20the%20only%20key%20to%20success&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FkR3Iddhu0w6HFc9yiANSLOGO1663434696813%3Falt%3Dmedia%26token%3Dce1c8c15-507f-4dfe-aa0b-fb51cfe56c36",
            "id": "kR3Iddhu0w6HFc9yiANS",
            "cashback": 100,
            "shareUrlP1": "https://refrclub.com/o/VME7",
            "phone": "9867889638",
            "typeORDER": {
                "delivery": "Citywide",
                "refund": true,
                "logistics": false,
                "exchange": true,
                "COD": true,
                "return": true
            },
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkR3Iddhu0w6HFc9yiANSLOGO1663434696813?alt=media&token=ce1c8c15-507f-4dfe-aa0b-fb51cfe56c36",
            "shareUrlV1": "https://refrclub.com/o/LmHk",
            "sin": {
                "seconds": 1663434696,
                "nanoseconds": 674000000
            },
            "log": {
                "seconds": 1663434696,
                "nanoseconds": 674000000
            },
            "vEarn": 1000,
            "addedDynamicLink": true,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FkR3Iddhu0w6HFc9yiANS&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FkR3Iddhu0w6HFc9yiANS&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FkR3Iddhu0w6HFc9yiANS&ofl=club.refr.app&st=Cuts%20%26%20Colorz&sd=Cuts%20and%20Colorz%20Salon%20%26%20Spa%20service%20excellence%20is%20the%20only%20key%20to%20success&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FkR3Iddhu0w6HFc9yiANSLOGO1663434696813%3Falt%3Dmedia%26token%3Dce1c8c15-507f-4dfe-aa0b-fb51cfe56c36",
            "subCat": "sc-salons_and_spa-unisex_salon",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkR3Iddhu0w6HFc9yiANSPOST1663434699259?alt=media&token=e67f169e-3468-4916-92f9-33f5de6934a0",
            "banners": [
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkR3Iddhu0w6HFc9yiANS1663923902212?alt=media&token=e8d5f597-4771-4741-864a-72b8c848280b",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkR3Iddhu0w6HFc9yiANS1663927051998?alt=media&token=04bfe50c-bf9a-4458-b235-f7fc8c596aab",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkR3Iddhu0w6HFc9yiANS1663927116509?alt=media&token=04c0f953-7ed2-42b5-ace3-deb0899018cb",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkR3Iddhu0w6HFc9yiANS1663927139248?alt=media&token=ab4eb23a-6ae4-4a17-a56e-1e961c7429c4",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FkR3Iddhu0w6HFc9yiANS1663927165893?alt=media&token=68c0c586-e108-451d-9508-e3cba8617bf9"
            ],
            "vOrdr": 1,
            "proCat": [],
            "upd": {
                "seconds": 1663927174,
                "nanoseconds": 842000000
            },
            "addedDynamicLinkP1": true,
            "cat": "salons_and_spa",
            "by": "WSShs1OG7Nbr3LJ3aNDLyiHs2b62",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FkR3Iddhu0w6HFc9yiANS&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FkR3Iddhu0w6HFc9yiANS&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FkR3Iddhu0w6HFc9yiANS&ofl=club.refr.app&st=Cuts%20%26%20Colorz&sd=Cuts%20and%20Colorz%20Salon%20%26%20Spa%20service%20excellence%20is%20the%20only%20key%20to%20success&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FkR3Iddhu0w6HFc9yiANSLOGO1663434696813%3Falt%3Dmedia%26token%3Dce1c8c15-507f-4dfe-aa0b-fb51cfe56c36",
            "products": 0,
            "shareUrlB1": "https://refrclub.com/o/v5Xg",
            "loc": [
                {
                    "area": "Evershine Halley Towers CHS Ltd,, EMP 48, Shop No-01,, Thakur Village, Kandivali East, Kandivali, Evershine Millennium Paradise, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101, India",
                    "zip": "400101",
                    "city": "Mumbai Suburban",
                    "line2": "",
                    "lon": 72.87312032061112,
                    "state": "MH",
                    "nation": "IND",
                    "region": "Maharashtra",
                    "lat": 19.211050578489665,
                    "line1": "Shop no. 1, Evershine Halley tower, Thakur Village, Kandivali (East)",
                    "locality": "Mumbai",
                    "id": "IND_MH_1663434696456"
                }
            ],
            "schedule": {
                "openThu": true,
                "openThuS": "07:00",
                "openWedE": "23:00",
                "openWedS": "07:00",
                "openMonE": "23:00",
                "openTueS": "07:00",
                "opensDailyE": "21:30",
                "openMonS": "07:00",
                "openSunE": "23:00",
                "openTueE": "23:00",
                "openSun": false,
                "openSatE": "23:00",
                "openSat": true,
                "opensDailyS": "09:30",
                "openMon": true,
                "openThuE": "23:00",
                "openSatS": "07:00",
                "openFriS": "07:00",
                "openFriE": "23:00",
                "openTue": true,
                "openWed": true,
                "openSunS": "07:00",
                "openFri": true,
                "opensDaily": true
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FkR3Iddhu0w6HFc9yiANS&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FkR3Iddhu0w6HFc9yiANS&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FkR3Iddhu0w6HFc9yiANS&ofl=club.refr.app&st=Cuts%20%26%20Colorz&sd=Cuts%20and%20Colorz%20Salon%20%26%20Spa%20service%20excellence%20is%20the%20only%20key%20to%20success&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FkR3Iddhu0w6HFc9yiANSLOGO1663434696813%3Falt%3Dmedia%26token%3Dce1c8c15-507f-4dfe-aa0b-fb51cfe56c36"
        },
        {
            "by": "ioxpqUqg7OQDqLCd5WBqT1MrCEh1",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FSubTY8jHjpgYSVp3cJ0s&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FSubTY8jHjpgYSVp3cJ0s&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FSubTY8jHjpgYSVp3cJ0s&ofl=club.refr.app&st=The%20Juice%20Junction&sd=One%20stop%20shop%20for%20fresh%20cold%20press%20juices%20%26%20shakes&si=",
            "id": "SubTY8jHjpgYSVp3cJ0s",
            "addedDynamicLinkP1": true,
            "shareUrlV1": "https://refrclub.com/o/yZXr",
            "addedDynamicLink": true,
            "products": 0,
            "email": "thejuicejunction23@gmail.com",
            "phone": "8850575588",
            "loc": [
                {
                    "lon": 72.8411165,
                    "nation": "IND",
                    "lat": 19.2119153,
                    "line2": "",
                    "city": "Mumbai Suburban",
                    "zip": "400067",
                    "line1": "Shop no 3, Bhoomi Enclave ",
                    "id": "IND_MH_1663427445851",
                    "state": "MH",
                    "region": "Maharashtra",
                    "locality": "Mumbai",
                    "area": "The Juice jun"
                }
            ],
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSubTY8jHjpgYSVp3cJ0s1663670193116?alt=media&token=2e35231d-6913-4d46-b458-3801f682ddf2",
            "shareUrlP1": "https://refrclub.com/o/Kzsz",
            "proCat": [],
            "sin": {
                "seconds": 1663427446,
                "nanoseconds": 985000000
            },
            "about": "One stop shop for fresh cold press juices & shakes",
            "typeORDER": {
                "exchange": true,
                "return": true,
                "refund": true,
                "delivery": "Citywide",
                "COD": true,
                "logistics": false
            },
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FSubTY8jHjpgYSVp3cJ0s&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FSubTY8jHjpgYSVp3cJ0s&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FSubTY8jHjpgYSVp3cJ0s&ofl=club.refr.app&st=The%20Juice%20Junction&sd=One%20stop%20shop%20for%20fresh%20cold%20press%20juices%20%26%20shakes&si=",
            "shareUrlX1": "https://refrclub.com/o/Rc2N",
            "cat": "food_and_beverages",
            "type": "Offl",
            "subCat": "sc-food_and_beverages-cafe",
            "schedule": {
                "opensDailyE": "11:30",
                "openWed": true,
                "openSunS": "11:30",
                "openMonS": "16:30",
                "openTueS": "11:30",
                "openMon": true,
                "openSatE": "23:30",
                "openFri": true,
                "openMonE": "23:30",
                "openTue": true,
                "openTueE": "23:30",
                "openThuE": "23:30",
                "openSun": true,
                "openSunE": "23:30",
                "openWedS": "11:30",
                "openSatS": "11:30",
                "opensDaily": false,
                "openThu": true,
                "openWedE": "23:30",
                "openThuS": "11:30",
                "openFriE": "23:30",
                "opensDailyS": "11:30",
                "openFriS": "11:30",
                "openSat": true
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FSubTY8jHjpgYSVp3cJ0s&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FSubTY8jHjpgYSVp3cJ0s&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FSubTY8jHjpgYSVp3cJ0s&ofl=club.refr.app&st=The%20Juice%20Junction&sd=One%20stop%20shop%20for%20fresh%20cold%20press%20juices%20%26%20shakes&si=",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FSubTY8jHjpgYSVp3cJ0s&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FSubTY8jHjpgYSVp3cJ0s&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FSubTY8jHjpgYSVp3cJ0s&ofl=club.refr.app&st=The%20Juice%20Junction&sd=One%20stop%20shop%20for%20fresh%20cold%20press%20juices%20%26%20shakes&si=",
            "name": "The Juice Junction",
            "banners": [],
            "shareUrlB1": "https://refrclub.com/o/E2bK",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSubTY8jHjpgYSVp3cJ0s1663675329031?alt=media&token=d4ea74e9-0962-4d43-938b-ba14521bade9",
            "log": {
                "seconds": 1663427446,
                "nanoseconds": 985000000
            },
            "upd": {
                "seconds": 1663675334,
                "nanoseconds": 819000000
            }
        },
        {
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FfNkUuLkeerfHUZu1ki4gPOST1663424536828?alt=media&token=ba34ed2e-dc81-460b-827c-98168e3cbf83",
            "log": {
                "seconds": 1663424534,
                "nanoseconds": 768000000
            },
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FfNkUuLkeerfHUZu1ki4g&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FfNkUuLkeerfHUZu1ki4g&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FfNkUuLkeerfHUZu1ki4g&ofl=club.refr.app&st=Lookout%20Salon%20%26%20Academy&sd=Be%20your%20best%20version&si=",
            "subCat": "sc-salons_and_spa-unisex_salon",
            "by": "tPsUK9I96ibtWtuN965IUcRMgwD3",
            "email": "dhavalsolanki7222@gmail.com",
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FfNkUuLkeerfHUZu1ki4gLOGO1663424534939?alt=media&token=a2a38ce2-344e-4f69-b2a0-a48939e7ebb9",
            "upd": {
                "seconds": 1663424534,
                "nanoseconds": 768000000
            },
            "typeORDER": {
                "delivery": "Citywide",
                "return": true,
                "COD": true,
                "exchange": true,
                "refund": true,
                "logistics": false
            },
            "schedule": {
                "openSunE": "23:00",
                "opensDaily": true,
                "openSatS": "07:00",
                "openWedE": "23:00",
                "openMonE": "23:00",
                "opensDailyE": "21:30",
                "openWedS": "07:00",
                "openTue": true,
                "openSun": false,
                "openFriS": "07:00",
                "openMonS": "07:00",
                "openThu": true,
                "openFri": true,
                "openTueE": "23:00",
                "openSunS": "07:00",
                "openTueS": "07:00",
                "openWed": true,
                "openFriE": "23:00",
                "openMon": true,
                "openThuS": "07:00",
                "opensDailyS": "09:30",
                "openSatE": "23:00",
                "openSat": true,
                "openThuE": "23:00"
            },
            "name": "Lookout Salon & Academy ",
            "addedDynamicLinkP1": true,
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FfNkUuLkeerfHUZu1ki4g&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FfNkUuLkeerfHUZu1ki4g&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FfNkUuLkeerfHUZu1ki4g&ofl=club.refr.app&st=Lookout%20Salon%20%26%20Academy&sd=Be%20your%20best%20version&si=",
            "sin": {
                "seconds": 1663424534,
                "nanoseconds": 768000000
            },
            "products": 0,
            "proCat": [],
            "phone": "9820991227",
            "type": "Offl",
            "shareUrlP1": "https://refrclub.com/o/wT4u",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FfNkUuLkeerfHUZu1ki4g&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FfNkUuLkeerfHUZu1ki4g&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FfNkUuLkeerfHUZu1ki4g&ofl=club.refr.app&st=Lookout%20Salon%20%26%20Academy&sd=Be%20your%20best%20version&si=",
            "about": "Be your best version",
            "cat": "salons_and_spa",
            "banners": [],
            "loc": [
                {
                    "zip": "400067",
                    "line1": "Shop no 15/16, Oswal nivas, opp raj garden building ",
                    "city": "Mumbai Suburban",
                    "area": "Lookout salon",
                    "lon": 72.8397486,
                    "id": "IND_MH_1663424534363",
                    "line2": "",
                    "nation": "IND",
                    "locality": "Mumbai",
                    "state": "MH",
                    "region": "Maharashtra",
                    "lat": 19.2119639
                }
            ],
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FfNkUuLkeerfHUZu1ki4g&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FfNkUuLkeerfHUZu1ki4g&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FfNkUuLkeerfHUZu1ki4g&ofl=club.refr.app&st=Lookout%20Salon%20%26%20Academy&sd=Be%20your%20best%20version&si=",
            "id": "fNkUuLkeerfHUZu1ki4g",
            "shareUrlX1": "https://refrclub.com/o/9aYg",
            "shareUrlV1": "https://refrclub.com/o/Dbua",
            "addedDynamicLink": true,
            "shareUrlB1": "https://refrclub.com/o/ajLJ"
        },
        {
            "shareUrlP1": "https://refrclub.com/o/TXM2",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FyCAdnFqbOVUbaWXCGY9D&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FyCAdnFqbOVUbaWXCGY9D&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FyCAdnFqbOVUbaWXCGY9D&ofl=club.refr.app&st=AMBRIONA&sd=Welcome%20to%20Ambriona%20Gourmet.%20We%20are%20an%20Indian%20Gourmet%20food%20company%2C%20creating%20products%20to%20satisfy%20your%20cravings%20without%20impeding%20your%20everyday%20healthy%20lifestyle%20choices.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FyCAdnFqbOVUbaWXCGY9DLOGO1663323542809%3Falt%3Dmedia%26token%3D2596c70c-1ba8-4cc1-8e96-e1aec83ae70b",
            "sin": {
                "seconds": 1663323540,
                "nanoseconds": 598000000
            },
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FyCAdnFqbOVUbaWXCGY9DLOGO1663323542809?alt=media&token=2596c70c-1ba8-4cc1-8e96-e1aec83ae70b",
            "loc": [
                {
                    "city": "Mumbai Suburban",
                    "zip": "400057",
                    "region": "Maharashtra",
                    "line1": "The Summit Business Bay 302  H-2, Western Express Hwy, Nav Prabhat Society, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057",
                    "lat": 19.1023974,
                    "area": "The Summit Business Bay, Western Express Highway, Nav Prabhat Society, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra, India",
                    "id": "IND_MH_1663323542105",
                    "lon": 72.85403749999999,
                    "state": "MH",
                    "locality": "Mumbai",
                    "line2": "",
                    "nation": "IND"
                }
            ],
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FyCAdnFqbOVUbaWXCGY9DPOST1663323544156?alt=media&token=2029e6fa-2135-4693-bb84-9632f3dbc548",
            "shareUrlB1": "https://refrclub.com/o/4Cyn",
            "proCat": [
                "Assorted Nuts",
                "Daarzel Zero Sugar Chocolate Bars",
                "Mug",
                "Gift Box",
                "Daarzel Dark Chocolate",
                "Chocolate Coated Nuts",
                "Ambriona Dark Chocolates",
                "Flavored Nuts",
                "Daarzel Treats",
                "Sugar Free Bars",
                "Daarzel Keto",
                "Daarzel Fruits Combo",
                "Nut Butter",
                "Truffle Box",
                "Compound Slab",
                "Honey",
                "Truffle"
            ],
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FyCAdnFqbOVUbaWXCGY9D&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FyCAdnFqbOVUbaWXCGY9D&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FyCAdnFqbOVUbaWXCGY9D&ofl=club.refr.app&st=AMBRIONA&sd=Welcome%20to%20Ambriona%20Gourmet.%20We%20are%20an%20Indian%20Gourmet%20food%20company%2C%20creating%20products%20to%20satisfy%20your%20cravings%20without%20impeding%20your%20everyday%20healthy%20lifestyle%20choices.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FyCAdnFqbOVUbaWXCGY9DLOGO1663323542809%3Falt%3Dmedia%26token%3D2596c70c-1ba8-4cc1-8e96-e1aec83ae70b",
            "id": "yCAdnFqbOVUbaWXCGY9D",
            "upd": {
                "seconds": 1663324358,
                "nanoseconds": 45000000
            },
            "addedDynamicLink": true,
            "name": "AMBRIONA",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FyCAdnFqbOVUbaWXCGY9D&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FyCAdnFqbOVUbaWXCGY9D&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FyCAdnFqbOVUbaWXCGY9D&ofl=club.refr.app&st=AMBRIONA&sd=Welcome%20to%20Ambriona%20Gourmet.%20We%20are%20an%20Indian%20Gourmet%20food%20company%2C%20creating%20products%20to%20satisfy%20your%20cravings%20without%20impeding%20your%20everyday%20healthy%20lifestyle%20choices.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FyCAdnFqbOVUbaWXCGY9DLOGO1663323542809%3Falt%3Dmedia%26token%3D2596c70c-1ba8-4cc1-8e96-e1aec83ae70b",
            "schedule": {
                "opensDaily": true,
                "openSat": true,
                "openSatS": "07:00",
                "openTueE": "23:00",
                "openSunE": "23:00",
                "openThu": true,
                "openMonS": "07:00",
                "openWed": true,
                "openMon": true,
                "openMonE": "23:00",
                "openFriS": "07:00",
                "opensDailyE": "23:00",
                "openTue": true,
                "openFri": true,
                "openFriE": "23:00",
                "openWedS": "07:00",
                "openSunS": "07:00",
                "openThuE": "23:00",
                "openThuS": "07:00",
                "openSun": false,
                "opensDailyS": "07:00",
                "openTueS": "07:00",
                "openWedE": "23:00",
                "openSatE": "23:00"
            },
            "about": "Welcome to Ambriona Gourmet. We are an Indian Gourmet food company, creating products to satisfy your cravings without impeding your everyday healthy lifestyle choices.",
            "typeORDER": {
                "nationCharge": 0,
                "freeStart": 0,
                "cityCharge": 0,
                "return": false,
                "logistics": true,
                "phoneHide": true,
                "exchange": false,
                "delivery": "Nationwide",
                "freeParcel": false,
                "refund": false,
                "COD": false
            },
            "type": "Onli",
            "phone": "7999585556",
            "shareUrlV1": "https://refrclub.com/o/6Hja",
            "cat": "supermarket",
            "shareUrlX1": "https://refrclub.com/o/8K8G",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FyCAdnFqbOVUbaWXCGY9D&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FyCAdnFqbOVUbaWXCGY9D&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FyCAdnFqbOVUbaWXCGY9D&ofl=club.refr.app&st=AMBRIONA&sd=Welcome%20to%20Ambriona%20Gourmet.%20We%20are%20an%20Indian%20Gourmet%20food%20company%2C%20creating%20products%20to%20satisfy%20your%20cravings%20without%20impeding%20your%20everyday%20healthy%20lifestyle%20choices.&si=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frefr%2Fo%2Fstore%252FyCAdnFqbOVUbaWXCGY9DLOGO1663323542809%3Falt%3Dmedia%26token%3D2596c70c-1ba8-4cc1-8e96-e1aec83ae70b",
            "log": {
                "seconds": 1663323540,
                "nanoseconds": 598000000
            },
            "subCat": "supermarket-any",
            "products": 157,
            "addedDynamicLinkP1": true,
            "cashback": 50,
            "email": "ambrionaonlinesales@gmail.com",
            "by": "O2qq7kOJL8UNaw2BDJ4y1Hkn6nA3",
            "banners": []
        },
        {
            "id": "LUYKk1tNltuwW1epEwH2",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FLUYKk1tNltuwW1epEwH2&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FLUYKk1tNltuwW1epEwH2&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FLUYKk1tNltuwW1epEwH2&ofl=club.refr.app&st=KD%20Opticians&sd=Eye%20opticians&si=",
            "log": {
                "seconds": 1663256051,
                "nanoseconds": 364000000
            },
            "sin": {
                "seconds": 1663256051,
                "nanoseconds": 364000000
            },
            "shareUrlB1": "https://refrclub.com/o/cK4M",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FLUYKk1tNltuwW1epEwH2&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FLUYKk1tNltuwW1epEwH2&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FLUYKk1tNltuwW1epEwH2&ofl=club.refr.app&st=KD%20Opticians&sd=Eye%20opticians&si=",
            "products": 0,
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLUYKk1tNltuwW1epEwH2LOGO1663256051595?alt=media&token=0c724ea0-91ed-4e45-8a61-0267419e68d2",
            "shareUrlP1": "https://refrclub.com/o/Mjcn",
            "addedDynamicLink": true,
            "typeORDER": {
                "refund": true,
                "exchange": true,
                "delivery": "Citywide",
                "logistics": false,
                "COD": true,
                "return": true
            },
            "type": "Offl",
            "schedule": {
                "opensDailyE": "22:00",
                "openMonE": "23:00",
                "openMon": true,
                "openSatS": "07:00",
                "opensDaily": true,
                "opensDailyS": "10:00",
                "openSun": false,
                "openSunS": "07:00",
                "openFriS": "07:00",
                "openFriE": "23:00",
                "openWedS": "07:00",
                "openTueS": "07:00",
                "openTueE": "23:00",
                "openWedE": "23:00",
                "openSunE": "23:00",
                "openSatE": "23:00",
                "openThu": true,
                "openMonS": "07:00",
                "openThuS": "07:00",
                "openSat": true,
                "openTue": true,
                "openThuE": "23:00",
                "openWed": true,
                "openFri": true
            },
            "phone": "8451818523",
            "addedDynamicLinkP1": true,
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FLUYKk1tNltuwW1epEwH2&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FLUYKk1tNltuwW1epEwH2&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FLUYKk1tNltuwW1epEwH2&ofl=club.refr.app&st=KD%20Opticians&sd=Eye%20opticians&si=",
            "upd": {
                "seconds": 1663338256,
                "nanoseconds": 77000000
            },
            "about": "Eye opticians ",
            "banners": [],
            "loc": [
                {
                    "lat": 19.2108314,
                    "zip": "400101",
                    "area": "Thakur",
                    "id": "IND_MH_1663256051090",
                    "nation": "IND",
                    "line1": "Shop no 16, Shri Aangan society , near Thakur college ",
                    "locality": "Mumbai",
                    "line2": "",
                    "city": "Mumbai Suburban",
                    "state": "MH",
                    "lon": 72.874741,
                    "region": "Maharashtra"
                }
            ],
            "shareUrlV1": "https://refrclub.com/o/yQ6S",
            "proCat": [],
            "cashback": 200,
            "subCat": "sc-fashion_brand-fashion_for_all",
            "cat": "fashion_brand",
            "email": "kdeyeopticians@gmail.com",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLUYKk1tNltuwW1epEwH21663338249148?alt=media&token=022e8900-0599-48f7-b1c3-f37c1ee60206",
            "by": "KSg8HRF74jhGZ5UX68duzNsBwS63",
            "shareUrlX1": "https://refrclub.com/o/iWFg",
            "name": "KD Opticians",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FLUYKk1tNltuwW1epEwH2&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FLUYKk1tNltuwW1epEwH2&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FLUYKk1tNltuwW1epEwH2&ofl=club.refr.app&st=KD%20Opticians&sd=Eye%20opticians&si="
        },
        {
            "schedule": {
                "opensDailyE": "23:00",
                "openSun": false,
                "openThuE": "23:00",
                "openSatE": "23:00",
                "openFriS": "07:00",
                "openFriE": "23:00",
                "openThuS": "07:00",
                "openTueE": "23:00",
                "openMonE": "23:00",
                "openThu": true,
                "openSatS": "07:00",
                "openTueS": "07:00",
                "openMonS": "07:00",
                "openMon": true,
                "openWed": true,
                "openSunS": "07:00",
                "openSat": true,
                "openSunE": "23:00",
                "openWedS": "07:00",
                "openWedE": "23:00",
                "opensDaily": true,
                "openFri": true,
                "opensDailyS": "07:30",
                "openTue": true
            },
            "addedDynamicLinkP1": true,
            "typeORDER": {
                "exchange": true,
                "refund": true,
                "delivery": "Citywide",
                "logistics": false,
                "return": true,
                "COD": true
            },
            "shareUrlX1": "https://refrclub.com/o/dEXc",
            "upd": {
                "seconds": 1663688283,
                "nanoseconds": 510000000
            },
            "about": "Kaapi house ",
            "shareUrlV1": "https://refrclub.com/o/fd7h",
            "log": {
                "seconds": 1663254533,
                "nanoseconds": 454000000
            },
            "cat": "food_and_beverages",
            "vEarn": 825,
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F208xpXD86r0LtaR8Z2ef1663410723570?alt=media&token=f0acf59a-59ec-4dba-a466-04a3126d9802",
            "by": "7N8JmAMRbHWx6eakJACfDghaDl32",
            "vGave": 85,
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F208xpXD86r0LtaR8Z2efLOGO1663254533795?alt=media&token=2e19a2c2-df69-4135-a9f2-fa531068e60f",
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2F208xpXD86r0LtaR8Z2ef&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2F208xpXD86r0LtaR8Z2ef&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2F208xpXD86r0LtaR8Z2ef&ofl=club.refr.app&st=Madrasi&sd=Kaapi%20house&si=",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2F208xpXD86r0LtaR8Z2ef&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2F208xpXD86r0LtaR8Z2ef&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2F208xpXD86r0LtaR8Z2ef&ofl=club.refr.app&st=Madrasi&sd=Kaapi%20house&si=",
            "addedDynamicLink": true,
            "vFan": 4,
            "vOrdr": 4,
            "shareUrlB1": "https://refrclub.com/o/nqC6",
            "name": "Madrasi Kaapi House",
            "phone": "9833588648",
            "subCat": "sc-food_and_beverages-cafe",
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2F208xpXD86r0LtaR8Z2ef&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2F208xpXD86r0LtaR8Z2ef&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2F208xpXD86r0LtaR8Z2ef&ofl=club.refr.app&st=Madrasi&sd=Kaapi%20house&si=",
            "sin": {
                "seconds": 1663254533,
                "nanoseconds": 454000000
            },
            "products": 51,
            "proCat": [
                "KAADHA KAAPI",
                "SNACK MENU",
                "COLD DESSERTS",
                "MUNCHIES N MORE",
                "COOKIES N MORE",
                "HOT BEVERAGES",
                "COLD BEVERAGES",
                "COOLERD",
                "ICE TEAS",
                "MILK SHAKES N SMOOTHIES"
            ],
            "cashback": 30,
            "id": "208xpXD86r0LtaR8Z2ef",
            "shareUrlP1": "https://refrclub.com/o/N645",
            "type": "Both",
            "banners": [
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F208xpXD86r0LtaR8Z2ef1663605318638?alt=media&token=e16f0ef4-4515-4c95-bdf1-92801d19bb12",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F208xpXD86r0LtaR8Z2ef1663605332869?alt=media&token=c0f433ce-bb7a-44ed-a807-373c497d686a",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F208xpXD86r0LtaR8Z2ef1663605354884?alt=media&token=03d43ebb-624c-454a-a608-f7560b95f104"
            ],
            "email": "madrasikaapi@gmail.com",
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2F208xpXD86r0LtaR8Z2ef&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2F208xpXD86r0LtaR8Z2ef&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2F208xpXD86r0LtaR8Z2ef&ofl=club.refr.app&st=Madrasi&sd=Kaapi%20house&si=",
            "loc": [
                {
                    "region": "Maharashtra",
                    "line1": "Next to Cotton Cottage Halley Building, Phase 5, Evershine Millennium Paradise, Thakur Village, Kandivali East",
                    "id": "IND_MH_1663254532982",
                    "state": "MH",
                    "nation": "IND",
                    "line2": "",
                    "city": "Mumbai Suburban",
                    "lat": 19.21154743210148,
                    "locality": "Mumbai",
                    "zip": "400101",
                    "lon": 72.87318435052657,
                    "area": "Voice Roy Park, Kandivali, Evershine Millennium Paradise, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101, India"
                }
            ]
        },
        {
            "email": "taari.mumbai@gmail.com",
            "longLinkX1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fx1%2FR6y69rW21ZjdzsTVlDwr&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fx1%2FR6y69rW21ZjdzsTVlDwr&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fx1%2FR6y69rW21ZjdzsTVlDwr&ofl=club.refr.app&st=Tarri&sd=Chase%20the%20taste%20of%20Maharashtra&si=",
            "about": "Chase the taste of Maharashtra ",
            "id": "R6y69rW21ZjdzsTVlDwr",
            "loc": [
                {
                    "line2": "",
                    "lat": 19.207180942454638,
                    "locality": "Mumbai",
                    "region": "Maharashtra",
                    "state": "MH",
                    "lon": 72.87438613079047,
                    "city": "Mumbai Suburban",
                    "zip": "400101",
                    "nation": "IND",
                    "line1": "Vasant Utsav, Shop no 19, RAKHEE, Thakur College Internal Rd, ठाकुर, Thakur Village, Kandivali East",
                    "id": "IND_MH_1663251402535",
                    "area": "Sarova G Wing, 25th Floor, 2503 Room, Samta Nagar Rd, Kandivali, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101, India"
                }
            ],
            "logo": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FR6y69rW21ZjdzsTVlDwr1663397718257?alt=media&token=3f439d74-996d-4b89-8f67-a98c63f9719b",
            "shareUrlV1": "https://refrclub.com/o/g8fu",
            "banners": [
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FR6y69rW21ZjdzsTVlDwr1663397743919?alt=media&token=5c68653f-8166-4fad-8272-3aa2bb2e3aab",
                "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FR6y69rW21ZjdzsTVlDwr1663397813789?alt=media&token=1bded9ba-3b80-45c9-ba48-64bb99f4f18c"
            ],
            "shareUrlP1": "https://refrclub.com/o/k9tX",
            "addedDynamicLinkP1": true,
            "addedDynamicLink": true,
            "longLinkB1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fb1%2FR6y69rW21ZjdzsTVlDwr&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fb1%2FR6y69rW21ZjdzsTVlDwr&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fb1%2FR6y69rW21ZjdzsTVlDwr&ofl=club.refr.app&st=Tarri&sd=Chase%20the%20taste%20of%20Maharashtra&si=",
            "vGave": 50,
            "subCat": "sc-food_and_beverages-restaurants",
            "cashback": 50,
            "longLinkP1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fp1%2FR6y69rW21ZjdzsTVlDwr&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fp1%2FR6y69rW21ZjdzsTVlDwr&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fp1%2FR6y69rW21ZjdzsTVlDwr&ofl=club.refr.app&st=Tarri&sd=Chase%20the%20taste%20of%20Maharashtra&si=",
            "name": "Tarri",
            "phone": "7977315840",
            "schedule": {
                "openFriE": "23:00",
                "openSunE": "23:00",
                "openThuS": "07:00",
                "openThuE": "23:00",
                "openSun": false,
                "openWed": true,
                "openMonE": "23:00",
                "openFriS": "07:00",
                "openBreakE": "23:00",
                "openTueE": "23:00",
                "openFri": true,
                "openMon": true,
                "openSat": true,
                "openSunS": "07:00",
                "openBreakS": "07:00",
                "openTueS": "07:00",
                "openThu": true,
                "openWedE": "23:00",
                "openWedS": "07:00",
                "opensDaily": true,
                "openBreak": true,
                "openSatS": "07:00",
                "opensDailyS": "11:00",
                "openSatE": "23:00",
                "openTue": true,
                "openMonS": "07:00",
                "opensDailyE": "03:00"
            },
            "proCat": [
                "Fish Fry",
                "Fish Curry",
                "Mutton",
                "Chicken ",
                "Egg",
                "Fish Thali",
                "Chicken Thali",
                "Mutton Thali",
                "Veg Thali",
                "Chatakdar",
                "Farali",
                "Veg  ",
                "Dal ",
                "Rice",
                "Roti",
                "Godava",
                "Beverage",
                "Faral  ",
                "Party Order"
            ],
            "sin": {
                "seconds": 1663251403,
                "nanoseconds": 14000000
            },
            "longLinkV1": "https://refrclub.com/o/?link=https%3A%2F%2Fapp.refr.club%2Fv1%2FR6y69rW21ZjdzsTVlDwr&apn=club.refr.app&afl=https%3A%2F%2Fapp.refr.club%2Fv1%2FR6y69rW21ZjdzsTVlDwr&ibi=club.refr.app&ifl=https%3A%2F%2Fapp.refr.club%2Fv1%2FR6y69rW21ZjdzsTVlDwr&ofl=club.refr.app&st=Tarri&sd=Chase%20the%20taste%20of%20Maharashtra&si=",
            "vOrdr": 2,
            "shareUrlX1": "https://refrclub.com/o/12A1",
            "products": 102,
            "log": {
                "seconds": 1663251403,
                "nanoseconds": 14000000
            },
            "vFan": 2,
            "vEarn": 2450,
            "upd": {
                "seconds": 1663664499,
                "nanoseconds": 196000000
            },
            "cat": "food_and_beverages",
            "shareUrlB1": "https://refrclub.com/o/8uHC",
            "typeORDER": {
                "COD": false,
                "delivery": "Citywide",
                "exchange": false,
                "logistics": false,
                "refund": false,
                "return": false
            },
            "type": "Both",
            "by": "75h8VUJZInMrPySc7fN474LDL9v1",
            "banner": "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FR6y69rW21ZjdzsTVlDwr1663397857920?alt=media&token=e235f015-ab94-411e-93b7-ed7aec8fc09a"
        }
    ]
]






















  constructor(public dialog: MatDialog) { 
    
  }


  getdatetime(data:any){
    console.log(data);
    const fireBaseTime = new Date(
      data.seconds * 1000 + data.nanoseconds / 1000000,
    );
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString();


    return "Date : " + date ;
  }


  ngOnInit(): void {
    // console.log("1"+this.storeLoc.BreakStart);
    // this.storeLoc.BreakStart = this.storeLoc.BreakStart != "" ? this.tConvert(this.storeLoc.BreakStart.toString()) : "";
    // console.log("2"+this.storeLoc.BreakStart);

    // this.storeLoc.BreakEnd = this.storeLoc.BreakEnd != "" ? this.tConvert(this.storeLoc.BreakEnd.toString()): "";
    // console.log("1"+this.storeLoc.opensDailyE);
    // // this.storeLoc.opensDailyS = this.storeLoc.opensDailyS != "" ? this.tConvert(this.storeLoc.opensDailyS.toString()):"";

    // this.storeLoc.opensDailyE = this.storeLoc.opensDailyE != "" ? this.tConvert(this.storeLoc.opensDailyE.toString()):"";
    // console.log("1"+this.storeLoc.opensDailyE);

  }

  tConvert(time: any) {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];
    // console.log("Time = " + time);
    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? 'AM' : 'PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
  }


  // comparetimestamp() {
  //   this.timestampdate = new Date(this.timestamp.seconds * 1000).toDateString();
  // }

  showmsg() {
    // console.log("open Break = " + this.storeLoc.openBreak);
    // console.log("Shop opening = " + this.storeLoc.opensDailyS);
    // console.log("Shop closing = " + this.storeLoc.opensDailyE);
    // console.log("Break opening = " + this.storeLoc.openBreakS);
    // console.log("Break closing = " + this.storeLoc.openBreakE);
    // console.log("is break start before the opening time = ")
    // console.log(this.storeLoc.openBreakS > this.storeLoc.opensDailyS);
    // console.log("is break end after the closing time = ")

    // console.log(this.storeLoc.openBreakE < this.storeLoc.opensDailyE);

    // console.log("is break end after the closing time = ")
    // console.log(this.storeLoc.openBreakE >= this.storeLoc.opensDailyE);


    if (this.storeLoc.openBreak == true && (this.storeLoc.opensDailyS > this.storeLoc.openBreakS == false && this.storeLoc.openBreakE < this.storeLoc.opensDailyE) == false) {
      this.showmssg = false;
      alert("Please Select the break time in between opening time.");
    }
    else if (this.storeLoc.openBreak == true && ( this.storeLoc.openSun ==true && (this.storeLoc.openSunS > this.storeLoc.openBreakS == false  && this.storeLoc.openBreakE < this.storeLoc.openSunE == false))){
      this.showmssg = false;
      alert("Please select the Sunday opening and closing time as break time");
    }
    else if (this.storeLoc.openBreak == true && ( this.storeLoc.openMon ==true && (this.storeLoc.openMonS > this.storeLoc.openBreakS == false  && this.storeLoc.openBreakE < this.storeLoc.openMonE == false))){
      this.showmssg = false;
      alert("Please select the Monday opening and closing time as break time");
    }
    else if (this.storeLoc.openBreak == true && ( this.storeLoc.openTue ==true && (this.storeLoc.openTueS > this.storeLoc.openBreakS == false  && this.storeLoc.openBreakE < this.storeLoc.openTueE == false))){
      this.showmssg = false;
      alert("Please select the Tuesday, opening and closing time as break time");
    }
    else if (this.storeLoc.openBreak == true && ( this.storeLoc.openWed ==true && (this.storeLoc.openWedS > this.storeLoc.openBreakS == false  && this.storeLoc.openBreakE < this.storeLoc.openWedE == false))){
      this.showmssg = false;
      alert("Please select the Wednesday opening and closing time as break time");
    }
    else if (this.storeLoc.openBreak == true && ( this.storeLoc.openThu ==true && (this.storeLoc.openThuS > this.storeLoc.openBreakS == false  && this.storeLoc.openBreakE < this.storeLoc.openThuE == false))){
      this.showmssg = false;
      alert("Please select the Thursday opening and closing time as break time");
    }
    else if (this.storeLoc.openBreak == true && ( this.storeLoc.openFri ==true && (this.storeLoc.openFriS > this.storeLoc.openBreakS == false  && this.storeLoc.openBreakE < this.storeLoc.openFriE == false))){
      this.showmssg = false;
      alert("Please select the Friday opening and closing time as break time");
    }
    else if (this.storeLoc.openBreak == true && ( this.storeLoc.openSat ==true && (this.storeLoc.openSatS > this.storeLoc.openBreakS == false  && this.storeLoc.openBreakE < this.storeLoc.openSatE == false))){
      this.showmssg = false;
      alert("Please select the Saturday opening and closing time as break time");
    }

    else {
      this.showmssg = true;
    }


    // console.log("1"+this.storeLoc.BreakStart);
    // this.storeLoc.BreakStart = this.storeLoc.BreakStart != "" ? this.tConvert(this.storeLoc.BreakStart.toString()) : "";
    // // console.log("2"+this.storeLoc.BreakStart);

    // this.storeLoc.BreakEnd = this.storeLoc.BreakEnd != "" ? this.tConvert(this.storeLoc.BreakEnd.toString()) : "";
    // console.log("1"+this.storeLoc.opensDailyS);
    // this.storeLoc.opensDailyS = this.storeLoc.opensDailyS != "" ? this.tConvert(this.storeLoc.opensDailyS.toString()) : "";
    // console.log(this.storeLoc.opensDailyS);
    // this.storeLoc.opensDailyE = this.storeLoc.opensDailyE != "" ? this.tConvert(this.storeLoc.opensDailyE.toString()) : "";
    // console.log("1"+this.storeLoc.opensDailyE);
  }

  // getTOdaysDate() {
  //   this.todaysdate = new Date().toDateString();
  // }

  // getdiff() {
  //   var startDate = new Date(this.timestamp.seconds * 1000);
  //   var endDate = new Date();
  //   var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  // }

  // printvalue() {
  // if (this.ShopS == "") {
  //   alert("Please Enter the shop opening time.");
  // }
  // else if (this.ShopE == "") {
  //   alert("Please Enter the shop Closing time.");
  // }
  // else if (this.ShopE < this.ShopS) {
  //   this.ShopE = "";
  //   this.ShopS = "";
  //   alert("Please Enter the valid opening and closing time.");
  // }
  // else if (this.isbreak == true && this.breakS == "") {
  //   alert("Please Enter the shop's break Start time.");
  // }
  // else if (this.isbreak == true && this.breakE == "") {
  //   alert("Please Enter the shop's break End time.");
  // }
  // else if (this.isbreak == true && this.breakE < this.breakS) {
  //   this.breakE = "";
  //   this.breakS = "";
  //   alert("Please Enter the valid break start and end time.");
  // }
  // else if ((this.ShopS > this.breakS || this.ShopE < this.breakE) && this.isbreak == true) {
  //   alert("break time shouold be in between Opening and closing time.")
  // }
  // else {
  //   if (this.selectedoffDay == "") {
  //     this.weekstartday = "Sun";
  //     this.weekstartday = "Sat";
  //   }
  //   else {
  // let index = this.WeekdaysList.findIndex((e: any) => e.values == this.selectedoffDay);

  // if (index == 0 || index == 6) {
  //   this.weekstartday = (index == 0 ? this.WeekdaysList[1].values : this.WeekdaysList[0].values);
  //   this.weekendday = (index == 0 ? this.WeekdaysList[6].values : this.WeekdaysList[5].values);
  // }
  // else {
  //   this.weekstartday = this.WeekdaysList[index + 1].values;
  //   this.weekendday = this.WeekdaysList[index - 1].values;
  // }
  //   this.breakS = (parseFloat(this.breakS.substring(0, 2)) < 12) ? this.breakS + " AM" : this.breakS.replace(this.breakS.substring(0, 2), (parseFloat(this.breakS.substring(0, 2)) - 12).toString()) + " PM";
  //   this.breakE = (parseFloat(this.breakE.substring(0, 2)) < 12) ? this.breakE + " AM" : this.breakE.replace(this.breakE.substring(0, 2), (parseFloat(this.breakE.substring(0, 2)) - 12).toString()) + " PM";
  //   this.ShopS = (parseFloat(this.ShopS.substring(0, 2)) < 12) ? this.ShopS + " AM" : this.ShopS.replace(this.ShopS.substring(0, 2), (parseFloat(this.ShopS.substring(0, 2)) - 12).toString()) + " PM";
  //   this.ShopE = (parseFloat(this.ShopE.substring(0, 2)) < 12) ? this.ShopE + " AM" : this.ShopE.replace(this.ShopE.substring(0, 2), (parseFloat(this.ShopE.substring(0, 2)) - 12).toString()) + " PM";
  // }
  // }
  // }

  opendailog() {
    console.log(this.storeLoc);
    const dialogRef = this.dialog.open(OpeningtimeComponent, {
      width: '80%',
      data: { timedata: this.storeLoc },
    });
  }
}
