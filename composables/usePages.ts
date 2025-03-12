import {graphqlClient} from '~/utils/graphql-client'
import {GET_PAGES} from '~/queries/getPages'

const fetchPages = async () => {
  return await graphqlClient.request(GET_PAGES)
}

export const usePages = () => {
    return useQuery({
      queryKey: ['pages'],
      queryFn: fetchPages,
      select: (data) => data.pages.nodes,
    })
  }
