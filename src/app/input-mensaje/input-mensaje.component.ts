import { Component, OnInit } from '@angular/core';
import { ChatService } from '../servicios/chat.service';

@Component({
  selector: 'app-input-mensaje',
  templateUrl: './input-mensaje.component.html',
  styleUrls: ['./input-mensaje.component.css']
})
export class InputMensajeComponent implements OnInit {
  mensaje: string;


  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  enviar() {
    this.chat.enviarMensaje(this.mensaje);
    this.mensaje = '';
  }

  handleSubmit(evento) {
    //13 = enter
    if (evento.keyCode === 13) {
      this.enviar();
    }
  }

}
