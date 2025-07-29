import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-logos',
  imports: [CommonModule],
  templateUrl: './client-logos.component.html',
  styleUrl: './client-logos.component.scss'
})
export class ClientLogosComponent implements OnInit {
 clientLogos = [
{ src: 'https://www.biologicale.com/images/logo2.png', alt: 'Bialogical E' },
{ src: 'https://therdose.com/assets/images/therdose.png', alt: 'Therdose' },
{ src: 'https://www.chemopharmaceuticals.com/wp-content/uploads/2021/10/Logo_chemo.jpg', alt: 'ChemoPharma' },
{ src: './../../../assets/ClientsLogo/Nacto.png', alt: 'Nacto' },
{ src: 'https://upload.wikimedia.org/wikipedia/en/f/f7/The_Lupin_Logo.svg', alt: 'Lupin' },
{ src: './../../../assets/ClientsLogo/gravity_logo.png', alt: 'gravity' },
{ src: './../../../assets/ClientsLogo/vivimed-logo.png', alt: 'vivimed' },
{ src: 'https://www.pulsepharma.net/wp-content/uploads/2022/08/Logo_1.png', alt: 'pulse' },
{ src: './../../../assets/ClientsLogo/Spansules.png', alt: 'spansules' },
{ src: './../../../assets/ClientsLogo/SP-Accure-Logo.png', alt: 'sp accure' }
  ];

  allLogos: { src: string; alt: string }[] = [];

  ngOnInit(): void {
    // Repeat logos twice for seamless scroll
    this.allLogos = [...this.clientLogos, ...this.clientLogos];
  }
}
