import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.css']
})
export class MobileCardComponent implements OnInit {
  cardList : any[] = [
    { "img": "http://deothemes.com/envato/emaus/emaus_html/img/testimonials/1.jpg", "content": "“I’am amazed, I should say thank you so much for your awesome template. Design is so good and neat.”", "username": "Christine Clark", "from": "DeoThemes" },
    { "img": "http://deothemes.com/envato/emaus/emaus_html/img/testimonials/2.jpg", "content": "“Every detail has been taken care these team are realy amazing and talented! I will work only with emaus agency.”", "username": "Mark Zukerberg", "from": "Facebook" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
