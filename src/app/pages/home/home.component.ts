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
    { name: 'SafeVig Signal', logo: './../../../assets/SV-Prod_logos/SafeVig_Signal.png', link: '/SVS' },
    { name: 'Digital Literature', logo: './../../../assets/SV-Prod_logos/SafeVig_Literature.png', link: '/SVL' },
    { name: 'Digital Agreements', logo: './../../../assets/SV-Prod_logos/SafeVig-Agreements.png', link: '/SVA' },
    { name: 'Digital Aggregate', logo: './../../../assets/SV-Prod_logos/SafeVig_Aggregate.png', link: '/SVR' },
    { name: 'SafeVig PSMF', logo: './../../../assets/SV-Prod_logos/SafeVig_PSMF.png', link: '/SVP' },
    { name: 'SafeVig InTake', logo: './../../../assets/SV-Prod_logos/SafeVig_Intake.png', link: '/SVI' },
    { name: 'L2A Monitoring', logo: './../../../assets/SV-Prod_logos/SafeVig_L2a.png', link: '/SVL2A' }
  ];

}
