import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkMode = true;
  isAuthenticated = false;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private authState: AuthStateService
  ) {}

  ngOnInit(): void {
    this.authState.isAuthenticated().subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  toggleTheme(isDark: boolean): void {
    this.isDarkMode = isDark;
    this.themeService.setTheme(isDark ? 'dark' : 'light');
  }

  logout(): void {
    this.authState.logout();
    this.router.navigate(['login']);
  }
}
