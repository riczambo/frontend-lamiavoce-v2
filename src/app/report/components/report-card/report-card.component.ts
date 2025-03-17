import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Report } from '../../../commons/model/entity.model';

@Component({
  selector: 'report-card',
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.less'
})
export class ReportCardComponent {
  @Input() report!: Report;
  @Input() isAuthenticated: any;
  @Output() deleteRequested = new EventEmitter<Report>();
  @Output() upvoteRequested = new EventEmitter<Report>();
  @Output() dropdownToggled = new EventEmitter<{ reportId: string, isOpen: boolean }>();

  constructor(
    public reportService: ReportService
  ) {}

  toggleDropdown(isOpen: boolean): void {
    this.dropdownToggled.emit({ reportId: this.report.id.toString(), isOpen });
  }

  flagContent(report: any): void {
    console.log('Segnalazione per il report:', report);
  }

  onDelete(): void {
    this.deleteRequested.emit(this.report);
  }

  onUpvote(): void {
    this.upvoteRequested.emit(this.report);
  }
}