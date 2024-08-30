import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor() { }

  setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(c => c.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  }

  deleteCookie(name: string): void {
    this.setCookie(name, '', -1);
  }
}
