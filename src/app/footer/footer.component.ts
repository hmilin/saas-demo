import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  objectKeys = Object.keys;
  listItem : object = {
    "Product": ["About", "Features", "Resources", "Affiliates"],
    "Support": ["Help Center", "Support Policy", "F.A.Q", "Privacy & Terms"],
    "Company": ["Team", "Join Us", "Blog", "Contact"]
  };
  iconList : string[] = ["&#xe69b;", "&#xe66e;", "&#xe6c1;", "&#xe6b6;"];
  constructor() { }

  ngOnInit() {
  }

}
