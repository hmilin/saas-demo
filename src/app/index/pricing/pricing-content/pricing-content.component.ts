import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-content',
  templateUrl: './pricing-content.component.html',
  styleUrls: ['./pricing-content.component.css']
})
export class PricingContentComponent implements OnInit {
  monthlyActive : boolean = true;
  priceList: any[] = [
    { "title": "Free", "price": 0, "text": "An entry tool for those who started. Forever free.", "ul": ["1 user", "3 projects"] },
    { "title": "Business", "price": 9.00, "text": "Perfect plan for professional designers and users.", "ul": ["1 user", "Unlimited projects", "Lifetime Updates", "1 year Support"]},
    { "title": "Premium", "price": 17.00, "text": "Lifetime plan for professional designers and users.", "ul": ["1 user", "Unlimited projects", "Lifetime Updates", "1 year Support"] },
    { "title": "VIP", "price": 29.00, "text": "Lifetime plan for professional designers and users.", "ul": ["1 user", "Unlimited projects", "Lifetime Updates", "1 year Support"] }
  ]
  constructor() { }

  ngOnInit() {
  }
  changeActive(b) {
    this.monthlyActive = b===1 ? true : false;
  }
}
