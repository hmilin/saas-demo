import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-content',
  templateUrl: './icon-content.component.html',
  styleUrls: ['./icon-content.component.css']
})
export class IconContentComponent implements OnInit {
  iconList : string[] = ["&#xe6cf;", "&#xe673;", "&#xe603;", "&#xe60c;", "&#xe673;", "&#xe603;","&#xe77b;", "&#xe60a;", "&#xe61f;", "&#xe614;", "&#xe6cf;", "&#xe673;", "&#xe603;", "&#xe614;","&#xe66e;", "&#xe6b6;", "&#xe6c1;", "&#xe69b;", "&#xe6cf;", "&#xe673;", "&#xe603;", "&#xe60c;", "&#xe673;", "&#xe603;","&#xe77b;", "&#xe60a;", "&#xe61f;", "&#xe614;", "&#xe6cf;", "&#xe673;", "&#xe603;", "&#xe60c;", "&#xe673;", "&#xe603;","&#xe77b;", "&#xe60a;", "&#xe61f;", "&#xe614;","&#xe66e;", "&#xe6b6;", "&#xe6c1;", "&#xe69b;"];
  constructor() { }

  ngOnInit() {
  }

}
