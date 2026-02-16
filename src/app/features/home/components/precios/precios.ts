import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-precios',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './precios.html',
  styleUrl: './precios.scss'
})
export class PreciosComponent {}
