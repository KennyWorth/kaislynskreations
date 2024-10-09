import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  activeSlide: number = 0;

  slides = [
    {
      title: 'Love bracelet',
      description: 'Bead bracelet with LOVE letter beads and heart charm',
      image: 'assets/bracelet1.jpg'
    },
    {
      title: 'Custom Bracelet 2',
      description: 'Custom Bracelet 2 Description',
      image: 'assets/purple-white-bracelet.jpg'
    },
    {
      title: 'Custom Bracelet 3',
      description: 'Custom Bracelet 3 Description',
      image: 'assets/bracelet3.jpg'
    },
    {
      title: 'Custom Bracelet 4',
      description: 'Custom Bracelet 4 Description',
      image: 'assets/bracelet4.jpg'
    },
    {
      title: 'Custom Bracelet 5',
      description: 'Custom Bracelet 5 Description',
      image: 'assets/bracelet2.png'
    }
  ];

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private mediaMatcher: MediaMatcher) { 
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => this.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  detectChanges() {
  }

  incrementSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }
  

  decrementSlide() {
    if (this.activeSlide === 0) {
      this.activeSlide = this.slides.length - 1;
    } else {
      this.activeSlide--;
    }
  }
  
}
