import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/graphql";

const client = new GraphQLClient('https://fruits-api.netlify.app/graphql')
export const graphqlApi = getSdk(client);
