import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-mobile-sticky-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-sticky-navbar.component.html',
  styleUrl: './mobile-sticky-navbar.component.scss'
})
export class MobileStickyNavbarComponent {
   isVisible = true;
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.isVisible = currentScroll < this.lastScrollTop || currentScroll < 10;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
