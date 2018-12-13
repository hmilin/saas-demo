import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  navList : object[] =[
    {"name": "Home", url: "/index/home"},
    {"name": "Features", url: "/index/features"},
    {"name": "Pricing", url: "/index/pricing"},
    {"name": "Icons", url: "/index/icons"},
    {"name": "Knowledge Base", url: "/index/knowledge-base"},
    {"name": "Sign up", url: "/index/sign-up"}
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
