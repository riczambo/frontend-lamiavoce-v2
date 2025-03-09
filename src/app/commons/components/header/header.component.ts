import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  isAuthenticated = false;

  constructor(
    private router: Router,
    private authState: AuthStateService
  ) {}

  ngOnInit(): void {
    this.authState.isAuthenticated().subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  logout(): void {
    this.authState.logout();
  }

  login(): void {
    this.router.navigate(['login']);
  }
}
