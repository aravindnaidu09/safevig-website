import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  imports: [
    CommonModule
  ],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.scss'
})
export class SocialIconsComponent {
  socialLinks = [
    { name: 'Facebook', icon: 'assets/icons/facebook.svg', link: 'https://www.facebook.com' },
    { name: 'Twitter', icon: 'assets/icons/twitter.svg', link: 'https://www.twitter.com' },
    { name: 'LinkedIn', icon: 'assets/icons/linkedin.svg', link: 'https://www.linkedin.com' },
    { name: 'YouTube', icon: 'assets/icons/youtube.svg', link: 'https://www.youtube.com' }
  ];
}
