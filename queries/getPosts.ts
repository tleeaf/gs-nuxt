import { gql } from "graphql-request";

export const GET_POSTS = gql`
query Posts {
  posts(first: 100) {
    nodes {
      blueFrame
      content
      date
      draft
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      greenFrame
      mintFrame
      slug
      status
      title
      uri
      turquoiseFrame
      categories {
        nodes {
          name
        }
      }
      author {
        node {
          firstName
          lastName
          name
          avatar {
            url
          }
        }
      }
    }
  }
}

`;
