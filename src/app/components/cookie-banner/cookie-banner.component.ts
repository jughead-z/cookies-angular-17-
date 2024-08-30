import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';  // Add isPlatformBrowser and PLATFORM_ID

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  templateUrl: './cookie-banner.component.html',
  imports: [CommonModule],
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit {
  cookieAccepted = false;
  isBrowser = false;  // Initialize with default value

  constructor(
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const cookieConsent = this.cookieService.getCookie('cookieConsent');
      this.cookieAccepted = cookieConsent === 'accepted';
    }
  }

  acceptCookies(): void {
    if (this.isBrowser) {
      this.cookieService.setCookie('cookieConsent', 'accepted', 365);
      this.cookieAccepted = true;
    }
  }

  denyCookies(): void {
    if (this.isBrowser) {
      this.cookieService.setCookie('cookieConsent', 'denied', 365);
      this.cookieAccepted = true;
    }
  }
}

