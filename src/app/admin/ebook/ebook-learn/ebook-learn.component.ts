import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook-learn',
  templateUrl: './ebook-learn.component.html',
  styleUrls: ['./ebook-learn.component.css']
})
export class EbookLearnComponent implements OnInit {
  leftList : string[] = [ "An idea that takes the parts of a structure and turns them into a whole system. Practice is the frequent and continued contemplation of the mode of executing any given work, or of the mere operation of the hands.",
    "An idea that takes the parts of a structure and turns them into a whole system. Practice is the frequent and continued contemplation of the mode of executing any given work, or of the mere operation of the hands.",
    "An idea that takes the parts of a structure and turns them into a whole system. Practice is the frequent and continued contemplation of the mode of executing any given work, or of the mere operation of the hands."
  ];
  rightList : string[] = [ "An idea that takes the parts of a structure and turns them into a whole system. Practice is the frequent and continued contemplation of the mode of executing any given work, or of the mere operation of the hands.",
    "An idea that takes the parts of a structure and turns them into a whole system. Practice is the frequent and continued contemplation of the mode of executing any given work, or of the mere operation of the hands.",
    "An idea that takes the parts of a structure and turns them into a whole system. Practice is the frequent and continued contemplation of the mode of executing any given work, or of the mere operation of the hands."
  ];
  constructor() { }

  ngOnInit() {
  }

}
