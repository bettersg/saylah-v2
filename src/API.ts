/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCardInput = {
  id?: string | null,
  name: string,
  code: string,
  type: string,
  image?: string | null,
  sound?: string | null,
  owner: string,
  cardCardsId?: string | null,
  templateCardsId?: string | null,
};

export type ModelCardConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  type?: ModelStringInput | null,
  image?: ModelStringInput | null,
  sound?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  cardCardsId?: ModelIDInput | null,
  templateCardsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Card = {
  __typename: "Card",
  id: string,
  name: string,
  code: string,
  type: string,
  image?: string | null,
  sound?: string | null,
  cards?: ModelCardConnection | null,
  card?: Card | null,
  template?: Card | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
  cardCardsId?: string | null,
  templateCardsId?: string | null,
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection",
  items:  Array<Card | null >,
  nextToken?: string | null,
};

export type UpdateCardInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  type?: string | null,
  image?: string | null,
  sound?: string | null,
  owner?: string | null,
  cardCardsId?: string | null,
  templateCardsId?: string | null,
};

export type DeleteCardInput = {
  id: string,
};

export type CreateInterfaceInput = {
  id?: string | null,
  name: string,
  gridSizePortraitX: string,
  gridSizePortraitY: string,
  gridSizeLandscapeX: string,
  gridSizeLandscapeY: string,
  FontSize: string,
  owner: string,
  savedInterfaceInterfacesId?: string | null,
};

export type ModelInterfaceConditionInput = {
  name?: ModelStringInput | null,
  gridSizePortraitX?: ModelStringInput | null,
  gridSizePortraitY?: ModelStringInput | null,
  gridSizeLandscapeX?: ModelStringInput | null,
  gridSizeLandscapeY?: ModelStringInput | null,
  FontSize?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelInterfaceConditionInput | null > | null,
  or?: Array< ModelInterfaceConditionInput | null > | null,
  not?: ModelInterfaceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  savedInterfaceInterfacesId?: ModelIDInput | null,
};

export type Interface = {
  __typename: "Interface",
  id: string,
  name: string,
  gridSizePortraitX: string,
  gridSizePortraitY: string,
  gridSizeLandscapeX: string,
  gridSizeLandscapeY: string,
  FontSize: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
  savedInterfaceInterfacesId?: string | null,
};

export type UpdateInterfaceInput = {
  id: string,
  name?: string | null,
  gridSizePortraitX?: string | null,
  gridSizePortraitY?: string | null,
  gridSizeLandscapeX?: string | null,
  gridSizeLandscapeY?: string | null,
  FontSize?: string | null,
  owner?: string | null,
  savedInterfaceInterfacesId?: string | null,
};

export type DeleteInterfaceInput = {
  id: string,
};

export type CreateTemplateInput = {
  id?: string | null,
  name: string,
  owner: string,
};

export type ModelTemplateConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTemplateConditionInput | null > | null,
  or?: Array< ModelTemplateConditionInput | null > | null,
  not?: ModelTemplateConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Template = {
  __typename: "Template",
  id: string,
  name: string,
  cards?: ModelCardConnection | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTemplateInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type DeleteTemplateInput = {
  id: string,
};

export type CreateSavedInterfaceInput = {
  id?: string | null,
  name: string,
  owner: string,
};

export type ModelSavedInterfaceConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSavedInterfaceConditionInput | null > | null,
  or?: Array< ModelSavedInterfaceConditionInput | null > | null,
  not?: ModelSavedInterfaceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SavedInterface = {
  __typename: "SavedInterface",
  id: string,
  name: string,
  interfaces?: ModelInterfaceConnection | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelInterfaceConnection = {
  __typename: "ModelInterfaceConnection",
  items:  Array<Interface | null >,
  nextToken?: string | null,
};

export type UpdateSavedInterfaceInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type DeleteSavedInterfaceInput = {
  id: string,
};

export type CreateSettingInput = {
  id?: string | null,
  language: string,
  voice: string,
  gridSizePortrait: string,
  gridSizeLandscape: string,
  fontSize: string,
  theme: string,
  owner: string,
};

export type ModelSettingConditionInput = {
  language?: ModelStringInput | null,
  voice?: ModelStringInput | null,
  gridSizePortrait?: ModelStringInput | null,
  gridSizeLandscape?: ModelStringInput | null,
  fontSize?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSettingConditionInput | null > | null,
  or?: Array< ModelSettingConditionInput | null > | null,
  not?: ModelSettingConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Setting = {
  __typename: "Setting",
  id: string,
  language: string,
  voice: string,
  gridSizePortrait: string,
  gridSizeLandscape: string,
  fontSize: string,
  theme: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSettingInput = {
  id: string,
  language?: string | null,
  voice?: string | null,
  gridSizePortrait?: string | null,
  gridSizeLandscape?: string | null,
  fontSize?: string | null,
  theme?: string | null,
  owner?: string | null,
};

export type DeleteSettingInput = {
  id: string,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  type?: ModelStringInput | null,
  image?: ModelStringInput | null,
  sound?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
  cardCardsId?: ModelIDInput | null,
  templateCardsId?: ModelIDInput | null,
};

export type ModelInterfaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  gridSizePortraitX?: ModelStringInput | null,
  gridSizePortraitY?: ModelStringInput | null,
  gridSizeLandscapeX?: ModelStringInput | null,
  gridSizeLandscapeY?: ModelStringInput | null,
  FontSize?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInterfaceFilterInput | null > | null,
  or?: Array< ModelInterfaceFilterInput | null > | null,
  not?: ModelInterfaceFilterInput | null,
  savedInterfaceInterfacesId?: ModelIDInput | null,
};

export type ModelTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTemplateFilterInput | null > | null,
  or?: Array< ModelTemplateFilterInput | null > | null,
  not?: ModelTemplateFilterInput | null,
};

export type ModelTemplateConnection = {
  __typename: "ModelTemplateConnection",
  items:  Array<Template | null >,
  nextToken?: string | null,
};

export type ModelSavedInterfaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSavedInterfaceFilterInput | null > | null,
  or?: Array< ModelSavedInterfaceFilterInput | null > | null,
  not?: ModelSavedInterfaceFilterInput | null,
};

export type ModelSavedInterfaceConnection = {
  __typename: "ModelSavedInterfaceConnection",
  items:  Array<SavedInterface | null >,
  nextToken?: string | null,
};

export type ModelSettingFilterInput = {
  id?: ModelIDInput | null,
  language?: ModelStringInput | null,
  voice?: ModelStringInput | null,
  gridSizePortrait?: ModelStringInput | null,
  gridSizeLandscape?: ModelStringInput | null,
  fontSize?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSettingFilterInput | null > | null,
  or?: Array< ModelSettingFilterInput | null > | null,
  not?: ModelSettingFilterInput | null,
};

export type ModelSettingConnection = {
  __typename: "ModelSettingConnection",
  items:  Array<Setting | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  sound?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCardFilterInput | null > | null,
  or?: Array< ModelSubscriptionCardFilterInput | null > | null,
  cardCardsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionInterfaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  gridSizePortraitX?: ModelSubscriptionStringInput | null,
  gridSizePortraitY?: ModelSubscriptionStringInput | null,
  gridSizeLandscapeX?: ModelSubscriptionStringInput | null,
  gridSizeLandscapeY?: ModelSubscriptionStringInput | null,
  FontSize?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInterfaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionInterfaceFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionTemplateFilterInput | null > | null,
  templateCardsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionSavedInterfaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSavedInterfaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionSavedInterfaceFilterInput | null > | null,
  savedInterfaceInterfacesId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionSettingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  language?: ModelSubscriptionStringInput | null,
  voice?: ModelSubscriptionStringInput | null,
  gridSizePortrait?: ModelSubscriptionStringInput | null,
  gridSizeLandscape?: ModelSubscriptionStringInput | null,
  fontSize?: ModelSubscriptionStringInput | null,
  theme?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSettingFilterInput | null > | null,
  or?: Array< ModelSubscriptionSettingFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    template?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
    templateCardsId?: string | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    template?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
    templateCardsId?: string | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    template?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
    templateCardsId?: string | null,
  } | null,
};

export type CreateInterfaceMutationVariables = {
  input: CreateInterfaceInput,
  condition?: ModelInterfaceConditionInput | null,
};

export type CreateInterfaceMutation = {
  createInterface?:  {
    __typename: "Interface",
    id: string,
    name: string,
    gridSizePortraitX: string,
    gridSizePortraitY: string,
    gridSizeLandscapeX: string,
    gridSizeLandscapeY: string,
    FontSize: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    savedInterfaceInterfacesId?: string | null,
  } | null,
};

export type UpdateInterfaceMutationVariables = {
  input: UpdateInterfaceInput,
  condition?: ModelInterfaceConditionInput | null,
};

export type UpdateInterfaceMutation = {
  updateInterface?:  {
    __typename: "Interface",
    id: string,
    name: string,
    gridSizePortraitX: string,
    gridSizePortraitY: string,
    gridSizeLandscapeX: string,
    gridSizeLandscapeY: string,
    FontSize: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    savedInterfaceInterfacesId?: string | null,
  } | null,
};

export type DeleteInterfaceMutationVariables = {
  input: DeleteInterfaceInput,
  condition?: ModelInterfaceConditionInput | null,
};

export type DeleteInterfaceMutation = {
  deleteInterface?:  {
    __typename: "Interface",
    id: string,
    name: string,
    gridSizePortraitX: string,
    gridSizePortraitY: string,
    gridSizeLandscapeX: string,
    gridSizeLandscapeY: string,
    FontSize: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    savedInterfaceInterfacesId?: string | null,
  } | null,
};

export type CreateTemplateMutationVariables = {
  input: CreateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type CreateTemplateMutation = {
  createTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTemplateMutationVariables = {
  input: UpdateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateMutation = {
  updateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTemplateMutationVariables = {
  input: DeleteTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type DeleteTemplateMutation = {
  deleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSavedInterfaceMutationVariables = {
  input: CreateSavedInterfaceInput,
  condition?: ModelSavedInterfaceConditionInput | null,
};

export type CreateSavedInterfaceMutation = {
  createSavedInterface?:  {
    __typename: "SavedInterface",
    id: string,
    name: string,
    interfaces?:  {
      __typename: "ModelInterfaceConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSavedInterfaceMutationVariables = {
  input: UpdateSavedInterfaceInput,
  condition?: ModelSavedInterfaceConditionInput | null,
};

export type UpdateSavedInterfaceMutation = {
  updateSavedInterface?:  {
    __typename: "SavedInterface",
    id: string,
    name: string,
    interfaces?:  {
      __typename: "ModelInterfaceConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSavedInterfaceMutationVariables = {
  input: DeleteSavedInterfaceInput,
  condition?: ModelSavedInterfaceConditionInput | null,
};

export type DeleteSavedInterfaceMutation = {
  deleteSavedInterface?:  {
    __typename: "SavedInterface",
    id: string,
    name: string,
    interfaces?:  {
      __typename: "ModelInterfaceConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSettingMutationVariables = {
  input: CreateSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type CreateSettingMutation = {
  createSetting?:  {
    __typename: "Setting",
    id: string,
    language: string,
    voice: string,
    gridSizePortrait: string,
    gridSizeLandscape: string,
    fontSize: string,
    theme: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSettingMutationVariables = {
  input: UpdateSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type UpdateSettingMutation = {
  updateSetting?:  {
    __typename: "Setting",
    id: string,
    language: string,
    voice: string,
    gridSizePortrait: string,
    gridSizeLandscape: string,
    fontSize: string,
    theme: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSettingMutationVariables = {
  input: DeleteSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type DeleteSettingMutation = {
  deleteSetting?:  {
    __typename: "Setting",
    id: string,
    language: string,
    voice: string,
    gridSizePortrait: string,
    gridSizeLandscape: string,
    fontSize: string,
    theme: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    template?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
    templateCardsId?: string | null,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInterfaceQueryVariables = {
  id: string,
};

export type GetInterfaceQuery = {
  getInterface?:  {
    __typename: "Interface",
    id: string,
    name: string,
    gridSizePortraitX: string,
    gridSizePortraitY: string,
    gridSizeLandscapeX: string,
    gridSizeLandscapeY: string,
    FontSize: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    savedInterfaceInterfacesId?: string | null,
  } | null,
};

export type ListInterfacesQueryVariables = {
  filter?: ModelInterfaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInterfacesQuery = {
  listInterfaces?:  {
    __typename: "ModelInterfaceConnection",
    items:  Array< {
      __typename: "Interface",
      id: string,
      name: string,
      gridSizePortraitX: string,
      gridSizePortraitY: string,
      gridSizeLandscapeX: string,
      gridSizeLandscapeY: string,
      FontSize: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
      savedInterfaceInterfacesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTemplateQueryVariables = {
  id: string,
};

export type GetTemplateQuery = {
  getTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplatesQuery = {
  listTemplates?:  {
    __typename: "ModelTemplateConnection",
    items:  Array< {
      __typename: "Template",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSavedInterfaceQueryVariables = {
  id: string,
};

export type GetSavedInterfaceQuery = {
  getSavedInterface?:  {
    __typename: "SavedInterface",
    id: string,
    name: string,
    interfaces?:  {
      __typename: "ModelInterfaceConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSavedInterfacesQueryVariables = {
  filter?: ModelSavedInterfaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSavedInterfacesQuery = {
  listSavedInterfaces?:  {
    __typename: "ModelSavedInterfaceConnection",
    items:  Array< {
      __typename: "SavedInterface",
      id: string,
      name: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSettingQueryVariables = {
  id: string,
};

export type GetSettingQuery = {
  getSetting?:  {
    __typename: "Setting",
    id: string,
    language: string,
    voice: string,
    gridSizePortrait: string,
    gridSizeLandscape: string,
    fontSize: string,
    theme: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSettingsQueryVariables = {
  filter?: ModelSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSettingsQuery = {
  listSettings?:  {
    __typename: "ModelSettingConnection",
    items:  Array< {
      __typename: "Setting",
      id: string,
      language: string,
      voice: string,
      gridSizePortrait: string,
      gridSizeLandscape: string,
      fontSize: string,
      theme: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnCreateCardSubscription = {
  onCreateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    template?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
    templateCardsId?: string | null,
  } | null,
};

export type OnUpdateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    template?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
    templateCardsId?: string | null,
  } | null,
};

export type OnDeleteCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    template?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
      templateCardsId?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
    templateCardsId?: string | null,
  } | null,
};

export type OnCreateInterfaceSubscriptionVariables = {
  filter?: ModelSubscriptionInterfaceFilterInput | null,
};

export type OnCreateInterfaceSubscription = {
  onCreateInterface?:  {
    __typename: "Interface",
    id: string,
    name: string,
    gridSizePortraitX: string,
    gridSizePortraitY: string,
    gridSizeLandscapeX: string,
    gridSizeLandscapeY: string,
    FontSize: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    savedInterfaceInterfacesId?: string | null,
  } | null,
};

export type OnUpdateInterfaceSubscriptionVariables = {
  filter?: ModelSubscriptionInterfaceFilterInput | null,
};

export type OnUpdateInterfaceSubscription = {
  onUpdateInterface?:  {
    __typename: "Interface",
    id: string,
    name: string,
    gridSizePortraitX: string,
    gridSizePortraitY: string,
    gridSizeLandscapeX: string,
    gridSizeLandscapeY: string,
    FontSize: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    savedInterfaceInterfacesId?: string | null,
  } | null,
};

export type OnDeleteInterfaceSubscriptionVariables = {
  filter?: ModelSubscriptionInterfaceFilterInput | null,
};

export type OnDeleteInterfaceSubscription = {
  onDeleteInterface?:  {
    __typename: "Interface",
    id: string,
    name: string,
    gridSizePortraitX: string,
    gridSizePortraitY: string,
    gridSizeLandscapeX: string,
    gridSizeLandscapeY: string,
    FontSize: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    savedInterfaceInterfacesId?: string | null,
  } | null,
};

export type OnCreateTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnCreateTemplateSubscription = {
  onCreateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnUpdateTemplateSubscription = {
  onUpdateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnDeleteTemplateSubscription = {
  onDeleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSavedInterfaceSubscriptionVariables = {
  filter?: ModelSubscriptionSavedInterfaceFilterInput | null,
};

export type OnCreateSavedInterfaceSubscription = {
  onCreateSavedInterface?:  {
    __typename: "SavedInterface",
    id: string,
    name: string,
    interfaces?:  {
      __typename: "ModelInterfaceConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSavedInterfaceSubscriptionVariables = {
  filter?: ModelSubscriptionSavedInterfaceFilterInput | null,
};

export type OnUpdateSavedInterfaceSubscription = {
  onUpdateSavedInterface?:  {
    __typename: "SavedInterface",
    id: string,
    name: string,
    interfaces?:  {
      __typename: "ModelInterfaceConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSavedInterfaceSubscriptionVariables = {
  filter?: ModelSubscriptionSavedInterfaceFilterInput | null,
};

export type OnDeleteSavedInterfaceSubscription = {
  onDeleteSavedInterface?:  {
    __typename: "SavedInterface",
    id: string,
    name: string,
    interfaces?:  {
      __typename: "ModelInterfaceConnection",
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSettingSubscriptionVariables = {
  filter?: ModelSubscriptionSettingFilterInput | null,
};

export type OnCreateSettingSubscription = {
  onCreateSetting?:  {
    __typename: "Setting",
    id: string,
    language: string,
    voice: string,
    gridSizePortrait: string,
    gridSizeLandscape: string,
    fontSize: string,
    theme: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSettingSubscriptionVariables = {
  filter?: ModelSubscriptionSettingFilterInput | null,
};

export type OnUpdateSettingSubscription = {
  onUpdateSetting?:  {
    __typename: "Setting",
    id: string,
    language: string,
    voice: string,
    gridSizePortrait: string,
    gridSizeLandscape: string,
    fontSize: string,
    theme: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSettingSubscriptionVariables = {
  filter?: ModelSubscriptionSettingFilterInput | null,
};

export type OnDeleteSettingSubscription = {
  onDeleteSetting?:  {
    __typename: "Setting",
    id: string,
    language: string,
    voice: string,
    gridSizePortrait: string,
    gridSizeLandscape: string,
    fontSize: string,
    theme: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
