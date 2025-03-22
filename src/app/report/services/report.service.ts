import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportFilterDTO } from '../../commons/model/entity.model';
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  QueryConstraint,
  where,
  orderBy,
  query,
  updateDoc,
  Firestore
} from 'firebase/firestore';
import { collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private firestore: Firestore = inject(Firestore);
  private reportsCollection = collection(this.firestore, 'reports');
  readonly categories: string[] = ['Ambiente', 'Illuminazione', 'Rifiuti', 'Urbanistica', 'Viabilità', 'Altro'];
  readonly zones: string[] = ['San Bortolo', 'Tassina', 'Centro', 'Rovigo (intero comune)', 'San Pio X', 'Commenda', 'Sarzano'];

  constructor() {}

  addReport(report: Report): Promise<any> {
    const completeReport = {
      ...report,
      creationDate: serverTimestamp(),
      upvotes: [],
      upvotesCount: 0
    };
    return addDoc(this.reportsCollection, completeReport);
  }

  deleteReport(reportId: string): Promise<void> {
    const reportRef = doc(this.firestore, 'reports', reportId);
    return deleteDoc(reportRef);
  }

  getReports(filter?: ReportFilterDTO): Observable<any[]> {
    let constraints: QueryConstraint[] = [];
    if (filter) {
      if (filter.categories && filter.categories.length > 0) {
        constraints.push(where('category', 'in', filter.categories));
      }
      if (filter.zones && filter.zones.length > 0) {
        constraints.push(where('zone', 'in', filter.zones));
      }
    }
    constraints.push(orderBy('upvotesCount', 'desc'));
    const reportsQuery = query(this.reportsCollection, ...constraints);
    return collectionData(reportsQuery, { idField: 'id' });
  }

  updateUpvotes(reportId: string, upvotes: string[], upvotesCount: number): Promise<void> {
    const reportRef = doc(this.firestore, 'reports', reportId);
    return updateDoc(reportRef, { upvotes, upvotesCount });
  }
}