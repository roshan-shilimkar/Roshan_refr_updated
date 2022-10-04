import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instastories',
  templateUrl: './instastories.component.html',
  styleUrls: ['./instastories.component.scss']
})
export class InstastoriesComponent implements OnInit {
  windowss1 = window.navigator.userAgent.match(/iPad/i);
  windowss2 = window.navigator.userAgent.match(/iPhone/i);

  constructor() {
    alert("1" + window.navigator.userAgent.match(/iPad/i));
    alert("2" + window.navigator.userAgent.match(/iPhone/i));

  }

  ngOnInit(): void {
  }

  check() {
    alert("asdasd" + this.isios());
  }

  isios() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac"))

    // alert("1"+ window.navigator);
    // alert("2"+ window.navigator.userAgent.match(/iPhone/i));


    // alert("1"+ window.navigator.userAgent.match(/iPad/i));
    // alert("2"+ window.navigator.userAgent.match(/iPhone/i));
  }

  // this.windows=
  openstories() {
    setTimeout(() => {
      const ig = `https://www.instagram.com/create/story`
      window.open(ig, "_blank");
    }, 3000);
  }

  mail() {
    const mail = `mailto:?body=213123123123&subject=headertitle`
    window.open(mail, "_blank");
  }
}
