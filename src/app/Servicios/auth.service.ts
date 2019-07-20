import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../modelos/usuario.model';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;
  private uid: string;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user = afAuth.authState;
    afAuth.authState.subscribe(state => {
      this.uid = state.uid;
    });
  }

  get currentUserID(): string {
    return this.uid;
  }

  authUsuario() {
    return this.user;
  }

  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(resolve => {
        this.authState = resolve;
        const status = 'conectado';
        this.setStatusUsuario(status);
        this.router.navigate(['chat']);
      })
      .catch(error => console.log(error));
  }

  registrar(email: string, pswd: string, nombre: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, pswd)
      .then(user => {
        this.authState = user;
        const status = 'conectado';
        this.setDatosUsuario(email, nombre, status);
      })
      .catch(err => console.log(err));
  }

  actualizar(nombre: string) {
    const path = `usuarios/${this.currentUserID}/nombre`;
    const nuevoNombre = nombre;
    this.db
      .object(path)
      .set(nuevoNombre)
      .then(resp => {
        this.router.navigate(['chat']);
      })
      .catch(error => console.log(error));
  }

  setDatosUsuario(email: string, nombre: string, status: string): void {
    const path = `usuarios/${this.currentUserID}`;
    const data = {
      email: email,
      nombre: nombre,
      status: status
    };
    // UPDATE (∩ಠ ͟ʖಠ)⊃━☆ﾟ.
    this.db
      .object(path)
      .update(data)
      .catch(error => console.log(error));
  }

  setStatusUsuario(status: string): void {
    const path = `usuarios/${this.currentUserID}`;
    const data = {
      status: status
    };
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
    const status = 'desconectado';
    const path = `usuarios/${this.currentUserID}/status`;
    // SET (∩ಠ ͟ʖಠ)⊃━☆ﾟ.
    this.db
      .object(path)
      .set('desconectado')
      .then(resp => {
        this.router.navigate(['chat']);
      })
      .catch(error => console.log(error));
  }
}
