import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Fruit = {
  __typename?: 'Fruit';
  bloom?: Maybe<Scalars['String']>;
  climatic_zone?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  fruit_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  life_cycle?: Maybe<Scalars['String']>;
  maturation_fruit?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  producing_countries?: Maybe<Array<Maybe<Countries>>>;
  scientific_name?: Maybe<Scalars['String']>;
  tree_name?: Maybe<Scalars['String']>;
};

export type Fruits = {
  __typename?: 'Fruits';
  bloom?: Maybe<Scalars['String']>;
  climatic_zone?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  fruit_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  life_cycle?: Maybe<Scalars['String']>;
  maturation_fruit?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  producing_countries?: Maybe<Array<Maybe<Countries>>>;
  scientific_name?: Maybe<Scalars['String']>;
  tree_name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFruit: Fruits;
  deleteFruit: Fruits;
  updateFruit: Fruits;
};


export type MutationAddFruitArgs = {
  bloom: Scalars['String'];
  climatic_zone: Scalars['String'];
  description: Scalars['String'];
  family: Scalars['String'];
  fruit_name: Scalars['String'];
  id: Scalars['ID'];
  life_cycle: Scalars['String'];
  maturation_fruit: Scalars['String'];
  origin: Scalars['String'];
  scientific_name: Scalars['String'];
  tree_name: Scalars['String'];
};


export type MutationDeleteFruitArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateFruitArgs = {
  bloom: Scalars['String'];
  climatic_zone: Scalars['String'];
  description: Scalars['String'];
  family: Scalars['String'];
  fruit_name: Scalars['String'];
  id: Scalars['ID'];
  life_cycle: Scalars['String'];
  maturation_fruit: Scalars['String'];
  origin: Scalars['String'];
  scientific_name: Scalars['String'];
  tree_name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  filterFruitsFam?: Maybe<Array<Maybe<Fruits>>>;
  filterFruitsOri?: Maybe<Array<Maybe<Fruits>>>;
  fruit?: Maybe<Fruit>;
  fruits?: Maybe<Array<Maybe<Fruits>>>;
};


export type QueryFilterFruitsFamArgs = {
  family: Scalars['String'];
};


export type QueryFilterFruitsOriArgs = {
  origin: Scalars['String'];
};


export type QueryFruitArgs = {
  id: Scalars['ID'];
};

export type Countries = {
  __typename?: 'countries';
  country?: Maybe<Scalars['String']>;
};

export type GetAllFruitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFruitsQuery = { __typename: 'Query', fruits?: Array<{ __typename: 'Fruits', id?: string | null, scientific_name?: string | null, tree_name?: string | null, fruit_name?: string | null, family?: string | null, origin?: string | null, description?: string | null, bloom?: string | null, maturation_fruit?: string | null, life_cycle?: string | null, climatic_zone?: string | null, producing_countries?: Array<{ __typename: 'countries', country?: string | null } | null> | null } | null> | null };


export const GetAllFruitsDocument = gql`
    query GetAllFruits {
  fruits {
    id
    scientific_name
    tree_name
    fruit_name
    family
    origin
    description
    bloom
    maturation_fruit
    life_cycle
    climatic_zone
    producing_countries {
      country
      __typename
    }
    __typename
  }
  __typename
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllFruits(variables?: GetAllFruitsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllFruitsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllFruitsQuery>(GetAllFruitsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllFruits', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;