import { Component } from '@angular/core';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dark = false;

  constructor(){
    Swiper.use([Navigation, Pagination, Autoplay]);
  }
}
