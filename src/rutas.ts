import { Routes } from '@angular/router';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { PerfilComponent } from './app/perfil/perfil.component';

export const appRoutes: Routes = [
  { path: 'registro', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'chat', component: ChatroomComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
];
