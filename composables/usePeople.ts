import {graphqlClient} from '~/utils/graphql-client'
import {GET_PEOPLE} from '~/queries/getPeople'

const fetchPeople = async () => {
  return await graphqlClient.request(GET_PEOPLE)
}

export const usePeople = () => {
    return useQuery({
      queryKey: ['people'],
      queryFn: fetchPeople,
      select: (data) => data.people.nodes
    })
  }
