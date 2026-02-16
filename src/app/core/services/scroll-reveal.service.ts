import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private observer?: IntersectionObserver;

  observe() {
    if (typeof window === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once visible, stop observing
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe all .reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
      this.observer!.observe(el);
    });
  }

  disconnect() {
    this.observer?.disconnect();
  }
}
