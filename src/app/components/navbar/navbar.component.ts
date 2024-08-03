import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {

  constructor(private location: Location,
    private router: Router
  ) {}
  
  back() {
    this.location.back();
  }

  login() {
    this.router.navigate(['login']);
  }
  
}
