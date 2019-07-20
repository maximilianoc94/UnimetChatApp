import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

email: string;
pswd: string;
nombre: string;
err: string;

constructor(private authService: AuthService, private router: Router) { }
  
  registrar() {
    const email = this.email;
    const pswd = this.pswd;
    const nombre = this.nombre;
    this.authService.registrar(email, pswd, nombre)
      .then(resolve => this.router.navigate(['chat']))
      .catch(error => this.err = error.message);
}
}
