/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCard = /* GraphQL */ `query GetCard($id: ID!) {
  getCard(id: $id) {
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
` as GeneratedQuery<APITypes.GetCardQueryVariables, APITypes.GetCardQuery>;
export const listCards = /* GraphQL */ `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCardsQueryVariables, APITypes.ListCardsQuery>;
export const getInterface = /* GraphQL */ `query GetInterface($id: ID!) {
  getInterface(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInterfaceQueryVariables,
  APITypes.GetInterfaceQuery
>;
export const listInterfaces = /* GraphQL */ `query ListInterfaces(
  $filter: ModelInterfaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterfaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInterfacesQueryVariables,
  APITypes.ListInterfacesQuery
>;
export const getTemplate = /* GraphQL */ `query GetTemplate($id: ID!) {
  getTemplate(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTemplateQueryVariables,
  APITypes.GetTemplateQuery
>;
export const listTemplates = /* GraphQL */ `query ListTemplates(
  $filter: ModelTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTemplatesQueryVariables,
  APITypes.ListTemplatesQuery
>;
export const getSavedInterface = /* GraphQL */ `query GetSavedInterface($id: ID!) {
  getSavedInterface(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSavedInterfaceQueryVariables,
  APITypes.GetSavedInterfaceQuery
>;
export const listSavedInterfaces = /* GraphQL */ `query ListSavedInterfaces(
  $filter: ModelSavedInterfaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listSavedInterfaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSavedInterfacesQueryVariables,
  APITypes.ListSavedInterfacesQuery
>;
export const getSetting = /* GraphQL */ `query GetSetting($id: ID!) {
  getSetting(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSettingQueryVariables,
  APITypes.GetSettingQuery
>;
export const listSettings = /* GraphQL */ `query ListSettings(
  $filter: ModelSettingFilterInput
  $limit: Int
  $nextToken: String
) {
  listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSettingsQueryVariables,
  APITypes.ListSettingsQuery
>;
