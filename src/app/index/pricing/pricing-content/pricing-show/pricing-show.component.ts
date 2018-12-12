import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-show',
  templateUrl: './pricing-show.component.html',
  styleUrls: ['./pricing-show.component.css']
})
export class PricingShowComponent implements OnInit {
  @Input() list : object;
  constructor() { }

  ngOnInit() {
  }

}
