import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-banner',
  templateUrl: './knowledge-banner.component.html',
  styleUrls: ['./knowledge-banner.component.css']
})
export class KnowledgeBannerComponent implements OnInit {
  list: object[] = [
    { "icon": "&#xe62f;", "text": "Getting Started"},
    { "icon": "&#xe8ce;", "text": "Payments & Billing"},
    { "icon": "&#xe62a;", "text": "Account Management"},
    { "icon": "&#xe60d;", "text": "Addons"},
    { "icon": "&#xe631;", "text": "API"},
    { "icon": "&#xe672;", "text": "Styling"},
    { "icon": "&#xe609;", "text": "Security"},
    { "icon": "&#xe62e;", "text": "Managing Storage"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
