import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  dropdownList : object[] = [
    { "name": "Saas Landing", url: "/home"},
    { "name": "Mobile App", url: "mobile"},
    { "name": "eBook Landing", url: "ebook"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
