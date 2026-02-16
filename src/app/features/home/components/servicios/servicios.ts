import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class ServiciosComponent {}
