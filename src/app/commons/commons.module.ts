import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggle
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonsModule { }
