import { isPlatformBrowser } from '@angular/common';
import { Component,Inject, PLATFORM_ID} from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // ✅ Now it's safe to use `document`
      document.getElementById('carousel')?.classList.add('active');
    }
    console.log('Carousel component initialized');  
    
  }
}
