import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  userType: 'cliente' | 'veterinario' | 'admin' = 'cliente';
  loading = false;
  error = '';

  onSubmit() {
    this.loading = true;
    // TODO: Conectar con API Node/Express → JWT
    console.log('Login:', this.email, this.userType);
    setTimeout(() => { this.loading = false; }, 1500);
  }
}
