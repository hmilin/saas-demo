import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-show',
  templateUrl: './content-show.component.html',
  styleUrls: ['./content-show.component.css']
})
export class ContentShowComponent implements OnInit {
   @Input() background: string;//从父组件传来的值
   @Input() showList: any;
  constructor() { }

  ngOnInit() {

  }

}
