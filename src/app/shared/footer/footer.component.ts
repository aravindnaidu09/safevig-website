import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {}
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
