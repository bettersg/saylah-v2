import { Injectable } from '@angular/core';
import { Card, CreateCardInput, UpdateCardInput } from '../../../API';
import { generateId } from '../fn/uuid';

@Injectable({
  providedIn: 'root'
})
export class CardMapperService {

  mapToCreateCardInput(
    name: string,
    code: string,
    type: string,
    image: string,
    sound: string,
    owner: string,
    cardCardsId?: string,
    templateCardsId?: string): CreateCardInput {
    const createCardInput: CreateCardInput = {
      id: generateId(), // Generate a UUID for the ID
      name: name,
      code: this.generateCode(code),
      type: type,  // Assuming a default type, you can adjust as needed
      image: image ? image : 'null',
      sound: sound,  // Assuming no sound for now
      owner: owner,  // Assuming owner is passed as an argument or can be derived from elsewhere
      cardCardsId: cardCardsId ? cardCardsId : 'null',
      templateCardsId: templateCardsId ? templateCardsId : 'null'
    };

    return createCardInput;
  }

  mapToUpdateCardInput(
    id: string,
    name?: string,
    url?: string,
    sound?: string,
    type?: string,
    code?: string,
    owner?: string,
    cardCardsId?: string,
    templateCardsId?: string): UpdateCardInput {
    const updateCardInput: UpdateCardInput = {
      id: id,
      name: name ? name : 'null',
      image: url ? url : 'null',
      sound: sound,  // Assuming no sound for now
      type: type ? type : 'null',
      code: this.generateCode(code ?? 'null'),
      owner: owner ? owner : 'null',
      cardCardsId: cardCardsId ? cardCardsId : 'null',
      templateCardsId: templateCardsId ? templateCardsId : 'null'
    };

    return updateCardInput;
  }
  
  private generateCode(name: string): string {
    // Implement a code generator, could be based on the name
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
