import { Component, Input } from '@angular/core';
import { Slide } from 'src/app/Models/slide';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent {

  @Input() slide: Slide  = {
    title: '',
    description: '',
    image: ''
  };

  @Input() isActive: boolean = false;

}
