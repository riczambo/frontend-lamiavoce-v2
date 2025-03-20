import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthApiService } from './services/auth-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { 
  TuiInputModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/legacy';
import { TuiAppearance, TuiButton, TuiError, TuiTextfield } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiForm } from '@taiga-ui/layout';
import { TuiValidationError } from '@taiga-ui/cdk/classes';

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
    AuthRoutingModule,
    TuiInputModule,
    TuiButton,
    TuiError,
    TuiAppearance,
    TuiCardLarge,
    TuiCardMedium,
    TuiForm,
    TuiFieldErrorPipe,
    TuiTextfieldControllerModule,
    ...TuiTextfield
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthApiService,
  ],
})
export class AuthModule { }
