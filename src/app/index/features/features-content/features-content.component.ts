import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-content',
  templateUrl: './features-content.component.html',
  styleUrls: ['./features-content.component.css']
})
export class FeaturesContentComponent implements OnInit {
  contentList : any[] = [
    { "icon": "&#xe603;", "title": "Modern Design", "color": "#3f48c4", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme."},
    {"icon": "&#xe6cf;", "title": "Responsive Mobile Friendly", "color": "#46d19b", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme."},
    { "icon": "&#xe77b;", "title": "Super Fast Loading", "color": "#fa9529", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme."},
    { "icon": "&#xe60a;", "title": "User Friendly", "color": "#933fc4", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme."},
    { "icon": "&#xe673;", "title": "Unlimited Colors", "color": "#81d146", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme."},
    { "icon": "&#xe60c;", "title": "Well Documented", "color": "#f23d52", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme."}
  ]
  constructor() { }

  ngOnInit() {
  }

}
