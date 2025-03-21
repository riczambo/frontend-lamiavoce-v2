import { NgModule } from '@angular/core';
import { SignInComponent } from './components/signin/signin.component';
import { AuthService } from './services/auth-api.service';
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

@NgModule({
  declarations: [
    SignInComponent,
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
    SignInComponent
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }
