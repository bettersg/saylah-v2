import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Card } from '../../../API';
import { CardApiService } from '../../core/services/card-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardAlertService } from '../../core/services/card-alert.service';
import { Observable } from 'rxjs';

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
  cards$: Observable<Card[]> = this.popupService.cards$;

  constructor(private cardsService: CardApiService,
    private popupService: CardAlertService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  async loadCards() {
    try {
      this.popupService.populateItems();
    } catch (error) {
      console.log('Error fetching cards', error);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openEditAlert(name: string, image: string|null|undefined, id: string, sound: string) {
    this.popupService.showAlert(name, image ?? '', id, sound);
  }
  openAddAlert() {
    this.popupService.showAlert('', '', '', '');
  }
}
