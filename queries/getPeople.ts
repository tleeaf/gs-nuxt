import { gql } from "graphql-request";

export const GET_PEOPLE = gql`
  query People {
    people(first: 100) {
      nodes {
        id
        slug
        title
        about
        firstName
        lastName
        linkedin
        twitter
        instagram
        site
        featuredImage {
          node {
            mediaItemUrl
            sourceUrl
          }
        }
        categoriesPeople {
          nodes {
            databaseId
            name
          }
        }
      }
    }
  }
`;
