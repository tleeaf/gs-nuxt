import { graphqlClient } from '~/utils/graphql-client'
import { GET_PROJECTS } from '~/queries/getProjects'

const fetchProjects = async () => {
  return await graphqlClient.request(GET_PROJECTS)
}

export const useProjects = () => {
    return useQuery({
      queryKey: ['projects'],
      queryFn: fetchProjects,
      select: (data) => data.pages.nodes
    })
  }