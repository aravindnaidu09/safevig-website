import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from "../social-icons/social-icons.component";
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from "../products/products.component";
import { ServicesComponent } from "../services/services.component";
import { ClientLogosComponent } from './client-logos/client-logos.component';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CarouselComponent, CommonModule, RouterModule, ProductsComponent, ServicesComponent,ProductsComponent,ServicesComponent,ClientLogosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
