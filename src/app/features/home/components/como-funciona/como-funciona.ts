import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-como-funciona',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './como-funciona.html',
  styleUrl: './como-funciona.scss'
})
export class ComoFuncionaComponent {
  scrollToCita() {
    const el = document.getElementById('pide-cita');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
