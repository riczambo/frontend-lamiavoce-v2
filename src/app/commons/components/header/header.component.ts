import { Component } from '@angular/core';
import { AuthStateService } from '../../../auth/services/auth-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  user$ = this.authState.user$;

  constructor(
    private authState: AuthStateService
  ) {}

  logout(): void {
    this.authState.logout();
  }
}
