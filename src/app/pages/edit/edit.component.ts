import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TeaserComponent } from '../../components/teaser/teaser.component';
import { EditCardsComponent } from '../../modules/edit-cards/edit-cards.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NavbarComponent, TeaserComponent, EditCardsComponent,
    AmplifyAuthenticatorModule, CommonModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(public authenticator: AuthenticatorService) {
  }

  ngOnInit(): void {
    this.checkAuthStatus();
  }

  onLogout() {
    this.isLoggedIn = false;
  }

  async checkAuthStatus() {
    try {
      const user = await this.authenticator.authStatus;
      this.isLoggedIn = !!user;
      if (user === "unauthenticated") {
        this.isLoggedIn = false;
      }
    } catch (error) {
      this.isLoggedIn = false;
    }
  }

}
