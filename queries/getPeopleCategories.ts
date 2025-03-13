import { gql } from 'graphql-request';

export const GET_PEOPLE_CATEGORIES = gql`
query PeopleCategories {
  categoriesPeople {
    nodes {
      name
    }
  }
}
`;