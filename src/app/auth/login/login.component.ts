import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.token) {
      // Salva il token nel localStorage
      localStorage.setItem('authToken', this.token);
      // Reindirizza alla pagina degli utenti
      this.router.navigate(['/users']);
    } else {
      alert('Please enter a token');
    }
  }

  openNewTokenPage() {
    window.open('https://gorest.co.in/consumer/login', '_blank');
  }
}
