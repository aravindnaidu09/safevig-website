import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener,PLATFORM_ID, Inject,  } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var bootstrap: any;
import Dropdown from 'bootstrap/js/dist/dropdown.js';
import Collapse from 'bootstrap/js/dist/collapse.js';
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
 async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      // const Dropdown = (await import('bootstrap/js/dist/dropdown')).default;

      document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
        new Dropdown(el);
      });
       document
    .querySelectorAll<HTMLElement>('.navbar-collapse')
    .forEach((el) => new Collapse(el, { toggle: false }));
    }
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
