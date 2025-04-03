import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  imports: [CommonModule],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.scss'
})
export class SocialIconsComponent {
  socialLinks = [
    { name: 'Facebook', icon: 'assets/icons/Social/facebook.png', link: 'https://www.facebook.com' },
    { name: 'Twitter', icon: 'assets/icons/Social/twitter.png', link: 'https://www.twitter.com' },
    { name: 'LinkedIn', icon: 'assets/icons/Social/linkedin.png', link: 'https://www.linkedin.com' },
    { name: 'YouTube', icon: 'assets/icons/Social/youtube.png', link: 'https://www.youtube.com' }
  ];
}
