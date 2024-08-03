import { Component, OnInit } from '@angular/core';
import { SignInSignUpPage, authData } from './auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AmplifyAuthenticatorModule,
    RouterModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  
  constructor(private router: Router, private authService: AuthService) {}
  
  countdown: number = 2;
  interval: any;

  ngOnInit(): void {
    this.startCountdown();
    this.authService.fetchUserName();
    this.authService.fetchUserEmail();
  }

  startCountdown() {
    this.interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.interval);
        this.router.navigate(['/auth']);
      }
    }, 1000);
  }

  navigateToDashboard() {
    this.router.navigate(['/']);
  }

  authData: SignInSignUpPage = authData;
}
