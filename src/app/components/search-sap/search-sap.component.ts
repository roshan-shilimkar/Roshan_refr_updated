import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-sap',
  templateUrl: './search-sap.component.html',
  styleUrls: ['./search-sap.component.scss']
})
export class SearchSAPComponent implements OnInit {
  Activesegment: number = 0;



  //dummy Data 
  imgLoaded: Array<string> = [];
  imagesLoaded: string[] = [];

  storeData = [{
    banner: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpSugDjyM3UIKWFAlw5NG1651138549570?alt=media&token=78ab867d-523b-49fb-adbc-db69c8eb7bb2",
    name: "Absolute Beauty Salon And Spa",
    type: "Both",
    id: "u2RSiBZFEy85ci4NVfLn",
    codeInfo: false,
    subCat: "sc-salons_and_spa-women_salon",
    cat: "salons_and_spa"
  },
  {
    banner: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpSugDjyM3UIKWFAlw5NG1651138549570?alt=media&token=78ab867d-523b-49fb-adbc-db69c8eb7bb2",
    name: "Absolute Beauty Salon And Spa",
    type: "Both",
    id: "u2RSiBZFEy85ci4NVfLn",
    codeInfo: false,
    subCat: "sc-salons_and_spa-women_salon",
    cat: "salons_and_spa"
  }
  ];


  products = [
    {
      "sold": 0,
      "content": false,
      "title": "Clef Bluetooth Speaker",
      "id": "2iwBBHiIUi3aXEuNrzSB",
      "cost": 999,
      "by": "M8ueEZxd4SQxJJfJdWs8G3S9dUg1",
      "description": "About This Item:\n-Stylish wireless speaker fine-tuned 85dB at 1m SPL with a powerful 1200 mAh battery makes it even more of a masterpiece.\n-The small 10w box of musical wonder delivers the performance you need for comfortable listening.\n-Audio Specification: 10-watt output\n-Controls And Connectivity: Bluetooth 5.0, SD card/USB, FM radio\n-Package Content: 1 X Bluetooth Speaker\n\nSense The Power:\n-The small 10W box of musical wonder delivers the performance you need for comfortable listening. \n-Clef delivers a clean, bold, and smooth output quality and lets you escape into a world of pure musical bliss.\n-Listening to classics in plastic bodies undermines the quality. \n-The magical quality comes from the wooden crafted body that reflects and enhances the natural tunes! \n-The fine-tuned 85dB at 1m SPL with a powerful 1200 mAh battery makes it even more of a masterpiece. \n\nVibe To The Modes And Colour Your Musical World:\n-Wherever the music source is, Clef produces the same high-quality music every time. \n-Play your favourite music from Bluetooth, USB, SD card, and also through the good old FM mode.\n-Deciwood brings you Clef in two amazing colours. The Cherry Red for those who like the pep in their living room and the deep Black for those that enjoy the dark classiness. \n\nTechnical Details:\n-Output: 10 Watt \n-Input: Bluetooth 5.0/ SD Card/ USB/ FM Radio \n-Size: 11.43 x 7.62 x 10.16 cm \n-Finishing: Wooden finishing with customisable grill \n-Included in the Box: 1 Clef Speaker, 1 USB Charging Cable, 1 User Manual\"\n",
      "sin": {
        "seconds": 1655469268,
        "nanoseconds": 636000000
      },
      "banners": [
        "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2iwBBHiIUi3aXEuNrzSB1655469268643?alt=media&token=e1129322-379c-4b1c-8467-9a345ee469ce",
        "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2iwBBHiIUi3aXEuNrzSB1655469270902?alt=media&token=af876e4e-b6c2-46da-a73f-5511b4cab332",
        "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2iwBBHiIUi3aXEuNrzSB1655469273036?alt=media&token=3cf45284-7adf-45dd-9c44-8a15dd48e698",
        "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2iwBBHiIUi3aXEuNrzSB1655469275522?alt=media&token=41edfbdd-fa27-48b7-a46f-cf82713e1948",
        "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2iwBBHiIUi3aXEuNrzSB1655469277493?alt=media&token=37bf729a-07c2-4c0e-ae4c-825fdb9854b3"
      ],
      "upd": {
        "seconds": 1658830093,
        "nanoseconds": 442000000
      },
      "price": 2000,
      "warranty": false,
      "quota": 0,
      "reqBurn": false,
      "sid": "pSugDjyM3UIKWFAlw5NG",
      "category": "Bluetooth Speakers",
      "code": "85182900",
      "burn": false,
      "variants": []
    }]
  constructor() { }

  ngOnInit(): void {
  }


  getSubCat(a: any, b: any) {
    return "Cafe"
  }

  openDetail(a: any, b: any, c: any) { }
  getCartItemLength(id: any) {

  }

  showAndHideAddToCard(a: any, b: any, c: any, d: any) {

  }
}
