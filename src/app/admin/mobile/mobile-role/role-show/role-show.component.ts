import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-role-show',
  templateUrl: './role-show.component.html',
  styleUrls: ['./role-show.component.css']
})
export class RoleShowComponent implements OnInit {
  @Input() roleList : any;
  constructor() { }

  ngOnInit() {
  }

}
