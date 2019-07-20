import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../servicios/chat.service';
import { AuthService } from '../servicios/auth.service';
import { Mensaje } from '../modelos/mensaje.model';


@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  @Input() mensaje: Mensaje;
  email: string;
  nombreUsuario: string;
  contenidoMensaje: string;
  hora: Date = new Date();
  esPropio: boolean;

  constructor() { }

  ngOnInit(mensaje = this.mensaje) {
    this.contenidoMensaje = mensaje.mensaje;
    this.hora = mensaje.horaEnviado;
    this.email = mensaje.usuario.email;
    this.nombreUsuario = mensaje.usuario.nombre;
  }

}
