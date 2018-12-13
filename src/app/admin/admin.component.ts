import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  navList : object[] = [
    {"name": "Features", url: "/index/features"},
    {"name": "Testimonials", url: "/index/features"},
    {"name": "Screens", url: "/index/features"},
    {"name": "Download", url: "/index/features"}
  ];
  active: boolean = false;

  constructor() { }

  ngOnInit() {
    fromEvent(document, 'scroll').subscribe((event) => {
      let top = document.documentElement.scrollTop; //滚动条高度
      let height = document.documentElement.clientHeight; //屏幕高度
      if(top >= height) {
        this.active = true;
      }else {
        this.active = false;
      }
    })
  }
}
