import { gql } from 'graphql-request';

export const CREATE_PAGE = gql`
  mutation CreatePage($input: CreatePageInput!) {
    createPage(input: $input) {
      id
      title
      content
    }
  }
`;