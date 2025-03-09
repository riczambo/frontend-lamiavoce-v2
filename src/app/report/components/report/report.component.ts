import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { ReportFilterDTO, ReportDTO, AttachmentDTO } from '../../../commons/model/entity.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tuiDropdownAnimation, tuiFadeIn } from '@taiga-ui/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
  animations: [tuiFadeIn, tuiDropdownAnimation]
})
export class ReportsComponent implements OnInit {
  filterForm!: FormGroup;
  reports: ReportDTO[] = [];

  constructor(
    public reportService: ReportService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      selectCategorie: [[]],
      selectZone: [[]]
    });

    this.filterForm.valueChanges.subscribe(values => {
      this.onFilterChange();
    });

    this.getReports();
  }

  getReports(): void {
    const filter: ReportFilterDTO = {};
    const { selectCategorie, selectZone } = this.filterForm.value;

    if (selectCategorie && selectCategorie.length > 0) {
      filter.categories = selectCategorie;
    }
    if (selectZone && selectZone.length > 0) {
      filter.zones = selectZone;
    }

    this.reportService.getReports(filter).subscribe(
      (reports) => {
        this.reports = reports;
      },
      (error) => {
        console.error('Errore durante il recupero dei report:', error);
      }
    );
  }

  onFilterChange(): void {
    this.getReports();
  }

  flagContent(report: any): void {
    console.log('Segnalazione per il report:', report);
  }

  navigateToCreateReport(): void {
    this.router.navigateByUrl('/create-report');
  }
  
  isImage(attachment: AttachmentDTO): boolean {
    return attachment.contentType.startsWith('image/');
  }
  
}