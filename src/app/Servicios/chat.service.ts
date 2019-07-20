import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../servicios/auth.service';
import * as firebase from 'firebase/app';
import { Mensaje } from '../modelos/mensaje.model';
import { Usuario } from '../modelos/usuario.model';
@Injectable()
export class ChatService {
  usuario: Usuario;
  chatMensajes: FirebaseListObservable<Mensaje[]>;
  chatMensaje: Mensaje;
  nombreusuario: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.usuario = auth;
      }

      this.getUser().subscribe(a => {
        this.nombreusuario = a.nombre;
      });
    });
  }

  getUser() {
    const user = this.usuario.uid;
    const path = `/usuarios/${user}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = `/usuarios`;
    return this.db.list(path, {
      query: {
        // (∩ಠ ͟ʖಠ)⊃━☆ﾟ.
        limitToFirst: 10,
        orderByChild: 'nombre',
        startAt: 'A'
      }
    });
  }

  async enviarMensaje(msg: string) {
    const hora = this.getHora();
    const IDusuarioActual = this.usuario.uid;
    const RefUsuarioActual = firebase
      .database()
      .ref('/usuarios/' + IDusuarioActual);
    let usuarioActual;
    RefUsuarioActual.on('value', function(obj) {
      usuarioActual = obj.val();
    });
    if (usuarioActual) {
      this.chatMensajes = this.getMensajes();
      this.chatMensajes.push({
        mensaje: msg,
        horaEnviado: hora,
        usuario: usuarioActual
      });
    }
  }

  getMensajes(): FirebaseListObservable<Mensaje[]> {
    return this.db.list('mensajes', {
      query: {
        limitToLast: 20,
        orderByKey: true
      }
    });
  }

  getHora() {
    const now = new Date();
    const date =
      now.getUTCFullYear() +
      '/' +
      (now.getUTCMonth() + 1) +
      '/' +
      now.getUTCDate();
    const time =
      now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();

    return date + ' ' + time;
  }
}
