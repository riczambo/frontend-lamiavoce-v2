import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportRequest } from '../../../commons/model/entity.model';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {
  reportForm!: FormGroup;
  categories: string[] = ['Ambiente', 'Viabilità', 'Illuminazione', 'Rifiuti', 'Altro'];
  zones: string[] = ['San Bortolo', 'Tassina', 'Centro', 'Rovigo (intero comune)', 'San Pio X', 'Commenda', 'Sarzano'];
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
      citizenId: ['', [Validators.required, Validators.pattern('[A-Z0-9]{16}')]],
      category: ['', Validators.required],
      zone: ['']
    });
  }

  beforeUpload = (file: NzUploadFile, fileList: NzUploadFile[]): boolean => {
    const maxSize = 5 * 1024 * 1024; // 5 MB
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    if (file.size! > maxSize) {
      console.error(`File ${file.name} troppo grande.`);
      return false;
    }
    if (!allowedTypes.includes(file.type!)) {
      console.error(`File ${file.name} non supportato.`);
      return false;
    }
    this.selectedFiles.push(file as unknown as File);
    return false;
  };

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'removed') {
      this.selectedFiles = this.selectedFiles.filter(f => f.name !== info.file.name);
    }
  }
  
  onSubmit(): void {
    if (this.reportForm.valid) {
      const formData = new FormData();

      const report: ReportRequest = {
        title: this.reportForm.value.title,
        description: this.reportForm.value.description,
        citizenId: this.reportForm.value.citizenId,
        category: this.reportForm.value.category,
        zone: this.reportForm.value.zone
      };

      formData.append('report', new Blob([JSON.stringify(report)], { type: 'application/json' }));

      this.selectedFiles.forEach(file => {
        formData.append('attachments', file, file.name);
      });

      this.reportService.addReport(formData)
        .then(() => {
          console.log('Report aggiunto con successo!');
          this.router.navigate(['/reports']);
        })
        .catch(error => {
          console.error('Errore durante la creazione del report:', error);
        });
    }
  }

  navigateToReports(): void {
    this.router.navigate(['/reports']);
  }
}
