import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Card } from '../../../API';
import { CardApiService } from '../../core/services/card-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditCardAlertService } from '../../core/services/edit-card-alert.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditComponent {

  isMenuOpen = false;
  cards: Card[] = [];

  constructor(private cardsService: CardApiService,
    private popupService: EditCardAlertService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  async loadCards() {
    try {
      const { username } = await this.cardsService.getCurrentUser();
      const response = await this.cardsService.listCards(username);
      this.cards = response.data.listCards.items;
    } catch (error) {
      console.log('Error fetching cards', error);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openEditAlert(name: string, image: string|null|undefined) {
    this.popupService.showAlert(name, image ?? '');
  }
}
