import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReportComponent } from './components/create-report/create-report.component';
import { ReportsComponent } from './components/report/report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    CreateReportComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzUploadModule,
    NzCardModule,
    AuthModule
  ],
  exports: [
    CreateReportComponent,
    ReportsComponent
  ]
})
export class ReportModule { }
