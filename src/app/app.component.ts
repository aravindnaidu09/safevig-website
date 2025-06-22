import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SocialIconsComponent } from "./pages/social-icons/social-icons.component";
import { MobileStickyNavbarComponent } from './shared/mobile-sticky-navbar/mobile-sticky-navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SocialIconsComponent, MobileStickyNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'safevig-website';
}
