import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-role',
  templateUrl: './mobile-role.component.html',
  styleUrls: ['./mobile-role.component.css']
})
export class MobileRoleComponent implements OnInit {
  roleListArray : any[] = [
    { "icon": "&#xe61f;", "title": "Well Documented", "text": "Our Theme is a very slick and clean e-commerce template with endless possibilities." },
    { "icon": "&#xe614;", "title": "Tracking Sales", "text": "Our Theme is a very slick and clean e-commerce template with endless possibilities." },
    { "icon": "&#xe627;", "title": "Send Message", "text": "Our Theme is a very slick and clean e-commerce template with endless possibilities." },
    { "icon": "&#xe623;", "title": "Notifications", "text": "Our Theme is a very slick and clean e-commerce template with endless possibilities." }
  ]
  constructor() { }

  ngOnInit() {
  }

}
