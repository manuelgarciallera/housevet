import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar';
import { FooterComponent } from './layout/footer/footer';
import { CookieBannerComponent } from './shared/components/cookie-banner/cookie-banner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CookieBannerComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-cookie-banner></app-cookie-banner>
  `,
  styles: [`
    main { padding-top: 72px; }
  `]
})
export class AppComponent {}
