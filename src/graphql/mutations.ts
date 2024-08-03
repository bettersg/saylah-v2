/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCard = /* GraphQL */ `mutation CreateCard(
  $input: CreateCardInput!
  $condition: ModelCardConditionInput
) {
  createCard(input: $input, condition: $condition) {
    id
    name
    code
    type
    image
    sound
    cards {
      nextToken
      __typename
    }
    card {
      id
      name
      code
      type
      image
      sound
      owner
      createdAt
      updatedAt
      cardCardsId
      templateCardsId
      __typename
    }
    template {
      id
      name
      code
      type
      image
      sound
      owner
      createdAt
      updatedAt
      cardCardsId
      templateCardsId
      __typename
    }
    owner
    createdAt
    updatedAt
    cardCardsId
    templateCardsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCardMutationVariables,
  APITypes.CreateCardMutation
>;
export const updateCard = /* GraphQL */ `mutation UpdateCard(
  $input: UpdateCardInput!
  $condition: ModelCardConditionInput
) {
  updateCard(input: $input, condition: $condition) {
    id
    name
    code
    type
    image
    sound
    cards {
      nextToken
      __typename
    }
    card {
      id
      name
      code
      type
      image
      sound
      owner
      createdAt
      updatedAt
      cardCardsId
      templateCardsId
      __typename
    }
    template {
      id
      name
      code
      type
      image
      sound
      owner
      createdAt
      updatedAt
      cardCardsId
      templateCardsId
      __typename
    }
    owner
    createdAt
    updatedAt
    cardCardsId
    templateCardsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCardMutationVariables,
  APITypes.UpdateCardMutation
>;
export const deleteCard = /* GraphQL */ `mutation DeleteCard(
  $input: DeleteCardInput!
  $condition: ModelCardConditionInput
) {
  deleteCard(input: $input, condition: $condition) {
    id
    name
    code
    type
    image
    sound
    cards {
      nextToken
      __typename
    }
    card {
      id
      name
      code
      type
      image
      sound
      owner
      createdAt
      updatedAt
      cardCardsId
      templateCardsId
      __typename
    }
    template {
      id
      name
      code
      type
      image
      sound
      owner
      createdAt
      updatedAt
      cardCardsId
      templateCardsId
      __typename
    }
    owner
    createdAt
    updatedAt
    cardCardsId
    templateCardsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCardMutationVariables,
  APITypes.DeleteCardMutation
>;
export const createInterface = /* GraphQL */ `mutation CreateInterface(
  $input: CreateInterfaceInput!
  $condition: ModelInterfaceConditionInput
) {
  createInterface(input: $input, condition: $condition) {
    id
    name
    gridSizePortraitX
    gridSizePortraitY
    gridSizeLandscapeX
    gridSizeLandscapeY
    FontSize
    owner
    createdAt
    updatedAt
    savedInterfaceInterfacesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInterfaceMutationVariables,
  APITypes.CreateInterfaceMutation
>;
export const updateInterface = /* GraphQL */ `mutation UpdateInterface(
  $input: UpdateInterfaceInput!
  $condition: ModelInterfaceConditionInput
) {
  updateInterface(input: $input, condition: $condition) {
    id
    name
    gridSizePortraitX
    gridSizePortraitY
    gridSizeLandscapeX
    gridSizeLandscapeY
    FontSize
    owner
    createdAt
    updatedAt
    savedInterfaceInterfacesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInterfaceMutationVariables,
  APITypes.UpdateInterfaceMutation
>;
export const deleteInterface = /* GraphQL */ `mutation DeleteInterface(
  $input: DeleteInterfaceInput!
  $condition: ModelInterfaceConditionInput
) {
  deleteInterface(input: $input, condition: $condition) {
    id
    name
    gridSizePortraitX
    gridSizePortraitY
    gridSizeLandscapeX
    gridSizeLandscapeY
    FontSize
    owner
    createdAt
    updatedAt
    savedInterfaceInterfacesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInterfaceMutationVariables,
  APITypes.DeleteInterfaceMutation
>;
export const createTemplate = /* GraphQL */ `mutation CreateTemplate(
  $input: CreateTemplateInput!
  $condition: ModelTemplateConditionInput
) {
  createTemplate(input: $input, condition: $condition) {
    id
    name
    cards {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTemplateMutationVariables,
  APITypes.CreateTemplateMutation
>;
export const updateTemplate = /* GraphQL */ `mutation UpdateTemplate(
  $input: UpdateTemplateInput!
  $condition: ModelTemplateConditionInput
) {
  updateTemplate(input: $input, condition: $condition) {
    id
    name
    cards {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTemplateMutationVariables,
  APITypes.UpdateTemplateMutation
>;
export const deleteTemplate = /* GraphQL */ `mutation DeleteTemplate(
  $input: DeleteTemplateInput!
  $condition: ModelTemplateConditionInput
) {
  deleteTemplate(input: $input, condition: $condition) {
    id
    name
    cards {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTemplateMutationVariables,
  APITypes.DeleteTemplateMutation
>;
export const createSavedInterface = /* GraphQL */ `mutation CreateSavedInterface(
  $input: CreateSavedInterfaceInput!
  $condition: ModelSavedInterfaceConditionInput
) {
  createSavedInterface(input: $input, condition: $condition) {
    id
    name
    interfaces {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSavedInterfaceMutationVariables,
  APITypes.CreateSavedInterfaceMutation
>;
export const updateSavedInterface = /* GraphQL */ `mutation UpdateSavedInterface(
  $input: UpdateSavedInterfaceInput!
  $condition: ModelSavedInterfaceConditionInput
) {
  updateSavedInterface(input: $input, condition: $condition) {
    id
    name
    interfaces {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSavedInterfaceMutationVariables,
  APITypes.UpdateSavedInterfaceMutation
>;
export const deleteSavedInterface = /* GraphQL */ `mutation DeleteSavedInterface(
  $input: DeleteSavedInterfaceInput!
  $condition: ModelSavedInterfaceConditionInput
) {
  deleteSavedInterface(input: $input, condition: $condition) {
    id
    name
    interfaces {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSavedInterfaceMutationVariables,
  APITypes.DeleteSavedInterfaceMutation
>;
export const createSetting = /* GraphQL */ `mutation CreateSetting(
  $input: CreateSettingInput!
  $condition: ModelSettingConditionInput
) {
  createSetting(input: $input, condition: $condition) {
    id
    language
    voice
    gridSizePortrait
    gridSizeLandscape
    fontSize
    theme
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSettingMutationVariables,
  APITypes.CreateSettingMutation
>;
export const updateSetting = /* GraphQL */ `mutation UpdateSetting(
  $input: UpdateSettingInput!
  $condition: ModelSettingConditionInput
) {
  updateSetting(input: $input, condition: $condition) {
    id
    language
    voice
    gridSizePortrait
    gridSizeLandscape
    fontSize
    theme
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSettingMutationVariables,
  APITypes.UpdateSettingMutation
>;
export const deleteSetting = /* GraphQL */ `mutation DeleteSetting(
  $input: DeleteSettingInput!
  $condition: ModelSettingConditionInput
) {
  deleteSetting(input: $input, condition: $condition) {
    id
    language
    voice
    gridSizePortrait
    gridSizeLandscape
    fontSize
    theme
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSettingMutationVariables,
  APITypes.DeleteSettingMutation
>;
