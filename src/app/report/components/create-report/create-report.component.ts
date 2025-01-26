import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportRequest } from '../../../commons/model/entity.model';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {
  reportForm!: FormGroup;
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      citizenCodiceFiscale: ['', [Validators.required, Validators.pattern('[A-Z0-9]{16}')]],
      categoryName: ['', Validators.required],
      zone: ['']
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files) {
      const maxSize = 5 * 1024 * 1024;
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  
      this.selectedFiles = Array.from(input.files).filter(file => {
        if (file.size > maxSize) {
          console.error(`File ${file.name} troppo grande.`);
          return false;
        }
        if (!allowedTypes.includes(file.type)) {
          console.error(`File ${file.name} non supportato.`);
          return false;
        }
        return true;
      });
    }
  }  

  onSubmit(): void {
    if (this.reportForm.valid) {
      const formData = new FormData();
  
      const report: ReportRequest = {
        title: this.reportForm.value.title,
        description: this.reportForm.value.description,
        citizenCodiceFiscale: this.reportForm.value.citizenCodiceFiscale,
        categoryName: this.reportForm.value.categoryName
      };
  
      formData.append('report', new Blob([JSON.stringify(report)], { type: 'application/json' }));
  
      // Aggiungi gli allegati
      this.selectedFiles.forEach(file => {
        formData.append('attachments', file, file.name);
      });
  
      // Invio la richiesta senza impostare manualmente Content-Type
      this.reportService.createReport(formData).subscribe(
        () => {
          this.router.navigate(['/reports']);
        },
        error => {
          console.error('Error creating report', error);
        }
      );
    }
  }  

  navigateToReports(): void {
    this.router.navigate(['/reports']);
  }
}
