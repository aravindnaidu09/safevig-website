import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  ngAfterViewInit(): void {
    const myCarousel = document.querySelector('#carouselExampleIndicators');
    new bootstrap.Carousel(myCarousel, {
      interval: 5000, // Auto-slide every 5 seconds
      ride: 'carousel'
    });
  }
}
