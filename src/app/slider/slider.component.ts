import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

@Component({
  selector: 'app-slider',
  imports: [CommonModule, RouterModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  slides = [
    {
      image: 'assets/images/Mens-clothing7.jpg',
      title: "Men's Clothing",
      category: "men's clothing",
      description:
        "Discover our latest collection of men's clothing. Stylish and comfortable for every occasion.",
      buttonText: "Shop Men's Clothing",
      buttonLink: '/mens-clothing',
    },
    {
      image: "assets/images/Women's clothing 1.jpg",
      title: "Women's Clothing",
      category: "women's clothing",
      description:
        "Explore our range of women's clothing. Elegant and trendy outfits for every season.",
      buttonText: "Shop Women's Clothing",
      buttonLink: '/womens-clothing',
    },
    {
      image: 'assets/images/Jewelery2.jpg',
      title: 'Jewelry',
      category: 'jewelery',
      description:
        'Find the perfect piece of jewelry to complement your style. Exquisite designs for every taste.',
      buttonText: 'Shop Jewelry',
      buttonLink: '/jewelry',
    },
    {
      image: 'assets/images/Electronics 5.jpg',
      title: 'Electronics',
      category: 'electronics',
      description:
        'Upgrade your tech with our latest electronics. Innovative gadgets for your modern lifestyle.',
      buttonText: 'Shop Electronics',
      buttonLink: '/electronics',
    },
  ];
  swiper!: Swiper;

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Pagination],
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      centeredSlides: true,
      slidesPerView: 1,
      grabCursor: true,
    });
  }
}
