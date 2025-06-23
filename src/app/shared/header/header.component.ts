import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
export class HeaderComponent  {
  isScrolled = false;
  lastScrollTop = 0;
  isVisible = true;

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
