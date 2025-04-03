import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from "../social-icons/social-icons.component";
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CarouselComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
