import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './beneficios.html',
  styleUrl: './beneficios.scss'
})
export class BeneficiosComponent {}
