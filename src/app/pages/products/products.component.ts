import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
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
