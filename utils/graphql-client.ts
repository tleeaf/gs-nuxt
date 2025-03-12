import { GraphQLClient } from 'graphql-request'

const WP_GRAPHQL_URL = 'https://dev-greenhouse-studios.pantheonsite.io/graphql'

export const graphqlClient = new GraphQLClient(WP_GRAPHQL_URL)
