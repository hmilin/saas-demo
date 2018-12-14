import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})
export class CardShowComponent implements OnInit {
  @Input() card : any;
  constructor() { }

  ngOnInit() {
  }

}
