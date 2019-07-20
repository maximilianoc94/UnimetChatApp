import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: Observable<firebase.User>;
  email: string


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.authUsuario();
    this.usuario.subscribe(user => {
      if (user) {
        this.email = user.email;
      }
    });
  }

  logout() {
    this.authService.logout();
  }



}
