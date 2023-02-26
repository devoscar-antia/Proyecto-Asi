import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//services
import{BackendService} from './services/comunication/backend.service';

//Firebase 
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Auth service
import { AuthserviceService } from "./services/auth/authservice.service";
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DietasAlimentacionComponent } from './components/dietas-alimentacion/dietas-alimentacion.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { ProgresoComponent } from './components/progreso/progreso.component';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';

//import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavbarComponent,
    InicioComponent,
    DietasAlimentacionComponent,
    RutinasComponent,
    ProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule, NgbModule, 
    //FormsModule
  ],
  providers: [AuthserviceService,BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
