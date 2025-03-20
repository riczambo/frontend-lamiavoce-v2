import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiButton, TuiIcon, TuiNotification } from '@taiga-ui/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TuiIcon,
    TuiButton,
    FormsModule,
    RouterModule,
    TuiNotification 
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonsModule { }
