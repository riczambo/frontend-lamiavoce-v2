import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { ReportFilterDTO, Report } from '../../../commons/model/entity.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tuiDropdownAnimation, tuiFadeIn } from '@taiga-ui/core';
import { AuthStateService } from '../../../auth/services/auth-state.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
  animations: [tuiFadeIn, tuiDropdownAnimation]
})
export class ReportsComponent implements OnInit {
  isAuthenticated$ = this.authState.isLoggedIn;
  filterForm!: FormGroup;
  reports: Report[] = [];
  openDropdownId: string | null = null;

  constructor(
    public reportService: ReportService,
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

  handleDeleteReport(report: Report): void {
    this.reportService.deleteReport(report.id.toString()).then(() => {
      this.getReports();
    }).catch(error => {
      console.error('Errore durante l\'eliminazione del report:', error);
    });
  }

  handleUpvote(report: Report): void {
    this.reportService.incrementUpvote(report.id.toString())
      .catch(error => {
        console.error("Errore durante l'incremento degli upvote:", error);
      });
  }  

  handleDropdownToggled({ reportId, isOpen }: { reportId: string, isOpen: boolean }): void {
    this.openDropdownId = isOpen ? reportId : null;
  }
}