import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-hero">
      <div class="container">
        <nav class="breadcrumb"><a routerLink="/">Inicio</a> <span>›</span> Blog</nav>
        <div class="page-hero__tag">BLOG</div>
        <h1>Consejos y noticias</h1>
        <p>Artículos sobre salud animal, cuidados y bienestar para tu mascota.</p>
      </div>
      <div class="page-hero__wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="#f6f8fa"/>
        </svg>
      </div>
    </div>

    <section class="section section--bg-alt">
      <div class="container">
        <div class="blog-header">
          <div>
            <h2>Todos los artículos</h2>
            <p class="blog-count">{{ posts.length }} artículos disponibles</p>
          </div>
          <div class="view-toggle">
            <button [class.active]="view === 'grid'" (click)="view = 'grid'" aria-label="Vista tarjetas">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              Tarjetas
            </button>
            <button [class.active]="view === 'list'" (click)="view = 'list'" aria-label="Vista lista">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              Lista
            </button>
          </div>
        </div>

        <div class="blog-grid" [class.blog-grid--list]="view === 'list'">
          <article class="blog-card" *ngFor="let post of posts">
            <div class="blog-img" [style.background]="post.bg"></div>
            <div class="blog-body">
              <span class="blog-cat">{{post.cat}}</span>
              <h3>{{post.title}}</h3>
              <p>{{post.excerpt}}</p>
              <a href="#" class="blog-link">Leer más <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;

    .blog-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 2rem;
      h2 { margin: 0; }
    }

    .blog-count { color: $gray-500; font-size: $text-sm; margin: 0; }

    .view-toggle {
      display: flex;
      gap: 0.25rem;
      background: $gray-100;
      padding: 0.25rem;
      border-radius: $radius-md;
      button {
        display: flex; align-items: center; gap: 0.375rem;
        padding: 0.375rem 0.875rem;
        font-size: $text-sm; font-weight: 500;
        color: $gray-600;
        border-radius: calc(#{$radius-md} - 2px);
        background: transparent;
        border: none; cursor: pointer;
        transition: all 0.2s;
        &.active { background: $white; color: $blue-600; box-shadow: 0 1px 4px rgba(0,0,0,0.1); }
        &:hover:not(.active) { color: $gray-800; }
      }
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      @media (max-width: 1024px) { grid-template-columns: repeat(2,1fr); }
      @media (max-width: 480px) { grid-template-columns: 1fr; }

      &--list {
        grid-template-columns: 1fr;
        .blog-card {
          display: flex;
          flex-direction: row;
          .blog-img { width: 220px; flex-shrink: 0; aspect-ratio: auto; min-height: 140px; }
          @media (max-width: 600px) {
            flex-direction: column;
            .blog-img { width: 100%; min-height: 160px; }
          }
        }
      }
    }

    .blog-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      border: 1px solid #e2e8ed;
      transition: box-shadow 0.25s, transform 0.25s;
      &:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.1); transform: translateY(-3px); }
    }

    .blog-img { aspect-ratio: 16/9; }
    .blog-body { padding: 1.5rem; flex: 1; }

    .blog-cat {
      font-size: 0.75rem; font-weight: 600; color: $orange-500;
      text-transform: uppercase; letter-spacing: 0.08em;
    }

    h3 { font-size: 1rem; font-weight: 700; color: $gray-900; margin: 0.5rem 0; line-height: 1.4; }
    p { font-size: 0.875rem; color: $gray-600; line-height: 1.65; margin: 0 0 1rem; }

    .blog-link {
      display: inline-flex; align-items: center; gap: 0.3rem;
      font-size: 0.875rem; font-weight: 600; color: $blue-500;
      transition: gap 0.2s;
      &:hover { gap: 0.5rem; }
    }
  `]
})
export class BlogComponent {
  view: 'grid' | 'list' = 'grid';

  posts = [
    { title: 'Cómo reducir el estrés del veterinario en gatos', excerpt: 'Los gatos son animales muy territoriales. Descubre por qué la consulta a domicilio es la mejor opción para ellos.', cat: 'Bienestar', bg: 'linear-gradient(135deg,#bfdbfe,#dbeafe)' },
    { title: 'Vacunas obligatorias para tu perro en Madrid', excerpt: 'Conoce el calendario vacunal actualizado para perros en la Comunidad de Madrid y cómo mantenerlo al día.', cat: 'Salud', bg: 'linear-gradient(135deg,#d1fae5,#a7f3d0)' },
    { title: 'Signos de alarma en mascotas mayores', excerpt: 'A partir de cierta edad, las mascotas necesitan más atención veterinaria. Te contamos qué señales no debes ignorar.', cat: 'Preventivo', bg: 'linear-gradient(135deg,#fed7aa,#fde68a)' },
    { title: 'Microchip obligatorio: todo lo que necesitas saber', excerpt: 'En España, el microchip es obligatorio para perros. Te explicamos el proceso, el registro y los beneficios.', cat: 'Legal', bg: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)' },
    { title: 'Desparasitación interna y externa: cuándo y cómo', excerpt: 'Un buen programa antiparasitario protege a tu mascota y a tu familia. Te guiamos paso a paso.', cat: 'Preventivo', bg: 'linear-gradient(135deg,#fce7f3,#fbcfe8)' },
    { title: 'Cuidados paliativos: acompañar con dignidad', excerpt: 'Cuando una mascota está en sus últimas etapas, la calidad de vida es lo que importa. Housevet ofrece apoyo integral.', cat: 'Bienestar', bg: 'linear-gradient(135deg,#ccfbf1,#a7f3d0)' },
  ];
}
