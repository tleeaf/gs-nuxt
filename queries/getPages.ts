import { gql } from "graphql-request";

export const GET_PAGES = gql`
  query Pages {
    pages(first:100) {
      nodes {
        content
        id
        slug
        title
      }
    }
  }
`;
