import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActionsComponent } from '../../modules/actions/actions.component';
import { CategoriesComponent } from '../../modules/categories/categories.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CategoriesComponent, ActionsComponent, NavbarComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(private router: Router) {}

  navigateToDefault() {
    this.router.navigate(['/']);
  }

}
