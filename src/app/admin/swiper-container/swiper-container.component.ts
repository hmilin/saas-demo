import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-swiper-container',
  templateUrl: './swiper-container.component.html',
  styleUrls: ['./swiper-container.component.css']
})
export class SwiperContainerComponent implements AfterViewInit {
  /*testSwiper : Swiper;*/
  constructor() { }

  ngAfterViewInit() {
    /*this.testSwiper = new Swiper(".swiper-container", {
      direction: 'horizontal',
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })*/
  }


}
