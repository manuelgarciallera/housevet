import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss'
})
export class CookieBannerComponent {
  visible = false;
  showPanel = false;

  prefs = {
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  };

  constructor() {
    const saved = localStorage.getItem('hv_cookies');
    if (!saved) this.visible = true;
  }

  openPanel() { this.showPanel = true; }
  closePanel() { this.showPanel = false; }

  acceptAll() {
    this.prefs = { essential: true, analytics: true, marketing: true, functional: true };
    this.save('all');
  }

  essentialOnly() {
    this.prefs = { essential: true, analytics: false, marketing: false, functional: false };
    this.save('essential');
  }

  savePrefs() {
    this.save(JSON.stringify(this.prefs));
  }

  private save(val: string) {
    localStorage.setItem('hv_cookies', val);
    localStorage.setItem('hv_cookies_date', new Date().toISOString());
    this.visible = false;
    this.showPanel = false;
  }
}