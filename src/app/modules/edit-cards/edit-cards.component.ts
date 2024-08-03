import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateCardPopupComponent } from './create-card-popup/create-card-popup.component';
import { DeleteCardPopupComponent } from './delete-card-popup/delete-card-popup.component';
import { UpdateCardPopupComponent } from './update-card-popup/update-card-popup.component';
import { SpeechSynthesisService } from '../../core/services/speech-synthesis.service';
import { Card, ListCardsQuery } from '../../../API';
import { CardApiService } from '../../core/services/card-api.service';

@Component({
  selector: 'app-edit-cards',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CreateCardPopupComponent, DeleteCardPopupComponent, UpdateCardPopupComponent, RouterModule],
  templateUrl: './edit-cards.component.html',
  styleUrl: './edit-cards.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditCardsComponent implements OnInit, OnDestroy {
  public cards: ListCardsQuery['listCards'];
  public filteredCards: any[] | null | undefined = [];

  public createForm!: FormGroup;

  private createSubscription: any = null;
  private deleteSubscription: any = null;
  private updateSubscription: any = null;

  showUpdateModal = false;
  showCreateModal = false;
  showDeleteModal = false;
  selectedCard: Card | null = null;
  selectedTab = 'all';

  constructor(
    private fb: FormBuilder,
    private speechService: SpeechSynthesisService,
    private cardsService: CardApiService
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required],
      sound: ['', Validators.required],
    });
  }
  async ngOnInit() {
    await this.fetchCards();
    this.setupSubscriptions();
  }
  
  private async fetchCards() {
    try {
      const { username } = await this.cardsService.getCurrentUser();
      const response = await this.cardsService.listCards(username);
      this.cards = response.data.listCards;
      this.filteredCards = this.cards.items;
    } catch (error) {
      console.log('Error fetching cards', error);
    }
  }
  
  private setupSubscriptions() {
    this.createSubscription = this.cardsService.onCreateCardSubscription().subscribe({
      next: this.handleCreateCard.bind(this),
    });
  
    this.deleteSubscription = this.cardsService.onDeleteCardSubscription().subscribe({
      next: this.handleDeleteCard.bind(this),
      error: this.logError.bind(this, 'Error deleting card'),
    });
  
    this.updateSubscription = this.cardsService.onUpdateCardSubscription().subscribe({
      next: this.handleUpdateCard.bind(this),
      error: this.logError.bind(this, 'Error updating card'),
    });
  }
  
  private handleCreateCard(event: any) {
    const newCard: Card = event.data.onCreateCard;
    if (this.cards) {
      this.cards.items = [newCard, ...this.cards.items];
      this.filter();
    }
  }
  
  private handleDeleteCard(event: any) {
    const deletedCardId: string = event.data.onDeleteCard.id;
    if (this.cards) {
      this.cards.items = this.cards.items.filter((card) => card?.id !== deletedCardId);
      this.filter();
    }
  }
  
  private handleUpdateCard(event: any) {
    const updateCardId: string = event.data.onUpdateCard.id;
    if (this.cards) {
      const index = this.cards.items.findIndex((item) => item?.id === updateCardId);
      if (index !== -1) {
        this.cards.items[index] = event.data.onUpdateCard;
        this.filter();
      }
    }
  }
  
  private logError(message: string, error: any) {
    console.log(message, error);
  }

  ngOnDestroy(): void {
    if (this.createSubscription) {
      this.createSubscription.unsubscribe();
    }
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
    this.createSubscription = null;
    this.deleteSubscription = null;
    this.updateSubscription = null;
  }

  public async onCreate(card: Card) {
    try {
      const { username } = await this.cardsService.getCurrentUser();
      card.owner = username;
      const response = await this.cardsService.createCard(card);
      this.createForm.reset();
    } catch (e) {
      console.log('error creating card...', e);
    }
  }

  public async onDelete(cardId: string | undefined) {
    if (cardId) {
      try {
        const response = await this.cardsService.deleteCard(cardId);
        console.log('card deleted!', response);
      } catch (e) {
        console.log('error deleting card...', e);
      }
    }
  }

  public async onUpdate(card: Card | null) {
    if (card !== null) {
      try {
        const response = await this.cardsService.updateCard(card);
        console.log('card updated!', response);
      } catch (e) {
        console.log('error updating card...', e);
      }
    }
  }

  async onCreateCard(card: Card | null) {
    this.showCreateModal = !this.showCreateModal;
    if (card) {
      await this.onCreate(card);
    }
  }

  toggleCreatePopup() {
    this.showCreateModal = !this.showCreateModal;
  }

  async onUpdateCard(card: Card | null) {
    this.showUpdateModal = !this.showUpdateModal;
    await this.onUpdate(card);
  }

  toggleUpdatePopup(card: Card | null) {
    this.selectedCard = card;
    this.showUpdateModal = !this.showUpdateModal;
  }

  async onDeleteCard(canDelete: boolean) {
    this.showDeleteModal = !this.showDeleteModal;
    if (canDelete) {
      await this.onDelete(this.selectedCard?.id);
    }
  }

  toggleDeletePopup(card: Card | null) {
    this.selectedCard = card;
    this.showDeleteModal = !this.showDeleteModal;
  }

  say(card: Card | null) {
    if (card) {
      this.speechService.play(card.name);
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.filterByType(tab);
  }

  filterByType(type: string) {
    this.selectedTab = type;
    this.filter();
  }

  filter() {
    if (this.selectedTab === 'all') {
      this.filteredCards = this.cards?.items;
    } else {
      this.filteredCards = this.cards?.items.filter((card) => card?.type === this.selectedTab);
    }
  }
}