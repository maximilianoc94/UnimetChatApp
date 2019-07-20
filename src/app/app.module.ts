import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { InputMensajeComponent } from './input-mensaje/input-mensaje.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ListaMensajesComponent } from './lista-mensajes/lista-mensajes.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ChatService } from './servicios/chat.service';
import { AuthService } from './servicios/auth.service';
import { appRoutes } from '../rutas';
import { environment } from '../environments/environment';
import { PerfilComponent } from './perfil/perfil.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './servicios/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    InputMensajeComponent,
    ChatroomComponent,
    ListaMensajesComponent,
    MensajeComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    ListaUsuariosComponent,
    UsuarioComponent,
    PerfilComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, ChatService, UploadService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
