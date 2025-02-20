import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ReportFilterDTO } from '../../commons/model/entity.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reportsCollection = this.firestore.collection('reports');

  constructor(
    private firestore: AngularFirestore
  ) {}

  addReport(report: any): Promise<any> {
    return this.reportsCollection.add(report);
  }

  getReports(filter?: ReportFilterDTO): Observable<any[]> {
    return this.firestore.collection('reports', ref => {
      let query: firebase.firestore.Query<firebase.firestore.DocumentData> = ref;
      
      if (filter) {
        if (filter.categories && filter.categories.length > 0) {
          query = query.where('category', 'in', filter.categories);
        }
        if (filter.zones && filter.zones.length > 0) {
          query = query.where('zone', 'in', filter.zones);
        }
      }
      
      return query;
    }).valueChanges({ idField: 'id' });
  }  
}