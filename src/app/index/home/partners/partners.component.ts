import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  imgList : string[] = [
    "http://deothemes.com/envato/emaus/emaus_html/img/partners/partner_logo_dark_1.png",
    "http://deothemes.com/envato/emaus/emaus_html/img/partners/partner_logo_dark_2.png",
    "http://deothemes.com/envato/emaus/emaus_html/img/partners/partner_logo_dark_3.png",
    "http://deothemes.com/envato/emaus/emaus_html/img/partners/partner_logo_dark_4.png",
    "http://deothemes.com/envato/emaus/emaus_html/img/partners/partner_logo_dark_5.png"
  ];
  constructor() { }

  ngOnInit() {
  }

}
