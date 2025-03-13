import { graphqlClient } from '~/utils/graphql-client'
import { GET_PEOPLE_CATEGORIES } from '~/queries/getPeopleCategories'

const fetchPeopleCategories = async () => {
  return await graphqlClient.request(GET_PEOPLE_CATEGORIES)
}

export const usePeopleCategories = () => {
    return useQuery({
      queryKey: ['people-categories'],
      queryFn: fetchPeopleCategories,
      select: (data) => data.categoriesPeople.nodes,
    })
  }