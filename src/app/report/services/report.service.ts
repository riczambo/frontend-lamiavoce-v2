import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report, Category, ReportDTO } from '../../commons/model/entity.model';
import { ReportRequest, ReportFilterDTO } from '../../commons/model/entity.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reportUrl = 'http://localhost:8080/api/reports';
  private categoriesUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) {}

  // Ottieni i report filtrati tramite filtro DTO
  getReports(filter: ReportFilterDTO): Observable<ReportDTO[]> {
    return this.http.post<ReportDTO[]>(this.reportUrl, filter);
  }

  // Crea un nuovo report
  createReport(formData: FormData): Observable<void> {
    return this.http.post<void>(`${this.reportUrl}/create`, formData);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
  
}