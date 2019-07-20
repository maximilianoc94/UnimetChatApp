import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../servicios/chat.service';
import { Observable } from 'rxjs/Observable';
import { Mensaje } from '../modelos/mensaje.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.css']
})
export class ListaMensajesComponent implements OnInit, OnChanges {
  listaMensajes: FirebaseListObservable<Mensaje[]>;

  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.listaMensajes = this.chat.getMensajes();
  }

  ngOnChanges() {
    this.listaMensajes = this.chat.getMensajes();
  }
}
