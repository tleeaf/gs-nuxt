import { graphqlClient } from '~/utils/graphql-client'
import { GET_MENU_ITEMS } from '~/queries/getMenuItems'

const fetchMenuItems = async () => {
  return await graphqlClient.request(GET_MENU_ITEMS)
}

export const useMenuItems = () => {
    return useQuery({
      queryKey: ['menu-items'],
      queryFn: fetchMenuItems
    })
  }