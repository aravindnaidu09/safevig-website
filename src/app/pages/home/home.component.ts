import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from "../social-icons/social-icons.component";
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CarouselComponent, CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products = [
    { name: 'SafeVig Signal', logo: './../../../assets/Icons/ProductLogo/Signal.svg', link: '/SVS' },
    { name: 'Digital Literature', logo: './../../../assets/Icons/ProductLogo/Literature.svg', link: '/SVL' },
    { name: 'Digital Agreements', logo: './../../../assets/Icons/ProductLogo/Agreements.svg', link: '/SVA' },
    { name: 'Digital Aggregate', logo: './../../../assets/Icons/ProductLogo/Reports.svg', link: '/SVR' },
    { name: 'SafeVig PSMF', logo: './../../../assets/Icons/ProductLogo/PSMF.svg', link: '/SVP' },
    { name: 'SafeVig InTake', logo: './../../../assets/Icons/ProductLogo/Intake.svg', link: '/SVI' },
    { name: 'L2A Monitoring', logo: './../../../assets/Icons/ProductLogo/L2A Monitoring.svg', link: '/SVL2A' }
  ];

}
