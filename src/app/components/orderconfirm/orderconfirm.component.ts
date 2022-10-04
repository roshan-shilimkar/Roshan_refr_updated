import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.scss']
})
export class OrderconfirmComponent implements OnInit {
p={
  amSave:'200',
  camp:{
    cbExi:'122',
  },
  earn:100,
}
  constructor() { }

  ngOnInit(): void {
  }

  openinstacamera(){
    setTimeout(() => {
      const ig = `instagram://story-camera`
      window.open(ig, "_blank");
     }, 3000);
  }


  openinstastories(){
    setTimeout(() => {
      const ig = `instagram-stories://share`
      window.open(ig, "_blank");
     }, 3000);
  }

}
