import { gql } from "graphql-request";

export const GET_PAGE = gql`
  query Page($id: ID!){
    page(id: $id) {
      content
      slug
      title
    }
  }
`;
