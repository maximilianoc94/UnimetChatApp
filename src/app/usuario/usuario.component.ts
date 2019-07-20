import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../servicios/chat.service';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
