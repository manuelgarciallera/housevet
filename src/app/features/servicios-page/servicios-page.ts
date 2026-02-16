import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './servicios-page.html',
  styleUrl: './servicios-page.scss'
})
export class ServiciosPageComponent {
  view: 'grid' | 'list' = 'grid';
  servicios = [
    { title: 'Consulta General', desc: 'Exploración física completa, evaluación del estado de salud general, diagnóstico y pauta terapéutica.', price: '50', priceNote: '/ visita', bg: '#eff6ff', color: '#2574cc', cta: 'Pedir cita', ctaClass: 'primary', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>' },
    { title: 'Vacunaciones', desc: 'Protocolo vacunal completo adaptado a la especie, edad y estado de salud de tu mascota. Actualización de cartilla sanitaria.', price: '30', priceNote: '/ dosis (+ consulta)', bg: '#fff7ed', color: '#f06522', cta: 'Pedir cita', ctaClass: 'primary', icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' },
    { title: 'Análisis y Diagnóstico', desc: 'Extracciones de sangre y orina, hemograma, bioquímica. Resultados en 24–48h con interpretación incluida.', price: '90', priceNote: '/ desde', bg: '#f0fdf4', color: '#16a34a', cta: 'Pedir cita', ctaClass: 'primary', icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
    { title: 'Urgencias a Domicilio', desc: 'Atención urgente para situaciones que no pueden esperar. Evaluamos la gravedad y tomamos acción inmediata.', price: 'Consultar', priceNote: '', bg: '#fff1f2', color: '#e03e3e', cta: 'Contacto urgente', ctaClass: 'urgent', icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' },
    { title: 'Cuidados Paliativos', desc: 'Acompañamiento y bienestar para mascotas en etapas avanzadas, con el máximo respeto, cariño y dignidad.', price: null, priceNote: 'Valoración personalizada', bg: '#fdf2f8', color: '#db2777', cta: 'Pedir información', ctaClass: 'secondary', icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' },
    { title: 'Desparasitación', desc: 'Control de parásitos internos (lombrices, giardias) y externos (pulgas, garrapatas, ácaros). Productos de calidad veterinaria.', price: '20', priceNote: '/ desde (+ consulta)', bg: '#f0fdf4', color: '#16a34a', cta: 'Pedir cita', ctaClass: 'primary', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { title: 'Microchip e Identificación', desc: 'Implantación de microchip homologado, registro en el RIAC y documentación oficial. Obligatorio en perros.', price: '40', priceNote: '(+ consulta)', bg: '#eff6ff', color: '#2574cc', cta: 'Pedir cita', ctaClass: 'primary', icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' },
    { title: 'Certificados y Pasaporte', desc: 'Certificados de salud, pasaporte para viajes internacionales dentro y fuera de la UE, documentación oficial.', price: '60', priceNote: '/ desde', bg: '#fff7ed', color: '#f06522', cta: 'Pedir cita', ctaClass: 'primary', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>' },
  ];
}
