import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Import all the components for which navigation service has to be activated 
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthGuard } from "./services/guard/auth.guard";
import { InicioComponent } from './components/inicio/inicio.component';
import { DietasAlimentacionComponent } from './components/dietas-alimentacion/dietas-alimentacion.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard',canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'inicio', component:InicioComponent },
  { path: 'dietas', canActivate: [AuthGuard], component:DietasAlimentacionComponent},
  { path: 'progreso',canActivate: [AuthGuard], component:ProgresoComponent},
  { path: 'rutinas',canActivate: [AuthGuard], component:RutinasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
