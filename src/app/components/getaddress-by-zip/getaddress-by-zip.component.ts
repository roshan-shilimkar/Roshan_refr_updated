import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getaddress-by-zip',
  templateUrl: './getaddress-by-zip.component.html',
  styleUrls: ['./getaddress-by-zip.component.scss']
})
export class GetaddressByZipComponent implements OnInit {
  zipcode: number = 421306;
  address: string = "";
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getaddress() {
    let pintest = /^[1-9]{1}[0-9]{2}[0-9]{1}[0-9]{2}$/;
    // console.log(pintest.test(this.zipcode.toString()));
    if (this.zipcode == undefined || pintest.test(this.zipcode.toString()) == false) {
      console.log("Please enter the valid Zip code.");
    }
    else {
      this.httpClient.get("https://api.postalpincode.in/pincode/" + this.zipcode + "").subscribe((data: any) => {
        console.log(data);
        if (data[0].Status = "Success") {
          this.address = data[0].PostOffice[0].Name + " " + data[0].PostOffice[0].District + "-" + data[0].PostOffice[0].Pincode + " " + data[0].PostOffice[0].State + " " + data[0].PostOffice[0].Country
        }
      });
    }

    // https://api.postalpincode.in/pincode/400097
  }



}
