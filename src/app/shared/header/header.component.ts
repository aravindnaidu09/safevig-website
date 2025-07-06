import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  isScrolled = false;
  lastScrollTop = 0;
  isVisible = true;
 async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const Dropdown = (await import('bootstrap/js/dist/dropdown')).default;

      document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
        new Dropdown(el);
      });
    }
  }
  platformId(platformId: any) {
    throw new Error('Method not implemented.');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    this.isScrolled = currentScroll > 20;

    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.isVisible = false; // scrolling down
    } else {
      this.isVisible = true; // scrolling up
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
