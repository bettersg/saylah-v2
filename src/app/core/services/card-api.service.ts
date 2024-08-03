import { Injectable } from '@angular/core';
import { V6Client } from "@aws-amplify/api-graphql";
import { Client, generateClient } from 'aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import * as subscriptions from '../../../graphql/subscriptions';
import { Card, ListCardsQuery } from '../../../API';
import { getCurrentUser } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {
  private client!: V6Client<Client>;

  constructor() {
    this.client = generateClient<Client>();
  }

  async getCurrentUser() {
    return await getCurrentUser();
  }

  async listCards(username: string) {
    return await this.client.graphql({
      query: queries.listCards,
      authMode: 'userPool',
      variables: {
        filter: {
          owner: {
            eq: username,
          },
        },
      },
    });
  }

  async createCard(card: Card) {
    return await this.client.graphql({
      query: mutations.createCard,
      variables: { input: card },
      authMode: 'userPool',
    });
  }

  async deleteCard(cardId: string) {
    return await this.client.graphql({
      query: mutations.deleteCard,
      variables: { input: { id: cardId } },
      authMode: 'userPool',
    });
  }

  async updateCard(card: Card) {
    return await this.client.graphql({
      query: mutations.updateCard,
      variables: { input: card },
      authMode: 'userPool',
    });
  }

  onCreateCardSubscription() {
    return this.client.graphql({
      query: subscriptions.onCreateCard,
    });
  }

  onDeleteCardSubscription() {
    return this.client.graphql({
      query: subscriptions.onDeleteCard,
    });
  }

  onUpdateCardSubscription() {
    return this.client.graphql({
      query: subscriptions.onUpdateCard,
    });
  }
}
