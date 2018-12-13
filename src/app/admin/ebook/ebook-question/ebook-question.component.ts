import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook-question',
  templateUrl: './ebook-question.component.html',
  styleUrls: ['./ebook-question.component.css']
})
export class EbookQuestionComponent implements OnInit {
  questionList : object = [
    { "title": "14-day trial", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine. Our Theme is a very slick and clean e-commerce template." },
    { "title": "Payments", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine. Our Theme is a very slick and clean e-commerce template." },
    { "title": "Recovering an expired account", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine. Our Theme is a very slick and clean e-commerce template." },
    { "title": "Canceling subscription", "content": "Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine. Our Theme is a very slick and clean e-commerce template." }
  ]
  constructor() { }

  ngOnInit() {
  }

}
