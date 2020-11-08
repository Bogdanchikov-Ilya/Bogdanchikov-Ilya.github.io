"use strict";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    534: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    987: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1183: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  }
});
var swiper = new Swiper('#swiper_two', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '#pag2',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    534: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    987: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1183: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  }
});