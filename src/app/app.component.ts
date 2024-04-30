import { Component } from '@angular/core';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dark = false;
  avatar: 1 | 2 | 3 | 4 | 5 = 1;

  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    autoplay: true,
    breakpoints: {
        300: {
          slidesPerView: 1,
        },
        461: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        }
    }
}

  constructor(){
    Swiper.use([Navigation, Pagination, Autoplay]);
    if(localStorage.getItem('dark') === 'true') {
      this.dark = true;
    }
  }

  switchAvatar() {
    this.avatar = this.avatar < 5 ? this.avatar + 1 : 1 as any;
  }

  toggleMode() {
    this.dark = !this.dark;
    localStorage.setItem('dark', this.dark ? 'true' : 'false');
  }
}
