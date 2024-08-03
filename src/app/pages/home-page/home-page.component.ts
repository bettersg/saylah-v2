import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HomeComponent } from '../../modules/home/home.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

}
