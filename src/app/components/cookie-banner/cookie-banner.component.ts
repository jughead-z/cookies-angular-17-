import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { CommonModule } from '@angular/common';  // Add this line

@Component({
  selector: 'app-cookie-banner',
  standalone : true,
  templateUrl: './cookie-banner.component.html',
  imports : [CommonModule],
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit {
  cookieAccepted = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    const cookieConsent = this.cookieService.getCookie('cookieConsent');
    this.cookieAccepted = cookieConsent === 'accepted';
  }

  acceptCookies(): void {
    this.cookieService.setCookie('cookieConsent', 'accepted', 365);
    this.cookieAccepted = true;
  }

  denyCookies(): void {
    this.cookieService.setCookie('cookieConsent', 'denied', 365);
    this.cookieAccepted = true;
  }
}
