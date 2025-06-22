import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  constructor(private router: Router,
    private renderer: Renderer2, private el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el: any) => observer.observe(el));
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
