import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { ReportFilterDTO, ReportDTO, AttachmentDTO } from '../../../commons/model/entity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: ReportDTO[] = [];
  protected readonly categories: string[] = ['Ambiente', 'Viabilità', 'Illuminazione', 'Rifiuti', 'Altro'];
  protected readonly zones: string[] = ['San Bortolo', 'Tassina', 'Centro', 'Rovigo (intero comune)', 'San Pio X', 'Commenda', 'Sarzano'];

  selectedCategories: string[] = [];
  selectedZones: string[] = [];

  constructor(
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReports();
  }

  getReports(): void {
    const filter: ReportFilterDTO = {};
  
    if (this.selectedCategories.length > 0) {
      filter.categories = this.selectedCategories;
    }
    if (this.selectedZones.length > 0) {
      filter.zones = this.selectedZones;
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

  navigateToCreateReport(): void {
    this.router.navigateByUrl('/create-report');
  }
  
  isImage(attachment: AttachmentDTO): boolean {
    return attachment.contentType.startsWith('image/');
  }
  
}
