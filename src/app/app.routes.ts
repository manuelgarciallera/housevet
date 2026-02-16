import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
    title: 'HouseVet – Veterinario a domicilio en Madrid'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent),
    title: 'Acceder | HouseVet'
  },
  {
    path: 'servicios',
    loadComponent: () => import('./features/servicios-page/servicios-page').then(m => m.ServiciosPageComponent),
    title: 'Servicios | HouseVet'
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog').then(m => m.BlogComponent),
    title: 'Blog | HouseVet'
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('./features/quienes-somos/quienes-somos').then(m => m.QuienesSomosComponent),
    title: 'Quiénes Somos | HouseVet'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto').then(m => m.ContactoComponent),
    title: 'Contacto | HouseVet'
  },
  {
    path: 'politica-privacidad',
    loadComponent: () => import('./features/legal/privacidad/privacidad').then(m => m.PrivacidadComponent),
    title: 'Política de Privacidad | HouseVet'
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./features/legal/aviso-legal/aviso-legal').then(m => m.AvisoLegalComponent),
    title: 'Aviso Legal | HouseVet'
  },
  {
    path: 'politica-cookies',
    loadComponent: () => import('./features/legal/cookies/cookies').then(m => m.CookiesComponent),
    title: 'Política de Cookies | HouseVet'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFoundComponent),
    title: 'Página no encontrada | HouseVet'
  }
];