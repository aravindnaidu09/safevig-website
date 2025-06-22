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
    // { name: 'Facebook', icon: './../../../assets/Icons/Social/facebook.png', link: 'https://www.facebook.com' },
    // { name: 'Twitter', icon: './../../../assets/Icons/Social/twitter.png', link: 'https://www.twitter.com' },
    { name: 'LinkedIn', icon: './../../../assets/Icons/Social/linkedin.png', link: 'https://www.linkedin.com/company/95700798/admin/dashboard/' },
    { name: 'YouTube', icon: './../../../assets/Icons/Social/youtube.png', link: 'https://www.youtube.com' }
  ];
}
