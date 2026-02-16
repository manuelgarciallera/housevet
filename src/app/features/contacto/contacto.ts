import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class ContactoComponent {
  submitted = false;
  form = { nombre:'', apellidos:'', telefono:'', email:'', mascota:'', especie:'', servicio:'', municipio:'', motivo:'', privacidad: false };
  onSubmit() {
    if (!this.form.privacidad) return;
    const mailto = `mailto:serviciohousevet@gmail.com?subject=Solicitud de cita - ${this.form.nombre}&body=Nombre: ${this.form.nombre} ${this.form.apellidos}%0ATelefono: ${this.form.telefono}%0AEmail: ${this.form.email}%0AMascota: ${this.form.mascota} (${this.form.especie})%0AServicio: ${this.form.servicio}%0AMunicipio: ${this.form.municipio}%0AMotivo: ${this.form.motivo}`;
    window.location.href = mailto;
    this.submitted = true;
  }
}
