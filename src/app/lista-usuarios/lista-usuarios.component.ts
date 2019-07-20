import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import { ChatService } from '../servicios/chat.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  listaUsuarios: Usuario[];

  constructor(chat: ChatService) {
    chat.getUsers().subscribe(users => {
      this.listaUsuarios = users;
    });
  }
}
