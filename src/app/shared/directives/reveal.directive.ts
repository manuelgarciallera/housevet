import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

export type RevealType = 'up' | 'fade' | 'left' | 'right';

@Directive({
  selector: '[reveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Tipo de animación: 'up' (defecto), 'fade', 'left', 'right' */
  @Input('reveal') type: RevealType | '' = 'up';
  /** Retraso en ms — úsalo para stagger en grids */
  @Input() revealDelay: number = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    // Si el usuario prefiere movimiento reducido, mostramos directamente sin animación
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const el = this.el.nativeElement;
    const type: RevealType = (this.type as RevealType) || 'up';

    el.classList.add('rv-base', `rv-${type}`);
    if (this.revealDelay > 0) {
      el.style.transitionDelay = `${this.revealDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('rv-visible');
          this.observer?.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
