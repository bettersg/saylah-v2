import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TeaserComponent } from '../../components/teaser/teaser.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [NavbarComponent, TeaserComponent, FooterComponent],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplatesComponent {

}
