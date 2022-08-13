import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    margin: 60,
    navText: ['', ''],
    responsive: {
      0:{
        items: 1,
    },
    768:{
        items: 2,
    },
    1100:{
        items: 3,
    },
    1400:{
        items: 4,
    }
    },
    nav: true
  }

}
