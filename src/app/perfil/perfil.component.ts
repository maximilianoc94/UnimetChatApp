import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nombre: string;

  constructor(private authService: AuthService, private router: Router) {}

  actualizar() {
    const nombre = this.nombre;
    this.authService.actualizar(nombre);
  }
}
