import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TeaserComponent } from '../../components/teaser/teaser.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NavbarComponent, TeaserComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsComponent {

  settings = {
    language: 'English',
    voice: 'Karen (en-AU)',
    gridPortrait: '3 x 3',
    gridLandscape: '2 x 3',
    fontSize: '14 px',
    theme: 'Light'
  };

  languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];
  voices = ['Karen (en-AU)', 'David (en-US)', 'Zira (en-US)', 'Catherine (fr-FR)'];
  gridSizesPortrait = ['3 x 3', '4 x 4', '5 x 5'];
  gridSizesLandscape = ['2 x 3', '3 x 4', '4 x 5'];
  fontSizes = ['12 px', '14 px', '16 px', '18 px'];
  themes = ['Light', 'Dark'];
}
