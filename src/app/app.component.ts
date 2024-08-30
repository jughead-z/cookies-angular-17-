import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieService } from './services/cookie.service';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CookieBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'your-app-name';

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    const cookieConsent = this.cookieService.getCookie('cookieConsent');
    
    if (cookieConsent === 'accepted') {
      // Load analytics, third-party scripts, or other cookie-related functionality
      console.log('Cookies accepted');
      // Example: Load Google Analytics
      // this.loadAnalytics();
    } else {
      // Disable or restrict functionality that uses cookies
      console.log('Cookies denied');
    }
  }

  loadAnalytics(): void {
    // Example: Load Google Analytics or other services
    const script = document.createElement('script');
    script.src = 'https://www.google-analytics.com/analytics.js';
    document.head.appendChild(script);
  }
}