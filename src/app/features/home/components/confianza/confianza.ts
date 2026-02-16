import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-confianza',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './confianza.html',
  styleUrl: './confianza.scss'
})
export class ConfianzaComponent {}
