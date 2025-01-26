import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Report, ReportFilterDTO, Category, ReportDTO, AttachmentDTO } from '../../../commons/model/entity.model';
import { Router } from '@angular/router';
import { LoginComponent } from '../../../auth/components/login/login.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: ReportDTO[] = [];
  categories: Category[] = [];
  zones: string[] = ['San Bortolo', 'Tassina', 'Rovigo (intero comune)', 'San Pio X', 'Commenda', 'Sarzano'];

  selectedCategories: string[] = [];
  selectedZones: string[] = [];

  constructor(
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReports();
    this.getCategories();
  }

  getReports(): void {
    const filter: ReportFilterDTO = {};
  
    if (this.selectedCategories.length > 0) {
      filter.categoryNames = this.selectedCategories;
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

  getCategories(): void {
    this.reportService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Errore durante il recupero delle categorie:', error);
      }
    );
  }

  onFilterChange(): void {
    this.getReports();
  }

  navigateToCreateReport(): void {
    this.router.navigateByUrl('/create-report');
  }

  /* getAttachmentUrl(attachment: AttachmentDTO): string {
    return `/api/attachments/${attachment.id}`;
  }   */
  
  isImage(attachment: AttachmentDTO): boolean {
    return attachment.contentType.startsWith('image/');
  }  
  
  /* enlargeImage(attachment: AttachmentDTO): void {
    const url = this.getAttachmentUrl(attachment);
    window.open(url, '_blank');
  } */
  
}
