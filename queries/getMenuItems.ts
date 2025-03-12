import { gql } from 'graphql-request'

export const GET_MENU_ITEMS = gql`
  query MenuItems {
  menuItems {
    nodes {
      id
      title
      url
      label
    }
  }
}
`
