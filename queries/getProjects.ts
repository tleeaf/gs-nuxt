import { gql } from 'graphql-request';

export const GET_PROJECTS = gql`
query Projects {
  pages(where: {categoryName: "projects"}, first: 100) {
    nodes {
      slug
      title
      content
      projectCardFront
      projectCardBack
      about
      projectTitleImg
      btnColor
      featuredPriority
      websiteUrl
    }
  }
}
`