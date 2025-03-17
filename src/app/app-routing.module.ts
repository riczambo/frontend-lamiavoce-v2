import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './report/pages/report/report.component';
import { CreateReportComponent } from './report/pages/create-report/create-report.component';
import { SignupComponent } from './auth/components/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reports', pathMatch: 'full' },
  { 
    path: 'signup',
    component: SignupComponent
  },
  { 
    path: 'reports',
    component: ReportsComponent
  },
  { 
    path: 'create-report', 
    component: CreateReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}