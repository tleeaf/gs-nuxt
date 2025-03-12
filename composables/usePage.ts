import {graphqlClient} from '~/utils/graphql-client'
import {GET_PAGE} from '~/queries/getPage'

// const fetchPage = async () => {
//   return await graphqlClient.request(GET_PAGE)
// }

// export const usePages = () => {
//     return useQuery({
//       queryKey: ['page'],
//       queryFn: fetchPage
//     })
//   }


  const fetchPage = async (id: string) => {
    return await graphqlClient.request(GET_PAGE, { id });
  };
  
  export const usePage = (id: string) => {
    return useQuery({
      queryKey: ["page", id], // Cache key includes `id` for dynamic data
      queryFn: () => fetchPage(id), // Pass `id` to fetch function
      enabled: !!id, // Only run query if `id` is truthy
    });
  };