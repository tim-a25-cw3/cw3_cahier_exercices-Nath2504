import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
  }

  initSwiperPagination() {
    const target = document.querySelector('.js-swiper-page');
    if (target) {
      const swiper = new Swiper(target, {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}
new Main();
