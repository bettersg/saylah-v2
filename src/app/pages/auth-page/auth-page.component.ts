import { Component } from '@angular/core';
import { AuthComponent } from '../../modules/auth/auth.component';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    AuthComponent
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {

}
