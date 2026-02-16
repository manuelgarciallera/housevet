import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-zonas',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './zonas.html',
  styleUrl: './zonas.scss'
})
export class ZonasComponent {
  zonas1 = ['Madrid Capital', 'Majadahonda', 'Boadilla del Monte', 'Leganés', 'Móstoles', 'Alcobendas', 'Torrejón de Ardoz'];
  zonas2 = ['Pozuelo de Alarcón', 'Las Rozas', 'Alcorcón', 'Getafe', 'Fuenlabrada', 'San Sebastián de los Reyes', 'Alcalá de Henares'];
}
