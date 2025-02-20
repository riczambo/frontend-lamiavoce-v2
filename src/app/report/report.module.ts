import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReportComponent } from './components/create-report/create-report.component';
import { ReportsComponent } from './components/report/report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { AuthModule } from '../auth/auth.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CreateReportComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    AuthModule
  ],
  exports: [
    CreateReportComponent,
    ReportsComponent
  ]
})
export class ReportModule { }
