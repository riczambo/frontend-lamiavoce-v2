import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthApiService } from './services/auth-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthApiService,
  ],
})
export class AuthModule { }
