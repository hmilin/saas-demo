import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navList : object[] = [
    {"name": "Home", url: "/home"},
    {"name": "Features", url: "/features"},
    {"name": "Pricing", url: "/pricing"},
    {"name": "Icons", url: "/icons"},
    {"name": "Knowledge Base", url: "/knowledge-base"},
    {"name": "Sign up", url: "/sign-up"}
  ]
  active : boolean = false;
  constructor() { }

  ngOnInit() {

  }

}
