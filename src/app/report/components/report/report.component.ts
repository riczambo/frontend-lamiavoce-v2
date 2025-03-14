import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { ReportFilterDTO, ReportDTO, AttachmentDTO } from '../../../commons/model/entity.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tuiDropdownAnimation, tuiFadeIn } from '@taiga-ui/core';
import { AuthStateService } from '../../../commons/services/auth-state.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
  animations: [tuiFadeIn, tuiDropdownAnimation]
})
export class ReportsComponent implements OnInit {
  isAuthenticated = false;
  filterForm!: FormGroup;
  reports: ReportDTO[] = [];

  constructor(
    public reportService: ReportService,
    private router: Router,
    private authState: AuthStateService,
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

    this.authState.isAuthenticated().subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
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

  deleteReport(report: any): void {
    this.reportService.deleteReport(report.id).then(() => {
      this.getReports();
    });
  }

  onFilterChange(): void {
    this.getReports();
  }

  flagContent(report: any): void {
    console.log('Segnalazione per il report:', report);
  }

  isImage(attachment: AttachmentDTO): boolean {
    return attachment.contentType.startsWith('image/');
  }
  
}