/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCard = /* GraphQL */ `subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
  onCreateCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCardSubscriptionVariables,
  APITypes.OnCreateCardSubscription
>;
export const onUpdateCard = /* GraphQL */ `subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
  onUpdateCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCardSubscriptionVariables,
  APITypes.OnUpdateCardSubscription
>;
export const onDeleteCard = /* GraphQL */ `subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
  onDeleteCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCardSubscriptionVariables,
  APITypes.OnDeleteCardSubscription
>;
export const onCreateInterface = /* GraphQL */ `subscription OnCreateInterface($filter: ModelSubscriptionInterfaceFilterInput) {
  onCreateInterface(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInterfaceSubscriptionVariables,
  APITypes.OnCreateInterfaceSubscription
>;
export const onUpdateInterface = /* GraphQL */ `subscription OnUpdateInterface($filter: ModelSubscriptionInterfaceFilterInput) {
  onUpdateInterface(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInterfaceSubscriptionVariables,
  APITypes.OnUpdateInterfaceSubscription
>;
export const onDeleteInterface = /* GraphQL */ `subscription OnDeleteInterface($filter: ModelSubscriptionInterfaceFilterInput) {
  onDeleteInterface(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInterfaceSubscriptionVariables,
  APITypes.OnDeleteInterfaceSubscription
>;
export const onCreateTemplate = /* GraphQL */ `subscription OnCreateTemplate($filter: ModelSubscriptionTemplateFilterInput) {
  onCreateTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTemplateSubscriptionVariables,
  APITypes.OnCreateTemplateSubscription
>;
export const onUpdateTemplate = /* GraphQL */ `subscription OnUpdateTemplate($filter: ModelSubscriptionTemplateFilterInput) {
  onUpdateTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTemplateSubscriptionVariables,
  APITypes.OnUpdateTemplateSubscription
>;
export const onDeleteTemplate = /* GraphQL */ `subscription OnDeleteTemplate($filter: ModelSubscriptionTemplateFilterInput) {
  onDeleteTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTemplateSubscriptionVariables,
  APITypes.OnDeleteTemplateSubscription
>;
export const onCreateSavedInterface = /* GraphQL */ `subscription OnCreateSavedInterface(
  $filter: ModelSubscriptionSavedInterfaceFilterInput
) {
  onCreateSavedInterface(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSavedInterfaceSubscriptionVariables,
  APITypes.OnCreateSavedInterfaceSubscription
>;
export const onUpdateSavedInterface = /* GraphQL */ `subscription OnUpdateSavedInterface(
  $filter: ModelSubscriptionSavedInterfaceFilterInput
) {
  onUpdateSavedInterface(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSavedInterfaceSubscriptionVariables,
  APITypes.OnUpdateSavedInterfaceSubscription
>;
export const onDeleteSavedInterface = /* GraphQL */ `subscription OnDeleteSavedInterface(
  $filter: ModelSubscriptionSavedInterfaceFilterInput
) {
  onDeleteSavedInterface(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSavedInterfaceSubscriptionVariables,
  APITypes.OnDeleteSavedInterfaceSubscription
>;
export const onCreateSetting = /* GraphQL */ `subscription OnCreateSetting($filter: ModelSubscriptionSettingFilterInput) {
  onCreateSetting(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSettingSubscriptionVariables,
  APITypes.OnCreateSettingSubscription
>;
export const onUpdateSetting = /* GraphQL */ `subscription OnUpdateSetting($filter: ModelSubscriptionSettingFilterInput) {
  onUpdateSetting(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSettingSubscriptionVariables,
  APITypes.OnUpdateSettingSubscription
>;
export const onDeleteSetting = /* GraphQL */ `subscription OnDeleteSetting($filter: ModelSubscriptionSettingFilterInput) {
  onDeleteSetting(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSettingSubscriptionVariables,
  APITypes.OnDeleteSettingSubscription
>;
