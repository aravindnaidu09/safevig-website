import { AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  private readonly router = inject(Router);
private platformId = inject(PLATFORM_ID);
 private readonly elRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  // Optional: access document if you need it
  private readonly document = inject(DOCUMENT);

 ngAfterViewInit(): void {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const target = document.querySelector('.observe-footer');
    if (target) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            target.classList.add('animate-fade-in');
            observer.unobserve(entry.target); // Optional cleanup
          }
        });
      });

      observer.observe(target);
    }
  }
}

  scrollToProductsServices(name: string) {
    if (this.router.url === '/') {
      // Already on home page
      this.scrollToElement(name);
    } else {
      // Navigate first, then scroll after navigation ends
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollToElement(name), 100);
      });
    }
  }

  private scrollToElement(name: string) {
    const el = document.getElementById(name);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
function Inject(PLATFORM_ID: any): (target: typeof FooterComponent, propertyKey: undefined, parameterIndex: 3) => void {
  throw new Error('Function not implemented.');
}

