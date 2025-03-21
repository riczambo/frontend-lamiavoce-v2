import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  user$ = this.authService.currentUser;

  constructor(
    private authService: AuthService
  ) {}

  logout(): void {
    this.authService.signOut();
  }
}
