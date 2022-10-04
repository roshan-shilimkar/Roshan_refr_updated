import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements AfterViewInit {
  @ViewChild('content') elementView: ElementRef;
  opened: boolean = false;
  contentHeight: string;
  Height:string;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.Height = this.elementView.nativeElement.offsetHeight;
  }

  activate() {
    this.opened = !this.opened;
    if (this.opened == true) {
      this.contentHeight = this.Height;
    }
    else {
      this.contentHeight= "0";
    }
  }

}
