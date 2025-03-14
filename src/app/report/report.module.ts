import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReportComponent } from './components/create-report/create-report.component';
import { ReportsComponent } from './components/report/report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';

//Taiga UI
import { 
  TuiButton,
  TuiGroup,
  TuiIcon,
  TuiHint,
  TuiAppearance,
  TuiTitle,
  TuiError,
  TuiNotification,
  TuiTextfield,
  TuiSelect,
  TuiDataList,
  TuiDialog,
  TuiLoader,
  TuiDialogOptions,
  TuiDialogComponent,  
  TuiLink,
  TuiIconPipe
} from '@taiga-ui/core';
import { 
  TuiInputModule,
  TuiMultiSelectModule,
  TuiMultiSelectOptionModule,
  TuiSelectModule,
  TuiSelectOptionModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/legacy';
import {
  TuiBlockStatus,
  TuiCardMedium,
  TuiCardLarge,
  TuiCell,
  TuiForm,
  TuiHeader
} from '@taiga-ui/layout';
import {
  TuiButtonGroup,
  TuiDataListWrapper,
  TuiFade,
  TuiFieldErrorPipe,
  TuiIconBadge,
  TuiSegmented,
  TuiSwitch,
  TuiTooltip
} from '@taiga-ui/kit';
import {TuiResponsiveDialog} from '@taiga-ui/addon-mobile';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CreateReportComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthModule,
    RouterLink,

    TuiLink,
    TuiButton,
    TuiResponsiveDialog,
    TuiIcon,
    TuiIconPipe,
    TuiInputModule,
    TuiSelectModule,
    TuiSelect,
    TuiSelectOptionModule,
    TuiMultiSelectModule,
    TuiMultiSelectOptionModule,
    TuiTextfieldControllerModule,
    TuiGroup,
    TuiAppearance,
    TuiDialogComponent,
    TuiCardMedium,
    TuiCardLarge,
    TuiFade,
    TuiDialog,
    TuiLoader,
    TuiTitle,
    TuiCell,
    TuiError,
    TuiFieldErrorPipe,
    TuiForm,
    TuiHeader,
    TuiNotification,
    TuiSegmented,
    TuiSwitch,
    TuiTooltip,
    TuiInputModule,
    TuiButtonGroup,
    TuiIconBadge,
    ...TuiDataList,
    ...TuiDataListWrapper,
    ...TuiTextfield,
    ...TuiHint,
    ...TuiBlockStatus,
  ],
  exports: [
    CreateReportComponent,
    ReportsComponent
  ]
})
export class ReportModule { }
