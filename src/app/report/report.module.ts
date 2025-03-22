import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReportComponent } from './pages/create-report/create-report.component';
import { ReportsComponent } from './pages/report/report.component';
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
  TuiDialogComponent,  
  TuiLink,
  TuiIconPipe,
  TuiDropdown,
  TuiOption
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
  TuiStep,
  TuiSwitch,
  TuiTooltip
} from '@taiga-ui/kit';
import {TuiDropdownMobile, TuiResponsiveDialog} from '@taiga-ui/addon-mobile';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [
    CreateReportComponent,
    ReportsComponent,
    ReportCardComponent
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
    TuiDropdownMobile,
    TuiOption,
    TuiStep,
    ...TuiDataList,
    ...TuiDropdown,
    ...TuiDataListWrapper,
    ...TuiTextfield,
    ...TuiHint,
    ...TuiBlockStatus,
  ],
  exports: [
    CreateReportComponent,
    ReportsComponent
  ],
  providers: [
    AuthService
  ]
})
export class ReportModule { }
