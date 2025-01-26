import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './report/components/report/report.component';
import { CreateReportComponent } from './report/components/create-report/create-report.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './auth/components/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reports', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { 
    path: 'reports',
    component: ReportsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'create-report', 
    component: CreateReportComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}