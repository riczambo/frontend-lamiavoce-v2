import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { TuiResponsiveDialogOptions } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.less']
})
export class CreateReportComponent {
  creationReportForm: FormGroup;
  protected open = false;
  protected isLoading = false;
  protected showSuccessMessage = false;

  protected readonly options: Partial<TuiResponsiveDialogOptions> = {
    label: 'Creazione segnalazione',
    size: 's',
  };

  constructor(
    private fb: FormBuilder,
    public reportService: ReportService
  ) {
    this.creationReportForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(60)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      citizenId: ['', [Validators.required, Validators.pattern('[A-Z0-9]{16}')]],
      category: ['', [Validators.required]],
      zone: ['', [Validators.required]]
    });    
  }

  async onSubmit(): Promise<void> {
    if (this.creationReportForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.open = true;

    try {
      await this.reportService.addReport(this.creationReportForm.value);
      this.showSuccessMessage = true;
    } catch (error) {
      console.error('Errore durante la creazione del report:', error);
    } finally {
      this.isLoading = false;
    }
  }
}