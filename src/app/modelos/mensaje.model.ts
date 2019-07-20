import { Usuario } from './usuario.model';

export class Mensaje {
  $key?: string;
  mensaje?: string;
  horaEnviado?: Date = new Date();
  usuario?: Usuario;
}
