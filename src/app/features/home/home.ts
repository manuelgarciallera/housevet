import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero';
import { ConfianzaComponent } from './components/confianza/confianza';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona';
import { ServiciosComponent } from './components/servicios/servicios';
import { BeneficiosComponent } from './components/beneficios/beneficios';
import { ZonasComponent } from './components/zonas/zonas';
import { PreciosComponent } from './components/precios/precios';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeroComponent, ConfianzaComponent, ComoFuncionaComponent, ServiciosComponent, BeneficiosComponent, ZonasComponent, PreciosComponent, RevealDirective],
  template: `
    <app-hero></app-hero>
    <app-confianza></app-confianza>
    <app-como-funciona></app-como-funciona>
    <app-servicios></app-servicios>
    <app-beneficios></app-beneficios>
    <app-zonas></app-zonas>
    <app-precios></app-precios>

    <!-- TESTIMONIOS -->
    <section class="section" id="testimonios" aria-labelledby="testimonios-title">
      <div class="container">
        <header class="section-header">
          <span class="section-tag" reveal="up">Opiniones reales</span>
          <h2 id="testimonios-title" reveal="up" [revealDelay]="80">Lo que dicen nuestros clientes</h2>
          <div class="divider"></div>
          <p>Familias que ya confían en Housevet para el cuidado de sus mascotas.</p>
        </header>
        <div class="testimonios-grid">
          <article class="testimonio-card" reveal="up" [revealDelay]="0">
            <div class="quote-icon" aria-hidden="true">❝</div>
            <div class="stars" aria-label="5 estrellas">★★★★★</div>
            <p class="testimonio-text">Mi perro Max es muy nervioso y siempre lo pasaba fatal en la clínica. Con Housevet fue completamente diferente: el veterinario vino a casa, Max estaba tranquilo, y la consulta fue mucho más relajada. Totalmente recomendable.</p>
            <div class="testimonio-author">
              <div class="author-avatar" aria-hidden="true">🐕</div>
              <div>
                <strong>María G.</strong>
                <span>Propietaria de Max, Golden Retriever · Pozuelo de Alarcón</span>
              </div>
            </div>
          </article>
          <article class="testimonio-card" reveal="up" [revealDelay]="150">
            <div class="quote-icon" aria-hidden="true">❝</div>
            <div class="stars" aria-label="5 estrellas">★★★★★</div>
            <p class="testimonio-text">Usé el servicio de urgencia por la noche porque mi gata no comía y estaba muy apagada. En menos de dos horas vino el veterinario, la exploró y me explicó todo con calma. Diagnóstico correcto, tratamiento eficaz. Excelente servicio.</p>
            <div class="testimonio-author">
              <div class="author-avatar" aria-hidden="true">🐈</div>
              <div>
                <strong>Carlos M.</strong>
                <span>Propietario de Luna, gata europea · Madrid Salamanca</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- FORMULARIO PIDE TU CITA -->
    <section class="section section--bg-alt pide-cita-section" id="pide-cita" aria-labelledby="cita-title">
      <div class="container">
        <header class="section-header">
          <span class="section-tag">RESERVA</span>
          <h2 id="cita-title">Pide tu Cita</h2>
          <div class="divider"></div>
          <p>Rellena el formulario y te contactamos en menos de 2 horas para confirmar el horario.</p>
        </header>
        <div class="cita-form-wrapper" reveal="up">
          <form class="cita-form" (ngSubmit)="submitCita()" #citaForm="ngForm" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label for="nombre">Nombre <span class="req" aria-hidden="true">*</span></label>
                <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required [(ngModel)]="cita.nombre"/>
              </div>
              <div class="form-group">
                <label for="apellidos">Apellidos</label>
                <input id="apellidos" name="apellidos" type="text" placeholder="Tus apellidos" [(ngModel)]="cita.apellidos"/>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="telefono">Teléfono <span class="req" aria-hidden="true">*</span></label>
                <input id="telefono" name="telefono" type="tel" placeholder="600 000 000" required [(ngModel)]="cita.telefono"/>
              </div>
              <div class="form-group">
                <label for="email">Email <span class="req" aria-hidden="true">*</span></label>
                <input id="email" name="email" type="email" placeholder="tu@email.com" required [(ngModel)]="cita.email"/>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="mascota">Nombre de la mascota <span class="req" aria-hidden="true">*</span></label>
                <input id="mascota" name="mascota" type="text" placeholder="¿Cómo se llama?" required [(ngModel)]="cita.mascota"/>
              </div>
              <div class="form-group">
                <label for="especie">Especie <span class="req" aria-hidden="true">*</span></label>
                <select id="especie" name="especie" required [(ngModel)]="cita.especie">
                  <option value="" disabled>Selecciona especie</option>
                  <option value="perro">Perro</option>
                  <option value="gato">Gato</option>
                  <option value="conejo">Conejo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="servicio">Servicio solicitado</label>
                <select id="servicio" name="servicio" [(ngModel)]="cita.servicio">
                  <option value="">¿Qué necesitas?</option>
                  <option value="consulta">Consulta General</option>
                  <option value="vacuna">Vacunaciones</option>
                  <option value="analisis">Análisis y Diagnóstico</option>
                  <option value="urgencia">Urgencia</option>
                  <option value="microchip">Microchip</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div class="form-group">
                <label for="zona">Municipio / Zona <span class="req" aria-hidden="true">*</span></label>
                <input id="zona" name="zona" type="text" placeholder="¿Dónde estás?" required [(ngModel)]="cita.zona"/>
              </div>
            </div>
            <div class="form-group">
              <label for="motivo">Motivo de la consulta</label>
              <textarea id="motivo" name="motivo" rows="4" placeholder="Cuéntanos brevemente qué le pasa a tu mascota o qué necesitas..." [(ngModel)]="cita.motivo"></textarea>
            </div>
            <div class="form-check">
              <input type="checkbox" id="privacidad" name="privacidad" required [(ngModel)]="cita.privacidad"/>
              <label for="privacidad">He leído y acepto la <a routerLink="/privacidad">Política de Privacidad</a> y el <a routerLink="/aviso-legal">Aviso Legal</a>. Mis datos serán tratados exclusivamente para gestionar mi solicitud. <span class="req">*</span></label>
            </div>
            <button type="submit" class="btn-submit" [disabled]="enviando">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              {{ enviando ? 'Enviando...' : 'Enviar solicitud de cita' }}
            </button>
            <p class="form-note">Te contactaremos en menos de 2 horas en horario de atención (L–D, 8h–21h)</p>
            <div class="form-success" *ngIf="enviado" role="alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              ¡Solicitud enviada! Te contactaremos pronto.
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section faq-section" id="faq" aria-labelledby="faq-title">
      <div class="container">
        <header class="section-header">
          <span class="section-tag">FAQ</span>
          <h2 id="faq-title">Preguntas frecuentes</h2>
          <div class="divider"></div>
        </header>
        <div class="faq-list" reveal="up" role="list">
          <div class="faq-item" *ngFor="let f of faqs" [class.open]="f.open" (click)="f.open = !f.open" role="listitem">
            <div class="faq-question" [attr.aria-expanded]="f.open">
              <span>{{f.q}}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="faq-answer" *ngIf="f.open"><p>{{f.a}}</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-final" aria-label="Llamada a la acción final">
      <div class="container">
        <div class="cta-card" reveal="up">
          <div class="cta-deco cta-deco--left" aria-hidden="true"></div>
          <div class="cta-deco cta-deco--right" aria-hidden="true"></div>
          <h2>Tu mascota merece la mejor atención, sin salir de casa</h2>
          <p>Pide tu primera cita hoy. Sin compromiso. Sin esperas.</p>
          <div class="cta-actions">
            <a routerLink="/contacto" fragment="cita" class="btn btn--accent">Pedir Cita Ahora</a>
            <a href="https://wa.me/34650440813" class="btn btn--outline-white" target="_blank" rel="noopener">Escribir por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;

    /* ===== SECTION HEADER GLOBAL ===== */
    .section-header {
      text-align: center; margin-bottom: 3.5rem;
      .section-tag { display: block; font-size: 0.8125rem; font-weight: 700; color: $orange-500; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.75rem; }
      h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 800; color: $gray-900; letter-spacing: -0.02em; margin-bottom: 1rem; }
      .divider { width: 48px; height: 3px; background: $orange-500; border-radius: 2px; margin: 0 auto 1.25rem; }
      p { font-size: $text-base; color: $gray-600; max-width: 580px; margin: 0 auto; line-height: 1.7; }
    }

    /* ===== TESTIMONIOS ===== */
    .testimonios-grid {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;
      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }
    .testimonio-card {
      background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 2px 12px rgba(0,0,0,0.07); border: 1px solid #e8edf2;
      display: flex; flex-direction: column; gap: 1rem; transition: box-shadow 0.25s;
      &:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.12); }
    }
    .quote-icon { font-size: 1.5rem; color: #c7d8f0; line-height: 1; }
    .stars { color: #f59e0b; font-size: 1.1rem; letter-spacing: 2px; }
    .testimonio-text { font-size: 0.9375rem; color: #4a5568; line-height: 1.7; font-style: italic; flex: 1; }
    .testimonio-author {
      display: flex; align-items: center; gap: 0.875rem; padding-top: 1rem; border-top: 1px solid #f0f4f8;
      .author-avatar { width: 44px; height: 44px; background: #f0f4f8; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0; }
      strong { display: block; font-size: 0.875rem; font-weight: 600; color: #1a202c; }
      span { font-size: 0.75rem; color: #6b7280; display: block; margin-top: 2px; }
    }

    /* ===== FORMULARIO PIDE TU CITA ===== */
    .pide-cita-section { background: #f7f9fb; }
    .cita-form-wrapper {
      max-width: 760px; margin: 0 auto;
      background: white; border-radius: 20px; padding: 2.5rem;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08); border: 1px solid #e8edf2;
    }
    .cita-form { display: flex; flex-direction: column; gap: 1.25rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; @media (max-width: 600px) { grid-template-columns: 1fr; } }
    .form-group {
      display: flex; flex-direction: column; gap: 0.4rem;
      label { font-size: 0.875rem; font-weight: 600; color: #374151; }
      input, select, textarea {
        padding: 0.75rem 1rem; border: 1.5px solid #e2e8f0; border-radius: 10px;
        font-size: 0.9375rem; color: #1a202c; background: white; width: 100%;
        transition: border-color 0.2s;
        &:focus { outline: none; border-color: #2574cc; box-shadow: 0 0 0 3px rgba(37,116,204,0.12); }
        &::placeholder { color: #9ca3af; }
      }
      select { cursor: pointer; }
      textarea { resize: vertical; min-height: 100px; }
    }
    .req { color: #e03e3e; }
    .form-check {
      display: flex; align-items: flex-start; gap: 0.75rem;
      input[type="checkbox"] { margin-top: 3px; accent-color: #2574cc; flex-shrink: 0; }
      label { font-size: 0.8125rem; color: #6b7280; line-height: 1.5;
        a { color: #2574cc; &:hover { text-decoration: underline; } }
      }
    }
    .btn-submit {
      display: flex; align-items: center; justify-content: center; gap: 0.5rem;
      background: #2574cc; color: white; border: none; border-radius: 9999px;
      padding: 1rem 2rem; font-size: 1rem; font-weight: 700; cursor: pointer;
      transition: background 0.25s, transform 0.2s;
      &:hover:not(:disabled) { background: #1a4d8c; transform: translateY(-1px); }
      &:disabled { opacity: 0.65; cursor: not-allowed; }
    }
    .form-note { text-align: center; font-size: 0.8125rem; color: #6b7280; }
    .form-success {
      display: flex; align-items: center; gap: 0.75rem; justify-content: center;
      background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 1rem;
      color: #16a34a; font-weight: 600; font-size: 0.9375rem;
    }

    /* ===== FAQ ===== */
    .faq-section { padding: 5rem 0; }
    .faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.5rem; }
    .faq-item {
      background: white; border-radius: 10px; border: 1.5px solid #e2e8ed; overflow: hidden; cursor: pointer; transition: border-color 0.25s;
      &.open { border-color: #2574cc; }
    }
    .faq-question {
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.125rem 1.375rem; font-size: 0.9375rem; font-weight: 600; color: #2b2f38;
      svg { transition: transform 0.25s; flex-shrink: 0; }
    }
    .faq-item.open .faq-question svg { transform: rotate(180deg); }
    .faq-answer { padding: 0 1.375rem 1.125rem; p { font-size: 0.9rem; color: #545c6e; line-height: 1.7; margin: 0; } }

    /* ===== CTA FINAL ===== */
    .cta-final { padding: 3rem 0 5rem; }
    .cta-card {
      background: linear-gradient(135deg, #153d6e 0%, #2574cc 100%);
      border-radius: 1.5rem; padding: 4rem 3rem; text-align: center; position: relative; overflow: hidden;
      h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 800; color: white; margin-bottom: 1rem; letter-spacing: -0.02em; }
      p { color: rgba(255,255,255,0.75); font-size: 1.0625rem; margin-bottom: 2rem; }
    }
    .cta-deco {
      position: absolute; width: 300px; height: 300px; border-radius: 50%; background: rgba(255,255,255,0.05);
      &--left { left: -80px; bottom: -80px; }
      &--right { right: -60px; top: -80px; }
    }
    .cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; position: relative; }
    .btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.9rem 2rem; border-radius: 9999px; font-size: 0.9375rem; font-weight: 600;
      transition: all 0.25s; border: 2px solid transparent; cursor: pointer;
      &--accent { background: #f06522; color: white; border-color: #f06522; &:hover { background: #c94a00; } }
      &--outline-white { background: transparent; color: white; border-color: rgba(255,255,255,0.4); &:hover { border-color: white; background: rgba(255,255,255,0.1); } }
    }
  `]
})
export class HomeComponent {
  enviando = false;
  enviado = false;
  cita = { nombre:'', apellidos:'', telefono:'', email:'', mascota:'', especie:'', servicio:'', zona:'', motivo:'', privacidad: false };

  async submitCita() {
    if (!this.cita.nombre || !this.cita.telefono || !this.cita.email || !this.cita.mascota || !this.cita.especie || !this.cita.zona || !this.cita.privacidad) return;
    this.enviando = true;
    // Simula envío - aquí conectarás con tu backend
    await new Promise(r => setTimeout(r, 1200));
    this.enviando = false;
    this.enviado = true;
    // Reset
    setTimeout(() => {
      this.enviado = false;
      this.cita = { nombre:'', apellidos:'', telefono:'', email:'', mascota:'', especie:'', servicio:'', zona:'', motivo:'', privacidad: false };
    }, 5000);
  }

  faqs = [
    { q: '¿En qué horario podéis venir?', a: 'Atendemos de lunes a domingo, de 8h a 21h. Para urgencias nocturnas, consúltanos.', open: false },
    { q: '¿Qué animales atendéis?', a: 'Principalmente perros, gatos y pequeños animales domésticos. Consúltanos para otras especies.', open: false },
    { q: '¿El precio incluye el desplazamiento?', a: 'Sí, el precio incluye el desplazamiento dentro de la zona de cobertura. Sin sorpresas.', open: false },
    { q: '¿Puedo pedir cita de urgencia?', a: 'Sí. Disponemos de servicio de urgencias. Escríbenos por WhatsApp y te respondemos en minutos.', open: false },
    { q: '¿Emitís facturas?', a: 'Sí, emitimos factura por todos nuestros servicios. Solicítala al veterinario o por email.', open: false },
  ];
}
